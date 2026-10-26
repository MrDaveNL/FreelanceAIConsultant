import { defineConfig } from 'astro/config';
import { resolveToken, resolveContactHref } from './src/lib/service-tokens.js';
import { localeFromPath } from './src/data/routes.ts';
import { remarkRagBlok } from './src/lib/remark-rag-blok.js';

// Vervangt {{price:slug}}, {{pricelc:slug}} (midden in een zin) en {{timing:slug}} in Markdown door de
// waarden uit src/lib/service-tokens.js, zodat prijzen op nieuwe pagina's altijd 1-op-1 gelijk zijn aan
// de dienstpagina's. Taal komt uit de 'url' in de frontmatter, zelfde aanpak als remarkRagBlok hieronder.
// Herschrijft ook een letterlijke mailto:-link naar /contact zodra die taalversie live is (zelfde
// self-adjusting patroon als CTA.astro/PageHero.astro).
function remarkServiceTokens() {
  return (tree, file) => {
    const locale = localeFromPath(file.data?.astro?.frontmatter?.url ?? '/');
    const replace = (value) => value.replace(/\{\{(price|pricelc|timing|title):([a-z0-9-]+)\}\}/g, (_, field, slug) => resolveToken(field, slug, locale));
    const walk = (node) => {
      if ((node.type === 'text' || node.type === 'html') && typeof node.value === 'string') node.value = replace(node.value);
      if (node.type === 'link' && typeof node.url === 'string') node.url = resolveContactHref(node.url, locale);
      node.children?.forEach(walk);
    };
    walk(tree);
  };
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
