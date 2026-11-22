# TODO: lastmod in de sitemap afleiden van content, niet van de git-datum van het routebestand

Ontdekt bij de dist-diff van de inzichten-CMS-migratie (`feat/inzichten-cms-migratie`,
`planning/migratieplan-inzichten-cms.md`): de sitemap-`lastmod` van de hub-pagina's
`/nl/inzichten` en `/insights` schoof op naar de migratiedatum, terwijl de inhoud van die
pagina's byte-identiek bleef. Oorzaak: `src/lib/sitemap.ts` leidt `lastmod` voor deze routes
(en de andere entries met `entry.kind !== 'content' | 'article' | 'service' | 'case'`) af via
`gitLastModified(STATIC_SOURCE[entry.id]?.[loc] ?? 'src/pages')` — de git-commitdatum van het
`.astro`-bestand van de route zelf. Een codewijziging aan dat bestand (refactor, bugfix,
dependency-update, zonder dat de getoonde inhoud verandert) verschuift zo de sitemap-datum,
terwijl die juist alleen zou moeten veranderen als de getoonde inhoud verandert.

## Wat anders moet

Voor de hub- en artikel-routes van de `articles`-collectie: `lastmod` afleiden uit de content
in plaats van uit de git-datum van het routebestand.

- **Hub-pagina's** (`/nl/inzichten`, `/insights`): `lastmod` = de datum van het meest recente
  artikel in die taal (max van `date`/`updated` over `getCollection('articles', ...)` voor die
  taal), niet `gitLastModified()` van `index.astro`.
- **Artikelpagina's**: `lastmod` = `updated ?? date` van dat artikel (het `updated`-veld bestaat
  al in het schema van `content.config.ts`, zie de migratie). Dit is vermoedelijk al zo voor het
  `entry.kind === 'article'`-pad in `sitemap.ts` (`dateBySlug.get(...)`) — controleren of dat pad
  ook al `updated` gebruikt in plaats van alleen `date`, en zo niet, aanpassen.

## Wat te laten

Niet in deze taak: de andere `STATIC_SOURCE`-routes (werkwijze, diensten-hub, etc.) die geen
`articles`-collectie-inhoud tonen. Die blijven op `gitLastModified()` van hun eigen
`.astro`-bestand, want daar is dat wél een redelijke proxy voor "inhoud veranderd" (geen
aparte content-datum om op terug te vallen).

## Bewijs bij oplevering

Een dist-diff (zelfde aanpak als bij de inzichten-migratie) waarbij een codewijziging aan
`src/pages/nl/inzichten/index.astro`/`src/pages/insights/index.astro`/`src/pages/rss.xml.js`
die de getoonde inhoud niet verandert, ook de sitemap-`lastmod` van die hub-pagina's niet meer
verandert.
