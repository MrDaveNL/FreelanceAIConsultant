import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';
import type { Loader } from 'astro/loaders';
import yaml from 'js-yaml';
import { isValidHref } from './data/routes';

// Nieuwe content uit de contentplanning (planning/Content_planning_tabblad1_ClaudeCode.xlsx).
// Eén Markdown-bestand per ID; de URL staat expliciet in de frontmatter.
const cta = z.object({
  label: z.string(),
  href: z.string().refine(isValidHref, (href) => ({
    message: `Href '${href}' is geen bestaande, live route (in geen van beide talen) en geen volledige https-URL.`,
  })),
});

// 'lang' bepaalt de taalboom (src/content/pages/nl/** of src/content/pages/en/**).
// NL-content is ongewijzigd verplaatst; zie i18n-fase1-rapport.md voor de migratie.
const locale = z.enum(['en', 'nl']);

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    id: z.string(),
    lang: locale,
    url: z.string().startsWith('/'),
    parent: z.string().nullable().optional(),
    cluster: z.string(),
    pageType: z.string(),
    // Bepaalt template-varianten en structured data.
    schema: z.enum(['service', 'article', 'collection', 'pricing']),
    navLabel: z.string(),
    title: z.string(),
    metaTitle: z.string().max(60),
    metaDescription: z.string().min(120).max(160),
    // Optioneel: navigatie-/hubpagina's hebben soms geen primaire keyphrase om op te richten.
    keyphrase: z.string().optional(),
    eyebrow: z.string(),
    lede: z.string(),
    primaryCta: cta,
    secondaryCta: cta.optional(),
    summary: z.array(z.string()).max(4).optional(),
    published: z.string(),
    updated: z.string(),
    faqTitle: z.string().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    // true = wel gebouwd, maar 'noindex, follow' en niet in de sitemap (nog niet publiceren).
    noindex: z.boolean().optional(),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).optional(),
  }),
});

// services/cases/articles waren losse JS-arrays (src/data/*.js), nu content collections
// met een file()-loader per taal-array. Structuur en teksten zijn 1-op-1 overgenomen.
const serviceFact = z.object({ label: z.string(), value: z.string(), tone: z.string() });
const serviceProof = z.object({
  eyebrow: z.string(),
  title: z.string(),
  body: z.string(),
  stats: z.array(z.tuple([z.string(), z.string()])),
  caseSlug: z.string().nullable(),
});

const services = defineCollection({
  loader: file('src/content/services/all.json'),
  schema: z.object({
    id: z.string(),
    lang: locale,
    slug: z.string(),
    meta: z.string(),
    number: z.string(),
    featured: z.boolean(),
    tone: z.string(),
    icon: z.string(),
    title: z.string(),
    cardText: z.string(),
    timing: z.string(),
    price: z.string(),
    cardPrice: z.string().optional(),
    cardTiming: z.string().optional(),
    priceNote: z.string(),
    eyebrow: z.string(),
    heroTitle: z.string(),
    marked: z.string(),
    lede: z.string(),
    facts: z.array(serviceFact),
    problemTitle: z.string(),
    problem: z.array(z.string()),
    approachIntro: z.string(),
    approach: z.array(z.tuple([z.string(), z.string()])),
    deliverables: z.array(z.string()),
    bestFor: z.array(z.string()),
    notFor: z.array(z.string()),
    proof: serviceProof,
    faq: z.array(z.tuple([z.string(), z.string()])),
    related: z.array(z.string()),
  }),
});

const cases = defineCollection({
  loader: file('src/content/cases/all.json'),
  schema: z.object({
    id: z.string(),
    lang: locale,
    slug: z.string(),
    sector: z.string(),
    tone: z.string(),
    icon: z.string(),
    cardTitle: z.string(),
    title: z.string(),
    titleMarked: z.string(),
    titleRest: z.string(),
    challenge: z.string(),
    result: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    lede: z.string(),
    service: z.string(),
    serviceSlug: z.string(),
    duration: z.string(),
    year: z.string(),
    proof: z.array(z.tuple([z.string(), z.string()])),
    story: z.array(z.tuple([z.string(), z.string()])),
    quote: z.object({ text: z.string(), author: z.string() }),
    role: z.array(z.string()),
    next: z.string(),
  }),
});

// Eigen loader (geen glob()+render()): leest elk artikel-markdownbestand als ruwe tekst en
// splitst front matter/body met een regex op de '---'-grenzen + js-yaml, zoals
// scripts/check-content.mjs dat al doet voor src/content/pages. Bewust NIET Astro's
// markdown-compiler (geen remarkPlugins hierboven, geen entry.render()): 'body' blijft zo de
// kant-en-klare HTML-string die het al was in de oude all.json, en loopt dus niet alsnog door
// remarkServiceTokens of de RAG-remark-plugin van de kennisbank (astro.config.mjs), die beide
// alleen draaien op content die wél via Astro's markdown-compiler gaat (de 'pages'-collectie
// hierboven). Zie planning/migratieplan-inzichten-cms.md.
function articlesLoader(): Loader {
  return {
    name: 'articles-loader',
    load: async ({ store, parseData, config, logger }) => {
      store.clear();
      const base = fileURLToPath(new URL('src/content/articles', config.root));
      const rootDir = fileURLToPath(config.root);
      for (const lang of ['en', 'nl']) {
        const langDir = path.join(base, lang);
        if (!existsSync(langDir)) continue;
        // Alfabetisch op mapnaam (slug) voor een voorspelbare, reproduceerbare inleesvolgorde.
        // De sorteervolgorde die de hub-pagina's en RSS-feeds tonen, hangt hier niet van af: die
        // staat volledig vast via 'date' (en 'order' als tiebreak, voor beide talen expliciet in
        // de front matter), niet via de volgorde waarin deze loader bestanden inleest.
        const slugs = readdirSync(langDir, { withFileTypes: true })
          .filter((d) => d.isDirectory())
          .map((d) => d.name)
          .sort();
        for (const slug of slugs) {
          const filePath = path.join(langDir, slug, 'index.md');
          if (!existsSync(filePath)) continue;
          const raw = readFileSync(filePath, 'utf8');
          const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
          if (!m) {
            logger.error(`Geen front matter gevonden in ${filePath}`);
            continue;
          }
          const frontmatter = yaml.load(m[1]) as Record<string, unknown>;
          const body = m[2];
          const rawItem = { ...frontmatter, body };
          const id = String((frontmatter.id as string | undefined) ?? `${lang}-${slug}`);
          const relativeFilePath = path.relative(rootDir, filePath).split(path.sep).join('/');
          const parsedData = await parseData({ id, data: rawItem, filePath });
          store.set({ id, data: parsedData, filePath: relativeFilePath });
        }
      }
    },
  };
}

const articles = defineCollection({
  loader: articlesLoader(),
  schema: z.object({
    id: z.string(),
    lang: locale,
    slug: z.string(),
    category: z.string(),
    tone: z.string(),
    icon: z.string(),
    featured: z.boolean(),
    title: z.string(),
    titleLine1: z.string(),
    titleLine2: z.string(),
    excerpt: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    lede: z.string(),
    readingTime: z.string(),
    date: z.string(),
    dateLabel: z.string(),
    // Optioneel: datum van de laatste inhoudelijke wijziging, voor dateModified in de schema.
    // Zonder dit veld valt dateModified terug op 'date' (nooit op de builddatum).
    updated: z.string().optional(),
    // Optioneel: vaste tweede sorteersleutel (laag = nieuwer/boven), zodat de volgorde op de
    // inzichten-hub en in de RSS-feed niet verandert als twee artikelen dezelfde 'date' krijgen.
    order: z.number().optional(),
    summary: z.array(z.string()),
    summaryClose: z.string(),
    takeaways: z.array(z.tuple([z.string(), z.string()])),
    remember: z.string(),
    related: z.array(z.string()),
    body: z.string(),
    // Optioneel: artikelen hadden tot nu toe geen FAQ. Alleen gevuld -> FAQPage in de schema
    // en een zichtbare 'Veelgestelde vragen'-sectie met het bestaande Accordion-component.
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { pages, services, cases, articles };
