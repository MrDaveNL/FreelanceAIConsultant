import { getCollection } from 'astro:content';
import { site } from '@/data/site.js';

const escape = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export async function GET() {
  const articles = (await getCollection('articles', ({ data }) => data.lang === 'nl'))
    .map((a) => a.data)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const items = articles
    .map((article) => {
      const url = `${site.url}/nl/inzichten/${article.slug}`;
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
    <title>Inzichten | ${escape(site.name)}</title>
    <link>${site.url}/nl/inzichten</link>
    <atom:link href="${site.url}/nl/rss.xml" rel="self" type="application/rss+xml" />
    <description>Praktische inzichten over AI-strategie, governance en besluitvorming voor senior leiders.</description>
    <language>nl-NL</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
