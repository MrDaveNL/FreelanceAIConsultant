// Plaatst het RAG-blok in een Markdown-pagina uit src/content/pages, zonder dat het Markdown-bestand wijzigt.
// Met een eigen vraagkop komt het blok vóór de eerste H2. Hergebruikt het een bestaande kop (onderBestaandeKop),
// dan komt de antwoordalinea direct onder die kop en komen de vervolgvragen en de bronregel aan het eind van
// die sectie: vóór de volgende H2 of aan het eind van de content.
import { blokVoor } from '../data/rag/index.ts';
import { renderRagDelen } from './rag-blok.js';
import { normaliseer } from './rag-tekst.js';

const tekstVan = (node) => (node.value ?? '') + (node.children ?? []).map(tekstVan).join('');

export function remarkRagBlok() {
  return (tree, file) => {
    const pagina = file.data?.astro?.frontmatter?.url;
    const blok = pagina && blokVoor(pagina);
    if (!blok) return;
    const { antwoord, vervolg } = renderRagDelen(blok);
    if (!antwoord) return;
    const isH2 = (node) => node.type === 'heading' && node.depth === 2;
    const html = (value) => ({ type: 'html', value });
    if (!blok.onderBestaandeKop) {
      const eerste = tree.children.findIndex(isH2);
      if (eerste < 0) throw new Error(`RAG-blok ${pagina}: pagina heeft geen H2`);
      tree.children.splice(eerste, 0, html(antwoord));
      return;
    }
    const kop = tree.children.findIndex((node) => isH2(node) && normaliseer(tekstVan(node)) === normaliseer(blok.vraagkop));
    if (kop < 0) throw new Error(`RAG-blok ${pagina}: bestaande kop "${blok.vraagkop}" niet gevonden`);
    const volgende = tree.children.findIndex((node, i) => i > kop && isH2(node));
    // Eerst het eind van de sectie invoegen, zodat de index van de kop niet verschuift.
    tree.children.splice(volgende < 0 ? tree.children.length : volgende, 0, html(vervolg));
    tree.children.splice(kop + 1, 0, html(antwoord));
  };
}
