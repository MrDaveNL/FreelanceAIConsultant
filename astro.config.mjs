import { defineConfig } from 'astro/config';
import { services } from './src/data/services.js';
import { remarkRagBlok } from './src/lib/remark-rag-blok.js';

// Vervangt {{price:slug}}, {{pricelc:slug}} (midden in een zin) en {{timing:slug}} in Markdown door de waarden uit services.js,
// zodat prijzen op nieuwe pagina's altijd 1-op-1 gelijk zijn aan de dienstpagina's.
function remarkServiceTokens() {
  const lookup = (field, slug) => {
    const service = services.find((s) => s.slug === slug);
    if (!service) throw new Error(`Onbekende dienst in token: ${slug}`);
    if (service[field] === undefined) throw new Error(`Token {{${field}:${slug}}} bestaat niet`);
    return service[field];
  };
  const replace = (value) =>
    value.replace(/\{\{(price|pricelc|timing|title):([a-z0-9-]+)\}\}/g, (_, field, slug) => {
      if (field !== 'pricelc') return lookup(field, slug);
      const price = lookup('price', slug);
      return price.charAt(0).toLowerCase() + price.slice(1);
    });
  const walk = (node) => {
    if ((node.type === 'text' || node.type === 'html') && typeof node.value === 'string') node.value = replace(node.value);
    node.children?.forEach(walk);
  };
  return (tree) => walk(tree);
}

export default defineConfig({
  site: 'https://freelanceaiconsultant.com',
  output: 'static',
  trailingSlash: 'never',
  markdown: { remarkPlugins: [remarkServiceTokens, remarkRagBlok] },
  // Routing blijft handmatig (content-collections met een 'url'-veld per taal, geen locale-mappen
  // onder src/pages/); dit blok levert alleen de taalconfiguratie en Astro.currentLocale.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    routing: { prefixDefaultLocale: false },
  },
});
