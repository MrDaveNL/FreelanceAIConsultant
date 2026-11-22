# Werkafspraak — volgorde op een publicatiedag

Vastgelegd tijdens de correctieronde van BLOG-03/04/05 (batch 1), zodat deze volgorde niet
steeds opnieuw ter discussie staat.

## Volgorde bij elke merge van een blogbranch

1. **Merge `main` eerst in de blogbranch**, niet andersom. De blogbranch neemt zo alle
   tussentijdse wijzigingen op main (fixes, andere al-gemergde blogs, planningscommits) mee
   voordat hij zelf naar main gaat.
2. **Los daarna de openstaande `LINK-TODO`'s op** die naar déze blog verwijzen, in de blogs die
   al gepubliceerd staan. Een `LINK-TODO`-comment noemt expliciet welk BLOG-nummer en welke
   `/nl/inzichten/...`-URL erbij horen; zoek daarop, niet op vrije tekst.
3. **Genereer daarna de nulmeting-baseline opnieuw** voor de pagina's die door stap 1 en 2 zijn
   geraakt (`npm run nulmeting -- /url ...`, of voor de hele site als dat overzichtelijker is),
   tegen de dan actuele, samengevoegde staat van de site. **De baseline-bestanden die op een
   blogbranch zelf zijn gecommit (`docs/seo-nulmeting/*.json`) zijn wegwerp**: ze zijn vastgelegd
   tegen die ene branch, los van main en los van de andere blogbranches, en zijn dus per definitie
   verouderd zodra er iets anders gemerged is. Gebruik ze nooit als eindstand; vertrouw alleen de
   baseline die je ná stap 1 en 2, op de samengevoegde main, opnieuw hebt gegenereerd.
4. **Build + check + deploy.** Pas als de build en de content-checks (`planning/check-content.mjs`,
   `check-rag.mjs`, `check-nulmeting.mjs` e.d.) schoon zijn tegen de in stap 3 verse baseline, gaat
   de deploy uit.

## Waarom deze volgorde

- Eerst `main` inhalen voorkomt dat een later gemergede blog een conflict of een gemiste
  `LINK-TODO`-resolutie oplevert, omdat de blogbranch dan een outdated beeld van main had.
- `LINK-TODO`'s pas oplossen ná de merge-naar-main-stap (stap 1) betekent dat je in de huidige,
  samengevoegde staat van de content zoekt, niet in een branch die nog een paar commits achterloopt.
- Elke blogbranch legt tijdens het schrijven zijn eigen nulmeting-baseline vast (nodig om die
  branch zelf te kunnen builden/checken), maar dat is een momentopname van die ene branch tegen
  main van het moment waarop die branch is afgetakt. Zodra er iets anders gemerged is (een andere
  blog, een fix, deze werkafspraak zelf), klopt die baseline niet meer met de werkelijke
  samengevoegde site. Opnieuw genereren ná stap 1 en 2 is dus geen extra voorzichtigheid, maar de
  enige manier om de check iets te laten vergelijken met de staat die ook echt wordt gedeployd.
- Build/check/deploy als laatste stap is de bestaande volgorde; deze afspraak voegt de drie
  stappen dáárvoor toe, zonder de rest van de pipeline te wijzigen.

## Wat dit niet is

Geen vervanging van de content-checks zelf en geen nieuwe tool. Alleen de vaste volgorde van
vier stappen die bij elke publicatiedag terugkomt: main in de branch, `LINK-TODO`'s in live
blogs, nulmeting-baseline opnieuw genereren tegen die samengevoegde staat, dan build/check/deploy.

## Consistentie bij wetgeving en actualiteit (sinds correctieronde batch 3)

Een agent die een blog over wetgeving of een ander snel veranderend onderwerp schrijft of
corrigeert, leest **eerst** de al geschreven blogs over hetzelfde onderwerp, ook als die nog op
een eigen, niet-gemergede branch staan. Zoek daarop expliciet, niet er impliciet van uit dat een
eerder artikel er nog niet is.

**Waarom:** bij de correctieronde van BLOG-11 (AI in HR) stond in het artikel nog "voorlopig
politiek akkoord" over het uitstel van de hoog-risicoverplichtingen uit bijlage III van de AI Act,
terwijl BLOG-02 (AI Act na de Digital Omnibus, branch `blog/blog-02-ai-act-omnibus`) die stand al
had geactualiseerd naar de definitieve publicatie: Verordening (EU) 2026/1744, gepubliceerd
24 juli 2026, in werking 27 juli 2026. Zonder die blog eerst te lezen, sprak BLOG-11 een eerdere,
al geverifieerde stand tegen in plaats van hem te volgen.

**Hoe toe te passen:** voordat je een paragraaf over wetgeving, een deadline of een cijfer
herschrijft of nieuw schrijft, zoek eerst of er al een ander artikel (gepubliceerd of op een eigen
branch) over hetzelfde onderwerp bestaat, en gebruik de daar al geverifieerde stand als basis.
Wijkt je eigen onderzoek daarvan af, meld dat expliciet in plaats van stilzwijgend een andere
versie van de feiten te publiceren.

## Per taalpaar (sinds besluit 11 nov 2026, bevestigd 22 nov 2026)

Sinds het besluit dat elke inzichten-blog in beide talen verschijnt, gelden de vier stappen
hierboven (main inhalen, LINK-TODO's, nulmeting-baseline, build/check/deploy) **per taalpaar**,
niet per los artikel. Een publicatiedag is pas afgerond als beide taalversies zijn verwerkt.

1. **Merge beide taalbranches** (NL en EN, of de gecombineerde branch die beide bevat) in de
   aangegeven volgorde eerst main in, zoals stap 1 hierboven. Dit geldt voor elke taalversie
   afzonderlijk, niet alleen voor de NL-versie.
2. **LINK-TODO's in beide talen oplossen**: de NL `LINK-TODO`'s wijzen naar `/nl/inzichten/...`,
   de EN `LINK-TODO`'s naar de EN-tegenhanger onder `/insights/...`. Beide kanten (inkomend en
   uitgaand, zie onder) per taal nalopen; een opgeloste NL-link betekent niet automatisch dat de
   EN-link ook is opgelost.
3. **Beide nulmetingen opnieuw genereren**: de NL-baseline tegen `/nl/inzichten/[slug]` én de
   EN-baseline tegen `/insights/[en-slug]`, allebei tegen de samengevoegde main van na stap 1 en 2.
   Eén taal verversen zonder de andere levert een publicatiedag op die voor de helft tegen een
   verouderde staat is gecontroleerd.
4. **Hreflang-check**: controleer dat beide pagina's naar elkaar linken via hreflang (NL → EN en
   EN → NL) en dat de `date`/`datePublished` van beide versies gelijk is. Pas als build, content-
   checks én de hreflang-koppeling voor beide talen kloppen, gaat de deploy uit.

**Waarom:** het besluit van 11 nov (bevestigd 22 nov) vervangt de oude harde regel "alleen NL, EN
volgt later" door "NL en EN gaan samen live op dezelfde publicatiedag". De bestaande routine ging
nog uit van één taal per publicatiedag; zonder deze aanvulling zou de EN-kant stilzwijgend
overgeslagen kunnen worden, terwijl die nu een vereiste is, niet een nice-to-have.

## Live link of LINK-TODO: de publicatievolgorde bepaalt het, niet of het doel al bestaat als bestand

Of een interne link naar een andere blog een gewone, werkende link is of een `LINK-TODO [ID]`,
hangt af van de **publicatiedatum** van het doelartikel, niet van of dat artikel op dit moment al
op main staat of al gemerged is.

- **Publiceert het doelartikel vóór dit artikel** (eerdere datum in de planning), dan mag je een
  gewone link gebruiken. Op de publicatiedag van dit artikel bestaat die pagina namelijk al live,
  ook als de doelblog op het moment van schrijven nog op een eigen, niet-gemergede branch staat.
  Voorbeeld: BLOG-11 (19 januari 2027) mag gewoon linken naar BLOG-02 (17 november 2026), want
  BLOG-02 publiceert ruim daarvoor.
- **Publiceert het doelartikel ná dit artikel**, of bestaat het nog niet in de planning, dan wordt
  het een `LINK-TODO [ID]`. Die pagina bestaat op de publicatiedag van dit artikel nog niet, dus
  een werkende link zou op dat moment een dode link zijn.

**Op elke publicatiedag, als onderdeel van stap 2 hierboven, twee kanten tegelijk afhandelen:**

1. **Inkomend:** de openstaande `LINK-TODO`'s die ándere, al live blogs naar déze blog hebben
   staan, omzetten naar een werkende link.
2. **Uitgaand:** de `LINK-TODO`'s in déze blog zelf nalopen, en elke `LINK-TODO` waarvan het doel
   inmiddels live staat, omzetten naar een werkende link. Dit is het spiegelbeeld van stap 1 en
   werd voorheen over het hoofd gezien: een blog kan zelf ook verwijzingen naar eerder gepubliceerd
   werk hebben openstaan als `LINK-TODO`, simpelweg omdat die blog eerder is geschreven dan de
   publicatiedatum van het doel.

**Why:** bij de correctieronde na batch 3 bleek de regel "nog niet bestaand = LINK-TODO" te grof:
BLOG-11 linkte live naar BLOG-02, dat op het moment van schrijven nog niet gemerged was, maar wél
weken vóór BLOG-11 publiceert. Die link was dus terecht een gewone link, geen LINK-TODO, en is
ook niet aangepast.

## Conversiestap na de CMS-migratie (vanaf dinsdag 24 november 2026)

Sinds de inzichten-CMS-migratie (branch `feat/inzichten-cms-migratie`,
`planning/migratieplan-inzichten-cms.md`) staan NL- en EN-inzichtenartikelen niet meer als
`.js`-bestand (`src/data/articles/*.js`) resp. los item in `src/content/articles/all.json`, maar
als één markdown-bestand per artikel per taal
(`src/content/articles/{nl,en}/<slug>/index.md`). Vanaf dinsdag 24 november 2026 bevat de
publicatiedag-routine hierboven daarom een extra stap, ná het mergen van `main` in de
blogbranch (stap 1) en vóór de build/check/deploy-stap (stap 4):

1. **Extraheer het nieuwe artikel/de nieuwe artikelen.** Een blogbranch die vóór de migratie is
   afgetakt, voegt een artikel nog toe in het oude formaat: een nieuw bestand onder
   `src/data/articles/*.js` voor NL, en/of een nieuw item in `src/content/articles/all.json` voor
   EN. Draai het extractiescript (geschreven bij de migratie, zie stap 1 van
   `planning/migratieplan-inzichten-cms.md`) op precies dat nieuwe bestand/item:
   ```
   node scripts/extract-articles-to-md.mjs --nl-js <pad-naar-het-nieuwe-.js-bestand>
   node scripts/extract-articles-to-md.mjs --en-json <pad-naar-het-nieuwe-EN-item-als-los-JSON-bestand>
   ```
   Dit zet de toevoeging om naar `src/content/articles/{nl,en}/<slug>/index.md`, in het nieuwe
   per-artikel-formaat. Verwijder daarna de oude `.js`-bronbestanden en eventuele reste van
   `all.json` die niet meer bestaan op de post-migratie `main` (een merge van een branch die deze
   nu-verwijderde bestanden nog wijzigt, kan ze laten terugkomen; dat hoort niet, en moet vóór de
   build worden opgeruimd).
   Heeft het nieuwe artikel al een vertaling in de andere taal, zet dan in het bron-item vóór de
   extractie een `counterpart`-veld met de slug van die vertaling (bijv. in het NL `.js`-bestand
   `counterpart: 'why-ai-pilots-stall'`, in het EN-JSON-item `"counterpart": "waarom-ai-pilots-blijven-steken"`).
   `src/data/routes.ts` (`buildArticleRoutes()`) leidt hieruit de sitemap/hreflang/taalwisselaar-
   route van het artikel af; zonder dit veld blijft het artikel gewoon alleen in zijn eigen taal
   live (geen fout, maar ook geen taalkoppeling) totdat de vertaling verschijnt. Geen routes.ts-
   regel meer nodig: zie fix/sitemap-automatisch.
2. **Draai een dist-diff.** Bouw de site vóór en na deze conversiestap (of vóór en na het mergen
   van de blogbranch, als dat makkelijker is) en vergelijk de volledige `dist/`-bomen. Het enige
   toegestane verschil is de set nieuwe URL's van het nieuwe artikel/de nieuwe artikelen zelf
   (de artikelpagina, de hub-pagina's, de RSS-feeds, de sitemaps). Al het overige bestaande moet
   byte-identiek blijven. Wijkt er iets anders af, stop en meld dat exact in plaats van het te
   negeren.
3. Dit geldt per 24 november 2026 concreet voor **BLOG-01-en, BLOG-02-en en BLOG-03** (op het
   moment van schrijven nog te mergen branches): zodra een van die branches wordt gemerged, hoort
   deze conversiestap bij de publicatiedag-routine van dat artikel, bovenop de vier
   standaardstappen en de taalpaar-stappen hierboven.

   **Concreet voor BLOG-01-en en BLOG-02-en** (status 22 november 2026, nog niet gemerged):
   dit zijn de EN-vertalingen van precies de twee NL-artikelen die met fix/sitemap-automatisch
   als eentalig (nog geen `counterpart`) zijn gezet: BLOG-01-en = `shadow-ai` (EN-slug ook
   `shadow-ai`), BLOG-02-en = `ai-act-digital-omnibus` (EN-slug
   `ai-act-after-the-digital-omnibus`). Zodra een van deze twee gemerged wordt:
   - Zet bij de extractie het `counterpart`-veld aan **beide** kanten: in het NL-artikel
     (`src/content/articles/nl/<slug>/index.md`) `counterpart: <en-slug>`, in het nieuwe
     EN-artikel `counterpart: <nl-slug>`. Zonder dit blijft het paar ten onrechte eentalig
     (geen build-fout, wel een gemiste taalkoppeling) — dus dit NIET overslaan omdat de build
     toch slaagt.
   - Beide branches voegen ook nog een regel toe aan `src/data/routes.ts` (oude, vóór deze fix
     geschreven commit, toen de handmatige artikel-lijst nog bestond). Die regel hoort nergens
     meer: de merge geeft hier naar verwachting een conflict (de sectie met handmatige
     artikel-routes is verwijderd) — **verwijder de toegevoegde regel volledig**, `routes.ts`
     heeft 'm niet nodig, `buildArticleRoutes()` pikt het artikel automatisch op zodra het
     bestand en `counterpart` er staan.
   - Een `counterpart`-waarde die niet bestaat in de andere taal (typefout in de slug, of de
     extractie per ongeluk maar aan één kant uitgevoerd) laat de build hard falen met een
     duidelijke melding (`buildArticleRoutes()` in `routes.ts`) — dat is precies de bedoelde
     werking, dus bij die melding niet de fout omzeilen maar de `counterpart`-waarde of de
     extractie corrigeren. Dit is de eerste keer dat dit fail-loud-mechanisme in de praktijk
     wordt getest.

**Waarom:** de migratie verandert de opslagvorm van inzichtenartikelen, niet de inhoud of de
sortering (zie `planning/migratieplan-inzichten-cms.md` voor het bewijs daarvan: een dist-diff
van de volledige site, vóór en na. Verwacht verschil 1: de lastBuildDate van de RSS-feeds
(bouwtijdstip). Verwacht verschil 2: de `lastmod` van de hub-pagina's `/nl/inzichten` en
`/insights` in de sitemaps schoof op naar de migratiedatum, niet omdat de inhoud van die
hub-pagina's veranderde (die is byte-identiek), maar omdat `src/lib/sitemap.ts` voor deze
routes `lastmod` afleidt van de git-commitdatum van het bijbehorende `.astro`-bestand, en de
migratie `src/pages/nl/inzichten/index.astro`, `src/pages/insights/index.astro` en
`src/pages/rss.xml.js` moest aanpassen (async/sorteer-tiebreak). Opgelost op fix/sitemap-
automatisch: `src/lib/sitemap.ts` leidt de `lastmod` van deze hub-pagina's nu af van het meest
recente artikel in die taal, niet meer van de git-datum van het routebestand. Een blogbranch die vóór de migratie is afgetakt, "weet" nog niets van de nieuwe
opslagvorm en voegt daarom nog in het oude formaat toe; zonder deze conversiestap zou die
toevoeging als `.js`-bestand of `all.json`-item op `main` belanden, naast de nieuwe
markdown-collectie, met twee databronnen voor dezelfde inzichten als gevolg.
