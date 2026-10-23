import type { APIRoute } from 'astro';
import { site } from '../data/site.js';
import { LOCALES } from '../i18n';
import { sitemapRoutes, escapeXml } from '../lib/sitemap';

// Fase 1: nog geen EN-pagina's live (behalve /404, dat niet indexeerbaar is), dus deze sitemap
// heeft nu een leeg urlset. Fase 2/3 vult hem automatisch zodra routes.ts live.en: true krijgt.
export const GET: APIRoute = async () => {
  const enRoutes = await sitemapRoutes('en');

  const urls = enRoutes
    .map(({ entry, path, lastmod }) => {
      const alternates = LOCALES.filter((loc) => entry.live[loc])
        .map((loc) => `    <xhtml:link rel="alternate" hreflang="${loc}" href="${escapeXml(site.url + entry.paths[loc])}" />`)
        .join('\n');
      const xdefault = `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(site.url + entry.paths.en)}" />`;
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
