import a01 from './freelance-ai-consultant-vs-agency-vs-big4.js';
import a02 from './van-ai-strategie-naar-waarde.js';
import a03 from './build-buy-of-partner.js';
import a04 from './welke-ai-use-cases-leveren-resultaat.js';
import a05 from './het-datafundament-onder-ai.js';
import a06 from './ai-governance-zonder-bureaucratie.js';
import a07 from './waarom-ai-pilots-blijven-steken.js';
import a08 from './de-business-case-voor-ai.js';
import a09 from './ai-adoptie-begint-bij-het-werk.js';
import a10 from './ai-vendorselectie-in-acht-stappen.js';
import a11 from './wanneer-heb-je-echt-een-ai-strateeg-nodig.js';
import a12 from './ai-agents-wat-ze-wel-en-niet-kunnen.js';

// Nieuwste eerst.
export const articles = [a01, a02, a03, a04, a05, a06, a07, a08, a09, a10, a11, a12]
  .sort((x, y) => (x.date < y.date ? 1 : -1));

export const featuredArticle = articles.find((a) => a.featured) ?? articles[0];
export const otherArticles = articles.filter((a) => a !== featuredArticle);
export const getArticle = (slug) => articles.find((a) => a.slug === slug);

export const articleCategories = [
  'Alle inzichten',
  ...Array.from(new Set(articles.map((a) => a.category))),
];
