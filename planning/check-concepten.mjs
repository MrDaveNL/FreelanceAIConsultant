// Controleert conceptblokken vóórdat ze geplaatst worden.
// Zet elk concept op zijn beoogde plek in een KOPIE van dist/ en draait daar check-rag.mjs op.
// De site zelf en de databron (src/data/rag) blijven ongemoeid.
// Concepten met status "wacht op publicatie" worden overgeslagen.
// Gebruik: npm run build && node planning/check-concepten.mjs <concepten.json> <werkmap>
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { root, distDir, bestandVanUrl, parseHtml, tekstVan, tag } from './nulmeting-lib.mjs';
import { blokSchema, valideer } from '../src/data/rag/schema.ts';
import { renderRagDelen } from '../src/lib/rag-blok.js';
import { normaliseer } from '../src/lib/rag-tekst.js';

const [bron, werkmap] = process.argv.slice(2);
if (!bron || !werkmap) {
  console.error('Gebruik: node planning/check-concepten.mjs <concepten.json> <werkmap>');
  process.exit(1);
}
const kopie = path.join(path.resolve(werkmap), 'dist');
fs.rmSync(kopie, { recursive: true, force: true });
fs.cpSync(distDir, kopie, { recursive: true });

const ruw = JSON.parse(fs.readFileSync(bron, 'utf8')).filter((c) => c.status !== 'wacht op publicatie');
// Blokken die al geplaatst zijn blijven meetellen, zodat de controle op de kopie hetzelfde ziet als de site.
const geldig = [...(await import('../src/data/rag/index.ts')).blokken];
let fouten = 0;
const meld = (pagina, reden) => {
  console.log(`✗ ${pagina}\n  FOUT  ${reden}`);
  fouten++;
};
for (const item of ruw) {
  const { herkomst, opmerking, status, verificatie, ...velden } = item;
  let blok;
  let delen;
  try {
    [blok] = valideer(blokSchema, [{ bijgewerkt: '2026-10', concept: true, ...velden }], 'concept', 'pagina');
    delen = renderRagDelen(blok);
  } catch (e) {
    meld(item.pagina, e.message.replace(/\n\s*/g, ' | '));
    continue;
  }
  const bestand = path.join(kopie, bestandVanUrl(blok.pagina));
  if (!fs.existsSync(bestand)) { meld(blok.pagina, 'pagina bestaat niet in dist/'); continue; }
  const doc = parseHtml(fs.readFileSync(bestand, 'utf8'));
  if (doc.querySelector('section.rag-blok')) { meld(blok.pagina, 'pagina heeft al een geplaatst RAG-blok'); continue; }
  // Plek: zoals de templates en de remark-plugin het doen.
  const koppen = doc.querySelector('main').querySelectorAll('h2');
  if (blok.onderBestaandeKop) {
    const kop = koppen.find((h) => normaliseer(tekstVan(h)) === normaliseer(blok.vraagkop));
    if (!kop) { meld(blok.pagina, `bestaande H2 "${blok.vraagkop}" staat niet op de pagina`); continue; }
    // Vervolgvragen en bronregel aan het eind van de sectie: vóór de volgende h2 in dezelfde container, of aan het eind.
    let laatste = kop;
    while (laatste.nextElementSibling && tag(laatste.nextElementSibling) !== 'h2') laatste = laatste.nextElementSibling;
    laatste.insertAdjacentHTML('afterend', `\n${delen.vervolg}\n`);
    kop.insertAdjacentHTML('afterend', `\n${delen.antwoord}\n`);
  } else {
    if (!koppen.length) { meld(blok.pagina, 'pagina heeft geen H2'); continue; }
    // Vóór de eerste h2; staat die in een eigen sectie (Astro-templates), dan vóór die sectie.
    let doel = koppen[0];
    while (tag(doel.parentNode) !== 'main' && !doel.parentNode.classList?.contains('prose') && !doel.parentNode.classList?.contains('content') && tag(doel.parentNode) !== 'article') doel = doel.parentNode;
    // In een Astro-template staat het blok in een eigen omhulsel (src/components/RagBlok.astro).
    const html = doel === koppen[0] ? delen.antwoord : `<div class="rag-blok-sectie"><div class="container">${delen.antwoord}</div></div>`;
    doel.insertAdjacentHTML('beforebegin', `\n${html}\n`);
  }
  fs.writeFileSync(bestand, doc.toString());
  geldig.push(blok);
}

const blokkenBestand = path.join(path.resolve(werkmap), 'blokken.json');
fs.writeFileSync(blokkenBestand, JSON.stringify(geldig, null, 1));
const uitkomst = spawnSync(process.execPath, [path.join(root, 'planning', 'check-rag.mjs')], {
  env: { ...process.env, RAG_DIST: kopie, RAG_BLOKKEN: blokkenBestand },
  encoding: 'utf8',
});
process.stdout.write(uitkomst.stdout);
process.stderr.write(uitkomst.stderr);
console.log(`${ruw.length} concept(en) aangeboden, ${fouten} ongeldig vóór plaatsing. De telling hierboven is inclusief de al geplaatste blokken.`);
process.exitCode = fouten || uitkomst.status ? 1 : 0;
