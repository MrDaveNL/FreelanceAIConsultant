// Maakt de invoer voor de inhoudelijke verificatie (laag B en C): elk blok opgeknipt in genummerde zinnen,
// zoals ze in de HTML komen te staan, met de bronbestanden van de pagina. Zonder de toelichting van de schrijver.
// Gebruik: node planning/verificatie-invoer.mjs <concepten.json> <uitvoermap> [aantal batches]
import fs from 'node:fs';
import path from 'node:path';
import { parseHtml, tekstVan, tag, root } from './nulmeting-lib.mjs';
import { blokSchema, valideer } from '../src/data/rag/schema.ts';
import { blokken as geplaatst } from '../src/data/rag/index.ts';
import { renderRagBlok } from '../src/lib/rag-blok.js';
import { prijsTekst, duurTekst, dienstSlugs } from '../src/lib/rag-prijzen.js';
import { prijzen } from '../src/data/prijzen.ts';
import { services } from '../src/data/services.js';
import { splitsZinnen, getalUitdrukkingen } from '../src/lib/rag-tekst.js';

const [bron, uit, aantal = '7'] = process.argv.slice(2);
fs.mkdirSync(uit, { recursive: true });

// De uitgerekende waarden van prijzen.ts: de bedragen staan daar als formule, niet als tekst.
const waarden = ['# Uitgerekende waarden van src/data/prijzen.ts (per dienst: naam, prijs, doorlooptijd, prijsnotitie)', ''];
for (const slug of dienstSlugs) {
  const s = services.find((x) => x.slug === slug);
  waarden.push(`${slug} | naam: ${s.title} | prijs: ${prijzen[slug].price} | prijs voluit: ${prijsTekst(slug)} | doorlooptijd: ${prijzen[slug].timing} | doorlooptijd voluit: ${duurTekst(slug)} | prijsnotitie: ${prijzen[slug].priceNote}`);
}
fs.writeFileSync(path.join(uit, 'prijzen-waarden.txt'), `${waarden.join('\n')}\n`);

const bronnenVan = (url) => {
  const md = `src/content/pages${url}/index.md`;
  if (fs.existsSync(path.join(root, md))) return [md];
  if (url.startsWith('/inzichten/')) return [`src/data/articles/${url.split('/').pop()}.js`];
  if (url === '/diensten') return ['src/pages/diensten/index.astro', 'src/data/services.js'];
  if (url.startsWith('/diensten/')) return ['src/data/services.js', 'src/pages/diensten/[slug].astro'];
  throw new Error(`geen bron bekend voor ${url}`);
};
const plat = (el) => {
  let s = '';
  for (const k of el.childNodes) s += k.nodeType === 3 ? k.text : tag(k) === 'a' ? `${tekstVan(k)} [link naar ${k.getAttribute('href')}]` : plat(k);
  return s.replace(/\s+/g, ' ').trim();
};

const concepten = JSON.parse(fs.readFileSync(bron, 'utf8')).filter((c) => c.status !== 'wacht op publicatie');
const alle = [
  ...geplaatst.map((b) => ({ blok: b, geplaatst: true })),
  ...concepten.map(({ herkomst, opmerking, status, verificatie, geschrapt, ...velden }) => ({ blok: valideer(blokSchema, [{ bijgewerkt: '2026-10', concept: true, ...velden }], 'concept', 'pagina')[0], geplaatst: false })),
];

const invoer = alle.map(({ blok, geplaatst: staat }) => {
  const doc = parseHtml(`<div>${renderRagBlok(blok)}</div>`);
  const zinnen = [];
  const voeg = (id, soort, zin) => zinnen.push({ id, soort, zin, heeftGetal: getalUitdrukkingen(zin).length > 0 || /[€$]\s?\d/.test(zin) });
  splitsZinnen(plat(doc.querySelector('.rag-blok__antwoord'))).forEach((z, i) => voeg(`A${i + 1}`, 'antwoordalinea', z));
  doc.querySelectorAll('tbody tr').forEach((tr, i) => voeg(`T${i + 1}`, 'tabelrij', tr.childNodes.filter((n) => n.nodeType === 1).map(plat).join(' | ')));
  doc.querySelectorAll('h3').forEach((h3, i) => splitsZinnen(plat(h3.nextElementSibling)).forEach((z, j) => voeg(`V${i + 1}.${j + 1}`, `antwoord op vervolgvraag "${tekstVan(h3)}"`, z)));
  return {
    pagina: blok.pagina,
    geplaatst: staat,
    bronbestanden: [...bronnenVan(blok.pagina), 'src/data/prijzen.ts', 'prijzen-waarden.txt (in de invoermap; uitgerekende waarden van prijzen.ts)'],
    vraagkop: blok.vraagkop,
    vraagkopBestaatAl: blok.onderBestaandeKop,
    vervolgvragen: doc.querySelectorAll('h3').map((h) => tekstVan(h)),
    bronregel: plat(doc.querySelector('.rag-blok__bron')),
    zinnen,
  };
});

const n = Number(aantal);
const batches = Array.from({ length: n }, () => []);
invoer.forEach((b, i) => batches[i % n].push(b));
batches.forEach((b, i) => fs.writeFileSync(path.join(uit, `batch-${i + 1}.json`), JSON.stringify(b, null, 1)));
const totaal = invoer.reduce((s, b) => s + b.zinnen.length, 0);
console.log(`${invoer.length} blokken, ${totaal} zinnen, ${invoer.reduce((s, b) => s + b.zinnen.filter((z) => z.heeftGetal).length, 0)} met een getal, in ${n} batches: ${batches.map((b) => b.length).join(', ')}`);
