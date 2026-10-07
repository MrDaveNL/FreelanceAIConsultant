# RAG-ready contentblokken: opleverrapport

Stand: 6 oktober 2026 · branch `rag-blokken-fase-0` · niet gemerged

## Uitrol op 7 oktober 2026

Na akkoord op alle 65 blokken zijn er 60 geplaatst, per paginatype en elke pagina in een eigen commit ("RAG-blok geplaatst: /pad"). Na elke plaatsing is de site gebouwd en zijn de voor- en na-controle (`check-nulmeting.mjs`) en de blokcontrole (`check-rag.mjs`) gedraaid; een pagina is alleen gecommit als beide slaagden.

Eindstand van de laatste volledige build: 90 pagina's vergeleken met de nulmeting, 30 ongewijzigd, 60 met alleen toevoegingen, 0 met fouten. 63 blokken in de databron (60 nieuw, 3 pilots), 0 pagina's met fouten.

Vooraf is in een aparte commit de template voor artikelen (`src/pages/inzichten/[slug].astro`) en het dienstenoverzicht (`src/pages/diensten/index.astro`) aangepast zodat ze een blok tonen als het bestaat. Zonder blok bleef de uitvoer gelijk aan de nulmeting.

### Niet geplaatst (5)

- `/diensten/ai-due-diligence`: dienstfeiten (resultaat, doelgroep) ontbreken in src/data/rag/diensten.ts. De build weigert een dienstblok zonder resultaatzin en doelgroepzin, en die zijn niet aangeleverd; ze zijn niet verzonnen.
- `/diensten/ai-strategy-sprint`: dienstfeiten (resultaat, doelgroep) ontbreken in src/data/rag/diensten.ts. De build weigert een dienstblok zonder resultaatzin en doelgroepzin, en die zijn niet aangeleverd; ze zijn niet verzonnen.
- `/diensten/executive-briefing`: dienstfeiten (resultaat, doelgroep) ontbreken in src/data/rag/diensten.ts. De build weigert een dienstblok zonder resultaatzin en doelgroepzin, en die zijn niet aangeleverd; ze zijn niet verzonnen.
- `/diensten/fractional-ai-lead`: dienstfeiten (resultaat, doelgroep) ontbreken in src/data/rag/diensten.ts. De build weigert een dienstblok zonder resultaatzin en doelgroepzin, en die zijn niet aangeleverd; ze zijn niet verzonnen.
- `/diensten/vendor-review`: dienstfeiten (resultaat, doelgroep) ontbreken in src/data/rag/diensten.ts. De build weigert een dienstblok zonder resultaatzin en doelgroepzin, en die zijn niet aangeleverd; ze zijn niet verzonnen.

De vijf blokken die op publicatie wachten (noindex) zijn buiten beschouwing gebleven. De drie pilotblokken staan nog als concept gemarkeerd.

### Geplaatst (60)

| Pagina | Paginatype |
|---|---|
| `/ai-agents` | dienstenoverzicht |
| `/ai-agents/laten-maken` | dienstenoverzicht |
| `/ai-automatisering` | dienstenoverzicht |
| `/ai-beleid` | dienstenoverzicht |
| `/ai-consultancy` | dienstenoverzicht |
| `/ai-consultancy/ai-advies` | dienstenoverzicht |
| `/ai-development` | dienstenoverzicht |
| `/ai-development/ai-oplossingen` | dienstenoverzicht |
| `/ai-development/ai-specialist` | dienstenoverzicht |
| `/ai-implementatie` | dienstenoverzicht |
| `/ai-implementatie/advies` | dienstenoverzicht |
| `/ai-workshop` | dienstenoverzicht |
| `/ai-workshop/ai-coaching` | dienstenoverzicht |
| `/ai-workshop/ai-geletterdheid-training` | dienstenoverzicht |
| `/ai-workshop/chatgpt-training` | dienstenoverzicht |
| `/ai-workshop/copilot-training` | dienstenoverzicht |
| `/diensten` | dienstenoverzicht |
| `/partnernetwerk` | dienstenoverzicht |
| `/tarieven` | dienstenoverzicht |
| `/ai-agents/voorbeelden` | kennisbank |
| `/ai-agents/wat-is-een-ai-agent` | kennisbank |
| `/ai-automatisering/ai-tools` | kennisbank |
| `/ai-automatisering/ai-workflows` | kennisbank |
| `/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai` | kennisbank |
| `/ai-beleid/ai-act` | kennisbank |
| `/ai-consultancy/ai-roadmap` | kennisbank |
| `/ai-development/ai-software` | kennisbank |
| `/ai-implementatie/stappenplan` | kennisbank |
| `/ai-voor-bedrijven` | kennisbank |
| `/ai-voor-bedrijven/ai-en-bi` | kennisbank |
| `/ai-voor-bedrijven/mkb` | kennisbank |
| `/ai-voor-bedrijven/zakelijke-dienstverleners` | kennisbank |
| `/inzichten/ai-adoptie-begint-bij-het-werk` | kennisbank |
| `/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen` | kennisbank |
| `/inzichten/ai-governance-zonder-bureaucratie` | kennisbank |
| `/inzichten/ai-vendorselectie-in-acht-stappen` | kennisbank |
| `/inzichten/build-buy-of-partner` | kennisbank |
| `/inzichten/de-business-case-voor-ai` | kennisbank |
| `/inzichten/freelance-ai-consultant-vs-agency-vs-big4` | kennisbank |
| `/inzichten/het-datafundament-onder-ai` | kennisbank |
| `/inzichten/van-ai-strategie-naar-waarde` | kennisbank |
| `/inzichten/waarom-ai-pilots-blijven-steken` | kennisbank |
| `/inzichten/wanneer-heb-je-echt-een-ai-strateeg-nodig` | kennisbank |
| `/inzichten/welke-ai-use-cases-leveren-resultaat` | kennisbank |
| `/kennisbank/ai-agents-en-avg` | kennisbank |
| `/kennisbank/ai-specialist-salaris` | kennisbank |
| `/kennisbank/ai-voorbeelden` | kennisbank |
| `/kennisbank/chatgpt-voor-bedrijven` | kennisbank |
| `/kennisbank/claude-voor-bedrijven` | kennisbank |
| `/kennisbank/gemini-voor-bedrijven` | kennisbank |
| `/kennisbank/microsoft-copilot-voor-bedrijven` | kennisbank |
| `/kennisbank/notuleren-met-ai` | kennisbank |
| `/kennisbank/prompt-engineering` | kennisbank |
| `/kennisbank/rpa-vs-ai-automatisering` | kennisbank |
| `/kennisbank/wat-doet-een-ai-consultant` | kennisbank |
| `/kennisbank/wat-doet-een-ai-developer` | kennisbank |
| `/kennisbank/wat-doet-een-bi-specialist` | kennisbank |
| `/markten` | kennisbank |
| `/markten/automotive` | kennisbank |
| `/markten/fintech` | kennisbank |

---

## Samenvatting

- Gebouwd en getest: schema, renderfunctie, component, remark-plugin, styling en vier controlescripts. `npm run build` draait de controles en faalt bij een fout.
- Geplaatst: drie pilotblokken. Verder is er niets uitgerold: geen enkel blok in `docs/rag-concepten.json` heeft de status "akkoord".
- Klaar om te beoordelen: 47 geverifieerde concepten. 18 concepten wachten op een besluit van jou, 5 wachten op publicatie van de pagina.
- Er is geen pull request: de repository heeft geen remote. De branch staat lokaal klaar.

## Per pagina: geplaatst of overgeslagen

| Pagina | Uitkomst | Reden |
|---|---|---|
| `/diensten/ai-readiness-assessment` | geplaatst (pilot) | volledig bevestigd |
| `/ai-consultancy/ai-strategie` | geplaatst (pilot) | volledig bevestigd |
| `/ai-consultancy/ai-consultant-inhuren` | geplaatst (pilot), onder bestaande kop | volledig bevestigd |
| `/ai-agents` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-agents/laten-maken` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-agents/voorbeelden` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-agents/wat-is-een-ai-agent` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-automatisering` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-automatisering/ai-tools` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-automatisering/ai-workflows` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-beleid` | niet geplaatst | 2 extern feit(en), wacht op jouw oordeel |
| `/ai-beleid/ai-act` | niet geplaatst | 7 extern feit(en), wacht op jouw oordeel |
| `/ai-consultancy` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-consultancy/ai-advies` | niet geplaatst | 1 extern feit(en), wacht op jouw oordeel |
| `/ai-consultancy/ai-roadmap` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-development` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-development/ai-oplossingen` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-development/ai-software` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-development/ai-specialist` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-implementatie` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-implementatie/advies` | niet geplaatst | 1 extern feit(en), wacht op jouw oordeel |
| `/ai-implementatie/stappenplan` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-voor-bedrijven` | niet geplaatst | 2 extern feit(en), wacht op jouw oordeel |
| `/ai-voor-bedrijven/ai-en-bi` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-voor-bedrijven/mkb` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-voor-bedrijven/zakelijke-dienstverleners` | niet geplaatst | 1 extern feit(en), wacht op jouw oordeel |
| `/ai-workshop` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-workshop/ai-coaching` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-workshop/ai-geletterdheid-training` | niet geplaatst | 5 extern feit(en), wacht op jouw oordeel |
| `/ai-workshop/chatgpt-training` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/ai-workshop/copilot-training` | niet geplaatst | 1 extern feit(en), wacht op jouw oordeel |
| `/diensten` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/diensten/ai-due-diligence` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/diensten/ai-strategy-sprint` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/diensten/executive-briefing` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/diensten/fractional-ai-lead` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/diensten/vendor-review` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/inzichten/ai-adoptie-begint-bij-het-werk` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/inzichten/ai-governance-zonder-bureaucratie` | niet geplaatst | 1 extern feit(en), wacht op jouw oordeel |
| `/inzichten/ai-vendorselectie-in-acht-stappen` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/inzichten/build-buy-of-partner` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/inzichten/de-business-case-voor-ai` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/inzichten/freelance-ai-consultant-vs-agency-vs-big4` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/inzichten/het-datafundament-onder-ai` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/inzichten/van-ai-strategie-naar-waarde` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/inzichten/waarom-ai-pilots-blijven-steken` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/inzichten/wanneer-heb-je-echt-een-ai-strateeg-nodig` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/inzichten/welke-ai-use-cases-leveren-resultaat` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/kennisbank/ai-agents-en-avg` | niet geplaatst | 7 extern feit(en), wacht op jouw oordeel; wacht op jouw besluit over het AVG-voorstel |
| `/kennisbank/ai-specialist-salaris` | niet geplaatst | 5 extern feit(en), wacht op jouw oordeel; niet bevestigd: A1 afwijkend bij tweede lezing: Het fragment op regel 48 staat er letterlijk, maar de bron zegt dat de bronnen onderling 'duidelijk' verschillen (regel 50), niet 'flink', en 'bruikbaar als bandbreedte, niet als vast bedrag' staat nergens zo: de bron zegt alleen 'gebruik ze als orde van grootte' (regel 89, over de Indeed- en DataJobs-totaalcijfers) en 'geen gemiddelde' (regel 79). |
| `/kennisbank/ai-voorbeelden` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/kennisbank/chatgpt-voor-bedrijven` | niet geplaatst | 6 extern feit(en), wacht op jouw oordeel |
| `/kennisbank/claude-voor-bedrijven` | niet geplaatst | 8 extern feit(en), wacht op jouw oordeel |
| `/kennisbank/gemini-voor-bedrijven` | niet geplaatst | 5 extern feit(en), wacht op jouw oordeel |
| `/kennisbank/microsoft-copilot-voor-bedrijven` | niet geplaatst | 5 extern feit(en), wacht op jouw oordeel |
| `/kennisbank/notuleren-met-ai` | niet geplaatst | 1 extern feit(en), wacht op jouw oordeel |
| `/kennisbank/prompt-engineering` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/kennisbank/rpa-vs-ai-automatisering` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/kennisbank/wat-doet-een-ai-consultant` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/kennisbank/wat-doet-een-ai-developer` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/kennisbank/wat-doet-een-bi-specialist` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/markten` | niet geplaatst | 1 extern feit(en), wacht op jouw oordeel |
| `/markten/automotive` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/markten/fintech` | niet geplaatst | 3 extern feit(en), wacht op jouw oordeel |
| `/markten/luchtvaart` | niet geplaatst | pagina staat op noindex |
| `/markten/marketing` | niet geplaatst | pagina staat op noindex |
| `/markten/onderwijs` | niet geplaatst | pagina staat op noindex |
| `/markten/overheid` | niet geplaatst | pagina staat op noindex |
| `/markten/zorg` | niet geplaatst | pagina staat op noindex |
| `/partnernetwerk` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| `/tarieven` | niet geplaatst | geverifieerd, maar nog geen status "akkoord" |
| De zes cases en `/cases` | geen blok | cijfers en quotes zijn illustratief (datagat) |
| `/`, `/werkwijze`, `/over`, `/contact`, `/veelgestelde-vragen`, `/inzichten`, `/kennisbank`, `/privacy`, `/algemene-voorwaarden`, `/404` | geen blok | geen koop- of keuzevraag, of een overzichtspagina |

## Voor- en na-controle van bestaande pagina's

Laatste build: 90 pagina's vergeleken met de nulmeting, 90 ongewijzigd, 0 met fouten. De nulmeting is na elke bewuste wijziging per pagina bijgewerkt. Bewuste wijzigingen aan bestaande tekst, elk een eigen commit met voor- en na-controle:

| Wijziging | Pagina's | Vastlegging |
|---|---|---|
| Doorlooptijd gelijkgetrokken met `prijzen.ts` | AI Readiness Assessment, Executive Briefing | commit `23d3a34`, `docs/rag-pilot.md` hoofdstuk 2 |
| `aria-label` van het diagram volgt `prijzen.ts` | `/ai-consultancy/ai-strategie` | commit `ef57e89` |
| "het AI Readiness Assessment" in plaats van "de" | 55 contentpagina's | commit `9eeecbb`, `docs/rag-wijziging-het.txt` |
| Indeed-bedrag en herkomst gecorrigeerd | `/kennisbank/ai-specialist-salaris` | `docs/rag-wijziging-salarispagina.txt` |
| Blok toegevoegd (alleen toevoegingen) | de drie pilotpagina's | `docs/rag-pilot.md` |

Daarnaast: `prijzen.ts` kreeg de velden `prijsvoorwaarden`, `sessieduur` en `timingVoluit`. Bestaande pagina's gebruiken die velden niet, dus hun HTML is niet gewijzigd.

## Uitvoer van de controlescripts

```
90 pagina's vergeleken met de nulmeting: 90 ongewijzigd, 0 met alleen toevoegingen, 0 met fouten.
✓ /ai-consultancy/ai-consultant-inhuren  (concept: teksten nog niet beoordeeld)
✓ /ai-consultancy/ai-strategie  (concept: teksten nog niet beoordeeld)
✓ /diensten/ai-readiness-assessment  (concept: teksten nog niet beoordeeld)
3 RAG-blok(ken) in de databron, 0 pagina('s) met fouten, 3 concept(en) nog te beoordelen.
90 HTML-bestanden gecontroleerd, 0 probleem/problemen.
55 bestand(en), 0 met fouten.
68 RAG-blok(ken) in de databron, 0 pagina('s) met fouten, 68 concept(en) nog te beoordelen.
65 concept(en) aangeboden, 0 ongeldig vóór plaatsing. De telling hierboven is inclusief de al geplaatste blokken.
```

## Datagaten per dienst

Volledige lijst: `docs/rag-inventarisatie.md` hoofdstuk 8 en `docs/rag-pilot.md` hoofdstuk 10 en 19. Nog open:

- Vijf diensten: akkoord op resultaatzin en doelgroepzin (voorstellen in `docs/rag-pilot.md` hoofdstuk 7). Tot dan kan er geen dienstblok geplaatst worden: de build eist die velden.
- Fractional AI Lead: wat de niveaus Advies, Lead en Lead+ inhoudelijk betekenen.
- Workshops, training, coaching, second opinion en afgebakend advies: geen prijs en geen doorlooptijd.
- Cases: geverifieerde cijfers en toestemming voor quotes.
- `/partnernetwerk`: partnernamen of partnertypes.

## Conflicten tussen bestaande tekst en de databron

Opgelost: de doorlooptijd van de AI Readiness Assessment en de duur van de Executive Briefing (sessie van drie uur, met voorbereiding één dagdeel). Nog open, niet aangepast: zie `docs/rag-inventarisatie.md` hoofdstuk 6.1 (kaartteksten, drie cases, "20+ jaar ervaring", de cijferstrook op de homepage) en `docs/rag-voorstel-avg.md`.

## Teksten die nog beoordeeld moeten worden

- Alle 65 concepten in `docs/rag-concepten.md` en `docs/rag-concepten.json`, met status per blok.
- De herschreven vragen in `docs/rag-herschreven.md`.
- De drie pilotblokken zijn na de verificatie herzien en staan in de databron nog als concept.
- De uitkomst van de externe controles in `docs/rag-verificatie.md`.

## Afwijkingen van de briefing

- **Geen pull request.** Er is geen remote; de map was bij de start geen git-repository.
- **Stap 6 en 7 (uitrol) zijn niet uitgevoerd,** omdat geen blok de status "akkoord" heeft.
- **Stap 8 (structured data) en stap 9 (`docs/rag-blok.md`) zijn niet gedaan.** Er is geen markup toegevoegd of voorgesteld; de werkwijze staat verspreid over de rapporten en de commentaarregels in de code.
- **Onder een bestaande kop is het blok gesplitst** (antwoordalinea onder de kop, vervolgvragen en bronregel aan het eind van de sectie), op jouw aanwijzing.
- **Vervolgvragen:** 0 tot 3 in plaats van 1 tot 3; het antwoord begint in de stelligheid van de bron in plaats van altijd met ja, nee of het getal.
- **Afzender** alleen in de antwoordalinea en de bronregel; bij kennisbankblokken alleen in de bronregel.
- **Maximaal één link per doel-URL** binnen een blok.
- **`/tarieven`** krijgt alleen vraagkop, antwoordalinea en bronregel; **`/diensten`** krijgt geen tabel.
- **Eén devDependency** toegevoegd (`node-html-parser`), alleen voor de controlescripts.
- **De handmatige punten** uit de acceptatiecriteria (waaronder leesbaarheid op mobiel) zijn niet nagelopen; de pagina's zijn niet in een browser bekeken.

## Commits

```
c330037 Correctieronde: gids-regel, blokken aangepast, zinnen geschrapt
1114383 Salarispagina: Indeed-bedrag bijgewerkt en herkomst van het cijfer gecorrigeerd
11d4632 Derde verificatieronde: kale ja/nee nagetrokken, externe feiten tegen primaire bronnen, bronregels
b1010a5 Executive Briefing: sessieduur in prijzen.ts; aangewezen zinnen geschrapt
26c651e Conceptdocument opnieuw gegenereerd met status en externe feiten per blok
50e7939 Conceptdocument opnieuw gegenereerd met status en externe feiten per blok
9e4962b Concepten herzien en opnieuw geverifieerd in drie lagen
2d80489 RAG-blok: prijsvoorwaarden in prijzen.ts, bandbreedte voor niveaus, stelligheid in de controle, pilotblokken herzien
2a05cae Verificatie in drie lagen, status per blok en bijgewerkte concepten
e218a59 RAG-blok: gesplitst onder een bestaande kop, prijsniveaus voluit, laag A in check-rag
7acadd7 Conceptteksten voor de overige 70 pagina's en vervolg van het pilotrapport
70895c4 Conceptcontrole en uitzondering alleenAntwoord
04094e8 RAG-blok pilot 3: /ai-consultancy/ai-consultant-inhuren, onder bestaande vraagkop
9eeecbb Overal 'het AI Readiness Assessment' in bestaande tekst (was: de)
ef57e89 aria-label van het diagram op /ai-consultancy/ai-strategie volgt prijzen.ts (2-3 weken)
f3040c8 RAG-blok: afzender alleen in antwoordalinea en bronregel, maximaal één link per doel
f4cd92d Pilotrapport: ruwe HTML, diff en voor- en na-controle per pagina
51fd341 RAG-blok stap 5 (pilot): /ai-consultancy/ai-strategie
cd6932d RAG-blok stap 5 (pilot): /diensten/ai-readiness-assessment
38b1122 check-rag: consistentie per alinea en tabelrij, FAQ-vragen tellen als bestaande vraagkop
8c45b4c RAG-blok stap 4: controlescripts, lokaal en in de build
fc31ebc RAG-blok stap 3: styling met bestaande designtokens
cba3ade RAG-blok stap 2: renderfunctie, Astro-component en remark-plugin
f17bd99 RAG-blok stap 1: schema met validatie, nog zonder content
6e55990 Nulmetingscripts weigeren onbekende argumenten
23d3a34 Doorlooptijd gelijkgetrokken met prijzen.ts op twee dienstpagina's
58125bb check-nulmeting: vergelijk op langste gemeenschappelijke deelrij
73f517f Nulmeting opnieuw vastgelegd met Node-script, voor- en na-controle toegevoegd
32d64b7 Fase 0: RAG-inventarisatie en SEO-nulmeting per URL
c1bcc24 Baseline: huidige staat van de site voor fase 0
```
