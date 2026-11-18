// Controleert of een CTA-href (primaryCta/secondaryCta in src/content/pages) een bestaande
// interne route is of een volledige https-URL, zodat een getypte tikfout (bijv. een verkeerd
// cluster-pad) de build laat falen in plaats van stil een dode link op te leveren.
// Los van src/data/routes.ts (geen Astro/TS-afhankelijkheid) zodat dit met `node --test` getest
// kan worden; routes.ts roept isValidHref hieronder aan met zijn eigen 'routes'-array.
//
// 'mailto:<site-email>' is een bewuste uitzondering: oudere EN-kennisbankpagina's zijn geschreven
// voórdat /contact in het Engels live was en gebruiken daarom nog een letterlijke mailto-link
// (zie resolveContactHref in src/lib/service-tokens.js, die dit bij het bouwen alsnog naar de
// live contactpagina vertaalt). Nieuwe pagina's kiezen in Sveltia een directe contactpagina-optie.
export function isValidHref(href, routes, siteEmail) {
  if (href.startsWith('https://')) return true;
  if (siteEmail && href === `mailto:${siteEmail}`) return true;
  return routes.some(
    (entry) => (entry.live.nl && entry.paths.nl === href) || (entry.live.en && entry.paths.en === href)
  );
}
