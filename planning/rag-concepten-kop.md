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
