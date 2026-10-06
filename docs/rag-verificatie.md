# RAG-blokken: verificatie in drie lagen

Stand: 6 oktober 2026 · branch `rag-blokken-fase-0` · er is niets geplaatst

Gecontroleerd zijn alle blokken en concepten behalve de vijf branchepagina's met status "wacht op publicatie": de drie geplaatste pilotblokken en 65 concepten uit `docs/rag-concepten.json`.

Alleen het oordeel "bevestigd" telt. Een zin die niet bevestigd is, is niet herschreven tot hij paste: hij is geschrapt of staat hieronder aan jou voorgelegd.

## Hoe er is gecontroleerd

**Laag A, script.** `planning/check-rag.mjs` eist dat elk bedrag, elke doorlooptijd, elk aantal en elke termijn in een blok letterlijk voorkomt in `src/data/prijzen.ts` of in de tekst van de eigen pagina. Geen match is een fout en laat de build falen. De enige normalisatie: hoofdletters, witruimte, "€ 7.000" naast "€7.000", en het scheidingsteken in een bereik (2-3, 2–3 en "2 tot 3" gelden als gelijk). Een bedrag, percentage of jaartal moet zelf voorkomen; elk ander getal moet voorkomen samen met het inhoudswoord ervoor of erna ("vijf werksessies", "artikel 25"), zodat een los cijfer niet toevallig past. Het woord "één" telt niet mee, omdat het meestal als lidwoord staat ("in één keer"). Alle 68 blokken slagen voor laag A.

**Laag B, onafhankelijke verificatie.** Zeven subagents die de teksten niet hebben geschreven, kregen per blok alleen de zinnen zoals ze op de site komen, de bronbestanden van die pagina en `prijzen.ts` (met de uitgerekende waarden ervan). De toelichting van de schrijver kregen ze niet. Per zin leverden ze de claim, het bronbestand met regelnummer, het letterlijke bronfragment en een oordeel: bevestigd, niet gevonden of tegenstrijdig. Daarnaast controleerden ze linkdoelen, dienstnamen en lidwoorden.

**Controle op de bronfragmenten, script.** Elk opgegeven fragment is door `planning/verificatie-verwerk.mjs` opgezocht in het genoemde bestand. Een fragment dat daar niet letterlijk staat, of een bestand dat niet bij de bronnen van het blok hoort, maakt het oordeel alsnog "niet gevonden". Zo telt een verzonnen of geparafraseerde bron niet mee.

**Laag C, tweede lezing.** Een andere subagent per batch trok de oordelen "bevestigd" na door het fragment zelf op te zoeken: alle zinnen met een getal en een derde van de overige zinnen. Wijkt in een batch meer dan één oordeel af, dan is de hele batch opnieuw door laag B gegaan. Een enkele afwijking maakt die zin alsnog niet bevestigd.

**Wat er met een niet-bevestigde zin gebeurt.**

- In het antwoord op een vervolgvraag: de zin is geschrapt. Is het de eerste zin van dat antwoord, dan vervalt de hele vervolgvraag, omdat de rest er dan niet meer zelfstandig staat.
- In de antwoordalinea of een tabelrij: voorgelegd. Schrappen zou daar de conclusie van het blok veranderen.
- Zou schrappen een blok zonder vervolgvraag achterlaten: voorgelegd.
- In een blok dat al geplaatst is: voorgelegd, het blok is niet gewijzigd.

Vraagkoppen, vervolgvragen en de bronregel zijn geen feitelijke claims en tellen niet mee in het aantal zinnen. Of een vraag iets veronderstelt dat niet in de bron staat, staat bij de overige bevindingen.

**Status in `docs/rag-concepten.json`.** Een blok is "geverifieerd" als elke overgebleven zin bevestigd is en er geen bevinding over links, dienstnamen, lidwoorden of vragen openstaat. Anders blijft het "concept". De vijf branchepagina's op `noindex` hebben "wacht op publicatie" en zijn niet geverifieerd. Jij zet goedgekeurde blokken op "akkoord"; alleen die worden bij de uitrol geplaatst.

**Grenzen van deze verificatie.** De bron is steeds de eigen pagina en `prijzen.ts`. Of wat de pagina zelf beweert klopt met de werkelijkheid (wetgeving, toolprijzen van derden, salarissen) is niet opnieuw gecontroleerd. Laag B en C zijn uitgevoerd door taalmodellen; de fragmentcontrole en laag A zijn deterministisch.

## Totaal

| Blokken | Zinnen | Bevestigd | Geschrapt | Voorgelegd | Geverifieerd | Nog concept |
|---|---|---|---|---|---|---|
| 68 | 730 | 667 | 91 | 19 | 25 | 43 |

## Laag C per batch

| Batch | Ronde laag B | Nagetrokken | Afwijkend |
|---|---|---|---|
| 1 | 1 | 55 | 1 |
| 2 | 2 | 45 | 0 |
| 3 | 1 | 45 | 0 |
| 4 | 1 | 46 | 0 |
| 5 | 1 | 52 | 0 |
| 6 | 1 | 46 | 0 |
| 7 | 1 | 47 | 1 |

## Per blok

| Pagina | Zinnen | Bevestigd | Geschrapt | Voorgelegd | Bevindingen | Status |
|---|---|---|---|---|---|---|
| `/ai-agents` | 12 | 10 | 3 | 1 | 1 | concept |
| `/ai-agents/laten-maken` | 12 | 8 | 4 | 0 | 1 | concept |
| `/ai-agents/voorbeelden` | 12 | 12 | 0 | 0 | 1 | concept |
| `/ai-agents/wat-is-een-ai-agent` | 11 | 11 | 0 | 0 | 1 | concept |
| `/ai-automatisering` | 11 | 10 | 3 | 0 | 0 | geverifieerd |
| `/ai-automatisering/ai-tools` | 9 | 9 | 0 | 0 | 1 | concept |
| `/ai-automatisering/ai-workflows` | 11 | 10 | 0 | 1 | 1 | concept |
| `/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai` | 9 | 9 | 0 | 0 | 0 | geverifieerd |
| `/ai-beleid` | 14 | 9 | 7 | 1 | 3 | concept |
| `/ai-beleid/ai-act` | 11 | 11 | 0 | 0 | 2 | concept |
| `/ai-consultancy` | 11 | 11 | 0 | 0 | 0 | geverifieerd |
| `/ai-consultancy/ai-advies` | 16 | 16 | 0 | 0 | 1 | concept |
| `/ai-consultancy/ai-consultant-inhuren` (geplaatst) | 7 | 5 | 0 | 2 | 2 | concept |
| `/ai-consultancy/ai-roadmap` | 11 | 11 | 0 | 0 | 0 | geverifieerd |
| `/ai-consultancy/ai-strategie` (geplaatst) | 10 | 8 | 0 | 2 | 2 | concept |
| `/ai-development` | 14 | 13 | 0 | 1 | 2 | concept |
| `/ai-development/ai-oplossingen` | 11 | 11 | 0 | 0 | 1 | concept |
| `/ai-development/ai-software` | 11 | 11 | 0 | 0 | 4 | concept |
| `/ai-development/ai-specialist` | 12 | 12 | 0 | 0 | 0 | geverifieerd |
| `/ai-implementatie` | 15 | 14 | 3 | 0 | 0 | geverifieerd |
| `/ai-implementatie/advies` | 11 | 7 | 4 | 1 | 1 | concept |
| `/ai-implementatie/stappenplan` | 12 | 10 | 3 | 1 | 0 | concept |
| `/ai-voor-bedrijven` | 12 | 11 | 0 | 1 | 4 | concept |
| `/ai-voor-bedrijven/ai-en-bi` | 11 | 11 | 0 | 0 | 1 | concept |
| `/ai-voor-bedrijven/mkb` | 12 | 11 | 3 | 0 | 0 | geverifieerd |
| `/ai-voor-bedrijven/zakelijke-dienstverleners` | 11 | 10 | 1 | 0 | 0 | geverifieerd |
| `/ai-workshop` | 12 | 12 | 0 | 0 | 2 | concept |
| `/ai-workshop/ai-coaching` | 10 | 9 | 2 | 0 | 0 | geverifieerd |
| `/ai-workshop/ai-geletterdheid-training` | 8 | 8 | 0 | 0 | 1 | concept |
| `/ai-workshop/chatgpt-training` | 9 | 9 | 0 | 0 | 1 | concept |
| `/ai-workshop/copilot-training` | 9 | 8 | 2 | 0 | 1 | concept |
| `/diensten` | 7 | 7 | 0 | 0 | 3 | concept |
| `/diensten/ai-due-diligence` | 7 | 5 | 2 | 0 | 0 | geverifieerd |
| `/diensten/ai-readiness-assessment` (geplaatst) | 10 | 10 | 0 | 0 | 1 | concept |
| `/diensten/ai-strategy-sprint` | 9 | 8 | 2 | 0 | 0 | geverifieerd |
| `/diensten/executive-briefing` | 7 | 6 | 2 | 0 | 1 | concept |
| `/diensten/fractional-ai-lead` | 7 | 6 | 2 | 0 | 0 | geverifieerd |
| `/diensten/vendor-review` | 7 | 4 | 0 | 3 | 2 | concept |
| `/inzichten/ai-adoptie-begint-bij-het-werk` | 12 | 12 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen` | 12 | 11 | 3 | 0 | 1 | concept |
| `/inzichten/ai-governance-zonder-bureaucratie` | 12 | 10 | 0 | 2 | 0 | concept |
| `/inzichten/ai-vendorselectie-in-acht-stappen` | 11 | 11 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/build-buy-of-partner` | 11 | 11 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/de-business-case-voor-ai` | 11 | 11 | 0 | 0 | 3 | concept |
| `/inzichten/freelance-ai-consultant-vs-agency-vs-big4` | 12 | 11 | 1 | 0 | 1 | concept |
| `/inzichten/het-datafundament-onder-ai` | 11 | 9 | 5 | 0 | 0 | geverifieerd |
| `/inzichten/van-ai-strategie-naar-waarde` | 12 | 12 | 0 | 0 | 3 | concept |
| `/inzichten/waarom-ai-pilots-blijven-steken` | 12 | 11 | 3 | 0 | 0 | geverifieerd |
| `/inzichten/wanneer-heb-je-echt-een-ai-strateeg-nodig` | 11 | 11 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/welke-ai-use-cases-leveren-resultaat` | 11 | 10 | 3 | 0 | 1 | concept |
| `/kennisbank/ai-agents-en-avg` | 11 | 11 | 0 | 0 | 0 | geverifieerd |
| `/kennisbank/ai-specialist-salaris` | 11 | 10 | 3 | 0 | 2 | concept |
| `/kennisbank/ai-voorbeelden` | 11 | 10 | 1 | 0 | 1 | concept |
| `/kennisbank/chatgpt-voor-bedrijven` | 12 | 10 | 6 | 0 | 0 | geverifieerd |
| `/kennisbank/claude-voor-bedrijven` | 12 | 12 | 0 | 0 | 3 | concept |
| `/kennisbank/gemini-voor-bedrijven` | 11 | 11 | 0 | 0 | 1 | concept |
| `/kennisbank/microsoft-copilot-voor-bedrijven` | 10 | 9 | 3 | 0 | 0 | geverifieerd |
| `/kennisbank/notuleren-met-ai` | 11 | 9 | 5 | 0 | 2 | concept |
| `/kennisbank/prompt-engineering` | 8 | 7 | 0 | 1 | 3 | concept |
| `/kennisbank/rpa-vs-ai-automatisering` | 12 | 11 | 1 | 0 | 0 | geverifieerd |
| `/kennisbank/wat-doet-een-ai-consultant` | 12 | 11 | 1 | 0 | 0 | geverifieerd |
| `/kennisbank/wat-doet-een-ai-developer` | 9 | 7 | 3 | 1 | 0 | concept |
| `/kennisbank/wat-doet-een-bi-specialist` | 12 | 11 | 1 | 0 | 2 | concept |
| `/markten` | 11 | 11 | 0 | 0 | 2 | concept |
| `/markten/automotive` | 12 | 12 | 0 | 0 | 0 | geverifieerd |
| `/markten/fintech` | 12 | 9 | 6 | 1 | 0 | concept |
| `/partnernetwerk` | 11 | 10 | 3 | 0 | 2 | concept |
| `/tarieven` | 3 | 3 | 0 | 0 | 0 | geverifieerd |

## Voorgelegde zinnen (19)

Deze zinnen zijn niet bevestigd en staan nog in het blok. Het blok blijft "concept" tot jij per zin beslist: schrappen, of de bron aanwijzen.

- `/ai-consultancy/ai-strategie` · A3 (antwoordalinea) · **niet gevonden**
  - Zin: Beide bedragen zijn exclusief btw en reiskosten.
  - Reden: Alleen 'exclusief btw' staat in de bronnen van dit blok (prijzen.ts regel 1); 'reiskosten' komt in geen van de drie bronbestanden voor. (blok is al geplaatst en is niet gewijzigd)
- `/ai-consultancy/ai-strategie` · V2.1 (antwoord op vervolgvraag "Kan de uitkomst zijn dat een organisatie nog niet klaar is voor een AI strategie?") · **niet gevonden**
  - Zin: Ja.
  - Reden: De bron zegt alleen 'nog niet klaar' (als uitkomst van het assessment) en noemt het fundamentplan juist 'ook een strategische keuze'; 'niet klaar voor een AI strategie' staat er niet. (blok is al geplaatst en is niet gewijzigd)
- `/ai-implementatie/advies` · A2 (antwoordalinea) · **niet gevonden**
  - Zin: Het resultaat is een beslisdocument met het besluit en de opdracht voor de bouwpartij; een concrete vraag over één toepassing past bij afgebakend advies tegen een vaste prijs per opdracht.
  - Reden: De bron zegt 'past meestal bij afgebakend advies'; in de zin is het voorbehoud 'meestal' weggevallen, waardoor onderdeel (2) stelliger is dan de bron. Onderdelen (1) en (3) zijn wel gedekt.
- `/ai-voor-bedrijven` · A2 (antwoordalinea) · **niet gevonden**
  - Zin: De grootste struikelblokken liggen buiten de techniek: ontbrekend eigenaarschap, geen beheer, privacy, regelgeving en schaduwgebruik.
  - Reden: De bron zegt 'zelden technisch'; de zin maakt daarvan het stelligere 'liggen buiten de techniek' (voorbehoud 'zelden' weggevallen). De vijf genoemde risico's staan wel in de bron (regels 103-107).
- `/ai-beleid` · A1 (antwoordalinea) · **niet gevonden**
  - Zin: Een AI beleid legt in één tot drie pagina's vast welke tools zijn toegestaan, welke gegevens erin mogen, wie beslist en hoe risico's worden beheerst.
  - Reden: Onderdeel (2) is stelliger dan de bron: 'één tot drie pagina's' geldt in de bron voor 'een eerste versie' en 'voor de meeste organisaties'; beide voorbehouden zijn weggevallen. Onderdeel (1) is wel gedekt.
- `/kennisbank/prompt-engineering` · A2 (antwoordalinea) · **niet gevonden**
  - Zin: Voor de meeste medewerkers komt het neer op een paar gewoontes: duidelijk en specifiek zijn, context en een rol geven, voorbeelden tonen en de gewenste vorm vastleggen.
  - Reden: De bron benoemt niet welke gewoontes dat zijn; de opsomming in de zin is door de schrijver samengesteld uit vijf van de acht 'technieken' (regels 65-75), die de bron niet als 'de gewoontes' aanduidt.
- `/ai-consultancy/ai-consultant-inhuren` · A1 (antwoordalinea) · **niet gevonden**
  - Zin: Een AI consultant inhuren bij Dave Willemstein kost per pakket een vaste prijs of een bedrag binnen een bandbreedte.
  - Reden: De bron van deze pagina noemt 'vaste pakketten en zichtbare vanaf-prijzen' en het woord bandbreedte komt er niet in voor; bovendien heeft de Fractional AI Lead een maandbedrag per niveau, wat geen vaste prijs en geen bandbreedte is, dus de tweedeling dekt niet alle pakketten. (blok is al geplaatst en is niet gewijzigd)
- `/ai-consultancy/ai-consultant-inhuren` · V1.1 (antwoord op vervolgvraag "Wat is het kleinste pakket om een AI consultant in te huren?") · **niet gevonden**
  - Zin: De Executive Briefing [link naar /diensten/executive-briefing].
  - Reden: De bron van deze pagina noemt de Executive Briefing alleen 'het kleinste pakket met een vaste prijs'; de zin (als antwoord op de vraag) maakt daar zonder die beperking 'het kleinste pakket' van, wat breder is. (blok is al geplaatst en is niet gewijzigd)
- `/ai-implementatie/stappenplan` · A3 (antwoordalinea) · **niet gevonden**
  - Zin: Het stappenplan gaat uit van één toepassing; organisaties met meerdere kandidaten bepalen eerst de volgorde in een AI-roadmap [link naar /ai-consultancy/ai-roadmap].
  - Reden: De bron stelt twee voorwaarden (meerdere kandidaten én eerst de volgorde willen bepalen) en formuleert het als advies; de zin laat de tweede voorwaarde weg en stelt het als feit voor alle organisaties met meerdere kandidaten, wat breder en stelliger is.
- `/inzichten/ai-governance-zonder-bureaucratie` · A2 (antwoordalinea) · **niet gevonden**
  - Zin: Daarnaast volstaan vier mechanismen: één register van alle toepassingen, één poort voor beoordeling vooraf, één periodieke toets en één escalatiepad.
  - Reden: De vier mechanismen staan in de bron, maar als wat je 'minimaal nodig hebt'; dat ze 'volstaan' (voldoende zijn) staat er niet en is een sterkere claim.
- `/inzichten/ai-governance-zonder-bureaucratie` · A3 (antwoordalinea) · **niet gevonden**
  - Zin: Te veel regels leiden ertoe dat medewerkers eromheen werken, waardoor een schaduwpraktijk ontstaat met tools die niemand kent.
  - Reden: De bron beschrijft dit als een risico ('Het risico is dat ...'); de zin stelt het als vaststaand gevolg ('leiden ertoe dat'), wat stelliger is dan de bron.
- `/ai-agents` · A3 (antwoordalinea) · **niet gevonden**
  - Zin: Offertes van meerdere bouwpartijen onafhankelijk laten vergelijken kan met de Vendor Review [link naar /diensten/vendor-review], die 3-6 weken duurt en €9.800 - €15.400 kost, exclusief btw en reiskosten.
  - Reden: Vendor Review, prijs en doorlooptijd zijn gedekt en 'exclusief btw' staat in prijzen.ts, maar 'exclusief reiskosten' staat in geen van de bronbestanden van dit blok (ai-agents/index.md, prijzen.ts, prijzen-waarden.txt).
- `/kennisbank/wat-doet-een-ai-developer` · A2 (antwoordalinea) · **niet gevonden**
  - Zin: Omdat een model een waarschijnlijk antwoord geeft dat fout kan zijn, zit het meeste werk in data, koppelingen en evaluatie en niet in het model zelf.
  - Reden: Beide deelclaims staan los in de bron, maar het oorzakelijke verband niet: de bron koppelt de foutgevoeligheid van het model aan 'meten, testen en afvangen' (evaluatie), niet aan het werk in data en koppelingen.
- `/diensten/vendor-review` · V1.1 (antwoord op vervolgvraag "Hoeveel leveranciers beoordeelt een Vendor Review?") · **tegenstrijdig**
  - Zin: 2 tot 4.
  - Reden: De prijsnotitie noemt '2 tot 4' leveranciers als factor voor de prijs, maar dezelfde bron toont een Vendor Review-case met 12 beoordeelde leveranciers; '2 tot 4' als algemeen antwoord op 'hoeveel leveranciers beoordeelt een Vendor Review' botst daarmee. (schrappen zou het blok zonder vervolgvraag laten)
- `/diensten/vendor-review` · V2.1 (antwoord op vervolgvraag "Is een Vendor Review zinvol als de leverancier al gekozen is?") · **niet gevonden**
  - Zin: Nee.
  - Reden: De bron zegt 'Minder geschikt als' en alleen onder de dubbele voorwaarde dat de leverancier feitelijk al gekozen is én je een onderbouwing achteraf zoekt; een onvoorwaardelijk 'Nee' is stelliger en breder. (schrappen zou het blok zonder vervolgvraag laten)
- `/diensten/vendor-review` · V2.2 (antwoord op vervolgvraag "Is een Vendor Review zinvol als de leverancier al gekozen is?") · **niet gevonden**
  - Zin: De Vendor Review is niet bedoeld om een keuze die feitelijk al gemaakt is achteraf te onderbouwen.
  - Reden: De bron noemt deze situatie onder de kop 'Minder geschikt als'; 'niet bedoeld om' is stelliger dan 'minder geschikt'. (schrappen zou het blok zonder vervolgvraag laten)
- `/ai-automatisering/ai-workflows` · A2 (antwoordalinea) · **niet gevonden**
  - Zin: De keten bestaat uit deze bouwstenen: trigger, ophalen, AI-stap, controle, actie en logging.
  - Reden: De zes bouwstenen staan in de bron, maar de bron zegt 'bestaat bijna altijd uit dezelfde bouwstenen'; de zin laat 'bijna altijd' weg en is daarmee stelliger.
- `/ai-development` · T1 (tabelrij) · **niet gevonden**
  - Zin: Bij de start, als er nog geen scherp beeld is van waar de organisatie staat \| Een eerste stap vóór de specificatie, inclusief eindpresentatie aan MT of board \| 2-3 weken \| €7.000 \| AI Readiness Assessment [link naar /diensten/ai-readiness-assessment]
  - Reden: Dat het assessment "vóór de specificatie" komt staat niet in de bron (de bron noemt het alleen "een logische eerste stap" binnen het punt "Bij de start"); prijs, doorlooptijd en eindpresentatie zijn wel gedekt.
- `/markten/fintech` · A1 (antwoordalinea) · **niet gevonden**
  - Zin: AI in fintech levert de snelste winst op bij documentverwerking en signalering, waar AI de gegevens uit documenten haalt en een mens het oordeel houdt.
  - Reden: De bron zegt "leveren vaak de snelste winst" en "Het oordeel hoort in de meeste processen bij een mens"; de zin laat "vaak" en "in de meeste processen" weg en is daarmee stelliger dan de bron.

## Geschrapte zinnen (96)

Deze zinnen zijn uit het concept gehaald en staan niet meer in `docs/rag-concepten.json`.

- `/diensten/ai-due-diligence`: Nee.
  - Reden: niet gevonden: De bron noemt de formele audit alleen onder 'Minder geschikt als' ([slug].astro regel 98); dat de dienst geen formele audit is, staat er niet met zoveel woorden en is een stelliger afleiding.
- `/diensten/ai-due-diligence`: De AI Due Diligence is geen formele audit met accountantsverklaring.
  - Reden: niet gevonden: De bron zegt alleen dat de dienst 'Minder geschikt' is als je een formele audit met accountantsverklaring nodig hebt; de stellige bewering 'is geen formele audit' staat er niet letterlijk.
- `/ai-implementatie`: Nee.
  - Reden: niet gevonden: De bron zegt alleen dat adoptie 'vaak' meer tijd kost dan de techniek; een onvoorwaardelijk 'Nee' is stelliger dan de bron.
- `/ai-implementatie`: De doorlooptijd van een AI implementatie verschilt sterk per toepassing, maar adoptie kost vaak meer tijd dan de techniek.
  - Reden: vervalt mee met de vervolgvraag "Kost de techniek de meeste tijd bij een AI implementatie?"
- `/ai-implementatie`: Een standaardproduct dat wordt geconfigureerd staat sneller dan maatwerk met koppelingen aan kernsystemen.
  - Reden: vervalt mee met de vervolgvraag "Kost de techniek de meeste tijd bij een AI implementatie?"
- `/kennisbank/ai-voorbeelden`: Alleen de drie voorbeelden uit het dagelijks leven, over spamfilters, reistijd voorspellen en vertalen, gaan over toepassingen die de leverancier zelf heeft beschreven.
  - Reden: niet gevonden: De drie voorbeelden en de leveranciersbeschrijving staan in de bron (regels 90-94), maar het woord 'Alleen' niet: de bron zegt nergens dat dit de enige voorbeelden met een leveranciersbeschrijving zijn.
- `/kennisbank/microsoft-copilot-voor-bedrijven`: Nee.
  - Reden: vervalt mee met de vervolgvraag "Werkt Microsoft Copilot met alle bedrijfsdata als een organisatie alleen Copilot Chat heeft?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/kennisbank/microsoft-copilot-voor-bedrijven`: Copilot Chat antwoordt vooral op basis van het web en van wat de gebruiker zelf aanlevert, en kan in Outlook met mailbox, agenda en vergaderingen werken.
  - Reden: vervalt mee met de vervolgvraag "Werkt Microsoft Copilot met alle bedrijfsdata als een organisatie alleen Copilot Chat heeft?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/kennisbank/microsoft-copilot-voor-bedrijven`: Pas met de betaalde licentie redeneert Microsoft Copilot over mail, chats, vergaderingen, documenten en sites waartoe de gebruiker toegang heeft.
  - Reden: niet gevonden: De bron zegt 'pas met de betaalde licentie werkt Copilot breed' en 'de volle breedte van je werkdata'; zonder die kwalificatie is 'Pas ... over mail ... vergaderingen' stelliger dan de bron, die ook zegt dat Copilot Chat in Outlook al met mailbox, agenda en vergaderingen werkt (regel 52).
- `/inzichten/het-datafundament-onder-ai`: Nee.
  - Reden: niet gevonden: De bron zegt dat een dagelijkse export 'vaak genoeg' is; een onvoorwaardelijk 'Nee' is stelliger dan de bron.
- `/inzichten/het-datafundament-onder-ai`: Voor het datafundament onder een eerste use case is een dagelijkse export vaak genoeg.
  - Reden: vervalt mee met de vervolgvraag "Is een centraal datawarehouse nodig voor het datafundament onder een eerste AI-use case?"
- `/inzichten/het-datafundament-onder-ai`: Toegankelijkheid en infrastructuur zijn meestal het minst urgente dataprobleem en vaak het makkelijkst op te lossen.
  - Reden: vervalt mee met de vervolgvraag "Is een centraal datawarehouse nodig voor het datafundament onder een eerste AI-use case?"
- `/inzichten/het-datafundament-onder-ai`: Vijf tot tien begrippen die de use case raakt, zijn genoeg voor het datafundament van één toepassing.
  - Reden: niet gevonden: tweede lezing (laag C) wijkt af: De bron noemt de vijf tot tien begrippen alleen als aanpak voor het definitieprobleem (probleem 1); dat ze genoeg zijn voor het hele datafundament van één toepassing staat er niet, want herkomst, kwaliteit en toegankelijkheid komen er volgens de bron nog bij.
- `/inzichten/het-datafundament-onder-ai`: Het hele bedrijfsdatamodel definiëren is daarvoor niet nodig.
  - Reden: vervalt mee met de vervolgvraag "Hoeveel begrippen moeten worden gedefinieerd voor het datafundament van één use case?"
- `/ai-implementatie/advies`: Ja.
  - Reden: niet gevonden: De bron zegt alleen dat er 'naar de privacykant' wordt gekeken en dat de DPIA-vraag aan het begin hoort; een 'privacytoets' als vast onderdeel van het advies staat er niet.
- `/ai-implementatie/advies`: Bij AI implementatie advies wordt in kaart gebracht welke data de toepassing nodig heeft en wordt de privacykant beoordeeld.
  - Reden: vervalt mee met de vervolgvraag "Hoort een privacytoets bij AI implementatie advies?"
- `/ai-implementatie/advies`: Verwerkt de toepassing persoonsgegevens met een grote kans op een hoog privacyrisico, dan is een DPIA verplicht onder de AVG, en die beoordeling vindt aan het begin plaats.
  - Reden: niet gevonden: Onderdeel (2) is stelliger en anders dan de bron: de bron zegt 'Die vraag hoort aan het begin' (normatief, en het gaat om de vraag), de zin zegt dat 'die beoordeling' aan het begin 'plaatsvindt'.
- `/ai-implementatie/advies`: De opdrachtgever vertelt waar de organisatie staat en hoort aan het eind wat de adviseur zou doen, ook als de uitkomst is dat er geen adviseur nodig is.
  - Reden: niet gevonden: De bron zegt 'dat je mij niet nodig hebt' (deze adviseur); de zin verbreedt dat tot 'dat er geen adviseur nodig is'. De rest van de zin is gedekt.
- `/kennisbank/notuleren-met-ai`: Drie manieren: ingebouwd in het vergaderplatform, via een bot die als deelnemer aan de vergadering wordt toegevoegd, of via een app op de computer die het geluid lokaal opneemt.
  - Reden: niet gevonden: De bron zegt 'grofweg drie manieren'; het voorbehoud 'grofweg' is weggevallen, waardoor het aantal stelliger is dan de bron. De drie manieren zelf zijn wel gedekt (regels 71-73).
- `/kennisbank/notuleren-met-ai`: Bij notuleren met AI bepaalt die keuze wie ziet dat er wordt opgenomen, waar de data terechtkomt en of het ook werkt bij externe vergaderingen.
  - Reden: vervalt mee met de vervolgvraag "Op hoeveel manieren kan een tool meeluisteren bij notuleren met AI?"
- `/kennisbank/notuleren-met-ai`: Nee.
  - Reden: vervalt mee met de vervolgvraag "Is notuleren met AI geschikt voor elke vergadering?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/kennisbank/notuleren-met-ai`: Notuleren met AI past niet bij vergaderingen waarin gevoelige onderwerpen langskomen, zoals gezondheid in een verzuimgesprek of een reorganisatie.
  - Reden: niet gevonden: De bron zegt 'Wees extra voorzichtig' en 'beter uit'; de zin maakt daarvan het stelligere 'past niet bij'.
- `/kennisbank/notuleren-met-ai`: Bij zulke vergaderingen staat de AI-notulist beter uit.
  - Reden: vervalt mee met de vervolgvraag "Is notuleren met AI geschikt voor elke vergadering?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/ai-beleid`: Ja.
  - Reden: vervalt mee met de vervolgvraag "Is een AI beleid haalbaar voor een mkb-bedrijf zonder compliance-afdeling?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/ai-beleid`: Een AI beleid voor het mkb past op één tot drie pagina's die iedereen in tien minuten kan lezen.
  - Reden: niet gevonden: De bron noemt 'één tot drie pagina's' alleen voor 'de eerste versie' (stap 5); de zin maakt daarvan dat een mkb-beleid daarop 'past'. De bron legt bovendien geen verband tussen die omvang en de leestijd van tien minuten.
- `/ai-beleid`: Het stappenplan loopt van inventariseren wat er al gebruikt wordt tot evalueren na drie maanden, en er is een AI-beleid template (pdf) [link naar /downloads/ai-beleid-template.pdf] met dezelfde opzet.
  - Reden: niet gevonden: Onderdeel (2): in de zin slaat 'dezelfde opzet' op het stappenplan, maar in de bron volgt het template de achtdelige documentopzet (Doel en reikwijdte tot Herziening, regels 162-169), niet het zevenstappenplan. Onderdeel (1) is wel gedekt.
- `/ai-beleid`: Nee.
  - Reden: vervalt mee met de vervolgvraag "Vraagt de AI Act om een certificaat voor AI-geletterdheid in het AI beleid?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/ai-beleid`: Volgens de Europese Commissie is een certificaat niet nodig: een organisatie kan intern bijhouden welke trainingen en andere initiatieven zijn ingezet.
  - Reden: vervalt mee met de vervolgvraag "Vraagt de AI Act om een certificaat voor AI-geletterdheid in het AI beleid?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/ai-beleid`: Sinds de Digital Omnibus, in werking sinds 27 juli 2026, moet een organisatie maatregelen nemen om AI-geletterdheid te ondersteunen, en het AI beleid is de plek om die vast te leggen.
  - Reden: niet gevonden: Onderdeel (2) is stelliger: de bron zegt 'de logische plek', de zin 'de plek'. Onderdeel (1) wekt met 'Sinds de Digital Omnibus ... moet' de indruk dat de plicht toen begon, terwijl de bron zegt dat de plicht sinds 2 februari 2025 geldt en met de Omnibus is 'aangepast'.
- `/ai-beleid`: AI governance werkt lichter als AI wordt toegevoegd aan het risico-overleg of de stuurgroep die al bestaat.
  - Reden: niet gevonden: De bron adviseert AI toe te voegen aan bestaand overleg, maar zegt nergens dat governance daardoor 'lichter werkt'; dat oorzakelijke verband is van de schrijver.
- `/kennisbank/prompt-engineering`: Uit hoeveel bouwstenen bestaat een prompt bij prompt engineering? 5 bouwstenen: rol, taak, context, voorbeelden en vorm. Bij prompt engineering heeft niet elke prompt ze alle vijf nodig, maar hoe belangrijker de uitkomst is, hoe meer bouwstenen worden ingevuld.
  - Reden: laag A: het aantal in het antwoord is zelf geteld en staat niet letterlijk op de pagina
- `/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen`: Nee.
  - Reden: niet gevonden: De bron geeft een advies ('vrijwel altijd' op niveau één of twee beginnen, 'ook als het model meer aankan') en noemt zelfstandig uitvoeren mogelijk 'bij omkeerbare stappen en een harde eindtoets' (regel 65); een onvoorwaardelijk 'Nee' op 'Kunnen ...' staat er niet.
- `/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen`: Het advies is om AI-agents te laten beginnen met voorbereiden of voorstellen, de laagste autonomieniveaus, ook als het model meer aankan.
  - Reden: vervalt mee met de vervolgvraag "Kunnen AI-agents vanaf de start zelfstandig een hele keten uitvoeren?"
- `/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen`: In die fase wordt duidelijk welke fouten werkelijk optreden, en die kennis is nodig om de autonomie veilig te verhogen.
  - Reden: vervalt mee met de vervolgvraag "Kunnen AI-agents vanaf de start zelfstandig een hele keten uitvoeren?"
- `/ai-implementatie/stappenplan`: Nee.
  - Reden: niet gevonden: De bron zegt nergens categorisch dat geen enkele stap kan worden overgeslagen; ze noemt alleen het gevolg van het overslaan van stap 3 en het uitstellen van stap 6.
- `/ai-implementatie/stappenplan`: In het AI implementatie stappenplan bepaalt elke stap de volgende.
  - Reden: vervalt mee met de vervolgvraag "Kan een stap uit het AI implementatie stappenplan worden overgeslagen?"
- `/ai-implementatie/stappenplan`: Wie de stap over data en systemen overslaat, ontdekt bij de pilot dat de data niet deugt, en wie adoptie pas na de oplevering oppakt, heeft een werkende toepassing die niemand gebruikt.
  - Reden: vervalt mee met de vervolgvraag "Kan een stap uit het AI implementatie stappenplan worden overgeslagen?"
- `/kennisbank/rpa-vs-ai-automatisering`: Bij robotic process automation en AI automatisering beperkt de rol van de adviseur zich tot bepalen welke aanpak bij het proces past, helpen bij het selecteren van een partij en de uitvoering begeleiden vanuit de kant van de opdrachtgever.
  - Reden: niet gevonden: De drie activiteiten staan in de bron, maar 'beperkt de rol zich tot' (een uitputtende afbakening) staat er niet; de bron zegt alleen dat hij niet bouwt en wat hij wel doet.
- `/ai-voor-bedrijven/mkb`: Ja.
  - Reden: vervalt mee met de vervolgvraag "Loopt AI voor het mkb achter op het grootbedrijf?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/ai-voor-bedrijven/mkb`: In 2025 gebruikte 29,8 procent van de bedrijven met 10 tot en met 249 werkzame personen AI-technologie, tegen 66,2 procent van het grootbedrijf, volgens het CBS.
  - Reden: vervalt mee met de vervolgvraag "Loopt AI voor het mkb achter op het grootbedrijf?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/ai-voor-bedrijven/mkb`: Bij microbedrijven met 2 tot 9 werkzame personen was dat 13,8 procent, zodat AI voor het mkb nog ruimte heeft om te groeien.
  - Reden: niet gevonden: Het cijfer 13,8 procent staat in de bron, maar de conclusie 'zodat AI voor het mkb nog ruimte heeft om te groeien' staat er niet; de bron zegt alleen dat het aandeel sinds 2023 is verdubbeld.
- `/inzichten/waarom-ai-pilots-blijven-steken`: Ja.
  - Reden: niet gevonden: De bron zegt dat je de pilot 'nog steeds kunt doen' en dat er 'vaak' een kleinere waarde overblijft; een onvoorwaardelijk 'Ja' op de vraag of pilots dan zin hebben is stelliger dan 'kan' en 'vaak'.
- `/inzichten/waarom-ai-pilots-blijven-steken`: AI-pilots kunnen dan nog steeds doorgaan, maar de businesscase wordt doorgerekend zonder de besparing die verandering vereist.
  - Reden: vervalt mee met de vervolgvraag "Hebben AI-pilots zin als er in de organisatie niets mag veranderen?"
- `/inzichten/waarom-ai-pilots-blijven-steken`: Wat dan overblijft is vaak een kleinere, maar reële waarde.
  - Reden: vervalt mee met de vervolgvraag "Hebben AI-pilots zin als er in de organisatie niets mag veranderen?"
- `/diensten/ai-strategy-sprint`: Nee.
  - Reden: niet gevonden: De bron zegt 'Minder geschikt als'; een onvoorwaardelijk 'Nee' (niet geschikt) is stelliger dan de bron. De vervolgzin V2.2 geeft de nuance wel correct weer.
- `/diensten/ai-strategy-sprint`: Zonder mandaat om keuzes te maken is de AI Strategy Sprint minder geschikt en past eerst een Executive Briefing [link naar /diensten/executive-briefing].
  - Reden: vervalt mee met de vervolgvraag "Is de AI Strategy Sprint geschikt als er nog geen mandaat is om keuzes te maken?"
- `/ai-automatisering`: Nee.
  - Reden: vervalt mee met de vervolgvraag "Is voor AI automatisering altijd maatwerk nodig?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/ai-automatisering`: De meeste AI automatisering draait op een workflowplatform dat bestaande systemen koppelt en alleen een AI-stap toevoegt waar dat nodig is.
  - Reden: niet gevonden: De bron zegt dat je voor de meeste AI automatisering geen maatwerk nodig hebt en beschrijft wat een workflowplatform doet; dat de meeste AI automatisering feitelijk 'draait op' een workflowplatform staat er niet, en het woord 'alleen' is toegevoegd.
- `/ai-automatisering`: Prijzen en functies van zulke platforms veranderen snel en horen bij de leverancier zelf gecontroleerd te worden.
  - Reden: vervalt mee met de vervolgvraag "Is voor AI automatisering altijd maatwerk nodig?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/ai-agents`: Ja.
  - Reden: niet gevonden: De bron zegt 'vaak goedkoper'; een onvoorwaardelijk 'Ja' maakt van 'vaak' een stelliger 'altijd'. De vervolgzin V2.2 behoudt 'vaak' wel.
- `/ai-agents`: AI agents binnen het platform van een bestaande softwareleverancier zijn sneller en vaak goedkoper om mee te beginnen, maar de organisatie is gebonden aan wat dat platform kan en aan de prijsontwikkeling van de leverancier.
  - Reden: vervalt mee met de vervolgvraag "Zijn AI agents binnen een bestaand softwareplatform goedkoper om mee te starten dan maatwerk?"
- `/ai-agents`: Maatwerk geeft meer controle, met kosten voor beheer en doorontwikkeling.
  - Reden: vervalt mee met de vervolgvraag "Zijn AI agents binnen een bestaand softwareplatform goedkoper om mee te starten dan maatwerk?"
- `/ai-voor-bedrijven/zakelijke-dienstverleners`: In beide blijft het menselijk oordeel van de professional de basis.
  - Reden: niet gevonden: Alleen voor de leidraad van NBA en NOREA zegt de bron dat 'validatie en menselijk oordeel de basis blijven'; over de NOvA-aanbevelingen staat er dat de advocaat zelf verantwoordelijk blijft, niet dat menselijk oordeel de basis is. De zin laat bovendien 'validatie' weg.
- `/kennisbank/wat-doet-een-ai-developer`: Hoeveel zaken moeten vooraf geregeld zijn voor een goede samenwerking met een AI developer? 3 zaken helpen bij de samenwerking met een AI developer: een specificatie met meetbare eisen, een testset op eigen data die van de opdrachtgever blijft, en afspraken over beheer en overdracht.
  - Reden: laag A: het aantal in het antwoord is zelf geteld en staat niet letterlijk op de pagina
- `/kennisbank/wat-doet-een-ai-developer`: Nee.
  - Reden: niet gevonden: De bron zegt 'doorgaans níét'; een onvoorwaardelijk 'Nee' is stelliger. De vervolgzin V2.2 behoudt 'doorgaans' wel.
- `/kennisbank/wat-doet-een-ai-developer`: Een AI developer bepaalt doorgaans niet of de toepassing de investering waard is, kiest niet tussen leveranciers namens de organisatie en richt de governance niet in.
  - Reden: vervalt mee met de vervolgvraag "Beslist een AI developer of een toepassing de investering waard is?"
- `/kennisbank/wat-doet-een-ai-developer`: Dat hoort bij de rol van een AI consultant aan de kant van de opdrachtgever.
  - Reden: vervalt mee met de vervolgvraag "Beslist een AI developer of een toepassing de investering waard is?"
- `/partnernetwerk`: Nee.
  - Reden: vervalt mee met de vervolgvraag "Heeft dit alternatief voor een AI bureau een partnerstatus bij Microsoft, OpenAI of andere leveranciers?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/partnernetwerk`: Bij Microsoft, OpenAI, Anthropic, Google, Amazon Web Services, Mistral AI en Meta bestaat geen partnerstatus, resellerafspraak of commissieregeling.
  - Reden: vervalt mee met de vervolgvraag "Heeft dit alternatief voor een AI bureau een partnerstatus bij Microsoft, OpenAI of andere leveranciers?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/partnernetwerk`: Wie een AI bureau zoekt, krijgt daardoor een vergelijking van platforms zonder eigen belang, inclusief het oordeel wanneer een goedkopere of eenvoudigere optie volstaat.
  - Reden: niet gevonden: De bron zegt dat de adviseur de platforms eerlijk naast elkaar 'kan' zetten; dat iedereen die een AI bureau zoekt zo'n vergelijking 'krijgt' is stelliger en staat er niet ('kan' wordt 'krijgt').
- `/ai-workshop/copilot-training`: Nee.
  - Reden: vervalt mee met de vervolgvraag "Is de Copilot training een vast standaardprogramma?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/ai-workshop/copilot-training`: De Copilot training is maatwerk: in de intake komen doel, doelgroep, licenties en interne afspraken aan bod, waarna drie tot vijf taken per rol tot oefeningen worden uitgewerkt.
  - Reden: niet gevonden: Maatwerk en 'drie tot vijf taken per rol' zijn gedekt, maar de inhoud van de intake en de volgorde komen uit een opzet die de bron uitdrukkelijk als voorbeeld presenteert ('Een programma kan er bijvoorbeeld zo uitzien'); de zin stelt dit als vaststaand verloop ('kan bijvoorbeeld' wordt 'is').
- `/diensten/fractional-ai-lead`: Ja.
  - Reden: niet gevonden: Deels gedekt: de bron kent een minimale looptijd van 3 maanden en pas daarna maandelijkse opzegbaarheid; een onvoorwaardelijk 'Ja' op 'tussentijds opzegbaar' is breder dan de bron (de nuance staat wel in V1.2).
- `/diensten/fractional-ai-lead`: De Fractional AI Lead heeft een minimale looptijd van 3 maanden en is daarna maandelijks opzegbaar.
  - Reden: vervalt mee met de vervolgvraag "Is de Fractional AI Lead tussentijds opzegbaar?"
- `/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai`: Op hoeveel punten wordt een kandidaat-proces gescoord bij bedrijfsprocessen automatiseren met AI? 5 punten, elk met een score van 1 tot 5: volume, variatie, data, controle en eigenaar. Bij bedrijfsprocessen automatiseren met AI vallen processen af die laag scoren op controle of eigenaar, hoe aantrekkelijk ze ook klinken.
  - Reden: laag A: het aantal in het antwoord is zelf geteld en staat niet letterlijk op de pagina
- `/kennisbank/ai-specialist-salaris`: Nee.
  - Reden: niet gevonden: De bron zegt dat de cijfers 'lastig één-op-één te vergelijken' zijn; een onvoorwaardelijk 'Nee' (niet vergelijkbaar) is stelliger dan de bron.
- `/kennisbank/ai-specialist-salaris`: Indeed rekent in jaarbedragen op basis van 400 door werknemers doorgegeven salarissen, DataJobs in brutomaandbedragen op basis van gegevens van het eigen platform.
  - Reden: vervalt mee met de vervolgvraag "Zijn de cijfers van Indeed en DataJobs voor een AI specialist salaris onderling vergelijkbaar?"
- `/kennisbank/ai-specialist-salaris`: Voor een AI specialist salaris zijn beide daarom alleen als orde van grootte bruikbaar.
  - Reden: vervalt mee met de vervolgvraag "Zijn de cijfers van Indeed en DataJobs voor een AI specialist salaris onderling vergelijkbaar?"
- `/kennisbank/chatgpt-voor-bedrijven`: Een standaardplek van ChatGPT Business, het instapabonnement van ChatGPT voor bedrijven, kost $20 per gebruiker per maand bij jaarbetaling of $25 bij maandbetaling, en een premiumplek $100 of $125.
  - Reden: niet gevonden: Deels gedekt: de prijzen staan in de bron, maar de aanduiding van ChatGPT Business als 'het instapabonnement van ChatGPT voor bedrijven' staat er niet (de bron zegt 'Teams vanaf 2 gebruikers, zelf af te sluiten').
- `/kennisbank/chatgpt-voor-bedrijven`: Dat zijn Amerikaanse lijstprijzen exclusief btw, stand september 2026.
  - Reden: vervalt mee met de vervolgvraag "Wat kost ChatGPT voor bedrijven per gebruiker?"
- `/kennisbank/chatgpt-voor-bedrijven`: De prijs van ChatGPT Enterprise is op aanvraag.
  - Reden: vervalt mee met de vervolgvraag "Wat kost ChatGPT voor bedrijven per gebruiker?"
- `/kennisbank/chatgpt-voor-bedrijven`: Ja.
  - Reden: niet gevonden: Deels gedekt: volgens de bron is Europese dataopslag er alleen bij Enterprise (nieuwe werkruimtes) en niet bij Business; een onvoorwaardelijk 'Ja' is breder dan de bron (de nuance staat wel in V2.2).
- `/kennisbank/chatgpt-voor-bedrijven`: ChatGPT voor bedrijven biedt Europese dataopslag bij het Enterprise-abonnement, voor nieuwe werkruimtes (EER en Zwitserland), maar niet bij ChatGPT Business (stand september 2026).
  - Reden: vervalt mee met de vervolgvraag "Biedt ChatGPT voor bedrijven Europese dataopslag?"
- `/kennisbank/chatgpt-voor-bedrijven`: Gegevens die via koppelingen of webzoekopdrachten naar externe diensten gaan, vallen daar volgens OpenAI niet onder.
  - Reden: vervalt mee met de vervolgvraag "Biedt ChatGPT voor bedrijven Europese dataopslag?"
- `/inzichten/welke-ai-use-cases-leveren-resultaat`: Nee.
  - Reden: vervalt mee met de vervolgvraag "Is een algemene AI-assistent voor alle medewerkers een van de AI-use cases die resultaat opleveren?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/inzichten/welke-ai-use-cases-leveren-resultaat`: Iedereen een assistent geven is geen use case maar een licentie, en zonder afgebakende scenario's blijft het gebruik hangen rond de tien procent.
  - Reden: vervalt mee met de vervolgvraag "Is een algemene AI-assistent voor alle medewerkers een van de AI-use cases die resultaat opleveren?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/inzichten/welke-ai-use-cases-leveren-resultaat`: AI-use cases werken beter met drie tot vijf concrete taken met kant-en-klare startpunten, waarna pas later vrijheid volgt.
  - Reden: niet gevonden: Deels gedekt: de bron geeft dit als advies bij het uitrollen van een AI-assistent ('Kies drie tot vijf concrete taken ...'); de stelling dat 'AI-use cases beter werken' met drie tot vijf taken staat er niet en verbreedt het advies naar use cases in het algemeen.
- `/ai-agents/laten-maken`: Het bedrag is exclusief btw en reiskosten.
  - Reden: niet gevonden: 'Exclusief btw' staat in prijzen.ts; 'exclusief reiskosten' staat in geen van de bronbestanden van dit blok.
- `/ai-agents/laten-maken`: Ja.
  - Reden: niet gevonden: De bron formuleert dit als advies aan de lezer (gebiedende wijs: 'Geef hem niet meer rechten dan nodig, laat hem inloggen met een eigen account ... en houd een bevestigingsstap'), niet als feit over AI agents; de zin stelt het als vaststaand feit en is daarmee stelliger.
- `/ai-agents/laten-maken`: Een AI agent logt in met een eigen account, zodat zijn handelingen herleidbaar zijn, en krijgt niet meer rechten dan voor de taak nodig is.
  - Reden: niet gevonden: De bron formuleert dit als advies aan de lezer (gebiedende wijs: 'Geef hem niet meer rechten dan nodig, laat hem inloggen met een eigen account ... en houd een bevestigingsstap'), niet als feit over AI agents; de zin stelt het als vaststaand feit en is daarmee stelliger.
- `/ai-agents/laten-maken`: Op elk onomkeerbaar moment blijft er bij een AI agent een bevestigingsstap.
  - Reden: niet gevonden: De bron formuleert dit als advies aan de lezer (gebiedende wijs: 'Geef hem niet meer rechten dan nodig, laat hem inloggen met een eigen account ... en houd een bevestigingsstap'), niet als feit over AI agents; de zin stelt het als vaststaand feit en is daarmee stelliger.
- `/kennisbank/wat-doet-een-bi-specialist`: Een AI-toepassing op bedrijfscijfers is zo betrouwbaar als de definities en de data eronder, en dat fundament is het werk van een BI specialist.
  - Reden: niet gevonden: Het eerste deel staat letterlijk in de bron; het tweede deel luidt in de bron 'Dat fundament is typisch het werk van een BI specialist'. De zin laat 'typisch' weg en is daarmee stelliger.
- `/ai-workshop/ai-coaching`: Nee.
  - Reden: niet gevonden: De bron zegt 'Het past minder als de vraag organisatiebreed is'; een onvoorwaardelijk 'Nee' is stelliger dan 'past minder'. (V3.2 geeft het wel correct weer.)
- `/ai-workshop/ai-coaching`: AI coaching past minder bij een organisatiebrede vraag: moet iemand de AI-agenda van de hele organisatie sturen, dan is de Fractional AI Lead [link naar /diensten/fractional-ai-lead] de betere vorm.
  - Reden: vervalt mee met de vervolgvraag "Past AI coaching bij een vraag die de hele organisatie raakt?"
- `/diensten/executive-briefing`: Nee.
  - Reden: vervalt mee met de vervolgvraag "Is de Executive Briefing een keynote?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/diensten/executive-briefing`: De Executive Briefing is een werksessie met open gesprek voor bestuurders en toezichthouders, geen inspirerende keynote.
  - Reden: niet gevonden: Het woord "werksessie" staat niet in de bron bij deze dienst (de bron spreekt van "sessie" en "compacte sessie"), en "Open gesprek, geen slides" geldt in de bron alleen voor Blok 2; de overige onderdelen zijn wel gedekt.
- `/kennisbank/wat-doet-een-ai-consultant`: In andere gevallen kan een organisatie het beter zelf doen.
  - Reden: niet gevonden: De bron zegt alleen dat er gevallen zijn waarin je het beter zelf doet (uitgewerkt op een andere pagina), niet dat dit voor alle overige gevallen geldt; "in andere gevallen" is breder dan de bron.
- `/ai-automatisering/ai-tools`: Hoeveel criteria tellen mee bij het kiezen tussen de beste AI tools? 6 criteria bepalen de keuze tussen de beste AI tools: taak, bestaande software, data en privacy, beheer, kosten en exit. Voor zakelijke dienstverleners met vertrouwelijke klantinformatie wegen training en opslag, bewaartermijnen en logs, en beroepsregels extra zwaar.
  - Reden: laag A: het aantal in het antwoord is zelf geteld en staat niet letterlijk op de pagina
- `/markten/fintech`: Ja.
  - Reden: vervalt mee met de vervolgvraag "Blijft bij AI in fintech een mens verantwoordelijk voor het oordeel?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/markten/fintech`: In de meeste processen haalt AI in fintech de feiten uit een document en bevestigt of corrigeert een mens de voorstellen van het systeem.
  - Reden: niet gevonden: In de bron slaat "in de meeste processen" op het oordeel dat bij een mens hoort; dat AI in de meeste processen de feiten uit een document haalt staat er niet (bron: "AI is goed in extractie en kan daar veel zoekwerk wegnemen").
- `/markten/fintech`: Elke bevestiging en correctie levert een auditspoor en een meetbare kwaliteitsloop op.
  - Reden: vervalt mee met de vervolgvraag "Blijft bij AI in fintech een mens verantwoordelijk voor het oordeel?": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer
- `/markten/fintech`: Ja.
  - Reden: niet gevonden: tweede lezing (laag C) wijkt af: Het fragment staat er (regel 101), maar een onvoorwaardelijk 'Ja' is stelliger dan de bron: die noemt het 'een DORA-vraag', zegt in de FAQ (regel 30) dat DORA zich op de financiële instelling richt, dat een AI-dienst er 'in de praktijk' bij hoort en dat de precieze kwalificatie getoetst moet worden.
- `/markten/fintech`: DORA geldt sinds 17 januari 2025 en verplicht financiële instellingen tot een informatieregister van alle ICT-diensten die ze van derden afnemen, inclusief onderuitbesteding.
  - Reden: vervalt mee met de vervolgvraag "Valt een AI-dienst van een externe leverancier bij AI in fintech ook onder DORA?"
- `/markten/fintech`: Bij AI in fintech horen exitpad, afhankelijkheid en incidentafspraken daarom in de selectie van een externe AI-dienst.
  - Reden: vervalt mee met de vervolgvraag "Valt een AI-dienst van een externe leverancier bij AI in fintech ook onder DORA?"
- `/ai-workshop/ai-geletterdheid-training`: Uit hoeveel onderdelen bestaat een AI geletterdheid training? 5 onderdelen in het voorbeeldprogramma: hoe AI werkt, de systemen van de organisatie, risico's en regels, afspraken en oefenen. De inhoud van een AI geletterdheid training wordt per organisatie afgestemd.
  - Reden: laag A: het aantal in het antwoord is zelf geteld en staat niet letterlijk op de pagina
- `/inzichten/freelance-ai-consultant-vs-agency-vs-big4`: Een eerlijk en onderbouwd antwoord is betrouwbaarder dan de bewering volledig onafhankelijk te zijn.
  - Reden: niet gevonden: De bron vergelijkt met een partij die "volledig onafhankelijk" roept "zonder dat te onderbouwen"; die voorwaarde ontbreekt in de zin, waardoor elke onafhankelijkheidsclaim als minder betrouwbaar wordt neergezet.

## Overige bevindingen: links, dienstnamen, lidwoorden en vragen (68)

Een blok met een bevinding blijft "concept".

- `/diensten/ai-readiness-assessment` · vraag · vervolgvragen[1] / V2.1-V2.2: De bron noemt naast 'Vaste prijs' ook een uitzondering: voor één business unit of procesdomein 'ligt de investering lager' (src/data/services.js regel 72). De vraag en het antwoord noemen die nuance niet.
- `/kennisbank/ai-voorbeelden` · vraag · vervolgvragen[0] / V1.3: Het antwoord op deze vraag voegt met 'Alleen' een exclusiviteit toe die niet in de bron staat.
- `/ai-consultancy/ai-strategie` · vraag · vervolgvragen[1]: De vraag veronderstelt 'nog niet klaar voor een AI strategie'. De bron (regel 100) zegt alleen 'nog niet klaar' en noemt het plan voor het fundament 'ook een strategische keuze'; de toevoeging 'voor een AI strategie' is niet gedekt.
- `/ai-consultancy/ai-strategie` · vraag · vervolgvragen[0]: De vraag spreekt over 'een AI strategie' die goedkoper wordt; de bron koppelt de onderkant van de bandbreedte uitsluitend aan de AI Strategy Sprint (prijsnotitie), niet aan 'een AI strategie' in het algemeen.
- `/diensten` · link · A1: Beide links passen: 'Executive Briefing' naar /diensten/executive-briefing en 'Fractional AI Lead' naar /diensten/fractional-ai-lead.
- `/diensten` · vraag · A1: De spanwijdte 'van een Executive Briefing tot ... Fractional AI Lead' is een eigen ordening van de schrijver; de bron gebruikt 'Van AI Readiness Assessment tot Fractional AI Lead' (index.astro regel 10). De losse onderdelen zijn wel gedekt.
- `/diensten` · vraag · A2: De bron zegt nergens letterlijk dat de keuze 'afhangt van de situatie'; dat is afgeleid uit de kop 'Welke past wanneer?' en de eyebrows per dienst. De vergelijkingstabel onder die kop bevat bovendien alleen de drie hoofddiensten, niet de Vendor Review ('een leverancier kiezen').
- `/ai-implementatie/advies` · link · A3: Link past: 'AI Readiness Assessment' naar /diensten/ai-readiness-assessment.
- `/kennisbank/notuleren-met-ai` · vraag · vervolgvragen[2]: De vraag is gesteld als 'Mogen medewerkers ...'; de bron geeft een inrichtingsadvies ('Laat medewerkers niet ...'), geen verbod of regel.
- `/kennisbank/notuleren-met-ai` · vraag · vraagkop: De vraagkop 'Hoe werkt notuleren met AI?' staat letterlijk als kop in de bron (regel 54).
- `/ai-voor-bedrijven` · link · A3: Link past: 'AI Readiness Assessment' naar /diensten/ai-readiness-assessment.
- `/ai-voor-bedrijven` · vraag · A1: De bron koppelt 'levert het meest op' (regel 18) aan 'frequent, voorspelbaar werk met bestaande data en een menselijke controlestap'; de vier kenmerken in de zin komen uit 'De toepassingen die het halen' (regel 89). De zin voegt die twee formuleringen samen; inhoudelijk aanvaard, maar de combinatie staat niet letterlijk zo in de bron.
- `/ai-voor-bedrijven` · vraag · V3.1: De zin zegt 'de meest genoemde toepassing'; de bron zegt 'het vaakst' gebruikt voor marketing of verkoop. 'Meest genoemd' gebruikt de bron alleen voor de reden om AI niet in te voeren.
- `/ai-voor-bedrijven` · vraag · V3.3: In de zin staat 'bedrijven die AI voor bedrijven overwogen'; de bron zegt 'bedrijven die AI overwogen'. Inhoudelijk gelijk, maar de ingevoegde zoekterm maakt de zin krom.
- `/ai-development/ai-software` · link · A3: Link past: 'Vendor Review' naar /diensten/vendor-review.
- `/ai-development/ai-software` · vraag · vervolgvragen[0]: De term 'grootste kostenpost' staat niet in de bron; de bron zegt dat integratie, data en exit 'de echte kosten' bepalen, 'niet de licentie'. Het antwoord 'Nee' is daaruit afgeleid en als zodanig aanvaard.
- `/ai-development/ai-software` · vraag · V1.3: Het causale 'daarom' en de stellige vorm 'loopt over drie jaar' zijn van de schrijver; de bron noemt 'over drie jaar' alleen als kernvraag bij het criterium Kosten in 'een werkbare set' (regel 94) en zegt elders 'Reken daarom altijd over meerdere jaren' (regel 30).
- `/ai-development/ai-software` · vraag · V2.2: De zin voegt 'vooral' toe ('vooral die demo beschrijven'); de bron zegt 'beschrijven die demo'. Dat is een afzwakking, geen versterking.
- `/ai-beleid` · vraag · vraagkop: 'Met welke dienst begint een organisatie?' veronderstelt dat een AI beleid met een dienst begint. In de bron is het assessment een optie ('Wil je weten waar je organisatie staat voordat je het beleid schrijft?') en de Fractional AI Lead alleen voor wie 'geen capaciteit' heeft; het stappenplan begint met zelf inventariseren.
- `/ai-beleid` · vraag · A3: De bron biedt de Fractional AI Lead aan onder de voorwaarde 'Heb je geen capaciteit om dit zelf te trekken'; in A3 ontbreekt die voorwaarde (in T2 en V3.3 staat ze wel).
- `/ai-beleid` · lidwoord · A2, A3, V3.3: Correct: 'het AI Readiness Assessment' en 'de Fractional AI Lead'.
- `/kennisbank/prompt-engineering` · vraag · vraagkop: De vraagkop 'Wat is prompt engineering?' staat letterlijk als kop in de bron (regel 40).
- `/kennisbank/prompt-engineering` · vraag · vervolgvragen[1]: De bron zegt niet letterlijk dat er geen formule bestaat die altijd werkt; ze noemt het zoeken naar 'de magische formule' een fout en zegt van 'ultieme prompts': 'Ze helpen soms'. Het 'Nee' is daaruit afgeleid.
- `/kennisbank/prompt-engineering` · vraag · V1.2: 'volstaan een paar gewoontes' is de formulering van de schrijver; de bron zegt 'is het eenvoudiger: je leert een paar gewoontes aan'. Als parafrase aanvaard.
- `/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen` · vraag · V3.2: De bron zegt 'waarom hij een bepaalde route koos' (de reden); de zin zegt 'de gekozen route'. Klein verschil, als parafrase aanvaard.
- `/inzichten/van-ai-strategie-naar-waarde` · vraag · A3: De bron noemt concrete aantallen ('vier use cases' tegenover 'twintig initiatieven'); de zin veralgemeent dat tot 'een klein portfolio' en 'een lange roadmap'. Als parafrase aanvaard, niet stelliger dan de bron.
- `/inzichten/van-ai-strategie-naar-waarde` · vraag · A2: De bron zegt 'niet op de strategie, maar op de vertaling ervan'; de zin zegt 'niet op de inhoud, maar op het ontbreken van die vertaling'. Als parafrase aanvaard.
- `/inzichten/van-ai-strategie-naar-waarde` · vraag · vervolgvragen[2]: De bron heeft het voorbehoud 'bijna altijd' bij de nulmeting (regel 64); V3.2 neemt dat over, het 'Ja' in V3.1 niet. Aanvaard omdat de bron ook onvoorwaardelijk zegt 'Doe die nulmeting' en 'zonder ... niets hardmaken'.
- `/ai-consultancy/ai-consultant-inhuren` · vraag · vervolgvragen[0]: De vraag 'Wat is het kleinste pakket om een AI consultant in te huren?' veronderstelt een kleinste pakket zonder meer; de bron van deze pagina zegt alleen 'het kleinste pakket met een vaste prijs' (regel 99).
- `/ai-consultancy/ai-consultant-inhuren` · vraag · vervolgvragen[1]: De term 'zonder vast pakket' staat niet letterlijk in de bron; de bron noemt 'Afgebakend advies' als een van drie inhuurvormen naast 'Vast traject' en 'Doorlopende rol' (regels 92-97).
- `/ai-development/ai-oplossingen` · vraag · vraagkop: De vraagkop 'Wat kost advies over AI oplossingen op maat ...' veronderstelt een prijs voor advies over AI oplossingen op maat; de bron noemt alleen de prijs van het AI Readiness Assessment (regel 104) en geen prijs voor dat advies als zodanig.
- `/ai-beleid/ai-act` · vraag · vervolgvragen[1]: De vraag 'Hoe lang bewaart een gebruiksverantwoordelijke logs ...' veronderstelt een algemene bewaarplicht; de bron noemt de zes maanden alleen voor gebruiksverantwoordelijken van hoog-risicosystemen (regel 112). Het antwoord V2.1 maakt die beperking wel.
- `/ai-beleid/ai-act` · vraag · vraagkop: De vraagkop is gedekt, met de kanttekening dat de bron bij 'nu al' twee uitzonderingen noemt die de antwoordalinea niet vermeldt: het negende verbod geldt pas vanaf 2 december 2026 (regel 85) en voor machineleesbare markering door bestaande systemen geldt een overgangstermijn tot 2 december 2026 (regels 28 en 127).
- `/ai-workshop` · vraag · vervolgvragen[0]: De vraag 'Is er een AI workshop voor directie of raad van commissarissen?' met antwoord 'Ja' noemt de Executive Briefing een AI workshop; de bron noemt haar 'de passende vorm' naast de managementworkshop en behandelt haar bij de prijs als 'de uitzondering' op workshops en trainingen (regels 69 en 141).
- `/ai-workshop` · vraag · A1: De bron koppelt 'drie tot vijf concrete taken per rol' letterlijk alleen aan een workshop (regel 44); voor een training staat 'drie tot vijf taken uit het eigen werk' alleen in een voorbeeldprogramma dat 'geen vast format' is (regels 104 en 107). A1 betrekt het op 'workshop of training'.
- `/ai-agents` · vraag · bronregel / A3: De doorlooptijd van de Vendor Review (3-6 weken) staat niet op de pagina zelf maar alleen in prijzen-waarden.txt; 'exclusief reiskosten' staat in geen bron van dit blok.
- `/partnernetwerk` · vraag · vervolgvragen[2]: 'de begeleiding die een AI bureau vervangt' veronderstelt dat de begeleiding een AI bureau vervangt; de bron zegt alleen dat de adviseur geen AI bureau is en een andere rol heeft, en noemt situaties waarin een bureau wel het beste past.
- `/partnernetwerk` · vraag · vervolgvragen[0] / V1.2 / V2.3: De formulering 'wie een AI bureau zoekt' is steeds toegevoegd; de bron spreekt de lezer aan ('Zoek je een AI bureau?') maar koppelt de drie typen expertise en de platformvergelijking niet aan die doelgroep.
- `/ai-workshop/copilot-training` · vraag · V2.2: 'toezeggingen van Microsoft' is een eigen kwalificatie; de bron zegt 'Verder stelt Microsoft' en somt ook een voorbehoud op (antwoorden niet gegarandeerd juist).
- `/ai-agents/wat-is-een-ai-agent` · vraag · vervolgvragen[2] / V3.1: De vraag 'Hoeveel vormen van opbouw heeft een AI agent?' veronderstelt een vast aantal; de bron zegt 'Je ziet grofweg drie vormen' en noemt daarnaast dat er 'verschillende indelingen' bestaan.
- `/ai-voor-bedrijven/ai-en-bi` · vraag · vervolgvragen[0]: De bron zegt alleen dat Copilot in Power BI een betaalde Fabric- of Premium-capaciteit vraagt; de formulering 'om AI en BI te combineren' is breder dan de bron (andere manieren van combineren worden niet aan een licentie gekoppeld).
- `/kennisbank/ai-specialist-salaris` · vraag · vervolgvragen[2]: 'de scope voor een vast AI specialist salaris' staat niet in de bron; de bron spreekt over 'de scope voor een fulltime functie' die nog niet vaststaat. Een salaris heeft geen scope; de vraag verhaspelt de voorwaarde uit de bron.
- `/kennisbank/ai-specialist-salaris` · vraag · vraagkop: 'Hoe hoog is een AI specialist salaris in Nederland?' veronderstelt een bedrag voor de titel AI specialist; de bron geeft alleen cijfers voor de titel AI engineer (het antwoord benoemt dat wel).
- `/ai-workshop/chatgpt-training` · vraag · vraagkop: 'hoe wordt de prijs bepaald' veronderstelt dat de bron de prijsopbouw uitlegt; de bron zegt alleen dat de training een vaste prijs krijgt die vooraf schriftelijk wordt bevestigd en verwijst voor de opbouw naar /tarieven. Ook 'wat levert ... op': de bron beschrijft wat deelnemers leren, geen opbrengst of resultaat (resultaatcijfers staan alleen in het fictieve scenario).
- `/inzichten/welke-ai-use-cases-leveren-resultaat` · vraag · vervolgvragen[2]: 'Vanaf welke score krijgen AI-use cases voorrang' keert de bron om: de bron zegt alleen dat use cases onder de 15 punten 'niet eerst' gaan, niet dat 15 punten of meer voorrang geeft.
- `/diensten/vendor-review` · vraag · vervolgvragen[0]: De vraag 'Hoeveel leveranciers beoordeelt een Vendor Review?' veronderstelt een vast aantal. De bron geeft '2 tot 4' alleen als prijsfactor en noemt in de case op dezelfde pagina 12 beoordeelde leveranciers.
- `/diensten/vendor-review` · vraag · vervolgvragen[1]: De vraag 'Is een Vendor Review zinvol als de leverancier al gekozen is?' laat de tweede voorwaarde uit de bron weg ('en je een onderbouwing achteraf zoekt') en de bron zegt 'minder geschikt', niet 'niet zinvol'.
- `/ai-consultancy/ai-advies` · vraag · A2: De duur '1 dagdeel incl. voorbereiding' komt uit prijzen-waarden.txt. De pagina zelf omschrijft de Executive Briefing als 'een sessie van drie uur, voorbereid op jouw sector'. Geen harde tegenspraak, wel twee verschillende formuleringen van de duur op één pagina zodra het blok geplaatst is.
- `/ai-automatisering/ai-workflows` · vraag · vervolgvragen[1]: 'Kan een AI workflow zonder IT-team of externe partner worden gebouwd?': het 'Ja' (V2.1) geldt volgens de bron alleen voor 'eenvoudige stromen'; de beperking volgt pas in V2.2 en V2.3.
- `/ai-agents/laten-maken` · vraag · vervolgvragen[1]: De vraag spreekt van 'het aantal bouwpartijen voor een AI agent'; de bron (prijsnotitie) spreekt van 'het aantal leveranciers'. De gelijkstelling bouwpartij = leverancier staat niet letterlijk in de bron, al koppelt de pagina de Vendor Review wel aan 'offertes van meerdere bouwpartijen'.
- `/kennisbank/wat-doet-een-bi-specialist` · vraag · V1.2: 'AI neemt routinewerk over' staat zo in de summary; de lopende tekst is voorzichtiger ('Routinewerk wordt sneller', AI-functies 'die helpen bij het schrijven van berekeningen en queries', 'De BI specialist controleert en verbetert'). Bevestigd op basis van de summary, maar het voorbeeld 'berekeningen en queries' wordt in de bron als hulp omschreven, niet als overname.
- `/kennisbank/wat-doet-een-bi-specialist` · vraag · vervolgvragen[1]: 'Is een BI specialist meestal eerder nodig dan een AI specialist?': de bron zegt 'vaak allebei nodig, en in die volgorde'; 'meestal' is iets sterker dan 'vaak'.
- `/markten` · vraag · vervolgvragen[2]: 'Is het AI Readiness Assessment bruikbaar in elke sector?': de bron zegt 'ongeacht de sector', maar ook dat het zwaartepunt bij vier sectoren ligt en dat je voor sectorspecifieke vragen daarnaast iemand uit het domein nodig hebt. 'Bruikbaar in elke sector' is een redelijke maar niet letterlijke lezing.
- `/markten` · vraag · V3.3: De 2-3 weken komen uit prijzen-waarden.txt; de pagina zelf zegt alleen 'in korte tijd'.
- `/kennisbank/claude-voor-bedrijven` · vraag · A2: Het causale verband ('omdat training op de content daar standaard uit staat') staat niet letterlijk in de bron; de bron zet beide zinnen direct achter elkaar zonder 'omdat'. Als bevestigd beoordeeld omdat de bron de trainingsinstelling als onderscheid tussen persoonlijk en zakelijk noemt, maar het is een kleine interpretatie.
- `/kennisbank/claude-voor-bedrijven` · vraag · A3: De bron noemt vijf toepassingen 'waar de kenmerken van Claude het meest tot hun recht komen' (ook 'Werken met je eigen bronnen' en 'Programmeren'); de zin noemt er drie. De drie staan er letterlijk in, en de bron noemt dezelfde drie als veelvoorkomende reden om voor Claude te kiezen.
- `/kennisbank/claude-voor-bedrijven` · vraag · vervolgvragen[2]: 'Zijn de abonnementen Pro en Max bruikbaar als Claude voor bedrijven?': de bron zegt 'Niet voor bedrijfsdata', wat smaller is dan 'niet bruikbaar voor bedrijven'. V3.3 beperkt het antwoord terecht tot bedrijfsgegevens.
- `/inzichten/de-business-case-voor-ai` · vraag · V2.3: De bron spreekt zichzelf hier tegen: de lopende tekst zegt 'Reken ook een scenario door met het dubbele volume', de takeaway in hetzelfde bestand zegt 'Reken door op tien keer volume'. De zin volgt de lopende tekst en is daarop bevestigd.
- `/inzichten/de-business-case-voor-ai` · vraag · V2.3: De bron formuleert dit als advies ('Doe dit: meet ... en vermenigvuldig'); de zin beschrijft het als wat een business case doet. Binnen de normatieve vraagkop ('die een jaar later nog standhoudt') als bevestigd beoordeeld.
- `/inzichten/de-business-case-voor-ai` · vraag · vervolgvragen[2]: 'de productiviteitsdip waarmee een business case voor AI rekening houdt': de bron adviseert de dip op te nemen; dat elke business case er rekening mee houdt staat er niet.
- `/diensten/executive-briefing` · vraag · vervolgvragen[0]: De vraag spreekt van "een vervolgtraject" in het algemeen; de bron kent de verrekening alleen bij een AI Readiness Assessment dat binnen 60 dagen start. Het kale "Ja." (V1.1) is daardoor breder dan de bron; V1.2 geeft de voorwaarde wel.
- `/ai-automatisering/ai-tools` · vraag · V2.2: De bron formuleert dit als persoonlijk advies ("Mijn advies bij elke nieuwe AI-tool: laat één team ..."); de zin maakt er met "geldt dat" een algemene regel van. Inhoud is gedekt, de stelligheid is iets hoger.
- `/ai-agents/voorbeelden` · vraag · A2: De bron zegt "De meeste waarde zit in voorbereidend werk"; de zin maakt daar "Het zwaartepunt ligt bij" van. Als bedoeld is dat de meeste voorbeelden voorbereidend werk zijn, is dat een eigen telling die niet zo in de bron staat.
- `/ai-development` · vraag · vervolgvragen[1]: De vraag spreekt van "het aantal bouwpartijen"; prijzen-waarden.txt zegt "het aantal leveranciers (2 tot 4)". De gelijkstelling bouwpartij = leverancier staat niet letterlijk in de bron (de pagina zet de Vendor Review wel in bij de keuze van de bouwpartij).
- `/ai-development` · vraag · T1: De kolomtekst "Een eerste stap vóór de specificatie" voegt een volgorde toe die de bron niet noemt; de bron zet specificatie en assessment allebei onder "Bij de start".
- `/kennisbank/gemini-voor-bedrijven` · vraag · A2: De bron zegt "Werkt je organisatie al met Google Workspace" en dat Gemini "waarschijnlijk" al in het abonnement zit; de zin noemt "Gmail, Docs en Meet" en laat het voorbehoud "waarschijnlijk" weg. Inhoudelijk gedekt, maar let op bij Business Starter (geen Gemini in Docs).
- `/ai-workshop/ai-geletterdheid-training` · vraag · vervolgvragen[1]: De vraag legt het ontbreken van een lesprogramma bij "de AI Act"; de bron zegt alleen "Er is geen voorgeschreven lesprogramma" zonder de AI Act als onderwerp te noemen. Kleine verschuiving, inhoudelijk consistent met "geen specifiek niveau voorgeschreven".
- `/inzichten/freelance-ai-consultant-vs-agency-vs-big4` · vraag · V2.2 / vervolgvragen[1]: De bron spreekt van "een onafhankelijke senior", niet uitdrukkelijk van een freelance AI consultant; "zoals een freelance AI consultant" is een invulling van de schrijver (wel in lijn met de strekking van het artikel).
