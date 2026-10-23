import { getCollection } from 'astro:content';
import { site } from '@/data/site.js';

const escape = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// Fase 1: nog geen EN-artikelen, dus een geldige, lege feed. Fase 3 vult 'm met EN insights.
export async function GET() {
  const articles = (await getCollection('articles', ({ data }) => data.lang === 'en'))
    .map((a) => a.data)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const items = articles
    .map((article) => {
      const url = `${site.url}/insights/${article.slug}`;
      return `    <item>
      <title>${escape(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escape(article.excerpt)}</description>
      <category>${escape(article.category)}</category>
      <pubDate>${new Date(`${article.date}T09:00:00Z`).toUTCString()}</pubDate>
    </item>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Insights | ${escape(site.name)}</title>
    <link>${site.url}/insights</link>
    <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Practical insights on AI strategy, governance and decision-making for senior leaders.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
