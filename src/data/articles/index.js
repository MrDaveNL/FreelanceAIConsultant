// NL-inzichtenartikelen staan sinds de CMS-migratie als losse markdown-bestanden in
// src/content/articles/nl/<slug>/index.md (content.config.ts, 'articles'-collectie), niet meer
// als JS-objectliteral in dit mapje. Deze helpers lezen nu uit die collectie, maar houden
// dezelfde naam en signatuur als vóór de migratie (zie planning/migratieplan-inzichten-cms.md),
// op de 'async' na: getCollection() is zelf async, dus zijn getArticle/articleCategories dat nu
// ook. Consumenten die deze functies aanroepen, 'await' ze.
import { getCollection } from 'astro:content';

// 'order' is de tiebreak bij een gelijke 'date' (laag = nieuwer/boven), zodat de volgorde op de
// hub en in de RSS-feed niet verschuift als twee artikelen dezelfde datum krijgen. Front matter
// van elk NL-artikel bevat dit veld al (zie src/content/articles/nl/*/index.md).
const sortNl = (x, y) => (x.date !== y.date ? (x.date < y.date ? 1 : -1) : (x.order ?? 0) - (y.order ?? 0));

async function nlArticles() {
  const entries = await getCollection('articles', ({ data }) => data.lang === 'nl');
  return entries.map((e) => e.data).sort(sortNl);
}

export async function getArticle(slug) {
  return (await nlArticles()).find((a) => a.slug === slug);
}

export async function articleCategories() {
  const articles = await nlArticles();
  return ['Alle inzichten', ...Array.from(new Set(articles.map((a) => a.category)))];
}

export async function featuredArticle() {
  const articles = await nlArticles();
  return articles.find((a) => a.featured) ?? articles[0];
}

export async function otherArticles() {
  const articles = await nlArticles();
  const featured = await featuredArticle();
  return articles.filter((a) => a !== featured);
}
