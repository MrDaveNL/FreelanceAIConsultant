# RAG-blokken: herschreven vraagkoppen en vervolgvragen

Stand: 6 oktober 2026 · ter beoordeling · er is niets geplaatst en aan deze vragen is na de herziening niets meer gewijzigd

Dit bestand zet naast elkaar wat er in de herzieningsronde aan vragen is veranderd: elke vraagkop en elke vervolgvraag die is geherformuleerd of teruggezet. "Oud" is de tekst van vóór de eerste verificatie, "nieuw" de tekst na de herziening.

- **Geherformuleerd:** de vraag heeft een andere formulering gekregen, meestal omdat de oude vraag iets veronderstelde dat de bron niet zegt of om een kaal ja of nee vroeg waar de bron een voorbehoud maakt.
- **Teruggezet:** de vraag was in de eerste verificatieronde geschrapt en staat er nu weer, met een antwoord in de stelligheid van de bron.
- Een vraag kan beide zijn.

De vragen zijn per blok op volgorde gekoppeld (eerste oude vraag naast eerste nieuwe vraag). De nieuwe tekst toont de tokens zoals ze in de databron staan, bijvoorbeeld `{{dienst:vendor-review}}`. Staat er bij een vraag "inmiddels vervallen", dan is hij in de ronde daarna alsnog geschrapt (zie `docs/rag-verificatie.md`).

## 1. Gewijzigde vraagkoppen (4)

| Pagina | Oud | Nieuw |
|---|---|---|
| `/ai-beleid` | Wat hoort er in een AI beleid en met welke dienst begint een organisatie? | Wat hoort er in een AI beleid en welke dienst past erbij? |
| `/ai-development/ai-oplossingen` | Wat kost advies over AI oplossingen op maat en wie bouwt ze? | Wie bouwt AI oplossingen op maat en welke rol heeft de onafhankelijk adviseur? |
| `/ai-workshop/chatgpt-training` | Wat levert een ChatGPT training een team op en hoe wordt de prijs bepaald? | Wat leren deelnemers in een ChatGPT training en hoe is de prijs geregeld? |
| `/kennisbank/ai-specialist-salaris` | Hoe hoog is een AI specialist salaris in Nederland? | Wat zeggen de salarisbronnen over een AI specialist salaris in Nederland? |

## 2. Vervolgvragen in de geplaatste pilotblokken (4)

Alle vier geherformuleerd. De volledige antwoorden staan in `docs/rag-pilot.md`, onder "Vervolg 3".

| Pagina | Nr. | Oud | Nieuw |
|---|---|---|---|
| `/ai-consultancy/ai-strategie` | 1 | Is een AI strategie goedkoper als er al een AI Readiness Assessment ligt? | Is de AI Strategy Sprint voor een AI strategie goedkoper als er al een AI Readiness Assessment ligt? |
| `/ai-consultancy/ai-strategie` | 2 | Kan de uitkomst zijn dat een organisatie nog niet klaar is voor een AI strategie? | Kan de uitkomst van het AI Readiness Assessment zijn dat een organisatie nog niet klaar is? |
| `/ai-consultancy/ai-consultant-inhuren` | 1 | Wat is het kleinste pakket om een AI consultant in te huren? | Wat is het kleinste pakket met een vaste prijs om een AI consultant in te huren? |
| `/ai-consultancy/ai-consultant-inhuren` | 2 | Kan een AI consultant inhuren ook zonder vast pakket? | Kan een AI consultant inhuren ook voor afgebakend advies? |

## 3. Vervolgvragen in de concepten (113 geherformuleerd, 30 teruggezet)

### `/ai-agents`

**Vervolgvraag 2** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Zijn AI agents binnen een bestaand softwareplatform goedkoper om mee te starten dan maatwerk? | Ja. AI agents binnen het platform van een bestaande softwareleverancier zijn sneller en vaak goedkoper om mee te beginnen, maar de organisatie is gebonden aan wat dat platform kan en aan de prijsontwikkeling van de leverancier. Maatwerk geeft meer controle, met kosten voor beheer en doorontwikkeling. |
| Nieuw | Zijn AI agents binnen een bestaand softwareplatform goedkoper om mee te beginnen? | Vaak wel: AI agents binnen het platform van een softwareleverancier zijn sneller en vaak goedkoper om mee te beginnen, maar de organisatie is gebonden aan wat dat platform kan en aan de prijsontwikkeling van de leverancier. Maatwerk geeft meer controle, met kosten voor beheer en doorontwikkeling. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Verdient de adviseur aan de bouw van AI agents? | Nee. AI agents worden gebouwd door een partij die de opdrachtgever rechtstreeks contracteert, zonder marge voor de adviseur. De adviseur helpt bepalen welke taak geschikt is, wat van een bouwpartij gevraagd moet worden en hoe de uitvoering bewaakt wordt. |
| Nieuw | Bouwt de adviseur zelf AI agents? | Nee. De adviseur bouwt zelf geen AI agents en helpt bepalen welke taak geschikt is, wat van een bouwpartij gevraagd moet worden en hoe de uitvoering bewaakt wordt. Partijen uit het partnernetwerk die de adviseur voorstelt, contracteert de opdrachtgever rechtstreeks, zonder marge voor de adviseur. |

### `/ai-agents/laten-maken`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Stelt de bouwpartij de specificatie van een AI agent op? | Nee. De specificatie van een AI agent stelt de opdrachtgever zelf op, eventueel met een onafhankelijke adviseur, en pas daarna komt een bouwpartij in beeld. Een specificatie van de partij die ook bouwt, sluit vooral aan op wat die partij het liefst maakt. |
| Nieuw | Wie stelt de specificatie van een AI agent op? | In een goed traject stelt de opdrachtgever de specificatie van een AI agent zelf op, niet de bouwpartij; dat kan ook met een onafhankelijke adviseur, en pas daarna komt een bouwpartij in beeld. Een specificatie die wordt overgelaten aan de partij die ook bouwt, past bij wat die partij het liefst maakt. |

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Hangt de prijs van de Vendor Review af van het aantal bouwpartijen voor een AI agent? | Ja. De {{dienst:vendor-review}} kost {{pricelc:vendor-review}}, afhankelijk van het aantal leveranciers dat wordt vergeleken: 2 tot 4. Het bedrag is exclusief btw en reiskosten. |
| Nieuw | Hangt de prijs van de Vendor Review af van het aantal leveranciers? | Ja. De {{dienst:vendor-review}} kost {{pricelc:vendor-review}}, afhankelijk van het aantal leveranciers (2 tot 4). De bedragen zijn {{voorwaarden}}. |

**Vervolgvraag 3** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Krijgt een AI agent een eigen account in de systemen van de organisatie? | Ja. Een AI agent logt in met een eigen account, zodat zijn handelingen herleidbaar zijn, en krijgt niet meer rechten dan voor de taak nodig is. Op elk onomkeerbaar moment blijft er bij een AI agent een bevestigingsstap. |
| Nieuw | Waar let een organisatie op bij de beveiliging van een AI agent? | Een AI agent die systemen aanroept, is een nieuwe gebruiker in het IT-landschap. Het is zaak de AI agent niet meer rechten te geven dan nodig, hem te laten inloggen met een eigen account zodat zijn handelingen herleidbaar zijn, en een bevestigingsstap te houden op elk onomkeerbaar moment. |

### `/ai-agents/voorbeelden`

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Mag een agent uit de AI agents voorbeelden voor finance zelf boeken of betalen? | Nee. In de AI agents voorbeelden voor finance stelt de agent voor en bevestigt een medewerker elke boeking, omdat een fout in een boeking doorwerkt in rapportages en aangiftes. Afwijkingen en betaalbeslissingen blijven bij de crediteurenadministratie. |
| Nieuw | Boekt of betaalt de agent in de AI agents voorbeelden voor finance zelf? | Nee. In de AI agents voorbeelden voor finance stelt de agent voor en bevestigt een medewerker elke boeking, omdat een fout in een boeking doorwerkt in rapportages en aangiftes. Afwijkingen en betaalbeslissingen blijven bij de crediteurenadministratie. |

### `/ai-agents/wat-is-een-ai-agent`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Draait een AI agent meestal op een taalmodel? | Ja. De meeste AI agents draaien op een groot taalmodel dat de opdracht begrijpt en over de volgende stap redeneert. Wat van dat taalmodel een AI agent maakt, zijn de onderdelen eromheen: toegang tot tools en systemen, een geheugen voor de lopende taak en instructies over wat wel en niet mag. |
| Nieuw | Draait een AI agent op een taalmodel? | De meeste wel: de meeste AI agents van nu draaien op een groot taalmodel, dat de opdracht begrijpt en over de volgende stap redeneert. Wat van dat taalmodel een AI agent maakt, zijn de onderdelen eromheen: toegang tot tools en systemen, een geheugen voor de lopende taak en instructies over wat wel en niet mag. |

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is een fout van een AI agent altijd te zien aan het eindresultaat? | Nee. Een AI agent zet meerdere stappen achter elkaar, waardoor een fout uit een vroege stap kan doorwerken zonder dat het eindresultaat er verkeerd uitziet. Logging en tussencontroles zijn bij een AI agent daarom belangrijker dan bij een gewone AI-toepassing. |
| Nieuw | Kan een fout van een AI agent doorwerken zonder dat het eindresultaat er verkeerd uitziet? | Ja, dat kan: een AI agent zet meerdere stappen achter elkaar, waardoor een fout uit een vroege stap kan doorwerken tot in het eindresultaat zonder dat het er verkeerd uitziet. Logging en tussencontroles zijn bij een AI agent daarom belangrijker dan bij een gewone AI-toepassing. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Hoeveel vormen van opbouw heeft een AI agent? | Drie vormen: een enkelvoudige AI agent voor één afgebakende taak, een AI agent binnen een AI-workflow met een vaste procesflow, en samenwerkende agents waarbij een coördinerende agent het werk verdeelt. Voor de meeste organisaties is de AI agent binnen een workflow het verstandigste startpunt. |
| Nieuw | Welke vormen van opbouw komen bij een AI agent voor? | Grofweg drie vormen: een enkelvoudige AI agent voor één afgebakende taak, een AI agent binnen een AI-workflow met een vaste procesflow, en samenwerkende agents waarbij een coördinerende agent het werk verdeelt. Voor de meeste organisaties is de AI agent binnen een workflow het verstandigste startpunt. |

### `/ai-automatisering`

**Vervolgvraag 3** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is voor AI automatisering altijd maatwerk nodig? | Nee. De meeste AI automatisering draait op een workflowplatform dat bestaande systemen koppelt en alleen een AI-stap toevoegt waar dat nodig is. Prijzen en functies van zulke platforms veranderen snel en horen bij de leverancier zelf gecontroleerd te worden. |
| Nieuw | Is voor AI automatisering maatwerk nodig? | Voor de meeste AI automatisering is geen maatwerk nodig. Een workflowplatform verbindt bij AI automatisering de systemen van de organisatie en voegt een AI-stap toe waar dat nodig is. Prijzen en functies van zulke platforms veranderen snel en horen bij de leverancier zelf gecontroleerd te worden. |

### `/ai-automatisering/ai-tools`

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is een demo genoeg om uit de beste AI tools te kiezen? | Nee. Ook bij de beste AI tools geldt dat één team een nieuwe tool eerst een paar weken op echt werk gebruikt, met een vooraf afgesproken vraag die de proef moet beantwoorden. Kandidaten worden vergeleken op dezelfde taak met eigen voorbeelden. |
| Nieuw | Hoe wordt een nieuwe AI-tool uitgeprobeerd bij het kiezen van de beste AI tools? | Het advies bij elke nieuwe AI-tool is om één team die een paar weken op echt werk te laten gebruiken, met een vooraf afgesproken vraag die de proef moet beantwoorden, niet met iedereen tegelijk en niet op basis van een demo. Voor een keuze uit de beste AI tools die meer dan een paar licenties raakt, worden de kandidaten getest op dezelfde taak met eigen voorbeelden. |

### `/ai-automatisering/ai-workflows`

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Kan een AI workflow zonder IT-team of externe partner worden gebouwd? | Ja. Een eenvoudige AI workflow kan een handige collega in een no-code-platform maken. Zodra er koppelingen met kernsystemen of gevoelige gegevens bij komen, is een IT-team nodig of een partner die de opdrachtgever rechtstreeks contracteert. |
| Nieuw | Wie bouwt een AI workflow? | Een eenvoudige stroom van een AI workflow kan een handige collega in een no-code-platform bouwen. Zodra er koppelingen met kernsystemen of gevoelige gegevens bij komen, is een IT-team of partner nodig, en die partner contracteert de opdrachtgever rechtstreeks. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | In hoeveel stappen komt een AI workflow in gebruik? | Vijf stappen: één proces kiezen en vooraf meten, de route uittekenen met de mensen die het werk doen, bepalen wie bouwt, testen met echte voorbeelden en het beheer regelen vóór livegang. In de testfase loopt de AI workflow een paar weken naast het huidige proces. |
| Nieuw | Hoeveel stappen telt het implementeren van een AI workflow? | In de praktijk gaat het implementeren van een AI workflow in vijf stappen: één proces kiezen en vooraf meten, de route uittekenen met de mensen die het werk nu doen, bepalen wie bouwt, testen met echte voorbeelden en het beheer regelen vóór livegang. Bij het testen hoort dat de AI workflow een paar weken naast het huidige proces loopt. |

### `/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Mag de AI bij bedrijfsprocessen automatiseren zelf versturen, boeken of betalen? | Nee. Bij bedrijfsprocessen automatiseren met AI wordt vooraf vastgelegd dat de AI voorstelt en voorbereidt, en dat versturen, boeken en betalen daarbuiten vallen. Ook wordt vastgelegd wat er gebeurt als de AI twijfelt. |
| Nieuw | Wat wordt bij bedrijfsprocessen automatiseren met AI vastgelegd over wat de AI mag? | Vastgelegd wordt bij bedrijfsprocessen automatiseren met AI dat de AI voorstelt en voorbereidt, en dat versturen, boeken en betalen daar niet bij horen. Ook wat er gebeurt als de AI twijfelt, wordt vastgelegd. |

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is één berekening genoeg om de besparing van bedrijfsprocessen automatiseren met AI in te schatten? | Nee. Bij bedrijfsprocessen automatiseren met AI horen naast de basisberekening extra scenario's: een pessimistisch scenario met lagere adoptie en meer controletijd, en een scenario met het dubbele volume, omdat verbruikskosten meestal meegroeien met het gebruik. Bespaarde uren tellen pas als besparing wanneer ze elders aantoonbaar iets opleveren, zoals minder inhuur. |
| Nieuw | Welke scenario's horen bij het inschatten van de besparing van bedrijfsprocessen automatiseren met AI? | Twee scenario's horen bij bedrijfsprocessen automatiseren met AI naast de berekening: een pessimistisch scenario met lagere adoptie en meer controletijd, en een scenario met het dubbele volume, omdat verbruikskosten meestal meegroeien met het gebruik. Dat geeft een bandbreedte in plaats van één bedrag. Bespaarde uren zijn pas iets waard als ze ergens anders aantoonbaar iets opleveren, bijvoorbeeld minder inhuur. |

### `/ai-beleid`

**Vervolgvraag 1** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is een AI beleid haalbaar voor een mkb-bedrijf zonder compliance-afdeling? | Ja. Een AI beleid voor het mkb past op één tot drie pagina's die iedereen in tien minuten kan lezen. Het stappenplan loopt van inventariseren wat er al gebruikt wordt tot evalueren na drie maanden, en er is een [AI-beleid template (pdf)](/downloads/ai-beleid-template.pdf) met dezelfde opzet. |
| Nieuw | Wat heeft een mkb-bedrijf nodig aan AI beleid? | Een mkb-bedrijf hoeft geen AI beleid van twintig pagina's te hebben; wat wel nodig is, is een AI-beleid dat iedereen in tien minuten kan lezen en dat antwoord geeft op de vragen die medewerkers echt hebben. Het stappenplan loopt van inventariseren wat er al gebruikt wordt tot evalueren na drie maanden, met als stap het schrijven van de eerste versie op één tot drie pagina's. Het [AI-beleid template (pdf)](/downloads/ai-beleid-template.pdf) heeft in te vullen velden, tabellen voor tools en gegevenscategorieën en een checklist om af te ronden. |

**Vervolgvraag 2** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Vraagt de AI Act om een certificaat voor AI-geletterdheid in het AI beleid? | Nee. Volgens de Europese Commissie is een certificaat niet nodig: een organisatie kan intern bijhouden welke trainingen en andere initiatieven zijn ingezet. Sinds de Digital Omnibus, in werking sinds 27 juli 2026, moet een organisatie maatregelen nemen om AI-geletterdheid te ondersteunen, en het AI beleid is de plek om die vast te leggen. |
| Nieuw | Is voor AI-geletterdheid onder de AI Act een certificaat nodig? | Nee, volgens de Europese Commissie is een certificaat niet nodig: een organisatie kan intern bijhouden welke trainingen en andere initiatieven zijn ingezet. De plicht rond AI-geletterdheid geldt sinds 2 februari 2025 en is met de Digital Omnibus, die op 27 juli 2026 in werking trad, aangepast: een organisatie moet maatregelen nemen om AI-geletterdheid te ondersteunen, zonder dat een bepaald niveau per persoon wordt voorgeschreven. Een AI beleid is de logische plek om die maatregelen vast te leggen. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Hoort bij een AI beleid een aparte commissie voor AI governance? | Nee. AI governance werkt lichter als AI wordt toegevoegd aan het risico-overleg of de stuurgroep die al bestaat. Ontbreekt de capaciteit om dat zelf te trekken, dan kan de {{dienst:fractional-ai-lead}} de governance en cadans opzetten en bewaken. |
| Nieuw | Vraagt AI governance bij een AI beleid om een nieuwe commissie? | Nee, het advies is AI toe te voegen aan het risico-overleg of de stuurgroep die al bestaat, in plaats van een nieuwe commissie op te tuigen: het belangrijkste punt is dat governance wordt gekoppeld aan wat er al is. Het uitgangspunt voor de governance rond een AI beleid is licht waar het kan en zwaar alleen waar het risico dat rechtvaardigt. |

### `/ai-beleid/ai-act`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Kan een gebruiker onder de AI Act voor bedrijven ongemerkt aanbieder worden? | Ja. Volgens artikel 25 gebeurt dat bij een hoog-risicosysteem wanneer een organisatie er de eigen naam of het eigen merk op zet, het ingrijpend wijzigt of een systeem zo inzet dat het een hoog-risicotoepassing wordt. Onder de AI Act voor bedrijven speelt die vraag bijvoorbeeld bij een algemene AI-tool die sollicitanten gaat rangschikken. |
| Nieuw | Kan een organisatie onder de AI Act voor bedrijven ongemerkt aanbieder worden? | Ja. Volgens artikel 25 gebeurt dat bij een hoog-risicosysteem wanneer een organisatie er de eigen naam of het eigen merk op zet, het ingrijpend wijzigt of een systeem zo inzet dat het een hoog-risicotoepassing wordt. Onder de AI Act voor bedrijven speelt die vraag bijvoorbeeld bij een algemene AI-tool die sollicitanten gaat rangschikken. |

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Hoe lang bewaart een gebruiksverantwoordelijke logs onder de AI Act voor bedrijven? | Zes maanden is het minimum voor automatisch gegenereerde logs van een hoog-risicosysteem, volgens artikel 26. Onder de AI Act voor bedrijven noemt hetzelfde artikel voor gebruiksverantwoordelijken onder meer ook menselijk toezicht, het melden van incidenten en het vooraf informeren van werknemers en hun vertegenwoordigers. |
| Nieuw | Hoe lang bewaart een gebruiksverantwoordelijke van een hoog-risicosysteem de logs onder de AI Act voor bedrijven? | Minimaal zes maanden bewaart een gebruiksverantwoordelijke van een hoog-risicosysteem de automatisch gegenereerde logs, volgens artikel 26. Onder de AI Act voor bedrijven noemt hetzelfde artikel voor die gebruiksverantwoordelijken onder meer ook menselijk toezicht, het melden van incidenten en het vooraf informeren van werknemers en hun vertegenwoordigers bij inzet van zo'n systeem op de werkvloer. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Bevat het AI Readiness Assessment een toets op de AI Act voor bedrijven? | Ja. Het {{dienst:ai-readiness-assessment}} bevat een risico- en compliance-scan, inclusief de positionering van toepassingen onder de AI-verordening. Voor een directie of raad van commissarissen die eerst een gedeeld beeld nodig heeft, behandelt de {{dienst:executive-briefing}} ook regelgeving en toezicht. |
| Nieuw | Komt de AI Act voor bedrijven aan bod in het AI Readiness Assessment? | Ja. Het {{dienst:ai-readiness-assessment}} bevat een risico- en compliance-scan, inclusief de positionering van toepassingen onder de AI-verordening. Voor een directie of raad van commissarissen die eerst een gedeeld beeld nodig heeft, behandelt de {{dienst:executive-briefing}} ook regelgeving en toezicht. |

### `/ai-consultancy`

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Kan AI consultancy ook voor één afdeling in plaats van de hele organisatie? | Ja. Het {{dienst:ai-readiness-assessment}} kan ook voor één afdeling of één procesdomein worden uitgevoerd. Die variant is korter en vraagt een lagere investering dan een assessment van de hele organisatie. |
| Nieuw | Kan het AI Readiness Assessment bij AI consultancy ook voor één afdeling? | Ja. Het {{dienst:ai-readiness-assessment}} kan ook voor één afdeling of één procesdomein worden uitgevoerd. Die variant is korter en vraagt een lagere investering. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is er bij AI consultancy een belang bij de leverancier of de omvang van de bouwopdracht? | Nee. Bij AI consultancy aan de advieskant wordt geen software, AI-agent of implementatie gebouwd of verkocht. Het bouwen doet het eigen team of een partner die de opdrachtgever rechtstreeks contracteert, waardoor het advies niet afhangt van een grotere scope of een bepaalde leverancier. |
| Nieuw | Heeft de adviseur bij AI consultancy belang bij een leverancier of een grotere scope? | Nee. De adviseur bouwt en verkoopt bij AI consultancy zelf geen software, AI-agents of implementaties en heeft daardoor geen belang bij een grotere scope of bij een bepaalde leverancier. Het bouwen doet het eigen team of een partner die de opdrachtgever rechtstreeks contracteert. |

### `/ai-consultancy/ai-advies`

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Kan AI advies uitwijzen dat een groter traject nodig is? | Ja. Blijkt bij AI advies dat de vraag groter is dan een adviesvraag, bijvoorbeeld omdat richting ontbreekt of pilots zonder samenhang lopen, dan wordt dat gezegd en volgt een voorstel voor wat wel past. Soms is dat het {{dienst:ai-readiness-assessment}}, om eerst te weten waar de organisatie staat. |
| Nieuw | Kan bij AI advies blijken dat de vraag groter is dan een adviesvraag? | Soms blijkt een vraag bij AI advies groter dan een adviesvraag; dan wordt dat gezegd en volgt een voorstel voor wat wel past. Soms is dat het {{dienst:ai-readiness-assessment}}, om eerst te weten waar de organisatie staat. |

### `/ai-development`

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Hangt de prijs van de Vendor Review bij AI development af van het aantal bouwpartijen? | Ja. De {{dienst:vendor-review}} kost {{pricelc:vendor-review}}, afhankelijk van het aantal leveranciers dat wordt vergeleken, van 2 tot 4. |
| Nieuw | Waar hangt de prijs van de Vendor Review bij AI development van af? | De {{dienst:vendor-review}} kost {{pricelc:vendor-review}}, afhankelijk van het aantal leveranciers (2 tot 4). |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Moet AI development altijd uitkomen op zelf laten bouwen? | Nee. Bij AI development komt eerst de vraag of bouwen, kopen of partneren past: bouwen alleen voor wat de organisatie onderscheidt in de markt, kopen wat een commodity is. Vaak werkt een hybride vorm, met ingekochte bouwstenen en een eigen laag met de kennis van de organisatie. |
| Nieuw | Wat werkt bij AI development het best: bouwen, kopen of partneren? | De hybride vorm werkt bij AI development vaak het best: bouwstenen inkopen, de laag met de eigen kennis laten bouwen en de implementatie bij een partner beleggen. Daaraan vooraf gaat de vraag of bouwen überhaupt nodig is: bouwen alleen voor wat de organisatie onderscheidt in de markt en kopen wat een commodity is. |

### `/ai-development/ai-software`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is de licentie de grootste kostenpost van AI software? | Nee. Bij AI software bepalen integratie, data en exit de werkelijke kosten, niet de licentie. Een kostenvergelijking loopt daarom over drie jaar en omvat licentie, verbruik bij groei, integratie, beheer en exit. |
| Nieuw | Wat bepaalt de echte kosten van AI software? | Integratie, data en exit bepalen bij AI software de echte kosten, niet de licentie. Het criterium Kosten in de werkbare set selectiecriteria omvat licentie, verbruik bij groei, integratie, beheer en exit over drie jaar. |

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is het verstandig om de criteria voor AI software pas na de demo's vast te stellen? | Nee. Selectiecriteria voor AI software en hun weging horen vast te liggen voordat leveranciers in beeld komen, omdat criteria van na de eerste demo vooral die demo beschrijven. Daarna krijgt iedere leverancier hetzelfde scenario op eigen data. |
| Nieuw | Wanneer worden de selectiecriteria voor AI software vastgesteld? | Voordat de leveranciers in beeld komen: het advies is de selectiecriteria voor AI software en hun weging dan vast te stellen, omdat criteria die na de eerste demo worden opgesteld die demo beschrijven. Daarna is het advies iedere leverancier hetzelfde scenario op eigen data te geven. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Betalen leveranciers mee aan een Vendor Review voor AI software? | Nee. Bij de {{dienst:vendor-review}} voor AI software is er geen vergoeding van leveranciers, zodat het advies ook kan zijn om niets te kopen. |
| Nieuw | Ontvangt de adviseur bij een Vendor Review voor AI software een vergoeding van leveranciers? | Nee. Bij de {{dienst:vendor-review}} voor AI software ontvangt de adviseur geen vergoeding van leveranciers, zodat het advies ook kan zijn om niets te kopen. |

### `/ai-development/ai-specialist`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Levert een strategische AI specialist werkende software op? | Nee. Een strategische AI specialist levert een onderbouwde keuze op, zoals een roadmap, een selectieadvies of een beoordeelde business case. Werkende software is het product van een technische AI specialist, zoals een machine learning engineer of een AI-developer. |
| Nieuw | Wat levert een strategische AI specialist op? | Een strategische AI specialist levert een onderbouwde keuze op: een roadmap, een selectieadvies of een beoordeelde business case. Werkende software is het product van technische AI specialisten, zoals een machine learning expert, een AI-developer of een platformspecialist. |

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is een technische AI specialist nodig als nog onduidelijk is waar AI waarde toevoegt? | Nee. Wie nog niet weet waar AI waarde toevoegt, heeft een strategische AI specialist nodig die kansen, risico's en randvoorwaarden in kaart brengt voordat er budget wordt vastgezet. Een technische AI specialist komt in beeld zodra duidelijk is wat er gebouwd moet worden en er bouwcapaciteit nodig is. |
| Nieuw | Welke AI specialist is nodig als nog onduidelijk is waar AI waarde toevoegt? | Een strategische AI specialist: wie nog niet weet waar AI waarde toevoegt, heeft strategische AI-expertise nodig, iemand die kansen, risico's en randvoorwaarden in kaart brengt voordat er budget wordt vastgezet. Wie weet wat er moet komen en bouwcapaciteit zoekt, heeft technische specialisten nodig: het eigen team, een ontwikkelpartij of freelance ontwikkelaars. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Kan de Fractional AI Lead meesturen als een externe bouwpartij het werk doet? | Ja. De {{dienst:fractional-ai-lead}} stuurt vanuit klantzijde mee op de uitvoering door het eigen team of een bouwpartij. De inzet is {{timing:fractional-ai-lead}} voor {{pricelc:fractional-ai-lead}}. |
| Nieuw | Kan de Fractional AI Lead meesturen als een bouwpartij het werk uitvoert? | Ja, vanuit klantzijde: de {{dienst:fractional-ai-lead}} stuurt mee op uitvoering door het eigen team of een bouwpartij. De {{dienst:fractional-ai-lead}} kost {{pricelc:fractional-ai-lead}}. |

### `/ai-implementatie`

**Vervolgvraag 3** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Kost de techniek de meeste tijd bij een AI implementatie? | Nee. De doorlooptijd van een AI implementatie verschilt sterk per toepassing, maar adoptie kost vaak meer tijd dan de techniek. Een standaardproduct dat wordt geconfigureerd staat sneller dan maatwerk met koppelingen aan kernsystemen. |
| Nieuw | Wat kost bij een AI implementatie vaak meer tijd dan de techniek? | Adoptie kost bij een AI implementatie vaak meer tijd dan de techniek. De doorlooptijd van de implementatie zelf verschilt sterk per toepassing: een standaardproduct dat wordt geconfigureerd staat sneller dan maatwerk met koppelingen aan kernsystemen. |

### `/ai-implementatie/advies`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Levert AI implementatie advies een uitgebreid rapport op? | Nee. AI implementatie advies eindigt met een beslisdocument en geen dik rapport: welke use case, welke bouwkeuze, welke randvoorwaarden voor data en privacy, welke verandering en wat de bouwpartij moet opleveren. Alle kaders en analyses zijn daarna van de opdrachtgever. |
| Nieuw | Levert AI implementatie advies een dik rapport op? | Nee. AI implementatie advies eindigt met een beslisdocument en geen dik rapport: welke use case, welke bouwkeuze, welke randvoorwaarden voor data en privacy, welke verandering nodig is en wat de bouwpartij moet opleveren om te slagen. Alle kaders en analyses zijn daarna van de opdrachtgever. |

**Vervolgvraag 2** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Hoort een privacytoets bij AI implementatie advies? | Ja. Bij AI implementatie advies wordt in kaart gebracht welke data de toepassing nodig heeft en wordt de privacykant beoordeeld. Verwerkt de toepassing persoonsgegevens met een grote kans op een hoog privacyrisico, dan is een DPIA verplicht onder de AVG, en die beoordeling vindt aan het begin plaats. |
| Nieuw | Kijkt AI implementatie advies ook naar de privacykant? | Ja. Bij AI implementatie advies wordt in kaart gebracht welke data de toepassing nodig heeft en wordt daarnaast naar de privacykant gekeken. Een DPIA is onder de AVG verplicht als de toepassing persoonsgegevens verwerkt met een grote kans op een hoog privacyrisico, en die vraag hoort aan het begin, niet vlak voor livegang. |

### `/ai-implementatie/stappenplan`

**Vervolgvraag 2** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Kan een stap uit het AI implementatie stappenplan worden overgeslagen? | Nee. In het AI implementatie stappenplan bepaalt elke stap de volgende. Wie de stap over data en systemen overslaat, ontdekt bij de pilot dat de data niet deugt, en wie adoptie pas na de oplevering oppakt, heeft een werkende toepassing die niemand gebruikt. |
| Nieuw | Wat is het gevolg als de stap over data en systemen in het AI implementatie stappenplan wordt overgeslagen? | Wie in het AI implementatie stappenplan de stap over data en systemen overslaat, ontdekt bij de pilot dat de data niet deugt. Wie adoptie pas na de oplevering oppakt, heeft een werkende toepassing die niemand gebruikt. De beslissingen worden in een vaste volgorde genomen, omdat elke stap de volgende bepaalt. |

### `/ai-voor-bedrijven`

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is maatwerk de beste eerste stap bij AI voor bedrijven? | Nee. Bij AI voor bedrijven zit veel waarde in tools en AI-functies die al aanwezig zijn of eenvoudig aan te schaffen zijn. Maatwerk wordt pas zinvol wanneer standaardtools aantoonbaar tekortschieten. |
| Nieuw | Begint AI voor bedrijven met gebruiken of met bouwen? | Bij voorkeur met gebruiken: bij AI voor bedrijven zit veel waarde in tools en AI-functies die al aanwezig zijn of eenvoudig aan te schaffen zijn. Maatwerk wordt pas zinvol wanneer standaardtools aantoonbaar tekortschieten. |

**Vervolgvraag 3** (geherformuleerd, inmiddels vervallen)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Voor welke taken wordt AI voor bedrijven in Nederland het vaakst gebruikt? | 35 procent van de AI-gebruikende bedrijven zette AI in 2025 in voor marketing of verkoop, de meest genoemde toepassing volgens het CBS. Administratie of bestuurstaken volgden met 32 procent. Bij bedrijven die AI voor bedrijven overwogen maar niet invoerden, was gebrek aan ervaring de meest genoemde reden. |
| Nieuw | Waarvoor wordt AI voor bedrijven in Nederland het vaakst gebruikt? | AI voor bedrijven werd in 2025 het vaakst gebruikt voor marketing of verkoop (35 procent) en voor administratie of bestuurstaken (32 procent), volgens CBS-cijfers over AI-gebruikende bedrijven. Onder bedrijven die AI overwogen maar niet invoerden, was gebrek aan ervaring de meest genoemde reden. |

### `/ai-voor-bedrijven/ai-en-bi`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is een Pro-licentie genoeg om AI en BI te combineren met Copilot in Power BI? | Nee. Voor AI en BI met Copilot in Power BI is een betaalde Fabric- of Premium-capaciteit nodig; een Pro-licentie alleen is niet genoeg, stand september 2026 volgens Microsoft Learn. Zonder voorbereiding van het datamodel kan Copilot de data bovendien verkeerd interpreteren. |
| Nieuw | Is een Pro-licentie genoeg voor Copilot in Power BI? | Nee, volgens Microsoft Learn niet (stand september 2026): Copilot in Power BI, een voorbeeld van AI en BI, vraagt een betaalde Fabric- of Premium-capaciteit en een Pro-licentie alleen is niet genoeg. Zonder voorbereiding van het datamodel kan Copilot volgens Microsoft bovendien de data verkeerd interpreteren. |

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Op hoeveel manieren kunnen AI en BI samenwerken? | Vier manieren: vragen stellen in gewone taal, automatische toelichting bij cijfers en afwijkingen, voorspellingen naast de terugblik, en tekst uit e-mails, klantreacties en documenten omzetten in analyseerbare gegevens. Bij AI en BI rusten alle vier op een betrouwbaar datamodel. |
| Nieuw | Op hoeveel manieren is AI te gebruiken voor business intelligence? | Vier manieren, van eenvoudig naar ingrijpend: vragen stellen in gewone taal, automatische toelichting bij cijfers en afwijkingen, voorspellingen naast de terugblik, en tekst uit e-mails, klantreacties en documenten omzetten in analyseerbare gegevens. Bij AI en BI rusten alle vier op een betrouwbaar datamodel. |

### `/ai-voor-bedrijven/mkb`

**Vervolgvraag 2** (geherformuleerd en teruggezet, inmiddels vervallen)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Loopt AI voor het mkb achter op het grootbedrijf? | Ja. In 2025 gebruikte 29,8 procent van de bedrijven met 10 tot en met 249 werkzame personen AI-technologie, tegen 66,2 procent van het grootbedrijf, volgens het CBS. Bij microbedrijven met 2 tot 9 werkzame personen was dat 13,8 procent, zodat AI voor het mkb nog ruimte heeft om te groeien. |
| Nieuw | Blijft het gebruik van AI in het mkb achter bij grotere bedrijven? | Ja. Het gebruik van AI voor het mkb blijft achter bij grotere bedrijven: in 2025 gebruikte 29,8 procent van de bedrijven met 10 tot en met 249 werkzame personen AI-technologie, tegen 66,2 procent van het grootbedrijf, volgens het CBS. Bij microbedrijven met 2 tot 9 werkzame personen was dat 13,8 procent, een aandeel dat sinds 2023 wel is verdubbeld. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is een chatbot voor klanten een goed startpunt bij AI voor het mkb? | Nee. Bij AI voor het mkb in de klantenservice is beginnen achter de schermen verstandiger: e-mails sorteren, conceptantwoorden die een medewerker controleert en klantdossiers samenvatten. Een klantgerichte assistent voor eenvoudige vragen is pas een logische volgende stap als dat goed loopt. |
| Nieuw | Is een chatbot die zelfstandig klanten te woord staat een goed startpunt bij AI voor het mkb? | Nee. Het advies voor AI voor het mkb in de klantenservice is niet te beginnen met zo'n chatbot, maar achter de schermen: e-mails sorteren, conceptantwoorden die een medewerker controleert en klantdossiers samenvatten. Een klantgerichte assistent voor eenvoudige vragen is pas een logische volgende stap als dat goed loopt. |

### `/ai-voor-bedrijven/zakelijke-dienstverleners`

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Bestaan er beroepsrichtlijnen voor AI voor zakelijke dienstverleners zoals accountants en advocaten? | Ja. Voor AI voor zakelijke dienstverleners in de accountancy publiceerden NBA en NOREA in juni 2026 'Leidraad 2: AI Toegepast', en de Nederlandse orde van advocaten heeft aanbevelingen voor AI in de advocatuur gepubliceerd. In beide blijft het menselijk oordeel van de professional de basis. |
| Nieuw | Welke leidraad en aanbevelingen zijn er bij AI voor zakelijke dienstverleners zoals accountants en advocaten? | Voor AI voor zakelijke dienstverleners in de accountancy publiceerden de beroepsorganisaties NBA en NOREA in juni 2026 'Leidraad 2: AI Toegepast', en de Nederlandse orde van advocaten heeft aanbevelingen voor AI in de advocatuur gepubliceerd. De kern van de leidraad is dat validatie en menselijk oordeel de basis blijven. In de advocatuur blijft de advocaat altijd zelf verantwoordelijk voor het uiteindelijke advies. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Zijn gespecialiseerde vaktools altijd de beste keuze bij AI voor zakelijke dienstverleners? | Nee. Bij AI voor zakelijke dienstverleners hangt de passende tool af van de taken, de bestaande software en de eisen aan gegevensverwerking. Gespecialiseerde vaktools bieden meer vakinhoud, maar vragen een toets op de herkomst van bronnen en het prijsmodel. |
| Nieuw | Waar hangt de keuze voor een tool van af bij AI voor zakelijke dienstverleners? | Van de taken, de bestaande software en de eisen aan gegevensverwerking hangt bij AI voor zakelijke dienstverleners af welke tool past, niet van de indrukwekkendste demo. Gespecialiseerde vaktools bieden meer vakinhoud, maar vragen een toets op de herkomst van bronnen en het prijsmodel. |

### `/ai-workshop`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is er een AI workshop voor directie of raad van commissarissen? | Ja. Voor directie of raad van commissarissen is de {{dienst:executive-briefing}} de passende vorm: een vaste sessie met een beslisagenda en toezichtvragen, voor {{pricelc:executive-briefing}} inclusief voorbereiding op de sector. De bredere AI workshop voor management is bedoeld voor bijvoorbeeld lijnmanagers of een MT. |
| Nieuw | Welke sessie past bij een directie of raad van commissarissen? | De {{dienst:executive-briefing}} is voor directie of raad van commissarissen de passende vorm: een vaste sessie met een beslisagenda en toezichtvragen. De Executive Briefing heeft een vaste prijs van {{pricelc:executive-briefing}}, inclusief voorbereiding op de sector. Breder inzetbaar is de managementworkshop, bijvoorbeeld voor lijnmanagers of een MT. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Leidt één AI workshop vanzelf tot structureel gebruik van AI? | Nee. Een AI workshop is geen adoptiestrategie: licenties uitdelen en één trainingsmiddag leiden zelden tot structureel gebruik. Daarom is een AI workshop opgebouwd rond drie tot vijf concrete taken per rol, zodat deelnemers de volgende ochtend weten waar ze beginnen. |
| Nieuw | Leiden licenties en één trainingsmiddag tot structureel gebruik van AI? | Zelden: licenties uitdelen en één trainingsmiddag organiseren leidt zelden tot structureel gebruik, en een AI workshop is geen adoptiestrategie. Daarom is een AI workshop opgebouwd rond drie tot vijf concrete taken per rol, zodat een deelnemer de volgende ochtend weet waar te beginnen. |

### `/ai-workshop/ai-coaching`

**Vervolgvraag 3** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Past AI coaching bij een vraag die de hele organisatie raakt? | Nee. AI coaching past minder bij een organisatiebrede vraag: moet iemand de AI-agenda van de hele organisatie sturen, dan is de {{dienst:fractional-ai-lead}} de betere vorm. |
| Nieuw | Past AI coaching bij een organisatiebrede vraag? | AI coaching past minder als de vraag organisatiebreed is: moet er iemand de AI-agenda van de hele organisatie sturen, dan is de {{dienst:fractional-ai-lead}} de betere vorm. |

### `/ai-workshop/ai-geletterdheid-training`

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Schrijft de AI Act een vast lesprogramma voor een AI geletterdheid training voor? | Nee. Voor een AI geletterdheid training bestaat geen voorgeschreven lesprogramma: volgens de Autoriteit Persoonsgegevens hangt wat nodig is af van de risico's, de rollen en de context. |
| Nieuw | Bestaat er een voorgeschreven lesprogramma voor een AI geletterdheid training? | Nee. Voor een AI geletterdheid training bestaat geen voorgeschreven lesprogramma: volgens de Autoriteit Persoonsgegevens hangt wat nodig is af van de risico's, de rollen en de context. |

### `/ai-workshop/copilot-training`

**Vervolgvraag 1** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is de Copilot training een vast standaardprogramma? | Nee. De Copilot training is maatwerk: in de intake komen doel, doelgroep, licenties en interne afspraken aan bod, waarna drie tot vijf taken per rol tot oefeningen worden uitgewerkt. |
| Nieuw | Hoe ziet het programma van de Copilot training eruit? | De Copilot training is maatwerk en een programma kan er bijvoorbeeld uitzien als intake, voorbereiding, sessie en toepassen. In dat voorbeeld komen in de intake doel, doelgroep, licenties en interne afspraken aan bod en worden in de voorbereiding drie tot vijf taken per rol uitgewerkt tot oefeningen. Duur en invulling van de Copilot training hangen af van de groep en het doel. |

### `/diensten/ai-due-diligence`

**Vervolgvraag 2** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is een AI Due Diligence een formele audit? | Nee. De {{dienst:ai-due-diligence}} is geen formele audit met accountantsverklaring. |
| Nieuw | Is de AI Due Diligence geschikt voor wie een formele audit met accountantsverklaring nodig heeft? | Minder geschikt: de {{dienst:ai-due-diligence}} is minder geschikt als een formele audit met accountantsverklaring nodig is. |

### `/diensten/ai-strategy-sprint`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is de AI Strategy Sprint goedkoper als er al een AI Readiness Assessment ligt? | Ja. Ligt er al een {{dienst:ai-readiness-assessment}}, dan komt de {{dienst:ai-strategy-sprint}} aan de onderkant van {{pricelc:ai-strategy-sprint}} uit; bij meerdere bedrijfsonderdelen aan de bovenkant. |
| Nieuw | Waar in de prijsbandbreedte komt de AI Strategy Sprint uit als er al een AI Readiness Assessment ligt? | Aan de onderkant: ligt er al een {{dienst:ai-readiness-assessment}}, dan komt de {{dienst:ai-strategy-sprint}} aan de onderkant van {{pricelc:ai-strategy-sprint}} uit. Bij meerdere bedrijfsonderdelen komt de sprint aan de bovenkant uit. |

**Vervolgvraag 2** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is de AI Strategy Sprint geschikt als er nog geen mandaat is om keuzes te maken? | Nee. Zonder mandaat om keuzes te maken is de {{dienst:ai-strategy-sprint}} minder geschikt en past eerst een {{dienst:executive-briefing}}. |
| Nieuw | Wanneer is de AI Strategy Sprint minder geschikt? | Minder geschikt als er nog geen mandaat is om keuzes te maken, want dan komt eerst een {{dienst:executive-briefing}}. De {{dienst:ai-strategy-sprint}} is ook minder geschikt voor wie vooral capaciteit zoekt om te bouwen. |

### `/diensten/executive-briefing`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Wordt de prijs van de Executive Briefing verrekend met een vervolgtraject? | Ja. De {{dienst:executive-briefing}} wordt volledig verrekend als binnen 60 dagen een {{dienst:ai-readiness-assessment}} start. |
| Nieuw | Wanneer wordt de prijs van de Executive Briefing verrekend? | De {{dienst:executive-briefing}} wordt volledig verrekend als binnen 60 dagen een {{dienst:ai-readiness-assessment}} start. |

**Vervolgvraag 2** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is de Executive Briefing een keynote? | Nee. De {{dienst:executive-briefing}} is een werksessie met open gesprek voor bestuurders en toezichthouders, geen inspirerende keynote. |
| Nieuw | Past de Executive Briefing bij wie een inspirerende keynote zoekt? | Minder geschikt: de {{dienst:executive-briefing}} is minder geschikt als een organisatie een inspirerende keynote zoekt. De {{dienst:executive-briefing}} is een compacte sessie voor directie of board over de kansen en risico's van AI en over wat het van bestuurders vraagt. |

### `/diensten/fractional-ai-lead`

**Vervolgvraag 1** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is de Fractional AI Lead tussentijds opzegbaar? | Ja. De {{dienst:fractional-ai-lead}} heeft een minimale looptijd van 3 maanden en is daarna maandelijks opzegbaar. |
| Nieuw | Wanneer is de Fractional AI Lead opzegbaar? | De {{dienst:fractional-ai-lead}} loopt minimaal 3 maanden en is daarna maandelijks opzegbaar. |

### `/diensten/vendor-review`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Hoeveel leveranciers beoordeelt een Vendor Review? | 2 tot 4. Het aantal leveranciers bepaalt waar de {{dienst:vendor-review}} binnen de bandbreedte van {{pricelc:vendor-review}} uitkomt. |
| Nieuw | Wat bepaalt de prijs van een Vendor Review? | De prijs van de {{dienst:vendor-review}}, {{pricelc:vendor-review}}, is afhankelijk van het aantal leveranciers (2 tot 4). |

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is een Vendor Review zinvol als de leverancier al gekozen is? | Nee. De {{dienst:vendor-review}} is niet bedoeld om een keuze die feitelijk al gemaakt is achteraf te onderbouwen. |
| Nieuw | Wanneer is een Vendor Review minder geschikt? | De {{dienst:vendor-review}} is minder geschikt als de leverancier feitelijk al gekozen is en de organisatie een onderbouwing achteraf zoekt. |

### `/inzichten/ai-adoptie-begint-bij-het-werk`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is lage AI-adoptie een teken dat medewerkers weerstand hebben tegen verandering? | Nee. Lage AI-adoptie is een ontwerpprobleem van de introductie en geen gebrek aan bereidheid. Bij onduidelijke regels over wat mag, doen medewerkers niets, en dat is verstandig gedrag. |
| Nieuw | Betekent lage AI-adoptie dat medewerkers er nog niet klaar voor zijn? | Bijna altijd niet: de conclusie dat medewerkers er nog niet klaar voor zijn, is bij lage AI-adoptie bijna altijd onjuist. Volgens het artikel zit het probleem in het ontwerp van de introductie en niet in de bereidheid. Bij twijfel over wat mag, doen medewerkers niets, en dat is verstandig gedrag bij onduidelijke regels. |

### `/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen`

**Vervolgvraag 1** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Kunnen AI-agents vanaf de start zelfstandig een hele keten uitvoeren? | Nee. Het advies is om AI-agents te laten beginnen met voorbereiden of voorstellen, de laagste autonomieniveaus, ook als het model meer aankan. In die fase wordt duidelijk welke fouten werkelijk optreden, en die kennis is nodig om de autonomie veilig te verhogen. |
| Nieuw | Met welk autonomieniveau beginnen AI-agents volgens het advies? | Het advies is vrijwel altijd om AI-agents op niveau één of twee te laten beginnen, dus bij voorbereiden of voorstellen, ook als het model meer aankan. In die fase wordt duidelijk welke fouten werkelijk optreden, en die kennis is nodig om te bepalen waar de autonomie veilig omhoog kan. |

### `/inzichten/ai-governance-zonder-bureaucratie`

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Volstaat een spreadsheet als register voor AI-governance? | Ja. Voor AI-governance is een spreadsheet die klopt beter dan een GRC-module die half gevuld is. Het register bevat per toepassing de eigenaar, het doel, het risiconiveau, de gebruikte data, de leverancier en het moment van de laatste beoordeling. |
| Nieuw | Kan het register voor AI-governance een spreadsheet zijn? | Ja, als de spreadsheet klopt: voor AI-governance verslaat een spreadsheet die klopt een GRC-module die half gevuld is. Het register bevat per toepassing de eigenaar, het doel, het risiconiveau, de gebruikte data, de leverancier en het moment van de laatste beoordeling. |

### `/inzichten/build-buy-of-partner`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is zelf bouwen bij build, buy of partner altijd de goedkoopste optie? | Nee. Bij de keuze build, buy of partner is bouwen goedkoop in het eerste jaar, maar het jaarlijkse onderhoud van een zelfgebouwde AI-toepassing ligt volgens een vuistregel uit de praktijk tussen 20% en 40% van de oorspronkelijke bouwkosten. Over vijf jaar doorgerekend en vergeleken met een licentie keert de conclusie vaak om. |
| Nieuw | Blijft zelf bouwen bij build, buy of partner goedkoop na jaar één? | Vaak keert de conclusie om wanneer het onderhoud vijf jaar wordt doorgerekend en met een licentie vergeleken: bij build, buy of partner is bouwen goedkoop in jaar één. Een vuistregel uit de praktijk is dat het jaarlijkse onderhoud van een zelfgebouwde AI-toepassing tussen de 20% en 40% van de oorspronkelijke bouwkosten ligt. |

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is kopen een verstandige start bij twijfel tussen build, buy of partner? | Ja. Bij twijfel tussen build, buy of partner is kopen bijna altijd de goedkoopste manier om te leren wat werkelijk nodig is. Later bouwen kan alsnog, met een scherpere specificatie. |
| Nieuw | Is kopen bij twijfel tussen build, buy of partner de goedkoopste manier om te leren wat nodig is? | Bijna altijd: bij twijfel tussen build, buy of partner is kopen bijna altijd de goedkoopste manier om te leren wat werkelijk nodig is. Later bouwen kan alsnog, met een scherpere specificatie. |

### `/inzichten/de-business-case-voor-ai`

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Stijgen de kosten mee met het gebruik in een business case voor AI? | Ja. Bij AI wordt vaak betaald per verwerkt document, per gesprek of per verwerkte hoeveelheid tekst, waardoor de verbruikskosten meeschalen met het gebruik. Een business case voor AI rekent daarom met de kosten per transactie uit de pilot maal het verwachte volume bij volledige uitrol, en met een scenario op dubbel volume. |
| Nieuw | Stijgen de variabele kosten bij AI mee met het gebruik? | Ja. Bij AI wordt vaak betaald per verwerkt document, per gesprek of per verwerkte hoeveelheid tekst. Het artikel raadt aan voor een business case voor AI de kosten per transactie in de pilot te meten en te vermenigvuldigen met het verwachte volume bij volledige uitrol. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Hoe lang duurt de productiviteitsdip waarmee een business case voor AI rekening houdt? | Vier tot acht weken duurt de productiviteitsdip na de invoering doorgaans. Het opnemen van die dip maakt een business case voor AI geloofwaardiger en niet zwakker. |
| Nieuw | Hoe lang duurt de productiviteitsdip in de eerste weken? | Doorgaans vier tot acht weken. Het artikel raadt aan die dip op te nemen in een business case voor AI: dat maakt de case geloofwaardiger, niet zwakker. |

### `/inzichten/freelance-ai-consultant-vs-agency-vs-big4`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Kan een freelance AI consultant een grote implementatie met een ontwikkelteam leveren? | Nee. Een freelance AI consultant kan geen volume leveren, zoals een implementatie met acht ontwikkelaars of een programma dat twee jaar loopt. Bij trajecten die gevoelig zijn voor de uitval van één persoon is een eenmanspraktijk bovendien een reëel risico. |
| Nieuw | Waar verliest een freelance AI consultant het van een agency of een Big 4-kantoor? | Een freelance AI consultant verliest zodra er volume nodig is, zoals bij een implementatie met acht ontwikkelaars of een programma dat twee jaar loopt. Bij bus-factor-gevoelige trajecten is een eenmanspraktijk bovendien een reëel risico, een probleem dat een agency of Big 4 niet heeft. |

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is een freelance AI consultant te combineren met een agency? | Ja. Een opzet die vaak goed uitpakt, is een onafhankelijke senior zoals een freelance AI consultant voor de strategie en de selectie, en een agency of systeemintegrator voor de bouw. De adviseur zit tijdens de bouw aan de kant van de opdrachtgever en heeft geen belang bij groei van de scope. |
| Nieuw | Is de keuze tussen een freelance AI consultant, een agency en een Big 4-kantoor altijd een zuivere keuze? | Zelden: in de praktijk is een zuivere keuze tussen een freelance AI consultant, een agency en een Big 4-kantoor zelden te zien. De opzet die het vaakst goed uitpakt, is een onafhankelijke senior voor de strategie en de selectie en een agency of systeemintegrator voor de bouw, met de adviseur tijdens de bouw aan de kant van de opdrachtgever. De adviseur heeft dan geen belang bij de scope-groei van de implementatie. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Moet een opdrachtgever ook een freelance AI consultant naar belangen bij leveranciers vragen? | Ja. De vier vragen over vergoedingen of partnerstatus, een eigen implementatiepraktijk, de verhouding tussen omzet uit implementatie en advies en afrekening op vervolgomzet gelden voor elke partij, dus ook voor een freelance AI consultant. Een eerlijk en onderbouwd antwoord is betrouwbaarder dan de bewering volledig onafhankelijk te zijn. |
| Nieuw | Welke vragen over belangen bij leveranciers horen ook bij een freelance AI consultant? | De vier vragen over vergoedingen of partnerstatus, een eigen implementatiepraktijk, de verhouding tussen omzet uit implementatie en advies en afrekening op vervolgomzet zijn bedoeld voor elke partij, ongeacht de grootte, dus ook voor een freelance AI consultant. Een partij die een belang benoemt en uitlegt hoe ze daarmee rekening houdt, is betrouwbaarder dan een partij die zegt volledig onafhankelijk te zijn zonder dat te onderbouwen. |

### `/inzichten/het-datafundament-onder-ai`

**Vervolgvraag 1** (teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is een centraal datawarehouse nodig voor het datafundament onder een eerste AI-use case? | Nee. Voor het datafundament onder een eerste use case is een dagelijkse export vaak genoeg. Toegankelijkheid en infrastructuur zijn meestal het minst urgente dataprobleem en vaak het makkelijkst op te lossen. |
| Nieuw | Is een centraal datawarehouse nodig voor het datafundament onder een eerste AI-use case? | Vaak niet: voor het datafundament onder een eerste use case is een dagelijkse export vaak genoeg. Toegankelijkheid en infrastructuur zijn meestal het minst urgente dataprobleem en in de praktijk vaak het makkelijkst op te lossen, zeker voor één use case. |

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Zijn er situaties waarin het datafundament wel vóór de eerste AI-toepassing moet worden aangepakt? | Ja. Het datafundament gaat voor als de kernentiteit niet eenduidig is, als de benodigde data niet wordt vastgelegd of als een bron geen eigenaar heeft. Die drie signalen gaan over betekenis en eigenaarschap, niet over technologie. |
| Nieuw | Zijn er situaties waarin eerst het datafundament aanpakken wel het juiste antwoord is? | Ja. Uitstellen is verstandig bij drie signalen rond het datafundament: de kernentiteit is niet eenduidig, de benodigde data wordt niet vastgelegd of de bron heeft geen eigenaar. Die signalen gaan over betekenis en eigenaarschap, niet over technologie. |

**Vervolgvraag 3** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Hoeveel begrippen moeten worden gedefinieerd voor het datafundament van één use case? | Vijf tot tien begrippen die de use case raakt, zijn genoeg voor het datafundament van één toepassing. Het hele bedrijfsdatamodel definiëren is daarvoor niet nodig. |
| Nieuw | Hoeveel begrippen worden gedefinieerd om het definitieprobleem in het datafundament aan te pakken? | Vijf tot tien: de aanpak voor het definitieprobleem in het datafundament is alleen de begrippen te definiëren die de use case raakt, niet het hele bedrijfsdatamodel. Volgens het artikel is dat twee weken werk in plaats van twee jaar. |

### `/inzichten/waarom-ai-pilots-blijven-steken`

**Vervolgvraag 3** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Hebben AI-pilots zin als er in de organisatie niets mag veranderen? | Ja. AI-pilots kunnen dan nog steeds doorgaan, maar de businesscase wordt doorgerekend zonder de besparing die verandering vereist. Wat dan overblijft is vaak een kleinere, maar reële waarde. |
| Nieuw | Kunnen AI-pilots doorgaan als er in de organisatie niets mag veranderen? | Ja, maar de businesscase van AI-pilots wordt dan doorgerekend zonder de besparing die verandering vereist. Vaak blijft er dan een reële, kleinere waarde over, en dat is een eerlijker startpunt dan een belofte die later niet waargemaakt kan worden. |

### `/inzichten/wanneer-heb-je-echt-een-ai-strateeg-nodig`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is een AI-strateeg nodig voor de keuze van een kleine, maandelijks opzegbare tool? | Nee. Voor een klein en omkeerbaar besluit is een AI-strateeg niet nodig: de tijd voor een afweging kost meer dan het experiment zelf. Analysekracht is beter besteed aan besluiten die moeilijk terug te draaien zijn. |
| Nieuw | Wat voegt een AI-strateeg toe bij de keuze van een kleine, maandelijks opzegbare tool? | Weinig: bij een klein en omkeerbaar besluit is een AI-strateeg externe hulp die weinig toevoegt, omdat de tijd voor een afweging meer kost dan het experiment. Het advies is zo'n tool gewoon te proberen en analysekracht te bewaren voor besluiten die niet makkelijk terug te draaien zijn. |

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Heeft het zin een AI-strateeg in te huren om een al genomen besluit te onderbouwen? | Nee. Een AI-strateeg inhuren om een gekozen richting te bekrachtigen is verspilling, omdat er niets nieuws uit komt en afwijkende bevindingen worden weggemasseerd. Een externe toets voor een board of toezichthouder heeft alleen zin als de uitkomst nog open staat. |
| Nieuw | Heeft het zin een AI-strateeg in te huren om een al genomen besluit te bekrachtigen? | Nee. Een AI-strateeg inhuren om een gekozen richting te bekrachtigen is verspilling, omdat er niets nieuws uit komt en elke afwijkende bevinding wordt weggemasseerd. Een onafhankelijke onderbouwing voor een board of toezichthouder is iets anders dan legitimatie kopen, omdat de uitkomst daar nog open staat. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Hoe lang duurt een afgebakende opdracht voor een AI-strateeg meestal? | Twee tot zes weken is de omvang van een afgebakende opdracht die voor de meeste organisaties klopt. Een opdracht voor een AI-strateeg die langer duurt zonder tussentijdse beslismomenten, is zelden in het belang van de opdrachtgever. |
| Nieuw | Welke omvang van een opdracht voor een AI-strateeg klopt meestal? | Voor de meeste organisaties geldt een afgebakende opdracht voor een AI-strateeg van twee tot zes weken, of een deeltijdrol van een paar dagen per maand. Een traject dat langer duurt zonder tussentijdse beslismomenten, is zelden in het belang van de opdrachtgever. |

### `/inzichten/welke-ai-use-cases-leveren-resultaat`

**Vervolgvraag 1** (geherformuleerd en teruggezet, inmiddels vervallen)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is een algemene AI-assistent voor alle medewerkers een van de AI-use cases die resultaat opleveren? | Nee. Iedereen een assistent geven is geen use case maar een licentie, en zonder afgebakende scenario's blijft het gebruik hangen rond de tien procent. AI-use cases werken beter met drie tot vijf concrete taken met kant-en-klare startpunten, waarna pas later vrijheid volgt. |
| Nieuw | Geldt iedereen een AI-assistent geven als een van de AI-use cases? | Nee. Iedereen een AI-assistent geven hoort niet bij de AI-use cases: het is geen use case maar een licentie, en zonder afgebakende scenario's blijft het gebruik hangen rond de tien procent. Het advies bij zo'n AI-assistent is drie tot vijf concrete taken te kiezen, daar kant-en-klare startpunten voor te maken en pas later vrijheid toe te voegen. |

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Zijn AI-use cases waarvoor eerst data verzameld moet worden geschikt als eerste stap? | Nee. AI-use cases die beginnen met het verzamelen van data schuiven minstens een jaar op. Soms is dat de juiste investering, maar dan is het een datatraject en geen AI-use case. |
| Nieuw | Wat gebeurt er met AI-use cases die beginnen met het verzamelen van data? | AI-use cases die beginnen met eerst data verzamelen, schuiven minstens een jaar op. Soms is dat de juiste investering, maar dan heet het een datatraject en geen AI-use case. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Vanaf welke score krijgen AI-use cases voorrang bij het prioriteren? | 15 punten is de ondergrens: AI-use cases die lager scoren op de vijf vragen over volume, variatie, datagereedheid, veiligheid en trekkracht gaan niet eerst. Elke vraag krijgt een score van 1 tot 5. |
| Nieuw | Welke AI-use cases gaan bij het prioriteren niet eerst? | AI-use cases die onder de 15 punten scoren, gaan niet eerst; bij het prioriteren worden meestal vijf vragen gebruikt, elk met een score van 1 tot 5. De vijf vragen gaan over volume, variatie, datagereedheid, veiligheid en trekkracht. |

### `/kennisbank/ai-agents-en-avg`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Bevat de AVG aparte regels voor AI agents? | Nee. De AVG bij AI agents bestaat uit de bestaande regels, die direct van toepassing zijn; een apart hoofdstuk voor AI agents is er niet. Wat verandert is het risicoprofiel: een agent heeft brede toegang, zet meerdere stappen zonder zicht, stuurt gegevens naar een externe leverancier en handelt in plaats van te adviseren. |
| Nieuw | Heeft de AVG een apart hoofdstuk voor AI agents? | Nee. De AVG bij AI agents bestaat uit de bestaande regels, die direct van toepassing zijn; een apart hoofdstuk voor AI agents heeft de AVG niet. Wat verandert is het risicoprofiel, door brede toegang, meerdere stappen zonder zicht, gegevens naar derden en handelen in plaats van adviseren. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Geldt de AI Act naast de AVG bij AI agents? | Ja. Naast de AVG bij AI agents, die over persoonsgegevens gaat, kan de AI Act gelden, die over het AI-systeem zelf gaat. Voor agents die onder bijlage III vallen, bijvoorbeeld doordat ze sollicitaties filteren of kandidaten beoordelen, gelden de hoog-risicoverplichtingen door de Digital Omnibus vanaf 2 december 2027 in plaats van 2 augustus 2026. |
| Nieuw | Kan de AI Act naast de AVG bij AI agents gelden? | Voor een agent kunnen de AVG en de AI Act tegelijk gelden: de AVG bij AI agents gaat over persoonsgegevens, de AI Act over het AI-systeem zelf. Voor agents die onder bijlage III vallen, bijvoorbeeld doordat ze sollicitaties filteren of kandidaten beoordelen, gelden de hoog-risicoverplichtingen door de Digital Omnibus vanaf 2 december 2027 in plaats van 2 augustus 2026. |

### `/kennisbank/ai-specialist-salaris`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Publiceren de bronnen een AI specialist salaris onder die functietitel? | Nee. De gecontroleerde salarisbronnen publiceren hun cijfers onder de titel AI engineer, niet onder AI specialist. Een AI specialist salaris is daardoor alleen als bandbreedte af te leiden. |
| Nieuw | Publiceren de gecontroleerde salarisbronnen een AI specialist salaris onder die functietitel? | Nee. De gecontroleerde salarisbronnen publiceren hun cijfers onder de titel AI engineer, niet onder AI specialist. Bij een AI specialist salaris gaat het daarom om bandbreedtes per niveau van twee bronnen, in brutobedragen per maand. |

**Vervolgvraag 2** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Zijn de cijfers van Indeed en DataJobs voor een AI specialist salaris onderling vergelijkbaar? | Nee. Indeed rekent in jaarbedragen op basis van 400 door werknemers doorgegeven salarissen, DataJobs in brutomaandbedragen op basis van gegevens van het eigen platform. Voor een AI specialist salaris zijn beide daarom alleen als orde van grootte bruikbaar. |
| Nieuw | Zijn de cijfers van Indeed en DataJobs bij een AI specialist salaris één-op-één te vergelijken? | Lastig: de cijfers van Indeed en DataJobs zijn lastig één-op-één te vergelijken, want Indeed rekent in jaarbedragen op basis van wat werknemers zelf opgeven en DataJobs in brutomaandbedragen op basis van gegevens van het eigen platform. Bij een AI specialist salaris zijn beide daarom als orde van grootte te gebruiken. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Past de Fractional AI Lead als de scope voor een vast AI specialist salaris nog niet vaststaat? | Ja. De {{dienst:fractional-ai-lead}} stuurt de AI-agenda voor een paar dagen per maand, {{pricelc:fractional-ai-lead}}, en helpt bij het functieprofiel en de werving van een vaste opvolger. |
| Nieuw | Wat doet de Fractional AI Lead als de scope voor een fulltime functie nog niet vaststaat? | De {{dienst:fractional-ai-lead}} stuurt de AI-agenda in een parttime rol en helpt bij het functieprofiel en de werving van een vaste opvolger. De rol kost {{pricelc:fractional-ai-lead}}. |

### `/kennisbank/ai-voorbeelden`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Zijn de AI voorbeelden per afdeling en sector succesverhalen van bestaande bedrijven? | Nee. De AI voorbeelden per afdeling en sector zijn bewust generiek beschreven en laten zien welke afgebakende taak AI in een bestaand proces kan doen. Alleen de drie voorbeelden uit het dagelijks leven, over spamfilters, reistijd voorspellen en vertalen, gaan over toepassingen die de leverancier zelf heeft beschreven. |
| Nieuw | Hoe zijn de AI voorbeelden op de pagina beschreven? | Bewust generiek: de AI voorbeelden staan er in de vorm 'een groothandel kan' in plaats van als een verzonnen succesverhaal. Bij de drie voorbeelden uit het dagelijks leven, over spamfilters, reistijd voorspellen en vertalen, heeft de leverancier zelf beschreven hoe AI wordt ingezet. |

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Gelden voor sommige AI voorbeelden zwaardere regels? | Ja. Bij AI voorbeelden waarin een toepassing zelf een besluit over een persoon neemt of een professioneel oordeel vervangt, gelden zwaardere eisen vanuit de AVG, de AI Act en de sectorregels. AI die sollicitaties filtert of kandidaten beoordeelt, de kredietwaardigheid van personen beoordeelt of leerresultaten en toelating beoordeelt, valt onder de hoog-risicotoepassingen van de AI Act. |
| Nieuw | Wanneer gelden bij AI voorbeelden zwaardere eisen? | Zodra een toepassing zelf een besluit over een persoon neemt of een professioneel oordeel vervangt, gelden bij AI voorbeelden zwaardere eisen vanuit de AVG, de AI Act en de eigen sectorregels. AI die sollicitaties filtert of kandidaten beoordeelt, staat in de AI Act op de lijst van hoog-risicotoepassingen; ook AI die de kredietwaardigheid van personen beoordeelt en het beoordelen van leerresultaten of toelating met AI vallen onder de hoog-risicotoepassingen van de AI Act. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Kan een organisatie laten uitzoeken welke AI voorbeelden het meeste opleveren? | Ja. Het {{dienst:ai-readiness-assessment}} levert in {{timing:ai-readiness-assessment}} een gevalideerde lijst met kansen en een 90-dagenplan op. |
| Nieuw | Wat levert het AI Readiness Assessment op voor wie wil weten welke AI voorbeelden het meeste opleveren? | Het {{dienst:ai-readiness-assessment}} geeft in {{timing:ai-readiness-assessment}} een gevalideerde lijst met kansen en een 90-dagenplan, voor wie wil weten welke van de AI voorbeelden in de eigen organisatie het meeste oplevert. |

### `/kennisbank/chatgpt-voor-bedrijven`

**Vervolgvraag 1** (geherformuleerd en teruggezet, inmiddels vervallen)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Wat kost ChatGPT voor bedrijven per gebruiker? | Een standaardplek van ChatGPT Business, het instapabonnement van ChatGPT voor bedrijven, kost $20 per gebruiker per maand bij jaarbetaling of $25 bij maandbetaling, en een premiumplek $100 of $125. Dat zijn Amerikaanse lijstprijzen exclusief btw, stand september 2026. De prijs van ChatGPT Enterprise is op aanvraag. |
| Nieuw | Wat kost een plek bij ChatGPT Business per gebruiker per maand? | Een standaardplek van ChatGPT Business kost $20 per gebruiker per maand bij jaarbetaling of $25 bij maandbetaling, en een premiumplek $100 of $125 (stand september 2026). Dat zijn Amerikaanse lijstprijzen exclusief btw, en OpenAI geeft aan dat prijzen per land en valuta kunnen verschillen. Bij ChatGPT voor bedrijven is de prijs van ChatGPT Enterprise op aanvraag. |

**Vervolgvraag 2** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Biedt ChatGPT voor bedrijven Europese dataopslag? | Ja. ChatGPT voor bedrijven biedt Europese dataopslag bij het Enterprise-abonnement, voor nieuwe werkruimtes (EER en Zwitserland), maar niet bij ChatGPT Business (stand september 2026). Gegevens die via koppelingen of webzoekopdrachten naar externe diensten gaan, vallen daar volgens OpenAI niet onder. |
| Nieuw | Welk abonnement van ChatGPT voor bedrijven biedt Europese dataopslag? | ChatGPT Enterprise, voor nieuwe werkruimtes (EER en Zwitserland); bij ChatGPT Business is er geen Europese dataopslag (stand september 2026). Bij ChatGPT voor bedrijven vallen gegevens die via koppelingen of webzoekopdrachten naar externe diensten gaan daar volgens OpenAI niet onder. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is een persoonlijk account bruikbaar als ChatGPT voor bedrijven? | Nee. Bij de persoonlijke abonnementen kan OpenAI gesprekken gebruiken om modellen te verbeteren tenzij de gebruiker dat zelf uitzet, en de organisatie heeft geen zicht of zeggenschap over wat medewerkers invoeren. Voor ChatGPT voor bedrijven met bedrijfsdata zijn Business en Enterprise bedoeld, waarbij ook een verwerkersovereenkomst met OpenAI mogelijk is. |
| Nieuw | Is een persoonlijk account geschikt voor bedrijfsdata bij ChatGPT voor bedrijven? | Nee, voor bedrijfsdata geldt bij ChatGPT voor bedrijven: Business of Enterprise, geen persoonlijke accounts. Bij de persoonlijke abonnementen kan OpenAI gesprekken gebruiken om modellen te verbeteren tenzij de gebruiker dat zelf uitzet, en de organisatie heeft geen zicht of zeggenschap over klantgegevens die een medewerker in een persoonlijk account zet. Voor Business en Enterprise is bovendien een verwerkersovereenkomst met OpenAI af te sluiten. |

### `/kennisbank/claude-voor-bedrijven`

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Zijn de abonnementen Pro en Max bruikbaar als Claude voor bedrijven? | Nee. Pro en Max zijn persoonlijke abonnementen waarbij modeltraining op gesprekken aan staat tot de gebruiker het zelf uitzet, en centraal beheer ontbreekt. Voor Claude voor bedrijven met bedrijfsgegevens zijn alleen Team en Enterprise geschikt (stand september 2026). |
| Nieuw | Zijn de abonnementen Pro en Max geschikt voor bedrijfsdata? | Nee. Pro en Max zijn persoonlijke abonnementen waarbij modeltraining op gesprekken aan staat tot de gebruiker het zelf uitzet, en centraal beheer ontbreekt. Voor Claude voor bedrijven met bedrijfsgegevens zijn alleen Team en Enterprise geschikt (stand september 2026). |

### `/kennisbank/gemini-voor-bedrijven`

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Kan Gemini voor bedrijven gegevens tonen waar een medewerker geen toegang toe heeft? | Nee. Gemini voor bedrijven haalt volgens Google alleen gegevens op waartoe de gebruiker zelf toegang heeft. Te ruim gedeelde Drive-mappen komen daardoor wel sneller boven, dus het opschonen van toegangsrechten hoort vóór een brede uitrol. |
| Nieuw | Kan Gemini voor bedrijven gegevens ophalen waar een medewerker geen toegang toe heeft? | Gemini voor bedrijven haalt volgens Google alleen gegevens op waartoe de gebruiker zelf toegang heeft. Te ruim gedeelde Drive-mappen komen daardoor wel sneller boven, dus het opschonen van toegangsrechten hoort vóór een brede uitrol. |

### `/kennisbank/microsoft-copilot-voor-bedrijven`

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Wordt bedrijfsdata gebruikt om Microsoft Copilot te trainen? | Nee. Volgens Microsoft worden prompts, antwoorden en gegevens die via Microsoft Graph worden opgehaald niet gebruikt om de basismodellen achter Microsoft Copilot te trainen (stand september 2026). |
| Nieuw | Worden prompts en antwoorden gebruikt om de basismodellen achter Microsoft Copilot te trainen? | Nee, volgens wat Microsoft toezegt in de privacydocumentatie van Microsoft Copilot (stand september 2026): prompts, antwoorden en gegevens die via Microsoft Graph worden opgehaald, worden niet gebruikt om de basismodellen te trainen. |

**Vervolgvraag 3** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Werkt Microsoft Copilot met alle bedrijfsdata als een organisatie alleen Copilot Chat heeft? | Nee. Copilot Chat antwoordt vooral op basis van het web en van wat de gebruiker zelf aanlevert, en kan in Outlook met mailbox, agenda en vergaderingen werken. Pas met de betaalde licentie redeneert Microsoft Copilot over mail, chats, vergaderingen, documenten en sites waartoe de gebruiker toegang heeft. |
| Nieuw | Welke data gebruikt Copilot Chat en welke de betaalde licentie van Microsoft Copilot? | Copilot Chat is vooral een chat die antwoordt op basis van het web en van wat de gebruiker zelf aanlevert, en kan in Outlook ook met mailbox, agenda en vergaderingen werken. Pas met de betaalde licentie werkt Microsoft Copilot breed met de eigen bedrijfsinformatie: Copilot kan dan redeneren over de volle breedte van de werkdata, zoals mail, chats, vergaderingen, documenten en sites, voor zover de gebruiker daar toegang toe heeft. |

### `/kennisbank/notuleren-met-ai`

**Vervolgvraag 1** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Op hoeveel manieren kan een tool meeluisteren bij notuleren met AI? | Drie manieren: ingebouwd in het vergaderplatform, via een bot die als deelnemer aan de vergadering wordt toegevoegd, of via een app op de computer die het geluid lokaal opneemt. Bij notuleren met AI bepaalt die keuze wie ziet dat er wordt opgenomen, waar de data terechtkomt en of het ook werkt bij externe vergaderingen. |
| Nieuw | Op welke manieren kan een tool meeluisteren bij notuleren met AI? | Er zijn bij notuleren met AI grofweg drie manieren: ingebouwd in het vergaderplatform, via een bot die als deelnemer aan de vergadering wordt toegevoegd, of via een app op de computer die het geluid lokaal opneemt. Die keuze bepaalt wie ziet dat er wordt opgenomen, waar de data terechtkomt en of het ook werkt bij externe vergaderingen. |

**Vervolgvraag 2** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is notuleren met AI geschikt voor elke vergadering? | Nee. Notuleren met AI past niet bij vergaderingen waarin gevoelige onderwerpen langskomen, zoals gezondheid in een verzuimgesprek of een reorganisatie. Bij zulke vergaderingen staat de AI-notulist beter uit. |
| Nieuw | Welke vergaderingen vragen extra voorzichtigheid bij notuleren met AI? | Vergaderingen waarin gevoelige onderwerpen langskomen, zoals gezondheid in een verzuimgesprek of een reorganisatie: daar is het advies bij notuleren met AI extra voorzichtig te zijn. Bij zulke vergaderingen staat de AI-notulist beter uit. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Mogen medewerkers voor notuleren met AI elk een eigen gratis tool gebruiken? | Nee. Voor notuleren met AI kiest een organisatie één tool die past bij het vergaderplatform en de taal en die zakelijk te contracteren is. Daarna worden de spelregels vastgelegd: bij welke vergaderingen de notulist aan mag, hoe dat wordt aangekondigd, wie het verslag controleert en hoe lang opnames en transcripten bewaard blijven. |
| Nieuw | Waarmee begint het inrichten van notuleren met AI? | Met de keuze voor één tool die past bij het vergaderplatform en de taal en die zakelijk te contracteren is; het advies is medewerkers niet elk een eigen gratis tool te laten gebruiken. Daarna worden bij notuleren met AI de spelregels vastgelegd: bij welke vergaderingen de notulist aan mag, hoe dat wordt aangekondigd, wie het verslag controleert en hoe lang opnames en transcripten worden bewaard. |

### `/kennisbank/prompt-engineering`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is prompt engineering alleen iets voor ontwikkelaars? | Nee. Voor ontwikkelaars die AI in software inbouwen is prompt engineering een discipline met tests en versiebeheer, maar voor de meeste medewerkers volstaan een paar gewoontes die het verschil maken tussen een generiek antwoord en een bruikbaar concept. |
| Nieuw | Wat betekent prompt engineering voor ontwikkelaars en voor andere medewerkers? | Voor ontwikkelaars die AI in software inbouwen is prompt engineering een echte discipline met tests en versiebeheer. Voor de meeste medewerkers is het eenvoudiger: zij leren een paar gewoontes aan die het verschil maken tussen een generiek antwoord en een bruikbaar concept. |

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Bestaat er bij prompt engineering een formule die altijd werkt? | Nee. De leveranciers van de assistenten leggen bij prompt engineering de nadruk op helder formuleren, context geven, voorbeelden tonen en testen. Anthropic benadrukt dat eerst moet vaststaan wat een goed resultaat is en hoe dat wordt getoetst, voordat aan de prompt wordt geschaafd. |
| Nieuw | Helpen zogenoemde ultieme prompts bij prompt engineering? | Ultieme prompts helpen soms, maar de leveranciers van de assistenten leggen bij prompt engineering zelf de nadruk op iets saaiers: helder formuleren, context geven, voorbeelden tonen en testen. Anthropic benadrukt dat eerst moet vaststaan wat een goed resultaat is en hoe dat wordt getoetst, voordat aan de prompt wordt geschaafd. |

### `/kennisbank/rpa-vs-ai-automatisering`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is robotic process automation de eerste keuze als de softwareleverancier een API kan leveren? | Nee. Een directe koppeling via een API is meestal stabieler dan robotic process automation die door schermen klikt. Robotic process automation past bij een stabiel proces met vaste input waarvoor geen goede koppeling mogelijk is. |
| Nieuw | Is robotic process automation stabieler dan een API van de softwareleverancier? | Meestal niet: kan de leverancier van de software een API leveren, dan is dat meestal stabieler dan robotic process automation met een robot die door schermen klikt. De vuistregel is robotic process automation te kiezen als het proces stabiel is, de input vast ligt en er geen goede koppeling mogelijk is. |

### `/kennisbank/wat-doet-een-ai-consultant`

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Kan één partij tegelijk AI consultant en AI developer zijn? | Ja. Eén partij kan de rol van AI consultant en die van AI developer combineren, maar dat wordt riskant als die partij aan de bouw verdient. Het advies heeft dan belang bij een grotere scope. |
| Nieuw | Wat is het risico als één partij zowel AI consultant als AI developer is? | Het wordt riskant als één partij de rol van AI consultant en die van AI developer heeft en aan de bouw verdient. Het advies heeft dan belang bij een grotere scope. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Loont een AI consultant bij elk AI-besluit? | Nee. Een AI consultant loont vooral bij besluiten die duur of moeilijk terug te draaien zijn, bij interne patstellingen, als een investering verantwoord moet worden of als iets voor het eerst onder tijdsdruk gebeurt. In andere gevallen kan een organisatie het beter zelf doen. |
| Nieuw | Wanneer loont een AI consultant? | Kort gezegd loont een AI consultant bij besluiten die duur of moeilijk terug te draaien zijn, bij interne patstellingen, als een investering verantwoord moet worden of als iets voor het eerst onder tijdsdruk gebeurt. Er zijn ook gevallen waarin een organisatie het beter zelf doet. |

### `/kennisbank/wat-doet-een-ai-developer`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Traint een AI developer altijd zelf modellen? | Nee. Een AI developer is tegenwoordig vaker een ontwikkelaar die bestaande modellen van een leverancier inzet en er een toepassing omheen bouwt. Soms wordt met de titel een machine learning engineer bedoeld die zelf modellen traint. |
| Nieuw | Traint een AI developer zelf modellen? | Soms: met de titel AI developer is soms een machine learning engineer bedoeld die zelf modellen traint. Tegenwoordig is het vaker een ontwikkelaar die bestaande modellen van een leverancier inzet en daar een toepassing omheen bouwt. |

**Vervolgvraag 2** (teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Beslist een AI developer of een toepassing de investering waard is? | Nee. Een AI developer bepaalt doorgaans niet of de toepassing de investering waard is, kiest niet tussen leveranciers namens de organisatie en richt de governance niet in. Dat hoort bij de rol van een AI consultant aan de kant van de opdrachtgever. |
| Nieuw | Beslist een AI developer of een toepassing de investering waard is? | Doorgaans niet: een AI developer bepaalt doorgaans niet of de toepassing de investering waard is, kiest niet tussen leveranciers namens de organisatie en richt de governance niet in. Daar is een andere rol voor nodig: een AI consultant werkt aan business case, leverancierskeuze en governance en zit meestal aan de kant van de opdrachtgever. |

### `/kennisbank/wat-doet-een-bi-specialist`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Maakt AI de BI specialist overbodig? | Nee. AI neemt routinewerk van de BI specialist over, zoals het schrijven van berekeningen en queries, waardoor datamodellering, definities en advies belangrijker worden. Een BI specialist die kan uitleggen hoe data tot stand komt en waar de beperkingen zitten, wordt waardevoller. |
| Nieuw | Hoe verandert AI het werk van een BI specialist? | Doordat AI routinewerk van de BI specialist overneemt, worden datamodellering, definities en advies belangrijker. AI-functies in BI-platforms helpen bij het schrijven van berekeningen en queries, en de BI specialist controleert en verbetert. Een BI specialist die kan uitleggen hoe data tot stand komt en waar de beperkingen zitten, wordt waardevoller. |

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is een BI specialist meestal eerder nodig dan een AI specialist? | Ja. In de praktijk zijn vaak zowel een BI specialist als een AI specialist nodig, in die volgorde. Een AI-toepassing op bedrijfscijfers is zo betrouwbaar als de definities en de data eronder, en dat fundament is het werk van een BI specialist. |
| Nieuw | Is een BI specialist eerder nodig dan een AI specialist? | In de praktijk zijn een BI specialist en een AI specialist vaak allebei nodig, en in die volgorde. Een AI-toepassing op bedrijfscijfers is zo betrouwbaar als de definities en de data eronder; dat fundament is typisch het werk van een BI specialist. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Heeft een BI specialist altijd dezelfde functietitel? | Nee. De rol van BI specialist heet in de praktijk ook BI consultant, BI developer, data analist of reporting specialist. De accenten verschillen: de een zit dichter bij de techniek, de ander dichter bij de business. |
| Nieuw | Welke namen heeft de functie van BI specialist? | In de praktijk heeft de functie van BI specialist veel namen: BI consultant, BI developer, data analist of reporting specialist. De accenten verschillen: de een zit dichter bij de techniek, de ander dichter bij de business. |

### `/markten`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Gelden de hoog-risicoregels van de AI Act al voor AI per branche? | Nee. Wie AI per branche bekijkt, moet rekenen met uitstel: sinds de Digital Omnibus gelden de regels voor hoog-risicotoepassingen vanaf 2 december 2027, en voor AI in producten zoals medische hulpmiddelen vanaf 2 augustus 2028. Welke verplichtingen per toepassing gelden, staat op de pagina over [de AI Act](/ai-beleid/ai-act). |
| Nieuw | Wanneer gelden de regels voor hoog-risicotoepassingen bij AI per branche? | Vanaf 2 december 2027 gelden sinds de Digital Omnibus de regels voor hoog-risicotoepassingen, en voor AI in producten als medische hulpmiddelen vanaf 2 augustus 2028; die regels zijn uitgesteld. Bij AI per branche legt de AI Act een laag over de sectorregels heen, met verplichtingen die per toepassing verschillen; de uitwerking staat op de pagina over [de AI Act](/ai-beleid/ai-act). |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is het AI Readiness Assessment bruikbaar in elke sector? | Ja. Het {{dienst:ai-readiness-assessment}} laat zien hoe een organisatie ervoor staat, ongeacht de sector. Het duurt {{timing:ai-readiness-assessment}}. |
| Nieuw | Wat laat het AI Readiness Assessment zien, ongeacht de sector? | Het {{dienst:ai-readiness-assessment}} geeft in korte tijd een nuchter beeld van hoe een organisatie ervoor staat, ongeacht de sector. |

### `/markten/automotive`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Is AI in automotive hoog risico als een dealer er sollicitanten mee selecteert of kredietwaardigheid mee beoordeelt? | Ja. AI voor het selecteren van sollicitanten en voor het beoordelen van de kredietwaardigheid van particulieren staat op de hoog-risicolijst van de AI Act, met eisen die door de Digital Omnibus vanaf 2 december 2027 gelden. De meeste andere dealertoepassingen van AI in automotive, zoals een chatbot of tekstgenerator, zijn geen hoog risico. |
| Nieuw | Is AI in automotive hoog risico als een dealer er sollicitanten mee selecteert of de kredietwaardigheid van particulieren mee beoordeelt? | Ja. AI voor het selecteren van sollicitanten en voor het beoordelen van de kredietwaardigheid van particulieren staat op de hoog-risicolijst van de AI Act, met eisen die door de Digital Omnibus volgens de Europese Commissie vanaf 2 december 2027 gelden. Een chatbot of een tekstgenerator is bij AI in automotive geen hoog-risicotoepassing. |

**Vervolgvraag 2** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Kan een dealer leveranciers van AI in automotive onafhankelijk laten vergelijken? | Ja. De {{dienst:vendor-review}} legt elke leverancier dezelfde vragen en hetzelfde scenario voor. Zo wordt getoetst of de belofte van de DMS-leverancier, het merk of een gespecialiseerde partij klopt. |
| Nieuw | Hoe kan een dealer bij AI in automotive toetsen of de belofte van een leverancier van assistenten klopt? | Dat kan bijvoorbeeld met de {{dienst:vendor-review}}, met dezelfde vragen en hetzelfde scenario voor elke leverancier. Bij assistenten gaat het bij AI in automotive om de keuze tussen wat de DMS-leverancier, het merk of een gespecialiseerde partij aanbiedt. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Werkt een klantgerichte assistent met AI in automotive ook voor klachten? | Nee. Klantgerichte assistenten werken goed voor voorspelbare vragen, zoals het inplannen van een onderhoudsafspraak, maar niet voor klachten of onderhandelingen. Bij AI in automotive hoort daarom vooraf een afspraak over het moment waarop de assistent overdraagt aan een mens. |
| Nieuw | Waarvoor werkt een klantgerichte assistent met AI in automotive goed? | Klantgerichte assistenten, die vragen beantwoorden en bijvoorbeeld een onderhoudsafspraak inplannen, werken bij AI in automotive goed voor voorspelbare vragen, niet voor klachten of onderhandelingen. Het advies is vooraf af te spreken wanneer de assistent overdraagt aan een mens, en dat met echte gesprekken te testen. |

### `/markten/fintech`

**Vervolgvraag 1** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Blijft bij AI in fintech een mens verantwoordelijk voor het oordeel? | Ja. In de meeste processen haalt AI in fintech de feiten uit een document en bevestigt of corrigeert een mens de voorstellen van het systeem. Elke bevestiging en correctie levert een auditspoor en een meetbare kwaliteitsloop op. |
| Nieuw | Blijft bij AI in fintech het oordeel bij een mens? | Bij AI in fintech hoort het oordeel in de meeste processen bij een mens, die de voorstellen van het systeem bevestigt of corrigeert. Dat levert met elke bevestiging en correctie een auditspoor en een meetbare kwaliteitsloop op. |

**Vervolgvraag 3** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Valt een AI-dienst van een externe leverancier bij AI in fintech ook onder DORA? | Ja. DORA geldt sinds 17 januari 2025 en verplicht financiële instellingen tot een informatieregister van alle ICT-diensten die ze van derden afnemen, inclusief onderuitbesteding. Bij AI in fintech horen exitpad, afhankelijkheid en incidentafspraken daarom in de selectie van een externe AI-dienst. |
| Nieuw | Hoe verhoudt een AI-dienst van een externe leverancier bij AI in fintech zich tot DORA? | Een AI-dienst die een financiële instelling afneemt, hoort bij AI in fintech in de praktijk bij de ICT-diensten van derden waarvan DORA een informatieregister vraagt, inclusief onderuitbesteding. DORA geldt sinds 17 januari 2025 en richt zich op de financiële instelling; de precieze kwalificatie is iets om te laten toetsen door de compliance- of juridische afdeling. Exitpad, afhankelijkheid en incidentafspraken horen bij een externe AI-dienst in de selectie. |

### `/partnernetwerk`

**Vervolgvraag 1** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Hoeveel typen expertise biedt het partnernetwerk aan wie een AI bureau zoekt? | Drie typen expertise: development, data en BI, en training en verandermanagement. Welke partij past bij wie een AI bureau zoekt, hangt af van de vraag, en eerst wordt bepaald of zelf bouwen, kopen of partneren de juiste keuze is. |
| Nieuw | Om welke typen expertise gaat het in het partnernetwerk van een adviseur die geen AI bureau is? | Meestal gaat het om een van drie typen expertise: development, data en BI, en training en verandermanagement. Welke partij past, hangt af van de vraag, en eerst wordt bepaald of zelf bouwen, kopen of partneren de juiste keuze is. De adviseur is zelf geen AI bureau en stelt alleen partijen voor die hij kent. |

**Vervolgvraag 2** (geherformuleerd en teruggezet)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Heeft dit alternatief voor een AI bureau een partnerstatus bij Microsoft, OpenAI of andere leveranciers? | Nee. Bij Microsoft, OpenAI, Anthropic, Google, Amazon Web Services, Mistral AI en Meta bestaat geen partnerstatus, resellerafspraak of commissieregeling. Wie een AI bureau zoekt, krijgt daardoor een vergelijking van platforms zonder eigen belang, inclusief het oordeel wanneer een goedkopere of eenvoudigere optie volstaat. |
| Nieuw | Heeft de adviseur een partnerstatus bij Microsoft, OpenAI of andere leveranciers? | Nee. De adviseur, die zelf geen AI bureau is, heeft bij Microsoft, OpenAI, Anthropic, Google, Amazon Web Services, Mistral AI en Meta geen partnerstatus, resellerafspraak of commissieregeling. Daardoor kan hij de platforms eerlijk naast elkaar zetten en zeggen wanneer een goedkopere of eenvoudigere optie volstaat. |

**Vervolgvraag 3** (geherformuleerd)

| | Vraag | Antwoord |
|---|---|---|
| Oud | Kan de begeleiding die een AI bureau vervangt ook doorlopend? | Ja. Bij doorlopende trajecten kan de begeleiding als {{dienst:fractional-ai-lead}}, voor {{timing:fractional-ai-lead}}. De opdrachtgever houdt daarbij één aanspreekpunt voor advies en regie, terwijl de partner de capaciteit levert. |
| Nieuw | Kan de begeleiding tijdens de uitvoering ook doorlopend? | Ja, bij doorlopende trajecten kan de begeleiding als {{dienst:fractional-ai-lead}}, voor {{timing:fractional-ai-lead}}. De opdrachtgever houdt daarbij één aanspreekpunt voor advies en regie, terwijl de partner de capaciteit levert. |
