import type { APIRoute } from 'astro';
import { site } from '../data/site.js';
import { LOCALES, DEFAULT_LOCALE } from '../i18n';

// Sitemap-regels komen uit LOCALES, nooit handmatig bijgewerkt. Zie src/pages/sitemap.xml.ts.
const sitemapPathFor = (loc: string) => (loc === DEFAULT_LOCALE ? '/sitemap-en.xml' : `/${loc}/sitemap.xml`);

export const GET: APIRoute = () => {
  const lines = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${site.url}/sitemap.xml`,
    ...LOCALES.map((loc) => `Sitemap: ${site.url}${sitemapPathFor(loc)}`),
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain' } });
};
