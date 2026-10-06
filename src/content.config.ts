import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Nieuwe content uit de contentplanning (planning/Content_planning_tabblad1_ClaudeCode.xlsx).
// Eén Markdown-bestand per ID; de URL staat expliciet in de frontmatter.
const cta = z.object({ label: z.string(), href: z.string() });

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    id: z.string(),
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
    keyphrase: z.string(),
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

export const collections = { pages };
