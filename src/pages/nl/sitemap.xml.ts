import type { APIRoute } from 'astro';
import { site } from '@/data/site.js';
import { LOCALES } from '@/i18n';
import { sitemapRoutes, escapeXml } from '@/lib/sitemap';

export const GET: APIRoute = async () => {
  const nlRoutes = await sitemapRoutes('nl');

  const urls = nlRoutes
    .map(({ entry, path, lastmod }) => {
      const alternates = LOCALES.filter((loc) => entry.live[loc])
        .map((loc) => `    <xhtml:link rel="alternate" hreflang="${loc}" href="${escapeXml(site.url + entry.paths[loc])}" />`)
        .join('\n');
      const xdefault = entry.live.en
        ? `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(site.url + entry.paths.en)}" />`
        : '';
      return `  <url>
    <loc>${escapeXml(site.url + path)}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}${xdefault}
  </url>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
