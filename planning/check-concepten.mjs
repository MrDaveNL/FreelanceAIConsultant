// Controleert conceptblokken vóórdat ze geplaatst worden.
// Zet elk concept op zijn beoogde plek in een KOPIE van dist/ en draait daar check-rag.mjs op.
// De site zelf en de databron (src/data/rag) blijven ongemoeid.
// Gebruik: npm run build && node planning/check-concepten.mjs <concepten.json> <werkmap>
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { root, distDir, bestandVanUrl } from './nulmeting-lib.mjs';
import { blokSchema, valideer } from '../src/data/rag/schema.ts';
import { renderRagBlok } from '../src/lib/rag-blok.js';
import { normaliseer } from '../src/lib/rag-tekst.js';

const [bron, werkmap] = process.argv.slice(2);
if (!bron || !werkmap) {
  console.error('Gebruik: node planning/check-concepten.mjs <concepten.json> <werkmap>');
  process.exit(1);
}
const kopie = path.join(path.resolve(werkmap), 'dist');
fs.rmSync(kopie, { recursive: true, force: true });
fs.cpSync(distDir, kopie, { recursive: true });

const tekstZonderTags = (html) => html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"');
const ruw = JSON.parse(fs.readFileSync(bron, 'utf8'));
// Blokken die al geplaatst zijn blijven meetellen, zodat de controle op de kopie hetzelfde ziet als de site.
const geldig = [...(await import('../src/data/rag/index.ts')).blokken];
let fouten = 0;
for (const item of ruw) {
  const { herkomst, opmerking, ...velden } = item;
  let blok;
  let html;
  try {
    [blok] = valideer(blokSchema, [{ bijgewerkt: '2026-10', concept: true, ...velden }], 'concept', 'pagina');
    html = renderRagBlok(blok);
  } catch (e) {
    console.log(`✗ ${item.pagina}\n  FOUT  ${e.message.replace(/\n\s*/g, ' | ')}`);
    fouten++;
    continue;
  }
  const bestand = path.join(kopie, bestandVanUrl(blok.pagina));
  if (!fs.existsSync(bestand)) {
    console.log(`✗ ${blok.pagina}\n  FOUT  pagina bestaat niet in dist/`);
    fouten++;
    continue;
  }
  let pagina = fs.readFileSync(bestand, 'utf8');
  if (pagina.includes('class="rag-blok"')) {
    console.log(`✗ ${blok.pagina}\n  FOUT  pagina heeft al een geplaatst RAG-blok`);
    fouten++;
    continue;
  }
  // Plek: direct onder de bestaande kop, of vóór de eerste H2 na de H1.
  const koppen = [...pagina.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].filter((m) => m.index > pagina.indexOf('<h1'));
  const doel = blok.onderBestaandeKop ? koppen.find((m) => normaliseer(tekstZonderTags(m[1])) === normaliseer(blok.vraagkop)) : koppen[0];
  if (!doel) {
    console.log(`✗ ${blok.pagina}\n  FOUT  ${blok.onderBestaandeKop ? `bestaande H2 "${blok.vraagkop}" staat niet op de pagina` : 'pagina heeft geen H2'}`);
    fouten++;
    continue;
  }
  const plek = blok.onderBestaandeKop ? doel.index + doel[0].length : doel.index;
  pagina = `${pagina.slice(0, plek)}\n${html}\n${pagina.slice(plek)}`;
  fs.writeFileSync(bestand, pagina);
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
