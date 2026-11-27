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
- `buildKennisbankRoutes()` leidt de verwachte url van elke kennisbankpagina af van de mapnaam
  (`src/content/pages/{nl,en}/kennisbank/<mapnaam>/index.md`): NL moet `/nl/kennisbank/<mapnaam>`
  zijn, EN `/knowledge-base/<mapnaam>` (geen taalprefix, ander segment dan "kennisbank" — bestaande
  EN-conventie voor deze sectie). De hub-pagina (`index.md` direct in `kennisbank/`, geen submap)
  moet respectievelijk `/nl/kennisbank` en `/knowledge-base` zijn. Komt de url in de front matter
  hier niet mee overeen (bijv. map `ai-specialisten` met url `/nl/kennisbank/test`), dan faalt de
  build met een Nederlandse melding die pagina-id, gevonden url en verwachte url noemt. Dezelfde
  functie controleert ook dat elk `id` uniek is binnen één taal (hetzelfde id in NL én EN is juist
  bedoeld, zie hieronder); een dubbel id binnen één taal faalt de build met een Nederlandse
  melding die beide bestanden en de taal noemt. Beide controles zitten in
  `scripts/kennisbank-routes.mjs` (los van `node:fs` getest, zie `npm test`).
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

**Inzichten** (`inzichten_en`/`inzichten_nl`, `src/content/articles/{en,nl}/<slug>/index.md`):
sinds de CMS-migratie van de inzichten (`planning/migratieplan-inzichten-cms.md`) staan ook de
inzichtenartikelen als losse markdown per taal, naar het patroon van de kennisbank hierboven
(create en delete staan AAN). Het veldschema wijkt af van de kennisbank/overige-collecties: geen
`url`/`parent`/`cluster`/`pageType`/`schema`/`navLabel`/`primaryCta` (dat zijn velden van de
`pages`-collectie), wel `category`/`tone`/`icon`/`featured`/`readingTime`/`summary`/`takeaways`/
`remember`/`related`/`order`/`counterpart`, het eigen schema van de `articles`-collectie in
`content.config.ts`. Die collectie gebruikt een eigen loader (front matter/body-splitsing met
een regex + js-yaml, net als `scripts/check-content.mjs`), bewust geen Astro's standaard
`glob()`-rendering: het `body`-veld blijft zo de kant-en-klare HTML die het al was, en loopt niet
alsnog door de remark-plugins van `astro.config.mjs` (servicetokens, RAG-remark-plugin), die
beide alleen op de `pages`-collectie draaien.

`counterpart` (optioneel) is, anders dan `id` hierboven, wel technisch load-bearing: het is de
slug van de vertaling van dit artikel in de andere taal, als die bestaat. `src/data/routes.ts`
(`buildArticleRoutes()`, zelfde patroon als `buildKennisbankRoutes()`) leidt hieruit de
sitemap-, hreflang- en taalwisselaar-route van elk artikel af, in plaats van uit een handmatige
lijst — zie fix/sitemap-automatisch. Een artikel zonder `counterpart` is gewoon eentalig live
(bijv. een net gepubliceerd NL-artikel zonder EN-vertaling); een `counterpart`-waarde die niet
bestaat in de andere taal laat de build hard falen met een duidelijke melding.

**Tijdelijke uitzondering: inzichten NIET via dit scherm bewerken (tot de blogreeks is
afgerond).** Ondanks dat de collecties hierboven technisch bestaan, gaan inhoudelijke
wijzigingen aan bestaande of nieuwe inzichtenartikelen voorlopig via de **dinsdagroutine**
(handmatige branch + extractiescript + dist-diff, zie de sectie "Conversiestap na de
CMS-migratie" in `planning/werkafspraak-publicatiedagen.md`), niet via Sveltia. Reden: zolang
deze CMS-migratie en de lopende blogreeks (NL+EN-parity, BLOG-01 t/m 12, nog meerdere branches te
mergen) allebei nog niet zijn afgerond, zou een directe CMS-opslag op branch `cms` naast die
blogbranches tot conflicten leiden tussen de twee manieren om dezelfde artikelen te wijzigen.
Deze uitzondering vervalt zodra Dave aangeeft dat beide trajecten zijn afgerond.

**Niet in het CMS:** dienstenpagina's, cases, RAG-blokken, data-bestanden, routes, componenten,
layouts, schema/JSON-LD.

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
5. **GitHub Actions inrichten** (sinds het besluit van 27 nov 2026, zie `docs/beslissingen.md`),
   zodat de merge en de deploy hierna automatisch lopen in plaats van via `cms-publish.ps1`: zie
   `docs/deploy-automation.md` voor de volledige, eenmalige inrichting (SSH-sleutels, GitHub-
   secrets). Stappen 1-4 hierboven blijven daarna nuttig als handmatige terugval.

## Workflow voor een tekstaanpassing

**Sinds Dave's besluit van 27 nov 2026 loopt dit automatisch via GitHub Actions**
(`.github/workflows/cms-merge.yml`, zie `docs/deploy-automation.md` voor de eenmalige inrichting
en `docs/beslissingen.md`). Dit vervangt de handmatige bevestigingsstap die hieronder nog wordt
beschreven voor `cms-publish.ps1`: er is geen "ja/nee"-moment meer, CI-groen is de enige poort.

1. Ga naar `freelanceaiconsultant.com/admin`, log in met het fine-grained token.
2. Open de pagina (kennisbank of een van de "overige pagina's"-collecties), pas de tekst aan,
   **Save**. Dit schrijft direct naar branch `cms` op GitHub (geen lokale stap nodig).
3. GitHub Actions test de wijziging tegen een lokale merge in `main` (content-check, build,
   check, test). Bij groen wordt die merge echt gepusht, `cms` gelijkgezet en de server
   gedeployed — zonder verdere stap van Dave. Bij rood blijven `cms`, `main` en de live site
   onaangeraakt; de falende regel staat bovenaan de samenvatting van de run (tabblad "Actions").
4. Een nieuwe of gewijzigde kennisbankpagina met `TEST`/`TODO`/`FIXME`/`lorem`/`xxx`/em-dash in
   een toegevoegde regel blokkeert de merge hard (geen override meer, zie
   `scripts/check-cms-content.mjs`); `LINK-TODO` zelf is daarvan uitgezonderd. Een wijziging die
   `src/content/articles/**` raakt (inzichten) blokkeert ook hard — die collecties staan
   technisch al in dit CMS, maar gaan voorlopig niet via dit scherm (zie de uitzondering
   hierboven).

**Handmatige terugval**, bijvoorbeeld als GitHub Actions niet beschikbaar is:
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
- **url** (alleen kennisbank_en/kennisbank_nl): `widget: hidden`, de gebruiker ziet of typt dit
  veld niet meer. `cms-publish.ps1` draait na de merge `node scripts/fix-kennisbank-urls.mjs`, dat
  de url van elke kennisbankpagina herschrijft naar wat bij haar mapnaam hoort (zelfde functie,
  `expectedKennisbankUrl()`, als `assertKennisbankUrl()` in `src/data/routes.ts` gebruikt om dit
  bij het bouwen te controleren). Commit dit als er iets te corrigeren was, vóór de build. Voor de
  "overige"-collecties (geen create, dus lager risico) blijft `url` een vrij tekstveld met hint.
- **parent** (alleen kennisbank_en/kennisbank_nl): select met de bestaande kennisbank-id's van die
  taal plus de hub (P08). Voor de "overige"-collecties blijft `parent` een vrij tekstveld (kan
  ook naar een pagina buiten de kennisbank verwijzen, geen relatie-widget beschikbaar over
  collecties heen); `id` blijft overal vrije tekst (geen eindige lijst om uit te kiezen).
- **primaryCta.href / secondaryCta.href**: select met de belangrijkste dienst-, cluster- en
  contactpagina's per taal (zie `&ctaHrefEn`/`&ctaHrefNl` in `config.yml`), voor alle vier de
  collecties. `content.config.ts` (`isValidHref()` in `src/data/routes.ts`) laat de build hard
  falen als een href toch geen bestaande, live route of volledige `https://`-URL is — dit vangt
  ook een href die buiten deze select om is ingevuld (bijv. door Claude Code). Uitzondering:
  `mailto:<site-email>` blijft geldig voor de oudere EN-kennisbankpagina's die dit al gebruikten
  vóórdat `/contact` in het Engels live was (zie `resolveContactHref()` in
  `src/lib/service-tokens.js`); nieuwe pagina's kiezen gewoon de contactpagina-optie.

Omdat YAML geen manier heeft om een deel van een anchor-lijst te overschrijven (de merge-sleutel
`<<` werkt alleen voor mappings, niet voor lijsten), staan de velden twee keer voluit in
`config.yml`: `&kennisbankFieldsEn`/`&kennisbankFieldsNl` (met het verborgen `url`-veld en de
`parent`/CTA-href-selects hierboven) en `&overigeFieldsEn`/`&overigeFieldsNl` (ongewijzigd:
`url`/`parent` blijven vrije tekst, alleen de CTA-href is ook hier een select).

## Byte-identiek-test

`node scripts/check-cms-roundtrip.mjs` simuleert een Sveltia-opslag (quotes weg, kale datums,
inline objecten als blokmapping uitgeschreven - zie `sveltiaRewrite()` in dat script) op één
pagina per CMS-collectie: een EN- en een NL-kennisbankpagina (`ai-examples`/`ai-voorbeelden`), een
EN- en een NL-pagina uit de "overige" collecties (`tarieven`, met prijstokens), en `ai-agents/build`
(de pagina die op 27 november 2026 de build brak via commit 550f9af op cms, zie onder). Bouwt twee
kopieën van de site (nooit de echte bestanden) en vergelijkt de gebouwde HTML. Uitkomst bij
oplevering: alle vijf pagina's byte-identiek, en beide builds slagen. Draai dit opnieuw na een
wijziging aan `content.config.ts` of aan de remark-plugins in `astro.config.mjs`.

**Kale datums (`published`/`updated`/`date`):** Sveltia quote een JJJJ-MM-DD-veld bij het opslaan
niet altijd. Een kale datum in YAML is geen tekst maar een timestamp; Astro's content-schema
verwachtte tot commit 550f9af alleen `z.string()` op die velden, dus de build faalde met "Expected
type string, received date". `content.config.ts` gebruikt nu `isoDateString` (een union van
`z.string()` en `z.date()` die een `Date` terugnormaliseert naar hetzelfde `"JJJJ-MM-DD"`-formaat)
op `published`/`updated` (pages) en `date`/`updated` (articles), zodat beide schrijfwijzen naar
identieke gerenderde HTML bouwen.

Daarnaast is bij de oplevering van fase 3 handmatig gecontroleerd dat een geheel NIEUWE
kennisbankpagina, aangemaakt in beide talen met een nieuw id, zonder enige routes.ts-wijziging
automatisch verschijnt in de sitemap, de hreflang-tags en de taalwisselaar. De testbestanden zijn
na de controle weer verwijderd (nooit gepubliceerd).

## Content-check

`node scripts/check-cms-content.mjs [main-ref] [cms-ref]` vergelijkt twee branches en
controleert:
- de toegevoegde regels op `TEST`, `TODO`, `FIXME` (hoofdlettergevoelig, dus "testen" blokkeert
  niet), `lorem`, `xxx` en em dashes (—). `TODO` heeft één uitzondering: `LINK-TODO` (de bewuste
  placeholder uit de publicatiedag-routine, `planning/werkafspraak-publicatiedagen.md`) telt niet
  als treffer;
- of een `{{price:...}}`, `{{pricelc:...}}`, `{{timing:...}}` of `{{title:...}}`-token in een
  gewijzigd bestand niet is verdwenen of veranderd ten opzichte van `main`;
- of de wijziging een bestand onder `src/content/articles/**` raakt (toegevoegd, gewijzigd of
  verwijderd) — inzichten-artikelen staan technisch al in dit CMS, maar gaan voorlopig niet via
  dit scherm (zie de uitzondering bovenaan dit document); elke treffer hier blokkeert.

Deze check geldt voor elk bestand dat in de diff voorkomt, dus ook voor de nieuwe
"overige"-collecties (bijv. tarieven) — niet alleen voor de kennisbank. Een NIEUW bestand (bestaat
nog niet op `main`) wordt behandeld als een lege basis: er zijn dan geen tokens om te verliezen,
dus geen treffer. `git show` schrijft in dat geval wel een "fatal: path ... does not exist"-regel
naar stderr; die wordt onderdrukt (`stdio: ['pipe', 'pipe', 'ignore']`) zodat dat niet als
verwarrende foutmelding op het scherm verschijnt terwijl de check zelf gewoon doorgaat.

Sinds de automatisering (`.github/workflows/cms-merge.yml`) is deze check een **harde blokkade
zonder override**: in de interactieve `cms-publish.ps1` kon een treffer nog bewust worden
genegeerd ("ja, toch doorgaan"); in GitHub Actions is er niemand om dat te vragen, dus stopt elke
treffer de merge. Draait sowieso alleen op de `cms`-branch (main↔cms-diff); raakt blogbranches
(`blog/...`) niet, dus een bewuste `LINK-TODO` in een nog te mergen blog wordt hierdoor niet
geblokkeerd — de uitzondering hierboven is een extra vangrail voor als dat ooit verandert.

`node scripts/check-cms-counterpart.mjs [main-ref] [cms-ref]` waarschuwt (blokkeert niet, exit-
code blijft 0) over twee dingen op `cms` t.o.v. `main`:
1. een NIEUW TOEGEVOEGDE kennisbankpagina zonder tegenhanger met hetzelfde `id` in de andere taal.
   Kijkt hiervoor alleen naar toegevoegde bestanden, niet naar de hele kennisbank: bestaande,
   bewust eentalige pagina's geven dus geen waarschuwing.
2. een TOEGEVOEGDE of GEWIJZIGDE kennisbankpagina waarvan `cluster` of `parent` niet overeenkomt
   met haar tegenhanger (zelfde `id`) in de andere taal, als die tegenhanger bestaat.

Unit tests: `npm test`. Zowel `.github/workflows/cms-merge.yml` als `cms-publish.ps1` (de
handmatige terugval) roepen `check-cms-content.mjs` en `check-cms-counterpart.mjs` aan voor elke
publicatie, en draaien na de merge ook `scripts/fix-kennisbank-urls.mjs` (zie hierboven) vóór de
build.

## Bekende valkuilen in `cms-publish.ps1` zelf

- Elke `git diff`/`git log` die rechtstreeks naar het scherm schrijft (stap 2 en 3) gebruikt
  `--no-pager`. Zonder die vlag opent git de pager (`less`) en blijft het script hangen op
  `(END)` zodra de output niet in één scherm past.
- Het script zet bovenin `[Console]::OutputEncoding = [System.Text.Encoding]::UTF8`. Zonder dat
  tonen aanhalingstekens in commitberichten (bijv. uit Sveltia) als `ΓÇ£`/`ΓÇ¥` in plaats van
  `"`/`"`.
