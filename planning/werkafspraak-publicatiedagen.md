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
3. **Build + check + deploy.** Pas als de build en de content-checks (`planning/check-content.mjs`,
   `check-rag.mjs`, `check-nulmeting.mjs` e.d.) schoon zijn, gaat de deploy uit.

## Waarom deze volgorde

- Eerst `main` inhalen voorkomt dat een later gemergede blog een conflict of een gemiste
  `LINK-TODO`-resolutie oplevert, omdat de blogbranch dan een outdated beeld van main had.
- `LINK-TODO`'s pas oplossen ná de merge-naar-main-stap (stap 1) betekent dat je in de huidige,
  samengevoegde staat van de content zoekt, niet in een branch die nog een paar commits achterloopt.
- Build/check/deploy als laatste stap is de bestaande volgorde; deze afspraak voegt alleen de
  twee stappen dáárvoor toe, zonder de rest van de pipeline te wijzigen.

## Wat dit niet is

Geen vervanging van de content-checks zelf en geen nieuwe tool. Alleen de vaste volgorde van
drie stappen die bij elke publicatiedag terugkomt: main in de branch, `LINK-TODO`'s in live
blogs, dan build/check/deploy.
