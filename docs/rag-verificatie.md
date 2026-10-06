# RAG-blokken: verificatie in drie lagen

Stand: 6 oktober 2026 · branch `rag-blokken-fase-0` · er is niets nieuws geplaatst

Dit is de eindstand na de tweede verificatieronde. Gecontroleerd zijn alle 68 blokken: de drie geplaatste pilotblokken en 65 concepten uit `docs/rag-concepten.json`. De vijf branchepagina's met status "wacht op publicatie" zijn niet geverifieerd.

## Wat er tussen de eerste en de tweede ronde is gebeurd

In de eerste ronde werden 667 van 730 zinnen bevestigd; 91 zinnen waren geschrapt en 19 voorgelegd, met 68 open bevindingen over stelligheid. Op jouw aanwijzing is daarna:

- elke voorgelegde zin omgebouwd tot wat de bron dekt;
- geen vervolgvraag meer vervallen om stelligheid: de eerder geschrapte vervolgvragen zijn teruggezet en herschreven, zodat het antwoord begint in de stelligheid van de bron. Een voorbehoud van de bron ("vaak", "meestal", "minder geschikt") staat letterlijk in de eerste zin; een kaal "Ja." of "Nee." staat er alleen nog waar het blok de bron als onvoorwaardelijk aanmerkt;
- "exclusief btw en reiskosten" als veld `prijsvoorwaarden` in `prijzen.ts` gezet; blokken lezen het daaruit;
- de prijs van de Fractional AI Lead in antwoordalinea's teruggebracht tot de bandbreedte met het aantal dagen per maand;
- de drie pilotblokken herzien en hun nulmeting bijgewerkt.

Daarna zijn alle 68 blokken opnieuw door laag A, B en C gegaan. De cijfers hieronder zijn van die tweede ronde.

## Hoe er is gecontroleerd

**Laag A, script.** `planning/check-rag.mjs` eist dat elk bedrag, elke doorlooptijd, elk aantal en elke termijn letterlijk voorkomt in `src/data/prijzen.ts` of in de tekst van de eigen pagina. De enige normalisatie: hoofdletters, witruimte, "€ 7.000" naast "€7.000", en het scheidingsteken in een bereik (2-3, 2–3 en "2 tot 3" gelden als gelijk). Een bedrag, percentage of jaartal moet zelf voorkomen; elk ander getal samen met het inhoudswoord ervoor of erna. Het woord "één" telt niet mee. Nieuw in deze ronde: het voorbehoud dat een blok bij een vervolgvraag opgeeft moet letterlijk op de eigen pagina staan en in de eerste zin van het antwoord terugkomen, en een kaal "Ja." of "Nee." is een fout tenzij het blok de bron als onvoorwaardelijk aanmerkt. Alle 68 blokken slagen.

**Laag B, onafhankelijke verificatie.** Zeven subagents die de teksten niet hebben geschreven of herzien, kregen per blok alleen de zinnen zoals ze op de site komen, de bronbestanden van die pagina en `prijzen.ts` met de uitgerekende waarden. Per zin leverden ze de claim, het bronbestand met regelnummer, het letterlijke bronfragment en een oordeel. Bij elke eerste zin van een vervolgantwoord kregen ze te zien of het blok de bron als onvoorwaardelijk aanmerkt of welk voorbehoud het opgeeft, met de opdracht dat te toetsen. Per zin gaven ze ook aan of er een feit van buiten de eigen dienstverlening in staat.

**Controle op de bronfragmenten, script.** Elk opgegeven fragment is door `planning/verificatie-verwerk.mjs` opgezocht in het genoemde bestand. Een fragment dat daar niet letterlijk staat maakt het oordeel alsnog "niet gevonden".

**Laag C, tweede lezing.** Een andere subagent per batch trok de oordelen "bevestigd" na: alle zinnen met een getal en een derde van de rest. Meer dan één afwijking in een batch betekent dat de hele batch opnieuw door laag B gaat; één afwijking maakt die zin alsnog niet bevestigd.

**Na deze ronde is niets meer geschrapt of herschreven.** Een zin die niet bevestigd is, staat hieronder voorgelegd en het blok blijft "concept".

**Status in `docs/rag-concepten.json`.** "geverifieerd" betekent: elke zin bevestigd, geen open bevinding en geen extern feit. Een blok met een feit van buiten de eigen dienstverlening (wetgeving, prijzen van tools, salarissen, marktcijfers) blijft "concept" en staat in een aparte lijst, ook als elke zin klopt met de eigen pagina. Jij zet goedgekeurde blokken op "akkoord".

**Grenzen.** De bron is steeds de eigen pagina en `prijzen.ts`. Of de pagina zelf klopt met de werkelijkheid is niet gecontroleerd; daarom de aparte lijst met externe feiten. Laag B en C zijn uitgevoerd door taalmodellen; laag A en de fragmentcontrole zijn deterministisch. De markering "onvoorwaardelijk" is een oordeel van de schrijver dat laag B en C hebben getoetst, niet iets wat het script kan bewijzen.

## Totaal

| Blokken | Zinnen | Bevestigd | Geschrapt | Voorgelegd | Geverifieerd | Nog concept |
|---|---|---|---|---|---|---|
| 68 | 654 | 648 | 0 | 6 | 37 | 31 |

## Laag C per batch

| Batch | Ronde laag B | Nagetrokken | Afwijkend |
|---|---|---|---|
| 1 | 1 | 52 | 1 |
| 2 | 1 | 49 | 0 |
| 3 | 1 | 47 | 0 |
| 4 | 1 | 49 | 0 |
| 5 | 1 | 53 | 0 |
| 6 | 1 | 44 | 1 |
| 7 | 1 | 46 | 0 |

## Per blok

| Pagina | Zinnen | Bevestigd | Geschrapt | Voorgelegd | Bevindingen | Externe feiten | Status |
|---|---|---|---|---|---|---|---|
| `/ai-agents` | 11 | 10 | 0 | 1 | 0 | 0 | concept |
| `/ai-agents/laten-maken` | 10 | 10 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-agents/voorbeelden` | 11 | 11 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-agents/wat-is-een-ai-agent` | 9 | 9 | 0 | 0 | 0 | 1 | concept |
| `/ai-automatisering` | 11 | 11 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-automatisering/ai-tools` | 8 | 8 | 0 | 0 | 0 | 1 | concept |
| `/ai-automatisering/ai-workflows` | 10 | 10 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai` | 8 | 8 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-beleid` | 13 | 13 | 0 | 0 | 1 | 2 | concept |
| `/ai-beleid/ai-act` | 11 | 11 | 0 | 0 | 0 | 8 | concept |
| `/ai-consultancy` | 11 | 11 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-consultancy/ai-advies` | 15 | 15 | 0 | 0 | 1 | 1 | concept |
| `/ai-consultancy/ai-consultant-inhuren` (geplaatst) | 7 | 7 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-consultancy/ai-roadmap` | 11 | 11 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-consultancy/ai-strategie` (geplaatst) | 8 | 8 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-development` | 12 | 12 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-development/ai-oplossingen` | 11 | 11 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-development/ai-software` | 9 | 9 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-development/ai-specialist` | 9 | 9 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-implementatie` | 14 | 14 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-implementatie/advies` | 11 | 11 | 0 | 0 | 1 | 1 | concept |
| `/ai-implementatie/stappenplan` | 12 | 12 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-voor-bedrijven` | 10 | 10 | 0 | 0 | 0 | 4 | concept |
| `/ai-voor-bedrijven/ai-en-bi` | 9 | 9 | 0 | 0 | 0 | 2 | concept |
| `/ai-voor-bedrijven/mkb` | 12 | 12 | 0 | 0 | 0 | 3 | concept |
| `/ai-voor-bedrijven/zakelijke-dienstverleners` | 9 | 9 | 0 | 0 | 0 | 4 | concept |
| `/ai-workshop` | 10 | 10 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-workshop/ai-coaching` | 9 | 9 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-workshop/ai-geletterdheid-training` | 8 | 8 | 0 | 0 | 0 | 7 | concept |
| `/ai-workshop/chatgpt-training` | 8 | 8 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-workshop/copilot-training` | 11 | 11 | 0 | 0 | 0 | 1 | concept |
| `/diensten` | 7 | 7 | 0 | 0 | 0 | 0 | geverifieerd |
| `/diensten/ai-due-diligence` | 6 | 6 | 0 | 0 | 0 | 0 | geverifieerd |
| `/diensten/ai-readiness-assessment` (geplaatst) | 9 | 9 | 0 | 0 | 0 | 0 | geverifieerd |
| `/diensten/ai-strategy-sprint` | 9 | 9 | 0 | 0 | 0 | 0 | geverifieerd |
| `/diensten/executive-briefing` | 6 | 6 | 0 | 0 | 0 | 0 | geverifieerd |
| `/diensten/fractional-ai-lead` | 7 | 7 | 0 | 0 | 0 | 0 | geverifieerd |
| `/diensten/vendor-review` | 5 | 5 | 0 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/ai-adoptie-begint-bij-het-werk` | 12 | 12 | 0 | 0 | 0 | 1 | concept |
| `/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen` | 9 | 9 | 0 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/ai-governance-zonder-bureaucratie` | 10 | 9 | 0 | 1 | 0 | 1 | concept |
| `/inzichten/ai-vendorselectie-in-acht-stappen` | 11 | 11 | 0 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/build-buy-of-partner` | 9 | 9 | 0 | 0 | 0 | 2 | concept |
| `/inzichten/de-business-case-voor-ai` | 11 | 10 | 0 | 1 | 0 | 2 | concept |
| `/inzichten/freelance-ai-consultant-vs-agency-vs-big4` | 10 | 10 | 0 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/het-datafundament-onder-ai` | 10 | 10 | 0 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/van-ai-strategie-naar-waarde` | 11 | 11 | 0 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/waarom-ai-pilots-blijven-steken` | 10 | 10 | 0 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/wanneer-heb-je-echt-een-ai-strateeg-nodig` | 10 | 10 | 0 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/welke-ai-use-cases-leveren-resultaat` | 10 | 10 | 0 | 0 | 0 | 1 | concept |
| `/kennisbank/ai-agents-en-avg` | 10 | 9 | 0 | 1 | 0 | 9 | concept |
| `/kennisbank/ai-specialist-salaris` | 10 | 10 | 0 | 0 | 0 | 6 | concept |
| `/kennisbank/ai-voorbeelden` | 8 | 8 | 0 | 0 | 0 | 3 | concept |
| `/kennisbank/chatgpt-voor-bedrijven` | 11 | 11 | 0 | 0 | 0 | 10 | concept |
| `/kennisbank/claude-voor-bedrijven` | 12 | 12 | 0 | 0 | 0 | 11 | concept |
| `/kennisbank/gemini-voor-bedrijven` | 9 | 8 | 0 | 1 | 0 | 8 | concept |
| `/kennisbank/microsoft-copilot-voor-bedrijven` | 8 | 7 | 0 | 1 | 0 | 8 | concept |
| `/kennisbank/notuleren-met-ai` | 9 | 9 | 0 | 0 | 0 | 1 | concept |
| `/kennisbank/prompt-engineering` | 7 | 7 | 0 | 0 | 0 | 2 | concept |
| `/kennisbank/rpa-vs-ai-automatisering` | 11 | 11 | 0 | 0 | 0 | 0 | geverifieerd |
| `/kennisbank/wat-doet-een-ai-consultant` | 9 | 9 | 0 | 0 | 0 | 0 | geverifieerd |
| `/kennisbank/wat-doet-een-ai-developer` | 7 | 7 | 0 | 0 | 0 | 0 | geverifieerd |
| `/kennisbank/wat-doet-een-bi-specialist` | 10 | 10 | 0 | 0 | 0 | 1 | concept |
| `/markten` | 8 | 8 | 0 | 0 | 0 | 2 | concept |
| `/markten/automotive` | 10 | 10 | 0 | 0 | 0 | 3 | concept |
| `/markten/fintech` | 11 | 11 | 0 | 0 | 0 | 4 | concept |
| `/partnernetwerk` | 11 | 11 | 0 | 0 | 0 | 0 | geverifieerd |
| `/tarieven` | 3 | 3 | 0 | 0 | 0 | 0 | geverifieerd |

## Voorgelegde zinnen (6)

Deze zinnen zijn niet bevestigd en staan nog in het blok. Het blok blijft "concept" tot jij per zin beslist: schrappen, of de bron aanwijzen.

- `/kennisbank/ai-agents-en-avg` · V2.1 (antwoord op vervolgvraag "Binnen hoeveel uur wordt een datalek gemeld onder de AVG bij AI agents?") · **niet gevonden**
  - Zin: 72 uur is onder de AVG bij AI agents de termijn waarbinnen een datalek zo mogelijk bij de Autoriteit Persoonsgegevens wordt gemeld, zonder onredelijke vertraging.
  - Reden: tweede lezing (laag C) wijkt af: De bron beperkt de meldplicht met 'tenzij het risico voor betrokkenen onwaarschijnlijk is'; de zin laat die voorwaarde weg en is daardoor stelliger dan de bron.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · A2 (antwoordalinea) · **niet gevonden**
  - Zin: Microsoft onderscheidt grofweg twee niveaus (stand september 2026): Copilot Chat, volgens Microsoft zonder extra kosten beschikbaar bij een geschikt Microsoft 365-abonnement, en de betaalde licentie, waarmee Copilot kan redeneren over de volle breedte van de werkdata.
  - Reden: De bron beperkt 'de volle breedte van je werkdata' met de voorwaarde 'voor zover de gebruiker daar toegang toe heeft'; die voorwaarde ontbreekt in deze zin, waardoor hij breder is dan de bron (de rest van de zin is gedekt, en A3 noemt de toegangsrechten wel).
- `/inzichten/ai-governance-zonder-bureaucratie` · A1 (antwoordalinea) · **niet gevonden**
  - Zin: AI-governance blijft licht als toepassingen eerst naar risico worden ingedeeld in laag, midden en hoog, zodat alleen de hoogste categorie het zwaarste regime krijgt.
  - Reden: De indeling in laag, midden en hoog en 'zware governance alleen waar het risico dat rechtvaardigt' staan in de bron, maar de stellige voorwaarde 'blijft licht als' staat er niet: de bron zegt alleen dat één regime voor alles lage-risicotoepassingen onnodig vertraagt en noemt de vier mechanismen 'licht'.
- `/ai-agents` · A2 (antwoordalinea) · **niet gevonden**
  - Zin: Dave Willemstein bouwt zelf geen agents en adviseert onafhankelijk over de keuze van de taak, de specificatie en het aansturen van een bouwpartij.
  - Reden: Geen agents bouwen en adviseren over kiezen, specificeren en aansturen staat in de bron, maar dat de adviseur daarover 'onafhankelijk' adviseert staat op deze pagina nergens over zijn eigen rol; 'onafhankelijk' komt alleen voor als algemene omschrijving (regel 28) en bij het vergelijken van offertes via de Vendor Review (regel 149).
- `/inzichten/de-business-case-voor-ai` · A3 (antwoordalinea) · **niet gevonden**
  - Zin: Bij goedkeuring ligt vast welke cijfers na twaalf maanden worden gerapporteerd, wat de nulmeting is en bij welke uitkomst wordt bijgestuurd of gestopt.
  - Reden: tweede lezing (laag C) wijkt af: De bron formuleert dit als advies ('Leg bij goedkeuring vast:') en noemt het 'het onderdeel dat het vaakst ontbreekt'; de zin stelt als feit dat het bij goedkeuring vastligt, wat stelliger is dan de bron.
- `/kennisbank/gemini-voor-bedrijven` · V2.2 (antwoord op vervolgvraag "Werkt Gemini voor bedrijven in Docs en Sheets met de editie Business Starter?") · **niet gevonden**
  - Zin: In Business Standard zit Gemini in onder andere Gmail, Docs en Meet.
  - Reden: De inhoud staat in de tabel, maar de bron geeft dit alleen als opgave van Google (kolom 'Gemini volgens Google', stand september 2026); de zin stelt het zonder dat voorbehoud als feit en is daarmee stelliger dan de bron.

## Geschrapte zinnen (5)

Deze zinnen zijn uit het concept gehaald en staan niet meer in `docs/rag-concepten.json`.

- `/kennisbank/prompt-engineering`: Uit hoeveel bouwstenen bestaat een prompt bij prompt engineering? 5 bouwstenen: rol, taak, context, voorbeelden en vorm. Bij prompt engineering heeft niet elke prompt ze alle vijf nodig, maar hoe belangrijker de uitkomst is, hoe meer bouwstenen worden ingevuld.
  - Reden: laag A: het aantal in het antwoord is zelf geteld en staat niet letterlijk op de pagina
- `/kennisbank/wat-doet-een-ai-developer`: Hoeveel zaken moeten vooraf geregeld zijn voor een goede samenwerking met een AI developer? 3 zaken helpen bij de samenwerking met een AI developer: een specificatie met meetbare eisen, een testset op eigen data die van de opdrachtgever blijft, en afspraken over beheer en overdracht.
  - Reden: laag A: het aantal in het antwoord is zelf geteld en staat niet letterlijk op de pagina
- `/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai`: Op hoeveel punten wordt een kandidaat-proces gescoord bij bedrijfsprocessen automatiseren met AI? 5 punten, elk met een score van 1 tot 5: volume, variatie, data, controle en eigenaar. Bij bedrijfsprocessen automatiseren met AI vallen processen af die laag scoren op controle of eigenaar, hoe aantrekkelijk ze ook klinken.
  - Reden: laag A: het aantal in het antwoord is zelf geteld en staat niet letterlijk op de pagina
- `/ai-automatisering/ai-tools`: Hoeveel criteria tellen mee bij het kiezen tussen de beste AI tools? 6 criteria bepalen de keuze tussen de beste AI tools: taak, bestaande software, data en privacy, beheer, kosten en exit. Voor zakelijke dienstverleners met vertrouwelijke klantinformatie wegen training en opslag, bewaartermijnen en logs, en beroepsregels extra zwaar.
  - Reden: laag A: het aantal in het antwoord is zelf geteld en staat niet letterlijk op de pagina
- `/ai-workshop/ai-geletterdheid-training`: Uit hoeveel onderdelen bestaat een AI geletterdheid training? 5 onderdelen in het voorbeeldprogramma: hoe AI werkt, de systemen van de organisatie, risico's en regels, afspraken en oefenen. De inhoud van een AI geletterdheid training wordt per organisatie afgestemd.
  - Reden: laag A: het aantal in het antwoord is zelf geteld en staat niet letterlijk op de pagina

## Blokken met een extern feit (30 blokken, 110 zinnen)

Feiten van buiten de eigen dienstverlening: wetgeving, prijzen van tools, salarissen en marktcijfers. De zin klopt met de eigen pagina, maar of de pagina zelf nog klopt met de werkelijkheid is niet gecontroleerd. Deze blokken blijven "concept".

- `/kennisbank/ai-voorbeelden` · V1.2 · overig extern: Bij de drie voorbeelden uit het dagelijks leven, over spamfilters, reistijd voorspellen en vertalen, heeft de leverancier zelf beschreven hoe AI wordt ingezet.
- `/kennisbank/ai-voorbeelden` · V2.1 · wetgeving: Zodra een toepassing zelf een besluit over een persoon neemt of een professioneel oordeel vervangt, gelden bij AI voorbeelden zwaardere eisen vanuit de AVG, de AI Act en de eigen sectorregels.
- `/kennisbank/ai-voorbeelden` · V2.2 · wetgeving: AI die sollicitaties filtert of kandidaten beoordeelt, staat in de AI Act op de lijst van hoog-risicotoepassingen; ook AI die de kredietwaardigheid van personen beoordeelt en het beoordelen van leerresultaten of toelating met AI vallen onder de hoog-risicotoepassingen van de AI Act.
- `/kennisbank/ai-agents-en-avg` · A1 · wetgeving: De AVG bij AI agents geldt volledig: de organisatie die de agent inzet, blijft verwerkingsverantwoordelijke, ook als de agent zelf gegevens opzoekt, vastlegt of verstuurt.
- `/kennisbank/ai-agents-en-avg` · A2 · wetgeving: De basis bestaat uit een vastgelegd doel met grondslag, toegang die per bron is afgebakend, een verwerkersovereenkomst met de leverancier, logging van elke stap en vaak een DPIA.
- `/kennisbank/ai-agents-en-avg` · A3 · wetgeving: Neemt de agent besluiten over mensen, dan komen de regels over geautomatiseerde besluitvorming erbij, en daarnaast kan de AI Act gelden.
- `/kennisbank/ai-agents-en-avg` · V1.1 · wetgeving: Nee.
- `/kennisbank/ai-agents-en-avg` · V1.2 · wetgeving: De AVG bij AI agents bestaat uit de bestaande regels, die direct van toepassing zijn; een apart hoofdstuk voor AI agents heeft de AVG niet.
- `/kennisbank/ai-agents-en-avg` · V2.1 · wetgeving: 72 uur is onder de AVG bij AI agents de termijn waarbinnen een datalek zo mogelijk bij de Autoriteit Persoonsgegevens wordt gemeld, zonder onredelijke vertraging.
- `/kennisbank/ai-agents-en-avg` · V2.2 · wetgeving: De melding is niet nodig als het risico voor betrokkenen onwaarschijnlijk is.
- `/kennisbank/ai-agents-en-avg` · V3.1 · wetgeving: Voor een agent kunnen de AVG en de AI Act tegelijk gelden: de AVG bij AI agents gaat over persoonsgegevens, de AI Act over het AI-systeem zelf.
- `/kennisbank/ai-agents-en-avg` · V3.2 · wetgeving: Voor agents die onder bijlage III vallen, bijvoorbeeld doordat ze sollicitaties filteren of kandidaten beoordelen, gelden de hoog-risicoverplichtingen door de Digital Omnibus vanaf 2 december 2027 in plaats van 2 augustus 2026.
- `/markten/automotive` · V1.1 · wetgeving: Ja.
- `/markten/automotive` · V1.2 · wetgeving: AI voor het selecteren van sollicitanten en voor het beoordelen van de kredietwaardigheid van particulieren staat op de hoog-risicolijst van de AI Act, met eisen die door de Digital Omnibus volgens de Europese Commissie vanaf 2 december 2027 gelden.
- `/markten/automotive` · V1.3 · wetgeving: Een chatbot of een tekstgenerator is bij AI in automotive geen hoog-risicotoepassing.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · A1 · toolprijs: Microsoft Copilot is de AI-assistent van Microsoft voor werk, die taalmodellen koppelt aan apps zoals Outlook, Teams, Word, Excel en PowerPoint en aan de mail, agenda, chats, vergaderingen en documenten daarin.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · A2 · toolprijs: Microsoft onderscheidt grofweg twee niveaus (stand september 2026): Copilot Chat, volgens Microsoft zonder extra kosten beschikbaar bij een geschikt Microsoft 365-abonnement, en de betaalde licentie, waarmee Copilot kan redeneren over de volle breedte van de werkdata.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · A3 · toolprijs: Omdat Copilot de bestaande toegangsrechten volgt, komen te ruim gedeelde bestanden in antwoorden naar boven en hoort het opschonen van die rechten bij de voorbereiding.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · V1.1 · toolprijs: Copilot Business kost € 18,20 en Microsoft Copilot voor enterprise € 26,00 per gebruiker per maand, bij jaarlijkse betaling en exclusief btw (stand september 2026).
- `/kennisbank/microsoft-copilot-voor-bedrijven` · V1.2 · toolprijs: Wie Copilot Business van 1 juli tot en met 31 december 2026 afsluit, betaalt het eerste jaar tijdelijk € 15,60.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · V2.1 · toolprijs: Nee, volgens wat Microsoft toezegt in de privacydocumentatie van Microsoft Copilot (stand september 2026): prompts, antwoorden en gegevens die via Microsoft Graph worden opgehaald, worden niet gebruikt om de basismodellen te trainen.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · V3.1 · toolprijs: Copilot Chat is vooral een chat die antwoordt op basis van het web en van wat de gebruiker zelf aanlevert, en kan in Outlook ook met mailbox, agenda en vergaderingen werken.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · V3.2 · toolprijs: Pas met de betaalde licentie werkt Microsoft Copilot breed met de eigen bedrijfsinformatie: Copilot kan dan redeneren over de volle breedte van de werkdata, zoals mail, chats, vergaderingen, documenten en sites, voor zover de gebruiker daar toegang toe heeft.
- `/inzichten/ai-adoptie-begint-bij-het-werk` · A1 · marktcijfer: Bij AI-adoptie zien organisaties die AI-tools uitrollen doorgaans tien tot vijftien procent wekelijks gebruik, omdat een algemene AI-assistent geen enkel startpunt biedt en medewerkers onzeker zijn over wat mag.
- `/ai-implementatie/advies` · V2.3 · wetgeving: Een DPIA is onder de AVG verplicht als de toepassing persoonsgegevens verwerkt met een grote kans op een hoog privacyrisico, en die vraag hoort aan het begin, niet vlak voor livegang.
- `/kennisbank/notuleren-met-ai` · A3 · wetgeving: Omdat een vergadering opnemen een verwerking van persoonsgegevens is, luidt het advies deelnemers vooraf te informeren en vast te leggen wat er wordt bewaard.
- `/ai-voor-bedrijven` · V1.1 · wetgeving: Ja.
- `/ai-voor-bedrijven` · V1.2 · wetgeving: Via de Digital Omnibus on AI, die op 27 juli 2026 in werking trad, gelden de regels voor de hoog-risicogebieden uit bijlage III, zoals werving en kredietverlening, vanaf 2 december 2027 en voor AI in gereguleerde producten vanaf 2 augustus 2028.
- `/ai-voor-bedrijven` · V3.1 · marktcijfer: AI voor bedrijven werd in 2025 het vaakst gebruikt voor marketing of verkoop (35 procent) en voor administratie of bestuurstaken (32 procent), volgens CBS-cijfers over AI-gebruikende bedrijven.
- `/ai-voor-bedrijven` · V3.2 · marktcijfer: Onder bedrijven die AI overwogen maar niet invoerden, was gebrek aan ervaring de meest genoemde reden.
- `/ai-beleid` · V2.1 · wetgeving: Nee, volgens de Europese Commissie is een certificaat niet nodig: een organisatie kan intern bijhouden welke trainingen en andere initiatieven zijn ingezet.
- `/ai-beleid` · V2.2 · wetgeving: De plicht rond AI-geletterdheid geldt sinds 2 februari 2025 en is met de Digital Omnibus, die op 27 juli 2026 in werking trad, aangepast: een organisatie moet maatregelen nemen om AI-geletterdheid te ondersteunen, zonder dat een bepaald niveau per persoon wordt voorgeschreven.
- `/kennisbank/prompt-engineering` · V2.1 · overig extern: Ultieme prompts helpen soms, maar de leveranciers van de assistenten leggen bij prompt engineering zelf de nadruk op iets saaiers: helder formuleren, context geven, voorbeelden tonen en testen.
- `/kennisbank/prompt-engineering` · V2.2 · overig extern: Anthropic benadrukt dat eerst moet vaststaan wat een goed resultaat is en hoe dat wordt getoetst, voordat aan de prompt wordt geschaafd.
- `/ai-voor-bedrijven/mkb` · V2.1 · marktcijfer: Ja.
- `/ai-voor-bedrijven/mkb` · V2.2 · marktcijfer: Het gebruik van AI voor het mkb blijft achter bij grotere bedrijven: in 2025 gebruikte 29,8 procent van de bedrijven met 10 tot en met 249 werkzame personen AI-technologie, tegen 66,2 procent van het grootbedrijf, volgens het CBS.
- `/ai-voor-bedrijven/mkb` · V2.3 · marktcijfer: Bij microbedrijven met 2 tot 9 werkzame personen was dat 13,8 procent, een aandeel dat sinds 2023 wel is verdubbeld.
- `/ai-beleid/ai-act` · A1 · wetgeving: De AI Act voor bedrijven hangt af van het volgende: welke AI een organisatie gebruikt of maakt, in welke van de vier risicocategorieën die valt en of de organisatie aanbieder of gebruiksverantwoordelijke is.
- `/ai-beleid/ai-act` · A2 · wetgeving: De verboden praktijken en de plicht rond AI-geletterdheid gelden sinds 2 februari 2025 en de transparantieverplichtingen sinds 2 augustus 2026; het negende verbod geldt pas vanaf 2 december 2026 en voor de machineleesbare markering van content uit systemen die al vóór 2 augustus 2026 op de markt waren geldt een overgangstermijn tot 2 december 2026.
- `/ai-beleid/ai-act` · A3 · wetgeving: De hoog-risicoregels gelden sinds de Digital Omnibus vanaf 2 december 2027 voor toepassingen uit bijlage III en vanaf 2 augustus 2028 voor AI in producten uit bijlage I (stand 23 september 2026).
- `/ai-beleid/ai-act` · V1.1 · wetgeving: Ja.
- `/ai-beleid/ai-act` · V1.2 · wetgeving: Volgens artikel 25 gebeurt dat bij een hoog-risicosysteem wanneer een organisatie er de eigen naam of het eigen merk op zet, het ingrijpend wijzigt of een systeem zo inzet dat het een hoog-risicotoepassing wordt.
- `/ai-beleid/ai-act` · V1.3 · wetgeving: Onder de AI Act voor bedrijven speelt die vraag bijvoorbeeld bij een algemene AI-tool die sollicitanten gaat rangschikken.
- `/ai-beleid/ai-act` · V2.1 · wetgeving: Minimaal zes maanden bewaart een gebruiksverantwoordelijke van een hoog-risicosysteem de automatisch gegenereerde logs, volgens artikel 26.
- `/ai-beleid/ai-act` · V2.2 · wetgeving: Onder de AI Act voor bedrijven noemt hetzelfde artikel voor die gebruiksverantwoordelijken onder meer ook menselijk toezicht, het melden van incidenten en het vooraf informeren van werknemers en hun vertegenwoordigers bij inzet van zo'n systeem op de werkvloer.
- `/inzichten/ai-governance-zonder-bureaucratie` · V3.3 · wetgeving: De Europese AI-verordening hanteert een eigen classificatie, en het advies is de juridische afdeling of een gespecialiseerde adviseur te laten vaststellen waar toepassingen exact onder vallen.
- `/ai-voor-bedrijven/zakelijke-dienstverleners` · V1.1 · wetgeving: Ja, bij een verwerking met een hoog risico is een DPIA bij AI voor zakelijke dienstverleners verplicht onder de AVG.
- `/ai-voor-bedrijven/zakelijke-dienstverleners` · V2.1 · overig extern: Voor AI voor zakelijke dienstverleners in de accountancy publiceerden de beroepsorganisaties NBA en NOREA in juni 2026 'Leidraad 2: AI Toegepast', en de Nederlandse orde van advocaten heeft aanbevelingen voor AI in de advocatuur gepubliceerd.
- `/ai-voor-bedrijven/zakelijke-dienstverleners` · V2.2 · overig extern: De kern van de leidraad is dat validatie en menselijk oordeel de basis blijven.
- `/ai-voor-bedrijven/zakelijke-dienstverleners` · V2.3 · overig extern: In de advocatuur blijft de advocaat altijd zelf verantwoordelijk voor het uiteindelijke advies.
- `/ai-workshop/copilot-training` · A2 · overig extern: Deelnemers leren goede opdrachten geven, kiezen tussen Copilot in een app en Copilot Chat, uitkomsten controleren en herkennen welke taken en gegevens niet bij Copilot horen.
- `/ai-agents/wat-is-een-ai-agent` · V1.1 · overig extern: De meeste wel: de meeste AI agents van nu draaien op een groot taalmodel, dat de opdracht begrijpt en over de volgende stap redeneert.
- `/ai-voor-bedrijven/ai-en-bi` · V1.1 · toolprijs: Nee, volgens Microsoft Learn niet (stand september 2026): Copilot in Power BI, een voorbeeld van AI en BI, vraagt een betaalde Fabric- of Premium-capaciteit en een Pro-licentie alleen is niet genoeg.
- `/ai-voor-bedrijven/ai-en-bi` · V1.2 · toolprijs: Zonder voorbereiding van het datamodel kan Copilot volgens Microsoft bovendien de data verkeerd interpreteren.
- `/kennisbank/ai-specialist-salaris` · A1 · salaris: Voor een AI specialist salaris publiceren de gecontroleerde salarisbronnen hun cijfers onder de titel AI engineer, niet onder AI specialist; ze verschillen onderling flink en zijn bruikbaar als bandbreedte, niet als vast bedrag.
- `/kennisbank/ai-specialist-salaris` · A2 · salaris: DataJobs (bijgewerkt mei 2026) noemt bruto per maand € 3.000 tot € 4.000 voor junioren, € 4.000 tot € 5.500 voor medioren en € 5.500 tot € 7.000 voor senioren; Indeed (bijgewerkt 14 september 2026) meldt een gemiddelde van € 56.643 per jaar.
- `/kennisbank/ai-specialist-salaris` · V1.1 · salaris: Nee.
- `/kennisbank/ai-specialist-salaris` · V1.2 · salaris: De gecontroleerde salarisbronnen publiceren hun cijfers onder de titel AI engineer, niet onder AI specialist.
- `/kennisbank/ai-specialist-salaris` · V1.3 · salaris: Bij een AI specialist salaris gaat het daarom om bandbreedtes per niveau van twee bronnen, in brutobedragen per maand.
- `/kennisbank/ai-specialist-salaris` · V2.1 · salaris: Lastig: de cijfers van Indeed en DataJobs zijn lastig één-op-één te vergelijken, want Indeed rekent in jaarbedragen op basis van wat werknemers zelf opgeven en DataJobs in brutomaandbedragen op basis van gegevens van het eigen platform.
- `/kennisbank/chatgpt-voor-bedrijven` · A1 · toolprijs: ChatGPT voor bedrijven is de AI-assistent van OpenAI als schrijf-, denk- en analysepartner die in gewone taal een tekst, samenvatting, analyse of opzet teruggeeft; bij ChatGPT Business horen volgens de prijspagina van OpenAI onder meer projecten, eigen GPT's, data-analyse en koppelingen (stand september 2026).
- `/kennisbank/chatgpt-voor-bedrijven` · A2 · toolprijs: Voor bedrijfsdata horen de abonnementen Business of Enterprise en geen persoonlijke accounts: bij beide blijft training op invoer en uitvoer volgens OpenAI standaard uit (stand september 2026).
- `/kennisbank/chatgpt-voor-bedrijven` · A3 · toolprijs: ChatGPT kan zelfverzekerd een fout antwoord geven, dus voor alles wat naar een klant, toezichthouder of directie gaat blijft een mens verantwoordelijk voor de controle.
- `/kennisbank/chatgpt-voor-bedrijven` · V1.1 · toolprijs: Een standaardplek van ChatGPT Business kost $20 per gebruiker per maand bij jaarbetaling of $25 bij maandbetaling, en een premiumplek $100 of $125 (stand september 2026).
- `/kennisbank/chatgpt-voor-bedrijven` · V1.2 · toolprijs: Dat zijn Amerikaanse lijstprijzen exclusief btw, en OpenAI geeft aan dat prijzen per land en valuta kunnen verschillen.
- `/kennisbank/chatgpt-voor-bedrijven` · V1.3 · toolprijs: Bij ChatGPT voor bedrijven is de prijs van ChatGPT Enterprise op aanvraag.
- `/kennisbank/chatgpt-voor-bedrijven` · V2.1 · toolprijs: ChatGPT Enterprise, voor nieuwe werkruimtes (EER en Zwitserland); bij ChatGPT Business is er geen Europese dataopslag (stand september 2026).
- `/kennisbank/chatgpt-voor-bedrijven` · V2.2 · toolprijs: Bij ChatGPT voor bedrijven vallen gegevens die via koppelingen of webzoekopdrachten naar externe diensten gaan daar volgens OpenAI niet onder.
- `/kennisbank/chatgpt-voor-bedrijven` · V3.2 · toolprijs: Bij de persoonlijke abonnementen kan OpenAI gesprekken gebruiken om modellen te verbeteren tenzij de gebruiker dat zelf uitzet, en de organisatie heeft geen zicht of zeggenschap over klantgegevens die een medewerker in een persoonlijk account zet.
- `/kennisbank/chatgpt-voor-bedrijven` · V3.3 · toolprijs: Voor Business en Enterprise is bovendien een verwerkersovereenkomst met OpenAI af te sluiten.
- `/inzichten/build-buy-of-partner` · V1.2 · marktcijfer: Een vuistregel uit de praktijk is dat het jaarlijkse onderhoud van een zelfgebouwde AI-toepassing tussen de 20% en 40% van de oorspronkelijke bouwkosten ligt.
- `/inzichten/build-buy-of-partner` · V3.1 · marktcijfer: Hooguit tien tot twintig procent, in de praktijk: zo veel van wat organisaties willen bouwen is werkelijk onderscheidend.
- `/inzichten/welke-ai-use-cases-leveren-resultaat` · V1.2 · marktcijfer: Iedereen een AI-assistent geven hoort niet bij de AI-use cases: het is geen use case maar een licentie, en zonder afgebakende scenario's blijft het gebruik hangen rond de tien procent.
- `/ai-consultancy/ai-advies` · V2.2 · wetgeving: AI advies over de AI Act helpt bepalen in welke risicocategorie een toepassing valt, wat dat van de organisatie vraagt en hoe de governance wordt ingericht.
- `/kennisbank/wat-doet-een-bi-specialist` · V1.2 · toolprijs: AI-functies in BI-platforms helpen bij het schrijven van berekeningen en queries, en de BI specialist controleert en verbetert.
- `/markten` · V1.1 · wetgeving: Vanaf 2 december 2027 gelden sinds de Digital Omnibus de regels voor hoog-risicotoepassingen, en voor AI in producten als medische hulpmiddelen vanaf 2 augustus 2028; die regels zijn uitgesteld.
- `/markten` · V1.2 · wetgeving: Bij AI per branche legt de AI Act een laag over de sectorregels heen, met verplichtingen die per toepassing verschillen; de uitwerking staat op de pagina over de AI Act [link naar /ai-beleid/ai-act].
- `/kennisbank/claude-voor-bedrijven` · A1 · toolprijs: Claude voor bedrijven is de AI-assistent van Anthropic in een zakelijk abonnement: Team voor 2 tot 150 gebruikers, of Enterprise met daarnaast onder meer SCIM, rolgebaseerde toegang en auditlogs.
- `/kennisbank/claude-voor-bedrijven` · A2 · toolprijs: Alleen de zakelijke abonnementen zijn geschikt voor gebruik met bedrijfsgegevens; bij Team en Enterprise traint Anthropic standaard niet op de content, en de data wordt volgens Anthropic in de VS opgeslagen (stand september 2026).
- `/kennisbank/claude-voor-bedrijven` · V1.1 · toolprijs: Een standaardplek in het Team-abonnement van Claude voor bedrijven kost $20 per gebruiker per maand bij jaarbetaling of $25 bij maandbetaling, en een premiumplek $100 of $125.
- `/kennisbank/claude-voor-bedrijven` · V1.2 · toolprijs: Enterprise kost $20 per plek per maand bij jaarbetaling plus gebruik tegen API-tarieven, met een jaarcontract van minimaal 20 plekken.
- `/kennisbank/claude-voor-bedrijven` · V1.3 · toolprijs: Dat zijn Amerikaanse lijstprijzen exclusief btw, stand september 2026.
- `/kennisbank/claude-voor-bedrijven` · V2.1 · toolprijs: Op dit moment kan Europese dataopslag bij Claude voor bedrijven alleen via de cloudplatforms, niet in de app (stand september 2026).
- `/kennisbank/claude-voor-bedrijven` · V2.2 · toolprijs: In de zakelijke abonnementen wordt de data volgens Anthropic opgeslagen in de VS.
- `/kennisbank/claude-voor-bedrijven` · V2.3 · toolprijs: Voor Europese dataopslag en verwerking wijst Anthropic naar de regionale endpoints van AWS Bedrock en Google Vertex, een route voor eigen toepassingen via de API en niet voor de claude.ai-app.
- `/kennisbank/claude-voor-bedrijven` · V3.1 · toolprijs: Nee.
- `/kennisbank/claude-voor-bedrijven` · V3.2 · toolprijs: Pro en Max zijn persoonlijke abonnementen waarbij modeltraining op gesprekken aan staat tot de gebruiker het zelf uitzet, en centraal beheer ontbreekt.
- `/kennisbank/claude-voor-bedrijven` · V3.3 · toolprijs: Voor Claude voor bedrijven met bedrijfsgegevens zijn alleen Team en Enterprise geschikt (stand september 2026).
- `/inzichten/de-business-case-voor-ai` · V2.2 · toolprijs: Bij AI wordt vaak betaald per verwerkt document, per gesprek of per verwerkte hoeveelheid tekst.
- `/inzichten/de-business-case-voor-ai` · V3.1 · overig extern: Doorgaans vier tot acht weken.
- `/ai-automatisering/ai-tools` · A2 · toolprijs: Organisaties die in Microsoft 365 of Google Workspace werken, beginnen bij Copilot of Gemini, en voor bedrijfs- of persoonsgegevens komt alleen een zakelijk abonnement met verwerkersovereenkomst in aanmerking.
- `/markten/fintech` · A2 · wetgeving: Kredietbeoordeling van personen en de risicobeoordeling en prijsstelling bij levens- en ziektekostenverzekeringen zijn hoog risico onder de AI Act, met regels vanaf 2 december 2027 (stand september 2026).
- `/markten/fintech` · V2.2 · wetgeving: Een kredietmodel dat nu wordt ingekocht of gebouwd, is waarschijnlijk nog in gebruik als de hoog-risicoregels vanaf 2 december 2027 gelden, dus bij AI in fintech horen die eisen nu al in ontwerp en selectie.
- `/markten/fintech` · V3.1 · wetgeving: Een AI-dienst die een financiële instelling afneemt, hoort bij AI in fintech in de praktijk bij de ICT-diensten van derden waarvan DORA een informatieregister vraagt, inclusief onderuitbesteding.
- `/markten/fintech` · V3.2 · wetgeving: DORA geldt sinds 17 januari 2025 en richt zich op de financiële instelling; de precieze kwalificatie is iets om te laten toetsen door de compliance- of juridische afdeling.
- `/kennisbank/gemini-voor-bedrijven` · A1 · toolprijs: Gemini voor bedrijven is de generatieve AI van Google, die sinds januari 2025 zonder aparte AI-licentie in de Business- en Enterprise-edities van Google Workspace zit; welke functies beschikbaar zijn, verschilt per editie.
- `/kennisbank/gemini-voor-bedrijven` · A2 · toolprijs: Bij organisaties die al met Google Workspace werken, zit Gemini waarschijnlijk al in het abonnement, zodat de vraag minder is of het wordt gekocht en meer hoe het wordt ingezet en welke afspraken over data gelden.
- `/kennisbank/gemini-voor-bedrijven` · A3 · toolprijs: Volgens Google dient klantdata uit Workspace zonder toestemming of instructie van de klant niet als trainingsmateriaal voor modellen (stand september 2026).
- `/kennisbank/gemini-voor-bedrijven` · V1.1 · toolprijs: Business Starter kost € 6,80, Business Standard € 13,60 en Business Plus € 21,10: dat zijn de Business-edities van Google Workspace met Gemini voor bedrijven, per gebruiker per maand bij een jaarcontract, exclusief belastingen (stand september 2026).
- `/kennisbank/gemini-voor-bedrijven` · V1.2 · toolprijs: De prijs van de Enterprise-editie is op aanvraag.
- `/kennisbank/gemini-voor-bedrijven` · V2.1 · toolprijs: In Business Starter zit Gemini voor bedrijven volgens Google niet in Docs en Sheets, wel in Gmail en in de Gemini-app (stand september 2026).
- `/kennisbank/gemini-voor-bedrijven` · V2.2 · toolprijs: In Business Standard zit Gemini in onder andere Gmail, Docs en Meet.
- `/kennisbank/gemini-voor-bedrijven` · V3.1 · toolprijs: Gemini voor bedrijven haalt volgens Google alleen gegevens op waartoe de gebruiker zelf toegang heeft.
- `/ai-workshop/ai-geletterdheid-training` · A1 · wetgeving: Artikel 4 van de AI Act geldt sinds 2 februari 2025 voor organisaties die AI ontwikkelen of gebruiken; sinds de wijziging van juli 2026 is het een inspanningsverplichting om maatregelen te nemen voor de AI-geletterdheid van personeel, zonder voorgeschreven niveau.
- `/ai-workshop/ai-geletterdheid-training` · A3 · wetgeving: Een certificaat is volgens de Europese Commissie niet nodig, terwijl het wel verstandig is intern vast te leggen welke maatregelen zijn genomen en waarom die passen.
- `/ai-workshop/ai-geletterdheid-training` · V1.1 · wetgeving: Nee.
- `/ai-workshop/ai-geletterdheid-training` · V1.2 · wetgeving: De verplichting uit artikel 4 van de AI Act, waar een AI geletterdheid training bij helpt, blijft bestaan voor aanbieders en gebruiksverantwoordelijken van AI-systemen.
- `/ai-workshop/ai-geletterdheid-training` · V1.3 · wetgeving: Sinds 27 juli 2026 is het een inspanningsverplichting, en niets doen voldoet niet (stand september 2026).
- `/ai-workshop/ai-geletterdheid-training` · V2.1 · wetgeving: Nee.
- `/ai-workshop/ai-geletterdheid-training` · V2.2 · wetgeving: Voor een AI geletterdheid training bestaat geen voorgeschreven lesprogramma: volgens de Autoriteit Persoonsgegevens hangt wat nodig is af van de risico's, de rollen en de context.

## Overige bevindingen: links, dienstnamen, lidwoorden en vragen (3)

Een blok met een bevinding blijft "concept".

- `/ai-implementatie/advies` · bron · bronregel: Het blok bevat een extern feit, maar "tarieven en doorlooptijden" is de enige bron in de bronregel.
- `/ai-beleid` · bron · bronregel: Het blok bevat een extern feit, maar "tarieven en doorlooptijden" is de enige bron in de bronregel.
- `/ai-consultancy/ai-advies` · bron · bronregel: Het blok bevat een extern feit, maar "tarieven en doorlooptijden" is de enige bron in de bronregel.
