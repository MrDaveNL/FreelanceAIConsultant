// Resolves the {{price:slug}} {{pricelc:slug}} {{timing:slug}} {{title:slug}} tokens shared by
// remarkServiceTokens (astro.config.mjs, Markdown body of src/content/pages) and the frontmatter
// tokenizer in src/pages/[...slug].astro. NL keeps using services.js values unchanged (byte-identical
// to before). EN derives price/timing straight from prijzen.ts, same facts, English notation -
// mirrors the style already used in src/data/services.js (fixed price, bandbreedte, or per-niveau list).
import { services } from '../data/services.js';
import { prijzen, fractionalNiveaus, formatEur, timingEn } from '../data/prijzen.ts';

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
  const value = locale === 'en' ? (field === 'timing' ? timingTextEn(slug) : priceEn(slug)) : service[field === 'pricelc' ? 'price' : field];
  return field === 'pricelc' ? value.charAt(0).toLowerCase() + value.slice(1) : value;
}
