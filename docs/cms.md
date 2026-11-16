# CMS voor de kennisbank

Een bewerkscherm op `/admin` voor kleine tekstaanpassingen aan bestaande kennisbankpagina's,
zonder Claude Code. Wijzigingen gaan nooit direct live: ze komen op branch `cms`, en
`cms-publish.ps1` controleert, merget, bouwt, test, pusht en deployt.

## Scope

**Wel in het CMS:** de kennisbank, EN (`src/content/pages/en/kennisbank/**/index.md`) en NL
(`src/content/pages/nl/kennisbank/**/index.md`). Alleen bestaande pagina's: aanmaken en
verwijderen staan uit in de collectie-configuratie.

**Niet in het CMS:** dienstenpagina's, home, over, werkwijze, cases, inzichten, RAG-blokken,
data-bestanden, routes, componenten, layouts, schema/JSON-LD. Inzichten staan er nu niet in omdat
de NL-brontekst in `.js`-bestanden staat (geen markdown/YAML/JSON), niet omdat ze minder
belangrijk zijn, zie `planning/migratieplan-inzichten-cms.md` voor een eventueel vervolg.

Nieuwe kennisbankpagina's (nieuw id, cluster, interne links, RAG-afstemming) en alle inzichten
blijven via Claude Code lopen, met de volledige verificatie.

## Eenmalige stappen (Dave)

1. **Token aanmaken.** GitHub → Settings → Developer settings → Personal access tokens →
   Fine-grained tokens. Alleen deze repository (`MrDaveNL/FreelanceAIConsultant`), permissie
   Contents: Read and write, met een vervaldatum. Geen andere permissies nodig.
2. **Branch `cms` aanmaken** (eenmalig, lokaal met git of via GitHub):
   ```
   git push origin main:cms
   ```
3. **`cms-publish.ps1` invullen.** Vul `$Server` in boven in het bestand (bijv.
   `root@203.0.113.10`). Dit bestand staat in `.gitignore`, dus het serveradres komt niet op
   GitHub.
4. **Unblock-File.** Omdat het script van buiten Windows komt (via git), kan Windows het
   blokkeren. Eenmalig in PowerShell, in de projectmap:
   ```
   Unblock-File .\cms-publish.ps1
   ```

## Workflow voor een tekstaanpassing

1. Ga naar `freelanceaiconsultant.com/admin`, log in met het fine-grained token.
2. Open de kennisbankpagina, pas de tekst aan, **Save**. Dit schrijft direct naar branch `cms`
   op GitHub (geen lokale stap nodig).
3. Op je eigen machine, in de projectmap:
   ```
   .\cms-publish.ps1
   ```
   Dit haalt de wijziging op, laat de diff zien, controleert op TEST/TODO/FIXME/lorem/xxx,
   em dashes en prijstokens, vraagt een bevestiging, merget naar `main`, bouwt en test de hele
   site, pusht, en deployt naar de server. Bij een fout op elk punt stopt het script en blijft
   de live site ongewijzigd.

## Wat Sveltia bij een "Save" verandert aan de front matter

Getest met een echte EN- en NL-kennisbankpagina (zie "Byte-identiek-test" hieronder). Een opslag
zonder inhoudelijke wijziging verandert in de YAML-opmaak van de front matter, nooit in de
gebouwde HTML:

- Quotes: `"2026-10-27"` wordt `'2026-10-27'`, een tekst met een `:` erin krijgt enkele
  aanhalingstekens, een tekst zonder speciale tekens verliest zijn aanhalingstekens helemaal.
- Objecten op één regel (`primaryCta: { label: "...", href: ... }`) worden uitgeschreven over
  meerdere regels (`primaryCta:\n  label: ...\n  href: ...`).
- De sleutelvolgorde en inspringing blijven gelijk aan de bestaande velden in `content.config.ts`.

Dit is cosmetisch: de Zod-schema's in `content.config.ts` gebruiken overal `z.string()` voor
datums (nooit `z.date()`), dus geen enkel veld breekt hierop.

Eén bekende nuance: `parent: null` (bij de kennisbank-hub, `kennisbank/index.md`) kan door het
CMS worden opgeslagen als een leeg tekstveld in plaats van `null`. Niets in de build leest het
`parent`-veld (alleen `planning/check-content.mjs` leest de planning-spec, niet dit veld), dus
dit heeft geen effect op de site. Controleer dit voor de zekerheid bij de eerste echte opslag
van die pagina.

## Byte-identiek-test

`node scripts/check-cms-roundtrip.mjs` simuleert een Sveltia-opslag (front matter laden en
opnieuw dumpen met js-yaml) op een EN- en een NL-kennisbankpagina, bouwt twee kopieën van de
site (nooit de echte bestanden) en vergelijkt de gebouwde HTML. Uitkomst bij oplevering: beide
pagina's byte-identiek. Draai dit opnieuw na een wijziging aan `content.config.ts` of aan de
remark-plugins in `astro.config.mjs`.

## Content-check

`node scripts/check-cms-content.mjs [main-ref] [cms-ref]` vergelijkt twee branches en
controleert:
- de toegevoegde regels op `TEST`, `TODO`, `FIXME` (hoofdlettergevoelig, dus "testen" blokkeert
  niet), `lorem`, `xxx` en em dashes (—);
- of een `{{price:...}}`, `{{pricelc:...}}`, `{{timing:...}}` of `{{title:...}}`-token in een
  gewijzigd bestand niet is verdwenen of veranderd ten opzichte van `main`.

Unit tests: `npm test`. `cms-publish.ps1` roept dit script aan voor elke publicatie.
