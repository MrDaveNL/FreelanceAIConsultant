# Migratieplan: inzichten naar markdown per artikel per taal (optie 3)

Status: plan, niet uitgevoerd. Alleen lezen en ontwerpen, geen bestand in `src/content`,
`src/data` of `content.config.ts` is hiervoor aangepast. Dave beslist na dit plan of, en wanneer,
dit traject start.

## Waarom dit nodig is voor een CMS op de inzichten

Zie `docs/beslissingen.md`. NL-inzichten staan in `src/data/articles/*.js` (één bestand per
artikel, JS-objectliteral), machinaal overschreven naar `src/content/articles/all.json` vóór
elke build (`scripts/generate-content-collections.mjs`). EN-inzichten staan wel al als los
geschreven JSON in diezelfde `all.json` (de `lang: en`-items, die het generatiescript met rust
laat). Sveltia kan geen `.js` bewerken, en een CMS-schrijfactie op `all.json` voor NL zou bij de
volgende build alsnog overschreven worden. Doel van deze migratie: één markdown-bestand per
artikel per taal, zodat beide talen op dezelfde manier CMS-geschikt worden als de kennisbank nu
al is.

## Wat er precies vastligt en niet mag veranderen

- **De tekst.** Geen woord, geen HTML-tag, geen spatie anders. Bewijs: voor elke van de 26
  artikelpagina's (13 NL + 13 EN) een build vóór en een build na de migratie, HTML
  byte-identiek. Zelfde aanpak als `scripts/check-cms-roundtrip.mjs` uit fase 2, maar dan over
  de volledige set in plaats van twee steekproeven.
- **RAG-injectie.** `src/pages/nl/inzichten/[slug].astro` en `src/pages/insights/[slug].astro`
  splitsen de HTML-body handmatig vóór de eerste `<h2` en plakken daar `renderRagBlok(blok)`
  tussen (`src/lib/rag-blok.js`), op basis van de URL (`blokVoor(url, locale)`). Dit is **niet**
  de remark-plugin die de kennisbankpagina's gebruikt (`remarkRagBlok` in `astro.config.mjs`,
  die draait alleen via Astro's markdown-compiler). Een migratie naar `.md`-bestanden mag deze
  twee mechanismen niet laten samenvallen: het artikel-body-veld moet de **ruwe tekst** van het
  bestand blijven opleveren (zoals nu, een kant-en-klare HTML-string), niet door Astro's
  markdown-compiler gaan. Doet het dat per ongeluk alsnog (bijvoorbeeld omdat de nieuwe loader
  `entry.render()` aanroept in plaats van `entry.body` te lezen), dan lopen de
  servicetoken-vervanging en de RAG-remark-plugin van de kennisbank ineens ook over
  inzichtenartikelen, met onvoorspelbare gevolgen.
  `planning/check-rag.mjs` telt nu "129 RAG-blok(ken) in de databron, 0 pagina's met fouten"; dat
  getal moet na de migratie exact gelijk blijven.
- **Tokens.** Inzichtenartikelen gebruiken `{{price:...}}` e.d. niet (anders had
  `planning/check-dist.mjs` dat al afgevangen als onvervangen token). Dat moet zo blijven: het
  body-veld mag niet alsnog door `remarkServiceTokens` lopen.
- **Sortering en tiebreaker.** `src/data/articles/index.js` sorteert NL-artikelen op `date`
  (nieuwste eerst) met `order` als tiebreaker bij een gelijke datum. Die functie (en de
  vergelijkbare EN-sortering, nog te lokaliseren bij de uitvoering) moet na migratie exact
  dezelfde volgorde opleveren, anders verschuift de inzichten-hub en de RSS-feed.
- **Schema/JSON-LD, sitemap, RSS.** `src/lib/sitemap.ts` leest nu al `getCollection('articles')`
  voor de lastmod-datums (beide talen). Blijft de collectienaam en vormgeving van de data
  gelijk, dan verandert daar niets. De RSS-feeds (`src/pages/nl/rss.xml.js` en een eventuele
  EN-tegenhanger) en de JSON-LD-opbouw in de `[slug].astro`-bestanden lezen rechtstreeks
  artikelvelden (`date`, `excerpt`, `faq`, `category`, ...): zolang de veldwaarden identiek
  blijven, blijft de output identiek.

## Consumenten die nu direct `src/data/articles/index.js` importeren

Minimaal (op te sporen en stuk voor stuk te controleren bij de uitvoering, deze lijst is een
startpunt, geen garantie van volledigheid):
- `src/pages/nl/inzichten/[slug].astro` (props)
- `src/pages/nl/inzichten/index.astro` (hub, categorieën)
- `src/pages/nl/rss.xml.js`
- Overal waar `ArticleCard` een los artikel via `getArticle(slug)` opzoekt (bijv. "verder lezen")

De EN-pagina's lezen al via `getCollection('articles')`, niet via een `.js`-equivalent. Na
migratie is het doel één gedeelde manier van ophalen voor beide talen (dezelfde collectienaam,
dezelfde functiesignatuur als nu), zodat deze consumenten niet elk apart hoeven te worden
herschreven, alleen hun databron verandert.

## Aanpak

1. **Scriptmatige extractie, niet handmatig overtypen.** Een eenmalig Node-script zet de 13
   NL `.js`-bestanden en de 13 EN-items uit `all.json` om naar `src/content/articles/{en,nl}/
   <slug>/index.md` (YAML front matter voor alle velden behalve `body`, de bestaande HTML
   letterlijk als body). Handmatig overtypen is hier een tekstrisico, een script dat exporteert
   is dat niet.
2. **Eigen loader, geen Astro-markdown-rendering.** `content.config.ts` krijgt voor `articles`
   een loader die front matter en body scheidt zoals `scripts/check-content.mjs` dat nu al doet
   (regex op de `---`-grenzen, front matter met js-yaml, body als losse string in `data.body`),
   in plaats van Astro's standaard `glob()`-rendering met `.render()`. Dat voorkomt dat de
   remark-plugins van de kennisbank per ongeluk ook op inzichten gaan werken.
3. **Sortering en helpers verhuizen, interface blijft gelijk.** `getArticle`, `articleCategories`,
   `featuredArticle`, `otherArticles` (nu in `src/data/articles/index.js`) blijven bestaan met
   dezelfde naam en signatuur, maar lezen straks uit de collectie in plaats van uit de
   geïmporteerde `.js`-array. Consumenten hoeven dan niet te worden aangepast, behalve waar ze nu
   nog rechtstreeks de EN/NL-databron apart aanspreken.
4. **`generate-content-collections.mjs` versmallen.** Dit script blijft nodig voor `services` en
   `cases` (die blijven `.js`-gestuurd, dat verandert hier niet), maar het stuk dat `articles`
   genereert vervalt.
5. **Bewijs vóór opruimen.** Build en vergelijk (byte-identiek) alle 26 artikelpagina's, beide
   hub-pagina's, beide RSS-feeds, en draai `planning/check-rag.mjs` en `planning/check-dist.mjs`
   opnieuw, met de nieuwe bronnen naast de oude (bijvoorbeeld in een apart werkbestand of branch),
   voordat `src/data/articles/*.js` wordt verwijderd. Zodra dat bestand weg is, is de oude bron
   niet meer naast de nieuwe te leggen (behalve via git-geschiedenis).
6. **CMS-collecties toevoegen.** Pas als dit staat, is een `inzichten_en`/`inzichten_nl`-paar in
   `public/admin/config.yml` toe te voegen, naar het patroon van de kennisbankcollecties uit
   fase 2.

## Risico's

- **Twee render-mechanismen niet laten samenvallen** (zie hierboven): het grootste risico, en
  het makkelijkst te missen omdat de build niet per se meteen fout gaat, een subtiel verschil in
  gegenereerde HTML (bijvoorbeeld in hoe een `<figure>`-blok of een HTML-comment wordt
  doorgegeven) kan er pas bij de byte-identiek-vergelijking uitkomen.
- **Sorteerlogica die stilletjes verschuift** als de tiebreaker-regel niet exact wordt
  overgenomen: de hub en de RSS-feed veranderen dan van volgorde zonder dat de build faalt.
- **EN-sorteerlogica nog niet gelokaliseerd** in dit plan: moet bij de uitvoering eerst worden
  opgezocht (waarschijnlijk in de EN-hubpagina of impliciet via de volgorde in `all.json`) voordat
  stap 3 kan worden ingevuld.
- **generate-content-collections.mjs half aanpassen**: een onzorgvuldige versmalling kan per
  ongeluk ook de cases/services-generatie raken.
- **Content-check (`planning/check-content.mjs`) gaat nu alleen over `src/content/pages`**: als
  inzichten straks ook in `src/content` staan, checken of dat script per ongeluk inzichten gaat
  meenemen (en daar faalt, want de planning-specs in `planning/specs/` zijn er niet op gebouwd).

## Volgorde en zwaarte

Geen harde inschatting in uren, wel een volgorde van zwaarte: de scriptmatige extractie en de
eigen loader (stappen 1-2) zijn het meeste, maar mechanische werk. De sorteer- en
RSS/sitemap-consumenten (stap 3) zijn kleiner maar foutgevoeliger, omdat een fout daar niet in de
build zichtbaar wordt. De byte-identiek-proef (stap 5) is verplicht en kan niet worden afgekort:
dat is de enige manier om "de tekst verandert niet" voor 26 pagina's hard te maken, niet alleen
voor de twee steekproeven uit fase 2. Pas na een groen resultaat daar is het verantwoord om
`src/data/articles/*.js` te verwijderen en de CMS-collecties voor inzichten toe te voegen.
