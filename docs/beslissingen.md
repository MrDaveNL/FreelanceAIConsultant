# Beslissingen die afwijken van de CMS-briefing

Zie `planning/CMS_BRIEFING_freelanceaiconsultant.md` voor de oorspronkelijke briefing.

## 2026-11-16: scope beperkt tot de kennisbank

Fase 1 bracht aan het licht dat "inzichten" (NL) geen markdown- of JSON-brontekst heeft, maar
`.js`-bestanden per artikel (`src/data/articles/*.js`), machinaal omgezet naar
`src/content/articles/all.json` vóór elke build. Sveltia CMS kan geen `.js`-bestanden bewerken,
en een JSON-schrijfactie op `all.json` zou bij de volgende build alsnog overschreven worden voor
NL. Dave heeft gekozen voor optie 1 uit het fase 1-rapport: het CMS nu alleen voor de kennisbank
bouwen, en een migratie van de inzichten naar CMS-geschikte brontekst als apart, later te
beslissen traject (zie `planning/migratieplan-inzichten-cms.md`).

## 2026-11-16: geen Sveltia-i18n, twee losse collecties

`config.yml` heeft geen top-level `i18n:`-blok. EN en NL zijn twee losse collecties
(`kennisbank_en`, `kennisbank_nl`), elk gewoon een `folder`-collectie zonder i18n-structuur. Reden:
Sveltia's i18n-structuren (`multiple_files`/`multiple_folders`) verwachten een identieke slug per
taal, en die is hier niet identiek (`ai-examples` vs `ai-voorbeelden`). Het `id`-veld in de front
matter koppelt de EN- en NL-versie inhoudelijk, maar is voor het CMS een gewoon tekstveld, geen
vertaalsleutel. Zelfde aanpak als bij echion.link.

## 2026-11-16: create en delete staan uit

Beide kennisbankcollecties hebben `create: false` en `delete: false`. Dit CMS is voor kleine
tekstaanpassingen aan bestaande pagina's, niet voor nieuwe. Een nieuwe kennisbankpagina heeft een
nieuw `id`, een plek in een `cluster`, verplichte interne links (zie
`planning/check-content.mjs`) en vaak een nieuw RAG-blok, dat blijft via Claude Code lopen.

## 2026-11-16: media_folder/public_folder zijn ongebruikte verplichte velden

Sveltia vereist een `media_folder`/`public_folder`-configuratie, ook als er niets wordt
geüpload. Fase 1 liet zien dat geen enkele content-body een afbeelding bevat. Gezet op
`public/admin/uploads`, die map blijft in de praktijk leeg.

## 2026-11-16: DEPLOY.md gecorrigeerd

DEPLOY.md beschreef `/var/www/freelanceaiconsultant/repo` als git-checkout. De echte server
(output van Dave, 2026-11-16) laat zien dat `/var/www/freelanceaiconsultant` zelf de checkout is,
zonder `repo/`-submap. DEPLOY.md en `cms-publish.ps1` zijn hierop aangepast.

## 2026-11-16: check-cms-content.mjs niet met vaste branches in npm run check

Het content-checkscript heeft per publicatie een main-ref en een cms-ref nodig; die zijn er niet
bij een gewone lokale build of CI-run op een featurebranch. Alleen de unit tests
(`check-cms-content.test.mjs`) zitten in `npm test`. Het script zelf wordt aangeroepen door
`cms-publish.ps1`, met de juiste branches.
