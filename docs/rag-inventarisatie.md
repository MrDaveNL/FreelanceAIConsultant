# RAG-ready contentblokken: inventarisatie fase 0

Stand: 6 oktober 2026 · branch `rag-blokken-fase-0` · op basis van een verse build (`npm run build`, 90 pagina's, geslaagd)

Dit rapport hoort bij `planning/Briefing Claude Code RAG-ready contentblokken op freelanceaiconsultant.com.md`. In deze fase is geen bestaand bestand gewijzigd. Nieuw zijn alleen dit rapport, de map `docs/seo-nulmeting/` en (na akkoord vooraf) `.git` en `.gitignore`.

## Samenvatting

1. **De stack is geschikt.** Astro 5 met volledig statische output. Alle hoofdcontent staat in de ruwe HTML, zonder JavaScript. Er is al één bron voor prijzen en doorlooptijden (`src/data/prijzen.ts`) en een tokenmechanisme dat die waarden in Markdown invult.
2. **Alle 55 pagina's uit de contentplanning zijn al gebouwd.** Er zijn geen geplande pagina's meer die nog gemaakt moeten worden. De site is niet live, dus "bestaand" betekent in dit rapport: alles wat nu in de build staat (89 pagina's plus de 404).
3. **Een volledig dienstblok kan nu voor geen enkele dienst zonder nieuwe tekst.** Prijs en doorlooptijd zijn er voor alle zes diensten. Wat ontbreekt: een resultaatzin, een doelgroepzin, een datum "laatst gecontroleerd", een bronregel en de vervolgvragen. Die teksten staan niet in de planning en moeten dus als concept worden aangeleverd of beoordeeld.
4. **Cases kunnen geen blok krijgen.** De cijfers en quotes zijn illustratief (README, feitenblad). Het bloktype "Case" vraagt een gemeten resultaat per fase. Alle zes de cases staan op de lijst met datagaten.
5. **Er zijn afwijkingen tussen bestaande tekst en de databron** op de dienstpagina's en op drie casepagina's (zie hoofdstuk 6). Twee zijn hard (doorlooptijd van de AI Readiness Assessment en van de Executive Briefing), de rest zit in kaartteksten die op meerdere pagina's terugkomen. Volgens de briefing wordt een pagina met een conflict overgeslagen; welke afwijkingen als conflict tellen is een beslissing (open vraag 1).
6. **Voorstel:** één pure renderfunctie plus een dun Astro-component, blokdata als getypeerde modules in `src/data/rag/` met validatie via `astro/zod`, en plaatsing in Markdown-pagina's via een remark-plugin. Zo blijft de diff van elke bestaande contentpagina leeg en verandert per template alleen één regel.

Onderaan staat een lijst met **open vragen** waarop een antwoord nodig is voordat de implementatie start.

## 1. Stack

| Onderdeel | Bevinding |
|---|---|
| Framework | Astro `^5.13.5`, `output: 'static'`, `trailingSlash: 'never'`, site `https://freelanceaiconsultant.com` |
| Rendering | Volledig statisch, HTML per route in `dist/`. Geen UI-framework, geen hydration |
| Dependencies | Alleen `astro` (dependency) en `simple-icons` (devDependency) |
| Client-side JavaScript | Vanilla scripts: logo-carrousel (`/logo-carousel/logo-carousel.js`, defer, op elke pagina behalve 404), filters op `/cases` en `/inzichten`, formulieren op `/contact` en `/inzichten` |
| Styling | `src/styles/global.css` (designtokens als CSS-variabelen: `--cream`, `--burgundy`, `--mustard`, `--salmon`, `--aqua`, `--sand`, `--line`, `--muted`, `--paper`), `src/styles/content-pages.css` voor de contentpagina's, plus scoped `<style>` per template |
| Layout | `src/layouts/BaseLayout.astro`: title, description, canonical, optionele robots-meta, Open Graph, Twitter Card en één JSON-LD-blok per pagina |
| Git | De map was geen git-repository. Na akkoord is git geïnitialiseerd, de bestaande staat gecommit op `main` en de branch `rag-blokken-fase-0` aangemaakt |

### Contentopslag: twee systemen naast elkaar

| Systeem | Waar | Gebruikt voor | Validatie |
|---|---|---|---|
| Datamodules (JS/TS) | `src/data/site.js`, `services.js`, `prijzen.ts`, `cases.js`, `faq.js`, `process.js`, `articles/*.js` | Homepage, diensten, cases, inzichten, werkwijze, over, veelgestelde vragen (34 URL's, B01 tot en met B35 in de planning) | Geen schema. `prijzen.ts` is getypeerd |
| Content collection | `src/content/pages/**/index.md`, schema in `src/content.config.ts` (zod) | De 55 pagina's uit de contentplanning, gerenderd door `src/pages/[...slug].astro` | Verplichte frontmatter-velden laten de build falen |

Relevante bestaande mechanismen:

- **Eén bron voor prijzen.** `src/data/prijzen.ts` leidt elke prijs af van een aantal dagen maal een interne rekenbasis en exporteert alleen de afgeleide bedragen en teksten (`price`, `timing`, `priceNote`, `minPrice`, `maxPrice`). `services.js` leest daaruit.
- **Tokens.** `{{price:slug}}`, `{{pricelc:slug}}`, `{{timing:slug}}` en `{{title:slug}}` worden in Markdown vervangen door een eigen remark-plugin in `astro.config.mjs`, en in frontmatter door `[...slug].astro`. 25 van de 55 contentpagina's gebruiken ze. Er staan geen hardcoded dienstprijzen in de Markdown-bestanden.
- **Bescherming van oude URL's.** `src/data/protected-urls.js` laat de build falen als nieuwe content een bestaande URL zou genereren.
- **Bestaande controles.** `planning/check-content.mjs` (planning tegenover Markdown) en `planning/check-dist.mjs` (kapotte links, tokens, H1-telling, lengte en uniciteit van title en description). Beide slagen op de huidige staat: 55 bestanden zonder fouten, 90 HTML-bestanden zonder problemen. Ze draaien niet automatisch in de build.

## 2. Rendering

De build is lokaal geserveerd en per paginatype opgehaald met `curl`, zonder JavaScript. Overal staat de volledige hoofdcontent in de respons.

```
curl -s -o pagina.html -w '%{http_code} %{size_download}' http://localhost:4399<pad>/
```

| Paginatype | URL | Status | Bytes | H1 in ruwe HTML | Woorden in `<main>` | H2's | `<details>` |
|---|---|---|---|---|---|---|---|
| Home | `/` | 200 | 41.076 | Maak de AI-beslissingen die je aan je board moet uitleggen. | 838 | 8 | 0 |
| Dienstenoverzicht | `/diensten` | 200 | 31.554 | Diensten die AI-beslissingen helder maken. | 619 | 2 | 0 |
| Dienst | `/diensten/ai-readiness-assessment` | 200 | 34.002 | AI Readiness Assessment | 902 | 7 | 4 |
| Casesoverzicht | `/cases` | 200 | 29.567 | Cases die het verschil maken. | 477 | 1 | 0 |
| Case | `/cases/ai-readiness-scale-up` | 200 | 28.887 | AI-readiness voor een scale-up | 580 | 2 | 0 |
| Inzicht | `/inzichten/build-buy-of-partner` | 200 | 30.742 | Build, buy of partner: wat past bij jouw situatie? | 1.232 | 5 | 0 |
| Kennisbank | `/kennisbank/rpa-vs-ai-automatisering` | 200 | 29.783 | RPA versus AI automatisering: wat past bij jou? | 1.510 | 6 | 0 |
| Hub (contentplanning) | `/ai-consultancy` | 200 | 42.038 | AI consultancy: strategisch advies dat tot resultaat leidt | 2.895 | 12 | 5 |
| Tarieven | `/tarieven` | 200 | 32.578 | Wat kost een AI consultant? Tarieven en pakketten | 1.379 | 6 | 5 |
| Werkwijze | `/werkwijze` | 200 | 37.237 | Zo werk ik. | 908 | 4 | 0 |
| Over | `/over` | 200 | 30.297 | Hi, ik ben Dave. Onafhankelijk AI-adviseur voor boards en leiders die vooruit willen. | 666 | 4 | 0 |
| Veelgestelde vragen | `/veelgestelde-vragen` | 200 | 42.499 | Veelgestelde vragen. | 1.144 | 7 | 24 |

Fragment uit de ruwe respons van `/diensten/ai-readiness-assessment`:

```html
<h1 class="h1">AI <span class="marker">Readiness</span> Assessment</h1>
<p class="lede">Een nuchtere doorlichting van je organisatie op vijf dimensies: strategie, data, technologie, mensen en governance. Je weet binnen drie weken wat haalbaar is, wat eerst moet en wat je beter nog niet doet.</p>
...
<div class="fact tone-aqua"><b>Duur</b><strong>2-3 weken</strong></div>
<div class="fact tone-yellow"><b>Investering</b><strong>€7.000</strong></div>
```

Aandachtspunten voor regel 9 van het blok (zichtbaar en server-side):

- **FAQ's staan in `<details>`.** `src/components/Accordion.astro` rendert elke vraag als `<details>`. De tekst staat wel in de ruwe HTML, maar is ingeklapt. Het blok mag daar dus niet in en mag de vervolgvragen ook niet uit die accordeon hergebruiken als opmaak.
- **De logo-carrousel wordt in `<main>` gevoegd**, direct na de hero. `LogoCarouselSlot.astro` zoekt in de gerenderde HTML naar de eerste `</section>` of `</header>` na de `<h1>`. Een blok dat in de hero zelf komt of een extra `section` vóór dat sluitpunt toevoegt, verschuift de carrousel. Het blok hoort dus ná de hero-sectie.

## 3. Paginatypes

| Type | Aantal | Template en bron | Structured data nu | Status |
|---|---|---|---|---|
| Home | 1 | `src/pages/index.astro` | ProfessionalService | Bestaand |
| Dienstenoverzicht | 1 | `src/pages/diensten/index.astro` | ProfessionalService | Bestaand |
| Dienst | 6 | `src/pages/diensten/[slug].astro` + `services.js` + `prijzen.ts` | Service met Offer (prijs als tekst) | Bestaand |
| Casesoverzicht | 1 | `src/pages/cases/index.astro` | ProfessionalService | Bestaand |
| Case | 6 | `src/pages/cases/[slug].astro` + `cases.js` | Article | Bestaand |
| Inzichtenoverzicht | 1 | `src/pages/inzichten/index.astro` | ProfessionalService | Bestaand |
| Inzicht (artikel) | 12 | `src/pages/inzichten/[slug].astro` + `articles/*.js` | BlogPosting | Bestaand |
| Werkwijze | 1 | `src/pages/werkwijze.astro` + `process.js` | ProfessionalService | Bestaand |
| Over | 1 | `src/pages/over.astro` | Person | Bestaand |
| Contact | 1 | `src/pages/contact.astro` | ContactPage | Bestaand |
| Veelgestelde vragen | 1 | `src/pages/veelgestelde-vragen.astro` + `faq.js` | FAQPage | Bestaand |
| Juridisch | 2 | `privacy.astro`, `algemene-voorwaarden.astro` | ProfessionalService | Bestaand |
| Hub (contentplanning) | 9 | `[...slug].astro` + Markdown | BreadcrumbList + Service of Article, meestal FAQPage | Gebouwd uit planning |
| Spoke (contentplanning) | 23 | idem | idem | Gebouwd uit planning |
| Branche (`/markten/*`) | 7 | idem | BreadcrumbList + Article | Gebouwd; 5 van de 7 staan op `noindex, follow` |
| Kennisbankartikel | 13 | idem | BreadcrumbList + Article | Gebouwd uit planning |
| Kennisbank-overzicht | 1 | idem (`P08`) | BreadcrumbList + CollectionPage | Gebouwd uit planning |
| Tarieven | 1 | idem (`P04`) | Service met OfferCatalog | Gebouwd uit planning |
| Partnernetwerk | 1 | idem (`P06`) | Service + FAQPage | Gebouwd uit planning |
| 404 | 1 | `src/pages/404.astro` | ProfessionalService | `noindex, nofollow` |

**Gepland maar nog niet gebouwd: geen.** De Excel-planning (`planning/Content_planning_tabblad1_ClaudeCode.xlsx`) bevat 55 actieve ID's en alle 55 hebben een Markdown-bestand en een pagina in de build. De kolom Status staat nog overal op "Te schrijven", dat loopt dus achter. De overige ID's in de planning zijn vervallen (opgenomen in een hub of "bestaat al").

Er bestaan twee artikelsoorten naast elkaar: `/inzichten/*` (12 oudere artikelen uit `articles/*.js`) en `/kennisbank/*` (13 nieuwe uit de contentplanning). Beide vallen onder het bloktype "Kennisbank" uit de briefing.

## 4. SEO-nulmeting

De nulmeting staat in `docs/seo-nulmeting/`: **één JSON-bestand per URL, 90 in totaal**, plus een index in `docs/seo-nulmeting/README.md` en het gebruikte script (`_nulmeting.py`) zodat de meting herhaalbaar is. Bron is uitsluitend de ruwe HTML van de verse build van 6 oktober 2026. De oude `dist/` is niet gebruikt.

Per URL is vastgelegd:

| Onderdeel | Inhoud |
|---|---|
| `beschermd` | title, meta description, canonical, robots-meta, hreflang, alle H1's |
| `social` | Open Graph en Twitter Card |
| `koppen` | elke kop in volgorde, met niveau, tekst, regio (header, main, footer) en id |
| `bodytekst` | de tekst uit `<main>` als geordende lijst van tekstblokken, met woordtelling en SHA-256 |
| `links` | elke link met regio, soort (intern of extern), href, ankertekst en rel |
| `structured_data` | de volledige JSON-LD, geparsed, met SHA-256 |
| `afbeeldingen` | src, alt, width, height, loading |
| `laadprestaties` | scripts (extern of inline, met omvang), stylesheets, aantal `details` en tabellen, HTML-omvang in bytes |

Bevindingen uit de nulmeting:

- **Elke pagina heeft precies één H1** en een unieke title en description (bevestigd door `check-dist.mjs`).
- **Geen hreflang** op de hele site. De briefing noemt hreflang als beschermd element; er valt hier niets te beschermen, de controle wordt "blijft afwezig".
- **Robots-meta staat op 6 pagina's**: `/404` (`noindex, nofollow`) en vijf branchepagina's met `noindex, follow`: `/markten/luchtvaart`, `/markten/marketing`, `/markten/onderwijs`, `/markten/overheid`, `/markten/zorg`. Die vijf staan ook niet in de sitemap (84 URL's).
- **Canonical** verwijst overal naar de eigen URL zonder slash aan het eind.
- **Em dashes: 0** in de bodytekst van alle 90 pagina's. Wel 67 en dashes (–) op 12 pagina's, bijvoorbeeld "Maand 2–3" en "45–60 minuten". De briefing verbiedt alleen em dashes.
- **Het woord "gids"** komt in bodytekst voor op twee kennisbankpagina's: `/kennisbank/ai-specialist-salaris` (bronnamen "Nationale Beroepengids" en "Salarisgids") en `/kennisbank/prompt-engineering` ("promptgids", "promptgidsen", "gidsen"). Niet in URL's, navigatie of koppen. Bestaande tekst blijft staan; een blok op die pagina's mag het woord niet overnemen.
- **Totaal 130.581 woorden** in `<main>` over 90 pagina's.

De beperking van deze nulmeting: het script is in Python geschreven (BeautifulSoup), buiten de stack van de repo. De voor- en na-controle uit de briefing moet in de build draaien en dus in Node. Zie het voorstel in hoofdstuk 9 en open vraag 8.

## 5. Plaatsingsplan

De vraagkoppen en antwoordalinea's zelf zijn **niet** geschreven. De planning levert ze niet, dus volgens de briefing zijn dat concepten voor na akkoord. Hieronder staat per pagina de vraag die de pagina beantwoordt, de plek en wat er al staat.

### 5.1 Dienstpagina's (6)

Opbouw van het template: hero (H1 en lede) → drie feiten (duur, resultaat, investering) met prijsnotitie → logo-carrousel → H2 "aanleiding" → H2 aanpak → H2 "Concreet. Duidelijk. Direct toepasbaar." → H2 "Van inzicht naar impact." → H2 case → H2 FAQ → "Ook interessant" → CTA.

**Plek voor alle zes:** een eigen `section` direct na de feitenstrook (en na de carrousel), vóór de eerste H2. De briefing zegt "onder de H1 en de intro, vóór de eerste H2": dat klopt hier, met de feitenstrook als deel van de intro. Geen bestaande kop stelt de koop- of prijsvraag, dus het blok krijgt een eigen vraagkop.

| URL | Vraag die de pagina beantwoordt | Wat het blok al deels invult | Pakketten voor de tabel |
|---|---|---|---|
| `/diensten/ai-readiness-assessment` | Wat levert de AI Readiness Assessment op en wat kost die? | Lede (wat), feiten (2-3 weken, €7.000, "Readiness-rapport + 90-dagenplan"), lijst "Voor organisaties die:" (voor wie) | Geen: tabel vervalt |
| `/diensten/ai-strategy-sprint` | Wat levert de AI Strategy Sprint op en wat kost die? | Lede, feiten (4-6 weken, €15.400 - €22.400, "Board-ready roadmap"), lijst voor wie | Geen: tabel vervalt |
| `/diensten/fractional-ai-lead` | Wat kost een Fractional AI Lead en welk niveau past? | Lede, feiten (ritme, looptijd, drie maandbedragen), prijsnotitie met Advies, Lead, Lead+ | Drie niveaus aanwezig: enige dienst met een tabel |
| `/diensten/vendor-review` | Wat levert een Vendor Review op en wat kost die? | Lede, feiten (3-6 weken, €9.800 - €15.400, "Onderbouwd selectieadvies") | Geen: tabel vervalt |
| `/diensten/executive-briefing` | Wat levert een Executive Briefing op en wat kost die? | Lede, feiten ("3 uur + voorbereiding", €2.800), verrekening binnen 60 dagen in de prijsnotitie | Geen: tabel vervalt |
| `/diensten/ai-due-diligence` | Wat levert een AI Due Diligence op en wat kost die? | Lede, feiten (2-4 weken, €12.600 - €19.600, "DD-rapport + red flags") | Geen: tabel vervalt |

Aandachtspunten:

- De antwoordalinea herhaalt per definitie duur en prijs uit de feitenstrook. Dat is toegestaan zolang de waarden uit dezelfde bron komen en er geen zin woordelijk wordt overgenomen.
- De bestaande FAQ per dienst (3 tot 5 vragen) staat in `<details>`. De vervolgvragen van het blok moeten **andere** vragen zijn, anders faalt de controle op dubbele tekst en dubbele vraagkop.
- Bij Fractional AI Lead zou een kolom "Doorlooptijd" in elke rij "minimaal 3 maanden" bevatten. Dat is een dode kolom. Voorstel: kolom "Dagen per maand" in plaats daarvan.
- Op alle zes de pagina's staat minstens één afwijking van de databron, in eigen tekst of in de kaart van een gerelateerde dienst (hoofdstuk 6.1). Of een pagina daardoor wordt overgeslagen hangt af van open vraag 1.

### 5.2 Dienstenoverzicht en tarieven

| URL | Vraag | Plek | Wat er al staat | Overlap |
|---|---|---|---|---|
| `/diensten` | Welke dienst past bij welke situatie? | Geen H2 vóór de vergelijking; de pagina heeft pas onderaan H2's. Voorstel: eigen `section` na de hero en de carrousel, vóór "Mijn hoofddiensten" | Sectie `#vergelijking` met eyebrow "Welke past wanneer?" (geen kop, een `<p>`) en een vergelijking van drie van de zes diensten in `div`'s, niet in een `table` | Groot: het blok wordt een tweede vergelijking. Het bloktype is wel anders (per situatie in plaats van per dienst) en dekt alle zes |
| `/tarieven` | Wat kost een AI consultant? | Direct onder bestaande H2 "Wat kost AI consultancy?", vóór de eerste alinea | H1 is al de vraag. Er staat al een tabel "Pakket, Doorlooptijd, Investering" met zeven rijen en per pakket een H3 met prijs en doorlooptijd | Zeer groot: de pagina is feitelijk al het blok, maar niet in de vorm van de specificatie. De bestaande tabel heeft een rij "AI workshop en training" met "Vaste prijs in het voorstel", wat in het blok niet mag. Zie open vraag 5 |

### 5.3 Cases (6) en casesoverzicht

Opbouw: hero (H1, lede, labels sector, dienst, duur, jaar) met rechts "Bewijs in cijfers" → carrousel → verhaal in vijf stappen (Situatie, Uitdaging, Aanpak, Besluit, Resultaat, als `p.eyebrow`, niet als kop) → quote, rol, ingezette dienst → H2 volgende case → CTA.

**Plek:** eigen `section` na de hero en de carrousel, vóór het verhaal. Er is geen bestaande H2 vóór dat punt.

| URL | Vraag | Bestaande inhoud die het blok invult | Status |
|---|---|---|---|
| `/cases/ai-strategie-investeringsmaatschappij` | Wat leverde de AI Strategy Sprint bij een investeringsmaatschappij op? | Vijf verhaalstappen, vijf cijfers | Overslaan: cijfers illustratief |
| `/cases/vendorselectie-enterprise-retail` | Wat leverde de Vendor Review bij een retailer op? | idem | Overslaan: cijfers illustratief |
| `/cases/ai-roadmap-internationale-maakorganisatie` | Wat leverde een Fractional AI Lead bij een maakorganisatie op? | idem | Overslaan: cijfers illustratief en conflict (hoofdstuk 6) |
| `/cases/kyc-documentanalyse-financial-services` | Wat leverde de aanpak bij KYC-documentanalyse op? | idem | Overslaan: cijfers illustratief en conflict |
| `/cases/ai-readiness-scale-up` | Wat leverde de AI Readiness Assessment bij een scale-up op? | idem | Overslaan: cijfers illustratief |
| `/cases/interne-ai-assistent-kenniswerkers` | Wat leverde de aanpak rond een interne AI-assistent op? | idem | Overslaan: cijfers illustratief en conflict |
| `/cases` | Overzicht, geen eigen koop- of keuzevraag | n.v.t. | Geen blok voorgesteld |

De tabel "per fase: situatie, ingreep, gemeten resultaat" sluit niet één op één aan op de vijf verhaalstappen, die geen resultaat per fase hebben. Als de cases later geverifieerd zijn, is een extra veld per fase nodig.

### 5.4 Pagina's uit de contentplanning (55)

Opbouw van `[...slug].astro`: hero (kruimelpad, eyebrow, H1, lede, CTA's, bij artikelen de auteursregel, rechts het kader "In het kort") → carrousel → Markdown-body (begint met de eerste H2) → FAQ in `<details>` → Bronnen → CTA.

De plek is per pagina afgeleid met één regel, in lijn met de plaatsingsregels uit de briefing:

1. heeft een dienstachtige pagina al een H2 met de kostenvraag, dan komt het blok direct onder die kop;
2. is de eerste H2 al een vraag, dan komt het blok direct onder die kop;
3. anders krijgt het blok een eigen vraagkop, na de hero en vóór de eerste H2.

Uitkomst: **37 pagina's hergebruiken een bestaande kop, 17 krijgen een eigen vraagkop, 1 krijgt geen blok.** Dit is een eerste voorstel; per pagina hoort bij de implementatie nog een inhoudelijke controle op zoekwoordfocus.

| URL (ID) | Soort pagina | Bloktype | Plek van het blok | Bestaande kop die de vraag al stelt | Overlap en aandachtspunten |
|---|---|---|---|---|---|
| `/tarieven` (P04) | Conversie / tarieven | Dienstenoverzicht (tarieven) | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat kost AI consultancy?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len); 5 FAQ-vragen in details; dienstprijzen via token: ai-due-diligence, ai-readiness-assessment, ai-strategy-sprint, executive-briefing, fractional-ai-lead, vendor-review |
| `/partnernetwerk` (P06) | Trust / partnernetwerk | Dienst of dienstenoverzicht (zie 5.4) | Direct onder bestaande H2, voor de eerste alinea daaronder | "Waarom geen traditioneel AI bureau?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len); 5 FAQ-vragen in details |
| `/kennisbank` (P08) | Kennisbank hub | geen blok (overzichtspagina) | n.v.t. |  | kader "In het kort" (3 punten) en lede geven al een samenvatting |
| `/ai-consultancy` (C1-00) | Hub | Dienst of dienstenoverzicht (zie 5.4) | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat kost AI consultancy?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len); 5 FAQ-vragen in details; dienstprijzen via token: ai-readiness-assessment, ai-strategy-sprint, executive-briefing, fractional-ai-lead; ook vraagkop "Wat is AI consultancy?" aanwezig |
| `/ai-consultancy/ai-strategie` (C1-03) | Spoke | Dienst of dienstenoverzicht (zie 5.4) | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is een AI strategie?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 5 FAQ-vragen in details; dienstprijzen via token: ai-readiness-assessment, ai-strategy-sprint |
| `/ai-consultancy/ai-roadmap` (C1-04) | Spoke | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is een AI roadmap?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len); 5 FAQ-vragen in details |
| `/ai-consultancy/ai-advies` (C1-05) | Spoke | Dienst of dienstenoverzicht (zie 5.4) | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is AI advies?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 5 FAQ-vragen in details; dienstprijzen via token: executive-briefing |
| `/ai-consultancy/ai-consultant-inhuren` (C1-06) | Spoke | Dienst of dienstenoverzicht (zie 5.4) | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat kost een AI consultant inhuren?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len); 5 FAQ-vragen in details; dienstprijzen via token: ai-readiness-assessment, ai-strategy-sprint, executive-briefing, fractional-ai-lead, vendor-review; ook vraagkop "Wanneer huur je een AI consultant in?" aanwezig |
| `/kennisbank/wat-doet-een-ai-consultant` (C1-07) | Kennisbank | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is een AI consultant?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len); 5 FAQ-vragen in details |
| `/ai-implementatie` (C2-00) | Hub | Dienst of dienstenoverzicht (zie 5.4) | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat houdt AI implementatie in?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 5 FAQ-vragen in details; dienstprijzen via token: ai-readiness-assessment, fractional-ai-lead |
| `/ai-implementatie/advies` (C2-01) | Spoke | Dienst of dienstenoverzicht (zie 5.4) | Eigen blok met nieuwe vraagkop, na de hero en voor de eerste H2 "Waarom advies vooraf loont" | geen | kader "In het kort" (3 punten) en lede geven al een samenvatting; 5 FAQ-vragen in details; dienstprijzen via token: ai-readiness-assessment |
| `/ai-implementatie/stappenplan` (C2-03) | Spoke | Kennisbank | Eigen blok met nieuwe vraagkop, na de hero en voor de eerste H2 "Stap 1: Bepaal het doel" | geen | kader "In het kort" (3 punten) en lede geven al een samenvatting; dienstprijzen via token: ai-readiness-assessment |
| `/ai-automatisering` (C3-00) | Hub | Dienst of dienstenoverzicht (zie 5.4) | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is AI automatisering?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len); 5 FAQ-vragen in details; dienstprijzen via token: ai-readiness-assessment |
| `/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai` (C3-03) | Spoke | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Welke bedrijfsprocessen kun je automatiseren met AI?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 4 FAQ-vragen in details; dienstprijzen via token: ai-readiness-assessment |
| `/ai-automatisering/ai-workflows` (C3-04) | Spoke | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is een AI workflow?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len); 4 FAQ-vragen in details |
| `/ai-automatisering/ai-tools` (C3-05) | Spoke | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Hoe kies je een AI tool?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len); 5 FAQ-vragen in details |
| `/kennisbank/ai-voorbeelden` (C3-06) | Kennisbank | Kennisbank | Eigen blok met nieuwe vraagkop, na de hero en voor de eerste H2 "AI voorbeelden per afdeling" | geen | kader "In het kort" (3 punten) en lede geven al een samenvatting; dienstprijzen via token: ai-readiness-assessment |
| `/kennisbank/notuleren-met-ai` (C3-07) | Kennisbank | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Hoe werkt notuleren met AI?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len); 4 FAQ-vragen in details |
| `/kennisbank/rpa-vs-ai-automatisering` (C3-08) | Kennisbank | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is robotic process automation (RPA)?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len) |
| `/ai-voor-bedrijven` (C4-00) | Hub | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat kan AI betekenen voor mijn bedrijf?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 5 FAQ-vragen in details; dienstprijzen via token: ai-readiness-assessment |
| `/ai-voor-bedrijven/mkb` (C4-01) | Spoke | Kennisbank | Eigen blok met nieuwe vraagkop, na de hero en voor de eerste H2 "Waarom AI nu relevant is voor het MKB" | geen | kader "In het kort" (3 punten) en lede geven al een samenvatting; 5 FAQ-vragen in details; dienstprijzen via token: ai-readiness-assessment, ai-strategy-sprint, executive-briefing |
| `/ai-voor-bedrijven/zakelijke-dienstverleners` (C4-02) | Spoke | Kennisbank | Eigen blok met nieuwe vraagkop, na de hero en voor de eerste H2 "Waarom AI voor dienstverleners loont" | geen | kader "In het kort" (3 punten) en lede geven al een samenvatting; 4 FAQ-vragen in details |
| `/ai-voor-bedrijven/ai-en-bi` (C4-03) | Spoke | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is business intelligence?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len); 4 FAQ-vragen in details |
| `/kennisbank/wat-doet-een-bi-specialist` (C4-05) | Kennisbank | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is een BI specialist?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len) |
| `/ai-development` (C5-00) | Hub | Dienst of dienstenoverzicht (zie 5.4) | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is AI development?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 5 FAQ-vragen in details; dienstprijzen via token: fractional-ai-lead, vendor-review |
| `/ai-development/ai-specialist` (C5-01) | Spoke | Dienst of dienstenoverzicht (zie 5.4) | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat doet een AI specialist?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 5 FAQ-vragen in details; dienstprijzen via token: ai-readiness-assessment |
| `/ai-development/ai-software` (C5-02) | Spoke | Kennisbank | Eigen blok met nieuwe vraagkop, na de hero en voor de eerste H2 "Soorten AI software" | geen | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len); 4 FAQ-vragen in details |
| `/ai-development/ai-oplossingen` (C5-03) | Spoke | Dienst of dienstenoverzicht (zie 5.4) | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat zijn AI oplossingen?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 5 FAQ-vragen in details; dienstprijzen via token: ai-readiness-assessment |
| `/kennisbank/wat-doet-een-ai-developer` (C5-04) | Kennisbank | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is een AI developer?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len) |
| `/kennisbank/ai-specialist-salaris` (C5-05) | Kennisbank | Kennisbank | Eigen blok met nieuwe vraagkop, na de hero en voor de eerste H2 "Salarisindicatie AI specialist" | geen | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len); 5 FAQ-vragen in details; dienstprijzen via token: fractional-ai-lead; woord met "gids" in bodytekst: Beroepengids, Salarisgids |
| `/ai-agents` (C6-00) | Hub | Dienst of dienstenoverzicht (zie 5.4) | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat kosten AI agents?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 5 FAQ-vragen in details; dienstprijzen via token: vendor-review; ook vraagkop "Wat kunnen AI agents voor bedrijven betekenen?" aanwezig |
| `/ai-agents/wat-is-een-ai-agent` (C6-01) | Spoke | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is een AI agent?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len); 5 FAQ-vragen in details |
| `/ai-agents/laten-maken` (C6-03) | Spoke | Dienst of dienstenoverzicht (zie 5.4) | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat kost een AI agent?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 5 FAQ-vragen in details; dienstprijzen via token: vendor-review; ook vraagkop "Wanneer laat je een AI agent maken?" aanwezig |
| `/ai-agents/voorbeelden` (C6-04) | Spoke | Kennisbank | Eigen blok met nieuwe vraagkop, na de hero en voor de eerste H2 "AI agents in klantenservice" | geen | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len) |
| `/kennisbank/ai-agents-en-avg` (C6-05) | Kennisbank | Kennisbank | Eigen blok met nieuwe vraagkop, na de hero en voor de eerste H2 "Waarom AI agents privacyrisico’s geven" | geen | kader "In het kort" (3 punten) en lede geven al een samenvatting |
| `/markten` (C7-00) | Hub | Kennisbank | Eigen blok met nieuwe vraagkop, na de hero en voor de eerste H2 "Waarom sectorkennis ertoe doet" | geen | kader "In het kort" (3 punten) en lede geven al een samenvatting |
| `/markten/zorg` (C7-01) | Branche | Kennisbank | Eigen blok met nieuwe vraagkop, na de hero en voor de eerste H2 "AI toepassingen in de zorg" | geen | kader "In het kort" (3 punten) en lede geven al een samenvatting; 5 FAQ-vragen in details; robots: noindex, follow |
| `/markten/marketing` (C7-02) | Branche | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is AI marketing?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 5 FAQ-vragen in details; robots: noindex, follow |
| `/markten/fintech` (C7-03) | Branche | Kennisbank | Eigen blok met nieuwe vraagkop, na de hero en voor de eerste H2 "AI toepassingen in fintech" | geen | kader "In het kort" (3 punten) en lede geven al een samenvatting; 4 FAQ-vragen in details |
| `/markten/automotive` (C7-04) | Branche | Kennisbank | Eigen blok met nieuwe vraagkop, na de hero en voor de eerste H2 "AI toepassingen in automotive" | geen | kader "In het kort" (3 punten) en lede geven al een samenvatting; 4 FAQ-vragen in details; dienstprijzen via token: ai-readiness-assessment |
| `/markten/onderwijs` (C7-05) | Branche | Kennisbank | Eigen blok met nieuwe vraagkop, na de hero en voor de eerste H2 "AI in het onderwijs: toepassingen, kansen en uitdagingen" | geen | kader "In het kort" (3 punten) en lede geven al een samenvatting; 5 FAQ-vragen in details; dienstprijzen via token: ai-readiness-assessment; robots: noindex, follow |
| `/markten/luchtvaart` (C7-06) | Branche | Kennisbank | Eigen blok met nieuwe vraagkop, na de hero en voor de eerste H2 "AI in de luchtvaart: toepassingen, kansen en uitdagingen" | geen | kader "In het kort" (3 punten) en lede geven al een samenvatting; dienstprijzen via token: ai-readiness-assessment; robots: noindex, follow |
| `/markten/overheid` (C7-07) | Branche | Kennisbank | Eigen blok met nieuwe vraagkop, na de hero en voor de eerste H2 "AI voor de overheid: kansen, toepassingen en uitdagingen" | geen | kader "In het kort" (3 punten) en lede geven al een samenvatting; 5 FAQ-vragen in details; dienstprijzen via token: ai-readiness-assessment; robots: noindex, follow |
| `/ai-beleid` (C8-00) | Hub | Dienst of dienstenoverzicht (zie 5.4) | Eigen blok met nieuwe vraagkop, na de hero en voor de eerste H2 "Waarom een AI beleid nodig is" | geen | kader "In het kort" (3 punten) en lede geven al een samenvatting; 5 FAQ-vragen in details; dienstprijzen via token: ai-readiness-assessment, fractional-ai-lead |
| `/ai-beleid/ai-act` (C8-01) | Spoke | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is de AI Act?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 2 bestaande tabel(len); 5 FAQ-vragen in details |
| `/ai-workshop` (C9-00) | Hub | Dienst of dienstenoverzicht (zie 5.4) | Direct onder bestaande H2, voor de eerste alinea daaronder | "Investering" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 5 FAQ-vragen in details; dienstprijzen via token: executive-briefing; ook vraagkop "Waarom een AI workshop?" aanwezig |
| `/ai-workshop/copilot-training` (C9-02) | Spoke | Dienst of dienstenoverzicht (zie 5.4) | Direct onder bestaande H2, voor de eerste alinea daaronder | "Programma en investering" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len); 4 FAQ-vragen in details; ook vraagkop "Wat leer je in de Copilot training?" aanwezig |
| `/ai-workshop/chatgpt-training` (C9-03) | Spoke | Dienst of dienstenoverzicht (zie 5.4) | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat leer je?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 4 FAQ-vragen in details |
| `/ai-workshop/ai-coaching` (C9-04) | Spoke | Dienst of dienstenoverzicht (zie 5.4) | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is AI coaching?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 4 FAQ-vragen in details |
| `/ai-workshop/ai-geletterdheid-training` (C9-05) | Spoke | Dienst of dienstenoverzicht (zie 5.4) | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is AI geletterdheid?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 5 FAQ-vragen in details |
| `/kennisbank/chatgpt-voor-bedrijven` (C10-01) | Kennisbank | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat kan ChatGPT voor bedrijven?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len) |
| `/kennisbank/claude-voor-bedrijven` (C10-02) | Kennisbank | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is Claude?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len) |
| `/kennisbank/gemini-voor-bedrijven` (C10-03) | Kennisbank | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is Gemini?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 2 bestaande tabel(len) |
| `/kennisbank/microsoft-copilot-voor-bedrijven` (C10-04) | Kennisbank | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is Microsoft Copilot?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; 1 bestaande tabel(len) |
| `/kennisbank/prompt-engineering` (C10-05) | Kennisbank | Kennisbank | Direct onder bestaande H2, voor de eerste alinea daaronder | "Wat is prompt engineering?" | kader "In het kort" (3 punten) en lede geven al een samenvatting; woord met "gids" in bodytekst: gidsen, promptgids, promptgidsen |

Wat hier uit volgt:

- **Bloktype voor hubs en spokes met `schema: service`.** Onderwerpen als AI consultancy, AI implementatie, AI agents of een workshop zijn geen dienst in de databron: ze hebben geen eigen prijs of doorlooptijd. Het bloktype "Dienst" (wat het oplevert en kost, met vanaf-prijs) is daar niet in te vullen zonder nieuwe feiten. Wel haalbaar is het type "Dienstenoverzicht": per situatie de passende bestaande dienst met de eerste stap, met prijs en doorlooptijd uit `prijzen.ts`. Zie open vraag 4.
- **Het kader "In het kort" en de lede** staan op elke contentpagina en zijn al een samenvatting. De antwoordalinea van het blok mag daar geen zin uit overnemen.
- **Dubbele vraagkoppen bestaan nu al:** "Wat kost AI consultancy?" staat als H2 op `/ai-consultancy` en `/tarieven`, en "Wat is AI automatisering?" op `/ai-automatisering` en `/kennisbank/rpa-vs-ai-automatisering`. De controle "dubbele vraagkop op een andere pagina" zou op de bestaande staat dus al falen. Zie open vraag 7.
- **Vijf branchepagina's staan op `noindex`.** Voorstel: die overslaan tot ze gepubliceerd worden.

### 5.5 Inzichten (12 artikelen)

Opbouw: hero (H1 in twee regels, lede, auteur, rechts "In het kort") → carrousel → artikelbody uit `article.body` (HTML-string, `set:html`) met rechts "Key takeaways" → "Verder lezen" → CTA.

| URL | H1 | Plek van het blok | Bestaande kop die de vraag al stelt | Overlap en aandachtspunten |
|---|---|---|---|---|
| `/inzichten/ai-adoptie-begint-bij-het-werk` | AI-adoptie begint bij het werk | Eigen blok na de hero, voor de eerste H2 "Het patroon dat zich overal herhaalt" | geen | kader "In het kort" en lede vatten het artikel al samen; "Key takeaways" in de zijkolom |
| `/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen` | AI-agents: wat ze wel en niet kunnen | Eigen blok na de hero, voor de eerste H2 "Wat een agent anders maakt" | geen | kader "In het kort" en lede vatten het artikel al samen; "Key takeaways" in de zijkolom |
| `/inzichten/ai-governance-zonder-bureaucratie` | AI-governance zonder bureaucratie | Eigen blok na de hero, voor de eerste H2 "Het echte risico van AI-governance" | geen | kader "In het kort" en lede vatten het artikel al samen; "Key takeaways" in de zijkolom |
| `/inzichten/ai-vendorselectie-in-acht-stappen` | AI-vendorselectie in acht stappen | Eigen blok na de hero, voor de eerste H2 "Waarom AI-selectie anders is" | geen | kader "In het kort" en lede vatten het artikel al samen; "Key takeaways" in de zijkolom |
| `/inzichten/build-buy-of-partner` | Build, buy of partner: wat past bij jouw situatie? | Eigen blok na de hero, voor de eerste H2 "Waarom deze keuze zwaarder weegt bij AI" | geen | kader "In het kort" en lede vatten het artikel al samen; "Key takeaways" in de zijkolom; H1 is zelf de vraag: vraagkop van het blok mag die niet letterlijk herhalen |
| `/inzichten/de-business-case-voor-ai` | De business case voor AI, eerlijk berekend | Eigen blok na de hero, voor de eerste H2 "Waar AI-businesscases sneuvelen" | geen | kader "In het kort" en lede vatten het artikel al samen; "Key takeaways" in de zijkolom; bedragen in rekenvoorbeeld: €250.000, €412.000, €500.000 |
| `/inzichten/freelance-ai-consultant-vs-agency-vs-big4` | Freelance AI consultant vs agency vs Big 4 | Direct onder bestaande H2 | "Wanneer kies je voor wie?" | kader "In het kort" en lede vatten het artikel al samen; "Key takeaways" in de zijkolom |
| `/inzichten/het-datafundament-onder-ai` | Het datafundament onder je AI-initiatieven | Eigen blok na de hero, voor de eerste H2 "Twee waarheden die elkaar tegenspreken" | geen | kader "In het kort" en lede vatten het artikel al samen; "Key takeaways" in de zijkolom |
| `/inzichten/van-ai-strategie-naar-waarde` | Van AI-strategie naar echte waarde | Eigen blok na de hero, voor de eerste H2 "Waar het misgaat tussen strategie en resultaat" | geen | kader "In het kort" en lede vatten het artikel al samen; "Key takeaways" in de zijkolom; bedragen in rekenvoorbeeld: €400.000 |
| `/inzichten/waarom-ai-pilots-blijven-steken` | Waarom AI-pilots blijven steken | Eigen blok na de hero, voor de eerste H2 "De pilotparadox" | geen | kader "In het kort" en lede vatten het artikel al samen; "Key takeaways" in de zijkolom |
| `/inzichten/wanneer-heb-je-echt-een-ai-strateeg-nodig` | Wanneer heb je echt een AI-strateeg nodig? | Eigen blok na de hero, voor de eerste H2 "Eerst: wanneer je het zelf beter kunt" | geen | kader "In het kort" en lede vatten het artikel al samen; "Key takeaways" in de zijkolom; H1 is zelf de vraag: vraagkop van het blok mag die niet letterlijk herhalen |
| `/inzichten/welke-ai-use-cases-leveren-resultaat` | Welke AI-use cases leveren écht resultaat op? | Eigen blok na de hero, voor de eerste H2 "Het patroon achter de winnaars" | geen | kader "In het kort" en lede vatten het artikel al samen; "Key takeaways" in de zijkolom; H1 is zelf de vraag: vraagkop van het blok mag die niet letterlijk herhalen |

De body van een inzicht is één HTML-string. "Direct onder een bestaande H2" plaatsen kan daar alleen door de string te splitsen bij die kop; het databestand zelf hoeft niet te wijzigen.

### 5.6 Overige pagina's

| URL | Vraag | Voorstel |
|---|---|---|
| `/` | Geen enkele koop- of keuzevraag; verwijst door | Geen blok |
| `/werkwijze` | Hoe verloopt een opdracht? | Twijfelgeval. Bestaande H2 "Mijn 4-stappen aanpak." is geen vraag. Voorstel: geen blok in de eerste ronde. Zie open vraag 6 |
| `/over` | Wie is de adviseur? | Geen blok in de eerste ronde. De pagina bevat de claim "20+ jaar ervaring", zie hoofdstuk 6 |
| `/veelgestelde-vragen` | 24 losse vragen | Geen blok. Alle antwoorden staan in `<details>`; die pagina past niet op het bloktype |
| `/inzichten`, `/kennisbank`, `/markten` | Overzichten | Geen blok op `/inzichten` en `/kennisbank`. `/markten` staat in de tabel van 5.4 |
| `/contact`, `/privacy`, `/algemene-voorwaarden`, `/404` | Geen koop- of keuzevraag | Geen blok |

## 6. Overlap en conflicten

### 6.1 Feiten op de pagina die afwijken van de databron

Databron voor prijs en doorlooptijd is `src/data/prijzen.ts` (prijsmodel van 24 september 2026). Volgens de briefing wordt bij een conflict niets aangepast en de pagina overgeslagen.

| Pagina | Op de pagina | In de databron | Herkomst van de afwijking |
|---|---|---|---|
| `/diensten/ai-readiness-assessment` | Meta description "In 3 weken", lede "binnen drie weken", H2 "Drie weken, vier vaste blokken", case-kop "na drie weken" | Doorlooptijd "2-3 weken" | Vaste teksten in `services.js` naast het veld uit `prijzen.ts` |
| `/diensten/ai-readiness-assessment` | H2 noemt "vier vaste blokken", de aanpak toont er drie (Week 1, 2, 3) | n.v.t. | Interne tegenstrijdigheid, geen databronconflict |
| `/`, `/diensten` en de dienstpagina's Readiness Assessment, Fractional AI Lead, Vendor Review en Executive Briefing (kaart "Ook interessant") | Kaart van de AI Strategy Sprint: "board-ready in zes weken" | "4-6 weken" | Vaste tekst `cardText`. Zwak: zes weken is de bovengrens |
| `/diensten/executive-briefing` | Feit "Duur: 3 uur + voorbereiding"; ook `/tarieven` spreekt van "een sessie van drie uur" | "1 dagdeel incl. voorbereiding" | Hardcoded in `facts`, leest niet uit `prijzen.ts`. Inhoudelijk verenigbaar, de formulering verschilt |
| `/`, `/diensten` en de dienstpagina's AI Strategy Sprint en AI Due Diligence (kaart "Ook interessant") | Kaart van de Fractional AI Lead: "Ik stuur, bouw mee en borg AI-initiatieven" | Feitenblad: bouwt en verkoopt zelf geen software of implementaties | Vaste tekst `cardText` |
| `/diensten/fractional-ai-lead` | FAQ "Hoeveel dagen heb ik nodig?" noemt 2 en 4 dagen | Drie niveaus: 2, 4 of 8 dagen | FAQ ouder dan het prijsmodel |
| `/cases/ai-roadmap-internationale-maakorganisatie` | "fractional AI lead voor drie dagen per maand" | Niveaus van 2, 4 of 8 dagen | Casetekst ouder dan het prijsmodel |
| `/cases/kyc-documentanalyse-financial-services` | Dienst "AI Strategy Sprint", duur "4 maanden"; de kaart ernaast toont "4-6 weken" | Sprint duurt 4-6 weken | Case gekoppeld aan een dienst met een andere doorlooptijd |
| `/cases/interne-ai-assistent-kenniswerkers` | "bouwden we een kant-en-klaar startpunt" | Feitenblad: bouwt niet zelf | Casetekst |
| `/over` en elke pagina met het portret | "20+ jaar ervaring" (meta description van `/over` en sticker in `HeroPortrait.astro`) | Feitenblad: niet claimen: jaren ervaring | Template |
| `/` | Cijferstrook: "10 strategische AI-trajecten", "€2,1M+ waarde gerealiseerd", "8 MT's", "32%" | Feitenblad: niet claimen; README: illustratief | `metrics` in `site.js` |
| Alle dienstpagina's met een case-blok | Cijfers uit cases (bijvoorbeeld "€1,2M impactpotentieel", "€1,1M bespaard") | README: illustratief | `proof.stats` in `services.js` |

Geen conflict gevonden in de prijzen zelf: alle bedragen op alle 90 pagina's komen uit `prijzen.ts`, rechtstreeks of via tokens.

Twee kleinere waarnemingen bij regel 4 van de briefing (nooit een uurtarief):

- Het woord "uurtarief" staat op `/tarieven`, `/ai-consultancy` en `/ai-consultancy/ai-consultant-inhuren`, telkens om uit te leggen dat er **geen** uurtarief wordt gehanteerd. Geen bedrag per uur of dag op de site.
- Bij Fractional AI Lead is uit "€2.600 per maand" voor "2 dagen" een bedrag per dag af te leiden. Dat staat er nu al zo; een blok met de drie niveaus in een tabel maakt die som zichtbaarder. Zie open vraag 9.

### 6.2 Waar het blok bestaande tekst zou herhalen

| Paginatype | Bestaande tekst met dezelfde functie | Risico |
|---|---|---|
| Dienst | Lede, feitenstrook, prijsnotitie, lijst "Voor organisaties die:", FAQ in `details` | Middel: zelfde feiten, andere vorm. Vervolgvragen moeten afwijken van de bestaande FAQ |
| Dienstenoverzicht | Vergelijking `#vergelijking` en dienstkaarten met duur en prijs | Hoog: tweede vergelijking op één pagina |
| Tarieven | H1 als vraag, tabel met alle pakketten, H3 per pakket | Zeer hoog: zie open vraag 5 |
| Case | "Bewijs in cijfers" en de vijf verhaalstappen | Hoog, maar niet aan de orde zolang cases worden overgeslagen |
| Contentplanning | Lede, kader "In het kort", bestaande vraag-H2 met antwoord eronder, FAQ in `details` | Hoog op pagina's waar de eerste H2 al de vraag van de pagina stelt en de eerste alinea daaronder al het antwoord geeft. Het blok komt dan tussen kop en bestaande alinea en moet iets anders zeggen dan die alinea |
| Inzicht | Lede, kader "In het kort", "Key takeaways" | Hoog: drie bestaande samenvattingen |

## 7. Kandidaten nieuw

Er zijn geen geplande pagina's meer die nog niet gebouwd zijn (zie hoofdstuk 3). Punt 7 van de briefing en de pilot "plaats het op één nieuwe pagina" hebben daardoor geen onderwerp. Zie open vraag 2.

Voor de 55 pagina's uit de planning geldt, als antwoord op de vraag of er genoeg data is voor een compleet blok:

| Groep | Aantal | Genoeg data? |
|---|---|---|
| Kennisbankartikelen, branchepagina's en artikel-spokes (`schema: article`) | 34 | Feiten: ja, geen eigen prijs of doorlooptijd nodig. Teksten (antwoordalinea, vervolgvragen): nee, als concept te schrijven. Bron en datum: `sources` en `updated` staan in de frontmatter |
| Hubs en spokes met `schema: service` rond een adviesonderwerp | 13 | Alleen als type "Dienstenoverzicht" met verwijzing naar de zes diensten. Niet als type "Dienst" |
| Workshop, training en coaching (`/ai-workshop` en vier spokes) | 5 | Nee: geen prijs en geen doorlooptijd in de databron |
| `/tarieven` | 1 | Ja voor zes diensten; nee voor de rij workshop en training |
| `/partnernetwerk` | 1 | Nee: geen partnernamen of partnertypes als feit (staat ook in de planning als "input nodig") |
| `/kennisbank` | 1 | Geen blok |

De kolom "Input nodig van Dave" in de planning staat bij 18 pagina's nog op "Case of resultaat voor bewijsblok; vanaf-prijs indien dienst op /tarieven/ staat". De vanaf-prijzen zijn inmiddels geleverd via `prijzen.ts`; de case of het resultaat niet (daar staan nu fictieve voorbeeldscenario's, als zodanig gelabeld).

## 8. Datagaten

### 8.1 Per dienst

Aanwezig voor alle zes: naam, URL, prijs (`price`, `minPrice`, `maxPrice`), doorlooptijd (`timing`), prijsnotitie.

| Dienst | Resultaat (1 zin) | Doelgroep (tekst) | Doorlooptijd | Vanaf-prijs | Pakketten | Laatst gecontroleerd |
|---|---|---|---|---|---|---|
| AI Readiness Assessment | Ontbreekt als zin. Er is alleen het label "Readiness-rapport + 90-dagenplan" | Ontbreekt als zin. Er is een lijst van 4 punten | 2-3 weken, maar strijdig met "drie weken" op de pagina | €7.000 (vast) | Geen | Ontbreekt |
| AI Strategy Sprint | Alleen label "Board-ready roadmap" | Alleen lijst | 4-6 weken | €15.400 (bandbreedte tot €22.400) | Geen | Ontbreekt |
| Fractional AI Lead | Geen label voor resultaat (feiten tonen ritme en looptijd) | Alleen lijst | "2, 4 of 8 dagen / maand" is een ritme, geen doorlooptijd. Looptijd: minimaal 3 maanden | €2.600 per maand | Advies, Lead, Lead+ met dagen en maandbedrag. Per niveau ontbreken: resultaat en "past bij" (voor Lead+ helemaal; voor Advies en Lead staat er een aanwijzing in de FAQ) | Ontbreekt |
| Vendor Review | Alleen label "Onderbouwd selectieadvies" | Alleen lijst | 3-6 weken | €9.800 (tot €15.400) | Geen | Ontbreekt |
| Executive Briefing | Alleen label "Gedeeld beeld + beslisagenda" | Alleen lijst | Strijdig: "1 dagdeel incl. voorbereiding" tegenover "3 uur + voorbereiding" | €2.800 (vast) | Geen | Ontbreekt |
| AI Due Diligence | Alleen label "DD-rapport + red flags" | Alleen lijst | 2-4 weken | €12.600 (tot €19.600) | Geen | Ontbreekt |

Voor alle zes ontbreekt daarnaast:

- **Bron** voor de bronregel van het blok. De feiten zijn eigen opgave; er is geen tekst vastgelegd voor "Bron: ...".
- **Datum laatst gecontroleerd.** Het feitenblad noemt 24 september 2026 als datum van het prijsmodel. Dat is geen bevestiging per dienst.
- **Vervolgvragen** met een antwoord dat begint met ja, nee of een getal, en die niet al in de bestaande FAQ staan.
- **Naam van de dienst in de vraagkop.** Bij Vendor Review heet de dienst "Vendor Review" in title en kaart en "Vendor Review & selectie" in de H1.

### 8.2 Diensten zonder prijs of doorlooptijd

| Aanbod | Wat ontbreekt |
|---|---|
| AI workshop en training (ook ChatGPT-training, Copilot-training, AI geletterdheid) | Vanaf-prijs of bandbreedte, doorlooptijd. Het feitenblad zegt bewust: vaste prijs per opdracht, geen bedrag noemen. Op `/tarieven` staat "Dagdeel of dag" als vaste tekst |
| AI coaching | Prijs, doorlooptijd |
| Second opinion en afgebakend advies | Prijs, doorlooptijd |
| Assessment voor één afdeling (genoemd in de FAQ van de Readiness Assessment: "doorgaans twee weken", "investering ligt lager") | Prijs |

### 8.3 Cases

| Case | Wat ontbreekt |
|---|---|
| Alle zes | Bevestiging dat de case echt is. Geverifieerde cijfers ("gemeten resultaat"). Toestemming voor de quote. Resultaat per fase in plaats van alleen aan het eind |
| AI roadmap maakorganisatie | Verklaring voor "drie dagen per maand" naast de niveaus 2, 4 en 8 |
| KYC-documentanalyse | Juiste dienst en doorlooptijd (nu Sprint met 4 maanden) |
| Interne AI-assistent | Formulering rond "bouwden we" |

### 8.4 Algemeen

- **Afzender.** Niet vastgelegd welke naam het blok voluit gebruikt: "Dave Willemstein" (`site.name`), "Freelance AI Consultant" (`site.brand`) of de juridische entiteit "4AP Digital" (`site.legal.entity`).
- **Btw-nummer** in `site.js` is nog een voorbeeldwaarde (`NL000000000B00`), met een TODO vóór livegang. Niet relevant voor het blok, wel voor de site.
- **Partnernamen of partnertypes** voor `/partnernetwerk`.
- **Portretfoto** is volgens de README nog die uit het prototype.

## 9. Voorstel voor component en databron

Uitgangspunten: de conventies van de repo volgen, geen nieuwe dependencies, elk feit op één plek, en op bestaande pagina's een diff met alleen toevoegingen.

### 9.1 Databron

| Wat | Waar | Toelichting |
|---|---|---|
| Schema's | `src/data/rag/schema.ts` | Schema's voor Dienst, Pakket en Blok met `z` uit `astro/zod`. Dat is de validatiebibliotheek die Astro al meelevert en die `content.config.ts` ook gebruikt. Geen nieuwe dependency |
| Dienstfeiten | `src/data/rag/diensten.ts` | Per dienst de ontbrekende velden (resultaatzin, doelgroep, laatst gecontroleerd, pakketten). Naam, URL, prijs en doorlooptijd worden **geïmporteerd** uit `services.js` en `prijzen.ts`, niet opnieuw getypt |
| Blokken | `src/data/rag/blokken/<pagina>.ts`, verzameld in `src/data/rag/index.ts` | Eén bestand per pagina. Rijen verwijzen naar een dienst- of pakketslug; prijs en doorlooptijd worden bij het renderen opgehaald |
| Validatie | Bij import | `schema.parse()` bij het laden: een ontbrekend verplicht veld laat `astro build` falen met de naam van het veld |

Waarom datamodules en geen tweede content collection: de repo zet feiten nu al in `src/data/`, de blokken moeten waarden uit `prijzen.ts` kunnen importeren, en de remark-plugin in `astro.config.mjs` moet de blokdata kunnen lezen (dat kan met een gewone import, niet met `astro:content`). `services.js` en `prijzen.ts` blijven ongewijzigd.

### 9.2 Component

| Wat | Waar | Toelichting |
|---|---|---|
| Renderfunctie | `src/lib/rag-blok.js` | Pure functie: blokdata in, HTML-string uit, volgens de referentie-opbouw. Geen tabel bij minder dan twee complete rijen; niets bij ontbrekende vraagkop, antwoordalinea of bron |
| Component | `src/components/RagBlok.astro` | Dunne wrapper rond de renderfunctie, voor de `.astro`-templates (diensten, cases, inzichten, dienstenoverzicht). Volledig server-side, geen `<script>` |
| Plaatsing in Markdown-pagina's | Remark-plugin naast de bestaande `remarkServiceTokens` in `astro.config.mjs` | Voegt het blok in direct onder de kop die in de blokdata is aangewezen, of vóór de eerste H2. De Markdown-bestanden zelf wijzigen niet |
| Styling | `src/styles/rag-blok.css` | Bestaande tokens (`--burgundy`, `--line`, `--muted`, `--paper`). Tabel in een eigen container met `overflow-x: auto`. Geen webfonts of afbeeldingen erbij, dus geen layout shift |

Eén renderfunctie voor beide routes voorkomt twee implementaties van hetzelfde blok. Het blok krijgt een optie om de eigen `h2` weg te laten wanneer het onder een bestaande kop komt, zodat er geen tweede kop met dezelfde vraag ontstaat.

Wat per bestaand bestand wijzigt bij de uitrol:

| Bestand | Wijziging |
|---|---|
| `src/pages/diensten/[slug].astro`, `cases/[slug].astro`, `diensten/index.astro` | Eén import en één regel `<RagBlok />` op de afgesproken plek |
| `src/pages/inzichten/[slug].astro` | Eén import en het splitsen van de body bij de aangewezen kop |
| `astro.config.mjs` | Eén remark-plugin erbij |
| `src/content/pages/**/*.md`, `src/data/*.js`, `src/data/articles/*.js` | Geen |

### 9.3 Controlescripts

| Script | Plek | Doet |
|---|---|---|
| Blokcontroles | `planning/check-rag.mjs` | De geautomatiseerde controles uit de briefing op de gebouwde HTML |
| Voor- en na-controle | `planning/check-nulmeting.mjs` | Leest per URL dezelfde elementen als de nulmeting en toont het verschil |

Ze komen naast `check-content.mjs` en `check-dist.mjs`, de bestaande plek voor controles. Om in de build te draaien is een `postbuild`-script in `package.json` nodig; dat is een wijziging van een bestaand bestand en vraagt akkoord.

Deze scripts moeten HTML betrouwbaar kunnen lezen (koppen, tabellen, links, tekstvolgorde). `check-dist.mjs` doet dat nu met reguliere expressies. Voor de nulmetingscontrole is dat te fragiel. Twee opties: een kleine parser als devDependency (akkoord nodig), of de nulmeting opnieuw vastleggen met het Node-script vóór de eerste wijziging en controleren dat de beschermde velden gelijk zijn aan deze meting. Zie open vraag 8.

## 10. Strijdigheden tussen briefing en repo

| # | Briefing | In de repo | Gevolg |
|---|---|---|---|
| 1 | "Maak eerst een nieuwe branch" | Geen git-repository | Opgelost na akkoord: `git init`, baseline op `main`, branch aangemaakt |
| 2 | Bestaande pagina's krijgen het blok erbij | `planning/SCHRIJFRICHTLIJN.md` regel 1: bronbestanden van B01 tot en met B35 nooit wijzigen | De briefing is leidend. De wijziging blijft beperkt tot één regel per template |
| 3 | Onderscheid tussen bestaande en geplande pagina's | Alle geplande pagina's zijn al gebouwd; niets is live | Punt 7 en de pilot op "één nieuwe pagina" hebben geen onderwerp |
| 4 | Hreflang als beschermd element | Geen hreflang aanwezig | Controle wordt "blijft afwezig" |
| 5 | Controle "vraagkop noemt de dienst" | Kennisbank- en inzichtpagina's gaan niet over een dienst | De controle moet per bloktype verschillen: dienst bij naam of het onderwerp van de pagina |
| 6 | Controle "dezelfde vraag staat niet al op een andere pagina als kop" | Twee vraagkoppen staan nu al op twee pagina's | De controle faalt op de nulstaat |
| 7 | Bloktype Case met "gemeten resultaat" | Casecijfers zijn illustratief | Alle cases overgeslagen |
| 8 | Prijs en doorlooptijd per dienst uit de databron | Dienstpagina's bevatten vaste tekst die afwijkt, het duidelijkst bij de AI Readiness Assessment en de Executive Briefing | Bij strikte toepassing worden die pagina's overgeslagen. Oplossen betekent bestaande tekst wijzigen en vraagt apart akkoord |
| 9 | Geen blok in `details` | Alle bestaande FAQ's staan in `details` | Vervolgvragen kunnen de FAQ-opmaak niet hergebruiken |
| 10 | Dienst heeft pakketten | Alleen Fractional AI Lead heeft niveaus | Vijf van de zes dienstblokken renderen zonder tabel |

## Open vragen

1. **Afwijkingen op dienstpagina's.** Zie hoofdstuk 6.1. Welke tellen als conflict dat een pagina blokkeert: alleen afwijkingen in prijs en doorlooptijd van de dienst zelf (dan vallen de AI Readiness Assessment en de Executive Briefing af), of ook kaartteksten van gerelateerde diensten (dan valt elke dienstpagina af)? En wil je de afwijkende teksten laten aanpassen (wijziging van bestaande tekst, apart akkoord), de databron aanpassen, of de pagina's overslaan? Bij de smalle lezing zijn Vendor Review en AI Due Diligence de schoonste kandidaten voor de pilot.
2. **Pilot op een nieuwe pagina.** Er zijn geen ongebouwde pagina's. Mag een pagina uit de contentplanning (bijvoorbeeld een kennisbankartikel) gelden als de "nieuwe" pagina van de pilot?
3. **Concepten.** De planning levert geen antwoordalinea's, resultaatzinnen, doelgroepzinnen of vervolgvragen. Lever je die aan, of schrijf ik ze als concept ter beoordeling, gemarkeerd als concept?
4. **Hubs en spokes.** Akkoord dat pagina's als `/ai-consultancy` het bloktype "Dienstenoverzicht" krijgen (situatie, passende dienst, eerste stap) in plaats van "Dienst"?
5. **`/tarieven`.** De pagina beantwoordt de vraag al, inclusief tabel. Blok toevoegen onder de bestaande H2 (met veel overlap), of deze pagina overslaan?
6. **Reikwijdte.** Akkoord met geen blok op home, werkwijze, over, veelgestelde vragen, contact, de overzichten en de juridische pagina's, en met het overslaan van de vijf `noindex`-pagina's?
7. **Dubbele vraagkoppen in de nulstaat.** Mag de controle de twee bestaande dubbelingen als bekende uitzondering vastleggen?
8. **Parser voor de controlescripts.** Akkoord op één devDependency voor het lezen van HTML, of liever zonder en de nulmeting opnieuw vastleggen met het Node-script?
9. **Fractional AI Lead.** Mogen de drie niveaus met dagen en maandbedrag naast elkaar in een tabel, gezien de regel "nooit een uurtarief"?
10. **Afzender en bron.** Welke naam gebruikt het blok voluit, en welke tekst komt in de bronregel bij dienstfeiten?
11. **Workshops en training.** Blijft daar bewust geen bedrag staan? Dan krijgen die vijf pagina's geen dienstblok.
12. **Datum laatst gecontroleerd.** Mag 24 september 2026 (datum van het prijsmodel in het feitenblad) gelden voor alle zes de diensten?
