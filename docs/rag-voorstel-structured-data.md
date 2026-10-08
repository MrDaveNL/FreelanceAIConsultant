# Voorstel: structured data bij de RAG-blokken (stap 8)

Stand: 8 oktober 2026. Het voorstel is geteld op de build van die ochtend (63 blokken). Besluit en uitvoering staan onderaan.

## Wat er nu staat

De blokken zelf hebben geen eigen markup. De pagina's waar ze op staan hebben dit, ongewijzigd ten opzichte van de nulmeting:

| Pagina's met een blok | Template | Bestaande markup | Bestaande FAQ-items | Vervolgvragen in de blokken |
|---|---|---|---|---|
| 20 dienstenoverzicht | `src/pages/[...slug].astro` | `@graph`: BreadcrumbList, Service, FAQPage | 97 | 54 |
| 16 kennisbank | `src/pages/[...slug].astro` | `@graph`: BreadcrumbList, Article, FAQPage | 72 | 40 |
| 13 kennisbank | `src/pages/[...slug].astro` | `@graph`: BreadcrumbList, Article | 0 | 28 |
| 12 kennisbank (`/inzichten/...`) | `src/pages/inzichten/[slug].astro` | BlogPosting | 0 | 32 |
| 1 dienst (`/diensten/ai-readiness-assessment`) | `src/pages/diensten/[slug].astro` | Service | 0 | 3 |
| 1 dienstenoverzicht (`/diensten`) | `src/pages/diensten/index.astro` | ProfessionalService (basis uit `BaseLayout.astro`) | 0 | 1 |

Samen: 63 vraagkoppen met antwoordalinea en 158 vervolgvragen, dus 221 vraag-antwoordparen die zichtbaar op de pagina staan en niet in de markup. 36 van de 63 pagina's hebben al een FAQPage voor hun bestaande FAQ.

## Voorstel A: de vragen van het blok in FAQPage (aanbevolen)

Het enige type dat de site al gebruikt en dat past bij wat het blok zichtbaar toont, is FAQPage met Question en Answer.

- **Wat erin komt.** Per blok de vraagkop met de antwoordalinea, daarna elke vervolgvraag met haar antwoord. De tabel en de bronregel niet.
- **Waar de tekst vandaan komt.** Uit dezelfde renderfunctie als de zichtbare HTML (`src/lib/rag-blok.js`), met de tags eraf. Tokens voor prijs en doorlooptijd zijn dan al ingevuld uit `prijzen.ts`. Er wordt niets overgetypt, dus markup en zichtbare tekst kunnen niet uit elkaar lopen.
- **Pagina's met een FAQPage (36).** De items van het blok komen achter de bestaande items in `mainEntity`. De bestaande items blijven gelijk en in dezelfde volgorde.
- **Pagina's zonder FAQPage (27).** Er komt één FAQPage-knoop bij. Op de 13 kennisbankpagina's in het `@graph`. Op de 14 pagina's met één los object (BlogPosting, Service, ProfessionalService) wordt de uitvoer een lijst van twee objecten: het bestaande object, ongewijzigd, en de FAQPage.
- **Blok onder een bestaande kop (19).** De vraag is dan de tekst van die bestaande H2; het antwoord is de antwoordalinea van het blok.

### Wat dit raakt

- **Beschermd element.** Structured data staat op de lijst van beschermde elementen. `check-nulmeting.mjs` meldt nu elke wijziging als fout. De controle krijgt dezelfde regel als voor bodytekst: elke bestaande knoop en elk bestaand FAQ-item moet identiek en in dezelfde volgorde terugkomen, toevoegingen zijn toegestaan. De nulmeting wordt daarna per pagina opnieuw vastgelegd.
- **Nieuwe controle in `check-rag.mjs`.** Elke Question in de markup moet woordelijk in het blok op dezelfde pagina staan, en elk blok moet zijn vragen in de markup hebben. De build faalt bij een verschil.
- **Werkwijze.** Zoals bij de uitrol: eerst de templates in één commit (zonder blok blijft de uitvoer gelijk), daarna per pagina een eigen commit met voor- en na-controle. 63 pagina's.

### Wat het oplevert, en wat ik niet weet

- De vragen van het blok zijn voor een systeem dat JSON-LD leest op dezelfde manier vindbaar als de bestaande FAQ op 36 pagina's. Nu is op die pagina's een deel van de vragen wel gemarkeerd en een deel niet.
- **Geen zichtbaar zoekresultaat.** Voor zover mij bekend toont Google het uitgebreide FAQ-resultaat sinds 2023 alleen nog bij overheids- en gezondheidssites. Dat heb ik voor dit voorstel niet opnieuw nagetrokken.
- **Effect op AI-systemen is niet aangetoond.** Ik heb geen bron die laat zien dat ChatGPT, Perplexity of AI Overviews een antwoord vaker citeren omdat het ook in FAQPage staat. Het blok is juist gebouwd om in de zichtbare HTML op zichzelf te staan. Reken dus op een kleine of geen meetbare winst; de reden om het te doen is samenhang met wat de site al markeert.

## Voorstel B: niets toevoegen

De blokken staan volledig in de ruwe HTML en de bestaande markup blijft byte voor byte gelijk aan de nulmeting. Dit kost niets en houdt het beschermde element onaangeroerd. Het nadeel is alleen de ongelijkheid op de 36 pagina's met een bestaande FAQPage.

## Niet voorgesteld

- **`dateModified` bijwerken.** Het blok heeft een eigen maand in de bronregel. `dateModified` van Article volgt het veld `updated` van de pagina, en dat staat ook zichtbaar in de kop van het artikel. Die twee moeten gelijk blijven; de zichtbare datum is bestaande tekst en blijft dus staan.
- **Markup voor de tabel** (ItemList, Table, OfferCatalog). De site gebruikt dat alleen op `/tarieven`, waar het blok geen tabel heeft.
- **HowTo, QAPage, Speakable.** Passen niet bij de inhoud: QAPage is voor vragen met antwoorden van gebruikers, Speakable is door Google beperkt tot nieuws.
- **Prijs als `priceSpecification` op de dienstpagina's.** Dat is een wijziging van de bestaande Service-markup en staat los van de blokken. Als je dat wilt, is het een eigen voorstel.

## Besluit en uitvoering (8 oktober 2026)

Gekozen: A. Uitgevoerd op alle 68 geplaatste blokken, dus inclusief de vijf dienstblokken die na het voorstel zijn geplaatst.

- 237 vragen toegevoegd aan FAQPage: 68 vraagkoppen met antwoordalinea en 169 vervolgvragen.
- Eerst één commit met het mechanisme, met de uitvoer nog ongewijzigd. Daarna per pagina een eigen commit ("RAG-blok in structured data: /pad"), elk na een build met beide controles.
- Per blok aan en uit te zetten met het veld `markup` in het blokbestand. Een pagina terugdraaien is die ene regel of die ene commit.
- Laatste build: 90 pagina's vergeleken met de nulmeting, 22 ongewijzigd, 68 met alleen toevoegingen, 0 met fouten. 68 blokken, 0 pagina's met fouten.

Twee afwijkingen van het voorstel hierboven:

- **De nulmeting is niet opnieuw vastgelegd.** Dat bleek niet nodig: `check-nulmeting.mjs` vergelijkt de structured data nu per knoop en per FAQ-item en staat alleen toegevoegde FAQ-vragen toe. De nulmeting blijft zo de stand van vóór de blokken, en elke build toetst opnieuw dat de bestaande markup identiek is.
- **De markup komt uit `BaseLayout.astro`, niet uit de vier templates.** Eén plek in plaats van vier; de templates zijn niet aangeraakt.

Niet gedaan: de markup is niet door de Rich Results Test van Google of de validator van schema.org gehaald. De controles hier toetsen dat de JSON geldig is en gelijk aan de zichtbare tekst, niet hoe een zoekmachine haar leest.
