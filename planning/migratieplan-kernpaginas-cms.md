# Migratieplan: home, over en werkwijze naar CMS-geschikte content

Status: plan, niet uitgevoerd. Alleen lezen en ontwerpen, geen bestand onder `src/pages`,
`src/data` of `src/content` is hiervoor aangepast. Dave beslist na dit plan of, en wanneer, dit
traject start. Zie ook `migratieplan-inzichten-cms.md` voor het vergelijkbare traject voor de
inzichten; dit plan gaat over drie andere, nog niet gemigreerde kernpagina's.

## Waarom dit nodig is voor een CMS op deze drie pagina's

CMS-fase 3 (zie `docs/cms.md`) voegt bewerkbare collecties toe voor alle markdown onder
`src/content/pages`. Home, over en werkwijze horen daar NIET bij: het zijn hardcoded
`.astro`-pagina's met tekst rechtstreeks in de template (JSX-achtige attributen en child-content),
aangevuld met herbruikbare structuren uit `src/data/*.js`:

- **Home** (`src/pages/index.astro` / `src/pages/nl/index.astro`): hero-tekst inline, metrics uit
  `src/data/site.js` (`metricsEn`/vergelijkbare NL-export), testimonials uit `src/data/cases.js`,
  services/cases/articles via `getCollection()`.
- **Over** (`src/pages/about.astro` / `nl/over.astro`): hero- en verhaaltekst inline, `timeline`
  en `career` als losse arrays in het bestand zelf (niet eens in `site.js`), principes/
  beschikbaarheid uit `site.js`.
- **Werkwijze** (`src/pages/approach.astro` / `nl/werkwijze.astro`): stappen, verwachtingen,
  anti-patronen en samenwerkingsvormen uit `src/data/process.js`, procurement-FAQ uit
  `src/data/faq.js`, onafhankelijkheidstekst uit `site.js`.

Omdat deze tekst niet in `src/content/pages` staat, deelt hij het front-matter-schema van
`content.config.ts` niet, en is er geen bestaand bestand om in een Sveltia-collectie te wijzen.
Bewerkbaar maken vraagt dus een eigen contentmodel per pagina, niet alleen een nieuwe
collectie-regel in `config.yml`.

## Wat er, anders dan bij de inzichten, wél al structured is

Een deel van de content is al scheidbaar van de pagina-layout (de `*.js`-exports), maar een
substantieel deel staat als losse stukken tekst/attributen midden in de `.astro`-bestanden zelf
(bijvoorbeeld de hero-titel en -body op `about.astro`, zie regels 42-51 van dat bestand). Een
migratie moet daarom, per pagina, eerst vaststellen welke stukken:
1. al in een herbruikbare `*.js`-structuur staan (relatief mechanisch over te zetten, zoals bij
   services/cases in `generate-content-collections.mjs`);
2. alleen inline in de `.astro`-template staan (moet eerst worden geïdentificeerd en in velden
   worden opgeknipt, met een risico op tekstverlies of -wijziging als dat handmatig gebeurt).

## Risico's, groter dan bij de inzichten

- **Homepage.** De meest bezochte en SEO-gevoelige pagina van de site. Een fout hier (verkeerd
  veld, verdwenen CTA, kapotte structured data) is zichtbaarder en duurder dan op een
  kennisbank- of inzichten-artikel.
- **Geen bestaand front-matter-schema.** In tegenstelling tot de inzichten (die al een
  JSON-structuur per taal hebben) moet hier een nieuw schema worden ontworpen: welke velden,
  welke validatie (lengtes, verplicht/optioneel), en hoe dat zich verhoudt tot de bestaande
  `pages`-collectie (eigen schema, of een uitbreiding van het bestaande?).
- **Child-content en structured data, niet alleen tekstvelden.** `about.astro` bouwt bijvoorbeeld
  een `Person`-schema en een `timeline`/`career`-structuur die nu losse JS-arrays zijn, geen
  front-matter-velden. Een CMS-widget hiervoor (lijst van object-paren) is goed te bouwen, maar
  moet per pagina apart ontworpen worden.
- **EN/NL-pariteit.** Elke pagina heeft al een werkende EN- en NL-versie (`index.astro`+`nl/
  index.astro`, enz.), met soms net andere call-to-actions (`routeById('contact')`-afhankelijke
  logica). Die logica mag niet verdwijnen achter een CMS-tekstveld.

## Aanpak (globaal, nog niet in detail uitgewerkt)

1. **Eén pagina per keer, niet alle drie tegelijk.** Start met de pagina met de minste inline
   logica (vermoedelijk werkwijze, grotendeels `process.js`/`faq.js`-gedreven) om het patroon te
   bewijzen voordat de homepage wordt aangepakt.
2. **Velden eerst ontwerpen, dan overzetten.** Voor elke pagina een lijst van velden (tekst,
   lijst, object) die de huidige inline tekst en `*.js`-structuren dekt, zonder de bestaande
   zod-schema's van services/cases/articles te breken (die blijven ongewijzigd).
3. **Scriptmatige extractie**, net als bij de inzichten: een eenmalig Node-script dat de huidige
   inline tekst en `*.js`-structuren omzet naar het nieuwe contentbestand, niet handmatig
   overtypen.
4. **Bewijs vóór opruimen.** Build en vergelijk (byte-identiek) de homepage, over- en
   werkwijze-pagina in beide talen vóór en na de migratie, net als `check-cms-roundtrip.mjs` voor
   de kennisbank, voordat de oude inline tekst/`.js`-structuur wordt verwijderd.
5. **CMS-collectie toevoegen.** Pas als dit staat, is een collectie voor deze drie pagina's
   toe te voegen aan `public/admin/config.yml`, naar het patroon van de "overige
   pagina's"-collecties uit fase 3 (geen create/delete, want het blijven vaste pagina's).

## Volgorde en zwaarte

Zwaarder dan de inzichten-migratie: daar bestond al een JSON-structuur per taal, hier moet het
schema per pagina nog ontworpen worden en staat een deel van de tekst inline in de template in
plaats van in een los data-bestand. Geen harde inschatting in uren; wel groter dan fase 2 en
fase 3 van de kennisbank/overige pagina's samen.
