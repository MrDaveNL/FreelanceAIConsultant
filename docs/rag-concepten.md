# RAG-blokken: conceptteksten ter beoordeling

Stand: 6 oktober 2026 · branch `rag-blokken-fase-0` · **niets hiervan is geplaatst**

Dit bestand bevat de conceptteksten voor alle pagina's die nog geen blok hebben, gegroepeerd per paginatype. De drie pilotpagina's staan er niet in; die zijn al geplaatst en staan in `docs/rag-pilot.md`.

De machineleesbare versie staat in `docs/rag-concepten.json`; dit bestand is daaruit gegenereerd (`node planning/concepten-doc.mjs`). Per blok staat de **status**:

- `geverifieerd`: elke zin is in drie lagen bevestigd tegen de eigen pagina en `prijzen.ts`, en er staat geen bevinding open.
- `concept`: er is een zin voorgelegd of er staat een bevinding open. Welke, staat in `docs/rag-verificatie.md`.
- `wacht op publicatie`: de pagina staat op `noindex`; het blok is niet geverifieerd en wordt niet geplaatst.

Jij zet een goedgekeurd blok in de JSON op `akkoord`. Bij de uitrol worden alleen blokken met die status geplaatst.

## Wat er sinds de vorige versie is veranderd

- Onder een bestaande kop is het blok gesplitst: de antwoordalinea direct onder de H2, de vervolgvragen en de bronregel aan het eind van die sectie.
- Prijsniveaus staan voluit, zonder schuine strepen, met bedrag, periode, niveau en omvang uit `prijzen.ts`. Wat een niveau inhoudelijk betekent staat niet in `prijzen.ts` en is nergens ingevuld (datagat).
- Een antwoord op een vervolgvraag begint met het antwoord zelf; een bedrag staat alleen vooraan als de vraag naar het bedrag vraagt.
- Bedragen zijn weggehaald uit blokken op pagina's die zelf geen prijs noemen, tenzij de vraagkop over kosten gaat. De dienst blijft genoemd en gelinkt.
- Kennisbank- en inzichtblokken noemen de afzender alleen in de bronregel.
- `/diensten` heeft geen tabel meer.
- Aantallen die de schrijver zelf had geteld en die niet letterlijk op de pagina staan, zijn eruit gehaald.
- Zinnen die bij de verificatie niet bevestigd werden, zijn geschrapt of staan in `docs/rag-verificatie.md` aan je voorgelegd. Ze zijn niet herschreven.

De links staan op de plek waar de renderfunctie ze zet: één link per doel-URL, in de tabelrij als die er is, anders bij de eerste vermelding. "Sessie van drie uur" bij de Executive Briefing is op de bestaande pagina's blijven staan: in je laatste twee berichten stond bij dat punt nog een open invulveld.

## Overzicht

| Paginatype | Aantal | Onder bestaande kop | Met tabel |
|---|---|---|---|
| Dienstpagina's | 5 | 0 | 0 |
| Dienstenoverzicht en tarieven | 2 | 1 | 0 |
| Hubs en overige hoofdpagina's | 9 | 3 | 3 |
| Spokes (verdiepingspagina's onder een hub) | 17 | 4 | 1 |
| Workshops, training en coaching | 5 | 2 | 0 |
| Branchepagina's | 7 | 1 | 0 |
| Kennisbankartikelen | 13 | 8 | 0 |
| Inzichten (artikelen) | 12 | 0 | 0 |
| **Totaal** | **70** | **19** | **4** |

## 1. Dienstpagina's (5)

### `/diensten/ai-due-diligence`

Pagina: AI Due Diligence

- **Status:** geverifieerd (5 van 7 zinnen bevestigd, 2 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienst
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat we doorgaans vinden").
- **Vraagkop:** Wat levert een AI Due Diligence op en wat kost die?
- **Antwoordalinea:** De AI Due Diligence van Dave Willemstein beoordeelt een AI-propositie of AI-leverancier voor investeerders en voor organisaties die een strategische AI-leverancier binnenhalen. Het resultaat is een DD-rapport met een expliciet oordeel en een overzicht van red flags, gescheiden in deal-breakers en onderhandelpunten. Het onderzoek duurt 2-4 weken en kost €12.600 - €19.600, exclusief btw en reiskosten.
- **Vervolgvragen:**
  1. *Kost een AI Due Diligence van een heel bedrijf meer dan die van één oplossing?* Ja. De AI Due Diligence kost €12.600 - €19.600: één oplossing zit aan de onderkant, een heel bedrijf aan de bovenkant.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: lede, deliverables en 'best passend bij' in services.js. Vervolgvraag 1: prijsnotitie in prijzen.ts. Vervolgvraag 2: 'minder geschikt als'.

### `/diensten/ai-strategy-sprint`

Pagina: AI Strategy Sprint

- **Status:** geverifieerd (8 van 9 zinnen bevestigd, 2 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienst
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom sprints werken en trajecten stranden").
- **Vraagkop:** Wat levert de AI Strategy Sprint op en wat kost die?
- **Antwoordalinea:** De AI Strategy Sprint van Dave Willemstein brengt organisaties die AI serieus willen inzetten maar niet weten waar te beginnen in 4-6 weken van ambitie naar een board-ready AI-strategie en een use-case roadmap. De sprint werkt in vijf werksessies toe naar vier beslismomenten: diagnose, prioriteren, beslissen en ship & govern. De prijs is €15.400 - €22.400, exclusief btw en reiskosten.
- **Vervolgvragen:**
  1. *Is de AI Strategy Sprint goedkoper als er al een AI Readiness Assessment ligt?* Ja. Ligt er al een [AI Readiness Assessment](/diensten/ai-readiness-assessment), dan komt de AI Strategy Sprint aan de onderkant van €15.400 - €22.400 uit; bij meerdere bedrijfsonderdelen aan de bovenkant.
  2. *Hoeveel werksessies telt de AI Strategy Sprint?* Vijf werksessies. De AI Strategy Sprint verdeelt vier vaste beslismomenten over die sessies, met vier tot zes mensen in de kerngroep.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: lede, 'Vier vaste beslismomenten, verdeeld over vijf werksessies', deliverables en 'best passend bij' in services.js. Vervolgvraag 1: prijsnotitie in prijzen.ts. Vervolgvraag 2: 'minder geschikt als'. Vervolgvraag 3: aanpak en de bestaande FAQ over de kerngroep.

### `/diensten/executive-briefing`

Pagina: Executive Briefing

- **Status:** concept (6 van 7 zinnen bevestigd, 2 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** dienst
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom dit nodig is").
- **Vraagkop:** Wat levert een Executive Briefing op en wat kost die?
- **Antwoordalinea:** De Executive Briefing van Dave Willemstein geeft een directie, RvC of RvT een gedeeld en realistisch beeld van wat AI voor de organisatie betekent. Deelnemers krijgen een beslisagenda, een vragenlijst voor toezicht en een beknopte samenvatting. De sessie beslaat 1 dagdeel incl. voorbereiding en kost €2.800, exclusief btw en reiskosten.
- **Vervolgvragen:**
  1. *Wordt de prijs van de Executive Briefing verrekend met een vervolgtraject?* Ja. De Executive Briefing wordt volledig verrekend als binnen 60 dagen een [AI Readiness Assessment](/diensten/ai-readiness-assessment) start.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: lede, deliverables en 'best passend bij' in services.js. Vervolgvraag 1: prijsnotitie in prijzen.ts. Vervolgvraag 2: 'minder geschikt als' en de beschrijving van blok 2 ('Open gesprek, geen slides').
- **Let op:** De pagina zelf spreekt nog van een 'sessie van drie uur'; het blok noemt de doorlooptijd uit prijzen.ts.

### `/diensten/fractional-ai-lead`

Pagina: Fractional AI Lead

- **Status:** geverifieerd (6 van 7 zinnen bevestigd, 2 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienst
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Het gat dat dit vult").
- **Vraagkop:** Wat kost een Fractional AI Lead en voor wie is die rol bedoeld?
- **Antwoordalinea:** De Fractional AI Lead van Dave Willemstein geeft organisaties met lopende AI-initiatieven zonder duidelijke eigenaar senior AI-leiderschap in deeltijd. De rol kost €2.600 per maand voor Advies (2 dagen per maand), €5.200 per maand voor Lead (4 dagen per maand) en €10.400 per maand voor Lead+ (8 dagen per maand) voor de niveaus Advies, Lead en Lead+, met 2, 4 of 8 dagen per maand. De minimale looptijd is 3 maanden en daarna is de rol maandelijks opzegbaar; de bedragen zijn exclusief btw en reiskosten.
- **Vervolgvragen:**
  1. *Is de Fractional AI Lead een fulltime rol?* Nee. De Fractional AI Lead is een deeltijdrol van 2, 4 of 8 dagen per maand en is minder geschikt voor wie iemand zoekt die de hele werkweek beschikbaar is.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: lede, 'best passend bij' en de prijsnotitie in prijzen.ts. Vervolgvraag 1: prijsnotitie. Vervolgvraag 2: 'minder geschikt als'.
- **Let op:** Geen tabel met de drie niveaus. Per niveau ontbreken een resultaat en een 'past bij' (datagat), en een kolom doorlooptijd zou in elke rij dezelfde waarde hebben. Ook staat nog open of de drie maandbedragen naast het aantal dagen in een tabel mogen.

### `/diensten/vendor-review`

Pagina: Vendor Review & selectie

- **Status:** concept (4 van 7 zinnen bevestigd, 0 geschrapt, 3 voorgelegd, 2 bevinding(en) open)
- **Bloktype:** dienst
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waar selectietrajecten misgaan").
- **Vraagkop:** Wat levert een Vendor Review op en wat kost die?
- **Antwoordalinea:** De Vendor Review van Dave Willemstein is een onafhankelijk selectietraject voor organisaties die een AI-leverancier kiezen en die keuze achteraf moeten kunnen uitleggen. Het resultaat is een onderbouwd selectieadvies met scorecards, een TCO-vergelijking over drie jaar en een beslisdocument voor procurement en board. Het traject duurt 3-6 weken en kost €9.800 - €15.400, exclusief btw en reiskosten.
- **Vervolgvragen:**
  1. *Hoeveel leveranciers beoordeelt een Vendor Review?* 2 tot 4. Het aantal leveranciers bepaalt waar de Vendor Review binnen de bandbreedte van €9.800 - €15.400 uitkomt.
  2. *Is een Vendor Review zinvol als de leverancier al gekozen is?* Nee. De Vendor Review is niet bedoeld om een keuze die feitelijk al gemaakt is achteraf te onderbouwen.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: lede, deliverables en 'best passend bij' in services.js. Vervolgvraag 1: prijsnotitie in prijzen.ts. Vervolgvraag 2: 'minder geschikt als'.
- **Let op:** De prijsnotitie noemt 2 tot 4 leveranciers; de case op dezelfde pagina noemt twaalf beoordeelde leveranciers. Het blok volgt de prijsnotitie. De dienst heet 'Vendor Review' in de title en 'Vendor Review & selectie' in de H1; het blok gebruikt 'Vendor Review'.

## 2. Dienstenoverzicht en tarieven (2)

### `/diensten`

Pagina: Diensten die AI-beslissingen helder maken.

- **Status:** concept (7 van 7 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 3 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Altijd hetzelfde startpunt.").
- **Vraagkop:** Welke AI-dienst past bij welke situatie?
- **Antwoordalinea:** Dave Willemstein biedt AI-adviesdiensten met een vaste prijs of een bandbreedte, van een [Executive Briefing](/diensten/executive-briefing) van 1 dagdeel incl. voorbereiding tot een doorlopende rol als [Fractional AI Lead](/diensten/fractional-ai-lead). Welke dienst past, hangt af van de situatie: weten waar de organisatie staat, een strategie vastleggen, een leverancier kiezen of de uitvoering borgen. De bedragen gelden exclusief btw en reiskosten.
- **Vervolgvragen:**
  1. *Is de kennismaking voor een AI-dienst kosteloos?* Ja. Elke AI-dienst begint met een kennismaking van dertig minuten zonder kosten, gevolgd door een voorstel binnen drie werkdagen.
  2. *Staat het exacte bedrag van een AI-dienst vooraf vast?* Ja. Elke AI-dienst heeft een vaste prijs of een bandbreedte, en het voorstel na de kennismaking legt het exacte bedrag vast voordat de opdracht start.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Tabel: de kaartteksten per dienst (cardText in services.js), prijs en doorlooptijd uit prijzen.ts. Antwoord: de intro van de pagina. Vervolgvragen: 'Hoe een opdracht begint' en de notitie onder de vergelijking.
- **Let op:** Geen tabel, volgens je besluit. De pagina heeft een eigen vergelijking van drie diensten.

### `/tarieven`

Pagina: Wat kost een AI consultant? Tarieven en pakketten

- **Status:** geverifieerd (3 van 3 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht (alleen vraagkop, antwoordalinea en bronregel)
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat kost AI consultancy?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat kost AI consultancy? (bestaand)
- **Antwoordalinea:** AI consultancy van Dave Willemstein kost per pakket een vaste prijs, een bandbreedte of een maandbedrag. De [Executive Briefing](/diensten/executive-briefing) is met €2.800 het kleinste pakket, een [AI Readiness Assessment](/diensten/ai-readiness-assessment) kost €7.000 en een [AI Strategy Sprint](/diensten/ai-strategy-sprint) €15.400 - €22.400. De bedragen gelden exclusief btw en reiskosten.
- **Bronregel:** Bron: tarieven en doorlooptijden van Dave Willemstein.
- **Herkomst:** Antwoord: alinea onder 'Wat kost AI consultancy?', de bestaande tabel 'Pakketten en vanaf-prijzen' en de eerste FAQ.
- **Let op:** Volgens je besluit: alleen vraagkop, antwoordalinea en bronregel, geen tweede tabel en geen vervolgvragen. Het blok komt onder de bestaande H2 'Wat kost AI consultancy?'; de bestaande tabel staat één kop lager, onder 'Pakketten en vanaf-prijzen'. De bronregel linkt hier niet, omdat de bron de pagina zelf is. Dezelfde H2 staat ook op /ai-consultancy.

## 3. Hubs en overige hoofdpagina's (9)

### `/ai-agents`

Pagina: AI agents voor bedrijven

- **Status:** concept (10 van 12 zinnen bevestigd, 3 geschrapt, 1 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat kosten AI agents?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat kosten AI agents? (bestaand)
- **Antwoordalinea:** Voor AI agents bestaat geen vast bedrag: de spreiding loopt van een licentie op een bestaand platform tot een maatwerktraject met meerdere koppelingen, en de prijs hangt af van de koppelingen, schrijfrechten, het gebruik, de eisen aan controle en logging en de kwaliteit van de bronnen. Dave Willemstein bouwt zelf geen agents en adviseert onafhankelijk over de keuze van de taak, de specificatie en het aansturen van een bouwpartij. Offertes van meerdere bouwpartijen onafhankelijk laten vergelijken kan met de [Vendor Review](/diensten/vendor-review), die 3-6 weken duurt en €9.800 - €15.400 kost, exclusief btw en reiskosten.
- **Vervolgvragen:**
  1. *Is een offerte voor AI agents compleet als alleen de bouw erin staat?* Nee. Bij AI agents is de bouw een eenmalige post en loopt het beheer door: modelkosten per gebruik, monitoring, periodieke tests, aanpassingen bij veranderende processen of systemen en tijd van een interne eigenaar. Een volledige offerte bevat een inschatting van de kosten over meerdere jaren, inclusief de kosten van een wissel van leverancier.
  2. *Verdient de adviseur aan de bouw van AI agents?* Nee. AI agents worden gebouwd door een partij die de opdrachtgever rechtstreeks contracteert, zonder marge voor de adviseur. De adviseur helpt bepalen welke taak geschikt is, wat van een bouwpartij gevraagd moet worden en hoe de uitvoering bewaakt wordt.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: 'Wat kosten AI agents?' met 'Factoren die de kosten bepalen', summary en de alinea over de Vendor Review. Vervolgvraag 1: 'Kosten voor beheer en optimalisatie'. Vervolgvraag 2: 'Ontwikkeling versus bestaande oplossingen'. Vervolgvraag 3: slotalinea onder 'AI agents voor het MKB'.
- **Let op:** De pagina noemt van de Vendor Review alleen de prijs; de doorlooptijd komt uit de prijstabel in de regels. De pagina noemt ook het AI Readiness Assessment als startpunt, zonder prijs; dat is uit het antwoord gelaten om het bij de kostenvraag te houden. Geen tabel: maar één dienst met prijs op de pagina.

### `/ai-automatisering`

Pagina: AI automatisering: slimmer werken met minder handwerk

- **Status:** geverifieerd (10 van 11 zinnen bevestigd, 3 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat is AI automatisering?").
- **Vraagkop:** Waar begint een organisatie met AI automatisering en wat kost advies daarover?
- **Antwoordalinea:** AI automatisering past bij werk met ongestructureerde input, zoals e-mails, documenten en vrije tekst, en begint bij een proces met hoog volume, weinig variatie en een controlestap die al bestaat. Dave Willemstein bouwt zelf geen automatiseringen en verkoopt geen software of licenties, maar adviseert onafhankelijk over wat er geautomatiseerd wordt, wie het bouwt en hoe het blijft werken. Wie nog niet weet welk proces als eerste aan de beurt is, start met het [AI Readiness Assessment](/diensten/ai-readiness-assessment): in 2-3 weken een gevalideerde lijst met kansen en een 90-dagenplan voor €7.000, exclusief btw en reiskosten.
- **Vervolgvragen:**
  1. *Wordt AI automatisering door de adviseur zelf gebouwd?* Nee. AI automatisering wordt gebouwd door het eigen team van de opdrachtgever of door een partner die de opdrachtgever rechtstreeks contracteert, zonder marge voor de adviseur. De adviseur levert een procesbeschrijving met nulmeting, een geprioriteerde lijst, een beslisdocument over bouwen, kopen of een partner inschakelen en een meetopzet, en toetst de oplevering aan de afgesproken criteria.
  2. *Uit hoeveel kostenposten bestaat AI automatisering?* Vier posten bepalen de kosten van AI automatisering: de eenmalige inrichting, licenties voor het platform, verbruikskosten van het AI-model per verwerkt document of bericht, en beheer. Verbruik en beheer worden het vaakst vergeten.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: lede, summary en de alinea's onder 'Zo pak ik AI automatisering aan', inclusief de slotalinea over het AI Readiness Assessment. Vervolgvraag 1: 'Zo pak ik AI automatisering aan'. Vervolgvraag 2: 'Kosten en terugverdientijd'. Vervolgvraag 3: 'Tools en workflows'.
- **Let op:** De bestaande H2 'Wat is AI automatisering?' bevat het onderwerp, maar is een definitievraag en geen kosten- of keuzevraag; daarom een eigen vraagkop. De kostenvraag van de pagina zelf staat in een H3 en het rekenvoorbeeld is fictief, dus niet gebruikt. Geen tabel: de pagina noemt maar één dienst.

### `/ai-beleid`

Pagina: AI beleid en governance voor organisaties

- **Status:** concept (9 van 14 zinnen bevestigd, 7 geschrapt, 1 voorgelegd, 3 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom een AI beleid nodig is").
- **Vraagkop:** Wat hoort er in een AI beleid en met welke dienst begint een organisatie?
- **Antwoordalinea:** Een AI beleid legt in één tot drie pagina's vast welke tools zijn toegestaan, welke gegevens erin mogen, wie beslist en hoe risico's worden beheerst. Dave Willemstein begeleidt het opstellen en toetst het beleid tegen de praktijk; wie eerst de uitgangspositie wil kennen, start met het AI Readiness Assessment van 2-3 weken voor €7.000. Voor het opzetten en bewaken van de governance is er de Fractional AI Lead voor €2.600 per maand voor Advies (2 dagen per maand), €5.200 per maand voor Lead (4 dagen per maand) en €10.400 per maand voor Lead+ (8 dagen per maand).
- **Tabel:** AI beleid opstellen en borgen: passende dienst per situatie

  | Situatie | Resultaat | Doorlooptijd | Prijs | Passende dienst |
  |---|---|---|---|---|
  | Uitgangspositie nog onbekend voordat het AI beleid wordt geschreven | Uitgangspositie in kaart, met een risico- en compliance-scan en de positie onder de AI-verordening | 2-3 weken | €7.000 | [AI Readiness Assessment](/diensten/ai-readiness-assessment) |
  | Geen eigen capaciteit om de AI governance te trekken | Governance en cadans opgezet en bewaakt | 2, 4 of 8 dagen per maand | €2.600 per maand voor Advies (2 dagen per maand), €5.200 per maand voor Lead (4 dagen per maand) en €10.400 per maand voor Lead+ (8 dagen per maand) | [Fractional AI Lead](/diensten/fractional-ai-lead) |

- **Vervolgvragen:**
  1. *Hoort bij een AI beleid een aparte commissie voor AI governance?* Nee. Ontbreekt de capaciteit om dat zelf te trekken, dan kan de Fractional AI Lead de governance en cadans opzetten en bewaken.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: lede, 'Onderdelen van een AI beleid', de FAQ over het laten schrijven van een beleid, 'AI governance inrichten' en de slotalinea's van 'AI-beleid voor het MKB'. Tabel: dezelfde twee dienstalinea's plus de prijstabel. Vervolgvragen: 'AI-beleid voor het MKB: voorbeeld en template', 'AI Act en compliance' en 'AI governance inrichten'.
- **Let op:** Geen bestaande H2 in vraagvorm, daarom een eigen vraagkop. Het begeleiden van het opstellen zelf heeft op de pagina geen prijs of doorlooptijd; het blok noemt daar dus geen bedrag bij. De lede-claim 'in een paar weken een eerste versie' is niet overgenomen, omdat die op een doorlooptijd van een dienst kan lijken. Vervolgvraag 2 overlapt met een FAQ op /ai-beleid/ai-act, niet met een FAQ op deze pagina. Voorbeeldscenario (installatiebedrijf) niet gebruikt.

### `/ai-consultancy`

Pagina: AI consultancy: strategisch advies dat tot resultaat leidt

- **Status:** geverifieerd (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat kost AI consultancy?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat kost AI consultancy? (bestaand)
- **Antwoordalinea:** AI consultancy van Dave Willemstein wordt geleverd in vaste pakketten met zichtbare vanaf-prijzen, niet tegen een open uurtarief. Het [AI Readiness Assessment](/diensten/ai-readiness-assessment) duurt 2-3 weken en kost €7.000, de [AI Strategy Sprint](/diensten/ai-strategy-sprint) duurt 4-6 weken en kost €15.400 - €22.400, en de [Fractional AI Lead](/diensten/fractional-ai-lead) is een doorlopende rol van 2, 4 of 8 dagen per maand voor €2.600 per maand voor Advies (2 dagen per maand), €5.200 per maand voor Lead (4 dagen per maand) en €10.400 per maand voor Lead+ (8 dagen per maand). Afgebakend advies en second opinions krijgen een vaste prijs in het voorstel, en bij alle bedragen komen btw en reiskosten nog bovenop.
- **Vervolgvragen:**
  1. *Wat kost AI consultancy voor een directie of raad van commissarissen?* €2.800 is de prijs van de [Executive Briefing](/diensten/executive-briefing), bedoeld voor directie en raad van commissarissen die hun toezichtrol op AI willen invullen. De Executive Briefing duurt 1 dagdeel incl. voorbereiding en wordt voorbereid op de sector van de organisatie.
  2. *Kan AI consultancy ook voor één afdeling in plaats van de hele organisatie?* Ja. Het AI Readiness Assessment kan ook voor één afdeling of één procesdomein worden uitgevoerd. Die variant is korter en vraagt een lagere investering dan een assessment van de hele organisatie.
  3. *Is er bij AI consultancy een belang bij de leverancier of de omvang van de bouwopdracht?* Nee. Bij AI consultancy aan de advieskant wordt geen software, AI-agent of implementatie gebouwd of verkocht. Het bouwen doet het eigen team of een partner die de opdrachtgever rechtstreeks contracteert, waardoor het advies niet afhangt van een grotere scope of een bepaalde leverancier.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: alinea's en prijstabel onder 'Wat kost AI consultancy?'. Vervolgvraag 1: alinea 'Governance en compliance' plus de tabelrij Executive Briefing. Vervolgvraag 2: alinea 'Praktisch en binnen budget'. Vervolgvraag 3: 'Wat is AI consultancy?' (tweede alinea) en 'Begeleiding bij implementatie'.
- **Let op:** Geen tabel geleverd, de pagina heeft onder deze kop al een eigen prijstabel. De Executive Briefing staat niet in het antwoord maar in vervolgvraag 1, om het antwoord op drie zinnen te houden. Vervolgvraag 3 raakt inhoudelijk aan de bestaande FAQ over het verschil met een implementatiepartij, maar stelt een andere vraag.

### `/ai-development`

Pagina: AI development: AI-oplossingen op maat laten ontwikkelen

- **Status:** concept (13 van 14 zinnen bevestigd, 0 geschrapt, 1 voorgelegd, 2 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat is AI development?").
- **Vraagkop:** Wat kost onafhankelijke begeleiding bij AI development en wie bouwt er?
- **Antwoordalinea:** Dave Willemstein bouwt zelf geen software, maar begeleidt AI development vanuit de kant van de opdrachtgever: specificatie, selectie van de bouwpartij, toetsing van opleveringen en governance. Voor de keuze van de bouwpartij is er de Vendor Review van 3-6 weken voor €9.800 - €15.400, en tijdens de bouw de Fractional AI Lead voor €2.600 per maand voor Advies (2 dagen per maand), €5.200 per maand voor Lead (4 dagen per maand) en €10.400 per maand voor Lead+ (8 dagen per maand). De bouw zelf ligt bij het eigen team of bij een ontwikkelpartij met wie de opdrachtgever rechtstreeks een contract sluit.
- **Tabel:** AI development: passende dienst per fase van het traject

  | Fase in het traject | Wat de opdrachtgever krijgt | Doorlooptijd | Prijs | Passende dienst |
  |---|---|---|---|---|
  | Bij de start, als er nog geen scherp beeld is van waar de organisatie staat | Een eerste stap vóór de specificatie, inclusief eindpresentatie aan MT of board | 2-3 weken | €7.000 | [AI Readiness Assessment](/diensten/ai-readiness-assessment) |
  | Bij de keuze van de bouwpartij | Scorecards, een test op eigen data en een TCO-vergelijking over drie jaar | 3-6 weken | €9.800 - €15.400 | [Vendor Review](/diensten/vendor-review) |
  | Tijdens de bouw | Begeleiding vanuit klantzijde: toetsing van opleveringen, bewaking van de business case en governance | 2, 4 of 8 dagen per maand | €2.600 per maand voor Advies (2 dagen per maand), €5.200 per maand voor Lead (4 dagen per maand) en €10.400 per maand voor Lead+ (8 dagen per maand) | [Fractional AI Lead](/diensten/fractional-ai-lead) |

- **Vervolgvragen:**
  1. *Zit er een marge op ontwikkelaars uit het netwerk bij AI development?* Nee. Bij AI development contracteert de opdrachtgever de bouwpartij rechtstreeks, zonder tussenlaag, marge of commissie. Een partij uit het netwerk doorloopt dezelfde selectie als iedere andere partij.
  2. *Hangt de prijs van de Vendor Review bij AI development af van het aantal bouwpartijen?* Ja. De Vendor Review kost €9.800 - €15.400, afhankelijk van het aantal leveranciers dat wordt vergeleken, van 2 tot 4.
  3. *Moet AI development altijd uitkomen op zelf laten bouwen?* Nee. Bij AI development komt eerst de vraag of bouwen, kopen of partneren past: bouwen alleen voor wat de organisatie onderscheidt in de markt, kopen wat een commodity is. Vaak werkt een hybride vorm, met ingekochte bouwstenen en een eigen laag met de kennis van de organisatie.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord en tabel: lede, summary en de lijst 'Wat je concreet van mij krijgt' onder 'Ontwikkelproces'. Vervolgvraag 1: 'Samenwerking met developers uit mijn netwerk'. Vervolgvraag 2: prijsnotitie van de Vendor Review uit de prijstabel in de regels. Vervolgvraag 3: 'Build versus buy'.
- **Let op:** Eigen vraagkop in plaats van de bestaande H2 'Wat is AI development?', omdat het blok over kosten en rolverdeling gaat. In de tabel komen doorlooptijd, prijs en 'inclusief eindpresentatie aan MT of board' van het AI Readiness Assessment uit de prijstabel in de regels; de pagina zelf noemt die dienst alleen als logische eerste stap. De pagina geeft voor de Fractional AI Lead alleen de prijs; de doorlooptijdcel toont de dagen per maand uit de prijstabel. De pagina spreekt bij de Vendor Review over de bouwpartij, de prijstabel over leveranciers.

### `/ai-implementatie`

Pagina: AI implementatie: van plan naar werkende oplossing

- **Status:** geverifieerd (14 van 15 zinnen bevestigd, 3 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat houdt AI implementatie in?").
- **Vraagkop:** Wat kost begeleiding bij AI implementatie en wie bouwt de oplossing?
- **Antwoordalinea:** Bij een AI implementatie bouwt het eigen team of een rechtstreeks gecontracteerde partner de oplossing; Dave Willemstein begeleidt vanuit de kant van de opdrachtgever door te helpen kiezen, kaders te stellen, de oplevering te toetsen en te zorgen dat de toepassing in de organisatie landt. Voor die begeleiding gelden gepubliceerde prijzen: het AI Readiness Assessment duurt 2-3 weken en kost €7.000, en doorlopende sturing door de Fractional AI Lead kost €2.600 per maand voor Advies (2 dagen per maand), €5.200 per maand voor Lead (4 dagen per maand) en €10.400 per maand voor Lead+ (8 dagen per maand). De kosten van bouw of licentie hangen af van de gekozen oplossing en leverancier en worden apart begroot, inclusief het beheer na oplevering.
- **Tabel:** Begeleiding bij AI implementatie: passende dienst per situatie

  | Situatie | Doorlooptijd | Prijs | Passende dienst |
  |---|---|---|---|
  | Onduidelijk of de organisatie klaar is voor een implementatie, of de meningen daarover lopen uiteen | 2-3 weken | €7.000 | [AI Readiness Assessment](/diensten/ai-readiness-assessment) |
  | Een externe bouwpartij selecteren op vooraf vastgelegde criteria, getest op eigen data | 3-6 weken | €9.800 - €15.400 | [Vendor Review](/diensten/vendor-review) |
  | Doorlopende bewaking van meting, beheer en governance zonder fulltime Head of AI | 2, 4 of 8 dagen per maand | €2.600 per maand voor Advies (2 dagen per maand), €5.200 per maand voor Lead (4 dagen per maand) en €10.400 per maand voor Lead+ (8 dagen per maand) | [Fractional AI Lead](/diensten/fractional-ai-lead) |

- **Vervolgvragen:**
  1. *Wordt er een marge gerekend op partners die de AI implementatie bouwen?* Nee. Bij een AI implementatie contracteert de opdrachtgever de bouwpartij rechtstreeks. Er wordt geen marge op partners gerekend en er zijn geen commissies of partnerstatus bij leveranciers.
  2. *Moet er eerst een roadmap liggen voordat een AI implementatie kan starten?* Nee. Een ontbrekende roadmap is geen reden om met een AI implementatie te wachten. Het is wel een reden om het eerste traject klein en goed afgebakend te houden, zodat duidelijk wordt wat de organisatie aankan voordat een tweede toepassing start.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: 'Mijn implementatieaanpak' (inleiding) en 'Kosten en doorlooptijd'. Tabel: 'AI implementatie: van strategie naar praktijk' (AI Readiness Assessment), 'Bouwen en testen' (Vendor Review) en 'Monitoren en optimaliseren' (Fractional AI Lead). Vervolgvragen: 'Bouwen en testen', 'AI implementatie: van strategie naar praktijk' en 'Kosten en doorlooptijd'.
- **Let op:** Geen bestaande H2 met de kostenvraag (alleen de H3 'Kosten en doorlooptijd'), dus eigen vraagkop. De pagina noemt de Vendor Review wel, maar niet de prijs of doorlooptijd ervan; die komen in de tabel via de dienstverwijzing. De pagina zegt 'Waar nodig verzorg ik zelf workshops en trainingen'; dat heb ik weggelaten omdat het geen geprijsde dienst is.

### `/ai-voor-bedrijven`

Pagina: AI voor bedrijven: wat kan AI voor jouw organisatie betekenen?

- **Status:** concept (11 van 12 zinnen bevestigd, 0 geschrapt, 1 voorgelegd, 4 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat kan AI betekenen voor mijn bedrijf?").
- **Vraagkop:** Waar levert AI voor bedrijven in de praktijk het meest op?
- **Antwoordalinea:** AI voor bedrijven levert het meest op bij taken met een hoog volume en weinig variatie, waarvoor de data al bestaat en waarbij een fout zichtbaar en betaalbaar is. De grootste struikelblokken liggen buiten de techniek: ontbrekend eigenaarschap, geen beheer, privacy, regelgeving en schaduwgebruik. Wie eerst wil weten waar de organisatie staat, kan starten met het [AI Readiness Assessment](/diensten/ai-readiness-assessment) van 2-3 weken voor €7.000.
- **Vervolgvragen:**
  1. *Zijn de regels uit de AI Act voor hoog-risicotoepassingen bij AI voor bedrijven uitgesteld?* Ja. Via de Digital Omnibus on AI, die op 27 juli 2026 in werking trad, gelden de regels voor de hoog-risicogebieden uit bijlage III, zoals werving en kredietverlening, vanaf 2 december 2027 en voor AI in gereguleerde producten vanaf 2 augustus 2028. Bij AI voor bedrijven loont het om nu al te weten in welke categorie een toepassing valt.
  2. *Is maatwerk de beste eerste stap bij AI voor bedrijven?* Nee. Bij AI voor bedrijven zit veel waarde in tools en AI-functies die al aanwezig zijn of eenvoudig aan te schaffen zijn. Maatwerk wordt pas zinvol wanneer standaardtools aantoonbaar tekortschieten.
  3. *Voor welke taken wordt AI voor bedrijven in Nederland het vaakst gebruikt?* 35 procent van de AI-gebruikende bedrijven zette AI in 2025 in voor marketing of verkoop, de meest genoemde toepassing volgens het CBS. Administratie of bestuurstaken volgden met 32 procent. Bij bedrijven die AI voor bedrijven overwogen maar niet invoerden, was gebrek aan ervaring de meest genoemde reden.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: alinea's onder 'Kansen en risico's' (kenmerken van toepassingen en de lijst met risico's) en het punt 'Weten waar je staat' onder 'Hoe ik je kan helpen'. Vervolgvraag 1: punt 'Wet- en regelgeving' onder 'Kansen en risico's'. Vervolgvraag 2: punt 'Begin met gebruiken, niet met bouwen' onder 'Zo begin je met AI'. Vervolgvraag 3: CBS-alinea onder 'Wat kan AI betekenen voor mijn bedrijf?'.
- **Let op:** De bestaande H2 'Wat kan AI betekenen voor mijn bedrijf?' bevat het onderwerp 'AI voor bedrijven' niet letterlijk, daarom een eigen vraagkop. Vervolgvraag 2 raakt aan de bestaande FAQ over gebruiken versus laten bouwen, maar stelt een andere vraag.

### `/markten`

Pagina: AI per branche: toepassingen per sector

- **Status:** concept (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 2 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom sectorkennis ertoe doet").
- **Vraagkop:** Wat verschilt er bij AI per branche en wat blijft in elke sector gelijk?
- **Antwoordalinea:** Bij AI per branche zijn de vraagstukken in elke sector dezelfde: bepalen welke toepassingen voorrang krijgen, een leverancier of bouwpartij kiezen en de toepassing na livegang beheersen. De verschillen zitten in de regels, de gevoeligheid van de data en de gevolgen van een fout, en die bepalen hoe zwaar elke stap wordt ingericht.
- **Vervolgvragen:**
  1. *Gelden de hoog-risicoregels van de AI Act al voor AI per branche?* Nee. Wie AI per branche bekijkt, moet rekenen met uitstel: sinds de Digital Omnibus gelden de regels voor hoog-risicotoepassingen vanaf 2 december 2027, en voor AI in producten zoals medische hulpmiddelen vanaf 2 augustus 2028. Welke verplichtingen per toepassing gelden, staat op de pagina over [de AI Act](/ai-beleid/ai-act).
  2. *Staan er bij AI per branche voor elke sector cases op de site?* Nee. Er staan cases uit financiële dienstverlening, retail, industrie en zakelijke dienstverlening in het [overzicht van cases](/cases). Voor zorg, marketing, automotive, onderwijs, luchtvaart en overheid beschrijven de pagina's over AI per branche de vraagstukken en regels, geen eigen resultaten.
  3. *Is het AI Readiness Assessment bruikbaar in elke sector?* Ja. Het [AI Readiness Assessment](/diensten/ai-readiness-assessment) laat zien hoe een organisatie ervoor staat, ongeacht de sector. Het duurt 2-3 weken.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: lede, summary en de alinea's plus het schema onder 'Waarom sectorkennis ertoe doet'. Vervolgvraag 1: slotalinea van 'Sectoren' over de Digital Omnibus. Vervolgvraag 2 en 3: 'Cases per sector', met prijs en doorlooptijd uit de prijstabel.
- **Let op:** De pagina zelf noemt bij het AI Readiness Assessment alleen 'in korte tijd'; doorlooptijd en prijs komen via tokens uit de prijstabel. Het voorbeeldscenario (leasemaatschappij) is niet gebruikt.

### `/partnernetwerk`

Pagina: Geen bureau, wel bureau-capaciteit: mijn partnernetwerk

- **Status:** concept (10 van 11 zinnen bevestigd, 3 geschrapt, 0 voorgelegd, 2 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** antwoordalinea direct onder de bestaande H2 "Waarom geen traditioneel AI bureau?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Waarom geen traditioneel AI bureau? (bestaand)
- **Antwoordalinea:** Een traditioneel AI bureau verkoopt capaciteit en heeft daardoor belang bij een grotere scope, terwijl Dave Willemstein alleen werkt als onafhankelijk AI-adviseur die adviseert en de uitvoering begeleidt zonder zelf iets te bouwen of te verkopen. Is er meer capaciteit nodig voor development, data en BI of training, dan stelt hij partijen voor die hij kent en die de opdrachtgever rechtstreeks contracteert, zonder marge of commissie. Voor het vergelijken van meerdere partijen is er de [Vendor Review](/diensten/vendor-review), die 3-6 weken duurt.
- **Vervolgvragen:**
  1. *Hoeveel typen expertise biedt het partnernetwerk aan wie een AI bureau zoekt?* Drie typen expertise: development, data en BI, en training en verandermanagement. Welke partij past bij wie een AI bureau zoekt, hangt af van de vraag, en eerst wordt bepaald of zelf bouwen, kopen of partneren de juiste keuze is.
  2. *Kan de begeleiding die een AI bureau vervangt ook doorlopend?* Ja. Bij doorlopende trajecten kan de begeleiding als [Fractional AI Lead](/diensten/fractional-ai-lead), voor 2, 4 of 8 dagen per maand. De opdrachtgever houdt daarbij één aanspreekpunt voor advies en regie, terwijl de partner de capaciteit levert.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: 'Waarom geen traditioneel AI bureau?', lede, summary en de lijst onder 'Hoe ik partners selecteer'. Vervolgvraag 1: 'Mijn gescreende partnernetwerk'. Vervolgvraag 2: 'Platforms en technologie'. Vervolgvraag 3: 'Eén aanspreekpunt, schaalbare capaciteit', met prijs en doorlooptijd uit de prijstabel.
- **Let op:** Er zijn geen partnernamen genoemd, want de pagina noemt er geen; de leveranciers in vervolgvraag 2 zijn platformleveranciers waarvan de pagina uitdrukkelijk zegt dat het geen partnerschappen zijn. Twijfel of 'Waarom geen traditioneel AI bureau?' de hoofdvraag is: het is geen kostenvraag, maar wel de keuzevraag van de pagina en het bevat het onderwerp. Prijzen en doorlooptijden van de Vendor Review en de Fractional AI Lead staan niet op de pagina zelf en komen via tokens uit de prijstabel.

## 4. Spokes (verdiepingspagina's onder een hub) (17)

### `/ai-agents/laten-maken`

Pagina: AI agent laten maken: aanpak, kosten en doorlooptijd

- **Status:** concept (8 van 12 zinnen bevestigd, 4 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat kost een AI agent?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat kost een AI agent? (bestaand)
- **Antwoordalinea:** Wat een AI agent kost, hangt af van de route, het aantal koppelingen, de schrijfrechten en controle, het gebruik en het beheer, waardoor een vast bedrag niet te geven is. Dave Willemstein bouwt zelf geen agents en verkoopt geen implementaties, maar helpt de taak afbakenen, de specificatie opstellen, bouwpartijen vergelijken en de uitvoering bewaken. Offertes van meerdere bouwpartijen laten beoordelen kan met de [Vendor Review](/diensten/vendor-review) van 3-6 weken voor €9.800 - €15.400, en wie doorlopend iemand zoekt die het traject bewaakt, kiest de [Fractional AI Lead](/diensten/fractional-ai-lead).
- **Vervolgvragen:**
  1. *Stelt de bouwpartij de specificatie van een AI agent op?* Nee. De specificatie van een AI agent stelt de opdrachtgever zelf op, eventueel met een onafhankelijke adviseur, en pas daarna komt een bouwpartij in beeld. Een specificatie van de partij die ook bouwt, sluit vooral aan op wat die partij het liefst maakt.
  2. *Hangt de prijs van de Vendor Review af van het aantal bouwpartijen voor een AI agent?* Ja. De Vendor Review kost €9.800 - €15.400, afhankelijk van het aantal leveranciers dat wordt vergeleken: 2 tot 4.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: 'Wat kost een AI agent?' met de factorenlijst en de alinea over de Vendor Review en Fractional AI Lead, plus 'Mijn rol'. Vervolgvraag 1: inleiding en figuurbijschrift onder 'Het ontwikkeltraject'. Vervolgvraag 2: prijsnotitie van de Vendor Review uit de prijstabel in de regels. Vervolgvraag 3: 'Beveiliging, privacy en beheer'.
- **Let op:** Onderwerp ingekort tot 'AI agent', omdat de bestaande kostenkop 'Wat kost een AI agent?' de keyphrase 'AI agent laten maken' niet letterlijk bevat. De Fractional AI Lead is zonder prijs genoemd, omdat de pagina daar zelf geen bedrag bij zet. Geen tabel: Vendor Review (eenmalig) en Fractional AI Lead (doorlopend) zijn niet goed vergelijkbaar op doorlooptijd. De toelichting '2 tot 4 leveranciers' staat niet op de pagina zelf, alleen in de prijstabel.

### `/ai-agents/voorbeelden`

Pagina: AI agents voorbeelden: 12 toepassingen voor bedrijven

- **Status:** concept (12 van 12 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("AI agents in klantenservice").
- **Vraagkop:** Welke AI agents voorbeelden passen bij klantenservice, sales, HR en finance?
- **Antwoordalinea:** De AI agents voorbeelden bestaan uit twaalf generieke toepassingen voor klantenservice, sales, HR en finance, zoals mail- en ticketvoorbereiding, leadonderzoek, onboarding en factuurcontrole, elk met de benodigde koppelingen en het moment van menselijke controle. Het zwaartepunt ligt bij voorbereidend werk dat daarna door een mens wordt beoordeeld. Hoeveel zelfstandigheid een agent kan krijgen, hangt af van de vraag of een handeling omkeerbaar is en of de gevolgen intern of extern zijn.
- **Vervolgvragen:**
  1. *Laten de AI agents voorbeelden zien wat een agent bij een bepaald bedrijf heeft opgeleverd?* Nee. De AI agents voorbeelden zijn bewust generiek beschreven en tonen hoe een agent in een proces past. Wat een agent oplevert, hangt af van de volumes, de bronnen en de hoeveelheid controle die het proces vraagt.
  2. *Mag een agent uit de AI agents voorbeelden voor finance zelf boeken of betalen?* Nee. In de AI agents voorbeelden voor finance stelt de agent voor en bevestigt een medewerker elke boeking, omdat een fout in een boeking doorwerkt in rapportages en aangiftes. Afwijkingen en betaalbeslissingen blijven bij de crediteurenadministratie.
  3. *Is er één beste platform voor de AI agents voorbeelden?* Nee. Welk platform bij de AI agents voorbeelden past, hangt af van de software die een organisatie al gebruikt, de eisen aan controle en de eigen technische capaciteit. Het platformoverzicht geeft de stand van september 2026 weer, zonder commissies of andere vergoedingen van de genoemde leveranciers.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: lede, summary, de twaalf genummerde voorbeelden en de matrix onder 'AI agents in klantenservice'. Vervolgvraag 1: inleiding onder 'AI agents in klantenservice'. Vervolgvraag 2: 'AI agents in finance'. Vervolgvraag 3: inleiding onder 'Beste AI agent-platforms'.
- **Let op:** Geen bestaande H2 is een vraag, daarom een eigen vraagkop. 'AI agents voorbeelden' leest als keyphrase wat stroef in lopende zinnen; het is letterlijk aangehouden omdat de vraagkop het onderwerp moet bevatten. De pagina noemt geen dienst, dus geen diensttoken. Het scenario met het productiebedrijf is niet gebruikt.

### `/ai-agents/wat-is-een-ai-agent`

Pagina: Wat is een AI agent? Uitleg, werking en voorbeelden

- **Status:** concept (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is een AI agent?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is een AI agent? (bestaand)
- **Antwoordalinea:** Een AI agent is software die van een mens een doel meekrijgt en daarna grotendeels zelf de route kiest: informatie verzamelen, andere systemen gebruiken, tussenresultaten beoordelen en de volgende stap bepalen. Anders dan een chatbot, die een vraag in een gesprek beantwoordt, voert een AI agent een taak uit in meerdere stappen en kan hij systemen raadplegen en soms wijzigen. De mate van zelfstandigheid is een instelling die de organisatie kiest, van alleen voorbereiden tot volledig zelfstandig werken met controle achteraf.
- **Vervolgvragen:**
  1. *Draait een AI agent meestal op een taalmodel?* Ja. De meeste AI agents draaien op een groot taalmodel dat de opdracht begrijpt en over de volgende stap redeneert. Wat van dat taalmodel een AI agent maakt, zijn de onderdelen eromheen: toegang tot tools en systemen, een geheugen voor de lopende taak en instructies over wat wel en niet mag.
  2. *Is een fout van een AI agent altijd te zien aan het eindresultaat?* Nee. Een AI agent zet meerdere stappen achter elkaar, waardoor een fout uit een vroege stap kan doorwerken zonder dat het eindresultaat er verkeerd uitziet. Logging en tussencontroles zijn bij een AI agent daarom belangrijker dan bij een gewone AI-toepassing.
  3. *Hoeveel vormen van opbouw heeft een AI agent?* Drie vormen: een enkelvoudige AI agent voor één afgebakende taak, een AI agent binnen een AI-workflow met een vaste procesflow, en samenwerkende agents waarbij een coördinerende agent het werk verdeelt. Voor de meeste organisaties is de AI agent binnen een workflow het verstandigste startpunt.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Wat is een AI agent?', de tabel onder 'AI agent versus chatbot' en 'Naar zelfstandigheid' onder 'Soorten AI agents'. Vervolgvraag 1: derde alinea onder 'Wat is een AI agent?'. Vervolgvraag 2: slotalinea onder 'Hoe werkt een AI agent?'. Vervolgvraag 3: 'Naar opbouw' onder 'Soorten AI agents'.
- **Let op:** De pagina noemt geen dienst met prijs of doorlooptijd, dus geen diensttoken. Vervolgvraag 3 raakt de H2 'Soorten AI agents', maar die kop is geen vraag en noemt geen aantal.

### `/ai-automatisering/ai-tools`

Pagina: Beste AI tools voor bedrijven

- **Status:** concept (9 van 9 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Hoe kies je een AI tool?").
- **Vraagkop:** Wat zijn de beste AI tools voor een bedrijf en waar hangt de keuze van af?
- **Antwoordalinea:** De beste AI tools verschillen per situatie: de keuze volgt eerst uit de taak, de software die er al is, data en privacy, beheer, kosten en exit, en pas als laatste uit het merk. Organisaties die in Microsoft 365 of Google Workspace werken, beginnen bij Copilot of Gemini, en voor bedrijfs- of persoonsgegevens komt alleen een zakelijk abonnement met verwerkersovereenkomst in aanmerking. Bij een keuze die meer dan een paar licenties raakt, helpt de [Vendor Review](/diensten/vendor-review) om tot een onderbouwd besluit te komen.
- **Vervolgvragen:**
  1. *Betalen leveranciers voor een plek in de vergelijking van de beste AI tools?* Nee. De vergelijking van de beste AI tools is gebaseerd op de officiële product-, prijs- en privacypagina's van de leveranciers, stand september 2026. Er zijn geen affiliate-, commissie- of partnerrelaties met de genoemde partijen en er staan geen eigen benchmarkcijfers in.
  2. *Is een demo genoeg om uit de beste AI tools te kiezen?* Nee. Ook bij de beste AI tools geldt dat één team een nieuwe tool eerst een paar weken op echt werk gebruikt, met een vooraf afgesproken vraag die de proef moet beantwoorden. Kandidaten worden vergeleken op dezelfde taak met eigen voorbeelden.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: lede, summary, de criterialijst en de keuzeboom onder 'Hoe kies je een AI tool?' en de slotalinea onder 'Vergelijkingstabel'. Vervolgvraag 1: de kanttekening onder 'Hoe kies je een AI tool?'. Vervolgvraag 2: de criterialijst en 'AI tools voor zakelijke dienstverleners'. Vervolgvraag 3: 'Nieuwe AI tools om te volgen' en de slotalinea.
- **Let op:** Toolprijzen en dataopslag per leverancier staan al in de eigen vergelijkingstabel van de pagina en zijn bewust niet herhaald, ook omdat ze snel veranderen. De pagina noemt de Vendor Review en het AI Readiness Assessment zonder prijs of doorlooptijd; daarom geen prijs- of timingtokens.

### `/ai-automatisering/ai-workflows`

Pagina: AI workflows: zo automatiseer je werk van begin tot eind

- **Status:** concept (10 van 11 zinnen bevestigd, 0 geschrapt, 1 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is een AI workflow?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is een AI workflow? (bestaand)
- **Antwoordalinea:** Een AI workflow is een geautomatiseerde keten met een vooraf vastgelegde route, waarin een AI-model alleen de stappen doet die gewone regels niet aankunnen, zoals vrije tekst in een e-mail begrijpen of gegevens uit een pdf halen. De keten bestaat uit deze bouwstenen: trigger, ophalen, AI-stap, controle, actie en logging. Een AI workflow past bij processen die steeds dezelfde stappen kennen; pas als de stappen per geval echt verschillen en een fout omkeerbaar is, komt een AI agent in beeld.
- **Vervolgvragen:**
  1. *Bepaalt het AI-model in een AI workflow zelf welke stappen het zet?* Nee. In een AI workflow ligt de route vooraf vast en vult het AI-model alleen een stap in. Een AI agent krijgt daarentegen een doel en bepaalt zelf de stappen en de tools.
  2. *Kan een AI workflow zonder IT-team of externe partner worden gebouwd?* Ja. Een eenvoudige AI workflow kan een handige collega in een no-code-platform maken. Zodra er koppelingen met kernsystemen of gevoelige gegevens bij komen, is een IT-team nodig of een partner die de opdrachtgever rechtstreeks contracteert.
  3. *In hoeveel stappen komt een AI workflow in gebruik?* Vijf stappen: één proces kiezen en vooraf meten, de route uittekenen met de mensen die het werk doen, bepalen wie bouwt, testen met echte voorbeelden en het beheer regelen vóór livegang. In de testfase loopt de AI workflow een paar weken naast het huidige proces.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Wat is een AI workflow?' met de lijst bouwstenen, en 'AI workflows versus AI agents'. Vervolgvraag 1: 'AI workflows versus AI agents'. Vervolgvraag 2 en 3: de genummerde lijst onder 'Een AI workflow implementeren'.
- **Let op:** De pagina noemt geen dienst met prijs of doorlooptijd, dus geen diensttoken. De onafhankelijkheid van de leveranciers (geen commissie) staat op de pagina maar is in ik-vorm geschreven; niet opgenomen omdat de afzender in vervolgvragen niet mag voorkomen.

### `/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai`

Pagina: Bedrijfsprocessen automatiseren met AI

- **Status:** geverifieerd (9 van 9 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Welke bedrijfsprocessen kun je automatiseren met AI?").
- **Vraagkop:** Hoe pakt een organisatie bedrijfsprocessen automatiseren met AI stap voor stap aan?
- **Antwoordalinea:** Bedrijfsprocessen automatiseren met AI loont vooral bij processen met veel tekst, documenten of vrije input, een hoog volume en een controlestap die al bestaat; werk met nette velden en vaste regels gaat meestal goedkoper en betrouwbaarder zonder AI. De aanpak is: kandidaten scoren, één proces met een eigenaar kiezen, de huidige situatie meten en het proces daarna in vijf stappen omzetten naar een workflow, van nulmeting tot livegang met meten. Welke processen in een organisatie het meeste opleveren, brengt het [AI Readiness Assessment](/diensten/ai-readiness-assessment) in 2-3 weken in kaart.
- **Vervolgvragen:**
  1. *Mag de AI bij bedrijfsprocessen automatiseren zelf versturen, boeken of betalen?* Nee. Bij bedrijfsprocessen automatiseren met AI wordt vooraf vastgelegd dat de AI voorstelt en voorbereidt, en dat versturen, boeken en betalen daarbuiten vallen. Ook wordt vastgelegd wat er gebeurt als de AI twijfelt.
  2. *Is één berekening genoeg om de besparing van bedrijfsprocessen automatiseren met AI in te schatten?* Nee. Bij bedrijfsprocessen automatiseren met AI horen naast de basisberekening extra scenario's: een pessimistisch scenario met lagere adoptie en meer controletijd, en een scenario met het dubbele volume, omdat verbruikskosten meestal meegroeien met het gebruik. Bespaarde uren tellen pas als besparing wanneer ze elders aantoonbaar iets opleveren, zoals minder inhuur.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Welke bedrijfsprocessen kun je automatiseren met AI?', summary, 'Van proces naar geautomatiseerde workflow' en de slotalinea. Vervolgvraag 1: 'Hoe kies je het juiste proces?'. Vervolgvraag 2: stap 'AI-stap bepalen'. Vervolgvraag 3: 'Besparing berekenen', zonder de fictieve bedragen.
- **Let op:** De keyphrase telt vijf woorden; het onderwerp is ingekort tot 'bedrijfsprocessen automatiseren'. De bestaande H2 'Welke bedrijfsprocessen kun je automatiseren met AI?' bevat dat onderwerp niet aaneengesloten, daarom een eigen vraagkop. Als onderwerp 'bedrijfsprocessen' volstaat, kan het blok ook onder die bestaande H2. De pagina noemt alleen de doorlooptijd van het AI Readiness Assessment, geen prijs; de prijs is daarom weggelaten.

### `/ai-beleid/ai-act`

Pagina: De AI Act voor bedrijven: wat moet je doen?

- **Status:** concept (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 2 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat is de AI Act?").
- **Vraagkop:** Wat vraagt de AI Act voor bedrijven nu al en wat geldt pas later?
- **Antwoordalinea:** De AI Act voor bedrijven hangt af van het volgende: welke AI een organisatie gebruikt of maakt, in welke van de vier risicocategorieën die valt en of de organisatie aanbieder of gebruiksverantwoordelijke is. De verboden praktijken en de plicht rond AI-geletterdheid gelden sinds 2 februari 2025 en de transparantieverplichtingen sinds 2 augustus 2026. De hoog-risicoregels gelden sinds de Digital Omnibus vanaf 2 december 2027 voor toepassingen uit bijlage III en vanaf 2 augustus 2028 voor AI in producten uit bijlage I (stand 23 september 2026).
- **Vervolgvragen:**
  1. *Kan een gebruiker onder de AI Act voor bedrijven ongemerkt aanbieder worden?* Ja. Volgens artikel 25 gebeurt dat bij een hoog-risicosysteem wanneer een organisatie er de eigen naam of het eigen merk op zet, het ingrijpend wijzigt of een systeem zo inzet dat het een hoog-risicotoepassing wordt. Onder de AI Act voor bedrijven speelt die vraag bijvoorbeeld bij een algemene AI-tool die sollicitanten gaat rangschikken.
  2. *Hoe lang bewaart een gebruiksverantwoordelijke logs onder de AI Act voor bedrijven?* Zes maanden is het minimum voor automatisch gegenereerde logs van een hoog-risicosysteem, volgens artikel 26. Onder de AI Act voor bedrijven noemt hetzelfde artikel voor gebruiksverantwoordelijken onder meer ook menselijk toezicht, het melden van incidenten en het vooraf informeren van werknemers en hun vertegenwoordigers.
  3. *Bevat het AI Readiness Assessment een toets op de AI Act voor bedrijven?* Ja. Het [AI Readiness Assessment](/diensten/ai-readiness-assessment) bevat een risico- en compliance-scan, inclusief de positionering van toepassingen onder de AI-verordening. Voor een directie of raad van commissarissen die eerst een gedeeld beeld nodig heeft, behandelt de [Executive Briefing](/diensten/executive-briefing) ook regelgeving en toezicht.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: lede, 'Risicocategorieën', 'Verplichtingen per rol' en de tabel onder 'Tijdlijn'. Vervolgvraag 1 en 2: 'Verplichtingen per rol' (artikel 25 en artikel 26). Vervolgvraag 3: slotalinea van 'Eerste stappen voor bedrijven'.
- **Let op:** De H2 'Wat is de AI Act?' is een vraag maar bevat het onderwerp 'AI Act voor bedrijven' niet letterlijk, daarom een eigen vraagkop; als onderwerp 'AI Act' ook goed is, kan het blok onder die bestaande kop. Alle data komen letterlijk uit de tijdlijntabel met peildatum 23 september 2026. De pagina zegt dat dit geen juridisch advies is; dat staat niet in het blok. Geen prijzen genoemd omdat de pagina die niet noemt. Voorbeeldscenario (zakelijke dienstverlener) niet gebruikt.

### `/ai-consultancy/ai-advies`

Pagina: AI advies: onafhankelijk advies over AI in je bedrijf

- **Status:** concept (16 van 16 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat is AI advies?").
- **Vraagkop:** Wat kost AI advies en welke vorm past bij welke vraag?
- **Antwoordalinea:** AI advies van Dave Willemstein beantwoordt één afgebakende vraag of besluit, zoals een leverancierskeuze, een toets van een business case of een second opinion, meestal binnen dagen. Afgebakend advies en second opinions krijgen een vaste prijs per opdracht; de Executive Briefing voor directie of raad van commissarissen duurt 1 dagdeel incl. voorbereiding en kost €2.800. Het advies is onafhankelijk, zonder partnerstatus of commissies bij leveranciers.
- **Tabel:** AI advies: passende vorm per vraag

  | Vraag | Prijs | Passende vorm |
  |---|---|---|
  | Eén leveranciersvoorstel of business case laten toetsen | Vaste prijs per opdracht | [Afgebakend advies, te starten met een adviesgesprek](/contact) |
  | Directie of raad van commissarissen een gedeeld beeld geven | €2.800 | [Executive Briefing](/diensten/executive-briefing) |
  | Meerdere leveranciers systematisch vergelijken | €9.800 - €15.400 | [Vendor Review](/diensten/vendor-review) |
  | Eerst weten waar de organisatie staat | €7.000 | [AI Readiness Assessment](/diensten/ai-readiness-assessment) |

- **Vervolgvragen:**
  1. *Is het eerste gesprek over AI advies vrijblijvend?* Ja. De kennismaking voor AI advies duurt dertig minuten, is vrijblijvend en zonder pitch. Aan het eind hoort de opdrachtgever wat de adviseur in die situatie zou doen.
  2. *Is AI advies over de AI Act hetzelfde als juridisch advies?* Nee. AI advies over de AI Act helpt bepalen in welke risicocategorie een toepassing valt, wat dat van de organisatie vraagt en hoe de governance wordt ingericht. De adviseur is geen jurist: voor juridisch advies is een jurist nodig.
  3. *Kan AI advies uitwijzen dat een groter traject nodig is?* Ja. Blijkt bij AI advies dat de vraag groter is dan een adviesvraag, bijvoorbeeld omdat richting ontbreekt of pilots zonder samenhang lopen, dan wordt dat gezegd en volgt een voorstel voor wat wel past. Soms is dat het AI Readiness Assessment, om eerst te weten waar de organisatie staat.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: 'Wat is AI advies?', 'AI advies versus AI consultancy' en de alinea over de Executive Briefing onder 'Hoe een adviestraject verloopt'. Tabel: 'Tools en leveranciers' (afgebakend advies en Vendor Review) en 'Hoe een adviestraject verloopt' (Executive Briefing, AI Readiness Assessment). Vervolgvragen: 'Hoe een adviestraject verloopt', 'Risico's en compliance' en 'AI advies versus AI consultancy'.
- **Let op:** Geen bestaande H2 met de kostenvraag, dus eigen vraagkop. De tabel heeft geen kolom Doorlooptijd, omdat afgebakend advies geen doorlooptijd mag krijgen en de cel dan leeg zou blijven. De pagina noemt de prijs van de Vendor Review en het AI Readiness Assessment zelf niet; die komen via de dienstverwijzing uit de prijstabel in de regels. De pagina omschrijft de Executive Briefing als 'een sessie van drie uur', het token geeft de doorlooptijd uit de regels; dat verschil is niet door mij opgelost. De eerste tabelrij linkt naar /contact omdat afgebakend advies geen eigen dienstpagina heeft.

### `/ai-consultancy/ai-roadmap`

Pagina: AI roadmap ontwikkelen: van prioriteiten naar planning

- **Status:** geverifieerd (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is een AI roadmap?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is een AI roadmap? (bestaand)
- **Antwoordalinea:** Een AI roadmap legt vast welke AI-toepassingen een organisatie in welke volgorde oppakt, wat daarvoor geregeld moet zijn en op welke momenten wordt besloten over doorgaan of stoppen. De roadmap volgt op de AI strategie en bestaat uit een handvol use cases met elk een eigenaar, randvoorwaarden, een budget-orde-van-grootte en een beslismoment, aangevuld met een afvallijst van wat bewust niet gebeurt. De planning werkt in horizonnen: alleen de eerste drie maanden zijn concreet ingevuld, de periode daarna in grotere blokken.
- **Vervolgvragen:**
  1. *Is een AI roadmap hetzelfde als een projectplanning?* Nee. Een AI roadmap is geen projectplanning: alleen de eerste horizon is concreet gepland en op vaste momenten wordt getoetst of de aannames nog kloppen. Het gedetailleerde plan per toepassing volgt pas als een use case groen licht krijgt.
  2. *Hoeveel use cases passen in de eerste horizon van een AI roadmap voor het MKB?* Twee of drie use cases in de eerste horizon is het advies voor een AI roadmap in het MKB. Meer use cases zijn zonder eigen AI-capaciteit lastig goed te begeleiden.
  3. *Is er een dienst die een AI roadmap als vast resultaat oplevert?* Ja. In de [AI Strategy Sprint](/diensten/ai-strategy-sprint) is een use-case roadmap met quick wins, middellange investeringen en bewuste no-go's een vaste deliverable. Het [AI Readiness Assessment](/diensten/ai-readiness-assessment) levert met het 90-dagenplan een eerste versie van de AI roadmap.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: de drie alinea's onder 'Wat is een AI roadmap?' en 'Planning en budget'. Vervolgvraag 1: derde alinea onder 'Wat is een AI roadmap?' en het FAQ-antwoord over het implementatieplan. Vervolgvraag 2: 'AI roadmap voor het MKB'. Vervolgvraag 3: alinea's onder 'Inventarisatie' en 'Deliverables van een AI roadmap'.
- **Let op:** Geen prijzen of doorlooptijden opgenomen: de pagina noemt ze zelf niet en het is een kennisbankblok. Geen tabel: de pagina heeft al een eigen voorbeeldtabel en die is fictief.

### `/ai-development/ai-oplossingen`

Pagina: AI oplossingen op maat voor jouw bedrijf

- **Status:** concept (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat zijn AI oplossingen?").
- **Vraagkop:** Wat kost advies over AI oplossingen op maat en wie bouwt ze?
- **Antwoordalinea:** Dave Willemstein bouwt of levert zelf geen AI oplossingen, maar helpt bepalen welke oplossing zinvol is, begeleidt de keuze van een oplossing of bouwpartij en toetst vanuit de kant van de opdrachtgever of het resultaat werkt. Wie eerst wil weten waar de organisatie staat, kan starten met het [AI Readiness Assessment](/diensten/ai-readiness-assessment) van 2-3 weken voor €7.000. De bouw ligt bij het eigen team of bij een partner met wie de opdrachtgever zelf een contract sluit.
- **Vervolgvragen:**
  1. *Is maatwerk altijd nodig voor AI oplossingen?* Nee. Voor AI oplossingen is een goed ingerichte standaardoplossing vaak de snelste en goedkoopste route. Maatwerk past als de oplossing raakt aan waarom klanten voor de organisatie kiezen, als data of werkwijze bijzonder is of als geen standaardpakket de benodigde controle geeft.
  2. *Kan het AI Readiness Assessment ook voor één afdeling worden uitgevoerd?* Ja. Het AI Readiness Assessment kan voor één afdeling of procesdomein kleiner worden uitgevoerd, met een lagere investering.
  3. *Zit er een marge op ontwikkelaars die worden voorgesteld voor AI oplossingen?* Nee. Voor AI oplossingen kunnen bekende ontwikkelaars worden voorgesteld zonder marge op hun tarief. De bouwers komen uit de eigen organisatie of van een partij die de opdrachtgever zelf kiest.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: derde alinea onder 'Wat zijn AI oplossingen?' en de slotalinea onder 'AI oplossingen voor het MKB'. Vervolgvraag 1: vuistregels onder 'AI oplossingen op maat versus standaard'. Vervolgvraag 2: slotalinea onder 'AI oplossingen voor het MKB'. Vervolgvraag 3: alinea 'Wat je in dat traject van mij kunt verwachten' onder 'Van idee tot livegang'.
- **Let op:** Eigen vraagkop in plaats van de bestaande H2 'Wat zijn AI oplossingen?'. De pagina noemt maar één geprijsde dienst (het AI Readiness Assessment), dus geen tabel. Vervolgvraag 1 ligt dicht bij de H2 'AI oplossingen op maat versus standaard' en de FAQ over bestaande software, maar is een andere vraag.

### `/ai-development/ai-software`

Pagina: AI software: kiezen, integreren of op maat laten bouwen

- **Status:** concept (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 4 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Soorten AI software").
- **Vraagkop:** Wanneer volstaat standaard AI software en wanneer loont maatwerk?
- **Antwoordalinea:** Standaard AI software volstaat voor alles wat een concurrent ook bij een leverancier kan kopen; maatwerk loont alleen voor de laag waarin de eigen kennis zit, zoals regels, prompts, testsets en koppelingen. Vaak is de uitkomst een combinatie: model en platform inkopen, de kennislaag op maat laten bouwen en de implementatie bij een partner beleggen. Wie de selectie niet zelf wil trekken, kan die laten begeleiden met de [Vendor Review](/diensten/vendor-review), die 3-6 weken duurt.
- **Vervolgvragen:**
  1. *Is de licentie de grootste kostenpost van AI software?* Nee. Bij AI software bepalen integratie, data en exit de werkelijke kosten, niet de licentie. Een kostenvergelijking loopt daarom over drie jaar en omvat licentie, verbruik bij groei, integratie, beheer en exit.
  2. *Is het verstandig om de criteria voor AI software pas na de demo's vast te stellen?* Nee. Selectiecriteria voor AI software en hun weging horen vast te liggen voordat leveranciers in beeld komen, omdat criteria van na de eerste demo vooral die demo beschrijven. Daarna krijgt iedere leverancier hetzelfde scenario op eigen data.
  3. *Betalen leveranciers mee aan een Vendor Review voor AI software?* Nee. Bij de Vendor Review voor AI software is er geen vergoeding van leveranciers, zodat het advies ook kan zijn om niets te kopen.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Standaard of maatwerk?' met het schema en de laatste alinea onder 'Selectiecriteria'. Vervolgvraag 1: summary en de rij 'Kosten' in de criteriatabel. Vervolgvraag 2: openingsalinea onder 'Selectiecriteria'. Vervolgvraag 3: alinea over de Vendor Review.
- **Let op:** De pagina noemt de Vendor Review zonder prijs of doorlooptijd; die komen via tokens uit de prijstabel. Type is kennisbank omdat het schema article is, daarom de bron 'artikel van' ondanks de prijs in het antwoord.

### `/ai-development/ai-specialist`

Pagina: AI specialist: expertise voor strategie en uitvoering

- **Status:** geverifieerd (12 van 12 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat doet een AI specialist?").
- **Vraagkop:** Welke AI specialist past bij welke vraag en wat kost strategische inzet?
- **Antwoordalinea:** AI specialist is een verzamelnaam voor strategische specialisten, die besluiten voorbereiden en sturen, en technische specialisten, die systemen bouwen; het benodigde profiel volgt uit het besluit of het product dat een organisatie nodig heeft. Dave Willemstein is een AI specialist aan de strategische kant, die adviseert en begeleidt maar niet bouwt. Voor een doorlichting is er het [AI Readiness Assessment](/diensten/ai-readiness-assessment) van 2-3 weken voor €7.000, voor begeleiding vanuit klantzijde de [Fractional AI Lead](/diensten/fractional-ai-lead).
- **Vervolgvragen:**
  1. *Levert een strategische AI specialist werkende software op?* Nee. Een strategische AI specialist levert een onderbouwde keuze op, zoals een roadmap, een selectieadvies of een beoordeelde business case. Werkende software is het product van een technische AI specialist, zoals een machine learning engineer of een AI-developer.
  2. *Is een technische AI specialist nodig als nog onduidelijk is waar AI waarde toevoegt?* Nee. Wie nog niet weet waar AI waarde toevoegt, heeft een strategische AI specialist nodig die kansen, risico's en randvoorwaarden in kaart brengt voordat er budget wordt vastgezet. Een technische AI specialist komt in beeld zodra duidelijk is wat er gebouwd moet worden en er bouwcapaciteit nodig is.
  3. *Kan de Fractional AI Lead meesturen als een externe bouwpartij het werk doet?* Ja. De Fractional AI Lead stuurt vanuit klantzijde mee op de uitvoering door het eigen team of een bouwpartij. De inzet is 2, 4 of 8 dagen per maand voor €2.600 per maand voor Advies (2 dagen per maand), €5.200 per maand voor Lead (4 dagen per maand) en €10.400 per maand voor Lead+ (8 dagen per maand).
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: 'Soorten AI specialisten', de summary en de lijst onder 'Mijn specialisaties'. Vervolgvraag 1: alinea's over strategische en technische AI specialisten. Vervolgvraag 2: de eerste en derde situatie onder 'Welke expertise heb jij nodig?'. Vervolgvraag 3: punt 'Begeleiding vanuit klantzijde' onder 'Mijn specialisaties'.
- **Let op:** Eigen vraagkop in plaats van de bestaande H2 'Wat doet een AI specialist?', zodat de keuze- en kostenvraag centraal staat. Inzet en prijs van de Fractional AI Lead in vervolgvraag 3 komen uit de prijstabel; de pagina noemt de dienst zonder bedrag. Geen tabel: de pagina koppelt de vier situaties niet aan vier verschillende diensten.

### `/ai-implementatie/advies`

Pagina: AI implementatie advies: goed voorbereid starten

- **Status:** concept (7 van 11 zinnen bevestigd, 4 geschrapt, 1 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom advies vooraf loont").
- **Vraagkop:** Wat levert AI implementatie advies vooraf op en welke dienst past erbij?
- **Antwoordalinea:** AI implementatie advies van Dave Willemstein legt vóór de bouw deze keuzes onderbouwd vast: de use case, bouwen of kopen, data en privacy, en de verandering die nodig is. Het resultaat is een beslisdocument met het besluit en de opdracht voor de bouwpartij; een concrete vraag over één toepassing past bij afgebakend advies tegen een vaste prijs per opdracht. Wie eerst wil weten of de organisatie er breed klaar voor is, start met het [AI Readiness Assessment](/diensten/ai-readiness-assessment) van 2-3 weken voor €7.000.
- **Vervolgvragen:**
  1. *Levert AI implementatie advies een uitgebreid rapport op?* Nee. AI implementatie advies eindigt met een beslisdocument en geen dik rapport: welke use case, welke bouwkeuze, welke randvoorwaarden voor data en privacy, welke verandering en wat de bouwpartij moet opleveren. Alle kaders en analyses zijn daarna van de opdrachtgever.
  2. *Hoe lang duurt het eerste gesprek over AI implementatie advies?* Dertig minuten duurt de kennismaking over AI implementatie advies.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: 'Waar ik over adviseer' (vier onderwerpen) en de alinea's over afgebakend advies, het AI Readiness Assessment en het beslisdocument onder 'Hoe een adviestraject verloopt'. Vervolgvraag 1 en 3: 'Hoe een adviestraject verloopt'. Vervolgvraag 2: 'Data en privacy'.
- **Let op:** De kostenvraag staat al als FAQ op de pagina ('Wat kost AI implementatie advies?'), dus de eigen vraagkop stuurt op opbrengst en passende dienst. Geen tabel: er is maar één geprijsde dienst in de lopende tekst; de Vendor Review komt alleen in een FAQ-antwoord voor en heb ik daarom niet gebruikt.

### `/ai-implementatie/stappenplan`

Pagina: AI implementatie stappenplan in 7 stappen

- **Status:** concept (10 van 12 zinnen bevestigd, 3 geschrapt, 1 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Stap 1: Bepaal het doel").
- **Vraagkop:** Welke stappen horen in een AI implementatie stappenplan?
- **Antwoordalinea:** Een AI implementatie stappenplan bestaat uit 7 stappen in een vaste volgorde: doel bepalen, use case kiezen, data en systemen in kaart brengen, bouwen of kopen, een pilot bouwen en testen, adoptie organiseren, en meten, borgen en opschalen. De volgorde telt omdat elke stap de volgende bepaalt, en adoptie, beheer en meting worden al bij de eerste stap voorbereid. Het stappenplan gaat uit van één toepassing; organisaties met meerdere kandidaten bepalen eerst de volgorde in een [AI-roadmap](/ai-consultancy/ai-roadmap).
- **Vervolgvragen:**
  1. *Begint een AI implementatie stappenplan met het kiezen van een tool?* Nee. Een AI implementatie stappenplan begint bij een meetbaar probleem, niet bij de technologie. Bij dat doel horen een nulmeting en een eigenaar in de lijn met budget en mandaat.
  2. *Is er een checklist bij het AI implementatie stappenplan?* Ja. Bij het AI implementatie stappenplan hoort de [AI implementatie checklist (pdf)](/downloads/ai-implementatie-checklist.pdf). Per stap staan daarin de vragen die beantwoord moeten zijn voordat de volgende stap begint.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: openingsalinea, diagram en de alinea over één toepassing onder 'Stap 1: Bepaal het doel'. Vervolgvraag 1 en 2: 'Stap 1: Bepaal het doel'. Vervolgvraag 3: 'Download de checklist'.
- **Let op:** Geen bestaande H2 stelt de hoofdvraag (alle H2's zijn stapnamen), dus eigen vraagkop. Vervolgvraag 3 linkt naar de pdf-download waar de pagina zelf ook naar linkt; haal de link weg als downloads niet in een blok horen. Het AI Readiness Assessment wordt op de pagina genoemd maar is niet in het blok opgenomen, omdat het artikel over het stappenplan zelf gaat.

### `/ai-voor-bedrijven/ai-en-bi`

Pagina: AI en BI: het verschil en hoe ze elkaar versterken

- **Status:** concept (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat is business intelligence?").
- **Vraagkop:** Wat is het verschil tussen AI en BI en hoe vullen ze elkaar aan?
- **Antwoordalinea:** BI werkt met gestructureerde data en laat zien wat er is gebeurd en waarom; AI voorspelt, classificeert en verwerkt ook tekst en documenten, met een foutmarge die bekend moet zijn. AI en BI zijn geen concurrenten: AI bouwt voort op de betrouwbare cijfers en definities die BI levert. Een werkende BI-omgeving met vertrouwde cijfers is daarom vaak een logische opstap naar AI op bedrijfscijfers.
- **Vervolgvragen:**
  1. *Is een Pro-licentie genoeg om AI en BI te combineren met Copilot in Power BI?* Nee. Voor AI en BI met Copilot in Power BI is een betaalde Fabric- of Premium-capaciteit nodig; een Pro-licentie alleen is niet genoeg, stand september 2026 volgens Microsoft Learn. Zonder voorbereiding van het datamodel kan Copilot de data bovendien verkeerd interpreteren.
  2. *Op hoeveel manieren kunnen AI en BI samenwerken?* Vier manieren: vragen stellen in gewone taal, automatische toelichting bij cijfers en afwijkingen, voorspellingen naast de terugblik, en tekst uit e-mails, klantreacties en documenten omzetten in analyseerbare gegevens. Bij AI en BI rusten alle vier op een betrouwbaar datamodel.
  3. *Is de uitkomst van AI even exact als die van BI?* Nee. BI levert een exacte uitkomst zolang de data klopt, terwijl een AI-model een inschatting geeft en daarbij fouten maakt. Bij AI en BI vraagt dat om een andere manier van controleren en een ander gesprek over verantwoordelijkheid.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: tabel en alinea's onder 'Het verschil tussen AI en BI' plus de summary. Vervolgvraag 1 en 2: schema en Copilot-alinea onder 'Hoe AI business intelligence versterkt'. Vervolgvraag 3: rij 'Zekerheid' en de alinea direct onder de tabel.
- **Let op:** Keyphrase is 'ai bi'; als onderwerp is 'AI en BI' gekozen omdat dat zo in H1 en H2 staat. Geen dienst genoemd: de body noemt alleen AI consultancy als pagina, geen pakket met prijs. De pagina zegt 'vaak het beste startpunt'; dat is afgezwakt tot 'vaak een logische opstap' vanwege de regel over superlatieven.

### `/ai-voor-bedrijven/mkb`

Pagina: AI voor het MKB: waar begin je en wat levert het op?

- **Status:** geverifieerd (11 van 12 zinnen bevestigd, 3 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom AI nu relevant is voor het MKB").
- **Vraagkop:** Hoe begint een ondernemer met AI voor het mkb zonder groot budget?
- **Antwoordalinea:** AI voor het mkb begint bij één taak die vaak terugkomt, veel tijd kost en al een vaste controle kent, zoals offertes of het sorteren van e-mail, met software die het bedrijf al heeft of een zakelijke licentie op een AI-assistent. Na een nulmeting en een paar spelregels over tools en gegevens volgt een test van vier weken in het echte werk, waarna de meting bepaalt of het bedrijf doorgaat, bijstuurt of stopt. Voor kleinere bedrijven is de [Executive Briefing](/diensten/executive-briefing) van 1 dagdeel incl. voorbereiding voor €2.800 een lichtere instap dan de vaste adviespakketten.
- **Vervolgvragen:**
  1. *Passen het AI Readiness Assessment en de AI Strategy Sprint bij elk budget voor AI voor het mkb?* Nee. Het [AI Readiness Assessment](/diensten/ai-readiness-assessment) kost €7.000 en de [AI Strategy Sprint](/diensten/ai-strategy-sprint) €15.400 - €22.400: dat past bij een middelgroot bedrijf met meerdere afdelingen en een concrete investeringsvraag. Voor een bedrijf van tien mensen zijn die pakketten vaak te veel.
  2. *Is een chatbot voor klanten een goed startpunt bij AI voor het mkb?* Nee. Bij AI voor het mkb in de klantenservice is beginnen achter de schermen verstandiger: e-mails sorteren, conceptantwoorden die een medewerker controleert en klantdossiers samenvatten. Een klantgerichte assistent voor eenvoudige vragen is pas een logische volgende stap als dat goed loopt.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: stappenschema en tips onder 'Eerste stappen' en de tweede alinea onder 'Hoe ik MKB-bedrijven help'. Vervolgvraag 1: eerste alinea onder 'Hoe ik MKB-bedrijven help'. Vervolgvraag 2: CBS-alinea onder 'Waarom AI nu relevant is voor het MKB'. Vervolgvraag 3: subkop 'Klantenservice'.
- **Let op:** De slotzin van vervolgvraag 2 ('nog ruimte heeft om te groeien') is een eigen gevolgtrekking uit de CBS-cijfers en kan desgewenst weg. De pagina noemt voor de Executive Briefing 'één dagdeel'; de timing-token geeft '1 dagdeel incl. voorbereiding'.

### `/ai-voor-bedrijven/zakelijke-dienstverleners`

Pagina: AI voor zakelijke dienstverleners

- **Status:** geverifieerd (10 van 11 zinnen bevestigd, 1 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom AI voor dienstverleners loont").
- **Vraagkop:** Waar zit de winst van AI voor zakelijke dienstverleners en wat vraagt het aan vertrouwelijkheid?
- **Antwoordalinea:** AI voor zakelijke dienstverleners versnelt vooral het lezen, analyseren en schrijven waar accountants, advocaten, adviseurs en bureaus veel uren aan besteden: AI maakt een eerste versie of een selectie, de professional oordeelt en blijft verantwoordelijk voor het eindresultaat. De toolkeuze volgt uit de eisen aan vertrouwelijkheid: geen dossiers in gratis tools, een gecontroleerde verwerkersovereenkomst en kantoorbrede afspraken over wat mag.
- **Vervolgvragen:**
  1. *Kan een DPIA verplicht zijn bij AI voor zakelijke dienstverleners?* Ja. Bij AI voor zakelijke dienstverleners is een DPIA onder de AVG verplicht als de verwerking van persoonsgegevens een hoog risico meebrengt. Daarnaast horen de verwerkersovereenkomst, de opslaglocatie en de afspraken over training op data te worden gecontroleerd.
  2. *Bestaan er beroepsrichtlijnen voor AI voor zakelijke dienstverleners zoals accountants en advocaten?* Ja. Voor AI voor zakelijke dienstverleners in de accountancy publiceerden NBA en NOREA in juni 2026 'Leidraad 2: AI Toegepast', en de Nederlandse orde van advocaten heeft aanbevelingen voor AI in de advocatuur gepubliceerd.
  3. *Zijn gespecialiseerde vaktools altijd de beste keuze bij AI voor zakelijke dienstverleners?* Nee. Bij AI voor zakelijke dienstverleners hangt de passende tool af van de taken, de bestaande software en de eisen aan gegevensverwerking. Gespecialiseerde vaktools bieden meer vakinhoud, maar vragen een toets op de herkomst van bronnen en het prijsmodel.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Waarom AI voor dienstverleners loont', de openingszin van 'Toepassingen per beroepsgroep' en de basisregels onder 'Vertrouwelijkheid en kwaliteit'. Vervolgvraag 1: basisregel 2 onder 'Vertrouwelijkheid en kwaliteit'. Vervolgvraag 2: subkoppen 'Accountancy' en 'Legal'. Vervolgvraag 3: schema en alinea onder 'Tools'.
- **Let op:** Geen dienst genoemd: de body, lede, summary en FAQ noemen geen dienst (alleen de secondaryCta in de frontmatter verwijst naar het AI Readiness Assessment). Daardoor ook geen prijs of doorlooptijd in dit blok.

## 5. Workshops, training en coaching (5)

### `/ai-workshop`

Pagina: AI workshop en training voor bedrijven

- **Status:** concept (12 van 12 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 2 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom een AI workshop?").
- **Vraagkop:** Welke AI workshop past bij welk team en hoe wordt de prijs bepaald?
- **Antwoordalinea:** Dave Willemstein geeft een AI workshop of training incompany en op maat, opgebouwd rond drie tot vijf concrete taken per rol uit de eigen praktijk van het team. De gangbare vertrekpunten zijn een introductie voor management, hands-on werken met ChatGPT en Copilot, AI-geletterdheid en een workshop AI-strategie. Elke opdracht krijgt een vaste prijs, die in de intake wordt besproken en vooraf op papier staat.
- **Vervolgvragen:**
  1. *Is er een AI workshop voor directie of raad van commissarissen?* Ja. Voor directie of raad van commissarissen is de [Executive Briefing](/diensten/executive-briefing) de passende vorm: een vaste sessie met een beslisagenda en toezichtvragen, voor €2.800 inclusief voorbereiding op de sector. De bredere AI workshop voor management is bedoeld voor bijvoorbeeld lijnmanagers of een MT.
  2. *Kan een AI workshop ook online worden gegeven?* Ja. Een AI workshop kan online, maar hands-on werk en het onderlinge gesprek komen op afstand moeizamer op gang. Incompany werkt het best, omdat deelnemers dan met hun eigen apparatuur, toegang en materiaal oefenen.
  3. *Leidt één AI workshop vanzelf tot structureel gebruik van AI?* Nee. Een AI workshop is geen adoptiestrategie: licenties uitdelen en één trainingsmiddag leiden zelden tot structureel gebruik. Daarom is een AI workshop opgebouwd rond drie tot vijf concrete taken per rol, zodat deelnemers de volgende ochtend weten waar ze beginnen.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: 'Waarom een AI workshop?', het diagram onder 'Soorten workshops', 'Incompany of op locatie' en 'Investering'. Vervolgvraag 1: 'Introductie AI voor management' en de alinea over de Executive Briefing onder 'Investering'. Vervolgvraag 2 en 3: 'Incompany of op locatie' en de tweede alinea onder 'Waarom een AI workshop?'.
- **Let op:** Geen bedrag en geen duur voor workshops of trainingen. De Executive Briefing is alleen met tokens genoemd omdat de pagina die zelf met prijstoken noemt; de duur van drie uur uit de pagina is niet overgenomen en er is geen timing-token gebruikt. Bron verwijst naar /tarieven vanwege dat ene prijstoken. Geen tabel: de pagina toont de vier varianten al in een eigen matrix.

### `/ai-workshop/ai-coaching`

Pagina: AI coaching voor managers en teams

- **Status:** geverifieerd (9 van 10 zinnen bevestigd, 2 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is AI coaching?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is AI coaching? (bestaand)
- **Antwoordalinea:** AI coaching van Dave Willemstein is persoonlijke begeleiding voor managers en teamleads die AI in het dagelijkse werk van hun team willen laten landen, in de vorm van gesprekken en werksessies rond de vragen van dat moment. Een traject is afgebakend: het doel, het aantal sessies bij benadering en het eindpunt worden vooraf afgesproken. AI coaching valt onder afgebakend advies met een vaste prijs per opdracht.
- **Vervolgvragen:**
  1. *Is AI coaching een doorlopend traject zonder eindpunt?* Nee. Elk traject AI coaching is afgebakend en afbouwen is het doel: aan het eind moet het team zelfstandig verder kunnen, met iemand uit het team die de rol van aanspreekpunt overneemt.
  2. *Neemt de coach bij AI coaching de besluiten over?* Nee. Bij AI coaching blijven besluit en uitvoering bij de manager en het team. De coach stelt vragen, deelt wat in vergelijkbare situaties vaak werkt en helpt keuzes scherp te krijgen.
- **Bronregel:** Bron: Dave Willemstein, onafhankelijk AI-adviseur.
- **Herkomst:** Antwoord: lede, eerste alinea onder 'Wat is AI coaching?', eerste alinea onder 'Hoe een traject verloopt' en de alinea over afgebakend advies en vaste prijs. Vervolgvraag 1 en 2: de uitgangspunten 'Afbouwen is het doel' en 'Jij blijft eigenaar'. Vervolgvraag 3: slotalinea onder 'Voor wie is AI coaching?'.
- **Let op:** Bestaande H2 gebruikt; dat is een definitievraag en geen kostenvraag. Vervolgvraag 3 ligt inhoudelijk in de buurt van de FAQ-vraag over een probleem dat groter is dan één team, maar gaat over de Fractional AI Lead, die de FAQ niet noemt. De Fractional AI Lead is zonder prijs of doorlooptijd genoemd, daarom bron zonder /tarieven; wie daar tokens bij wil, moet de bron aanpassen.

### `/ai-workshop/ai-geletterdheid-training`

Pagina: AI geletterdheid training: voldoen aan de AI Act

- **Status:** concept (8 van 8 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat is AI geletterdheid?").
- **Vraagkop:** Voldoet een organisatie met een AI geletterdheid training aan de AI Act?
- **Antwoordalinea:** Artikel 4 van de AI Act vraagt sinds 2 februari 2025 van organisaties die AI ontwikkelen of gebruiken dat zij maatregelen nemen voor de AI-geletterdheid van hun mensen; sinds de wijziging van juli 2026 is dat een inspanningsverplichting zonder voorgeschreven niveau. Een AI geletterdheid training van Dave Willemstein is een manier om die maatregelen in te vullen, maar niet de enige, en een training alleen is niet genoeg. Een certificaat is volgens de Europese Commissie niet nodig, terwijl het wel verstandig is intern vast te leggen welke maatregelen zijn genomen en waarom die passen.
- **Vervolgvragen:**
  1. *Is de verplichting achter een AI geletterdheid training in 2026 vervallen?* Nee. De verplichting uit artikel 4 van de AI Act, waar een AI geletterdheid training bij helpt, blijft bestaan voor aanbieders en gebruiksverantwoordelijken van AI-systemen. Sinds 27 juli 2026 is het een inspanningsverplichting, en niets doen voldoet niet (stand september 2026).
  2. *Schrijft de AI Act een vast lesprogramma voor een AI geletterdheid training voor?* Nee. Voor een AI geletterdheid training bestaat geen voorgeschreven lesprogramma: volgens de Autoriteit Persoonsgegevens hangt wat nodig is af van de risico's, de rollen en de context.
- **Bronregel:** Bron: Dave Willemstein, onafhankelijk AI-adviseur.
- **Herkomst:** Antwoord: summary, slot van 'Wat is AI geletterdheid?', de opsomming onder 'Wat de AI Act vraagt' en de eerste alinea onder 'Aantonen dat je voldoet'. Vervolgvraag 1: 'Wat de AI Act vraagt'. Vervolgvraag 2 en 3: eerste alinea en genummerde lijst onder 'Inhoud van de training'.
- **Let op:** Deze pagina noemt geen prijs en ook geen prijsvorm, dus het blok zegt niets over kosten. De pagina bevat de disclaimer dat de uitleg geen juridisch advies is; die staat niet in het blok, maar het blok komt bovenaan en bevat wetsuitleg, dus overweeg of de disclaimer dichterbij moet. Wetsfeiten en data zijn overgenomen zoals de pagina ze geeft.

### `/ai-workshop/chatgpt-training`

Pagina: ChatGPT training voor bedrijven

- **Status:** concept (9 van 9 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat leer je?").
- **Vraagkop:** Wat levert een ChatGPT training een team op en hoe wordt de prijs bepaald?
- **Antwoordalinea:** Een ChatGPT training van Dave Willemstein is een incompany training voor teams die veel met tekst, informatie en communicatie werken, met drie tot vijf taken per rol uit het eigen werk als oefenmateriaal. Deelnemers leren betere prompts schrijven, terugkerend werk vastleggen in eigen GPT's en projecten, uitkomsten controleren en veilig omgaan met gegevens. Het programma wordt in een korte intake afgestemd en de training heeft een vaste prijs die vooraf schriftelijk wordt bevestigd.
- **Vervolgvragen:**
  1. *Is technische voorkennis nodig voor de ChatGPT training?* Nee. De ChatGPT training is bedoeld voor teams en professionals die veel met tekst, informatie en communicatie werken, en technische voorkennis is daarvoor niet nodig.
  2. *Kan de ChatGPT training worden gecombineerd met Copilot?* Ja. Gebruiken teams zowel ChatGPT als Copilot, dan worden de ChatGPT training en de [Copilot training](/ai-workshop/copilot-training) in één programma gecombineerd.
  3. *Wordt de ChatGPT training ook in het Engels gegeven?* Ja. De ChatGPT training wordt op locatie bij de opdrachtgever gegeven, in het Nederlands of het Engels.
- **Bronregel:** Bron: Dave Willemstein, onafhankelijk AI-adviseur.
- **Herkomst:** Antwoord: 'Wat leer je?', eerste alinea onder 'Voor wie?' en de alinea over locatie, intake en vaste prijs onder 'Programma'. Vervolgvraag 1 en 2: 'Voor wie?'. Vervolgvraag 3: 'Programma'.
- **Let op:** Geen bestaande H2 bevat 'ChatGPT training', daarom een eigen vraagkop. Geen bedrag en geen duur; alleen de prijsvorm die de pagina zelf noemt. Bron zonder /tarieven omdat er geen bedrag of doorlooptijd in het blok staat.

### `/ai-workshop/copilot-training`

Pagina: Microsoft Copilot training voor teams

- **Status:** concept (8 van 9 zinnen bevestigd, 2 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat leer je in de Copilot training?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat leer je in de Copilot training? (bestaand)
- **Antwoordalinea:** In de Copilot training van Dave Willemstein oefent een team met drie tot vijf herkenbare taken per rol uit het eigen werk, in Outlook, Teams, Word, Excel en PowerPoint. Deelnemers leren goede opdrachten geven, kiezen tussen Copilot in een app en Copilot Chat, uitkomsten controleren en herkennen welke taken en gegevens niet bij Copilot horen. De training is maatwerk, wordt incompany gegeven en heeft een vaste prijs die in de intake wordt besproken en vooraf schriftelijk wordt bevestigd.
- **Vervolgvragen:**
  1. *Komt veilig werken met bedrijfsdata aan bod in de Copilot training?* Ja. De Copilot training vertaalt de toezeggingen van Microsoft naar gedrag: wat wel en niet wordt gedeeld, hoe een antwoord te herkennen is dat op een verkeerde bron leunt, en wat te doen als Copilot iets toont dat niet zichtbaar had mogen zijn.
  2. *Is de Copilot training te combineren met een training AI-geletterdheid?* Ja. De Copilot training en de [training AI-geletterdheid](/ai-workshop/ai-geletterdheid-training) zijn goed te combineren, omdat beide uitgaan van begrip van hoe AI werkt en waar de risico's zitten.
- **Bronregel:** Bron: Dave Willemstein, onafhankelijk AI-adviseur.
- **Herkomst:** Antwoord: 'Wat leer je in de Copilot training?', de summary en de alinea over incompany en vaste prijs onder 'Programma en investering'. Vervolgvraag 1: diagram onder 'Programma en investering'. Vervolgvraag 2 en 3: slotalinea onder 'Veilig werken met bedrijfsdata'.
- **Let op:** De bestaande H2 is exact overgenomen en bevat daardoor 'je'; dat is de kop van de pagina, niet eigen tekst. Het is een inhoudsvraag en geen kostenvraag; de prijsvorm staat wel in het antwoord. Bron zonder /tarieven omdat er geen bedrag of doorlooptijd in het blok staat.

## 6. Branchepagina's (7)

### `/markten/automotive`

Pagina: AI in automotive: toepassingen voor autobedrijven

- **Status:** geverifieerd (12 van 12 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("AI toepassingen in automotive").
- **Vraagkop:** Wat kan een autobedrijf met AI in automotive en hoe begint het daarmee?
- **Antwoordalinea:** AI in automotive draait voor een autobedrijf of dealer om de opvolging van leads, de werkplaats en het klantcontact, niet om de auto zelf. De aanpak is één proces met een meetbaar knelpunt kiezen, een eigenaar in de lijn aanwijzen en vooraf afspreken wanneer er wordt gestopt. Wie nog niet weet welk proces dat is, kan starten met het [AI Readiness Assessment](/diensten/ai-readiness-assessment) van 2-3 weken.
- **Vervolgvragen:**
  1. *Is AI in automotive hoog risico als een dealer er sollicitanten mee selecteert of kredietwaardigheid mee beoordeelt?* Ja. AI voor het selecteren van sollicitanten en voor het beoordelen van de kredietwaardigheid van particulieren staat op de hoog-risicolijst van de AI Act, met eisen die door de Digital Omnibus vanaf 2 december 2027 gelden. De meeste andere dealertoepassingen van AI in automotive, zoals een chatbot of tekstgenerator, zijn geen hoog risico.
  2. *Kan een dealer leveranciers van AI in automotive onafhankelijk laten vergelijken?* Ja. De [Vendor Review](/diensten/vendor-review) legt elke leverancier dezelfde vragen en hetzelfde scenario voor. Zo wordt getoetst of de belofte van de DMS-leverancier, het merk of een gespecialiseerde partij klopt.
  3. *Werkt een klantgerichte assistent met AI in automotive ook voor klachten?* Nee. Klantgerichte assistenten werken goed voor voorspelbare vragen, zoals het inplannen van een onderhoudsafspraak, maar niet voor klachten of onderhandelingen. Bij AI in automotive hoort daarom vooraf een afspraak over het moment waarop de assistent overdraagt aan een mens.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: lede, summary en de alinea 'Zo begin je'. Vervolgvraag 1: 'Welke regels gelden er?'. Vervolgvraag 2 en 3: 'AI assistenten'.
- **Let op:** De pagina noemt alleen de doorlooptijd van het AI Readiness Assessment, geen prijs; daarom alleen het timing-token. De pagina zegt dat automotive niet het zwaartepunt van de adviseur is; dat staat niet in het blok. Voorbeeldscenario (dealerbedrijf) niet gebruikt.

### `/markten/fintech`

Pagina: AI in fintech en financiële dienstverlening

- **Status:** concept (9 van 12 zinnen bevestigd, 6 geschrapt, 1 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("AI toepassingen in fintech").
- **Vraagkop:** Waar levert AI in fintech het meest op en welke regels spelen mee?
- **Antwoordalinea:** AI in fintech levert de snelste winst op bij documentverwerking en signalering, waar AI de gegevens uit documenten haalt en een mens het oordeel houdt. Kredietbeoordeling van personen en de risicobeoordeling en prijsstelling bij levens- en ziektekostenverzekeringen zijn hoog risico onder de AI Act, met regels vanaf 2 december 2027 (stand september 2026). Voor financiële instellingen zijn er het [AI Readiness Assessment](/diensten/ai-readiness-assessment) om te prioriteren, de [Vendor Review](/diensten/vendor-review) om te kiezen, de [AI Due Diligence](/diensten/ai-due-diligence) om te beoordelen en de [Fractional AI Lead](/diensten/fractional-ai-lead) om te borgen.
- **Vervolgvragen:**
  1. *Is het uitstel van de AI Act een reden om met eisen aan AI in fintech te wachten?* Nee. Een kredietmodel dat nu wordt ingekocht of gebouwd, is waarschijnlijk nog in gebruik als de hoog-risicoregels vanaf 2 december 2027 gelden, dus bij AI in fintech horen die eisen nu al in ontwerp en selectie. De Vendor Review legt de keuze voor een leverancier of bouwpartij vast met criteria voor uitlegbaarheid, auditspoor, datarechten en exitpad.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'AI toepassingen in fintech', 'AI automatisering in financiële dienstverlening', de AI Act-bullet onder 'AI governance en compliance' en de lijst onder 'AI consultancy voor financiële instellingen'. Vervolgvraag 1: onderscheid extractie en oordeel. Vervolgvraag 2 en 3: 'AI governance en compliance' (uitstel en DORA).
- **Let op:** Vervolgvraag 3 raakt aan de bestaande FAQ 'Geldt DORA ook voor AI-leveranciers?' maar stelt de vraag vanuit de instelling; bij te veel overlap deze schrappen. De pagina voegt toe dat de kwalificatie door compliance of juridische zaken getoetst moet worden; dat staat niet in het blok. Een tabel met de vier diensten was mogelijk maar is weggelaten. Geen prijzen genoemd omdat de pagina die niet noemt. Voorbeeldscenario (schadeverzekeraar) niet gebruikt.

### `/markten/luchtvaart`

Pagina: AI in de luchtvaart: toepassingen en uitdagingen · staat op `noindex, follow`

- **Status:** wacht op publicatie
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("AI in de luchtvaart: toepassingen, kansen en uitdagingen").
- **Vraagkop:** Welke toepassingen van AI in de luchtvaart zijn er en hoe streng zijn de regels?
- **Antwoordalinea:** AI in de luchtvaart valt uiteen in toepassingen die de vliegveiligheid raken, met certificering en toezicht door EASA en de nationale luchtvaartautoriteiten, en commerciële en ondersteunende processen waarvoor de AVG en de algemene regels van de AI Act gelden. De eisen worden zwaarder en de doorlooptijd langer naarmate een toepassing meer met de vliegveiligheid te maken heeft. Organisaties leren daarom het snelst buiten de veiligheidskritische systemen, bijvoorbeeld bij klantcontact, prijsbeleid en backoffice.
- **Vervolgvragen:**
  1. *Geldt biometrische verificatie bij AI in de luchtvaart als hoog risico onder de AI Act?* Nee. Biometrische verificatie, waarbij alleen wordt bevestigd dat iemand is wie hij zegt te zijn, geldt onder de AI Act niet als hoog risico; biometrische identificatie op afstand wel. Bij AI in de luchtvaart speelt daarnaast de AVG: volgens de EDPB (Opinion 11/2024) mogen alleen biometrische gegevens worden verwerkt van reizigers die zich actief aanmelden en toestemming geven.
  2. *Gelden de hoog-risicoregels van de AI Act al voor AI in de luchtvaart?* Nee. De hoog-risicoregels voor AI in producten uit bijlage I van de AI Act gelden na de Digital Omnibus vanaf 2 augustus 2028. Voor veiligheidsgerelateerde AI in de luchtvaart ontwikkelt EASA eigen regels, met in november 2025 een eerste regelgevingsvoorstel (NPA 2025-07).
  3. *Is een proces geschikt voor AI in de luchtvaart als niemand er na de pilot eigenaar van wil zijn?* Nee. Ontbreekt een eigenaar in de lijn voor de fase na de pilot, dan is dat een reden om nog niet te beginnen. Bij AI in de luchtvaart wordt daarom vóór de start afgesproken wie de toepassing na de pilot beheert en wanneer er wordt gestopt.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: openingsalinea, matrix en schema onder de eerste H2 en stap 2 onder 'AI implementeren in de luchtvaart'. Vervolgvraag 1: 'AI op luchthavens'. Vervolgvraag 2: 'AI implementeren in de luchtvaart'. Vervolgvraag 3: 'AI en automatisering'.
- **Let op:** Pagina staat op noindex en heeft geen FAQ. Vervolgvraag 2 zegt bewust alleen iets over producten uit bijlage I; de pagina geeft voor de luchtvaart geen datum voor bijlage III. De pagina noemt het AI Readiness Assessment en de Vendor Review, maar die zijn niet in het blok gebruikt omdat luchtvaart niet het zwaartepunt is; desgewenst toe te voegen. Voorbeeldscenario (compensatieaanvragen) niet gebruikt.

### `/markten/marketing`

Pagina: AI marketing: slimmer marketen met AI · staat op `noindex, follow`

- **Status:** wacht op publicatie
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is AI marketing?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is AI marketing? (bestaand)
- **Antwoordalinea:** AI marketing is het gebruik van kunstmatige intelligentie in het marketingwerk, verdeeld over vier gebieden: content, personalisatie, advertenties en analyse. Omdat teams de tools meestal al gebruiken, zit de winst in de stap van losse gewoontes naar gedeelde werkwijzen, met een vastgelegde merkstem, een redactieslag door een mens en afspraken over welke data in welke tool mag. Een strategie voor AI marketing start daarom bij de marketingdoelen en pas daarna bij de tools.
- **Vervolgvragen:**
  1. *Is voor personalisatie met AI marketing toestemming van de bezoeker nodig?* Ja. Tracking cookies die gedrag over websites heen volgen en profielen opbouwen, mogen alleen worden geplaatst als de bezoeker vooraf is geïnformeerd en toestemming heeft gegeven; doorscrollen en vooraf aangevinkte categorieën tellen niet als toestemming. Bij personalisatie met AI marketing is daarnaast een grondslag onder de AVG nodig zodra er persoonsgegevens worden verwerkt.
  2. *Moet een chatbot in AI marketing melden dat het om AI gaat?* Ja. Sinds 2 augustus 2026 gelden de transparantieregels van de AI Act, waardoor chatbots moeten laten weten dat iemand met AI praat. Bij AI marketing raakt dat direct een marketingchatbot of een synthetische video.
  3. *Hoeveel soorten tools zijn er voor AI marketing?* 4 categorieën, stand september 2026: algemene AI-assistenten, AI-functies in bestaande marketingsoftware, gespecialiseerde tools en maatwerk of koppelingen tussen systemen. Maatwerk voor AI marketing is pas zinvol als een standaardtool aantoonbaar tekortschiet. Een breder overzicht staat bij [AI-tools en de keuze daartussen](/ai-automatisering/ai-tools).
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Wat is AI marketing?', het schema onder 'Toepassingen van AI in marketing', de alinea 'Content' en de eerste alinea van 'AI marketing strategie ontwikkelen'. Vervolgvraag 1: 'Personalisatie'. Vervolgvraag 2: stap 4 van het stappenplan. Vervolgvraag 3: 'Tools'.
- **Let op:** Pagina staat op noindex. Vervolgvraag 2 ligt in de buurt van de bestaande FAQ over het vermelden van AI-content, maar gaat over chatbots en niet over het labelen van content. De pagina noemt geen dienst met prijs, dus geen diensttokens. Voorbeeldscenario (webwinkel) niet gebruikt.

### `/markten/onderwijs`

Pagina: AI in het onderwijs: toepassingen, kansen en uitdagingen · staat op `noindex, follow`

- **Status:** wacht op publicatie
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("AI in het onderwijs: toepassingen, kansen en uitdagingen").
- **Vraagkop:** Hoe voert een onderwijsinstelling AI in het onderwijs verantwoord in?
- **Antwoordalinea:** AI in het onderwijs wordt door docenten, studenten en ondersteunende diensten vaak al gebruikt, dus invoering start met een inventarisatie van wat er draait en een indeling per toepassing naar risico. Systemen voor toelating of plaatsing, het beoordelen van leerresultaten, het bepalen van het onderwijsniveau en toezicht tijdens toetsen zijn hoog risico onder de AI Act, met eisen vanaf 2 december 2027. Emotieherkenning in onderwijsinstellingen is sinds 2 februari 2025 verboden, behalve om medische of veiligheidsredenen.
- **Vervolgvragen:**
  1. *Bestaan er hulpmiddelen om AI in het onderwijs te toetsen aan de AI Act?* Ja. Kennisnet beschrijft een stappenplan voor scholen, en SIVON en Kennisnet publiceerden in april 2026 een toetsingskader voor het funderend onderwijs waarmee scholen en leveranciers nagaan of een systeem voor AI in het onderwijs onder de AI Act valt en in welke risicoklasse. Voor informatiebeveiliging heeft SURF een handreiking.
  2. *Is een uitvalsignaal van AI in het onderwijs een oordeel over een leerling?* Nee. Bij AI in het onderwijs is een uitvalsignaal een aanleiding voor een gesprek en geen conclusie over een leerling. Daarom is voorzichtigheid geboden met het zichtbaar maken van patronen in aanwezigheid of voortgang.
  3. *Helpt het AI Readiness Assessment een instelling op weg met AI in het onderwijs?* Ja. Het [AI Readiness Assessment](/diensten/ai-readiness-assessment) geeft in 2-3 weken een beeld van waar de organisatie staat en een plan voor de eerste negentig dagen.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: lede, 'AI implementeren in een onderwijsorganisatie' (schema met vijf stappen) en de wettelijke kaders onder 'AI-beleid voor onderwijsinstellingen'. Vervolgvraag 1 en 3: 'AI implementeren in een onderwijsorganisatie'. Vervolgvraag 2: toepassing 10 en 'Nadelen en risico's'.
- **Let op:** Pagina staat op noindex. De datum van het toetsingskader (april 2026) staat alleen in de lopende tekst, niet in de bronvermelding; letterlijk overgenomen. De pagina zegt dat onderwijs niet het zwaartepunt van de adviseur is; dat staat niet in het blok. Voorbeeldscenario (mbo-instelling) niet gebruikt.

### `/markten/overheid`

Pagina: AI voor de overheid: kansen, toepassingen en uitdagingen · staat op `noindex, follow`

- **Status:** wacht op publicatie
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("AI voor de overheid: kansen, toepassingen en uitdagingen").
- **Vraagkop:** Wat vraagt AI bij de overheid meer dan in andere sectoren en waar begint een organisatie?
- **Antwoordalinea:** AI bij de overheid vraagt naast opbrengst en werking ook dat een organisatie kan uitleggen hoe een uitkomst tot stand komt en dat die eerlijk is, omdat burgers niet naar een andere aanbieder kunnen. Een verstandig begin ligt bij interne ondersteuning van medewerkers, zoals samenvatten en zoeken in documenten, en niet bij besluiten over burgers. Systemen die het recht op uitkeringen of publieke diensten beoordelen zijn hoog risico onder de AI Act, met eisen vanaf 2 december 2027, waaronder een grondrechtenbeoordeling vóór gebruik en registratie in de Europese databank.
- **Vervolgvragen:**
  1. *Geldt het standpunt over generatieve AI bij de overheid ook voor gemeenten?* Ja. Het overheidsbrede standpunt over generatieve AI uit april 2025 geldt naast het Rijk ook voor gemeenten, provincies, waterschappen en uitvoeringsorganisaties. AI bij de overheid krijgt daarmee meer ruimte, mits organisaties onder meer een risicoanalyse maken en betrouwbare modellen gebruiken.
  2. *Sluit de IAMA aan op de grondrechtenbeoordeling voor AI bij de overheid?* Ja. De IAMA (Impact Assessment Mensenrechten en Algoritmes) is in februari 2026 ingekort en aangepast, zodat het instrument aansluit op de grondrechtenbeoordeling uit artikel 27 van de AI Act. Voor AI bij de overheid is die beoordeling vanaf 2 december 2027 nodig vóór het gebruik van een hoog-risicosysteem.
  3. *Kan een overheidsorganisatie leveranciers van AI bij de overheid onafhankelijk laten vergelijken?* Ja. De [Vendor Review](/diensten/vendor-review) vergelijkt leveranciers op vooraf vastgestelde criteria en is ook in een inkooptraject bruikbaar. Wie eerst wil prioriteren, krijgt met het [AI Readiness Assessment](/diensten/ai-readiness-assessment) in 2-3 weken een onderbouwd beeld van welke toepassingen het meeste opleveren en verantwoord te beheren zijn.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: de eerste twee alinea's onder de eerste H2, het schema onder 'Toepassingen binnen overheidsorganisaties' en 'AI Act en publieke waarden'. Vervolgvraag 1: 'AI implementeren binnen de overheid'. Vervolgvraag 2: 'AI Act en publieke waarden'. Vervolgvraag 3: 'AI advies voor overheidsorganisaties'.
- **Let op:** Pagina staat op noindex. Onderwerp is 'AI bij de overheid' (woordkeus van de lede) in plaats van de H1-vorm 'AI voor de overheid'; beide dekken de keyphrase 'ai overheid'. Vervolgvraag 1 ligt in de buurt van de FAQ 'Mogen ambtenaren generatieve AI gebruiken?', maar gaat over de reikwijdte naar gemeenten. De pagina zegt dat de overheid niet het zwaartepunt van de adviseur is; dat staat niet in het blok. Voorbeeldscenario (gemeente) niet gebruikt.

### `/markten/zorg`

Pagina: AI in de zorg: toepassingen, kansen en uitdagingen · staat op `noindex, follow`

- **Status:** wacht op publicatie
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("AI toepassingen in de zorg").
- **Vraagkop:** Welke toepassingen van AI in de zorg leveren het meest op en welke regels gelden daarbij?
- **Antwoordalinea:** AI in de zorg levert de meeste tijdwinst met het kleinste klinische risico op in administratie en planning, zoals verslaglegging en correspondentie, terwijl klinische beslisondersteuning validatie en een regulatoir traject vraagt. Software met een diagnostische of therapeutische functie kan een medisch hulpmiddel zijn onder de MDR of IVDR, met de IGJ als toezichthouder. Stand september 2026 gelden de hoog-risicoregels van de AI Act vanaf 2 december 2027 voor toepassingen uit bijlage III en vanaf 2 augustus 2028 voor AI in producten zoals medische hulpmiddelen.
- **Vervolgvragen:**
  1. *Is voor AI in de zorg een DPIA verplicht?* Ja. Bij grootschalige verwerking van gezondheidsgegevens moet een zorgaanbieder volgens de Autoriteit Persoonsgegevens een DPIA uitvoeren en een functionaris gegevensbescherming aanstellen. Bij AI in de zorg is de DPIA het moment om vast te leggen welke gegevens de toepassing echt nodig heeft.
  2. *Moet een patiëntenchatbot bij AI in de zorg melden dat het om AI gaat?* Ja. Sinds 2 augustus 2026 geldt de transparantieplicht van de AI Act: chatbots en andere interactieve AI-systemen moeten duidelijk maken dat iemand met AI te maken heeft. Bij AI in de zorg raakt dat bijvoorbeeld een patiëntenchatbot.
  3. *Kan een zorginstelling met eisen aan AI in de zorg wachten nu de hoog-risicoregels zijn uitgesteld?* Nee. Een klinische toepassing van AI in de zorg die nu wordt ingekocht, is waarschijnlijk nog in gebruik als de eisen gelden, dus de eisen horen nu al in de selectiecriteria. Een onafhankelijke beoordeling met de [Vendor Review](/diensten/vendor-review) brengt zulke vragen op tafel voordat er getekend is.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: matrix en alinea's onder 'AI toepassingen in de zorg', 'AI zorgapplicaties' en de lijst onder 'Uitdagingen en regelgeving'. Vervolgvraag 1: 'AI en data in de zorg'. Vervolgvraag 2 en 3: 'Uitdagingen en regelgeving' en de slotalinea van 'AI zorgapplicaties'.
- **Let op:** Pagina staat op noindex. De pagina zegt zelf dat dit geen juridisch advies is en dat de zorg niet het zwaartepunt van de adviseur is; dat staat niet in het blok. Het voorbeeldscenario (ggz-instelling) is niet gebruikt.

## 7. Kennisbankartikelen (13)

### `/kennisbank/ai-agents-en-avg`

Pagina: AI agents en de AVG: waar moet je op letten?

- **Status:** geverifieerd (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom AI agents privacyrisico’s geven").
- **Vraagkop:** Wat vraagt de AVG bij AI agents van een organisatie?
- **Antwoordalinea:** De AVG bij AI agents geldt volledig: de organisatie die de agent inzet, blijft verwerkingsverantwoordelijke, ook als de agent zelf gegevens opzoekt, vastlegt of verstuurt. De basis bestaat uit een vastgelegd doel met grondslag, toegang die per bron is afgebakend, een verwerkersovereenkomst met de leverancier, logging van elke stap en vaak een DPIA. Neemt de agent besluiten over mensen, dan komen de regels over geautomatiseerde besluitvorming erbij, en daarnaast kan de AI Act gelden.
- **Vervolgvragen:**
  1. *Bevat de AVG aparte regels voor AI agents?* Nee. De AVG bij AI agents bestaat uit de bestaande regels, die direct van toepassing zijn; een apart hoofdstuk voor AI agents is er niet. Wat verandert is het risicoprofiel: een agent heeft brede toegang, zet meerdere stappen zonder zicht, stuurt gegevens naar een externe leverancier en handelt in plaats van te adviseren.
  2. *Binnen hoeveel uur wordt een datalek gemeld onder de AVG bij AI agents?* 72 uur is onder de AVG bij AI agents de termijn waarbinnen een datalek zo mogelijk bij de Autoriteit Persoonsgegevens wordt gemeld, zonder onredelijke vertraging. De melding is niet nodig als het risico voor betrokkenen onwaarschijnlijk is.
  3. *Geldt de AI Act naast de AVG bij AI agents?* Ja. Naast de AVG bij AI agents, die over persoonsgegevens gaat, kan de AI Act gelden, die over het AI-systeem zelf gaat. Voor agents die onder bijlage III vallen, bijvoorbeeld doordat ze sollicitaties filteren of kandidaten beoordelen, gelden de hoog-risicoverplichtingen door de Digital Omnibus vanaf 2 december 2027 in plaats van 2 augustus 2026.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Waarom AI agents privacyrisico's geven', summary en de lijst onder 'AVG-eisen voor AI agents'. Vervolgvraag 1: inleiding 'AVG-eisen voor AI agents' en de vier kenmerken onder de eerste H2. Vervolgvraag 2: punt 'Beveiliging en datalekken'. Vervolgvraag 3: 'Samenhang met de AI Act'.
- **Let op:** Geen bestaande H2 is een vraag, daarom een eigen vraagkop; het onderwerp is geformuleerd als 'AVG bij AI agents' zodat het letterlijk in de vraagkop past (keyphrase is 'ai agent avg'). De pagina zegt zelf dat het artikel geen juridisch advies is en dat het Digital Omnibus-voorstel voor de AVG nog in behandeling is (stand september 2026); data en termijnen zijn exact overgenomen en moeten bij publicatie nog actueel zijn. Geen DPIA-vervolgvraag, omdat de pagina daar geen eenduidig ja of nee op geeft. De pagina noemt geen dienst.

### `/kennisbank/ai-specialist-salaris`

Pagina: AI specialist salaris: wat verdient een AI specialist?

- **Status:** concept (10 van 11 zinnen bevestigd, 3 geschrapt, 0 voorgelegd, 2 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Salarisindicatie AI specialist").
- **Vraagkop:** Hoe hoog is een AI specialist salaris in Nederland?
- **Antwoordalinea:** Een AI specialist salaris is alleen als bandbreedte te geven, omdat de gecontroleerde bronnen hun cijfers publiceren onder de titel AI engineer en onderling flink verschillen. DataJobs (bijgewerkt mei 2026) noemt bruto per maand € 3.000 tot € 4.000 voor junioren, € 4.000 tot € 5.500 voor medioren en € 5.500 tot € 7.000 voor senioren; Indeed (bijgewerkt 14 september 2026) meldt een gemiddelde van € 56.643 per jaar. Voor werkgevers past een vaste aanstelling bij structureel werk met een duidelijke scope; staat de scope nog niet vast, dan is externe of parttime inzet vaak de verstandiger keuze.
- **Vervolgvragen:**
  1. *Publiceren de bronnen een AI specialist salaris onder die functietitel?* Nee. De gecontroleerde salarisbronnen publiceren hun cijfers onder de titel AI engineer, niet onder AI specialist. Een AI specialist salaris is daardoor alleen als bandbreedte af te leiden.
  2. *Past de Fractional AI Lead als de scope voor een vast AI specialist salaris nog niet vaststaat?* Ja. De [Fractional AI Lead](/diensten/fractional-ai-lead) stuurt de AI-agenda voor een paar dagen per maand, €2.600 per maand voor Advies (2 dagen per maand), €5.200 per maand voor Lead (4 dagen per maand) en €10.400 per maand voor Lead+ (8 dagen per maand), en helpt bij het functieprofiel en de werving van een vaste opvolger.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: tabel en alinea's onder 'Salarisindicatie AI specialist' (kolom DataJobs), het Indeed-punt onder 'AI engineer salaris' en de vuistregels onder 'Vast in dienst of freelance inhuren?'. Vervolgvraag 1: eerste alinea en summary. Vervolgvraag 2: alinea 'Die cijfers zijn lastig één-op-één te vergelijken'. Vervolgvraag 3: vuistregel 'Kies een parttime rol'.
- **Let op:** Alleen bedragen van DataJobs en Indeed overgenomen, met de peildata van de pagina. De cijfers van de Nationale Beroepen-bron (hogere bandbreedtes, bijgewerkt november 2024) en van de publicatie van The Search Company zijn weggelaten omdat hun namen het verboden woord bevatten; het blok toont daardoor de lagere van de twee bandbreedtes per niveau. Het senior-bedrag van DataJobs (€ 7.000) is toevallig gelijk aan de prijs van het AI Readiness Assessment en kan een automatische controle op uitgetypte dienstprijzen laten afgaan. De en dashes uit de bedragen op de pagina zijn vervangen door 'tot'.

### `/kennisbank/ai-voorbeelden`

Pagina: AI voorbeelden: 25 toepassingen uit de praktijk

- **Status:** concept (10 van 11 zinnen bevestigd, 1 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("AI voorbeelden per afdeling").
- **Vraagkop:** Welke AI voorbeelden uit de praktijk zijn bruikbaar voor een organisatie?
- **Antwoordalinea:** Bruikbare AI voorbeelden zijn meestal klein: AI doet een afgebakende taak in een bestaand proces, namelijk lezen, sorteren, samenvatten of een eerste versie schrijven. Het overzicht telt 25 toepassingen per afdeling, per sector en uit het dagelijks leven, en in bijna elk voorbeeld beoordeelt een mens de uitkomst voordat die gevolgen heeft. Het beste startpunt is een taak met hoog volume en lage foutkosten, zoals vragen sorteren, facturen uitlezen of productteksten in concept.
- **Vervolgvragen:**
  1. *Zijn de AI voorbeelden per afdeling en sector succesverhalen van bestaande bedrijven?* Nee. De AI voorbeelden per afdeling en sector zijn bewust generiek beschreven en laten zien welke afgebakende taak AI in een bestaand proces kan doen.
  2. *Gelden voor sommige AI voorbeelden zwaardere regels?* Ja. Bij AI voorbeelden waarin een toepassing zelf een besluit over een persoon neemt of een professioneel oordeel vervangt, gelden zwaardere eisen vanuit de AVG, de AI Act en de sectorregels. AI die sollicitaties filtert of kandidaten beoordeelt, de kredietwaardigheid van personen beoordeelt of leerresultaten en toelating beoordeelt, valt onder de hoog-risicotoepassingen van de AI Act.
  3. *Kan een organisatie laten uitzoeken welke AI voorbeelden het meeste opleveren?* Ja. Het [AI Readiness Assessment](/diensten/ai-readiness-assessment) levert in 2-3 weken een gevalideerde lijst met kansen en een 90-dagenplan op.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: lede, summary, de inleiding onder 'AI voorbeelden per afdeling' en de keuzematrix onder 'Hoe kies je de juiste toepassing?'. Vervolgvraag 1: inleiding 'AI voorbeelden per afdeling' en 'AI voorbeelden in het dagelijks leven'. Vervolgvraag 2: voorbeelden 14, 17 en 19 en de slotalinea onder 'AI voorbeelden per sector'. Vervolgvraag 3: slotalinea.
- **Let op:** Geen bestaande H2 is als vraag over het onderwerp gesteld, daarom een eigen vraagkop. Het voorbeeldscenario met de technische groothandel is niet gebruikt. De pagina noemt alleen de doorlooptijd van het AI Readiness Assessment, geen prijs.

### `/kennisbank/chatgpt-voor-bedrijven`

Pagina: ChatGPT voor bedrijven: toepassingen en veilig gebruik

- **Status:** geverifieerd (10 van 12 zinnen bevestigd, 6 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat kan ChatGPT voor bedrijven?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat kan ChatGPT voor bedrijven? (bestaand)
- **Antwoordalinea:** ChatGPT voor bedrijven is de AI-assistent van OpenAI in een zakelijk abonnement, die in gewone taal teksten, samenvattingen, analyses en opzetten levert en daarnaast onder meer projecten, eigen GPT's, data-analyse en koppelingen met andere systemen biedt. Voor bedrijfsdata zijn de abonnementen Business en Enterprise bedoeld en geen persoonlijke accounts: bij beide blijft training op invoer en uitvoer volgens OpenAI standaard uit (stand september 2026). ChatGPT kan een fout antwoord zelfverzekerd brengen, dus voor alles wat naar een klant, toezichthouder of directie gaat blijft controle door een mens nodig.
- **Vervolgvragen:**
  1. *Is een persoonlijk account bruikbaar als ChatGPT voor bedrijven?* Nee. Bij de persoonlijke abonnementen kan OpenAI gesprekken gebruiken om modellen te verbeteren tenzij de gebruiker dat zelf uitzet, en de organisatie heeft geen zicht of zeggenschap over wat medewerkers invoeren. Voor ChatGPT voor bedrijven met bedrijfsdata zijn Business en Enterprise bedoeld, waarbij ook een verwerkersovereenkomst met OpenAI mogelijk is.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: alinea's onder 'Wat kan ChatGPT voor bedrijven?', de summary en de alinea over training onder 'Privacy en veiligheid'. Vervolgvraag 1 en 2: tabel en toelichting onder 'Zakelijke abonnementen' en het punt 'Dataopslag'. Vervolgvraag 3: eerste twee alinea's onder 'Privacy en veiligheid'.
- **Let op:** Toolprijzen in dollars overgenomen zoals de pagina ze geeft, met peildatum. Het antwoord op vervolgvraag 1 begint met het cijfer 2 (soorten plekken) omdat een antwoord niet met een dollarteken mag beginnen. Geen tabel: de pagina heeft al een eigen abonnementstabel.

### `/kennisbank/claude-voor-bedrijven`

Pagina: Claude voor bedrijven: mogelijkheden en toepassingen

- **Status:** concept (12 van 12 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 3 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat is Claude?").
- **Vraagkop:** Welk abonnement hoort bij Claude voor bedrijven en waar staat de data?
- **Antwoordalinea:** Claude voor bedrijven is de AI-assistent van Anthropic in een zakelijk abonnement: Team voor 2 tot 150 gebruikers, of Enterprise met uitgebreider beheer. Alleen die abonnementen zijn geschikt voor bedrijfsgegevens, omdat training op de content daar standaard uit staat; de data wordt volgens Anthropic in de VS opgeslagen (stand september 2026). Claude komt het meest tot zijn recht bij lange documenten, schrijfwerk en het delegeren van taken.
- **Vervolgvragen:**
  1. *Wat kost Claude voor bedrijven per gebruiker?* Een standaardplek in het Team-abonnement van Claude voor bedrijven kost $20 per gebruiker per maand bij jaarbetaling of $25 bij maandbetaling, en een premiumplek $100 of $125. Enterprise kost $20 per plek per maand bij jaarbetaling plus gebruik tegen API-tarieven, met een jaarcontract van minimaal 20 plekken. Dat zijn Amerikaanse lijstprijzen exclusief btw, stand september 2026.
  2. *Kan de data van Claude voor bedrijven in de app in Europa worden opgeslagen?* Nee. In de zakelijke abonnementen van Claude voor bedrijven staat de data volgens Anthropic in de VS (stand september 2026). Europese opslag en verwerking lopen via de regionale endpoints van AWS Bedrock en Google Vertex, een route voor eigen toepassingen via de API en niet voor de app van Claude.
  3. *Zijn de abonnementen Pro en Max bruikbaar als Claude voor bedrijven?* Nee. Pro en Max zijn persoonlijke abonnementen waarbij modeltraining op gesprekken aan staat tot de gebruiker het zelf uitzet, en centraal beheer ontbreekt. Voor Claude voor bedrijven met bedrijfsgegevens zijn alleen Team en Enterprise geschikt (stand september 2026).
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: lede, summary, eerste alinea en diagram onder 'Zakelijke mogelijkheden' en de slotzin van de eerste alinea na de tabel onder 'Claude versus ChatGPT en Gemini'. Vervolgvraag 1: prijslijst onder 'Zakelijke mogelijkheden'. Vervolgvraag 2: alinea 'Waar staat je data?'. Vervolgvraag 3: eerste alinea en diagram onder 'Zakelijke mogelijkheden'.
- **Let op:** Geen bestaande H2 bevat 'Claude voor bedrijven', daarom een eigen vraagkop. Toolprijzen in dollars overgenomen zoals de pagina ze geeft; het Enterprise-minimum van 20 plekken staat op de pagina als 'volgens de Enterprise-pagina'. De naam 'claude.ai' is vermeden omdat de punt de zinstelling breekt; er staat 'de app van Claude'.

### `/kennisbank/gemini-voor-bedrijven`

Pagina: Gemini voor bedrijven: toepassingen in Google Workspace

- **Status:** concept (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat is Gemini?").
- **Vraagkop:** Wat krijgt een organisatie met Gemini voor bedrijven in Google Workspace?
- **Antwoordalinea:** Gemini voor bedrijven is de generatieve AI van Google, die sinds januari 2025 zonder aparte AI-licentie in de Business- en Enterprise-edities van Google Workspace zit; welke functies beschikbaar zijn, verschilt per editie. Organisaties die al in Gmail, Docs en Meet werken, hoeven daardoor vooral te bepalen hoe Gemini wordt ingezet en welke afspraken over data gelden. Volgens Google dient klantdata uit Workspace zonder toestemming of instructie van de klant niet als trainingsmateriaal voor modellen (stand september 2026).
- **Vervolgvragen:**
  1. *Wat kost Gemini voor bedrijven per gebruiker?* Business Starter kost € 6,80, Business Standard € 13,60 en Business Plus € 21,10: dat zijn de Business-edities van Google Workspace met Gemini voor bedrijven, per gebruiker per maand bij een jaarcontract, exclusief belastingen (stand september 2026). De prijs van de Enterprise-editie is op aanvraag.
  2. *Werkt Gemini voor bedrijven in Docs en Sheets met de editie Business Starter?* Nee. In Business Starter zit Gemini voor bedrijven volgens Google in Gmail en in de Gemini-app, maar niet in Docs en Sheets (stand september 2026). Vanaf Business Standard werkt Gemini in onder andere Gmail, Docs en Meet.
  3. *Kan Gemini voor bedrijven gegevens tonen waar een medewerker geen toegang toe heeft?* Nee. Gemini voor bedrijven haalt volgens Google alleen gegevens op waartoe de gebruiker zelf toegang heeft. Te ruim gedeelde Drive-mappen komen daardoor wel sneller boven, dus het opschonen van toegangsrechten hoort vóór een brede uitrol.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: lede, eerste alinea onder 'Gemini in Google Workspace' en het eerste punt onder 'Privacy en data'. Vervolgvraag 1 en 2: editietabel onder 'Gemini in Google Workspace'. Vervolgvraag 3: punt 'Gemini volgt toegangsrechten' en aandachtspunt 1 onder 'Privacy en data'.
- **Let op:** Geen bestaande H2 bevat 'Gemini voor bedrijven', daarom een eigen vraagkop. Europrijzen zijn toolprijzen van Google, overgenomen zoals de pagina ze geeft. De Vendor Review is niet genoemd: de pagina linkt wel naar /diensten/vendor-review, maar noemt de dienst niet bij naam.

### `/kennisbank/microsoft-copilot-voor-bedrijven`

Pagina: Microsoft Copilot voor bedrijven: wat kun je ermee?

- **Status:** geverifieerd (9 van 10 zinnen bevestigd, 3 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is Microsoft Copilot?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is Microsoft Copilot? (bestaand)
- **Antwoordalinea:** Microsoft Copilot is de AI-assistent van Microsoft voor werk, die taalmodellen koppelt aan Outlook, Teams, Word, Excel en PowerPoint en aan de mail, agenda, chats, vergaderingen en documenten daarin. Voor bedrijven zijn er twee niveaus: Copilot Chat, zonder extra kosten bij een geschikt Microsoft 365-abonnement, en een betaalde licentie die breed met de eigen werkdata redeneert (stand september 2026). Omdat Copilot de bestaande toegangsrechten volgt, komen te ruim gedeelde bestanden in antwoorden naar boven en hoort het opschonen van die rechten bij de voorbereiding.
- **Vervolgvragen:**
  1. *Wat kost een betaalde licentie voor Microsoft Copilot?* Copilot Business kost € 18,20 en Microsoft Copilot voor enterprise € 26,00 per gebruiker per maand, bij jaarlijkse betaling en exclusief btw (stand september 2026). Wie Copilot Business van 1 juli tot en met 31 december 2026 afsluit, betaalt het eerste jaar tijdelijk € 15,60.
  2. *Wordt bedrijfsdata gebruikt om Microsoft Copilot te trainen?* Nee. Volgens Microsoft worden prompts, antwoorden en gegevens die via Microsoft Graph worden opgehaald niet gebruikt om de basismodellen achter Microsoft Copilot te trainen (stand september 2026).
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: eerste alinea onder 'Wat is Microsoft Copilot?', de twee niveaus onder 'Licenties' en de alinea over bestaande rechten onder 'Randvoorwaarden voor je data'. Vervolgvraag 1 en 3: prijstabel en opsomming onder 'Licenties'. Vervolgvraag 2: punt 'Geen training op je data'.
- **Let op:** Onderwerp ingekort tot 'Microsoft Copilot' zodat de bestaande H2 exact als vraagkop kan dienen; de keyphrase is 'microsoft copilot voor bedrijven'. Europrijzen zijn toolprijzen van Microsoft, overgenomen zoals de pagina ze geeft. De maandprijs van € 21,84 en de bundels zijn weggelaten om het antwoord kort te houden.

### `/kennisbank/notuleren-met-ai`

Pagina: Notuleren met AI: tools, werkwijze en privacy

- **Status:** concept (9 van 11 zinnen bevestigd, 5 geschrapt, 0 voorgelegd, 2 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Hoe werkt notuleren met AI?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Hoe werkt notuleren met AI? (bestaand)
- **Antwoordalinea:** Bij notuleren met AI neemt een tool het gesprek op, zet de spraak om in tekst met herkenning van sprekers en maakt een taalmodel daar een samenvatting met besluiten en actiepunten van. De uitkomst is een concept: de voorzitter of een vaste eigenaar controleert het verslag en stelt het vast voordat het wordt gedeeld. Omdat een vergadering opnemen een verwerking van persoonsgegevens is, worden deelnemers vooraf geïnformeerd en wordt vastgelegd wat er bewaard blijft.
- **Vervolgvragen:**
  1. *Mogen medewerkers voor notuleren met AI elk een eigen gratis tool gebruiken?* Nee. Voor notuleren met AI kiest een organisatie één tool die past bij het vergaderplatform en de taal en die zakelijk te contracteren is. Daarna worden de spelregels vastgelegd: bij welke vergaderingen de notulist aan mag, hoe dat wordt aangekondigd, wie het verslag controleert en hoe lang opnames en transcripten bewaard blijven.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Hoe werkt notuleren met AI?' met het stappenschema, summary en de eerste alinea onder 'Privacy en AVG'. Vervolgvraag 1: de lijst met drie manieren van meeluisteren. Vervolgvraag 2: alinea 'Waar staat de data en wie kan erbij?'. Vervolgvraag 3: stap 1 en 2 onder 'Zo richt je het in'.
- **Let op:** De pagina noemt geen dienst, dus geen diensttoken. Toolnamen en taalondersteuning staan al in de eigen tabel van de pagina en zijn niet herhaald. Juridische uitspraken van de Autoriteit Persoonsgegevens zijn bewust niet verder samengevat dan de pagina zelf doet.

### `/kennisbank/prompt-engineering`

Pagina: Prompt engineering: betere resultaten uit AI

- **Status:** concept (7 van 8 zinnen bevestigd, 0 geschrapt, 1 voorgelegd, 3 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is prompt engineering?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is prompt engineering? (bestaand)
- **Antwoordalinea:** Prompt engineering is het zo formuleren van een AI prompt, de opdracht aan een taalmodel, dat het model doet wat bedoeld is en dat bij herhaling opnieuw doet. Voor de meeste medewerkers komt het neer op een paar gewoontes: duidelijk en specifiek zijn, context en een rol geven, voorbeelden tonen en de gewenste vorm vastleggen. Die gewoontes werken in elke assistent, en de uitkomst vraagt altijd controle omdat een overtuigend geformuleerd antwoord nog steeds onjuist kan zijn.
- **Vervolgvragen:**
  1. *Is prompt engineering alleen iets voor ontwikkelaars?* Nee. Voor ontwikkelaars die AI in software inbouwen is prompt engineering een discipline met tests en versiebeheer, maar voor de meeste medewerkers volstaan een paar gewoontes die het verschil maken tussen een generiek antwoord en een bruikbaar concept.
  2. *Bestaat er bij prompt engineering een formule die altijd werkt?* Nee. De leveranciers van de assistenten leggen bij prompt engineering de nadruk op helder formuleren, context geven, voorbeelden tonen en testen. Anthropic benadrukt dat eerst moet vaststaan wat een goed resultaat is en hoe dat wordt getoetst, voordat aan de prompt wordt geschaafd.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: eerste twee alinea's onder 'Wat is prompt engineering?', de technieken 1 tot en met 6 onder 'Technieken' en de summary. Vervolgvraag 1: diagram met bouwstenen onder 'Technieken'. Vervolgvraag 2: tweede alinea onder 'Wat is prompt engineering?'. Vervolgvraag 3: 'Zoeken naar de magische formule' onder 'Veelgemaakte fouten'.
- **Let op:** De keyphrase is 'ai prompt', maar H1 en de vraag-H2 gaan over prompt engineering; daarom onderwerp 'Prompt engineering' met de bestaande H2, en 'AI prompt' in de eerste zin van het antwoord. Het woord dat op de pagina voor de leveranciersdocumentatie wordt gebruikt is bewust vermeden; er staat 'de leveranciers van de assistenten'.

### `/kennisbank/rpa-vs-ai-automatisering`

Pagina: RPA versus AI automatisering: wat past bij jou?

- **Status:** geverifieerd (11 van 12 zinnen bevestigd, 1 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is robotic process automation (RPA)?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is robotic process automation (RPA)? (bestaand)
- **Antwoordalinea:** Robotic process automation is software die de handelingen van een medewerker in bestaande applicaties nabootst: door schermen klikken, gegevens overzetten tussen systemen en formulieren invullen volgens vaste regels. Het is sterk bij regelgebaseerd, herhalend werk met gestructureerde input, maar stopt of gaat de fout in zodra een scherm, veldnaam of documentopmaak verandert. AI automatisering kan wel omgaan met variatie en ongestructureerde informatie, en de meeste waarde zit in de combinatie: AI voor het begrijpen, RPA of een koppeling voor het uitvoeren.
- **Vervolgvragen:**
  1. *Is robotic process automation de eerste keuze als de softwareleverancier een API kan leveren?* Nee. Een directe koppeling via een API is meestal stabieler dan robotic process automation die door schermen klikt. Robotic process automation past bij een stabiel proces met vaste input waarvoor geen goede koppeling mogelijk is.
  2. *Heeft robotic process automation na de oplevering nog een eigenaar nodig?* Ja. Bij robotic process automation moet de robot worden aangepast bij elke wijziging in de onderliggende applicaties, terwijl een AI-toepassing periodiek getoetst moet worden omdat de kwaliteit ongemerkt kan verschuiven. Beide vragen om een eigenaar na de oplevering, en die kosten horen in de business case.
  3. *Bouwt de adviseur zelf robots voor robotic process automation of AI-toepassingen?* Nee. Wie moet kiezen tussen leveranciers die zeggen beide te kunnen, kan de claims naast elkaar laten leggen met de [Vendor Review](/diensten/vendor-review).
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Wat is robotic process automation (RPA)?', lede, summary en 'RPA en AI combineren'. Vervolgvraag 1: vuistregel 'Kies RPA' onder 'Wanneer kies je wat?'. Vervolgvraag 2: alinea over beheer onder 'Verschillen tussen RPA en AI'. Vervolgvraag 3: slotalinea en de alinea over de Vendor Review.
- **Let op:** Twijfel over de plek: de keyphrase is 'robotic process automation' en de eerste H2 stelt die vraag letterlijk, maar de pagina als geheel is een vergelijking van RPA en AI automatisering. Het antwoord dekt daarom beide. De pagina heeft geen FAQ. De Vendor Review staat op de pagina zonder prijs of doorlooptijd, dus zonder die tokens.

### `/kennisbank/wat-doet-een-ai-consultant`

Pagina: Wat doet een AI consultant?

- **Status:** geverifieerd (11 van 12 zinnen bevestigd, 1 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is een AI consultant?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is een AI consultant? (bestaand)
- **Antwoordalinea:** Een AI consultant adviseert organisaties over de keuzes rond kunstmatige intelligentie: welke problemen AI oplost en welke niet, wat het kost, welke risico's meespelen en wie waarvoor verantwoordelijk is. De kerntaken zijn strategie bepalen, use cases selecteren, de implementatie begeleiden en governance inrichten. Code schrijven en modellen trainen hoort meestal niet bij de rol: dat is het werk van een AI developer.
- **Vervolgvragen:**
  1. *Is elke AI consultant onafhankelijk van leveranciers?* Nee. Er zijn grofweg twee soorten AI consultants: onafhankelijke adviseurs die alleen aan advies verdienen, en consultants die ook implementatiepartner of reseller van bepaalde platforms zijn. Dat verschil bepaalt hoe vrij het advies van de AI consultant is.
  2. *Kan één partij tegelijk AI consultant en AI developer zijn?* Ja. Eén partij kan de rol van AI consultant en die van AI developer combineren, maar dat wordt riskant als die partij aan de bouw verdient. Het advies heeft dan belang bij een grotere scope.
  3. *Loont een AI consultant bij elk AI-besluit?* Nee. Een AI consultant loont vooral bij besluiten die duur of moeilijk terug te draaien zijn, bij interne patstellingen, als een investering verantwoord moet worden of als iets voor het eerst onder tijdsdruk gebeurt.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Wat is een AI consultant?', het diagram onder 'Taken van een AI consultant' en 'AI consultant versus AI developer'. Vervolgvraag 1: derde alinea onder 'Wat is een AI consultant?'. Vervolgvraag 2: slotalinea onder 'AI consultant versus AI developer'. Vervolgvraag 3: 'Wanneer schakel je een AI consultant in?'.
- **Let op:** De eigenlijke artikelvraag 'Wat doet een AI consultant?' is de H1 en mag dus niet als eigen vraagkop; daarom de bestaande H2 'Wat is een AI consultant?' gebruikt. Vervolgvraag 3 ligt inhoudelijk dicht bij de H2 'Wanneer schakel je een AI consultant in?', maar is als ja/nee-vraag anders geformuleerd; eventueel schrappen. Geen tabel: de pagina heeft al een vergelijkingstabel consultant versus developer.

### `/kennisbank/wat-doet-een-ai-developer`

Pagina: Wat doet een AI developer?

- **Status:** concept (7 van 9 zinnen bevestigd, 3 geschrapt, 1 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is een AI developer?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is een AI developer? (bestaand)
- **Antwoordalinea:** Een AI developer is een softwareontwikkelaar die toepassingen bouwt, test en onderhoudt waarin een AI-model een kernrol speelt. Omdat een model een waarschijnlijk antwoord geeft dat fout kan zijn, zit het meeste werk in data, koppelingen en evaluatie en niet in het model zelf. Wat er gebouwd moet worden is de vraag van een AI consultant, hoe het goed gebouwd wordt die van de AI developer.
- **Vervolgvragen:**
  1. *Traint een AI developer altijd zelf modellen?* Nee. Een AI developer is tegenwoordig vaker een ontwikkelaar die bestaande modellen van een leverancier inzet en er een toepassing omheen bouwt. Soms wordt met de titel een machine learning engineer bedoeld die zelf modellen traint.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Wat is een AI developer?', het bijschrift van het takenschema en de tabel onder 'AI developer versus AI consultant'. Vervolgvraag 1: derde alinea onder 'Wat is een AI developer?'. Vervolgvraag 2: alinea 'Wat een AI developer doorgaans níét doet' onder 'Taken'. Vervolgvraag 3: voorlaatste alinea onder 'AI developer versus AI consultant'.
- **Let op:** Blok geplaatst onder de bestaande H2 'Wat is een AI developer?'; de artikelvraag (H1) luidt 'Wat doet een AI developer?'. Keyphrase is de hele vraag; als onderwerp is 'AI developer' gekozen. De pagina heeft geen FAQ en noemt geen dienst.

### `/kennisbank/wat-doet-een-bi-specialist`

Pagina: Wat doet een BI specialist?

- **Status:** concept (11 van 12 zinnen bevestigd, 1 geschrapt, 0 voorgelegd, 2 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is een BI specialist?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is een BI specialist? (bestaand)
- **Antwoordalinea:** Een BI specialist zorgt dat een organisatie stuurt op cijfers die kloppen, overal hetzelfde betekenen en op tijd beschikbaar zijn. Het werk bestaat uit vragen ophalen bij de business, data uit bronsystemen samenbrengen, een datamodel met definities inrichten en rapportages en dashboards maken en uitleggen. Waar een BI specialist verklaart wat er is gebeurd, richt een AI specialist zich op voorspellen en op het automatiseren van taken met AI.
- **Vervolgvragen:**
  1. *Maakt AI de BI specialist overbodig?* Nee. AI neemt routinewerk van de BI specialist over, zoals het schrijven van berekeningen en queries, waardoor datamodellering, definities en advies belangrijker worden. Een BI specialist die kan uitleggen hoe data tot stand komt en waar de beperkingen zitten, wordt waardevoller.
  2. *Is een BI specialist meestal eerder nodig dan een AI specialist?* Ja. In de praktijk zijn vaak zowel een BI specialist als een AI specialist nodig, in die volgorde.
  3. *Heeft een BI specialist altijd dezelfde functietitel?* Nee. De rol van BI specialist heet in de praktijk ook BI consultant, BI developer, data analist of reporting specialist. De accenten verschillen: de een zit dichter bij de techniek, de ander dichter bij de business.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Wat is een BI specialist?', het schema onder 'Taken en vaardigheden' en de tabel onder 'BI specialist versus AI specialist'. Vervolgvraag 1: 'Hoe AI de rol verandert' en de summary. Vervolgvraag 2: alinea 'In de praktijk heb je ze vaak allebei nodig'. Vervolgvraag 3: tweede alinea onder 'Wat is een BI specialist?'.
- **Let op:** Blok geplaatst onder de bestaande H2 'Wat is een BI specialist?'. De eigenlijke artikelvraag (H1) is 'Wat doet een BI specialist?'; als dat niet als hoofdvraag telt, is een eigen vraagkop nodig. Keyphrase is het meervoud 'bi specialisten'; onderwerp in enkelvoud zodat de kop het letterlijk bevat. De pagina heeft geen FAQ en noemt geen dienst.

## 8. Inzichten (artikelen) (12)

### `/inzichten/ai-adoptie-begint-bij-het-werk`

Pagina: AI-adoptie begint bij het werk

- **Status:** geverifieerd (12 van 12 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Het patroon dat zich overal herhaalt").
- **Vraagkop:** Waarom blijft AI-adoptie laag na de uitrol van een tool en wat werkt wel?
- **Antwoordalinea:** AI-adoptie blijft na een uitrol met licenties en een training vaak steken op tien tot vijftien procent wekelijks gebruik, omdat een algemene assistent geen startpunt biedt en medewerkers niet weten wat is toegestaan. Wat wel werkt, is per rol drie tot vijf concrete scenario's aanbieden als kant-en-klaar startpunt, zoals een knop, een sjabloon of een vooraf ingevulde opdracht. Het gebruik verspreidt zich daarna via collega's in hetzelfde team en wordt per rol gemeten in plaats van als één totaalcijfer.
- **Vervolgvragen:**
  1. *Is lage AI-adoptie een teken dat medewerkers weerstand hebben tegen verandering?* Nee. Lage AI-adoptie is een ontwerpprobleem van de introductie en geen gebrek aan bereidheid. Bij onduidelijke regels over wat mag, doen medewerkers niets, en dat is verstandig gedrag.
  2. *Is één adoptiepercentage voor de hele organisatie genoeg om AI-adoptie te volgen?* Nee. Eén totaalcijfer voor AI-adoptie verbergt de verschillen tussen rollen en teams. Een meting per rol of team kijkt naar het wekelijkse gebruik, naar het gebruikte scenario en naar wat medewerkers doen die na één poging niet terugkwamen.
  3. *Zijn klachten over beperkingen van de tool een slecht teken voor AI-adoptie?* Nee. Klachten over beperkingen betekenen dat de tool wordt gebruikt en gelden als signaal dat AI-adoptie op de goede weg is. Stilte betekent meestal dat medewerkers het hebben opgegeven.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: lede, 'Waarom een leeg invoerveld niet werkt', 'Wat wel werkt: scenario's in plaats van mogelijkheden', summary en 'Adoptie verspreidt zich via collega's'. Vervolgvraag 1: 'Het patroon dat zich overal herhaalt' en de tweede drempel onder 'Waarom een leeg invoerveld niet werkt'. Vervolgvraag 2: 'Meet per rol, niet in totaal'. Vervolgvraag 3: 'Drie signalen dat je adoptie op de goede weg is'.
- **Let op:** Het percentage 'tien tot vijftien procent wekelijks gebruik' komt uit de lede (algemene uitspraak). De cijfers elf en veertien procent en 70% tegenover 4% zijn illustratief en niet overgenomen. Geen tabel: het artikel vergelijkt geen opties en bevat geen interne links.

### `/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen`

Pagina: AI-agents: wat ze wel en niet kunnen

- **Status:** concept (11 van 12 zinnen bevestigd, 3 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat een agent anders maakt").
- **Vraagkop:** Voor welke taken zijn AI-agents geschikt en waar gaat het mis?
- **Antwoordalinea:** AI-agents zijn geschikt voor voorbereidend werk waar een mens daarna over beslist, voor stappen die zonder schade terug te draaien zijn en voor taken met een harde, controleerbare eindtoets. Het gaat mis bij processen waarin een fout onopgemerkt doorwerkt, bij handelingen met externe gevolgen, bij lange ketens zonder tussentoets en bij situaties zonder volledig logboek. Hoeveel autonomie een agent krijgt, is een keuze van de organisatie die afhangt van wat een fout kost en wie die fout opmerkt.
- **Vervolgvragen:**
  1. *Is een bevestigingsstap nodig als AI-agents berichten naar klanten sturen of betalingen starten?* Ja. Bij handelingen van AI-agents met externe gevolgen, zoals een bericht naar een klant, een bestelling of een betaling, hoort standaard een bevestigingsstap. De kosten van een fout landen dan buiten de organisatie en zijn niet terug te nemen.
  2. *Is een volledig logboek nodig bij het inzetten van AI-agents?* Ja. Zonder volledig logboek van de gezette stappen, de geraadpleegde bronnen en de gekozen route van AI-agents is een incident niet te onderzoeken. Voor gereguleerde processen is werken zonder logboek geen optie, voor andere processen is het onverstandig.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Waar agents goed werken', 'Waar agents stukgaan' en 'De vraag die je vooraf moet beantwoorden'. Vervolgvraag 1: 'Het autonomieniveau als bewuste keuze'. Vervolgvraag 2: 'Handelingen met externe gevolgen'. Vervolgvraag 3: 'Situaties zonder volledig logboek'.
- **Let op:** De tijdwinst 'vaak tientallen procenten op de voorbereidende stap' is een praktijkcijfer en weggelaten. Geen tabel: geen interne links in het artikel.

### `/inzichten/ai-governance-zonder-bureaucratie`

Pagina: AI-governance zonder bureaucratie

- **Status:** concept (10 van 12 zinnen bevestigd, 0 geschrapt, 2 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Het echte risico van AI-governance").
- **Vraagkop:** Hoe richt een organisatie AI-governance in zonder dat het bureaucratie wordt?
- **Antwoordalinea:** AI-governance blijft licht als toepassingen eerst naar risico worden ingedeeld in laag, midden en hoog, zodat alleen de hoogste categorie het zwaarste regime krijgt. Daarnaast volstaan vier mechanismen: één register van alle toepassingen, één poort voor beoordeling vooraf, één periodieke toets en één escalatiepad. Te veel regels leiden ertoe dat medewerkers eromheen werken, waardoor een schaduwpraktijk ontstaat met tools die niemand kent.
- **Vervolgvragen:**
  1. *Is een aparte AI-ethiekcommissie nodig voor AI-governance?* Nee. Voor AI-governance is het meestal beter om AI als onderwerp toe te voegen aan het gremium dat binnen de bestaande risicostructuur al bestaat. Dat gremium heeft al mandaat en vergadert al.
  2. *Volstaat een spreadsheet als register voor AI-governance?* Ja. Voor AI-governance is een spreadsheet die klopt beter dan een GRC-module die half gevuld is. Het register bevat per toepassing de eigenaar, het doel, het risiconiveau, de gebruikte data, de leverancier en het moment van de laatste beoordeling.
  3. *Is de risico-indeling voor AI-governance in drie niveaus ook een juridisch oordeel onder de Europese AI-verordening?* Nee. De indeling in drie niveaus is een werkmodel om binnen AI-governance het interne gesprek te structureren. De Europese AI-verordening hanteert een eigen classificatie, en de juridische afdeling of een gespecialiseerde adviseur stelt vast waar toepassingen exact onder vallen.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Het echte risico van AI-governance', 'Begin bij risicoclassificatie, niet bij techniek' en 'De vier mechanismen die je minimaal nodig hebt'. Vervolgvraag 1: 'Wat je kunt overslaan'. Vervolgvraag 2: '1. Eén register'. Vervolgvraag 3: slotalinea onder de risicoclassificatie.
- **Let op:** De voorbeeldtermijnen (twee weken doorlooptijd voor de poort, twee werkdagen reactietijd) zijn als voorbeeld geformuleerd en daarom niet overgenomen. Geen tabel: de drie risiconiveaus zijn geen keuze-opties en het artikel bevat geen interne links.

### `/inzichten/ai-vendorselectie-in-acht-stappen`

Pagina: AI-vendorselectie in acht stappen

- **Status:** geverifieerd (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom AI-selectie anders is").
- **Vraagkop:** Hoe verloopt een AI-vendorselectie die niet door demo's of interne voorkeuren wordt beslist?
- **Antwoordalinea:** Een AI-vendorselectie in acht stappen begint met de gewenste uitkomst en met criteria en wegingen die vastliggen voordat er een leveranciersnaam op tafel komt. Daarna krijgen alle leveranciers hetzelfde scenario op representatieve eigen data, vullen beoordelaars hun scorecard afzonderlijk in en volgt een kostenberekening over drie jaar, inclusief integratie, beheer en exit. De selectie sluit af met onderhandelen over voorwaarden en met het vastleggen van de redenen waarom de andere partijen afvielen.
- **Vervolgvragen:**
  1. *Is de prijs het belangrijkste onderhandelpunt bij een AI-vendorselectie?* Nee. Bij een AI-vendorselectie wegen een prijsafspraak voor verbruik bij groei, vastgelegde exitvoorwaarden, een prestatieafspraak op het eigen scenario en het recht op een eigen kwaliteitsmeting zwaarder. Ook hoort vast te liggen wat er gebeurt als de leverancier het onderliggende model vervangt.
  2. *Hoort een optie zonder aankoop in de vergelijking van een AI-vendorselectie?* Ja. In een AI-vendorselectie hoort minimaal één optie zonder aankoop in de vergelijking. Die optie geeft een referentiepunt voor wat de aankoop werkelijk toevoegt.
  3. *Over hoeveel jaar worden de kosten berekend in een AI-vendorselectie?* Drie jaar is de periode waarover de totale kosten in een AI-vendorselectie worden berekend. De berekening bevat minimaal de licentie, verbruikskosten bij verwacht en dubbel volume, eenmalige integratie, doorlopend beheer, opleiding en geschatte exitkosten.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: stap 1, 2, 4, 5, 7 en 8 en 'Tot slot: documenteer waarom de anderen afvielen'. Vervolgvraag 1: 'Stap 8: Onderhandel op wat je écht nodig hebt'. Vervolgvraag 2: 'Stap 3: Maak een longlist op fit, niet op bekendheid'. Vervolgvraag 3: 'Stap 7: Reken de echte kosten uit'.
- **Let op:** Het artikel noemt de Vendor Review niet, dus geen diensttoken gebruikt, hoewel het onderwerp er direct op aansluit. Geen tabel: het artikel vergelijkt geen opties en bevat geen interne links.

### `/inzichten/build-buy-of-partner`

Pagina: Build, buy of partner: wat past bij jouw situatie?

- **Status:** geverifieerd (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom deze keuze zwaarder weegt bij AI").
- **Vraagkop:** Wanneer kiest een organisatie bij AI voor build, buy of partner?
- **Antwoordalinea:** De keuze tussen build, buy of partner bij AI hangt af van vier vragen: is de toepassing onderscheidend, wat kost ze in jaar vijf, wie moet de uitkomst kunnen sturen en hoe verloopt de exit. Zelf bouwen past alleen bij wat een organisatie in de markt onderscheidt, kopen bij alles wat een commodity is, en een partner bij toepassingen waar sturing op de uitkomst nodig is zonder de techniek te bezitten. Vaak houdt een mengvorm het best stand: de bouwstenen kopen, de laag met eigen kennis zelf bouwen en de implementatie door een partner laten doen.
- **Vervolgvragen:**
  1. *Is zelf bouwen bij build, buy of partner altijd de goedkoopste optie?* Nee. Bij de keuze build, buy of partner is bouwen goedkoop in het eerste jaar, maar het jaarlijkse onderhoud van een zelfgebouwde AI-toepassing ligt volgens een vuistregel uit de praktijk tussen 20% en 40% van de oorspronkelijke bouwkosten. Over vijf jaar doorgerekend en vergeleken met een licentie keert de conclusie vaak om.
  2. *Is kopen een verstandige start bij twijfel tussen build, buy of partner?* Ja. Bij twijfel tussen build, buy of partner is kopen bijna altijd de goedkoopste manier om te leren wat werkelijk nodig is. Later bouwen kan alsnog, met een scherpere specificatie.
  3. *Welk deel van wat organisaties zelf willen bouwen is bij build, buy of partner werkelijk onderscheidend?* Tien tot twintig procent is hooguit het deel van wat organisaties willen bouwen dat werkelijk onderscheidend is. De toets bij build, buy of partner is of de belangrijkste concurrent hetzelfde resultaat morgen bij een leverancier kan kopen: is dat zo, dan is het een commodity.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'De vier vragen die de keuze bepalen', summary en 'De hybride vorm die het vaakst werkt'. Vervolgvraag 1: 'Vraag 2: Wat kost het in jaar vijf?'. Vervolgvraag 2: slotalinea van 'Drie situaties waarin de keuze duidelijk is'. Vervolgvraag 3: 'Vraag 1: Is dit onderscheidend, of is het een commodity?'.
- **Let op:** De H1 is zelf een vraag, daarom een eigen, andere vraagkop. Tabel weggelaten: het artikel vergelijkt wel drie opties, maar bevat geen enkele interne link, dus de verplichte gelinkte laatste cel per rij is niet te vullen. De vuistregel van 20% tot 40% onderhoud en 'tien tot twintig procent onderscheidend' staan als algemene praktijkuitspraak in het artikel; schrap vervolgvraag 1 en 3 als dat te veel op een praktijkcijfer lijkt.

### `/inzichten/de-business-case-voor-ai`

Pagina: De business case voor AI, eerlijk berekend

- **Status:** concept (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 3 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waar AI-businesscases sneuvelen").
- **Vraagkop:** Wat hoort er in een business case voor AI die een jaar later nog standhoudt?
- **Antwoordalinea:** Een business case voor AI houdt stand als bespaarde uren alleen als besparing meetellen wanneer de kosten werkelijk dalen, en als de kostenkant volledig is: verbruik, beheer, integratie, verandering en governance. De uitkomst staat er als bandbreedte in, met de aannames over adoptie, volume en het omzetten van tijdwinst in geld zichtbaar bovenaan. Bij goedkeuring ligt vast welke cijfers na twaalf maanden worden gerapporteerd, wat de nulmeting is en bij welke uitkomst wordt bijgestuurd of gestopt.
- **Vervolgvragen:**
  1. *Telt extra tijd voor waardevol werk mee als besparing in een business case voor AI?* Nee. Meer tijd voor waardevol werk is echte waarde, maar geen financiële besparing. In een business case voor AI hoort die post bij de kwalitatieve baten en niet in de rekensom.
  2. *Stijgen de kosten mee met het gebruik in een business case voor AI?* Ja. Bij AI wordt vaak betaald per verwerkt document, per gesprek of per verwerkte hoeveelheid tekst, waardoor de verbruikskosten meeschalen met het gebruik. Een business case voor AI rekent daarom met de kosten per transactie uit de pilot maal het verwachte volume bij volledige uitrol, en met een scenario op dubbel volume.
  3. *Hoe lang duurt de productiviteitsdip waarmee een business case voor AI rekening houdt?* Vier tot acht weken duurt de productiviteitsdip na de invoering doorgaans. Het opnemen van die dip maakt een business case voor AI geloofwaardiger en niet zwakker.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: summary, 'De kostenkant: waar het meestal misgaat', 'Werk met bandbreedtes, niet met puntschattingen' en 'Spreek af wat je over een jaar meet'. Vervolgvraag 1: '1. Kostenreductie'. Vervolgvraag 2: 'Verbruikskosten die meeschalen'. Vervolgvraag 3: 'Verandering en opleiding'.
- **Let op:** De eurobedragen uit het bandbreedtevoorbeeld en de beheerraming van een halve tot een hele dag per maand zijn niet overgenomen. Het onderwerp is gespeld als 'business case voor AI' (zoals in de H1); het artikel schrijft in de lopende tekst ook 'businesscase' aaneen. Geen tabel: geen interne links.

### `/inzichten/freelance-ai-consultant-vs-agency-vs-big4`

Pagina: Freelance AI consultant vs agency vs Big 4

- **Status:** concept (11 van 12 zinnen bevestigd, 1 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wanneer kies je voor wie?").
- **Vraagkop:** Wanneer past een freelance AI consultant beter dan een agency of een Big 4-kantoor?
- **Antwoordalinea:** Een freelance AI consultant past bij afgebakende, besluitgedreven vraagstukken, zoals een strategiesprint, een vendorselectie of een second opinion op een businesscase, waar één senior adviseur snel en flexibel werkt. Een agency past wanneer vaststaat wat er gebouwd moet worden en er specialistische capaciteit nodig is, en een Big 4-kantoor bij grote transformaties en trajecten waar compliance leidend is. Geen van deze opties wint op alle punten: de keuze hangt af van het doel, de urgentie en de vereiste governance.
- **Vervolgvragen:**
  1. *Kan een freelance AI consultant een grote implementatie met een ontwikkelteam leveren?* Nee. Een freelance AI consultant kan geen volume leveren, zoals een implementatie met acht ontwikkelaars of een programma dat twee jaar loopt. Bij trajecten die gevoelig zijn voor de uitval van één persoon is een eenmanspraktijk bovendien een reëel risico.
  2. *Is een freelance AI consultant te combineren met een agency?* Ja. Een opzet die vaak goed uitpakt, is een onafhankelijke senior zoals een freelance AI consultant voor de strategie en de selectie, en een agency of systeemintegrator voor de bouw. De adviseur zit tijdens de bouw aan de kant van de opdrachtgever en heeft geen belang bij groei van de scope.
  3. *Moet een opdrachtgever ook een freelance AI consultant naar belangen bij leveranciers vragen?* Ja. De vier vragen over vergoedingen of partnerstatus, een eigen implementatiepraktijk, de verhouding tussen omzet uit implementatie en advies en afrekening op vervolgomzet gelden voor elke partij, dus ook voor een freelance AI consultant.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Wanneer kies je voor wie?', de drie optieblokken onder '2. Wat betekent dit in de praktijk?', 'Waar de freelancer wint' en '4. Hoe maak je de juiste keuze?'. Vervolgvraag 1: 'Waar de freelancer verliest'. Vervolgvraag 2: '5. De combinatie die vaak het beste werkt'. Vervolgvraag 3: '3. Het conflict-of-interest-gesprek'.
- **Let op:** Tabel weggelaten: het artikel toont de vergelijking freelance, agency en Big 4 al in een eigen tabel en bevat geen interne links. De bestaande H2 'Wanneer kies je voor wie?' bevat het onderwerp niet, daarom een eigen vraagkop. 'Strategiesprint', 'vendorselectie' en 'second opinion' staan in het artikel als soortnamen, niet als dienstnamen van Dave, en zijn daarom zonder token geschreven: graag controleren of dat gewenst is. Het artikel is in de ik-vorm geschreven door de freelancer zelf; het blok is neutraal in de derde persoon gehouden.

### `/inzichten/het-datafundament-onder-ai`

Pagina: Het datafundament onder je AI-initiatieven

- **Status:** geverifieerd (9 van 11 zinnen bevestigd, 5 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Twee waarheden die elkaar tegenspreken").
- **Vraagkop:** Moet het datafundament eerst op orde zijn voordat een organisatie met AI begint?
- **Antwoordalinea:** Een volledig datafundament is geen voorwaarde om met AI te beginnen: voldoende fundament voor één use case is genoeg. De aanpak die werkt, kiest eerst één use case met duidelijke waarde en een eigenaar in de lijn, en lost alleen voor de bronnen van die use case de definities, de herkomst en de kwaliteit op. Na drie of vier use cases is er zo een fundament ontstaan uit gebruik, kleiner dan het ideaalplaatje en betrouwbaarder.
- **Vervolgvragen:**
  1. *Zijn er situaties waarin het datafundament wel vóór de eerste AI-toepassing moet worden aangepakt?* Ja. Het datafundament gaat voor als de kernentiteit niet eenduidig is, als de benodigde data niet wordt vastgelegd of als een bron geen eigenaar heeft. Die drie signalen gaan over betekenis en eigenaarschap, niet over technologie.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: summary, 'Twee waarheden die elkaar tegenspreken' en 'De use-case-gedreven volgorde'. Vervolgvraag 1: 'Probleem 4: Toegankelijkheid en infrastructuur'. Vervolgvraag 2: 'Wanneer "eerst de data" wél het juiste antwoord is'. Vervolgvraag 3: 'Probleem 1: Definities'.
- **Let op:** Vervolgvraag 2 ligt inhoudelijk dicht bij de bestaande H2 'Wanneer "eerst de data" wél het juiste antwoord is', maar is anders geformuleerd; schrap hem als dat te veel overlapt. De percentages 94%, 6% en 40% zijn rekenvoorbeelden en niet overgenomen. Geen tabel: geen interne links.

### `/inzichten/van-ai-strategie-naar-waarde`

Pagina: Van AI-strategie naar echte waarde

- **Status:** concept (12 van 12 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 3 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waar het misgaat tussen strategie en resultaat").
- **Vraagkop:** Hoe wordt een AI-strategie omgezet in meetbaar resultaat?
- **Antwoordalinea:** Een AI-strategie levert pas resultaat op na drie vertaalslagen: ambities omzetten in meetbare business-uitkomsten, per use case één eigenaar aanwijzen met budget en mandaat, en waarde meten op het niveau waarop die is beloofd. De meeste strategieën stranden niet op de inhoud, maar op het ontbreken van die vertaling. Een klein portfolio met eigenaren, meetpunten en stopcriteria levert meer op dan een lange roadmap waar niemand over gaat.
- **Vervolgvragen:**
  1. *Hoort het eigenaarschap van een use case uit de AI-strategie bij de AI-lead of het datateam?* Nee. De eigenaar van een use case uit de AI-strategie hoort in de business te zitten, op de P&L waar de waarde moet landen. De AI-lead en het datateam kunnen bouwen en adviseren, maar zijn niet de eigenaar.
  2. *Bewijzen gebruikscijfers dat een AI-strategie waarde oplevert?* Nee. Gebruiksstatistieken zijn een vroege indicator, maar geen bewijs dat een AI-strategie waarde oplevert. Een businesscase die in euro's of uren is geformuleerd, vraagt uiteindelijk om rapportage in euro's of uren.
  3. *Is een nulmeting nodig om het resultaat van een AI-strategie aan te tonen?* Ja. Het meten van het businessresultaat van een AI-strategie vraagt bijna altijd om een nulmeting vóór de start. Die nulmeting is 2 dagen werk, en zonder is een jaar later niets hard te maken.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: excerpt, summary, 'Waar het misgaat tussen strategie en resultaat' en 'Wat dit in de praktijk oplevert'. Vervolgvraag 1: valkuil onder 'Stap 2: Beleg eigenaarschap met budget en mandaat'. Vervolgvraag 2 en 3: 'Stap 3: Meet op het niveau waarop je het beloofde'.
- **Let op:** Het rekenvoorbeeld met het besparingsbedrag en de gebruikscijfers (1.200 gebruikers, 87%, 40.000 documenten) is niet overgenomen, net als de voorbeelduitkomsten onder stap 1. Het artikel noemt de AI Strategy Sprint niet, dus geen diensttoken. Geen tabel: geen interne links.

### `/inzichten/waarom-ai-pilots-blijven-steken`

Pagina: Waarom AI-pilots blijven steken

- **Status:** geverifieerd (11 van 12 zinnen bevestigd, 3 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("De pilotparadox").
- **Vraagkop:** Waardoor worden geslaagde AI-pilots zelden opgeschaald naar productie?
- **Antwoordalinea:** AI-pilots blijven steken door oorzaken die geen van alle technisch zijn: de pilot beantwoordt alleen of iets technisch kan, draait buiten het echte werkproces, heeft geen eigenaar voor de fase erna, rekent het beheer niet mee en vermijdt de organisatorische verandering. Een pilot toont haalbaarheid aan en geen waarde. De tegenmaatregel is om vóór de start de te beantwoorden vraag, de stopcriteria, de opschaaleigenaar, de beheerraming en de benodigde verandering op één pagina vast te leggen.
- **Vervolgvragen:**
  1. *Kunnen AI-pilots beter in de echte werkomgeving draaien dan in een aparte omgeving?* Ja. Voor AI-pilots is een kleinere scope in de echte omgeving beter dan een grotere scope ernaast: één team met echte data, het echte proces en echte koppelingen. Die opzet is trager in de eerste week en aanzienlijk sneller in maand zes.
  2. *Moet de opschaaleigenaar van AI-pilots al voor de start bekend zijn?* Ja. De opschaaleigenaar van AI-pilots wordt aangewezen voordat de pilot begint: iemand uit de lijn, met budget en een plek in de pilotstuurgroep. Is die persoon niet te vinden, dan is dat zelf een belangrijke uitkomst.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'De pilotparadox', de vijf oorzaak-koppen, summary en 'Een pilotcontract van één pagina'. Vervolgvraag 1: tegenmaatregel bij oorzaak 2. Vervolgvraag 2: tegenmaatregel bij oorzaak 3. Vervolgvraag 3: tegenmaatregel bij oorzaak 5.
- **Let op:** De H1 heeft de vorm van een vraag zonder vraagteken; de vraagkop is daarom bewust anders geformuleerd. De uitspraak uit de lede over hoeveel organisaties pilots opschalen is een ervaringsclaim en niet overgenomen. Geen tabel: geen interne links.

### `/inzichten/wanneer-heb-je-echt-een-ai-strateeg-nodig`

Pagina: Wanneer heb je echt een AI-strateeg nodig?

- **Status:** geverifieerd (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Eerst: wanneer je het zelf beter kunt").
- **Vraagkop:** In welke situaties loont het om een AI-strateeg in te huren?
- **Antwoordalinea:** Een AI-strateeg inhuren loont in vier situaties: bij een duur besluit dat moeilijk terug te draaien is, bij een interne patstelling, bij een investering die aan een board of toezichthouder moet worden uitgelegd, en bij een eerste keer onder hoge tijdsdruk. Bij technische en afgebakende vragen, kleine omkeerbare besluiten, een interne lead met mandaat of een besluit dat al genomen is, voegt externe hulp weinig toe. Voor de meeste organisaties volstaat een afgebakende opdracht of een deeltijdrol van een paar dagen per maand.
- **Vervolgvragen:**
  1. *Is een AI-strateeg nodig voor de keuze van een kleine, maandelijks opzegbare tool?* Nee. Voor een klein en omkeerbaar besluit is een AI-strateeg niet nodig: de tijd voor een afweging kost meer dan het experiment zelf. Analysekracht is beter besteed aan besluiten die moeilijk terug te draaien zijn.
  2. *Heeft het zin een AI-strateeg in te huren om een al genomen besluit te onderbouwen?* Nee. Een AI-strateeg inhuren om een gekozen richting te bekrachtigen is verspilling, omdat er niets nieuws uit komt en afwijkende bevindingen worden weggemasseerd. Een externe toets voor een board of toezichthouder heeft alleen zin als de uitkomst nog open staat.
  3. *Hoe lang duurt een afgebakende opdracht voor een AI-strateeg meestal?* Twee tot zes weken is de omvang van een afgebakende opdracht die voor de meeste organisaties klopt. Een opdracht voor een AI-strateeg die langer duurt zonder tussentijdse beslismomenten, is zelden in het belang van de opdrachtgever.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Wanneer externe hulp wél loont', 'Eerst: wanneer je het zelf beter kunt' en 'De omvang die meestal klopt'. Vervolgvraag 1: '2. Het besluit is klein en omkeerbaar'. Vervolgvraag 2: '4. Het besluit is al genomen' en '3. Je moet iets aan een board of toezichthouder uitleggen'. Vervolgvraag 3: 'De omvang die meestal klopt'.
- **Let op:** De H1 is zelf een vraag en geen H2 stelt de hoofdvraag als vraag, daarom een eigen, andere vraagkop. Vervolgvraag 3 noemt 'twee tot zes weken' uitgetypt: dat is de algemene uitspraak van het artikel over opdrachten van adviseurs, niet de doorlooptijd van een benoemde dienst van Dave. Schrap vervolgvraag 3 als dat toch te dicht bij een eigen doorlooptijd komt. Het artikel noemt geen dienst bij naam, dus geen diensttokens. Geen tabel: geen interne links.

### `/inzichten/welke-ai-use-cases-leveren-resultaat`

Pagina: Welke AI-use cases leveren écht resultaat op?

- **Status:** concept (10 van 11 zinnen bevestigd, 3 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Het patroon achter de winnaars").
- **Vraagkop:** Waaraan zijn AI-use cases te herkennen die resultaat opleveren?
- **Antwoordalinea:** AI-use cases die resultaat opleveren, delen vier kenmerken: een hoog volume met weinig variatie, fouten waarvan de kosten bekend en betaalbaar zijn, een menselijke controlestap die al in het proces zit en data die al bestaat en al voor beslissingen wordt gebruikt. Technologie komt in geen van die vier kenmerken voor. Vrijwel altijd stranden de assistent die alles kan, het voorspelmodel zonder besluit erachter, de use case zonder eigenaar in de lijn en de automatisering van een proces dat beter afgeschaft kan worden.
- **Vervolgvragen:**
  1. *Zijn AI-use cases waarvoor eerst data verzameld moet worden geschikt als eerste stap?* Nee. AI-use cases die beginnen met het verzamelen van data schuiven minstens een jaar op. Soms is dat de juiste investering, maar dan is het een datatraject en geen AI-use case.
  2. *Vanaf welke score krijgen AI-use cases voorrang bij het prioriteren?* 15 punten is de ondergrens: AI-use cases die lager scoren op de vijf vragen over volume, variatie, datagereedheid, veiligheid en trekkracht gaan niet eerst. Elke vraag krijgt een score van 1 tot 5.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Het patroon achter de winnaars' met de vier genummerde kenmerken en 'Vier patronen die vrijwel altijd stranden'. Vervolgvraag 1: 'De assistent die alles kan'. Vervolgvraag 2: '4. De data bestaat al en wordt al gebruikt'. Vervolgvraag 3: 'Een praktische scoringsvraag'.
- **Let op:** De H1 is zelf een vraag en geen H2 is als vraag geformuleerd, daarom een eigen, andere vraagkop. 'Na tientallen use-case-inventarisaties' uit de lede is een ervaringsaantal en niet gebruikt. Geen tabel: geen interne links.
