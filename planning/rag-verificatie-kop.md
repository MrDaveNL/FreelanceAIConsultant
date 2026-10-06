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
