import { site } from '../data/site.js';
import { services } from '../data/services.js';
import { cases } from '../data/cases.js';
import { articles } from '../data/articles/index.js';
import { getCollection } from 'astro:content';

const staticPages = [
  ['/', '1.0', 'weekly'],
  ['/diensten', '0.9', 'monthly'],
  ['/cases', '0.9', 'monthly'],
  ['/werkwijze', '0.8', 'monthly'],
  ['/inzichten', '0.9', 'weekly'],
  ['/over', '0.8', 'monthly'],
  ['/contact', '0.8', 'monthly'],
  ['/veelgestelde-vragen', '0.7', 'monthly'],
  ['/privacy', '0.3', 'yearly'],
  ['/algemene-voorwaarden', '0.3', 'yearly'],
];

export async function GET() {
  const today = new Date().toISOString().slice(0, 10);

  const entries = [
    ...staticPages.map(([path, priority, freq]) => ({ path, priority, freq, lastmod: today })),
    ...services.map((s) => ({ path: `/diensten/${s.slug}`, priority: '0.8', freq: 'monthly', lastmod: today })),
    ...cases.map((c) => ({ path: `/cases/${c.slug}`, priority: '0.7', freq: 'yearly', lastmod: today })),
    ...articles.map((a) => ({ path: `/inzichten/${a.slug}`, priority: '0.7', freq: 'yearly', lastmod: a.date })),
    ...(await getCollection('pages', ({ data }) => !data.noindex)).map(({ data }) => ({
      path: data.url,
      priority: data.pageType.includes('Hub') || data.schema === 'pricing' ? '0.8' : '0.7',
      freq: 'monthly',
      lastmod: data.updated,
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${site.url}${entry.path === '/' ? '/' : entry.path}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.freq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
