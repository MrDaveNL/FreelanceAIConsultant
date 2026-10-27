import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

// Nieuwe content uit de contentplanning (planning/Content_planning_tabblad1_ClaudeCode.xlsx).
// Eén Markdown-bestand per ID; de URL staat expliciet in de frontmatter.
const cta = z.object({ label: z.string(), href: z.string() });

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

const articles = defineCollection({
  loader: file('src/content/articles/all.json'),
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
    summary: z.array(z.string()),
    summaryClose: z.string(),
    takeaways: z.array(z.tuple([z.string(), z.string()])),
    remember: z.string(),
    related: z.array(z.string()),
    body: z.string(),
  }),
});

export const collections = { pages, services, cases, articles };
