// Plaatst het RAG-blok in een Markdown-pagina uit src/content/pages, zonder dat het Markdown-bestand wijzigt.
// Met een eigen vraagkop komt het blok vóór de eerste H2; hergebruikt het een bestaande kop
// (onderBestaandeKop), dan komt het direct onder die kop.
import { blokVoor } from '../data/rag/index.ts';
import { renderRagBlok } from './rag-blok.js';
import { normaliseer } from './rag-tekst.js';

const tekstVan = (node) => (node.value ?? '') + (node.children ?? []).map(tekstVan).join('');

export function remarkRagBlok() {
  return (tree, file) => {
    const pagina = file.data?.astro?.frontmatter?.url;
    const blok = pagina && blokVoor(pagina);
    if (!blok) return;
    const html = renderRagBlok(blok);
    if (!html) return;
    const isH2 = (node) => node.type === 'heading' && node.depth === 2;
    const index = blok.onderBestaandeKop
      ? tree.children.findIndex((node) => isH2(node) && normaliseer(tekstVan(node)) === normaliseer(blok.vraagkop))
      : tree.children.findIndex(isH2);
    if (index < 0)
      throw new Error(blok.onderBestaandeKop ? `RAG-blok ${pagina}: bestaande kop "${blok.vraagkop}" niet gevonden` : `RAG-blok ${pagina}: pagina heeft geen H2`);
    tree.children.splice(blok.onderBestaandeKop ? index + 1 : index, 0, { type: 'html', value: html });
  };
}
