// Resolves the {{price:slug}} {{pricelc:slug}} {{timing:slug}} {{title:slug}} tokens shared by
// remarkServiceTokens (astro.config.mjs, Markdown body of src/content/pages) and the frontmatter
// tokenizer in src/pages/[...slug].astro. NL keeps using services.js values unchanged (byte-identical
// to before). EN derives price/timing straight from prijzen.ts, same facts, English notation -
// mirrors the style already used in src/data/services.js (fixed price, bandbreedte, or per-niveau list).
import { services } from '../data/services.js';
import { prijzen, fractionalNiveaus, formatEur, timingEn } from '../data/prijzen.ts';
import { site } from '../data/site.js';
import { routeById } from '../data/routes.ts';

const priceEn = (slug) => {
  if (slug === 'fractional-ai-lead') return fractionalNiveaus.map((n) => formatEur(n.perMaand, 'en')).join(' / ') + ' per month';
  const p = prijzen[slug];
  return p.minPrice === p.maxPrice ? formatEur(p.minPrice, 'en') : `${formatEur(p.minPrice, 'en')} - ${formatEur(p.maxPrice, 'en')}`;
};
const timingTextEn = (slug) =>
  slug === 'fractional-ai-lead'
    ? fractionalNiveaus.map((n) => n.dagen).join(', ').replace(/, (\d+)$/, ' or $1') + ' days per month'
    : (timingEn[slug] ?? prijzen[slug].timing);

export function resolveToken(field, slug, locale = 'nl') {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Onbekende dienst in token: ${slug}`);
  if (field === 'title') return service.title;
  // Prijzen staan niet meer op de site (site.showPrices: false). Content mag deze tokens niet meer
  // gebruiken; laat de build hard falen in plaats van stilletjes een bedrag of lege plek te tonen.
  if ((field === 'price' || field === 'pricelc') && !site.showPrices)
    throw new Error(`Onbevoegd gebruik van {{${field}:${slug}}}: prijzen staan uit (site.showPrices: false). Verwijder dit token uit de content.`);
  const value = locale === 'en' ? (field === 'timing' ? timingTextEn(slug) : priceEn(slug)) : service[field === 'pricelc' ? 'price' : field];
  return field === 'pricelc' ? value.charAt(0).toLowerCase() + value.slice(1) : value;
}

// Content-collection pages (src/content/pages) write their contact CTA as a literal
// mailto: link in frontmatter/Markdown, authored before /contact existed per locale. Resolves it
// to the live contact page once that locale's route goes live, same self-adjusting pattern already
// used by CTA.astro/PageHero.astro. Any other href is returned unchanged.
export function resolveContactHref(href, locale) {
  if (href !== `mailto:${site.email}`) return href;
  const contact = routeById('contact');
  return contact?.live[locale] ? contact.paths[locale] : href;
}
