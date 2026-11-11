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
