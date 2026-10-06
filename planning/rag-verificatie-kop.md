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
