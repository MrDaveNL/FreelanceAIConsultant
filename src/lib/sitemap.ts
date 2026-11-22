// Gedeeld door src/pages/sitemap.xml.ts, sitemap-en.xml.ts en nl/sitemap.xml.ts.
// lastmod komt uit de echte inhoud (frontmatter updated/date), nooit uit de buildtijd.
// Voor data zonder eigen datumveld (services.js, cases.js, statische .astro-pagina's) valt dit
// terug op de laatste git-commitdatum van het bronbestand.
import { execSync } from 'node:child_process';
import { getCollection } from 'astro:content';
import { routes, type RouteEntry } from '../data/routes';
import type { Locale } from '../i18n/locales';

const gitDateCache = new Map<string, string>();
function gitLastModified(relPath: string): string {
  if (gitDateCache.has(relPath)) return gitDateCache.get(relPath)!;
  let date: string;
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${relPath}"`, { encoding: 'utf8' }).trim();
    date = iso ? iso.slice(0, 10) : new Date().toISOString().slice(0, 10);
  } catch {
    date = new Date().toISOString().slice(0, 10);
  }
  gitDateCache.set(relPath, date);
  return date;
}

const STATIC_SOURCE: Record<string, Record<Locale, string>> = {
  home: { nl: 'src/pages/nl/index.astro', en: 'src/pages/index.astro' },
  diensten: { nl: 'src/pages/nl/diensten/index.astro', en: 'src/pages/services/index.astro' },
  cases: { nl: 'src/pages/nl/cases/index.astro', en: 'src/pages/cases/index.astro' },
  werkwijze: { nl: 'src/pages/nl/werkwijze.astro', en: 'src/pages/approach.astro' },
  inzichten: { nl: 'src/pages/nl/inzichten/index.astro', en: 'src/pages/insights/index.astro' },
  over: { nl: 'src/pages/nl/over.astro', en: 'src/pages/about.astro' },
  contact: { nl: 'src/pages/nl/contact.astro', en: 'src/pages/contact.astro' },
  'veelgestelde-vragen': { nl: 'src/pages/nl/veelgestelde-vragen.astro', en: 'src/pages/faq.astro' },
  privacy: { nl: 'src/pages/nl/privacy.astro', en: 'src/pages/privacy.astro' },
  'algemene-voorwaarden': { nl: 'src/pages/nl/algemene-voorwaarden.astro', en: 'src/pages/terms.astro' },
};

export interface SitemapRoute {
  entry: RouteEntry;
  path: string;
  lastmod: string;
}

export async function sitemapRoutes(loc: Locale): Promise<SitemapRoute[]> {
  const pages = await getCollection('pages', ({ data }) => data.lang === loc);
  const articles = await getCollection('articles', ({ data }) => data.lang === loc);
  const updatedByUrl = new Map(pages.map((p) => [p.data.url, p.data.updated]));
  // 'updated ?? date': dateModified in [slug].astro valt op dezelfde manier terug op 'date',
  // dus de sitemap-lastmod van een artikel loopt hiermee in de pas met zijn eigen JSON-LD.
  const dateBySlug = new Map(articles.map((a) => [a.data.slug, a.data.updated ?? a.data.date]));
  // lastmod van de inzichten/insights-hub = datum van het meest recente artikel in die taal, niet
  // de git-datum van index.astro: de hub toont precies de artikelenlijst, dus alleen een
  // nieuw/gewijzigd artikel verandert wat zichtbaar is.
  const latestArticleDate = Array.from(dateBySlug.values()).reduce((max, d) => (d > max ? d : max), '');
  const servicesFile = loc === 'nl' ? 'src/data/services.js' : 'src/content/services/all.json';
  const casesFile = loc === 'nl' ? 'src/data/cases.js' : 'src/content/cases/all.json';

  return routes
    .filter((entry) => entry.id !== '404' && entry.live[loc] && !entry.noindex)
    .map((entry) => {
      const path = entry.paths[loc];
      let lastmod: string;
      if (entry.kind === 'content') lastmod = updatedByUrl.get(path) ?? gitLastModified('src/content/pages');
      // dateBySlug is per-locale; de sleutel moet dus de slug van déze taalversie zijn (de laatste
      // padsegment), niet entry.id (dat altijd de NL-slug is, ook voor EN-routes).
      else if (entry.kind === 'article') lastmod = dateBySlug.get(path.split('/').pop()!) ?? gitLastModified('src/content/articles');
      else if (entry.kind === 'service') lastmod = gitLastModified(servicesFile);
      else if (entry.kind === 'case') lastmod = gitLastModified(casesFile);
      else if (entry.id === 'inzichten') lastmod = latestArticleDate || gitLastModified(STATIC_SOURCE[entry.id]?.[loc] ?? 'src/pages');
      else lastmod = gitLastModified(STATIC_SOURCE[entry.id]?.[loc] ?? 'src/pages');
      return { entry, path, lastmod };
    });
}

export const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
