# Briefing: Sveltia CMS voor freelanceaiconsultant.com

Repo: `C:\Users\davan\Projects\Freelanceaispecialist\freelanceaispecialist-astro` (GitHub: MrDaveNL/FreelanceAIConsultant)
Server: `/var/www/freelanceaiconsultant` (git checkout), nginx serveert de symlink `live` naar een map onder `releases/`.
Referentie: dezelfde opzet draait sinds november 2026 op echion.link (repo EchionSite). Werk daarvan over wat past, maar ga uit van deze repo, niet van aannames.

## Harde regels (gelden voor alles hieronder)

1. **Niet pushen.** Dave pusht en deployt zelf. Commit lokaal.
2. **Bestaande content wordt niet aangeraakt.** Het CMS leest en schrijft bestaande bestanden alleen als Dave er zelf in bewerkt. De implementatie zelf mag geen enkel content-bestand wijzigen, ook niet "netjes maken".
3. **Geen prijzen op dienstenpagina's**, geen uurtarief, geen "20 jaar"-claim terugzetten. Het CMS maakt dat niet mogelijk via vaste velden.
4. **Geen em dashes** in output, docs of UI-teksten. Nooit "gids", altijd "kennisbank" waar het om een kennisbank gaat.
5. **Talen:** EN op de root, NL onder /nl. Alleen EN en NL.
6. Elke beslissing die afwijkt van deze briefing: vastleggen in de beslissingen-log van de repo (of aanmaken in `docs/beslissingen.md`) met reden.

## Doel

Dave wil kleine tekstaanpassingen in blogs en inzichten doen via een bewerkscherm op `freelanceaiconsultant.com/admin`, zonder Claude Code. Wijzigingen gaan nooit direct live: ze komen op branch `cms`, en een lokaal script controleert, merget, pusht en deployt.

## Fase 1: analyse (eerst rapporteren, nog niets bouwen)

Rapporteer aan Dave:

1. **Contentstructuur.** Waar staan blogs, inzichten en andere markdown/MDX-content (`src/content/...`)? Per collectie: pad, bestandsformaat (.md of .mdx), hoe EN en NL zijn georganiseerd (mappen per taal, suffix in bestandsnaam, of los).
2. **Vertaalparen.** Hebben EN en NL dezelfde bestandsnaam/slug of een eigen slug per taal? Hoe worden ze gekoppeld (veld in front matter, routes, i18n-config)?
3. **Front matter per collectie.** Alle velden met type, verplicht/optioneel, en welke per taal verschillen en welke gedeeld zijn (datum, auteur, afbeelding).
4. **Zod-schema's** in `src/content/config.ts` (of `content.config.ts`). Let op: een YAML-dumper zet datums soms tussen aanhalingstekens (`"2026-11-06"`). Werkt het schema met `z.date()` in plaats van `z.coerce.date()`, dan breekt de build na de eerste CMS-opslag. Rapporteer per datumveld of dat risico er is.
5. **MDX.** Bevatten artikelen MDX-componenten (imports, `<Component />`)? Die mogen niet via het CMS bewerkt kunnen worden als het CMS ze kan beschadigen. Rapporteer welke bestanden dit betreft.
6. **RAG-blokken.** Waar zitten de RAG-ready blokken (in de markdown, in losse data-bestanden, in componenten)? Die blijven buiten het CMS.
7. **Afbeeldingen.** Staan ze in `src/assets` (Astro-optimalisatie) of `public/`? Wat betekent dat voor `media_folder` en `public_folder`?
8. **Sveltia i18n.** Zoek in de Sveltia-docs (github.com/sveltia/sveltia-cms) hoe dit past: `multiple_files`, `multiple_folders`, of een eigen slug per taal. Bij echion.link bleek dat Sveltia bij een eigen slug per taal een `translationKey`-veld terugschrijft; daar is gekozen voor losse collecties per taal. Geef hier een eigen advies op basis van wat je in deze repo vindt.
9. **Deploy.** Lees DEPLOY.md en de echte situatie (let op: `/var/www/freelanceaiconsultant` is zelf de git checkout, er is geen `repo/`-submap, DEPLOY.md beschreef dat eerder fout). Hoe wordt nu een release gebouwd en de `live`-symlink omgezet? Het publish-script moet precies die procedure volgen.
10. **nginx en robots.** Hoe wordt een niet-indexeerbaar pad nu afgeschermd: via robots.txt of via X-Robots-Tag? Volg wat de site nu doet. Is robots.txt allow-all zonder Disallow-regels, voeg dan geen Disallow toe: een geblokkeerde pagina kan zijn noindex niet laten zien.

Stop na deze fase en wacht op akkoord van Dave.

## Fase 2: bouwen (na akkoord)

### 2.1 Admin-scherm
- `public/admin/index.html` met het Sveltia-script van unpkg (`@sveltia/cms`) en `<meta name="robots" content="noindex, nofollow">`.
- `public/admin/config.yml`:
  - `backend: github`, `repo: MrDaveNL/FreelanceAIConsultant`, `branch: cms` (nooit main).
  - Inloggen met een fine-grained personal access token, geen OAuth-proxy.
  - Locales `en` (default) en `nl`, structuur volgens het advies uit fase 1.
  - Collecties alleen voor blogs en inzichten. Velden 1-op-1 op de bestaande front matter; gedeelde velden als `i18n: duplicate`.
  - De body als gewoon tekstveld (`text`), niet als markdown-editor, zodat Sveltia de markdown niet herschrijft. (Zo staat het ook op echion.link.)
  - **Niet in het CMS:** dienstenpagina's, homepage, over, werkwijze, cases (tenzij Dave dat apart vraagt), RAG-blokken, data-bestanden, routes, componenten, layouts, schema/JSON-LD.
- `/admin` buiten de sitemap (`@astrojs/sitemap` filter) en niet in navigatie of interne links.

### 2.2 Front-matter-veiligheid
- Test: laat een YAML-dumper (js-yaml) een bestaand blog en een bestaand inzicht in beide talen opnieuw wegschrijven, zoals Sveltia dat doet. Bouw daarna opnieuw. De gebouwde HTML moet byte-identiek zijn aan die van voor de dump.
- Lukt dat niet (bijvoorbeeld door `z.date()` of een eigen parser), los het op in de parser of het schema, met een unit test. Pas geen content-bestanden aan.
- Een opslag zonder wijzigingen in het CMS mag hooguit een lege regel na de front matter opleveren als diff. Documenteer wat Sveltia standaard verandert.

### 2.3 nginx
- Geef Dave het exacte plakblok voor de live nginx-config, in de server-blok voor 443:
  ```
  location ^~ /admin/ {
      add_header X-Robots-Tag "noindex, nofollow" always;
      try_files $uri /admin/index.html =404;
  }
  location = /admin {
      add_header X-Robots-Tag "noindex, nofollow" always;
      try_files /admin/index.html =404;
  }
  ```
  Pas `root`/paden aan op hoe de `live`-symlink wordt geserveerd. Let op: `try_files $uri =404` alleen geeft een 404 op `/admin/`.
- Vraag Dave om de huidige live config (`sudo cat` van het juiste bestand) en vergelijk die met een eventuele referentieconfig in de repo. Rapporteer verschillen, maar overschrijf niets.

### 2.4 Content-check voor CMS-wijzigingen
- Script `scripts/check-cms-content.ts` (of passend in de bestaande tooling): controleert alleen toegevoegde regels in de diff van `cms` ten opzichte van `main` op `TEST`, `TODO`, `FIXME`, `lorem`, `xxx` (hoofdlettergevoelig waar nodig, zodat "testen" niet blokkeert) en op em dashes. Met unit tests.
- Neem het op in `npm test` of maak een apart commando dat het publish-script aanroept.

### 2.5 Publish-script voor Dave
- `cms-publish.ps1` in de root, naar het voorbeeld van echion.link, met deze stappen:
  1. `git fetch origin`, naar `main`, `git merge --ff-only origin/main`.
  2. Geen commits in `main..origin/cms`: melden en stoppen.
  3. Commits, `--stat` en de gekleurde diff laten zien.
  4. Content-check op de toegevoegde regels; bij een treffer vragen of het bewust is.
  5. Bevestiging vragen.
  6. `git merge --no-ff origin/cms`; bij conflict `git merge --abort` en stoppen.
  7. De volledige test- en buildcommando's van deze repo; bij falen `git reset --merge ORIG_HEAD` en stoppen.
  8. `git push origin main`, daarna `git push origin main:cms` (nooit `--force`).
  9. Deploy via `ssh` volgens de bestaande release-procedure (nieuwe map onder `releases/`, bouwen, `live`-symlink pas omzetten als de build slaagt). Neem de exacte commando's uit DEPLOY.md, na correctie in fase 1.
- Serveradres als variabele bovenin (`$Server = "root@JOUW-SERVER-IP"`). Zet `cms-publish.ps1` in `.gitignore`, zodat het adres niet op GitHub komt.
- Schrijf alle meldingen in het Nederlands.

### 2.6 Documentatie
- `docs/cms.md`:
  - Een token aanmaken: GitHub > Settings > Developer settings > Fine-grained tokens, alleen deze repo, Contents: Read and write, met vervaldatum.
  - Eenmalig de branch `cms` aanmaken: `git push origin main:cms`.
  - De workflow: bewerken in /admin > Save > `.\cms-publish.ps1` > live.
  - Wat wel en niet via het CMS loopt.
  - Nieuwe blogs en inzichten blijven via Claude Code lopen, met de volledige verificatie (en NL en EN op dezelfde dag, zoals afgesproken).
- `CLAUDE.md`: een regel toevoegen dat branch `cms` na elke push naar main gelijk moet worden gezet (`git push origin main:cms`), en dat Claude Code dit aan het eind van elk rapport noemt als main is gewijzigd.

## Fase 3: testen

1. Volledige build en alle tests groen.
2. De byte-identiek-test uit 2.2 voor minstens één blog en één inzicht per taal.
3. Content-check: een diff met "TEST" blokkeert, een diff met "testen" niet.
4. Lokaal `dist/admin/index.html` en `dist/admin/config.yml` aanwezig; `/admin` niet in de sitemap.

## Oplevering

Een rapport met:
- de keuzes uit fase 1 (structuur, i18n, datumrisico, MDX, afbeeldingen);
- de uitkomst van de byte-identiek-test;
- het nginx-plakblok en de gevonden verschillen met de live config;
- de stappen die Dave zelf moet doen: token aanmaken, branch `cms` aanmaken, pushen, nginx-blok plakken, serveradres in `cms-publish.ps1` invullen, `Unblock-File .\cms-publish.ps1`;
- een testplan voor de eerste echte CMS-wijziging: "TEST" toevoegen in /admin, publiceren, met curl controleren, weer weghalen.

Lokaal committen, niet pushen.
