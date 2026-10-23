import type { APIRoute } from 'astro';
import { site } from '../data/site.js';
import { LOCALES, DEFAULT_LOCALE } from '../i18n';
import { sitemapRoutes, escapeXml } from '../lib/sitemap';

// Eén sitemap per taal uit LOCALES; een taal toevoegen voegt hier automatisch een regel toe.
const sitemapPathFor = (loc: string) => (loc === DEFAULT_LOCALE ? '/sitemap-en.xml' : `/${loc}/sitemap.xml`);

export const GET: APIRoute = async () => {
  const perLocale = await Promise.all(
    LOCALES.map(async (loc) => ({ loc, routes: await sitemapRoutes(loc) }))
  );

  const sitemaps = perLocale
    // Een lege sitemap (nog geen live routes in die taal) wordt niet opgenomen in de index.
    .filter(({ routes }) => routes.length > 0)
    .map(({ loc, routes }) => {
      const lastmod = routes.reduce((max, r) => (r.lastmod > max ? r.lastmod : max), '');
      return `  <sitemap>
    <loc>${escapeXml(site.url + sitemapPathFor(loc))}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}
  </sitemap>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemaps}\n</sitemapindex>\n`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
