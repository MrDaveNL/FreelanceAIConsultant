# GitHub Actions: eenmalige inrichting

Dave heeft op 27 nov 2026 besloten dat testen, mergen (cms -> main) en deployen vanaf nu via
GitHub Actions lopen, in plaats van via de handmatige route `cms-publish.ps1`/Claude Code (zie
`docs/cms.md` en `docs/beslissingen.md`). Dit document is de eenmalige inrichting die dat
mogelijk maakt. Niets hierin voert zichzelf uit: elke stap hieronder is iets wat Dave zelf doet,
op zijn eigen machine of op de server.

Er zijn **twee verschillende SSH-sleutels**, met tegengestelde richting. Niet verwisselen:

- **Sleutel A — de server haalt de repo op bij GitHub** (read-only "deploy key", ingesteld in de
  GitHub-repo-instellingen). Nodig omdat de server niet-interactief pullt; een https-remote faalt
  daar op "could not read Username".
- **Sleutel B — GitHub Actions logt in op de server** (ingesteld in `authorized_keys` op de VPS,
  afgedwongen tot exact `deploy/deploy.sh`). Dit is de sleutel die in de GitHub-repository-secrets
  komt.

Beide zijn uniek voor déze repository. De sleutels van echion.link (`echion-deploy-key` e.d.)
hergebruiken werkt niet en moet ook niet: elke sleutel hoort bij precies één repo/server-paar.

## 1. Sleutel A: de VPS leest de repo niet-interactief

Op de VPS, als de gebruiker die ook `deploy.sh` draait (root, zoals nu al in DEPLOY.md):

```
ssh-keygen -t ed25519 -f ~/.ssh/freelanceaiconsultant-pull-key -C "freelanceaiconsultant-vps-pull" -N ""
cat ~/.ssh/freelanceaiconsultant-pull-key.pub
```

Plak de output bij GitHub: repo -> **Settings -> Deploy keys -> Add deploy key**. Geef hem een
duidelijke naam (bijv. "VPS pull key"), laat **"Allow write access" uit** (read-only is genoeg,
de VPS pullt alleen).

Zet de repo op de VPS daarna op de SSH-remote en wijs 'm repo-lokaal naar deze sleutel (dus niet
systeembreed via `~/.ssh/config`, zodat deze sleutel nergens anders per ongeluk wordt gebruikt):

```
cd /var/www/freelanceaiconsultant
git remote set-url origin git@github.com:MrDaveNL/FreelanceAIConsultant.git
git config core.sshCommand "ssh -i ~/.ssh/freelanceaiconsultant-pull-key -o IdentitiesOnly=yes"
```

Github zelf moet ook bekend staan bij de VPS (eenmalig, los van de secrets hieronder):

```
ssh-keyscan github.com >> ~/.ssh/known_hosts
```

Test: `git fetch origin main` zou nu moeten werken zonder wachtwoord/token-vraag.

## 2. Sleutel B: GitHub Actions logt in op de VPS, en mag daar maar één ding doen

Op je eigen machine (niet de server):

```
ssh-keygen -t ed25519 -f ./freelanceaiconsultant-deploy-key -C "github-actions-deploy" -N ""
```

Dit schrijft `freelanceaiconsultant-deploy-key` (privé) en `freelanceaiconsultant-deploy-key.pub`
in de huidige map.

Als root op de VPS, de publieke helft toevoegen aan `authorized_keys` met een geforceerd
commando, zodat deze sleutel nooit iets anders kan doen dan `deploy/deploy.sh` draaien - geen
shell, geen ander commando, geen port forwarding. `bash` ervoor betekent dat het script geen
eigen uitvoerrechten (`chmod +x`) nodig heeft:

```
printf 'restrict,command="bash /var/www/freelanceaiconsultant/deploy/deploy.sh" %s\n' \
  "$(cat freelanceaiconsultant-deploy-key.pub)" >> /root/.ssh/authorized_keys
```

(Draai de `cat` op de machine met het `.pub`-bestand; plak de output in de `printf` hierboven als
je dit rechtstreeks op de server intypt.) Controleer de regel:

```
tail -n 1 /root/.ssh/authorized_keys
```

Moet lijken op: `restrict,command="bash /var/www/freelanceaiconsultant/deploy/deploy.sh"
ssh-ed25519 AAAA... github-actions-deploy`.

## 3. De hostsleutel van de server vastpinnen

Vanaf een machine die de server al vertrouwt (jouw eigen machine):

```
ssh-keyscan jouw-server-ip > known_hosts_line.txt
```

(Voeg `-p <poort>` toe vóór het ip-adres als ssh niet op poort 22 draait.) Bewaar dit bestand; de
inhoud gaat in een secret hieronder. Dit laat de workflow de identiteit van de server verifiëren
tegen een sleutel die je zelf hebt vastgelegd, niet tegen wat er bij de eerste verbinding antwoordt.

## 4. GitHub-repository-secrets

Repo -> **Settings -> Secrets and variables -> Actions -> New repository secret**:

| Secret | Waarde |
| --- | --- |
| `DEPLOY_SSH_HOST` | het ip-adres of de hostnaam van de server |
| `DEPLOY_SSH_PORT` | alleen als ssh niet op poort 22 draait; anders overslaan (workflow valt terug op 22) |
| `DEPLOY_SSH_USER` | `root` |
| `DEPLOY_SSH_KEY` | de volledige inhoud van `freelanceaiconsultant-deploy-key` (privésleutel uit stap 2, inclusief de `BEGIN`/`END`-regels) |
| `DEPLOY_SSH_KNOWN_HOSTS` | de volledige inhoud van `known_hosts_line.txt` uit stap 3 |
| `ACTIVEPIECES_WEBHOOK_URL` | optioneel; ontbreekt dit secret, dan slaat elke workflow-run de notificatiestap over (geen foutmelding) |

Verwijder `freelanceaiconsultant-deploy-key`, `freelanceaiconsultant-deploy-key.pub` en
`known_hosts_line.txt` van je eigen machine zodra ze geplakt zijn; niets hiervan hoort in de repo
of ergens anders bewaard te worden.

## 5. Workflow-permissies: alleen-lezen blijft de repository-brede instelling

De cms-merge- en de cms-sync-stap pushen naar `main` en `cms`, met het automatische
`GITHUB_TOKEN` van de workflow - er is geen los token nodig. **Settings -> Actions -> General ->
Workflow permissions** blijft op **"Read repository contents permission"** (alleen-lezen) staan.

Dat werkt omdat GitHub's eigen `permissions`-sleutel in een workflow- of jobdefinitie rechten mag
*toevoegen* ten opzichte van die repository-brede default, niet alleen wegnemen (zie GitHub's
documentatie over "controlling permissions for GITHUB_TOKEN" en de vergelijkbare uitzondering voor
Dependabot-pull-requests, die ook met een read-only token start en via `permissions` wordt
opgehoogd). Beide workflows zetten daarom `permissions: contents: read` op workflow-niveau, en
alleen de ene job die daadwerkelijk pusht (`verify-and-merge` in `cms-merge.yml`, `sync-cms` in
`main.yml`) krijgt zijn eigen `permissions: contents: write`. Elke andere job in deze repo - ook
een toekomstige, per ongeluk te ruim geschreven workflow - heeft met `GITHUB_TOKEN` alleen
leestoegang, precies zoals de repository-instelling voorschrijft.

Een bijkomend voordeel van `GITHUB_TOKEN` hier (in plaats van een los persoonlijk token): een push
die `GITHUB_TOKEN` zelf doet, triggert geen andere workflow-run. `cms-merge.yml`'s push naar
`main` start dus niet alsnog een aparte run van `main.yml` (en dus geen dubbele deploy); daarom
deployt `cms-merge.yml` ook zelf, direct na de merge, in plaats van op zo'n trigger te wachten.
Diezelfde eigenschap voorkomt dat `main.yml`'s eigen push naar `cms` een nieuwe `cms-merge.yml`-run
start. De twee aparte vangrails die beide workflow-bestanden al hebben (de commit-identiteitscheck
in `main.yml`, de `has_changes`-check in `cms-merge.yml`) blijven erin staan als extra zekerheid,
maar de werking van de automatisering hangt er niet van af - alleen van deze eigenschap van
`GITHUB_TOKEN`.

Als `main` een branch-protectionregel heeft die pull requests of status checks verplicht, voeg
dan een uitzondering toe voor `github-actions[bot]` (of schakel "Require a pull request before
merging" voor deze ene automatisering uit) - anders wordt dezelfde push daar alsnog geweigerd.

## Klaar, zodra dit allemaal klopt

Push een kleine wijziging naar `cms` (of rechtstreeks naar `main`) en bekijk de run onder het
tabblad "Actions" van de repo. Een groene run eindigt met een herdeployde server; een rode run
toont de falende check bovenaan de samenvatting, en laat bij een `cms`-push `cms`, `main` en de
live site onaangeraakt.

## Als dit ooit terug moet

- Verwijder de ene `restrict,command=...`-regel uit `/root/.ssh/authorized_keys` om sleutel B
  in te trekken, zonder andere toegang tot de server te raken.
- Verwijder de deploy key bij GitHub (**Settings -> Deploy keys**) om sleutel A in te trekken.
- `cms-publish.ps1` (zie `docs/cms.md`) blijft werken als handmatige terugval; niets in deze
  opzet verwijdert dat script.
- `deploy/rollback.sh [n]` wijst de live `releases/`-map terug naar een eerdere, als een deploy
  zelf wel slaagde maar het resultaat niet klopte.
