# RAG-blokken: conceptteksten ter beoordeling

Stand: 6 oktober 2026 · branch `rag-blokken-fase-0` · **niets hiervan is geplaatst**

Dit bestand bevat de conceptteksten voor alle pagina's die nog geen blok hebben: 70 stuks, gegroepeerd per paginatype. De drie pilotpagina's (`/diensten/ai-readiness-assessment`, `/ai-consultancy/ai-strategie`, `/ai-consultancy/ai-consultant-inhuren`) staan er niet in; die zijn al geplaatst en staan in `docs/rag-pilot.md`.

De machineleesbare versie staat in `docs/rag-concepten.json`. Dit Markdown-bestand is daaruit gegenereerd (`node planning/concepten-doc.mjs`). Wil je iets aanpassen, zeg het per pagina of pas de tekst hier aan; ik verwerk het dan in de JSON voordat er iets geplaatst wordt.

## Hoe deze teksten zijn gemaakt

- Per pagina is alleen de bestaande tekst van die pagina gebruikt, plus `src/data/prijzen.ts`. Prijzen en doorlooptijden van de zes diensten zijn nergens getypt: ze komen via tokens uit `prijzen.ts`. De bedragen die je hieronder leest zijn dus de actuele waarden uit de databron.
- Niet gebruikt: de fictieve voorbeeldscenario's, cijfers uit cases, "20+ jaar ervaring", de cijferstrook van de homepage en rekenvoorbeelden uit artikelen.
- De teksten voor de 63 contentpagina's en artikelen zijn in zes parallelle schrijfrondes gemaakt met één vaste set regels. De zeven blokken voor de dienstpagina's, `/diensten` en `/tarieven` heb ik zelf geschreven.
- De links die je ziet staan op de plek waar de renderfunctie ze zet: één link per doel-URL, in de tabelrij als die er is, anders bij de eerste vermelding.

## Wat is gecontroleerd en wat niet

**Automatisch, voor alle 70:** elk concept is op zijn beoogde plek gezet in een kopie van de build en door `check-rag.mjs` gehaald (`node planning/check-concepten.mjs`). Alle 70 slagen op: vraagkop met vraagteken en onderwerp, 2 tot 3 zinnen in de antwoordalinea, afzender in antwoordalinea (dienstachtige blokken) en bronregel, geen afzender in vervolgvragen, antwoord begint met ja, nee of het getal, dienstnaam of onderwerp voluit per vervolgvraag, complete tabelrijen, geen dode kolom, één link per doel, elke link bestaat, geen em dash en geen "gids", bedragen en doorlooptijden gelijk aan `prijzen.ts`, geen woordelijk overgenomen zin, en geen vraag die al als kop of FAQ-vraag op de site staat. Zeven zinnen die woordelijk op de pagina stonden heb ik herschreven.

**Niet automatisch te controleren:** of elk inhoudelijk feit klopt met de pagina. Daarvoor is er per blok een regel "Herkomst". Ik heb vier blokken zelf tegen de bron gelezen en alle getallen van alle blokken tegen de paginatekst gelegd. Bij vijf pagina's staat een getal in het blok als cijfer dat op de pagina als woord staat of anders is geformuleerd; kijk daar even extra naar:

| Pagina | Getal in het blok |
|---|---|
| `/markten/marketing` | 4 |
| `/inzichten/build-buy-of-partner` | 10 |
| `/inzichten/de-business-case-voor-ai` | 8 |
| `/inzichten/het-datafundament-onder-ai` | 10 |
| `/inzichten/wanneer-heb-je-echt-een-ai-strateeg-nodig` | 6 |

De vijf handmatige punten uit de briefing (klopt elke alinea los, beantwoordt de alinea de vraag volledig, zijn het echte twijfels van opdrachtgevers, is niets verzonnen of afgerond, leest het op mobiel) zijn aan jou.

## Beslissingen die voor meerdere blokken gelden

1. **Afzender bij kennisbank en inzichten.** De 46 kennisbankblokken noemen Dave Willemstein alleen in de bronregel ("artikel van Dave Willemstein"), niet in de antwoordalinea. Een definitie als "wat is RPA" met de naam erin leest geforceerd. Wil je de naam daar toch in elke antwoordalinea, dan pas ik ze aan.
2. **Prijs via token op een pagina die zelf geen prijs noemt.** Sommige pagina's noemen een dienst zonder bedrag. Waar het blok dan toch een prijs of doorlooptijd noemt, komt die uit `prijzen.ts`. Dat staat per blok bij "Let op". Wil je dat een blok nooit meer zegt dan de pagina zelf, dan haal ik die bedragen weg.
3. **Executive Briefing: drie uur of één dagdeel.** Meerdere pagina's schrijven "een sessie van drie uur" of "één dagdeel"; het blok toont de waarde uit `prijzen.ts` ("1 dagdeel incl. voorbereiding"). In je vorige bericht stond bij dit punt nog een open invulveld; ik heb "sessie van drie uur" daarom overal laten staan.
4. **Vijf branchepagina's op `noindex`** (`/markten/zorg`, `marketing`, `onderwijs`, `luchtvaart`, `overheid`) hebben wel een concept. Plaatsen heeft pas zin als ze gepubliceerd worden.
5. **Wet- en regelgeving.** Blokken over de AI Act, DORA en de AVG nemen data en verplichtingen over zoals de pagina ze geeft (peildatum 23 september 2026). Ze moeten bij publicatie nog kloppen.
6. **Vijf blokken hebben een tabel**: `/diensten`, `/ai-consultancy/ai-advies`, `/ai-implementatie`, `/ai-development` en `/ai-beleid`. `/diensten` heeft al een eigen vergelijking van drie diensten; zie de opmerking daar.
7. **Twee blokken linken naar een download** (pdf): `/ai-implementatie/stappenplan` en `/ai-beleid`. De pagina's linken daar zelf ook naar.
8. **19 blokken komen onder een bestaande kop.** Dat zijn er minder dan de 37 uit het plaatsingsplan van fase 0. Reden: het blok hergebruikt een kop alleen als die de hoofdvraag van de pagina stelt én het onderwerp bij naam noemt. Een definitiekop als "Wat is AI consultancy?" op een pagina die over kosten en keuze gaat, valt daardoor af.
9. **Geen blok voorgesteld** voor: de homepage, `/werkwijze`, `/over`, `/contact`, `/veelgestelde-vragen`, `/cases` en de zes cases, `/inzichten`, `/kennisbank`, `/privacy`, `/algemene-voorwaarden` en de 404.
