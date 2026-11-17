# CMS voor de kennisbank en de overige contentpagina's

Een bewerkscherm op `/admin` voor tekstaanpassingen aan de markdown-pagina's onder
`src/content/pages`, zonder Claude Code. Wijzigingen gaan nooit direct live: ze komen op branch
`cms`, en `cms-publish.ps1` controleert, merget, bouwt, test, pusht en deployt.

## Scope

**Kennisbank** (`kennisbank_en`/`kennisbank_nl`, `src/content/pages/{en,nl}/kennisbank/**/index.md`):
create en delete staan AAN. Een nieuwe of verwijderde pagina werkt zonder handwerk in
`routes.ts`:
- `src/data/routes.ts` leidt de kennisbank-routes (sitemap, hreflang, taalwisselaar) automatisch
  af uit de front matter (`id`, `url`, `noindex`) van deze bestanden, in plaats van uit een
  handmatige lijst. Zie `buildKennisbankRoutes()` in dat bestand.
- `src/pages/[...slug].astro` faalt de build met een duidelijke melding (pagina-id, url, taal) als
  een contentpagina — kennisbank of niet — toch geen `live` route heeft. Dit is het vangnet: een
  nieuwe pagina kan nooit stil uit de sitemap/hreflang verdwijnen omdat iemand een routes.ts-regel
  vergat.
- `identifier_field: navLabel` in `config.yml` zorgt dat de mapnaam van een nieuwe pagina op het
  korte navigatielabel wordt gebaseerd (bijv. "ai-tools"), niet op de lange titelzin.
- `cms-publish.ps1` waarschuwt (blokkeert niet) als een nieuwe kennisbankpagina geen tegenhanger
  met hetzelfde `id` in de andere taal heeft, via `scripts/check-cms-counterpart.mjs`. Bestaande
  eentalige pagina's (bijv. `ai-specialist-salaris`, met opzet NL-only) geven geen waarschuwing:
  de check kijkt alleen naar bestanden die op `cms` zijn toegevoegd.

**Overige contentpagina's** (`overige_pagina_en`/`overige_pagina_nl`): alle andere markdown onder
`src/content/pages/{en,nl}` (de 12 clusters: ai-consultancy, ai-implementatie, ai-automatisering,
ai-voor-bedrijven, ai-development, ai-agents, ai-beleid, ai-workshop, markten, partnernetwerk,
tarieven). Dit zijn `files`-collecties (een vaste lijst van bestaande bestanden, geen `folder`):
er is daardoor geen create/delete-knop, ook niet per ongeluk. Tarieven zit hierin net als de
andere clusters: de bestaande tokencheck (zie "Content-check" hieronder) geldt voor elk gewijzigd
bestand, dus ook voor `{{price:...}}`/`{{timing:...}}` op de tarievenpagina.

**Niet in het CMS:** dienstenpagina's, cases, inzichten, RAG-blokken, data-bestanden, routes,
componenten, layouts, schema/JSON-LD. Inzichten staan er nu niet in omdat de NL-brontekst in
`.js`-bestanden staat (geen markdown/YAML/JSON), niet omdat ze minder belangrijk zijn, zie
`planning/migratieplan-inzichten-cms.md` voor een eventueel vervolg.

**Home, over, werkwijze** staan ook niet in het CMS: dit zijn geen markdown-pagina's in
`src/content/pages`, maar hardcoded `.astro`-pagina's (`src/pages/index.astro`, `about.astro`,
`approach.astro`) die tekst uit `src/data/site.js`, `process.js` en `faq.js` halen. Ze delen het
front-matter-schema van `content.config.ts` niet, en zijn dus geen kandidaat voor dezelfde
collectie-aanpak zonder eerst hun inhoud te migreren naar structured content. Zie
`planning/migratieplan-kernpaginas-cms.md` voor een eventueel vervolg, naast
`migratieplan-inzichten-cms.md` voor de inzichten.

Nieuwe pagina's in de overige clusters (nieuw id, cluster, interne links, RAG-afstemming),
diensten, cases en alle inzichten blijven via Claude Code lopen, met de volledige verificatie.

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
2. Open de pagina (kennisbank of een van de "overige pagina's"-collecties), pas de tekst aan,
   **Save**. Dit schrijft direct naar branch `cms` op GitHub (geen lokale stap nodig).
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

## Verplichte velden: select of hint in plaats van vrije tekst

Om te voorkomen dat een nieuwe kennisbankpagina met een foute waarde wordt opgeslagen, zijn de
verplichte velden in `config.yml` waar mogelijk een `select` met de daadwerkelijke, site-brede
waardenset (gevonden door alle bestaande pagina's onder `src/content/pages` te doorzoeken):
- **cluster**: select met de 10 genummerde secties plus "Kernpagina's"/"Core pages", default
  "10. Kennisbank AI tools" / "10. Knowledge base AI tools" (de kennisbank-sectie).
- **pageType**: select met Hub/Spoke/Branche (NL) of Sector (EN) /Kennisbank/"Kennisbank
  hub"/"Conversie / tarieven"/"Trust / partnernetwerk" (en de EN-equivalenten), default
  "Kennisbank"/"Knowledge base".
- **schema**: select service/article/collection/pricing (ongewijzigd), default `article`.
- **id** en **parent** blijven vrije tekstvelden met een hint en voorbeeld: `id` moet uniek zijn
  op de hele site (geen eindige lijst om uit te kiezen), en `parent` kan naar een pagina buiten
  de kennisbank verwijzen (geen relatie-widget beschikbaar over collecties heen).

Deze selects gelden voor alle vier de collecties (ze delen hetzelfde front-matter-schema via een
YAML-anchor, `&pagesFieldsEn`/`&pagesFieldsNl` in `config.yml`), ook al komt bijvoorbeeld
"Branche" in de praktijk alleen voor op markten-pagina's.

## Byte-identiek-test

`node scripts/check-cms-roundtrip.mjs` simuleert een Sveltia-opslag (front matter laden en
opnieuw dumpen met js-yaml) op één pagina per CMS-collectie: een EN- en een NL-kennisbankpagina
(`ai-examples`/`ai-voorbeelden`) en een EN- en een NL-pagina uit de "overige" collecties
(`tarieven`, met prijstokens). Bouwt twee kopieën van de site (nooit de echte bestanden) en
vergelijkt de gebouwde HTML. Uitkomst bij oplevering: alle vier pagina's byte-identiek. Draai dit
opnieuw na een wijziging aan `content.config.ts` of aan de remark-plugins in `astro.config.mjs`.

Daarnaast is bij de oplevering van fase 3 handmatig gecontroleerd dat een geheel NIEUWE
kennisbankpagina, aangemaakt in beide talen met een nieuw id, zonder enige routes.ts-wijziging
automatisch verschijnt in de sitemap, de hreflang-tags en de taalwisselaar. De testbestanden zijn
na de controle weer verwijderd (nooit gepubliceerd).

## Content-check

`node scripts/check-cms-content.mjs [main-ref] [cms-ref]` vergelijkt twee branches en
controleert:
- de toegevoegde regels op `TEST`, `TODO`, `FIXME` (hoofdlettergevoelig, dus "testen" blokkeert
  niet), `lorem`, `xxx` en em dashes (—);
- of een `{{price:...}}`, `{{pricelc:...}}`, `{{timing:...}}` of `{{title:...}}`-token in een
  gewijzigd bestand niet is verdwenen of veranderd ten opzichte van `main`.

Deze check geldt voor elk bestand dat in de diff voorkomt, dus ook voor de nieuwe
"overige"-collecties (bijv. tarieven) — niet alleen voor de kennisbank.

`node scripts/check-cms-counterpart.mjs [main-ref] [cms-ref]` waarschuwt (blokkeert niet) als een
op `cms` NIEUW TOEGEVOEGDE kennisbankpagina geen tegenhanger met hetzelfde `id` in de andere taal
heeft. Kijkt alleen naar toegevoegde bestanden, niet naar de hele kennisbank: bestaande, bewust
eentalige pagina's geven dus geen waarschuwing.

Unit tests: `npm test`. `cms-publish.ps1` roept `check-cms-content.mjs` en
`check-cms-counterpart.mjs` aan voor elke publicatie.
