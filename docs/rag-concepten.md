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
| Branchepagina's | 2 | 0 | 0 |
| Kennisbankartikelen | 13 | 8 | 0 |
| Inzichten (artikelen) | 12 | 0 | 0 |
| **Totaal** | **65** | **18** | **4** |

## 1. Dienstpagina's (5)

### `/diensten/ai-due-diligence`

Pagina: AI Due Diligence

- **Status:** geverifieerd (6 van 6 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienst
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat we doorgaans vinden").
- **Vraagkop:** Wat levert een AI Due Diligence op en wat kost die?
- **Antwoordalinea:** De AI Due Diligence van Dave Willemstein beoordeelt een AI-propositie of AI-leverancier voor investeerders en voor organisaties die een strategische AI-leverancier binnenhalen. Het resultaat is een DD-rapport met een expliciet oordeel en een overzicht van red flags, gescheiden in deal-breakers en onderhandelpunten. Het onderzoek duurt 2-4 weken en kost €12.600 - €19.600, exclusief btw en reiskosten.
- **Vervolgvragen:**
  1. *Kost een AI Due Diligence van een heel bedrijf meer dan die van één oplossing?* Ja. De AI Due Diligence kost €12.600 - €19.600: één oplossing zit aan de onderkant, een heel bedrijf aan de bovenkant.
  2. *Is de AI Due Diligence geschikt voor wie een formele audit met accountantsverklaring nodig heeft?* Minder geschikt: de AI Due Diligence is minder geschikt als een formele audit met accountantsverklaring nodig is.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: lede, deliverables en 'best passend bij' in services.js; prijsvoorwaarde uit prijzen.ts. Vervolgvraag 1: prijsnotitie in prijzen.ts. Vervolgvraag 2: 'Minder geschikt als' ([slug].astro) met notFor in services.js.

### `/diensten/ai-strategy-sprint`

Pagina: AI Strategy Sprint

- **Status:** geverifieerd (9 van 9 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienst
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom sprints werken en trajecten stranden").
- **Vraagkop:** Wat levert de AI Strategy Sprint op en wat kost die?
- **Antwoordalinea:** De AI Strategy Sprint van Dave Willemstein brengt organisaties die AI serieus willen inzetten maar niet weten waar te beginnen in 4-6 weken van ambitie naar een board-ready AI-strategie en een use-case roadmap. De sprint werkt in vijf werksessies toe naar vier beslismomenten: diagnose, prioriteren, beslissen en ship & govern. De prijs is €15.400 - €22.400, exclusief btw en reiskosten.
- **Vervolgvragen:**
  1. *Waar in de prijsbandbreedte komt de AI Strategy Sprint uit als er al een AI Readiness Assessment ligt?* Aan de onderkant: ligt er al een [AI Readiness Assessment](/diensten/ai-readiness-assessment), dan komt de AI Strategy Sprint aan de onderkant van €15.400 - €22.400 uit. Bij meerdere bedrijfsonderdelen komt de sprint aan de bovenkant uit.
  2. *Wanneer is de AI Strategy Sprint minder geschikt?* Minder geschikt als er nog geen mandaat is om keuzes te maken, want dan komt eerst een [Executive Briefing](/diensten/executive-briefing). De AI Strategy Sprint is ook minder geschikt voor wie vooral capaciteit zoekt om te bouwen.
  3. *Hoeveel werksessies telt de AI Strategy Sprint?* Vijf werksessies. De AI Strategy Sprint verdeelt vier vaste beslismomenten over die sessies, met vier tot zes mensen in de kerngroep.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: lede, 'Vier vaste beslismomenten, verdeeld over vijf werksessies', deliverables en 'best passend bij' in services.js; prijsvoorwaarde uit prijzen.ts. Vervolgvraag 1: prijsnotitie in prijzen.ts. Vervolgvraag 2: beide punten onder 'Minder geschikt als' (notFor in services.js, kop in [slug].astro). Vervolgvraag 3: aanpak en de bestaande FAQ over de kerngroep.

### `/diensten/executive-briefing`

Pagina: Executive Briefing

- **Status:** geverifieerd (6 van 6 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienst
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom dit nodig is").
- **Vraagkop:** Wat levert een Executive Briefing op en wat kost die?
- **Antwoordalinea:** De Executive Briefing van Dave Willemstein geeft een directie, RvC of RvT een gedeeld en realistisch beeld van wat AI voor de organisatie betekent. Deelnemers krijgen een beslisagenda, een vragenlijst voor toezicht en een beknopte samenvatting. De sessie beslaat 1 dagdeel incl. voorbereiding en kost €2.800, exclusief btw en reiskosten.
- **Vervolgvragen:**
  1. *Wanneer wordt de prijs van de Executive Briefing verrekend?* De Executive Briefing wordt volledig verrekend als binnen 60 dagen een [AI Readiness Assessment](/diensten/ai-readiness-assessment) start.
  2. *Past de Executive Briefing bij wie een inspirerende keynote zoekt?* Minder geschikt: de Executive Briefing is minder geschikt als een organisatie een inspirerende keynote zoekt. De Executive Briefing is een compacte sessie voor directie of board over de kansen en risico's van AI en over wat het van bestuurders vraagt.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: lede, deliverables en 'best passend bij' in services.js; prijsvoorwaarde uit prijzen.ts. Vervolgvraag 1: prijsnotitie in prijzen.ts. Vervolgvraag 2: 'Minder geschikt als' ([slug].astro) met notFor en cardText in services.js.

### `/diensten/fractional-ai-lead`

Pagina: Fractional AI Lead

- **Status:** geverifieerd (7 van 7 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienst
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Het gat dat dit vult").
- **Vraagkop:** Wat kost een Fractional AI Lead en voor wie is die rol bedoeld?
- **Antwoordalinea:** De Fractional AI Lead van Dave Willemstein geeft organisaties met lopende AI-initiatieven zonder duidelijke eigenaar senior AI-leiderschap in deeltijd. De rol kost €2.600 - €10.400 per maand, voor 2, 4 of 8 dagen per maand, op het niveau Advies, Lead of Lead+. De looptijd is minimaal 3 maanden en daarna is de rol maandelijks opzegbaar; de bedragen zijn exclusief btw en reiskosten.
- **Vervolgvragen:**
  1. *Wanneer is de Fractional AI Lead opzegbaar?* De Fractional AI Lead loopt minimaal 3 maanden en is daarna maandelijks opzegbaar.
  2. *Is de Fractional AI Lead een fulltime rol?* Nee. De Fractional AI Lead is senior leiderschap in deeltijd, voor 2, 4 of 8 dagen per maand. De Fractional AI Lead past bij teams die koers en capaciteit nodig hebben, maar nog geen fulltime rol kunnen dragen.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: eyebrow en meta (senior leiderschap, deeltijd), 'best passend bij', feit 'Looptijd' en de prijsnotitie in prijzen.ts. Vervolgvraag 1: prijsnotitie ('Minimaal 3 maanden, daarna maandelijks opzegbaar'). Vervolgvraag 2: eyebrow 'Senior leiderschap, deeltijd', feit 'Ritme' en 'best passend bij' (tweede punt).

### `/diensten/vendor-review`

Pagina: Vendor Review & selectie

- **Status:** geverifieerd (5 van 5 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienst
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waar selectietrajecten misgaan").
- **Vraagkop:** Wat levert een Vendor Review op en wat kost die?
- **Antwoordalinea:** De Vendor Review van Dave Willemstein is een onafhankelijk selectietraject voor organisaties die een AI-leverancier kiezen en die keuze achteraf moeten kunnen uitleggen. Het resultaat is een onderbouwd selectieadvies met scorecards, een TCO-vergelijking over drie jaar en een beslisdocument voor procurement en board. Het traject duurt 3-6 weken en kost €9.800 - €15.400, exclusief btw en reiskosten.
- **Vervolgvragen:**
  1. *Wat bepaalt de prijs van een Vendor Review?* De prijs van de Vendor Review, €9.800 - €15.400, is afhankelijk van het aantal leveranciers (2 tot 4).
  2. *Wanneer is een Vendor Review minder geschikt?* De Vendor Review is minder geschikt als de leverancier feitelijk al gekozen is en de organisatie een onderbouwing achteraf zoekt.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: meta, deliverables en 'best passend bij' in services.js; prijs, doorlooptijd en prijsvoorwaarde uit prijzen.ts. Vervolgvraag 1: prijsnotitie in prijzen.ts. Vervolgvraag 2: 'Minder geschikt als' (notFor in services.js, kop in [slug].astro).

## 2. Dienstenoverzicht en tarieven (2)

### `/diensten`

Pagina: Diensten die AI-beslissingen helder maken.

- **Status:** geverifieerd (7 van 7 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Altijd hetzelfde startpunt.").
- **Vraagkop:** Welke AI-dienst past bij welke situatie?
- **Antwoordalinea:** Dave Willemstein biedt AI-adviesdiensten van het [AI Readiness Assessment](/diensten/ai-readiness-assessment) tot de [Fractional AI Lead](/diensten/fractional-ai-lead), elk met een vaste prijs of een duidelijke bandbreedte. Van de hoofddiensten heeft het AI Readiness Assessment als doel inzicht en prioriteiten te bepalen, de [AI Strategy Sprint](/diensten/ai-strategy-sprint) strategie en roadmap vast te leggen en de Fractional AI Lead uitvoering en borging te realiseren. De bedragen zijn exclusief btw en reiskosten.
- **Vervolgvragen:**
  1. *Is de kennismaking voor een AI-dienst kosteloos?* Ja. Elke AI-dienst begint met een kennismaking van dertig minuten zonder kosten, gevolgd door een voorstel binnen drie werkdagen.
  2. *Staat het exacte bedrag van een AI-dienst vooraf vast?* Ja. Elke AI-dienst heeft een vaste prijs of een duidelijke bandbreedte; waar een bandbreedte geldt, legt het voorstel na de kennismaking het exacte bedrag vast, voordat de opdracht start.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: de intro van de pagina (vaste prijs of duidelijke bandbreedte), de paginabeschrijving (van AI Readiness Assessment tot Fractional AI Lead), de rij 'Doel' van de vergelijking 'Welke past wanneer?' (serviceComparison in services.js) en de notitie onder de vergelijking. Vervolgvragen: 'Hoe een opdracht begint', de intro en de notitie onder de vergelijking.

### `/tarieven`

Pagina: Wat kost een AI consultant? Tarieven en pakketten

- **Status:** geverifieerd (3 van 3 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht (alleen vraagkop, antwoordalinea en bronregel)
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat kost AI consultancy?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat kost AI consultancy? (bestaand)
- **Antwoordalinea:** AI consultancy van Dave Willemstein kost per pakket een vaste prijs, een bandbreedte of een maandbedrag. De [Executive Briefing](/diensten/executive-briefing) is met €2.800 het kleinste pakket, een [AI Readiness Assessment](/diensten/ai-readiness-assessment) kost €7.000 en een [AI Strategy Sprint](/diensten/ai-strategy-sprint) €15.400 - €22.400. De bedragen zijn exclusief btw en reiskosten.
- **Bronregel:** Bron: tarieven en doorlooptijden van Dave Willemstein.
- **Herkomst:** Antwoord: summary, alinea onder 'Wat kost AI consultancy?', de bestaande tabel 'Pakketten en vanaf-prijzen' en de eerste FAQ.

## 3. Hubs en overige hoofdpagina's (9)

### `/ai-agents`

Pagina: AI agents voor bedrijven

- **Status:** concept (10 van 11 zinnen bevestigd, 0 geschrapt, 1 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat kosten AI agents?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat kosten AI agents? (bestaand)
- **Antwoordalinea:** Voor AI agents bestaat geen vast bedrag: de spreiding loopt van een licentie op een bestaand platform tot een maatwerktraject met meerdere koppelingen, en de prijs hangt af van de koppelingen, schrijfrechten, het gebruik, de eisen aan controle en logging en de kwaliteit van de bronnen. Dave Willemstein bouwt zelf geen agents en adviseert onafhankelijk over de keuze van de taak, de specificatie en het aansturen van een bouwpartij. Bij het onafhankelijk laten vergelijken van offertes van meerdere bouwpartijen past de [Vendor Review](/diensten/vendor-review), die €9.800 - €15.400 kost, exclusief btw en reiskosten.
- **Vervolgvragen:**
  1. *Is een offerte voor AI agents compleet als alleen de bouw erin staat?* Nee. Bij AI agents is de bouw een eenmalige post en loopt het beheer door: modelkosten per gebruik, monitoring, periodieke tests, aanpassingen bij veranderende processen of systemen en tijd van een interne eigenaar. Het advies is om altijd een inschatting te vragen van de kosten over meerdere jaren, inclusief de kosten van een wissel van leverancier.
  2. *Zijn AI agents binnen een bestaand softwareplatform goedkoper om mee te beginnen?* Vaak wel: AI agents binnen het platform van een softwareleverancier zijn sneller en vaak goedkoper om mee te beginnen, maar de organisatie is gebonden aan wat dat platform kan en aan de prijsontwikkeling van de leverancier. Maatwerk geeft meer controle, met kosten voor beheer en doorontwikkeling.
  3. *Bouwt de adviseur zelf AI agents?* Nee. De adviseur bouwt zelf geen AI agents en helpt bepalen welke taak geschikt is, wat van een bouwpartij gevraagd moet worden en hoe de uitvoering bewaakt wordt. Partijen uit het partnernetwerk die de adviseur voorstelt, contracteert de opdrachtgever rechtstreeks, zonder marge voor de adviseur.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: 'Wat kosten AI agents?' met 'Factoren die de kosten bepalen', summary en de alinea over de Vendor Review; prijsvoorwaarde uit prijzen.ts. Vervolgvraag 1: 'Kosten voor beheer en optimalisatie'. Vervolgvraag 2: 'Ontwikkeling versus bestaande oplossingen'. Vervolgvraag 3: slotalinea onder 'AI agents voor het MKB'.

### `/ai-automatisering`

Pagina: AI automatisering: slimmer werken met minder handwerk

- **Status:** geverifieerd (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat is AI automatisering?").
- **Vraagkop:** Waar begint een organisatie met AI automatisering en wat kost advies daarover?
- **Antwoordalinea:** AI automatisering past bij werk met ongestructureerde input, zoals e-mails, documenten en vrije tekst, en begint bij een proces met hoog volume, weinig variatie en een controlestap die al bestaat. Dave Willemstein bouwt zelf geen automatiseringen en verkoopt geen software of licenties, maar adviseert onafhankelijk over wat er geautomatiseerd wordt, wie het bouwt en hoe het blijft werken. Wie nog niet weet welk proces als eerste aan de beurt is, start met het [AI Readiness Assessment](/diensten/ai-readiness-assessment): in 2-3 weken een gevalideerde lijst met kansen en een 90-dagenplan voor €7.000, exclusief btw en reiskosten.
- **Vervolgvragen:**
  1. *Wordt AI automatisering door de adviseur zelf gebouwd?* Nee. AI automatisering wordt gebouwd door het eigen team van de opdrachtgever of door een partner die de opdrachtgever rechtstreeks contracteert, zonder marge voor de adviseur. De adviseur levert een procesbeschrijving met nulmeting, een geprioriteerde lijst, een beslisdocument over bouwen, kopen of een partner inschakelen en een meetopzet, en toetst de oplevering aan de afgesproken criteria.
  2. *Uit hoeveel kostenposten bestaat AI automatisering?* Vier posten bepalen de kosten van AI automatisering: de eenmalige inrichting, licenties voor het platform, verbruikskosten van het AI-model per verwerkt document of bericht, en beheer. Verbruik en beheer worden het vaakst vergeten.
  3. *Is voor AI automatisering maatwerk nodig?* Voor de meeste AI automatisering is geen maatwerk nodig. Een workflowplatform verbindt bij AI automatisering de systemen van de organisatie en voegt een AI-stap toe waar dat nodig is. Prijzen en functies van zulke platforms veranderen snel en horen bij de leverancier zelf gecontroleerd te worden.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: lede, summary en de alinea's onder 'Zo pak ik AI automatisering aan', inclusief de slotalinea over het AI Readiness Assessment. Vervolgvraag 1: 'Zo pak ik AI automatisering aan'. Vervolgvraag 2: 'Kosten en terugverdientijd'. Vervolgvraag 3: 'Tools en workflows'.

### `/ai-beleid`

Pagina: AI beleid en governance voor organisaties

- **Status:** concept (13 van 13 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Externe feiten:** 2 zin(nen) met een feit van buiten de eigen dienstverlening (wetgeving). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom een AI beleid nodig is").
- **Vraagkop:** Wat hoort er in een AI beleid en welke dienst past erbij?
- **Antwoordalinea:** Een AI beleid legt vast welke tools zijn toegestaan, welke gegevens erin mogen, wie beslist en hoe risico's worden beheerst; voor de meeste organisaties volstaat een eerste versie van één tot drie pagina's. Dave Willemstein begeleidt het opstellen en toetst het beleid tegen de praktijk; wie wil weten waar de organisatie staat voordat het beleid wordt geschreven, kan het AI Readiness Assessment inzetten, dat in 2-3 weken de uitgangspositie in kaart brengt voor €7.000. Ontbreekt de capaciteit om de governance zelf te trekken, dan kan de Fractional AI Lead de governance en cadans opzetten en bewaken; de investering is €2.600 - €10.400 per maand, voor 2, 4 of 8 dagen per maand.
- **Tabel:** AI beleid opstellen en borgen: passende dienst per situatie

  | Situatie | Resultaat | Doorlooptijd | Prijs | Passende dienst |
  |---|---|---|---|---|
  | Uitgangspositie nog onbekend voordat het AI beleid wordt geschreven | Uitgangspositie in kaart, met een risico- en compliance-scan en de positie onder de AI-verordening | 2-3 weken | €7.000 | [AI Readiness Assessment](/diensten/ai-readiness-assessment) |
  | Geen eigen capaciteit om de AI governance te trekken | Governance en cadans opgezet en bewaakt | 2, 4 of 8 dagen per maand | €2.600 - €10.400 per maand, voor 2, 4 of 8 dagen per maand | [Fractional AI Lead](/diensten/fractional-ai-lead) |

- **Vervolgvragen:**
  1. *Wat heeft een mkb-bedrijf nodig aan AI beleid?* Een mkb-bedrijf hoeft geen AI beleid van twintig pagina's te hebben; wat wel nodig is, is een AI-beleid dat iedereen in tien minuten kan lezen en dat antwoord geeft op de vragen die medewerkers echt hebben. Het stappenplan loopt van inventariseren wat er al gebruikt wordt tot evalueren na drie maanden, met als stap het schrijven van de eerste versie op één tot drie pagina's. Het [AI-beleid template (pdf)](/downloads/ai-beleid-template.pdf) heeft in te vullen velden, tabellen voor tools en gegevenscategorieën en een checklist om af te ronden.
  2. *Is voor AI-geletterdheid onder de AI Act een certificaat nodig?* Nee, volgens de Europese Commissie is een certificaat niet nodig: een organisatie kan intern bijhouden welke trainingen en andere initiatieven zijn ingezet. De plicht rond AI-geletterdheid geldt sinds 2 februari 2025 en is met de Digital Omnibus, die op 27 juli 2026 in werking trad, aangepast: een organisatie moet maatregelen nemen om AI-geletterdheid te ondersteunen, zonder dat een bepaald niveau per persoon wordt voorgeschreven. Een AI beleid is de logische plek om die maatregelen vast te leggen.
  3. *Vraagt AI governance bij een AI beleid om een nieuwe commissie?* Nee, het advies is AI toe te voegen aan het risico-overleg of de stuurgroep die al bestaat, in plaats van een nieuwe commissie op te tuigen: het belangrijkste punt is dat governance wordt gekoppeld aan wat er al is. Het uitgangspunt voor de governance rond een AI beleid is licht waar het kan en zwaar alleen waar het risico dat rechtvaardigt.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: lede, 'Onderdelen van een AI beleid', de FAQ over de lengte en over het laten schrijven van een beleid, 'AI governance inrichten' en de slotalinea's van 'AI-beleid voor het MKB'. Tabel: dezelfde twee dienstalinea's plus de prijstabel. Vervolgvragen: 'AI-beleid voor het MKB: voorbeeld en template', 'AI Act en compliance' met de summary, en 'AI governance inrichten'.

### `/ai-consultancy`

Pagina: AI consultancy: strategisch advies dat tot resultaat leidt

- **Status:** geverifieerd (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat kost AI consultancy?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat kost AI consultancy? (bestaand)
- **Antwoordalinea:** AI consultancy van Dave Willemstein wordt geleverd in vaste pakketten met zichtbare vanaf-prijzen, niet tegen een open uurtarief. Het [AI Readiness Assessment](/diensten/ai-readiness-assessment) duurt 2-3 weken en kost €7.000, de [AI Strategy Sprint](/diensten/ai-strategy-sprint) duurt 4-6 weken en kost €15.400 - €22.400, en de [Fractional AI Lead](/diensten/fractional-ai-lead) is een doorlopende rol voor €2.600 - €10.400 per maand, voor 2, 4 of 8 dagen per maand. Afgebakend advies en second opinions krijgen een vaste prijs in het voorstel, en de bedragen zijn exclusief btw en reiskosten.
- **Vervolgvragen:**
  1. *Wat kost AI consultancy voor een directie of raad van commissarissen?* €2.800 is de prijs van de [Executive Briefing](/diensten/executive-briefing), bedoeld voor directie en raad van commissarissen die hun toezichtrol op AI willen invullen. De Executive Briefing duurt 1 dagdeel incl. voorbereiding en wordt voorbereid op de sector van de organisatie.
  2. *Kan het AI Readiness Assessment bij AI consultancy ook voor één afdeling?* Ja. Het AI Readiness Assessment kan ook voor één afdeling of één procesdomein worden uitgevoerd. Die variant is korter en vraagt een lagere investering.
  3. *Heeft de adviseur bij AI consultancy belang bij een leverancier of een grotere scope?* Nee. De adviseur bouwt en verkoopt bij AI consultancy zelf geen software, AI-agents of implementaties en heeft daardoor geen belang bij een grotere scope of bij een bepaalde leverancier. Het bouwen doet het eigen team of een partner die de opdrachtgever rechtstreeks contracteert.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: alinea's en prijstabel onder 'Wat kost AI consultancy?'. Vervolgvraag 1: alinea 'Governance en compliance' plus de tabelrij Executive Briefing. Vervolgvraag 2: alinea 'Praktisch en binnen budget'. Vervolgvraag 3: 'Wat is AI consultancy?' (tweede alinea) en 'Begeleiding bij implementatie'.

### `/ai-development`

Pagina: AI development: AI-oplossingen op maat laten ontwikkelen

- **Status:** geverifieerd (12 van 12 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat is AI development?").
- **Vraagkop:** Wat kost onafhankelijke begeleiding bij AI development en wie bouwt er?
- **Antwoordalinea:** Dave Willemstein bouwt zelf geen software, maar begeleidt AI development vanuit de kant van de opdrachtgever: specificatie, selectie van de bouwpartij, toetsing van opleveringen en governance. Voor de keuze van de bouwpartij is er de Vendor Review van 3-6 weken voor €9.800 - €15.400, en tijdens de bouw is er begeleiding vanuit klantzijde, bijvoorbeeld als Fractional AI Lead voor €2.600 - €10.400 per maand, voor 2, 4 of 8 dagen per maand. De bouw zelf ligt bij het eigen team of bij een ontwikkelpartij met wie de opdrachtgever rechtstreeks een contract sluit.
- **Tabel:** AI development: passende dienst per fase van het traject

  | Fase in het traject | Wat de opdrachtgever krijgt | Doorlooptijd | Prijs | Passende dienst |
  |---|---|---|---|---|
  | Bij de start, als er nog geen scherp beeld is van waar de organisatie staat | Een logische eerste stap, inclusief eindpresentatie aan MT of board | 2-3 weken | €7.000 | [AI Readiness Assessment](/diensten/ai-readiness-assessment) |
  | Bij de keuze van de bouwpartij | Scorecards, een test op eigen data en een TCO-vergelijking over drie jaar | 3-6 weken | €9.800 - €15.400 | [Vendor Review](/diensten/vendor-review) |
  | Tijdens de bouw | Begeleiding vanuit klantzijde: toetsing van opleveringen, bewaking van de business case en governance | 2, 4 of 8 dagen per maand | €2.600 - €10.400 per maand, voor 2, 4 of 8 dagen per maand | [Fractional AI Lead](/diensten/fractional-ai-lead) |

- **Vervolgvragen:**
  1. *Zit er een marge op ontwikkelaars uit het netwerk bij AI development?* Nee. Bij AI development contracteert de opdrachtgever de bouwpartij rechtstreeks, zonder tussenlaag, marge of commissie. Een partij uit het netwerk doorloopt dezelfde selectie als iedere andere partij.
  2. *Waar hangt de prijs van de Vendor Review bij AI development van af?* De Vendor Review kost €9.800 - €15.400, afhankelijk van het aantal leveranciers (2 tot 4).
  3. *Wat werkt bij AI development het best: bouwen, kopen of partneren?* De hybride vorm werkt bij AI development vaak het best: bouwstenen inkopen, de laag met de eigen kennis laten bouwen en de implementatie bij een partner beleggen. Daaraan vooraf gaat de vraag of bouwen überhaupt nodig is: bouwen alleen voor wat de organisatie onderscheidt in de markt en kopen wat een commodity is.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord en tabel: lede, summary en de lijst 'Wat je concreet van mij krijgt' onder 'Ontwikkelproces'. Vervolgvraag 1: 'Samenwerking met developers uit mijn netwerk'. Vervolgvraag 2: prijsnotitie van de Vendor Review in prijzen.ts. Vervolgvraag 3: 'Build versus buy'.

### `/ai-implementatie`

Pagina: AI implementatie: van plan naar werkende oplossing

- **Status:** geverifieerd (14 van 14 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat houdt AI implementatie in?").
- **Vraagkop:** Wat kost begeleiding bij AI implementatie en wie bouwt de oplossing?
- **Antwoordalinea:** Bij een AI implementatie bouwt het eigen team of een rechtstreeks gecontracteerde partner de oplossing; Dave Willemstein begeleidt vanuit de kant van de opdrachtgever door te helpen kiezen, kaders te stellen, de oplevering te toetsen en te zorgen dat de toepassing in de organisatie landt. Voor die begeleiding gelden gepubliceerde prijzen: het AI Readiness Assessment duurt 2-3 weken en kost €7.000, en doorlopende sturing door de Fractional AI Lead kost €2.600 - €10.400 per maand, voor 2, 4 of 8 dagen per maand. De kosten van bouw of licentie hangen af van de gekozen oplossing en leverancier en worden apart begroot, inclusief het beheer na oplevering.
- **Tabel:** Begeleiding bij AI implementatie: passende dienst per situatie

  | Situatie | Doorlooptijd | Prijs | Passende dienst |
  |---|---|---|---|
  | Onduidelijk of de organisatie klaar is voor een implementatie, of de meningen daarover lopen uiteen | 2-3 weken | €7.000 | [AI Readiness Assessment](/diensten/ai-readiness-assessment) |
  | Een externe bouwpartij selecteren op vooraf vastgelegde criteria, getest op eigen data | 3-6 weken | €9.800 - €15.400 | [Vendor Review](/diensten/vendor-review) |
  | Doorlopende bewaking van meting, beheer en governance zonder fulltime Head of AI | 2, 4 of 8 dagen per maand | €2.600 - €10.400 per maand, voor 2, 4 of 8 dagen per maand | [Fractional AI Lead](/diensten/fractional-ai-lead) |

- **Vervolgvragen:**
  1. *Wordt er een marge gerekend op partners die de AI implementatie bouwen?* Nee. Bij een AI implementatie bouwt het eigen team of een partij die de opdrachtgever rechtstreeks contracteert. Er wordt geen marge op partners gerekend en er zijn geen commissies of partnerstatus bij leveranciers.
  2. *Moet er eerst een roadmap liggen voordat een AI implementatie kan starten?* Nee. Een ontbrekende roadmap is geen reden om met een AI implementatie te wachten. Het is wel een reden om het eerste traject klein en goed afgebakend te houden, zodat duidelijk wordt wat de organisatie aankan voordat de tweede en derde toepassing starten.
  3. *Wat kost bij een AI implementatie vaak meer tijd dan de techniek?* Adoptie kost bij een AI implementatie vaak meer tijd dan de techniek. De doorlooptijd van de implementatie zelf verschilt sterk per toepassing: een standaardproduct dat wordt geconfigureerd staat sneller dan maatwerk met koppelingen aan kernsystemen.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: 'Mijn implementatieaanpak' (inleiding) en 'Kosten en doorlooptijd'. Tabel: 'AI implementatie: van strategie naar praktijk' (AI Readiness Assessment), 'Bouwen en testen' (Vendor Review) en 'Monitoren en optimaliseren' (Fractional AI Lead). Vervolgvragen: 'Bouwen en testen', 'AI implementatie: van strategie naar praktijk' en 'Kosten en doorlooptijd'.

### `/ai-voor-bedrijven`

Pagina: AI voor bedrijven: wat kan AI voor jouw organisatie betekenen?

- **Status:** concept (10 van 10 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 4 zin(nen) met een feit van buiten de eigen dienstverlening (wetgeving, marktcijfer). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat kan AI betekenen voor mijn bedrijf?").
- **Vraagkop:** Waar levert AI voor bedrijven in de praktijk het meest op?
- **Antwoordalinea:** AI voor bedrijven levert het meest op bij werk dat frequent en voorspelbaar is, met bestaande data en een menselijke controlestap. De risico's zijn zelden technisch van aard: het gaat om een ontbrekende eigenaar, ontbrekend beheer, privacy en vertrouwelijkheid, wet- en regelgeving en schaduwgebruik. Wie eerst wil weten waar de organisatie staat, kan starten met het [AI Readiness Assessment](/diensten/ai-readiness-assessment) van 2-3 weken voor €7.000.
- **Vervolgvragen:**
  1. *Zijn de regels uit de AI Act voor hoog-risicotoepassingen bij AI voor bedrijven uitgesteld?* Ja. Via de Digital Omnibus on AI, die op 27 juli 2026 in werking trad, gelden de regels voor de hoog-risicogebieden uit bijlage III, zoals werving en kredietverlening, vanaf 2 december 2027 en voor AI in gereguleerde producten vanaf 2 augustus 2028. Bij AI voor bedrijven loont het om nu al te weten in welke categorie een toepassing valt.
  2. *Begint AI voor bedrijven met gebruiken of met bouwen?* Bij voorkeur met gebruiken: bij AI voor bedrijven zit veel waarde in tools en AI-functies die al aanwezig zijn of eenvoudig aan te schaffen zijn. Maatwerk wordt pas zinvol wanneer standaardtools aantoonbaar tekortschieten.
  3. *Waarvoor wordt AI voor bedrijven in Nederland het vaakst gebruikt?* AI voor bedrijven werd in 2025 het vaakst gebruikt voor marketing of verkoop (35 procent) en voor administratie of bestuurstaken (32 procent), volgens CBS-cijfers over AI-gebruikende bedrijven. Onder bedrijven die AI overwogen maar niet invoerden, was gebrek aan ervaring de meest genoemde reden.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: summary (waar AI het meest oplevert), de lijst met risico's onder 'Kansen en risico's' en het punt 'Weten waar je staat' onder 'Hoe ik je kan helpen'. Vervolgvraag 1: punt 'Wet- en regelgeving' onder 'Kansen en risico's'. Vervolgvraag 2: punt 'Begin met gebruiken, niet met bouwen' onder 'Zo begin je met AI' en de FAQ over gebruiken en laten bouwen. Vervolgvraag 3: CBS-alinea onder 'Wat kan AI betekenen voor mijn bedrijf?'.

### `/markten`

Pagina: AI per branche: toepassingen per sector

- **Status:** concept (8 van 8 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 2 zin(nen) met een feit van buiten de eigen dienstverlening (wetgeving). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom sectorkennis ertoe doet").
- **Vraagkop:** Wat verschilt er bij AI per branche en wat blijft in elke sector gelijk?
- **Antwoordalinea:** Bij AI per branche zijn de vraagstukken in elke sector dezelfde: bepalen welke toepassingen voorrang krijgen, een leverancier of bouwpartij kiezen en de toepassing na livegang in de hand houden. De verschillen zitten in de regels, de gevoeligheid van de data en de foutkosten, en die bepalen hoe zwaar elke stap wordt ingericht.
- **Vervolgvragen:**
  1. *Wanneer gelden de regels voor hoog-risicotoepassingen bij AI per branche?* Vanaf 2 december 2027 gelden sinds de Digital Omnibus de regels voor hoog-risicotoepassingen, en voor AI in producten als medische hulpmiddelen vanaf 2 augustus 2028; die regels zijn uitgesteld. Bij AI per branche legt de AI Act een laag over de sectorregels heen, met verplichtingen die per toepassing verschillen; de uitwerking staat op de pagina over [de AI Act](/ai-beleid/ai-act).
  2. *Staan er bij AI per branche voor elke sector cases op de site?* Nee. Er staan cases uit financiële dienstverlening, retail, industrie en zakelijke dienstverlening in het [overzicht van cases](/cases). Voor zorg, marketing, automotive, onderwijs, luchtvaart en overheid beschrijven de pagina's over AI per branche de vraagstukken en regels, geen eigen resultaten.
  3. *Wat laat het AI Readiness Assessment zien, ongeacht de sector?* Het [AI Readiness Assessment](/diensten/ai-readiness-assessment) geeft in korte tijd een nuchter beeld van hoe een organisatie ervoor staat, ongeacht de sector.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: lede, summary en de alinea's plus het schema onder 'Waarom sectorkennis ertoe doet'. Vervolgvraag 1: slotalinea van 'Sectoren' over de Digital Omnibus en het punt 'Regels' onder 'Waarom sectorkennis ertoe doet'. Vervolgvraag 2 en 3: 'Cases per sector'.

### `/partnernetwerk`

Pagina: Geen bureau, wel bureau-capaciteit: mijn partnernetwerk

- **Status:** geverifieerd (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** antwoordalinea direct onder de bestaande H2 "Waarom geen traditioneel AI bureau?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Waarom geen traditioneel AI bureau? (bestaand)
- **Antwoordalinea:** Een traditioneel AI bureau verkoopt uiteindelijk capaciteit, en wie aan de bouw verdient heeft belang bij een grotere scope, terwijl Dave Willemstein alleen werkt als onafhankelijk AI-adviseur die adviseert en de uitvoering begeleidt zonder zelf iets te bouwen of te verkopen. Is er meer capaciteit nodig voor development, data en BI of training, dan stelt hij partijen voor die hij kent en die de opdrachtgever rechtstreeks contracteert, zonder marge of commissie. Voor het vergelijken van meerdere partijen is er de [Vendor Review](/diensten/vendor-review), die 3-6 weken duurt.
- **Vervolgvragen:**
  1. *Om welke typen expertise gaat het in het partnernetwerk van een adviseur die geen AI bureau is?* Meestal gaat het om een van drie typen expertise: development, data en BI, en training en verandermanagement. Welke partij past, hangt af van de vraag, en eerst wordt bepaald of zelf bouwen, kopen of partneren de juiste keuze is. De adviseur is zelf geen AI bureau en stelt alleen partijen voor die hij kent.
  2. *Heeft de adviseur een partnerstatus bij Microsoft, OpenAI of andere leveranciers?* Nee. De adviseur, die zelf geen AI bureau is, heeft bij Microsoft, OpenAI, Anthropic, Google, Amazon Web Services, Mistral AI en Meta geen partnerstatus, resellerafspraak of commissieregeling. Daardoor kan hij de platforms eerlijk naast elkaar zetten en zeggen wanneer een goedkopere of eenvoudigere optie volstaat.
  3. *Kan de begeleiding tijdens de uitvoering ook doorlopend?* Ja, bij doorlopende trajecten kan de begeleiding als [Fractional AI Lead](/diensten/fractional-ai-lead), voor 2, 4 of 8 dagen per maand. De opdrachtgever houdt daarbij één aanspreekpunt voor advies en regie, terwijl de partner de capaciteit levert.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: 'Waarom geen traditioneel AI bureau?', lede, summary en de lijst onder 'Hoe ik partners selecteer'. Vervolgvraag 1: 'Mijn gescreende partnernetwerk' en de summary. Vervolgvraag 2: 'Platforms en technologie'. Vervolgvraag 3: 'Eén aanspreekpunt, schaalbare capaciteit', met de omvang uit prijzen.ts.

## 4. Spokes (verdiepingspagina's onder een hub) (17)

### `/ai-agents/laten-maken`

Pagina: AI agent laten maken: aanpak, kosten en doorlooptijd

- **Status:** geverifieerd (10 van 10 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat kost een AI agent?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat kost een AI agent? (bestaand)
- **Antwoordalinea:** De prijs van een AI agent wordt bepaald door de route, de koppelingen, de schrijfrechten en controle, het gebruik en het beheer, en verschilt sterk per route, zodat een vast bedrag misleidend zou zijn. Dave Willemstein bouwt zelf geen agents en verkoopt geen implementaties, maar helpt de taak afbakenen, de specificatie opstellen, bouwpartijen vergelijken en de uitvoering bewaken. Offertes van meerdere bouwpartijen onafhankelijk laten beoordelen kan met de [Vendor Review](/diensten/vendor-review) van 3-6 weken voor €9.800 - €15.400, en doorlopende bewaking van het traject kan met de [Fractional AI Lead](/diensten/fractional-ai-lead).
- **Vervolgvragen:**
  1. *Wie stelt de specificatie van een AI agent op?* In een goed traject stelt de opdrachtgever de specificatie van een AI agent zelf op, niet de bouwpartij; dat kan ook met een onafhankelijke adviseur, en pas daarna komt een bouwpartij in beeld. Een specificatie die wordt overgelaten aan de partij die ook bouwt, past bij wat die partij het liefst maakt.
  2. *Hangt de prijs van de Vendor Review af van het aantal leveranciers?* Ja. De Vendor Review kost €9.800 - €15.400, afhankelijk van het aantal leveranciers (2 tot 4). De bedragen zijn exclusief btw en reiskosten.
  3. *Waar let een organisatie op bij de beveiliging van een AI agent?* Een AI agent die systemen aanroept, is een nieuwe gebruiker in het IT-landschap. Het is zaak de AI agent niet meer rechten te geven dan nodig, hem te laten inloggen met een eigen account zodat zijn handelingen herleidbaar zijn, en een bevestigingsstap te houden op elk onomkeerbaar moment.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: 'Wat kost een AI agent?' met de factorenlijst en de alinea over de Vendor Review en Fractional AI Lead, plus 'Mijn rol'. Vervolgvraag 1: inleiding en figuurbijschrift onder 'Het ontwikkeltraject'. Vervolgvraag 2: prijsnotitie en prijsvoorwaarde uit prijzen.ts. Vervolgvraag 3: eerste alinea onder 'Beveiliging, privacy en beheer' en de metaDescription.

### `/ai-agents/voorbeelden`

Pagina: AI agents voorbeelden: 12 toepassingen voor bedrijven

- **Status:** geverifieerd (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("AI agents in klantenservice").
- **Vraagkop:** Welke AI agents voorbeelden passen bij klantenservice, sales, HR en finance?
- **Antwoordalinea:** De AI agents voorbeelden bestaan uit twaalf generieke toepassingen voor klantenservice, sales, HR en finance, zoals mail- en ticketvoorbereiding, leadonderzoek, onboarding en factuurcontrole, elk met de benodigde koppelingen en het moment van menselijke controle. Voorbereidend werk dat een mens daarna beoordeelt, levert de meeste waarde op. Hoeveel zelfstandigheid een agent kan krijgen, hangt af van de vraag of een handeling omkeerbaar is en of de gevolgen intern of extern zijn.
- **Vervolgvragen:**
  1. *Laten de AI agents voorbeelden zien wat een agent bij een bepaald bedrijf heeft opgeleverd?* Nee. De AI agents voorbeelden zijn bewust generiek beschreven en tonen hoe een agent in een proces past. Wat een agent oplevert, hangt af van de volumes, de bronnen en de hoeveelheid controle die het proces vraagt.
  2. *Boekt of betaalt de agent in de AI agents voorbeelden voor finance zelf?* Nee. In de AI agents voorbeelden voor finance stelt de agent voor en bevestigt een medewerker elke boeking, omdat een fout in een boeking doorwerkt in rapportages en aangiftes. Afwijkingen en betaalbeslissingen blijven bij de crediteurenadministratie.
  3. *Is er één beste platform voor de AI agents voorbeelden?* Niet in het algemeen: welk platform bij de AI agents voorbeelden past, hangt af van de software die een organisatie al gebruikt, de eisen aan controle en de eigen technische capaciteit. Het platformoverzicht geeft de stand van september 2026 weer, zonder commissies of andere vergoedingen van de genoemde leveranciers.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: lede, summary, de twaalf genummerde voorbeelden en de matrix onder 'AI agents in klantenservice'. Vervolgvraag 1: inleiding onder 'AI agents in klantenservice'. Vervolgvraag 2: 'AI agents in finance'. Vervolgvraag 3: inleiding onder 'Beste AI agent-platforms'.

### `/ai-agents/wat-is-een-ai-agent`

Pagina: Wat is een AI agent? Uitleg, werking en voorbeelden

- **Status:** concept (9 van 9 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 1 zin(nen) met een feit van buiten de eigen dienstverlening (overig extern). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is een AI agent?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is een AI agent? (bestaand)
- **Antwoordalinea:** Een AI agent is software die van een mens een doel meekrijgt en daarna grotendeels zelf de route kiest: informatie verzamelen, andere systemen gebruiken, tussenresultaten beoordelen en de volgende stap bepalen. Anders dan een chatbot, die een vraag in een gesprek beantwoordt, voert een AI agent een taak uit in meerdere stappen en kan hij systemen raadplegen en soms wijzigen. De mate van zelfstandigheid is een instelling die de organisatie kiest, van alleen voorbereiden tot volledig zelfstandig werken met controle achteraf.
- **Vervolgvragen:**
  1. *Draait een AI agent op een taalmodel?* De meeste wel: de meeste AI agents van nu draaien op een groot taalmodel, dat de opdracht begrijpt en over de volgende stap redeneert. Wat van dat taalmodel een AI agent maakt, zijn de onderdelen eromheen: toegang tot tools en systemen, een geheugen voor de lopende taak en instructies over wat wel en niet mag.
  2. *Kan een fout van een AI agent doorwerken zonder dat het eindresultaat er verkeerd uitziet?* Ja, dat kan: een AI agent zet meerdere stappen achter elkaar, waardoor een fout uit een vroege stap kan doorwerken tot in het eindresultaat zonder dat het er verkeerd uitziet. Logging en tussencontroles zijn bij een AI agent daarom belangrijker dan bij een gewone AI-toepassing.
  3. *Welke vormen van opbouw komen bij een AI agent voor?* Grofweg drie vormen: een enkelvoudige AI agent voor één afgebakende taak, een AI agent binnen een AI-workflow met een vaste procesflow, en samenwerkende agents waarbij een coördinerende agent het werk verdeelt. Voor de meeste organisaties is de AI agent binnen een workflow het verstandigste startpunt.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Wat is een AI agent?', de tabel onder 'AI agent versus chatbot' en 'Naar zelfstandigheid' onder 'Soorten AI agents'. Vervolgvraag 1: derde alinea onder 'Wat is een AI agent?'. Vervolgvraag 2: slotalinea onder 'Hoe werkt een AI agent?'. Vervolgvraag 3: 'Naar opbouw' onder 'Soorten AI agents'.

### `/ai-automatisering/ai-tools`

Pagina: Beste AI tools voor bedrijven

- **Status:** concept (8 van 8 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 1 zin(nen) met een feit van buiten de eigen dienstverlening (toolprijs). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Hoe kies je een AI tool?").
- **Vraagkop:** Wat zijn de beste AI tools voor een bedrijf en waar hangt de keuze van af?
- **Antwoordalinea:** De beste AI tools verschillen per situatie: de keuze volgt eerst uit de taak, de software die er al is, data en privacy, beheer, kosten en exit, en pas als laatste uit het merk. Organisaties die in Microsoft 365 of Google Workspace werken, beginnen bij Copilot of Gemini, en voor bedrijfs- of persoonsgegevens komt alleen een zakelijk abonnement met verwerkersovereenkomst in aanmerking. Bij een keuze die meer dan een paar licenties raakt, helpt de [Vendor Review](/diensten/vendor-review) om tot een onderbouwd besluit te komen.
- **Vervolgvragen:**
  1. *Betalen leveranciers voor een plek in de vergelijking van de beste AI tools?* Nee. De vergelijking van de beste AI tools is gebaseerd op de officiële product-, prijs- en privacypagina's van de leveranciers, stand september 2026. Er zijn geen affiliate-, commissie- of partnerrelaties met de genoemde partijen en er staan geen eigen benchmarkcijfers in.
  2. *Hoe wordt een nieuwe AI-tool uitgeprobeerd bij het kiezen van de beste AI tools?* Het advies bij elke nieuwe AI-tool is om één team die een paar weken op echt werk te laten gebruiken, met een vooraf afgesproken vraag die de proef moet beantwoorden, niet met iedereen tegelijk en niet op basis van een demo. Voor een keuze uit de beste AI tools die meer dan een paar licenties raakt, worden de kandidaten getest op dezelfde taak met eigen voorbeelden.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: lede, summary, de criterialijst en de keuzeboom onder 'Hoe kies je een AI tool?' en de slotalinea onder 'Vergelijkingstabel'. Vervolgvraag 1: de kanttekening onder 'Hoe kies je een AI tool?'. Vervolgvraag 2: slotalinea onder 'Nieuwe AI tools om te volgen' en de slotalinea onder 'Vergelijkingstabel'.

### `/ai-automatisering/ai-workflows`

Pagina: AI workflows: zo automatiseer je werk van begin tot eind

- **Status:** geverifieerd (10 van 10 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is een AI workflow?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is een AI workflow? (bestaand)
- **Antwoordalinea:** Een AI workflow is een geautomatiseerde keten met een vooraf vastgelegde route, waarin een AI-model alleen de stappen doet die gewone regels niet aankunnen, zoals vrije tekst in een e-mail begrijpen of gegevens uit een pdf halen. De keten bestaat bijna altijd uit dezelfde bouwstenen: trigger, ophalen, AI-stap, controle, actie en logging. Een AI workflow past bij een proces dat steeds dezelfde stappen kent en waarvan elke uitkomst te verklaren moet zijn; pas als de stappen per geval echt verschillen en een fout omkeerbaar is, komt een AI agent in beeld.
- **Vervolgvragen:**
  1. *Bepaalt het AI-model in een AI workflow zelf welke stappen het zet?* Nee. In een AI workflow ligt de route vooraf vast en vult het AI-model alleen een stap in. Een AI agent krijgt daarentegen een doel en kiest zelf welke stappen en tools hij gebruikt.
  2. *Wie bouwt een AI workflow?* Een eenvoudige stroom van een AI workflow kan een handige collega in een no-code-platform bouwen. Zodra er koppelingen met kernsystemen of gevoelige gegevens bij komen, is een IT-team of partner nodig, en die partner contracteert de opdrachtgever rechtstreeks.
  3. *Hoeveel stappen telt het implementeren van een AI workflow?* In de praktijk gaat het implementeren van een AI workflow in vijf stappen: één proces kiezen en vooraf meten, de route uittekenen met de mensen die het werk nu doen, bepalen wie bouwt, testen met echte voorbeelden en het beheer regelen vóór livegang. Bij het testen hoort dat de AI workflow een paar weken naast het huidige proces loopt.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Wat is een AI workflow?' met de lijst bouwstenen, en het schema onder 'AI workflows versus AI agents'. Vervolgvraag 1: 'AI workflows versus AI agents'. Vervolgvraag 2 en 3: de genummerde lijst onder 'Een AI workflow implementeren'.

### `/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai`

Pagina: Bedrijfsprocessen automatiseren met AI

- **Status:** geverifieerd (8 van 8 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Welke bedrijfsprocessen kun je automatiseren met AI?").
- **Vraagkop:** Hoe pakt een organisatie bedrijfsprocessen automatiseren met AI stap voor stap aan?
- **Antwoordalinea:** Bedrijfsprocessen automatiseren met AI werkt het best bij processen met veel tekst, documenten of vrije input; werk met nette velden en vaste regels gaat meestal goedkoper en betrouwbaarder zonder AI. De aanpak is: kandidaten scoren, één proces met een eigenaar kiezen, de huidige situatie meten en het proces daarna in vijf stappen omzetten naar een workflow, van nulmeting tot livegang met meten. Welke processen in een organisatie het meeste opleveren, brengt het [AI Readiness Assessment](/diensten/ai-readiness-assessment) in 2-3 weken in kaart.
- **Vervolgvragen:**
  1. *Wat wordt bij bedrijfsprocessen automatiseren met AI vastgelegd over wat de AI mag?* Vastgelegd wordt bij bedrijfsprocessen automatiseren met AI dat de AI voorstelt en voorbereidt, en dat versturen, boeken en betalen daar niet bij horen. Ook wat er gebeurt als de AI twijfelt, wordt vastgelegd.
  2. *Welke scenario's horen bij het inschatten van de besparing van bedrijfsprocessen automatiseren met AI?* Twee scenario's horen bij bedrijfsprocessen automatiseren met AI naast de berekening: een pessimistisch scenario met lagere adoptie en meer controletijd, en een scenario met het dubbele volume, omdat verbruikskosten meestal meegroeien met het gebruik. Dat geeft een bandbreedte in plaats van één bedrag. Bespaarde uren zijn pas iets waard als ze ergens anders aantoonbaar iets opleveren, bijvoorbeeld minder inhuur.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Welke bedrijfsprocessen kun je automatiseren met AI?', summary, 'Hoe kies je het juiste proces?', 'Van proces naar geautomatiseerde workflow' en de slotalinea. Vervolgvraag 1: stap 'AI-stap bepalen'. Vervolgvraag 2: 'Besparing berekenen', zonder de fictieve bedragen.

### `/ai-beleid/ai-act`

Pagina: De AI Act voor bedrijven: wat moet je doen?

- **Status:** concept (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 8 zin(nen) met een feit van buiten de eigen dienstverlening (wetgeving). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat is de AI Act?").
- **Vraagkop:** Wat vraagt de AI Act voor bedrijven nu al en wat geldt pas later?
- **Antwoordalinea:** De AI Act voor bedrijven hangt af van het volgende: welke AI een organisatie gebruikt of maakt, in welke van de vier risicocategorieën die valt en of de organisatie aanbieder of gebruiksverantwoordelijke is. De verboden praktijken en de plicht rond AI-geletterdheid gelden sinds 2 februari 2025 en de transparantieverplichtingen sinds 2 augustus 2026; het negende verbod geldt pas vanaf 2 december 2026 en voor de machineleesbare markering van content uit systemen die al vóór 2 augustus 2026 op de markt waren geldt een overgangstermijn tot 2 december 2026. De hoog-risicoregels gelden sinds de Digital Omnibus vanaf 2 december 2027 voor toepassingen uit bijlage III en vanaf 2 augustus 2028 voor AI in producten uit bijlage I (stand 23 september 2026).
- **Vervolgvragen:**
  1. *Kan een organisatie onder de AI Act voor bedrijven ongemerkt aanbieder worden?* Ja. Volgens artikel 25 gebeurt dat bij een hoog-risicosysteem wanneer een organisatie er de eigen naam of het eigen merk op zet, het ingrijpend wijzigt of een systeem zo inzet dat het een hoog-risicotoepassing wordt. Onder de AI Act voor bedrijven speelt die vraag bijvoorbeeld bij een algemene AI-tool die sollicitanten gaat rangschikken.
  2. *Hoe lang bewaart een gebruiksverantwoordelijke van een hoog-risicosysteem de logs onder de AI Act voor bedrijven?* Minimaal zes maanden bewaart een gebruiksverantwoordelijke van een hoog-risicosysteem de automatisch gegenereerde logs, volgens artikel 26. Onder de AI Act voor bedrijven noemt hetzelfde artikel voor die gebruiksverantwoordelijken onder meer ook menselijk toezicht, het melden van incidenten en het vooraf informeren van werknemers en hun vertegenwoordigers bij inzet van zo'n systeem op de werkvloer.
  3. *Komt de AI Act voor bedrijven aan bod in het AI Readiness Assessment?* Ja. Het [AI Readiness Assessment](/diensten/ai-readiness-assessment) bevat een risico- en compliance-scan, inclusief de positionering van toepassingen onder de AI-verordening. Voor een directie of raad van commissarissen die eerst een gedeeld beeld nodig heeft, behandelt de [Executive Briefing](/diensten/executive-briefing) ook regelgeving en toezicht.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: lede, 'Risicocategorieën' (ook het negende verbod), 'Verplichtingen per rol', de tweede FAQ (overgangstermijn markering) en de tabel onder 'Tijdlijn'. Vervolgvraag 1 en 2: 'Verplichtingen per rol' (artikel 25 en artikel 26). Vervolgvraag 3: slotalinea van 'Eerste stappen voor bedrijven'.

### `/ai-consultancy/ai-advies`

Pagina: AI advies: onafhankelijk advies over AI in je bedrijf

- **Status:** concept (15 van 15 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Externe feiten:** 1 zin(nen) met een feit van buiten de eigen dienstverlening (wetgeving). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat is AI advies?").
- **Vraagkop:** Wat kost AI advies en welke vorm past bij welke vraag?
- **Antwoordalinea:** AI advies van Dave Willemstein beantwoordt één afgebakende vraag of besluit, zoals een leverancierskeuze, een toets van een business case of een second opinion, meestal in dagen. Voor afgebakend advies en second opinions geldt een vaste prijs per opdracht; de Executive Briefing voor directie of raad van commissarissen kost €2.800. Het advies is onafhankelijk, zonder partnerstatus of commissies bij leveranciers.
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
  3. *Kan bij AI advies blijken dat de vraag groter is dan een adviesvraag?* Soms blijkt een vraag bij AI advies groter dan een adviesvraag; dan wordt dat gezegd en volgt een voorstel voor wat wel past. Soms is dat het AI Readiness Assessment, om eerst te weten waar de organisatie staat.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: 'Wat is AI advies?', 'AI advies versus AI consultancy', de FAQ over toolkeuze en de alinea over de Executive Briefing onder 'Hoe een adviestraject verloopt'. Tabel: 'Tools en leveranciers' (afgebakend advies en Vendor Review) en 'Hoe een adviestraject verloopt' (Executive Briefing, AI Readiness Assessment). Vervolgvragen: 'Hoe een adviestraject verloopt', 'Risico's en compliance' en het figuurbijschrift onder 'AI advies versus AI consultancy'.

### `/ai-consultancy/ai-roadmap`

Pagina: AI roadmap ontwikkelen: van prioriteiten naar planning

- **Status:** geverifieerd (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is een AI roadmap?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is een AI roadmap? (bestaand)
- **Antwoordalinea:** Een AI roadmap legt vast welke AI-toepassingen een organisatie in welke volgorde oppakt, wat daarvoor nodig is en op welke momenten wordt besloten over doorgaan of stoppen. De roadmap volgt op de AI strategie; een goede AI roadmap is kort en bestaat uit een handvol use cases met elk een eigenaar, randvoorwaarden, een budget-orde-van-grootte en een beslismoment, aangevuld met een afvallijst van wat bewust niet gebeurt. De planning werkt in horizonnen: de eerste drie maanden zijn concreet ingevuld, de periode daarna in grotere blokken.
- **Vervolgvragen:**
  1. *Is een AI roadmap hetzelfde als een projectplanning?* Nee. Een AI roadmap is geen projectplanning: de eerste drie maanden zijn concreet gepland, de periode daarna grover, en op vaste momenten wordt bekeken of de aannames nog kloppen. Het gedetailleerde implementatieplan per toepassing volgt pas als een use case groen licht krijgt.
  2. *Hoeveel use cases passen in de eerste horizon van een AI roadmap voor het MKB?* Twee of drie use cases in de eerste horizon is het advies voor een AI roadmap in het MKB. Meer use cases zijn zonder eigen AI-capaciteit lastig goed te begeleiden.
  3. *Is er een dienst die een AI roadmap als vast resultaat oplevert?* Ja. Een use-case roadmap met quick wins, middellange investeringen en bewuste no-go's is een van de vaste deliverables van de [AI Strategy Sprint](/diensten/ai-strategy-sprint). Het [AI Readiness Assessment](/diensten/ai-readiness-assessment) levert met het 90-dagenplan een eerste versie van de AI roadmap.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: de drie alinea's onder 'Wat is een AI roadmap?' en 'Planning en budget'. Vervolgvraag 1: derde alinea onder 'Wat is een AI roadmap?' en het FAQ-antwoord over het implementatieplan. Vervolgvraag 2: 'AI roadmap voor het MKB'. Vervolgvraag 3: alinea's onder 'Inventarisatie' en 'Deliverables van een AI roadmap'.

### `/ai-development/ai-oplossingen`

Pagina: AI oplossingen op maat voor jouw bedrijf

- **Status:** geverifieerd (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat zijn AI oplossingen?").
- **Vraagkop:** Wie bouwt AI oplossingen op maat en welke rol heeft de onafhankelijk adviseur?
- **Antwoordalinea:** Dave Willemstein bouwt of levert zelf geen AI oplossingen, maar helpt bepalen welke oplossing zinvol is, begeleidt de keuze van een oplossing of bouwpartij en toetst vanuit de kant van de opdrachtgever of het resultaat werkt. Wie eerst wil weten waar de organisatie staat, krijgt met het [AI Readiness Assessment](/diensten/ai-readiness-assessment) in 2-3 weken een onderbouwd beeld, voor €7.000. De bouw ligt bij het eigen team of bij een partner met wie de opdrachtgever zelf een contract sluit.
- **Vervolgvragen:**
  1. *Is maatwerk altijd nodig voor AI oplossingen?* Nee. Voor AI oplossingen is een goed ingerichte standaardoplossing vaak de snelste en goedkoopste route. Volgens de vuistregels past maatwerk als de oplossing raakt aan waarom klanten voor de organisatie kiezen, als data of werkwijze bijzonder is of als geen standaardpakket de benodigde controle geeft.
  2. *Kan het AI Readiness Assessment ook voor één afdeling worden uitgevoerd?* Ja. Het AI Readiness Assessment kan voor één afdeling of procesdomein kleiner worden uitgevoerd, met een lagere investering.
  3. *Zit er een marge op ontwikkelaars die worden voorgesteld voor AI oplossingen?* Nee. Als het helpt, stelt de adviseur voor AI oplossingen ontwikkelaars voor die hij kent, zonder marge op hun tarief. De bouwers komen uit de eigen organisatie of van een partij die de opdrachtgever zelf kiest.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: derde alinea onder 'Wat zijn AI oplossingen?', de eerste FAQ en de slotalinea onder 'AI oplossingen voor het MKB'. Vervolgvraag 1: vuistregels onder 'AI oplossingen op maat versus standaard'. Vervolgvraag 2: slotalinea onder 'AI oplossingen voor het MKB'. Vervolgvraag 3: alinea 'Wat je in dat traject van mij kunt verwachten' onder 'Van idee tot livegang'.

### `/ai-development/ai-software`

Pagina: AI software: kiezen, integreren of op maat laten bouwen

- **Status:** geverifieerd (9 van 9 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Soorten AI software").
- **Vraagkop:** Wanneer volstaat standaard AI software en wanneer loont maatwerk?
- **Antwoordalinea:** Standaard AI software volstaat voor alles wat een concurrent ook bij een leverancier kan kopen; maatwerk loont alleen voor de laag waarin de eigen kennis zit, zoals regels, prompts, testsets en koppelingen. In veel gevallen is de uitkomst een combinatie: model en platform inkopen, de kennislaag op maat laten bouwen en de implementatie bij een partner beleggen. Wie de selectie niet zelf wil trekken, kan die laten begeleiden met de [Vendor Review](/diensten/vendor-review), die 3-6 weken duurt.
- **Vervolgvragen:**
  1. *Wat bepaalt de echte kosten van AI software?* Integratie, data en exit bepalen bij AI software de echte kosten, niet de licentie. Het criterium Kosten in de werkbare set selectiecriteria omvat licentie, verbruik bij groei, integratie, beheer en exit over drie jaar.
  2. *Wanneer worden de selectiecriteria voor AI software vastgesteld?* Voordat de leveranciers in beeld komen: het advies is de selectiecriteria voor AI software en hun weging dan vast te stellen, omdat criteria die na de eerste demo worden opgesteld die demo beschrijven. Daarna is het advies iedere leverancier hetzelfde scenario op eigen data te geven.
  3. *Ontvangt de adviseur bij een Vendor Review voor AI software een vergoeding van leveranciers?* Nee. Bij de Vendor Review voor AI software ontvangt de adviseur geen vergoeding van leveranciers, zodat het advies ook kan zijn om niets te kopen.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Standaard of maatwerk?' met het schema en de laatste alinea onder 'Selectiecriteria'. Vervolgvraag 1: summary en de rij 'Kosten' in de criteriatabel. Vervolgvraag 2: openingsalinea onder 'Selectiecriteria' en de alinea na de criteriatabel. Vervolgvraag 3: alinea over de Vendor Review.

### `/ai-development/ai-specialist`

Pagina: AI specialist: expertise voor strategie en uitvoering

- **Status:** geverifieerd (9 van 9 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat doet een AI specialist?").
- **Vraagkop:** Welke AI specialist past bij welke vraag en wat kost strategische inzet?
- **Antwoordalinea:** AI specialist is een verzamelnaam voor strategische specialisten, die vooral besluiten voorbereiden en sturen, en technische specialisten, die vooral bouwen; het benodigde profiel volgt uit het besluit of het product dat een organisatie nodig heeft. Dave Willemstein is een AI specialist aan de strategische kant, die adviseert en begeleidt maar niet bouwt. Voor een doorlichting is er het [AI Readiness Assessment](/diensten/ai-readiness-assessment) van 2-3 weken voor €7.000, voor begeleiding vanuit klantzijde de [Fractional AI Lead](/diensten/fractional-ai-lead).
- **Vervolgvragen:**
  1. *Wat levert een strategische AI specialist op?* Een strategische AI specialist levert een onderbouwde keuze op: een roadmap, een selectieadvies of een beoordeelde business case. Werkende software is het product van technische AI specialisten, zoals een machine learning expert, een AI-developer of een platformspecialist.
  2. *Welke AI specialist is nodig als nog onduidelijk is waar AI waarde toevoegt?* Een strategische AI specialist: wie nog niet weet waar AI waarde toevoegt, heeft strategische AI-expertise nodig, iemand die kansen, risico's en randvoorwaarden in kaart brengt voordat er budget wordt vastgezet. Wie weet wat er moet komen en bouwcapaciteit zoekt, heeft technische specialisten nodig: het eigen team, een ontwikkelpartij of freelance ontwikkelaars.
  3. *Kan de Fractional AI Lead meesturen als een bouwpartij het werk uitvoert?* Ja, vanuit klantzijde: de Fractional AI Lead stuurt mee op uitvoering door het eigen team of een bouwpartij. De Fractional AI Lead kost €2.600 - €10.400 per maand, voor 2, 4 of 8 dagen per maand.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: 'Soorten AI specialisten' (met het bijschrift van de matrix), de summary en de lijst onder 'Mijn specialisaties'. Vervolgvraag 1: alinea's over strategische en technische AI specialisten. Vervolgvraag 2: de eerste en derde situatie onder 'Welke expertise heb jij nodig?'. Vervolgvraag 3: punt 'Begeleiding vanuit klantzijde' onder 'Mijn specialisaties' en prijzen.ts.

### `/ai-implementatie/advies`

Pagina: AI implementatie advies: goed voorbereid starten

- **Status:** concept (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 1 bevinding(en) open)
- **Externe feiten:** 1 zin(nen) met een feit van buiten de eigen dienstverlening (wetgeving). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom advies vooraf loont").
- **Vraagkop:** Wat levert AI implementatie advies vooraf op en welke dienst past erbij?
- **Antwoordalinea:** AI implementatie advies van Dave Willemstein legt vóór de bouw deze keuzes onderbouwd vast: de use case, bouwen of kopen, data en privacy, en de verandering die nodig is. Het resultaat is een beslisdocument met het besluit en de opdracht voor de bouwpartij; een concrete vraag over één toepassing past meestal bij afgebakend advies tegen een vaste prijs per opdracht. Wie eerst wil weten of de organisatie er breed klaar voor is, start met het [AI Readiness Assessment](/diensten/ai-readiness-assessment) van 2-3 weken voor €7.000.
- **Vervolgvragen:**
  1. *Levert AI implementatie advies een dik rapport op?* Nee. AI implementatie advies eindigt met een beslisdocument en geen dik rapport: welke use case, welke bouwkeuze, welke randvoorwaarden voor data en privacy, welke verandering nodig is en wat de bouwpartij moet opleveren om te slagen. Alle kaders en analyses zijn daarna van de opdrachtgever.
  2. *Kijkt AI implementatie advies ook naar de privacykant?* Ja. Bij AI implementatie advies wordt in kaart gebracht welke data de toepassing nodig heeft en wordt daarnaast naar de privacykant gekeken. Een DPIA is onder de AVG verplicht als de toepassing persoonsgegevens verwerkt met een grote kans op een hoog privacyrisico, en die vraag hoort aan het begin, niet vlak voor livegang.
  3. *Hoe lang duurt het eerste gesprek over AI implementatie advies?* Dertig minuten duurt de kennismaking over AI implementatie advies. De opdrachtgever vertelt waar de organisatie staat en hoort aan het eind wat de adviseur zou doen, ook als dat betekent dat de opdrachtgever deze adviseur niet nodig heeft.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: 'Waar ik over adviseer' (vier onderwerpen) en de alinea's over afgebakend advies, het AI Readiness Assessment en het beslisdocument onder 'Hoe een adviestraject verloopt'. Vervolgvraag 1 en 3: 'Hoe een adviestraject verloopt'. Vervolgvraag 2: 'Data en privacy'.

### `/ai-implementatie/stappenplan`

Pagina: AI implementatie stappenplan in 7 stappen

- **Status:** geverifieerd (12 van 12 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Stap 1: Bepaal het doel").
- **Vraagkop:** Welke stappen horen in een AI implementatie stappenplan?
- **Antwoordalinea:** Een AI implementatie stappenplan bestaat uit 7 stappen in een vaste volgorde: doel bepalen, use case kiezen, data en systemen in kaart brengen, bouwen of kopen, een pilot bouwen en testen, adoptie organiseren, en meten, borgen en opschalen. De volgorde telt omdat elke stap de volgende bepaalt, en adoptie, beheer en meting worden al bij de eerste stap voorbereid. Het stappenplan gaat uit van één toepassing; wie meerdere kandidaten heeft en eerst de volgorde wil bepalen, krijgt het advies te beginnen met een [AI-roadmap](/ai-consultancy/ai-roadmap).
- **Vervolgvragen:**
  1. *Begint een AI implementatie stappenplan met het kiezen van een tool?* Nee. Een AI implementatie stappenplan begint bij een meetbaar probleem, niet bij de technologie. Bij dat doel horen een nulmeting en een eigenaar in de lijn met budget en mandaat.
  2. *Wat is het gevolg als de stap over data en systemen in het AI implementatie stappenplan wordt overgeslagen?* Wie in het AI implementatie stappenplan de stap over data en systemen overslaat, ontdekt bij de pilot dat de data niet deugt. Wie adoptie pas na de oplevering oppakt, heeft een werkende toepassing die niemand gebruikt. De beslissingen worden in een vaste volgorde genomen, omdat elke stap de volgende bepaalt.
  3. *Is er een checklist bij het AI implementatie stappenplan?* Ja. Bij het AI implementatie stappenplan hoort de [AI implementatie checklist (pdf)](/downloads/ai-implementatie-checklist.pdf). Per stap staan daarin de vragen die beantwoord moeten zijn voordat de volgende stap begint.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: openingsalinea, diagram en de alinea over één toepassing onder 'Stap 1: Bepaal het doel'. Vervolgvraag 1: summary en 'Stap 1: Bepaal het doel'. Vervolgvraag 2: openingsalinea onder 'Stap 1: Bepaal het doel' (gevolg van stap 3 overslaan en stap 6 uitstellen). Vervolgvraag 3: 'Download de checklist'.

### `/ai-voor-bedrijven/ai-en-bi`

Pagina: AI en BI: het verschil en hoe ze elkaar versterken

- **Status:** concept (9 van 9 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 2 zin(nen) met een feit van buiten de eigen dienstverlening (toolprijs). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat is business intelligence?").
- **Vraagkop:** Wat is het verschil tussen AI en BI en hoe vullen ze elkaar aan?
- **Antwoordalinea:** BI werkt vooral met gestructureerde data en laat zien wat er is gebeurd en waarom; AI voorspelt, classificeert en verwerkt ook tekst en documenten, met een foutmarge die bekend moet zijn. AI en BI zijn geen concurrenten: AI bouwt voort op de betrouwbare cijfers en definities die BI levert. Vaak is een werkende BI-omgeving met vertrouwde cijfers daarom het beste startpunt voor AI.
- **Vervolgvragen:**
  1. *Is een Pro-licentie genoeg voor Copilot in Power BI?* Nee, volgens Microsoft Learn niet (stand september 2026): Copilot in Power BI, een voorbeeld van AI en BI, vraagt een betaalde Fabric- of Premium-capaciteit en een Pro-licentie alleen is niet genoeg. Zonder voorbereiding van het datamodel kan Copilot volgens Microsoft bovendien de data verkeerd interpreteren.
  2. *Op hoeveel manieren is AI te gebruiken voor business intelligence?* Vier manieren, van eenvoudig naar ingrijpend: vragen stellen in gewone taal, automatische toelichting bij cijfers en afwijkingen, voorspellingen naast de terugblik, en tekst uit e-mails, klantreacties en documenten omzetten in analyseerbare gegevens. Bij AI en BI rusten alle vier op een betrouwbaar datamodel.
  3. *Is de uitkomst van AI even exact als die van BI?* Nee, de uitkomst van BI is exact, mits de data klopt, terwijl een AI-model inschat en daarbij fouten maakt. Bij AI en BI vraagt dat om een andere manier van controleren en een ander gesprek over verantwoordelijkheid.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: tabel en alinea's onder 'Het verschil tussen AI en BI' plus de summary. Vervolgvraag 1 en 2: schema en Copilot-alinea onder 'Hoe AI business intelligence versterkt'. Vervolgvraag 3: rij 'Zekerheid' en de alinea direct onder de tabel.

### `/ai-voor-bedrijven/mkb`

Pagina: AI voor het MKB: waar begin je en wat levert het op?

- **Status:** concept (12 van 12 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 3 zin(nen) met een feit van buiten de eigen dienstverlening (marktcijfer). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom AI nu relevant is voor het MKB").
- **Vraagkop:** Hoe begint een ondernemer met AI voor het mkb zonder groot budget?
- **Antwoordalinea:** AI voor het mkb begint bij één taak die vaak terugkomt, veel tijd kost en al een vaste controle kent, zoals offertes of het sorteren van e-mail, met software die het bedrijf al heeft of een zakelijke licentie op een AI-assistent. Na een nulmeting en een paar spelregels over tools en gegevens volgt een test van vier weken in het echte werk, waarna de meting bepaalt of het bedrijf doorgaat, bijstuurt of stopt. Voor kleinere bedrijven is de [Executive Briefing](/diensten/executive-briefing) van 1 dagdeel incl. voorbereiding voor €2.800 een van de twee lichtere instappen.
- **Vervolgvragen:**
  1. *Passen het AI Readiness Assessment en de AI Strategy Sprint bij elk budget voor AI voor het mkb?* Nee. Het [AI Readiness Assessment](/diensten/ai-readiness-assessment) kost €7.000 en de [AI Strategy Sprint](/diensten/ai-strategy-sprint) €15.400 - €22.400: dat past bij een middelgroot bedrijf met meerdere afdelingen en een concrete investeringsvraag. Voor een bedrijf van tien mensen zijn die pakketten vaak te veel.
  2. *Blijft het gebruik van AI in het mkb achter bij grotere bedrijven?* Ja. Het gebruik van AI voor het mkb blijft achter bij grotere bedrijven: in 2025 gebruikte 29,8 procent van de bedrijven met 10 tot en met 249 werkzame personen AI-technologie, tegen 66,2 procent van het grootbedrijf, volgens het CBS. Bij microbedrijven met 2 tot 9 werkzame personen was dat 13,8 procent, een aandeel dat sinds 2023 wel is verdubbeld.
  3. *Is een chatbot die zelfstandig klanten te woord staat een goed startpunt bij AI voor het mkb?* Nee. Het advies voor AI voor het mkb in de klantenservice is niet te beginnen met zo'n chatbot, maar achter de schermen: e-mails sorteren, conceptantwoorden die een medewerker controleert en klantdossiers samenvatten. Een klantgerichte assistent voor eenvoudige vragen is pas een logische volgende stap als dat goed loopt.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: stappenschema en tips onder 'Eerste stappen' en de tweede alinea onder 'Hoe ik MKB-bedrijven help'. Vervolgvraag 1: eerste alinea onder 'Hoe ik MKB-bedrijven help'. Vervolgvraag 2: CBS-alinea onder 'Waarom AI nu relevant is voor het MKB'. Vervolgvraag 3: subkop 'Klantenservice'.

### `/ai-voor-bedrijven/zakelijke-dienstverleners`

Pagina: AI voor zakelijke dienstverleners

- **Status:** concept (9 van 9 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 4 zin(nen) met een feit van buiten de eigen dienstverlening (wetgeving, overig extern). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom AI voor dienstverleners loont").
- **Vraagkop:** Waar zit de winst van AI voor zakelijke dienstverleners en wat vraagt het aan vertrouwelijkheid?
- **Antwoordalinea:** AI voor zakelijke dienstverleners versnelt vooral het lezen, analyseren en schrijven waar accountants, advocaten, adviseurs en bureaus veel uren aan besteden: AI maakt een eerste versie of een selectie, de professional oordeelt en blijft verantwoordelijk voor het eindresultaat. De toolkeuze volgt uit de eisen aan vertrouwelijkheid: geen dossiers in gratis tools, een gecontroleerde verwerkersovereenkomst en kantoorbrede afspraken over wat mag.
- **Vervolgvragen:**
  1. *Kan een DPIA verplicht zijn bij AI voor zakelijke dienstverleners?* Ja, bij een verwerking met een hoog risico is een DPIA bij AI voor zakelijke dienstverleners verplicht onder de AVG. Bij persoonsgegevens hoort te worden nagegaan of een DPIA nodig is, en de verwerkersovereenkomst, de opslaglocatie en de afspraken over training op data horen te worden gecontroleerd.
  2. *Welke leidraad en aanbevelingen zijn er bij AI voor zakelijke dienstverleners zoals accountants en advocaten?* Voor AI voor zakelijke dienstverleners in de accountancy publiceerden de beroepsorganisaties NBA en NOREA in juni 2026 'Leidraad 2: AI Toegepast', en de Nederlandse orde van advocaten heeft aanbevelingen voor AI in de advocatuur gepubliceerd. De kern van de leidraad is dat validatie en menselijk oordeel de basis blijven. In de advocatuur blijft de advocaat altijd zelf verantwoordelijk voor het uiteindelijke advies.
  3. *Waar hangt de keuze voor een tool van af bij AI voor zakelijke dienstverleners?* Van de taken, de bestaande software en de eisen aan gegevensverwerking hangt bij AI voor zakelijke dienstverleners af welke tool past, niet van de indrukwekkendste demo. Gespecialiseerde vaktools bieden meer vakinhoud, maar vragen een toets op de herkomst van bronnen en het prijsmodel.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Waarom AI voor dienstverleners loont', de openingszin van 'Toepassingen per beroepsgroep' en de basisregels onder 'Vertrouwelijkheid en kwaliteit'. Vervolgvraag 1: basisregel 2 onder 'Vertrouwelijkheid en kwaliteit'. Vervolgvraag 2: subkoppen 'Accountancy' en 'Legal'. Vervolgvraag 3: schema en alinea onder 'Tools'.

## 5. Workshops, training en coaching (5)

### `/ai-workshop`

Pagina: AI workshop en training voor bedrijven

- **Status:** geverifieerd (10 van 10 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom een AI workshop?").
- **Vraagkop:** Welke AI workshop past bij welk team en hoe wordt de prijs bepaald?
- **Antwoordalinea:** Dave Willemstein geeft workshops en trainingen incompany en op maat; een AI workshop is opgebouwd rond drie tot vijf concrete taken per rol, met materiaal uit de eigen praktijk van het team. De meest voorkomende vertrekpunten zijn een introductie voor management, hands-on werken met ChatGPT en Copilot, AI-geletterdheid en een workshop AI-strategie. Elke opdracht krijgt een vaste prijs, die in de intake wordt besproken en vooraf op papier staat.
- **Vervolgvragen:**
  1. *Welke sessie past bij een directie of raad van commissarissen?* De [Executive Briefing](/diensten/executive-briefing) is voor directie of raad van commissarissen de passende vorm: een vaste sessie met een beslisagenda en toezichtvragen. De Executive Briefing heeft een vaste prijs van €2.800, inclusief voorbereiding op de sector. Breder inzetbaar is de managementworkshop, bijvoorbeeld voor lijnmanagers of een MT.
  2. *Kan een AI workshop ook online worden gegeven?* Ja, maar bij een online AI workshop komen hands-on werk en het onderlinge gesprek moeizamer op gang. Incompany werkt het best, omdat deelnemers dan met hun eigen apparatuur, toegang en materiaal kunnen oefenen.
  3. *Leiden licenties en één trainingsmiddag tot structureel gebruik van AI?* Zelden: licenties uitdelen en één trainingsmiddag organiseren leidt zelden tot structureel gebruik, en een AI workshop is geen adoptiestrategie. Daarom is een AI workshop opgebouwd rond drie tot vijf concrete taken per rol, zodat een deelnemer de volgende ochtend weet waar te beginnen.
- **Bronregel:** Bron: [tarieven en doorlooptijden van Dave Willemstein](/tarieven).
- **Herkomst:** Antwoord: 'Waarom een AI workshop?', het diagram onder 'Soorten workshops', 'Incompany of op locatie' en 'Investering'. Vervolgvraag 1: 'Introductie AI voor management' en de alinea over de Executive Briefing onder 'Investering'. Vervolgvraag 2: 'Incompany of op locatie'. Vervolgvraag 3: de tweede alinea onder 'Waarom een AI workshop?'.

### `/ai-workshop/ai-coaching`

Pagina: AI coaching voor managers en teams

- **Status:** geverifieerd (9 van 9 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is AI coaching?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is AI coaching? (bestaand)
- **Antwoordalinea:** AI coaching van Dave Willemstein is persoonlijke begeleiding voor managers en teamleads die AI in het dagelijkse werk van hun team willen laten landen, in de vorm van gesprekken en werksessies rond de vragen van dat moment. Een traject is afgebakend: het doel, het aantal sessies bij benadering en het eindpunt worden vooraf afgesproken. Voor AI coaching geldt een vaste prijs per opdracht; het valt onder afgebakend advies.
- **Vervolgvragen:**
  1. *Is AI coaching een doorlopend traject zonder eindpunt?* Nee. Elk traject AI coaching is afgebakend en afbouwen is het doel: aan het eind moet het team zonder de coach verder kunnen, met iemand uit het team die de rol van aanspreekpunt overneemt.
  2. *Neemt de coach bij AI coaching de besluiten over?* Nee. Bij AI coaching blijven besluit en uitvoering bij de manager en het team. De coach stelt vragen, deelt wat in vergelijkbare situaties vaak werkt en helpt keuzes scherp te krijgen.
  3. *Past AI coaching bij een organisatiebrede vraag?* AI coaching past minder als de vraag organisatiebreed is: moet er iemand de AI-agenda van de hele organisatie sturen, dan is de [Fractional AI Lead](/diensten/fractional-ai-lead) de betere vorm.
- **Bronregel:** Bron: Dave Willemstein, onafhankelijk AI-adviseur.
- **Herkomst:** Antwoord: lede, eerste alinea onder 'Wat is AI coaching?', eerste alinea onder 'Hoe een traject verloopt' en de alinea over afgebakend advies en vaste prijs. Vervolgvraag 1 en 2: de uitgangspunten 'Afbouwen is het doel' en 'Jij blijft eigenaar'. Vervolgvraag 3: slotalinea onder 'Voor wie is AI coaching?'.

### `/ai-workshop/ai-geletterdheid-training`

Pagina: AI geletterdheid training: voldoen aan de AI Act

- **Status:** concept (8 van 8 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 7 zin(nen) met een feit van buiten de eigen dienstverlening (wetgeving). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat is AI geletterdheid?").
- **Vraagkop:** Voldoet een organisatie met een AI geletterdheid training aan de AI Act?
- **Antwoordalinea:** Artikel 4 van de AI Act geldt sinds 2 februari 2025 voor organisaties die AI ontwikkelen of gebruiken; sinds de wijziging van juli 2026 is het een inspanningsverplichting om maatregelen te nemen voor de AI-geletterdheid van personeel, zonder voorgeschreven niveau. Een AI geletterdheid training van Dave Willemstein is een manier om die maatregelen in te vullen, maar niet de enige, en een training alleen is niet genoeg. Een certificaat is volgens de Europese Commissie niet nodig, terwijl het wel verstandig is intern vast te leggen welke maatregelen zijn genomen en waarom die passen.
- **Vervolgvragen:**
  1. *Is de verplichting achter een AI geletterdheid training in 2026 vervallen?* Nee. De verplichting uit artikel 4 van de AI Act, waar een AI geletterdheid training bij helpt, blijft bestaan voor aanbieders en gebruiksverantwoordelijken van AI-systemen. Sinds 27 juli 2026 is het een inspanningsverplichting, en niets doen voldoet niet (stand september 2026).
  2. *Bestaat er een voorgeschreven lesprogramma voor een AI geletterdheid training?* Nee. Voor een AI geletterdheid training bestaat geen voorgeschreven lesprogramma: volgens de Autoriteit Persoonsgegevens hangt wat nodig is af van de risico's, de rollen en de context.
- **Bronregel:** Bron: Dave Willemstein, onafhankelijk AI-adviseur.
- **Herkomst:** Antwoord: summary, slot van 'Wat is AI geletterdheid?', de opsomming onder 'Wat de AI Act vraagt' en de eerste alinea onder 'Aantonen dat je voldoet'. Vervolgvraag 1: 'Wat de AI Act vraagt'. Vervolgvraag 2: eerste alinea onder 'Inhoud van de training'.

### `/ai-workshop/chatgpt-training`

Pagina: ChatGPT training voor bedrijven

- **Status:** geverifieerd (8 van 8 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** dienstenoverzicht
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat leer je?").
- **Vraagkop:** Wat leren deelnemers in een ChatGPT training en hoe is de prijs geregeld?
- **Antwoordalinea:** Een ChatGPT training van Dave Willemstein is een incompany training voor teams en professionals die veel met tekst, informatie en communicatie werken, met drie tot vijf taken per rol uit het eigen werk als oefenmateriaal. Deelnemers leren betere prompts schrijven, terugkerend werk vastleggen in eigen GPT's en projecten, uitkomsten controleren en veilig omgaan met gegevens. Het programma wordt in een korte intake afgestemd en de training heeft een vaste prijs die vooraf schriftelijk wordt bevestigd.
- **Vervolgvragen:**
  1. *Is technische voorkennis nodig voor de ChatGPT training?* Nee. De ChatGPT training is bedoeld voor teams en professionals die veel met tekst, informatie en communicatie werken, en technische voorkennis is daarvoor niet nodig.
  2. *Kan de ChatGPT training worden gecombineerd met Copilot?* Ja, als teams beide gebruiken: de ChatGPT training en de [Copilot training](/ai-workshop/copilot-training) worden dan in één programma gecombineerd.
  3. *Wordt de ChatGPT training ook in het Engels gegeven?* Ja. De ChatGPT training wordt op locatie bij de opdrachtgever gegeven, in het Nederlands of het Engels.
- **Bronregel:** Bron: Dave Willemstein, onafhankelijk AI-adviseur.
- **Herkomst:** Antwoord: 'Wat leer je?', eerste alinea onder 'Voor wie?' en de alinea over locatie, intake en vaste prijs onder 'Programma'. Vervolgvraag 1 en 2: 'Voor wie?'. Vervolgvraag 3: 'Programma'.

### `/ai-workshop/copilot-training`

Pagina: Microsoft Copilot training voor teams

- **Status:** concept (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 1 zin(nen) met een feit van buiten de eigen dienstverlening (overig extern). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** dienstenoverzicht
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat leer je in de Copilot training?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat leer je in de Copilot training? (bestaand)
- **Antwoordalinea:** In de Copilot training van Dave Willemstein oefent een team met drie tot vijf herkenbare taken per rol uit het eigen werk, in Outlook, Teams, Word, Excel en PowerPoint. Deelnemers leren goede opdrachten geven, kiezen tussen Copilot in een app en Copilot Chat, uitkomsten controleren en herkennen welke taken en gegevens niet bij Copilot horen. De training is maatwerk, wordt incompany gegeven en heeft een vaste prijs die in de intake wordt besproken en vooraf schriftelijk wordt bevestigd.
- **Vervolgvragen:**
  1. *Hoe ziet het programma van de Copilot training eruit?* De Copilot training is maatwerk en een programma kan er bijvoorbeeld uitzien als intake, voorbereiding, sessie en toepassen. In dat voorbeeld komen in de intake doel, doelgroep, licenties en interne afspraken aan bod en worden in de voorbereiding drie tot vijf taken per rol uitgewerkt tot oefeningen. Duur en invulling van de Copilot training hangen af van de groep en het doel.
  2. *Komt veilig werken met bedrijfsdata aan bod in de Copilot training?* Ja. De Copilot training vertaalt wat Microsoft over data, privacy en beveiliging stelt naar gedrag: wat wel en niet wordt gedeeld, hoe een antwoord te herkennen is dat op een verkeerde bron leunt, en wat te doen als Copilot iets laat zien dat de gebruiker niet had mogen zien.
  3. *Is de Copilot training te combineren met een training AI-geletterdheid?* Ja. De Copilot training en de [training AI-geletterdheid](/ai-workshop/ai-geletterdheid-training) zijn goed te combineren. De basis onder veilig werken met Copilot, begrijpen hoe AI werkt en waar de risico's zitten, is ook wat de training AI-geletterdheid behandelt.
- **Bronregel:** Bron: Dave Willemstein, onafhankelijk AI-adviseur.
- **Herkomst:** Antwoord: 'Wat leer je in de Copilot training?', de summary en de alinea over incompany en vaste prijs onder 'Programma en investering'. Vervolgvraag 1: openingszinnen, diagram en bijschrift onder 'Programma en investering'. Vervolgvraag 2 en 3: 'Veilig werken met bedrijfsdata', vooral de slotalinea.

## 6. Branchepagina's (2)

### `/markten/automotive`

Pagina: AI in automotive: toepassingen voor autobedrijven

- **Status:** concept (10 van 10 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 3 zin(nen) met een feit van buiten de eigen dienstverlening (wetgeving). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("AI toepassingen in automotive").
- **Vraagkop:** Wat kan een autobedrijf met AI in automotive en hoe begint het daarmee?
- **Antwoordalinea:** Bij AI in automotive zit voor een autobedrijf of dealer de meeste winst in verkoopopvolging, werkplaats en klantcontact, niet in de auto zelf. De aanpak is één proces met een meetbaar knelpunt kiezen, een eigenaar in de lijn aanwijzen en vooraf afspreken wanneer er wordt gestopt. Voor wie nog niet weet welk proces dat is, is het [AI Readiness Assessment](/diensten/ai-readiness-assessment) van 2-3 weken een logisch startpunt.
- **Vervolgvragen:**
  1. *Is AI in automotive hoog risico als een dealer er sollicitanten mee selecteert of de kredietwaardigheid van particulieren mee beoordeelt?* Ja. AI voor het selecteren van sollicitanten en voor het beoordelen van de kredietwaardigheid van particulieren staat op de hoog-risicolijst van de AI Act, met eisen die door de Digital Omnibus volgens de Europese Commissie vanaf 2 december 2027 gelden. Een chatbot of een tekstgenerator is bij AI in automotive geen hoog-risicotoepassing.
  2. *Hoe kan een dealer bij AI in automotive toetsen of de belofte van een leverancier van assistenten klopt?* Dat kan bijvoorbeeld met de [Vendor Review](/diensten/vendor-review), met dezelfde vragen en hetzelfde scenario voor elke leverancier. Bij assistenten gaat het bij AI in automotive om de keuze tussen wat de DMS-leverancier, het merk of een gespecialiseerde partij aanbiedt.
  3. *Waarvoor werkt een klantgerichte assistent met AI in automotive goed?* Klantgerichte assistenten, die vragen beantwoorden en bijvoorbeeld een onderhoudsafspraak inplannen, werken bij AI in automotive goed voor voorspelbare vragen, niet voor klachten of onderhandelingen. Het advies is vooraf af te spreken wanneer de assistent overdraagt aan een mens, en dat met echte gesprekken te testen.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: summary en de alinea 'Zo begin je'. Vervolgvraag 1: 'Welke regels gelden er?'. Vervolgvraag 2 en 3: 'AI assistenten'.

### `/markten/fintech`

Pagina: AI in fintech en financiële dienstverlening

- **Status:** concept (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 4 zin(nen) met een feit van buiten de eigen dienstverlening (wetgeving). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("AI toepassingen in fintech").
- **Vraagkop:** Waar levert AI in fintech het meest op en welke regels spelen mee?
- **Antwoordalinea:** Bij AI in fintech leveren documentverwerking en signalering vaak de snelste winst: AI is goed in het halen van gegevens uit documenten, terwijl het oordeel in de meeste processen bij een mens hoort. Kredietbeoordeling van personen en de risicobeoordeling en prijsstelling bij levens- en ziektekostenverzekeringen zijn hoog risico onder de AI Act, met regels vanaf 2 december 2027 (stand september 2026). Voor financiële instellingen zijn er het [AI Readiness Assessment](/diensten/ai-readiness-assessment) om te prioriteren, de [Vendor Review](/diensten/vendor-review) om te kiezen, de [AI Due Diligence](/diensten/ai-due-diligence) om te beoordelen en de [Fractional AI Lead](/diensten/fractional-ai-lead) om te borgen.
- **Vervolgvragen:**
  1. *Blijft bij AI in fintech het oordeel bij een mens?* Bij AI in fintech hoort het oordeel in de meeste processen bij een mens, die de voorstellen van het systeem bevestigt of corrigeert. Dat levert met elke bevestiging en correctie een auditspoor en een meetbare kwaliteitsloop op.
  2. *Is het uitstel van de AI Act een reden om met eisen aan AI in fintech te wachten?* Nee. Een kredietmodel dat nu wordt ingekocht of gebouwd, is waarschijnlijk nog in gebruik als de hoog-risicoregels vanaf 2 december 2027 gelden, dus bij AI in fintech horen die eisen nu al in ontwerp en selectie. Met de Vendor Review wordt de keuze voor een leverancier of bouwpartij vastgelegd op een manier waar inkoop, compliance en audit mee verder kunnen.
  3. *Hoe verhoudt een AI-dienst van een externe leverancier bij AI in fintech zich tot DORA?* Een AI-dienst die een financiële instelling afneemt, hoort bij AI in fintech in de praktijk bij de ICT-diensten van derden waarvan DORA een informatieregister vraagt, inclusief onderuitbesteding. DORA geldt sinds 17 januari 2025 en richt zich op de financiële instelling; de precieze kwalificatie is iets om te laten toetsen door de compliance- of juridische afdeling. Exitpad, afhankelijkheid en incidentafspraken horen bij een externe AI-dienst in de selectie.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'AI toepassingen in fintech', 'AI automatisering in financiële dienstverlening', de AI Act-bullet onder 'AI governance en compliance' en de lijst onder 'AI consultancy voor financiële instellingen'. Vervolgvraag 1: onderscheid extractie en oordeel. Vervolgvraag 2: slotalinea onder 'AI governance en compliance' en 'Kiezen' in de dienstenlijst. Vervolgvraag 3: DORA-bullet en de FAQ 'Geldt DORA ook voor AI-leveranciers?'.

## 7. Kennisbankartikelen (13)

### `/kennisbank/ai-agents-en-avg`

Pagina: AI agents en de AVG: waar moet je op letten?

- **Status:** concept (9 van 10 zinnen bevestigd, 0 geschrapt, 1 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 9 zin(nen) met een feit van buiten de eigen dienstverlening (wetgeving). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom AI agents privacyrisico’s geven").
- **Vraagkop:** Wat vraagt de AVG bij AI agents van een organisatie?
- **Antwoordalinea:** De AVG bij AI agents geldt volledig: de organisatie die de agent inzet, blijft verwerkingsverantwoordelijke, ook als de agent zelf gegevens opzoekt, vastlegt of verstuurt. De basis bestaat uit een vastgelegd doel met grondslag, toegang die per bron is afgebakend, een verwerkersovereenkomst met de leverancier, logging van elke stap en vaak een DPIA. Neemt de agent besluiten over mensen, dan komen de regels over geautomatiseerde besluitvorming erbij, en daarnaast kan de AI Act gelden.
- **Vervolgvragen:**
  1. *Heeft de AVG een apart hoofdstuk voor AI agents?* Nee. De AVG bij AI agents bestaat uit de bestaande regels, die direct van toepassing zijn; een apart hoofdstuk voor AI agents heeft de AVG niet. Wat verandert is het risicoprofiel, door brede toegang, meerdere stappen zonder zicht, gegevens naar derden en handelen in plaats van adviseren.
  2. *Binnen hoeveel uur wordt een datalek gemeld onder de AVG bij AI agents?* 72 uur is onder de AVG bij AI agents de termijn waarbinnen een datalek zo mogelijk bij de Autoriteit Persoonsgegevens wordt gemeld, zonder onredelijke vertraging. De melding is niet nodig als het risico voor betrokkenen onwaarschijnlijk is.
  3. *Kan de AI Act naast de AVG bij AI agents gelden?* Voor een agent kunnen de AVG en de AI Act tegelijk gelden: de AVG bij AI agents gaat over persoonsgegevens, de AI Act over het AI-systeem zelf. Voor agents die onder bijlage III vallen, bijvoorbeeld doordat ze sollicitaties filteren of kandidaten beoordelen, gelden de hoog-risicoverplichtingen door de Digital Omnibus vanaf 2 december 2027 in plaats van 2 augustus 2026.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Waarom AI agents privacyrisico's geven', summary en de lijst onder 'AVG-eisen voor AI agents'. Vervolgvraag 1: inleiding 'AVG-eisen voor AI agents' en de vier kenmerken onder de eerste H2. Vervolgvraag 2: punt 'Beveiliging en datalekken'. Vervolgvraag 3: 'Samenhang met de AI Act'.

### `/kennisbank/ai-specialist-salaris`

Pagina: AI specialist salaris: wat verdient een AI specialist?

- **Status:** concept (10 van 10 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 6 zin(nen) met een feit van buiten de eigen dienstverlening (salaris). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Salarisindicatie AI specialist").
- **Vraagkop:** Wat zeggen de salarisbronnen over een AI specialist salaris in Nederland?
- **Antwoordalinea:** Voor een AI specialist salaris publiceren de gecontroleerde salarisbronnen hun cijfers onder de titel AI engineer, niet onder AI specialist; ze verschillen onderling flink en zijn bruikbaar als bandbreedte, niet als vast bedrag. DataJobs (bijgewerkt mei 2026) noemt bruto per maand € 3.000 tot € 4.000 voor junioren, € 4.000 tot € 5.500 voor medioren en € 5.500 tot € 7.000 voor senioren; Indeed (bijgewerkt 14 september 2026) meldt een gemiddelde van € 56.643 per jaar. Voor werkgevers past een vaste aanstelling bij structureel werk met een duidelijke scope; bij een onduidelijke scope is externe of parttime inzet vaak verstandiger.
- **Vervolgvragen:**
  1. *Publiceren de gecontroleerde salarisbronnen een AI specialist salaris onder die functietitel?* Nee. De gecontroleerde salarisbronnen publiceren hun cijfers onder de titel AI engineer, niet onder AI specialist. Bij een AI specialist salaris gaat het daarom om bandbreedtes per niveau van twee bronnen, in brutobedragen per maand.
  2. *Zijn de cijfers van Indeed en DataJobs bij een AI specialist salaris één-op-één te vergelijken?* Lastig: de cijfers van Indeed en DataJobs zijn lastig één-op-één te vergelijken, want Indeed rekent in jaarbedragen op basis van wat werknemers zelf opgeven en DataJobs in brutomaandbedragen op basis van gegevens van het eigen platform. Bij een AI specialist salaris zijn beide daarom als orde van grootte te gebruiken.
  3. *Wat doet de Fractional AI Lead als de scope voor een fulltime functie nog niet vaststaat?* De [Fractional AI Lead](/diensten/fractional-ai-lead) stuurt de AI-agenda in een parttime rol en helpt bij het functieprofiel en de werving van een vaste opvolger. De rol kost €2.600 - €10.400 per maand, voor 2, 4 of 8 dagen per maand.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: summary, tabel en alinea's onder 'Salarisindicatie AI specialist' (kolom DataJobs), het Indeed-punt onder 'AI engineer salaris' en de vuistregels onder 'Vast in dienst of freelance inhuren?'. Vervolgvraag 1: eerste twee alinea's onder 'Salarisindicatie AI specialist' en summary. Vervolgvraag 2: alinea 'Die cijfers zijn lastig één-op-één te vergelijken'. Vervolgvraag 3: vuistregel 'Kies een parttime rol'.

### `/kennisbank/ai-voorbeelden`

Pagina: AI voorbeelden: 25 toepassingen uit de praktijk

- **Status:** concept (8 van 8 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 3 zin(nen) met een feit van buiten de eigen dienstverlening (overig extern, wetgeving). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("AI voorbeelden per afdeling").
- **Vraagkop:** Welke AI voorbeelden uit de praktijk zijn bruikbaar voor een organisatie?
- **Antwoordalinea:** De meeste bruikbare AI voorbeelden zijn klein: AI doet een afgebakende taak in een bestaand proces, namelijk lezen, sorteren, samenvatten of een eerste versie maken. Het overzicht telt 25 toepassingen per afdeling, per sector en uit het dagelijks leven, en in bijna elk voorbeeld controleert een mens de uitkomst voordat die ertoe doet. Het beste startpunt is een taak met hoog volume en lage foutkosten, zoals vragen sorteren, facturen uitlezen of productteksten in concept.
- **Vervolgvragen:**
  1. *Hoe zijn de AI voorbeelden op de pagina beschreven?* Bewust generiek: de AI voorbeelden staan er in de vorm 'een groothandel kan' in plaats van als een verzonnen succesverhaal. Bij de drie voorbeelden uit het dagelijks leven, over spamfilters, reistijd voorspellen en vertalen, heeft de leverancier zelf beschreven hoe AI wordt ingezet.
  2. *Wanneer gelden bij AI voorbeelden zwaardere eisen?* Zodra een toepassing zelf een besluit over een persoon neemt of een professioneel oordeel vervangt, gelden bij AI voorbeelden zwaardere eisen vanuit de AVG, de AI Act en de eigen sectorregels. AI die sollicitaties filtert of kandidaten beoordeelt, staat in de AI Act op de lijst van hoog-risicotoepassingen; ook AI die de kredietwaardigheid van personen beoordeelt en het beoordelen van leerresultaten of toelating met AI vallen onder de hoog-risicotoepassingen van de AI Act.
  3. *Wat levert het AI Readiness Assessment op voor wie wil weten welke AI voorbeelden het meeste opleveren?* Het [AI Readiness Assessment](/diensten/ai-readiness-assessment) geeft in 2-3 weken een gevalideerde lijst met kansen en een 90-dagenplan, voor wie wil weten welke van de AI voorbeelden in de eigen organisatie het meeste oplevert.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: lede, summary, de inleiding onder 'AI voorbeelden per afdeling' en de keuzematrix onder 'Hoe kies je de juiste toepassing?'. Vervolgvraag 1: inleiding 'AI voorbeelden per afdeling' en 'AI voorbeelden in het dagelijks leven'. Vervolgvraag 2: voorbeelden 14, 17 en 19 en de slotalinea onder 'AI voorbeelden per sector'. Vervolgvraag 3: slotalinea.

### `/kennisbank/chatgpt-voor-bedrijven`

Pagina: ChatGPT voor bedrijven: toepassingen en veilig gebruik

- **Status:** concept (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 10 zin(nen) met een feit van buiten de eigen dienstverlening (toolprijs). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat kan ChatGPT voor bedrijven?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat kan ChatGPT voor bedrijven? (bestaand)
- **Antwoordalinea:** ChatGPT voor bedrijven is de AI-assistent van OpenAI als schrijf-, denk- en analysepartner die in gewone taal een tekst, samenvatting, analyse of opzet teruggeeft; bij ChatGPT Business horen volgens de prijspagina van OpenAI onder meer projecten, eigen GPT's, data-analyse en koppelingen (stand september 2026). Voor bedrijfsdata horen de abonnementen Business of Enterprise en geen persoonlijke accounts: bij beide blijft training op invoer en uitvoer volgens OpenAI standaard uit (stand september 2026). ChatGPT kan zelfverzekerd een fout antwoord geven, dus voor alles wat naar een klant, toezichthouder of directie gaat blijft een mens verantwoordelijk voor de controle.
- **Vervolgvragen:**
  1. *Wat kost een plek bij ChatGPT Business per gebruiker per maand?* Een standaardplek van ChatGPT Business kost $20 per gebruiker per maand bij jaarbetaling of $25 bij maandbetaling, en een premiumplek $100 of $125 (stand september 2026). Dat zijn Amerikaanse lijstprijzen exclusief btw, en OpenAI geeft aan dat prijzen per land en valuta kunnen verschillen. Bij ChatGPT voor bedrijven is de prijs van ChatGPT Enterprise op aanvraag.
  2. *Welk abonnement van ChatGPT voor bedrijven biedt Europese dataopslag?* ChatGPT Enterprise, voor nieuwe werkruimtes (EER en Zwitserland); bij ChatGPT Business is er geen Europese dataopslag (stand september 2026). Bij ChatGPT voor bedrijven vallen gegevens die via koppelingen of webzoekopdrachten naar externe diensten gaan daar volgens OpenAI niet onder.
  3. *Is een persoonlijk account geschikt voor bedrijfsdata bij ChatGPT voor bedrijven?* Nee, voor bedrijfsdata geldt bij ChatGPT voor bedrijven: Business of Enterprise, geen persoonlijke accounts. Bij de persoonlijke abonnementen kan OpenAI gesprekken gebruiken om modellen te verbeteren tenzij de gebruiker dat zelf uitzet, en de organisatie heeft geen zicht of zeggenschap over klantgegevens die een medewerker in een persoonlijk account zet. Voor Business en Enterprise is bovendien een verwerkersovereenkomst met OpenAI af te sluiten.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: alinea's onder 'Wat kan ChatGPT voor bedrijven?', de summary en de alinea over training onder 'Privacy en veiligheid'. Vervolgvraag 1 en 2: tabel en toelichting onder 'Zakelijke abonnementen' en het punt 'Dataopslag'. Vervolgvraag 3: summary en eerste twee alinea's onder 'Privacy en veiligheid'.

### `/kennisbank/claude-voor-bedrijven`

Pagina: Claude voor bedrijven: mogelijkheden en toepassingen

- **Status:** concept (12 van 12 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 11 zin(nen) met een feit van buiten de eigen dienstverlening (toolprijs). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat is Claude?").
- **Vraagkop:** Welk abonnement hoort bij Claude voor bedrijven en waar staat de data?
- **Antwoordalinea:** Claude voor bedrijven is de AI-assistent van Anthropic in een zakelijk abonnement: Team voor 2 tot 150 gebruikers, of Enterprise met daarnaast onder meer SCIM, rolgebaseerde toegang en auditlogs. Alleen de zakelijke abonnementen zijn geschikt voor gebruik met bedrijfsgegevens; bij Team en Enterprise traint Anthropic standaard niet op de content, en de data wordt volgens Anthropic in de VS opgeslagen (stand september 2026). Wie voor Claude kiest, doet dat vaak vanwege lange documenten, schrijfwerk of het delegeren van taken.
- **Vervolgvragen:**
  1. *Wat kost Claude voor bedrijven per gebruiker?* Een standaardplek in het Team-abonnement van Claude voor bedrijven kost $20 per gebruiker per maand bij jaarbetaling of $25 bij maandbetaling, en een premiumplek $100 of $125. Enterprise kost $20 per plek per maand bij jaarbetaling plus gebruik tegen API-tarieven, met een jaarcontract van minimaal 20 plekken. Dat zijn Amerikaanse lijstprijzen exclusief btw, stand september 2026.
  2. *Kan de data van Claude voor bedrijven in de app in Europa worden opgeslagen?* Op dit moment kan Europese dataopslag bij Claude voor bedrijven alleen via de cloudplatforms, niet in de app (stand september 2026). In de zakelijke abonnementen wordt de data volgens Anthropic opgeslagen in de VS. Voor Europese dataopslag en verwerking wijst Anthropic naar de regionale endpoints van AWS Bedrock en Google Vertex, een route voor eigen toepassingen via de API en niet voor de claude.ai-app.
  3. *Zijn de abonnementen Pro en Max geschikt voor bedrijfsdata?* Nee. Pro en Max zijn persoonlijke abonnementen waarbij modeltraining op gesprekken aan staat tot de gebruiker het zelf uitzet, en centraal beheer ontbreekt. Voor Claude voor bedrijven met bedrijfsgegevens zijn alleen Team en Enterprise geschikt (stand september 2026).
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: lede, summary, eerste alinea en diagram onder 'Zakelijke mogelijkheden', alinea 'Waar staat je data?' en de slotzin van de eerste alinea na de tabel onder 'Claude versus ChatGPT en Gemini'. Vervolgvraag 1: prijslijst onder 'Zakelijke mogelijkheden'. Vervolgvraag 2: alinea 'Waar staat je data?' en de alinea na de vergelijkingstabel. Vervolgvraag 3: eerste alinea en diagram onder 'Zakelijke mogelijkheden'.

### `/kennisbank/gemini-voor-bedrijven`

Pagina: Gemini voor bedrijven: toepassingen in Google Workspace

- **Status:** concept (8 van 9 zinnen bevestigd, 0 geschrapt, 1 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 8 zin(nen) met een feit van buiten de eigen dienstverlening (toolprijs). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat is Gemini?").
- **Vraagkop:** Wat krijgt een organisatie met Gemini voor bedrijven in Google Workspace?
- **Antwoordalinea:** Gemini voor bedrijven is de generatieve AI van Google, die sinds januari 2025 zonder aparte AI-licentie in de Business- en Enterprise-edities van Google Workspace zit; welke functies beschikbaar zijn, verschilt per editie. Bij organisaties die al met Google Workspace werken, zit Gemini waarschijnlijk al in het abonnement, zodat de vraag minder is of het wordt gekocht en meer hoe het wordt ingezet en welke afspraken over data gelden. Volgens Google dient klantdata uit Workspace zonder toestemming of instructie van de klant niet als trainingsmateriaal voor modellen (stand september 2026).
- **Vervolgvragen:**
  1. *Wat kost Gemini voor bedrijven per gebruiker?* Business Starter kost € 6,80, Business Standard € 13,60 en Business Plus € 21,10: dat zijn de Business-edities van Google Workspace met Gemini voor bedrijven, per gebruiker per maand bij een jaarcontract, exclusief belastingen (stand september 2026). De prijs van de Enterprise-editie is op aanvraag.
  2. *Werkt Gemini voor bedrijven in Docs en Sheets met de editie Business Starter?* In Business Starter zit Gemini voor bedrijven volgens Google niet in Docs en Sheets, wel in Gmail en in de Gemini-app (stand september 2026). In Business Standard zit Gemini in onder andere Gmail, Docs en Meet.
  3. *Kan Gemini voor bedrijven gegevens ophalen waar een medewerker geen toegang toe heeft?* Gemini voor bedrijven haalt volgens Google alleen gegevens op waartoe de gebruiker zelf toegang heeft. Te ruim gedeelde Drive-mappen komen daardoor wel sneller boven, dus het opschonen van toegangsrechten hoort vóór een brede uitrol.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: lede, eerste alinea onder 'Gemini in Google Workspace' en het eerste punt onder 'Privacy en data'. Vervolgvraag 1 en 2: editietabel onder 'Gemini in Google Workspace'. Vervolgvraag 3: punt 'Gemini volgt toegangsrechten' en aandachtspunt 1 onder 'Privacy en data'.

### `/kennisbank/microsoft-copilot-voor-bedrijven`

Pagina: Microsoft Copilot voor bedrijven: wat kun je ermee?

- **Status:** concept (7 van 8 zinnen bevestigd, 0 geschrapt, 1 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 8 zin(nen) met een feit van buiten de eigen dienstverlening (toolprijs). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is Microsoft Copilot?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is Microsoft Copilot? (bestaand)
- **Antwoordalinea:** Microsoft Copilot is de AI-assistent van Microsoft voor werk, die taalmodellen koppelt aan apps zoals Outlook, Teams, Word, Excel en PowerPoint en aan de mail, agenda, chats, vergaderingen en documenten daarin. Microsoft onderscheidt grofweg twee niveaus (stand september 2026): Copilot Chat, volgens Microsoft zonder extra kosten beschikbaar bij een geschikt Microsoft 365-abonnement, en de betaalde licentie, waarmee Copilot kan redeneren over de volle breedte van de werkdata. Omdat Copilot de bestaande toegangsrechten volgt, komen te ruim gedeelde bestanden in antwoorden naar boven en hoort het opschonen van die rechten bij de voorbereiding.
- **Vervolgvragen:**
  1. *Wat kost een betaalde licentie voor Microsoft Copilot?* Copilot Business kost € 18,20 en Microsoft Copilot voor enterprise € 26,00 per gebruiker per maand, bij jaarlijkse betaling en exclusief btw (stand september 2026). Wie Copilot Business van 1 juli tot en met 31 december 2026 afsluit, betaalt het eerste jaar tijdelijk € 15,60.
  2. *Worden prompts en antwoorden gebruikt om de basismodellen achter Microsoft Copilot te trainen?* Nee, volgens wat Microsoft toezegt in de privacydocumentatie van Microsoft Copilot (stand september 2026): prompts, antwoorden en gegevens die via Microsoft Graph worden opgehaald, worden niet gebruikt om de basismodellen te trainen.
  3. *Welke data gebruikt Copilot Chat en welke de betaalde licentie van Microsoft Copilot?* Copilot Chat is vooral een chat die antwoordt op basis van het web en van wat de gebruiker zelf aanlevert, en kan in Outlook ook met mailbox, agenda en vergaderingen werken. Pas met de betaalde licentie werkt Microsoft Copilot breed met de eigen bedrijfsinformatie: Copilot kan dan redeneren over de volle breedte van de werkdata, zoals mail, chats, vergaderingen, documenten en sites, voor zover de gebruiker daar toegang toe heeft.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: eerste alinea onder 'Wat is Microsoft Copilot?', de twee niveaus onder 'Licenties' en de alinea over bestaande rechten onder 'Randvoorwaarden voor je data'. Vervolgvraag 1 en 3: prijstabel, opsomming en bijschrift van de matrix onder 'Licenties'. Vervolgvraag 2: punt 'Geen training op je data' met de inleidende zin erboven.

### `/kennisbank/notuleren-met-ai`

Pagina: Notuleren met AI: tools, werkwijze en privacy

- **Status:** concept (9 van 9 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 1 zin(nen) met een feit van buiten de eigen dienstverlening (wetgeving). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Hoe werkt notuleren met AI?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Hoe werkt notuleren met AI? (bestaand)
- **Antwoordalinea:** Bij vrijwel alle tools verloopt notuleren met AI in dezelfde stappen: de tool neemt het gesprek op, zet spraak om in tekst en herkent wie er spreekt, waarna een taalmodel van het transcript een samenvatting met besluiten en actiepunten maakt. De uitkomst is een concept dat een mens nog moet controleren: de voorzitter of eigenaar corrigeert het verslag en stelt het vast. Omdat een vergadering opnemen een verwerking van persoonsgegevens is, luidt het advies deelnemers vooraf te informeren en vast te leggen wat er wordt bewaard.
- **Vervolgvragen:**
  1. *Op welke manieren kan een tool meeluisteren bij notuleren met AI?* Er zijn bij notuleren met AI grofweg drie manieren: ingebouwd in het vergaderplatform, via een bot die als deelnemer aan de vergadering wordt toegevoegd, of via een app op de computer die het geluid lokaal opneemt. Die keuze bepaalt wie ziet dat er wordt opgenomen, waar de data terechtkomt en of het ook werkt bij externe vergaderingen.
  2. *Welke vergaderingen vragen extra voorzichtigheid bij notuleren met AI?* Vergaderingen waarin gevoelige onderwerpen langskomen, zoals gezondheid in een verzuimgesprek of een reorganisatie: daar is het advies bij notuleren met AI extra voorzichtig te zijn. Bij zulke vergaderingen staat de AI-notulist beter uit.
  3. *Waarmee begint het inrichten van notuleren met AI?* Met de keuze voor één tool die past bij het vergaderplatform en de taal en die zakelijk te contracteren is; het advies is medewerkers niet elk een eigen gratis tool te laten gebruiken. Daarna worden bij notuleren met AI de spelregels vastgelegd: bij welke vergaderingen de notulist aan mag, hoe dat wordt aangekondigd, wie het verslag controleert en hoe lang opnames en transcripten worden bewaard.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Hoe werkt notuleren met AI?' met het stappenschema, summary en de eerste alinea onder 'Privacy en AVG'. Vervolgvraag 1: de lijst met grofweg drie manieren van meeluisteren. Vervolgvraag 2: alinea 'Waar staat de data en wie kan erbij?'. Vervolgvraag 3: stap 1 en 2 onder 'Zo richt je het in'.

### `/kennisbank/prompt-engineering`

Pagina: Prompt engineering: betere resultaten uit AI

- **Status:** concept (7 van 7 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 2 zin(nen) met een feit van buiten de eigen dienstverlening (overig extern). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is prompt engineering?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is prompt engineering? (bestaand)
- **Antwoordalinea:** Prompt engineering is het zo formuleren van een AI prompt, de opdracht aan een taalmodel, dat het model doet wat bedoeld is en dat bij herhaling opnieuw doet. Voor de meeste zakelijke gebruikers komt het neer op een goede opdracht geven aan iemand die slim is maar de organisatie niet kent. Het advies is de uitkomst altijd te controleren, omdat een taalmodel overtuigend kan klinken en toch fout kan zitten.
- **Vervolgvragen:**
  1. *Wat betekent prompt engineering voor ontwikkelaars en voor andere medewerkers?* Voor ontwikkelaars die AI in software inbouwen is prompt engineering een echte discipline met tests en versiebeheer. Voor de meeste medewerkers is het eenvoudiger: zij leren een paar gewoontes aan die het verschil maken tussen een generiek antwoord en een bruikbaar concept.
  2. *Helpen zogenoemde ultieme prompts bij prompt engineering?* Ultieme prompts helpen soms, maar de leveranciers van de assistenten leggen bij prompt engineering zelf de nadruk op iets saaiers: helder formuleren, context geven, voorbeelden tonen en testen. Anthropic benadrukt dat eerst moet vaststaan wat een goed resultaat is en hoe dat wordt getoetst, voordat aan de prompt wordt geschaafd.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: eerste alinea onder 'Wat is prompt engineering?', de lede en de summary. Vervolgvraag 1: tweede alinea onder 'Wat is prompt engineering?'. Vervolgvraag 2: 'Zoeken naar de magische formule' onder 'Veelgemaakte fouten'.

### `/kennisbank/rpa-vs-ai-automatisering`

Pagina: RPA versus AI automatisering: wat past bij jou?

- **Status:** geverifieerd (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is robotic process automation (RPA)?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is robotic process automation (RPA)? (bestaand)
- **Antwoordalinea:** Robotic process automation is software die de handelingen van een medewerker in bestaande applicaties nabootst: door schermen klikken, gegevens overzetten tussen systemen en formulieren invullen volgens vaste regels. Het is vooral sterk bij regelgebaseerd, herhalend werk met gestructureerde input, maar de robot stopt of doet iets verkeerds als een scherm, een veldnaam of de volgorde van stappen verandert. AI automatisering kan wel omgaan met variatie en ongestructureerde informatie, en in de praktijk zit de meeste waarde in de combinatie: AI voor het deel dat begrip vraagt, RPA of een koppeling voor de vaste stappen.
- **Vervolgvragen:**
  1. *Is robotic process automation stabieler dan een API van de softwareleverancier?* Meestal niet: kan de leverancier van de software een API leveren, dan is dat meestal stabieler dan robotic process automation met een robot die door schermen klikt. De vuistregel is robotic process automation te kiezen als het proces stabiel is, de input vast ligt en er geen goede koppeling mogelijk is.
  2. *Heeft robotic process automation na de oplevering nog een eigenaar nodig?* Ja. Bij robotic process automation moet de robot worden aangepast bij elke wijziging in de onderliggende applicaties, terwijl een AI-toepassing periodiek getoetst moet worden omdat de kwaliteit ongemerkt kan verschuiven. Beide vragen om een eigenaar na de oplevering, en die kosten horen in de business case.
  3. *Bouwt de adviseur zelf robots voor robotic process automation of AI-toepassingen?* Nee. De adviseur bouwt zelf geen robots voor robotic process automation of AI-toepassingen, maar helpt bepalen welke aanpak bij het proces past, helpt bij het selecteren van een partij en begeleidt de uitvoering vanuit de kant van de opdrachtgever. Voor wie moet kiezen tussen leveranciers die allemaal zeggen beide te kunnen, is een onafhankelijke [Vendor Review](/diensten/vendor-review) een manier om de claims naast elkaar te leggen.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Wat is robotic process automation (RPA)?', lede, summary en 'RPA en AI combineren'. Vervolgvraag 1: vuistregel 'Kies RPA' onder 'Wanneer kies je wat?'. Vervolgvraag 2: alinea over beheer onder 'Verschillen tussen RPA en AI'. Vervolgvraag 3: slotalinea en de alinea over de Vendor Review.

### `/kennisbank/wat-doet-een-ai-consultant`

Pagina: Wat doet een AI consultant?

- **Status:** geverifieerd (9 van 9 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is een AI consultant?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is een AI consultant? (bestaand)
- **Antwoordalinea:** Een AI consultant adviseert organisaties over de keuzes rond kunstmatige intelligentie: welke problemen AI oplost en welke niet, wat het kost, welke risico's meespelen en wie waarvoor verantwoordelijk is. De kerntaken zijn strategie bepalen, use cases selecteren, de implementatie begeleiden en governance inrichten. Code schrijven en modellen trainen hoort meestal niet bij de rol: dat is het werk van een AI developer.
- **Vervolgvragen:**
  1. *Is elke AI consultant onafhankelijk van leveranciers?* Dat verschilt per AI consultant: er zijn grofweg twee soorten, namelijk onafhankelijke adviseurs die alleen aan advies verdienen en consultants die ook implementatiepartner of reseller van bepaalde platforms zijn. Beide soorten kunnen goed werk leveren, maar het verschil bepaalt hoe vrij het advies van de AI consultant is.
  2. *Wat is het risico als één partij zowel AI consultant als AI developer is?* Het wordt riskant als één partij de rol van AI consultant en die van AI developer heeft en aan de bouw verdient. Het advies heeft dan belang bij een grotere scope.
  3. *Wanneer loont een AI consultant?* Kort gezegd loont een AI consultant bij besluiten die duur of moeilijk terug te draaien zijn, bij interne patstellingen, als een investering verantwoord moet worden of als iets voor het eerst onder tijdsdruk gebeurt. Er zijn ook gevallen waarin een organisatie het beter zelf doet.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Wat is een AI consultant?', het diagram onder 'Taken van een AI consultant' en 'AI consultant versus AI developer'. Vervolgvraag 1: derde alinea onder 'Wat is een AI consultant?' en de FAQ over implementeren. Vervolgvraag 2: slotalinea onder 'AI consultant versus AI developer'. Vervolgvraag 3: 'Wanneer schakel je een AI consultant in?'.

### `/kennisbank/wat-doet-een-ai-developer`

Pagina: Wat doet een AI developer?

- **Status:** geverifieerd (7 van 7 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is een AI developer?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is een AI developer? (bestaand)
- **Antwoordalinea:** Een AI developer is een softwareontwikkelaar die toepassingen bouwt, test en onderhoudt waarin een AI-model een kernrol speelt. Omdat een AI-model een waarschijnlijk antwoord geeft dat fout kan zijn, bestaat een groot deel van het werk uit meten, testen en afvangen. Wat er gebouwd moet worden is de vraag van een AI consultant, hoe het goed gebouwd wordt die van de AI developer.
- **Vervolgvragen:**
  1. *Traint een AI developer zelf modellen?* Soms: met de titel AI developer is soms een machine learning engineer bedoeld die zelf modellen traint. Tegenwoordig is het vaker een ontwikkelaar die bestaande modellen van een leverancier inzet en daar een toepassing omheen bouwt.
  2. *Beslist een AI developer of een toepassing de investering waard is?* Doorgaans niet: een AI developer bepaalt doorgaans niet of de toepassing de investering waard is, kiest niet tussen leveranciers namens de organisatie en richt de governance niet in. Daar is een andere rol voor nodig: een AI consultant werkt aan business case, leverancierskeuze en governance en zit meestal aan de kant van de opdrachtgever.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Wat is een AI developer?' (eerste en tweede alinea), de summary en de tabel onder 'AI developer versus AI consultant'. Vervolgvraag 1: derde alinea onder 'Wat is een AI developer?'. Vervolgvraag 2: alinea 'Wat een AI developer doorgaans níét doet' onder 'Taken' en de tabel onder 'AI developer versus AI consultant'.

### `/kennisbank/wat-doet-een-bi-specialist`

Pagina: Wat doet een BI specialist?

- **Status:** concept (10 van 10 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 1 zin(nen) met een feit van buiten de eigen dienstverlening (toolprijs). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** antwoordalinea direct onder de bestaande H2 "Wat is een BI specialist?"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.
- **Vraagkop:** Wat is een BI specialist? (bestaand)
- **Antwoordalinea:** Een BI specialist zorgt dat een organisatie stuurt op cijfers die kloppen, overal hetzelfde betekenen en op tijd beschikbaar zijn. Het werk bestaat uit vragen ophalen bij de business, data uit bronsystemen samenbrengen, een datamodel met definities inrichten en rapportages en dashboards maken en uitleggen. Waar een BI specialist verklaart wat er is gebeurd, richt een AI specialist zich op voorspellen en op het automatiseren van taken met AI.
- **Vervolgvragen:**
  1. *Hoe verandert AI het werk van een BI specialist?* Doordat AI routinewerk van de BI specialist overneemt, worden datamodellering, definities en advies belangrijker. AI-functies in BI-platforms helpen bij het schrijven van berekeningen en queries, en de BI specialist controleert en verbetert. Een BI specialist die kan uitleggen hoe data tot stand komt en waar de beperkingen zitten, wordt waardevoller.
  2. *Is een BI specialist eerder nodig dan een AI specialist?* In de praktijk zijn een BI specialist en een AI specialist vaak allebei nodig, en in die volgorde. Een AI-toepassing op bedrijfscijfers is zo betrouwbaar als de definities en de data eronder; dat fundament is typisch het werk van een BI specialist.
  3. *Welke namen heeft de functie van BI specialist?* In de praktijk heeft de functie van BI specialist veel namen: BI consultant, BI developer, data analist of reporting specialist. De accenten verschillen: de een zit dichter bij de techniek, de ander dichter bij de business.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Wat is een BI specialist?', het schema onder 'Taken en vaardigheden' en de tabel onder 'BI specialist versus AI specialist'. Vervolgvraag 1: 'Hoe AI de rol verandert' en de summary. Vervolgvraag 2: alinea 'In de praktijk heb je ze vaak allebei nodig'. Vervolgvraag 3: tweede alinea onder 'Wat is een BI specialist?'.

## 8. Inzichten (artikelen) (12)

### `/inzichten/ai-adoptie-begint-bij-het-werk`

Pagina: AI-adoptie begint bij het werk

- **Status:** concept (12 van 12 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 1 zin(nen) met een feit van buiten de eigen dienstverlening (marktcijfer). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Het patroon dat zich overal herhaalt").
- **Vraagkop:** Waarom blijft AI-adoptie laag na de uitrol van een tool en wat werkt wel?
- **Antwoordalinea:** Bij AI-adoptie zien organisaties die AI-tools uitrollen doorgaans tien tot vijftien procent wekelijks gebruik, omdat een algemene AI-assistent geen enkel startpunt biedt en medewerkers onzeker zijn over wat mag. Wat wel werkt, is per rol drie tot vijf concrete scenario's aanbieden als kant-en-klaar startpunt, zoals een knop, een sjabloon of een vooraf ingevulde opdracht. Adoptie verspreidt zich via collega's, met ambassadeurs per team, en het advies is de meting uit te splitsen naar rol of team in plaats van één adoptiepercentage over de hele organisatie te gebruiken.
- **Vervolgvragen:**
  1. *Betekent lage AI-adoptie dat medewerkers er nog niet klaar voor zijn?* Bijna altijd niet: de conclusie dat medewerkers er nog niet klaar voor zijn, is bij lage AI-adoptie bijna altijd onjuist. Volgens het artikel zit het probleem in het ontwerp van de introductie en niet in de bereidheid. Bij twijfel over wat mag, doen medewerkers niets, en dat is verstandig gedrag bij onduidelijke regels.
  2. *Is één adoptiepercentage voor de hele organisatie genoeg om AI-adoptie te volgen?* Nee. Eén adoptiepercentage over de hele organisatie verbergt bij AI-adoptie waar het wel en niet werkt. Een meting per rol of team kijkt naar het wekelijkse gebruik, naar het gebruikte scenario en naar wat medewerkers doen die het één keer probeerden en niet terugkwamen.
  3. *Zijn klachten over beperkingen van de tool een slecht teken voor AI-adoptie?* Nee. Klachten over beperkingen betekenen dat de tool wordt gebruikt en gelden als signaal dat AI-adoptie op de goede weg is. Stilte betekent meestal dat medewerkers het hebben opgegeven.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: lede, 'Waarom een leeg invoerveld niet werkt', 'Wat wel werkt: scenario's in plaats van mogelijkheden', summary, 'Adoptie verspreidt zich via collega's' en 'Meet per rol, niet in totaal'. Vervolgvraag 1: 'Het patroon dat zich overal herhaalt' en de tweede drempel onder 'Waarom een leeg invoerveld niet werkt'. Vervolgvraag 2: 'Meet per rol, niet in totaal' en takeaway 'Meet per rol'. Vervolgvraag 3: 'Drie signalen dat je adoptie op de goede weg is'.

### `/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen`

Pagina: AI-agents: wat ze wel en niet kunnen

- **Status:** geverifieerd (9 van 9 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wat een agent anders maakt").
- **Vraagkop:** Voor welke taken zijn AI-agents geschikt en waar gaat het mis?
- **Antwoordalinea:** AI-agents zijn geschikt voor voorbereidend werk waar een mens daarna over beslist, voor stappen die zonder schade terug te draaien zijn en voor taken met een harde, controleerbare eindtoets. Het gaat mis bij processen waarin een fout onopgemerkt doorwerkt, bij handelingen met externe gevolgen, bij lange ketens zonder tussentoets en bij situaties zonder volledig logboek. Hoeveel autonomie een agent krijgt, is een keuze van de organisatie die afhangt van wat een fout kost en wie die fout opmerkt.
- **Vervolgvragen:**
  1. *Met welk autonomieniveau beginnen AI-agents volgens het advies?* Het advies is vrijwel altijd om AI-agents op niveau één of twee te laten beginnen, dus bij voorbereiden of voorstellen, ook als het model meer aankan. In die fase wordt duidelijk welke fouten werkelijk optreden, en die kennis is nodig om te bepalen waar de autonomie veilig omhoog kan.
  2. *Is een bevestigingsstap nodig als AI-agents berichten naar klanten sturen of betalingen starten?* Ja, standaard: bij handelingen van AI-agents met externe gevolgen, zoals een bericht naar een klant, een bestelling of een betaling, hoort een bevestigingsstap. De kosten van een fout landen dan buiten de organisatie en zijn niet terug te nemen.
  3. *Is een volledig logboek nodig bij het inzetten van AI-agents?* Ja, logging is niet optioneel: zonder volledig spoor van de stappen van AI-agents is een fout niet te reconstrueren. Zonder logboek van de gezette stappen, de geraadpleegde bronnen en de reden voor een gekozen route is een incident niet te onderzoeken; voor gereguleerde processen is dat geen optie en voor de rest is het onverstandig.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Waar agents goed werken', 'Waar agents stukgaan' en 'De vraag die je vooraf moet beantwoorden'. Vervolgvraag 1: 'Het autonomieniveau als bewuste keuze'. Vervolgvraag 2: 'Handelingen met externe gevolgen'. Vervolgvraag 3: 'Situaties zonder volledig logboek' en de takeaway 'Logging is niet optioneel'.

### `/inzichten/ai-governance-zonder-bureaucratie`

Pagina: AI-governance zonder bureaucratie

- **Status:** concept (9 van 10 zinnen bevestigd, 0 geschrapt, 1 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 1 zin(nen) met een feit van buiten de eigen dienstverlening (wetgeving). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Het echte risico van AI-governance").
- **Vraagkop:** Hoe richt een organisatie AI-governance in zonder dat het bureaucratie wordt?
- **Antwoordalinea:** AI-governance blijft licht als toepassingen eerst naar risico worden ingedeeld in laag, midden en hoog, zodat alleen de hoogste categorie het zwaarste regime krijgt. Daarnaast heeft een organisatie minimaal vier mechanismen nodig: één register van alle AI-toepassingen, één poort voor beoordeling vooraf, één periodieke toets en één escalatiepad. Het risico van te veel regelen is dat mensen eromheen gaan werken en er een schaduwpraktijk ontstaat met tools die niemand kent, terwijl de organisatie denkt in controle te zijn.
- **Vervolgvragen:**
  1. *Is een aparte AI-ethiekcommissie nodig voor AI-governance?* Meestal niet: voor AI-governance is het meestal beter om AI als onderwerp toe te voegen aan het gremium dat er binnen de bestaande risicostructuur al is. Dat gremium heeft mandaat en vergadert al.
  2. *Kan het register voor AI-governance een spreadsheet zijn?* Ja, als de spreadsheet klopt: voor AI-governance verslaat een spreadsheet die klopt een GRC-module die half gevuld is. Het register bevat per toepassing de eigenaar, het doel, het risiconiveau, de gebruikte data, de leverancier en het moment van de laatste beoordeling.
  3. *Is de risico-indeling voor AI-governance in drie niveaus ook een juridisch oordeel onder de Europese AI-verordening?* Nee. De indeling in drie niveaus is een werkmodel om binnen AI-governance het interne gesprek te structureren. De Europese AI-verordening hanteert een eigen classificatie, en het advies is de juridische afdeling of een gespecialiseerde adviseur te laten vaststellen waar toepassingen exact onder vallen.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Het echte risico van AI-governance', 'Begin bij risicoclassificatie, niet bij techniek' en 'De vier mechanismen die je minimaal nodig hebt'. Vervolgvraag 1: 'Wat je kunt overslaan'. Vervolgvraag 2: '1. Eén register'. Vervolgvraag 3: slotalinea onder de risicoclassificatie.

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

### `/inzichten/build-buy-of-partner`

Pagina: Build, buy of partner: wat past bij jouw situatie?

- **Status:** concept (9 van 9 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 2 zin(nen) met een feit van buiten de eigen dienstverlening (marktcijfer). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waarom deze keuze zwaarder weegt bij AI").
- **Vraagkop:** Wanneer kiest een organisatie bij AI voor build, buy of partner?
- **Antwoordalinea:** De keuze tussen build, buy of partner bij AI hangt af van vier vragen: is de toepassing onderscheidend, wat kost ze in jaar vijf, wie moet de uitkomst kunnen sturen en hoe verloopt de exit. Zelf bouwen past alleen bij wat een organisatie in de markt onderscheidt, kopen bij alles wat een commodity is, en een partner bij toepassingen waar sturing op de uitkomst nodig is zonder de techniek te bezitten. De opzet die het vaakst standhoudt is een mengvorm: de bouwstenen kopen, de laag met eigen kennis zelf bouwen en voor de implementatie een partner inschakelen.
- **Vervolgvragen:**
  1. *Blijft zelf bouwen bij build, buy of partner goedkoop na jaar één?* Vaak keert de conclusie om wanneer het onderhoud vijf jaar wordt doorgerekend en met een licentie vergeleken: bij build, buy of partner is bouwen goedkoop in jaar één. Een vuistregel uit de praktijk is dat het jaarlijkse onderhoud van een zelfgebouwde AI-toepassing tussen de 20% en 40% van de oorspronkelijke bouwkosten ligt.
  2. *Is kopen bij twijfel tussen build, buy of partner de goedkoopste manier om te leren wat nodig is?* Bijna altijd: bij twijfel tussen build, buy of partner is kopen bijna altijd de goedkoopste manier om te leren wat werkelijk nodig is. Later bouwen kan alsnog, met een scherpere specificatie.
  3. *Welk deel van wat organisaties zelf willen bouwen is bij build, buy of partner werkelijk onderscheidend?* Hooguit tien tot twintig procent, in de praktijk: zo veel van wat organisaties willen bouwen is werkelijk onderscheidend. De toets bij build, buy of partner is of de belangrijkste concurrent hetzelfde resultaat morgen bij een leverancier kan kopen: is dat zo, dan is het een commodity.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'De vier vragen die de keuze bepalen', summary en 'De hybride vorm die het vaakst werkt'. Vervolgvraag 1: 'Vraag 2: Wat kost het in jaar vijf?'. Vervolgvraag 2: slotalinea van 'Drie situaties waarin de keuze duidelijk is'. Vervolgvraag 3: 'Vraag 1: Is dit onderscheidend, of is het een commodity?'.

### `/inzichten/de-business-case-voor-ai`

Pagina: De business case voor AI, eerlijk berekend

- **Status:** concept (10 van 11 zinnen bevestigd, 0 geschrapt, 1 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 2 zin(nen) met een feit van buiten de eigen dienstverlening (toolprijs, overig extern). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waar AI-businesscases sneuvelen").
- **Vraagkop:** Wat hoort er in een business case voor AI die een jaar later nog standhoudt?
- **Antwoordalinea:** In een business case voor AI tellen bespaarde uren pas als besparing wanneer de kosten echt dalen, en hoort de volledige kostenkant: verbruik, beheer, integratie, verandering en governance. De uitkomst staat er als bandbreedte in, met de aannames over adoptie, volume en het omzetten van tijdwinst in geld zichtbaar bovenaan. Bij goedkeuring ligt vast welke cijfers na twaalf maanden worden gerapporteerd, wat de nulmeting is en bij welke uitkomst wordt bijgestuurd of gestopt.
- **Vervolgvragen:**
  1. *Telt extra tijd voor waardevol werk mee als besparing in een business case voor AI?* Nee. Meer tijd voor waardevol werk is echte waarde, maar geen financiële besparing. In een business case voor AI hoort die post bij de kwalitatieve baten en niet in de rekensom.
  2. *Stijgen de variabele kosten bij AI mee met het gebruik?* Ja. Bij AI wordt vaak betaald per verwerkt document, per gesprek of per verwerkte hoeveelheid tekst. Het artikel raadt aan voor een business case voor AI de kosten per transactie in de pilot te meten en te vermenigvuldigen met het verwachte volume bij volledige uitrol.
  3. *Hoe lang duurt de productiviteitsdip in de eerste weken?* Doorgaans vier tot acht weken. Het artikel raadt aan die dip op te nemen in een business case voor AI: dat maakt de case geloofwaardiger, niet zwakker.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: summary, 'De kostenkant: waar het meestal misgaat', 'Werk met bandbreedtes, niet met puntschattingen' en 'Spreek af wat je over een jaar meet'. Vervolgvraag 1: '1. Kostenreductie'. Vervolgvraag 2: takeaway 'Verbruikskosten schalen mee' en 'Verbruikskosten die meeschalen'. Vervolgvraag 3: 'Verandering en opleiding'.

### `/inzichten/freelance-ai-consultant-vs-agency-vs-big4`

Pagina: Freelance AI consultant vs agency vs Big 4

- **Status:** geverifieerd (10 van 10 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Wanneer kies je voor wie?").
- **Vraagkop:** Wanneer past een freelance AI consultant beter dan een agency of een Big 4-kantoor?
- **Antwoordalinea:** Een freelance AI consultant past bij afgebakende, besluitgedreven vraagstukken, zoals een strategiesprint, een vendorselectie of een second opinion op een businesscase, waar één senior adviseur snel en flexibel werkt. Een agency past wanneer vaststaat wat er gebouwd moet worden en er specialistische capaciteit nodig is, en een Big 4-kantoor bij grote transformaties en trajecten waar compliance leidend is. Geen van deze opties wint op alle punten: de keuze hangt af van het doel, de urgentie en de vereiste governance.
- **Vervolgvragen:**
  1. *Waar verliest een freelance AI consultant het van een agency of een Big 4-kantoor?* Een freelance AI consultant verliest zodra er volume nodig is, zoals bij een implementatie met acht ontwikkelaars of een programma dat twee jaar loopt. Bij bus-factor-gevoelige trajecten is een eenmanspraktijk bovendien een reëel risico, een probleem dat een agency of Big 4 niet heeft.
  2. *Is de keuze tussen een freelance AI consultant, een agency en een Big 4-kantoor altijd een zuivere keuze?* Zelden: in de praktijk is een zuivere keuze tussen een freelance AI consultant, een agency en een Big 4-kantoor zelden te zien. De opzet die het vaakst goed uitpakt, is een onafhankelijke senior voor de strategie en de selectie en een agency of systeemintegrator voor de bouw, met de adviseur tijdens de bouw aan de kant van de opdrachtgever. De adviseur heeft dan geen belang bij de scope-groei van de implementatie.
  3. *Welke vragen over belangen bij leveranciers horen ook bij een freelance AI consultant?* De vier vragen over vergoedingen of partnerstatus, een eigen implementatiepraktijk, de verhouding tussen omzet uit implementatie en advies en afrekening op vervolgomzet zijn bedoeld voor elke partij, ongeacht de grootte, dus ook voor een freelance AI consultant. Een partij die een belang benoemt en uitlegt hoe ze daarmee rekening houdt, is betrouwbaarder dan een partij die zegt volledig onafhankelijk te zijn zonder dat te onderbouwen.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Wanneer kies je voor wie?', de drie optieblokken onder '2. Wat betekent dit in de praktijk?', 'Waar de freelancer wint' en '4. Hoe maak je de juiste keuze?'. Vervolgvraag 1: 'Waar de freelancer verliest'. Vervolgvraag 2: '5. De combinatie die vaak het beste werkt'. Vervolgvraag 3: '3. Het conflict-of-interest-gesprek'.

### `/inzichten/het-datafundament-onder-ai`

Pagina: Het datafundament onder je AI-initiatieven

- **Status:** geverifieerd (10 van 10 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Twee waarheden die elkaar tegenspreken").
- **Vraagkop:** Moet het datafundament eerst op orde zijn voordat een organisatie met AI begint?
- **Antwoordalinea:** Een perfect datafundament is niet nodig om met AI te beginnen: genoeg fundament voor één use case volstaat. De aanpak die in de praktijk werkt, kiest eerst één use case met duidelijke waarde en een eigenaar in de lijn, en lost alleen voor de bronnen van die use case de definities, de herkomst en de kwaliteit op. Na drie of vier use cases is er zo een fundament ontstaan uit gebruik, kleiner dan het ideaalplaatje en aanzienlijk betrouwbaarder.
- **Vervolgvragen:**
  1. *Is een centraal datawarehouse nodig voor het datafundament onder een eerste AI-use case?* Vaak niet: voor het datafundament onder een eerste use case is een dagelijkse export vaak genoeg. Toegankelijkheid en infrastructuur zijn meestal het minst urgente dataprobleem en in de praktijk vaak het makkelijkst op te lossen, zeker voor één use case.
  2. *Zijn er situaties waarin eerst het datafundament aanpakken wel het juiste antwoord is?* Ja. Uitstellen is verstandig bij drie signalen rond het datafundament: de kernentiteit is niet eenduidig, de benodigde data wordt niet vastgelegd of de bron heeft geen eigenaar. Die signalen gaan over betekenis en eigenaarschap, niet over technologie.
  3. *Hoeveel begrippen worden gedefinieerd om het definitieprobleem in het datafundament aan te pakken?* Vijf tot tien: de aanpak voor het definitieprobleem in het datafundament is alleen de begrippen te definiëren die de use case raakt, niet het hele bedrijfsdatamodel. Volgens het artikel is dat twee weken werk in plaats van twee jaar.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: summary, 'Twee waarheden die elkaar tegenspreken' en 'De use-case-gedreven volgorde'. Vervolgvraag 1: 'Probleem 4: Toegankelijkheid en infrastructuur'. Vervolgvraag 2: 'Wanneer "eerst de data" wél het juiste antwoord is'. Vervolgvraag 3: 'Probleem 1: Definities'.

### `/inzichten/van-ai-strategie-naar-waarde`

Pagina: Van AI-strategie naar echte waarde

- **Status:** geverifieerd (11 van 11 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Waar het misgaat tussen strategie en resultaat").
- **Vraagkop:** Hoe wordt een AI-strategie omgezet in meetbaar resultaat?
- **Antwoordalinea:** Een AI-strategie wordt uitvoerbaar met drie vertaalslagen: ambitie vertalen naar meetbare business-uitkomsten, per use case één eigenaar kiezen met budget en mandaat, en waarde meten op het niveau waarop die is beloofd. De meeste AI-strategieën stranden niet op de strategie zelf, maar op de vertaling ervan. Een portfolio van vier use cases met eigenaren, meetpunten en stopcriteria levert meer op dan een roadmap met twintig initiatieven waar niemand over gaat.
- **Vervolgvragen:**
  1. *Hoort het eigenaarschap van een use case uit de AI-strategie bij de AI-lead of het datateam?* Nee. Het eigenaarschap bij de AI-lead of het datateam leggen is een valkuil: die kunnen bouwen en adviseren, maar zitten niet op de P&L waar de waarde moet landen. De eigenaar van een use case uit de AI-strategie hoort in de business te zitten.
  2. *Bewijzen gebruikscijfers dat een AI-strategie waarde oplevert?* Nee. Gebruiksstatistieken zijn nuttig als vroege indicator, maar geen bewijs van waarde bij een AI-strategie. Een businesscase die in euro's of uren is geformuleerd, vraagt uiteindelijk om rapportage in euro's of uren, ook als dat lastiger meetbaar is.
  3. *Is een nulmeting nodig om het resultaat van een AI-strategie aan te tonen?* Bijna altijd: het meten van het businessresultaat van een AI-strategie vraagt bijna altijd om een nulmeting vóór de start. Die nulmeting is twee dagen werk, en zonder is een jaar later niets hard te maken.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: excerpt, summary, 'Waar het misgaat tussen strategie en resultaat' en 'Wat dit in de praktijk oplevert'. Vervolgvraag 1: valkuil onder 'Stap 2: Beleg eigenaarschap met budget en mandaat'. Vervolgvraag 2 en 3: 'Stap 3: Meet op het niveau waarop je het beloofde'.

### `/inzichten/waarom-ai-pilots-blijven-steken`

Pagina: Waarom AI-pilots blijven steken

- **Status:** geverifieerd (10 van 10 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("De pilotparadox").
- **Vraagkop:** Waardoor worden geslaagde AI-pilots zelden opgeschaald naar productie?
- **Antwoordalinea:** AI-pilots blijven steken door oorzaken die geen van alle technisch zijn: de pilot beantwoordt alleen of iets technisch kan, draait buiten het echte werkproces, heeft geen eigenaar voor de fase erna, rekent het beheer niet mee en vermijdt de organisatorische verandering. Een pilot toont haalbaarheid aan en geen waarde. Wat in de praktijk goed werkt, is vóór de start de te beantwoorden vraag, de stopcriteria, de opschaaleigenaar, de beheerraming en de benodigde verandering op één pagina vast te leggen.
- **Vervolgvragen:**
  1. *Kunnen AI-pilots beter in de echte werkomgeving draaien dan in een aparte omgeving?* Ja, voor AI-pilots geldt als tegenmaatregel: liever een kleinere scope in de echte omgeving dan een grotere scope ernaast, met één team, echte data, het echte proces en echte koppelingen. Die opzet is trager in week één en aanzienlijk sneller in maand zes.
  2. *Moet de opschaaleigenaar van AI-pilots al voor de start bekend zijn?* Ja. De opschaaleigenaar van AI-pilots wordt aangewezen voordat de pilot begint: iemand uit de lijn, met budget en een plek in de pilotstuurgroep. Is die persoon niet te vinden, dan is dat zelf een belangrijke uitkomst.
  3. *Kunnen AI-pilots doorgaan als er in de organisatie niets mag veranderen?* Ja, maar de businesscase van AI-pilots wordt dan doorgerekend zonder de besparing die verandering vereist. Vaak blijft er dan een reële, kleinere waarde over, en dat is een eerlijker startpunt dan een belofte die later niet waargemaakt kan worden.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'De pilotparadox', de vijf oorzaak-koppen, summary en 'Een pilotcontract van één pagina'. Vervolgvraag 1: tegenmaatregel bij oorzaak 2. Vervolgvraag 2: tegenmaatregel bij oorzaak 3. Vervolgvraag 3: tegenmaatregel bij oorzaak 5.

### `/inzichten/wanneer-heb-je-echt-een-ai-strateeg-nodig`

Pagina: Wanneer heb je echt een AI-strateeg nodig?

- **Status:** geverifieerd (10 van 10 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Eerst: wanneer je het zelf beter kunt").
- **Vraagkop:** In welke situaties loont het om een AI-strateeg in te huren?
- **Antwoordalinea:** Een AI-strateeg inhuren loont in vier situaties: bij een duur besluit dat moeilijk terug te draaien is, bij een interne patstelling, bij een investering die aan een board of toezichthouder moet worden uitgelegd, en bij een eerste keer onder hoge tijdsdruk. Bij technische en afgebakende vragen, kleine omkeerbare besluiten, een interne lead met mandaat of een besluit dat al genomen is, voegt externe hulp weinig toe. Voor de meeste organisaties geldt een afgebakende opdracht of een deeltijdrol van een paar dagen per maand.
- **Vervolgvragen:**
  1. *Wat voegt een AI-strateeg toe bij de keuze van een kleine, maandelijks opzegbare tool?* Weinig: bij een klein en omkeerbaar besluit is een AI-strateeg externe hulp die weinig toevoegt, omdat de tijd voor een afweging meer kost dan het experiment. Het advies is zo'n tool gewoon te proberen en analysekracht te bewaren voor besluiten die niet makkelijk terug te draaien zijn.
  2. *Heeft het zin een AI-strateeg in te huren om een al genomen besluit te bekrachtigen?* Nee. Een AI-strateeg inhuren om een gekozen richting te bekrachtigen is verspilling, omdat er niets nieuws uit komt en elke afwijkende bevinding wordt weggemasseerd. Een onafhankelijke onderbouwing voor een board of toezichthouder is iets anders dan legitimatie kopen, omdat de uitkomst daar nog open staat.
  3. *Welke omvang van een opdracht voor een AI-strateeg klopt meestal?* Voor de meeste organisaties geldt een afgebakende opdracht voor een AI-strateeg van twee tot zes weken, of een deeltijdrol van een paar dagen per maand. Een traject dat langer duurt zonder tussentijdse beslismomenten, is zelden in het belang van de opdrachtgever.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Wanneer externe hulp wél loont', 'Eerst: wanneer je het zelf beter kunt' en 'De omvang die meestal klopt'. Vervolgvraag 1: openingszin van 'Eerst: wanneer je het zelf beter kunt' en '2. Het besluit is klein en omkeerbaar'. Vervolgvraag 2: '4. Het besluit is al genomen' en '3. Je moet iets aan een board of toezichthouder uitleggen'. Vervolgvraag 3: 'De omvang die meestal klopt'.

### `/inzichten/welke-ai-use-cases-leveren-resultaat`

Pagina: Welke AI-use cases leveren écht resultaat op?

- **Status:** concept (10 van 10 zinnen bevestigd, 0 geschrapt, 0 voorgelegd, 0 bevinding(en) open)
- **Externe feiten:** 1 zin(nen) met een feit van buiten de eigen dienstverlening (marktcijfer). Het blok blijft daarom concept; zie docs/rag-verificatie.md.
- **Bloktype:** kennisbank
- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("Het patroon achter de winnaars").
- **Vraagkop:** Waaraan zijn AI-use cases te herkennen die resultaat opleveren?
- **Antwoordalinea:** AI-use cases die resultaat opleveren, delen vier kenmerken: een hoog volume met weinig variatie, fouten waarvan de kosten bekend en betaalbaar zijn, een menselijke controlestap die al in het proces zit en data die al bestaat en al voor beslissingen wordt gebruikt. Technologie komt in geen van die vier kenmerken voor. Vrijwel altijd stranden de assistent die alles kan, het voorspelmodel zonder besluit erachter, de use case zonder eigenaar in de lijn en de automatisering van een proces dat beter afgeschaft kan worden.
- **Vervolgvragen:**
  1. *Geldt iedereen een AI-assistent geven als een van de AI-use cases?* Nee. Iedereen een AI-assistent geven hoort niet bij de AI-use cases: het is geen use case maar een licentie, en zonder afgebakende scenario's blijft het gebruik hangen rond de tien procent. Het advies bij zo'n AI-assistent is drie tot vijf concrete taken te kiezen, daar kant-en-klare startpunten voor te maken en pas later vrijheid toe te voegen.
  2. *Wat gebeurt er met AI-use cases die beginnen met het verzamelen van data?* AI-use cases die beginnen met eerst data verzamelen, schuiven minstens een jaar op. Soms is dat de juiste investering, maar dan heet het een datatraject en geen AI-use case.
  3. *Welke AI-use cases gaan bij het prioriteren niet eerst?* AI-use cases die onder de 15 punten scoren, gaan niet eerst; bij het prioriteren worden meestal vijf vragen gebruikt, elk met een score van 1 tot 5. De vijf vragen gaan over volume, variatie, datagereedheid, veiligheid en trekkracht.
- **Bronregel:** Bron: artikel van Dave Willemstein.
- **Herkomst:** Antwoord: 'Het patroon achter de winnaars' met de vier genummerde kenmerken en 'Vier patronen die vrijwel altijd stranden'. Vervolgvraag 1: 'De assistent die alles kan'. Vervolgvraag 2: '4. De data bestaat al en wordt al gebruikt'. Vervolgvraag 3: 'Een praktische scoringsvraag'.

## Wacht op publicatie (5)

Deze pagina's staan op `noindex`. Hun concepten staan alleen in `docs/rag-concepten.json`, zijn niet herzien of geverifieerd en worden niet geplaatst:

- `/markten/zorg`
- `/markten/marketing`
- `/markten/onderwijs`
- `/markten/luchtvaart`
- `/markten/overheid`
