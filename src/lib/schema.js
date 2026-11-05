// Gedeelde JSON-LD-bouwstenen voor FAQPage en BreadcrumbList, zodat de kennisbank-route
// ([...slug].astro) en de inzichten-route ([slug].astro) dezelfde generator gebruiken in
// plaats van elk hun eigen variant te onderhouden.

export function buildFaqPageSchema(faq) {
  if (!faq?.length) return null;
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
}

// 'crumbs' is de volledige kruimelpad-lijst inclusief de huidige pagina, elk { href, label }.
export function buildBreadcrumbList(crumbs, siteUrl) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: `${siteUrl}${c.href === '/' ? '/' : c.href}`,
    })),
  };
}
