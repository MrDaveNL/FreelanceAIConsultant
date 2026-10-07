// Maakt de akkoordlijst: één regel per blok met pagina, paginatype, status, vraagkop en de eerste zin van de antwoordalinea
// zoals die in de HTML komt te staan. Dit plaatst niets.
// Gebruik: node planning/akkoordlijst.mjs <concepten.json> <uitvoer.md> [/pagina-bovenaan ...]
import fs from 'node:fs';
import { parseHtml, tekstVan } from './nulmeting-lib.mjs';
import { blokSchema, valideer } from '../src/data/rag/schema.ts';
import { blokken as geplaatst } from '../src/data/rag/index.ts';
import { renderRagBlok } from '../src/lib/rag-blok.js';
import { splitsZinnen } from '../src/lib/rag-tekst.js';

const [bron, uit, ...bovenaan] = process.argv.slice(2);
const cel = (s) => String(s ?? '').replace(/\s+/g, ' ').trim().replaceAll('|', '/');
const eersteZin = (blok) => splitsZinnen(tekstVan(parseHtml(`<div>${renderRagBlok(blok)}</div>`).querySelector('.rag-blok__antwoord')))[0];

const rijen = geplaatst.map((b) => ({ pagina: b.pagina, type: b.type, status: b.concept ? 'geplaatst (pilot, concept)' : 'geplaatst', vraagkop: b.vraagkop, zin: eersteZin(b) }));
for (const { herkomst, opmerking, status, verificatie, geschrapt, wijzigingen, externeFeiten, ...velden } of JSON.parse(fs.readFileSync(bron, 'utf8'))) {
  if (rijen.some((r) => r.pagina === velden.pagina)) continue; // al geplaatst
  // Een concept dat op publicatie wacht is niet herzien en kan ongeldig zijn: dan staat de ruwe eerste zin er, met tokens.
  let zin;
  try { zin = eersteZin(valideer(blokSchema, [{ bijgewerkt: '2026-10', concept: true, ...velden }], 'concept', 'pagina')[0]); } catch { zin = splitsZinnen(velden.antwoord)[0]; }
  rijen.push({ pagina: velden.pagina, type: velden.type, status: status ?? 'concept', vraagkop: velden.vraagkop, zin });
}

const kop = ['| Pagina | Paginatype | Status | Vraagkop | Eerste zin van de antwoordalinea |', '|---|---|---|---|---|'];
const regel = (r) => `| \`${r.pagina}\` | ${r.type} | ${r.status} | ${cel(r.vraagkop)} | ${cel(r.zin)} |`;
const opPagina = (a, b) => a.pagina.localeCompare(b.pagina);
const tel = (s) => rijen.filter((r) => r.status === s).length;
const boven = bovenaan.map((p) => rijen.find((r) => r.pagina === p) ?? (() => { throw new Error(`onbekende pagina: ${p}`); })());
const types = [...new Set(rijen.map((r) => r.type))].sort();

const md = [
  '# RAG-blokken: akkoordlijst', '',
  `Eén regel per blok: ${rijen.length} blokken. Zet een blok dat geplaatst mag worden in \`docs/rag-concepten.json\` op de status "akkoord"; alleen die blokken worden geplaatst.`, '',
  `Stand: ${tel('geverifieerd')} geverifieerd, ${tel('concept')} concept, ${tel('akkoord')} akkoord, ${tel('wacht op publicatie')} wacht op publicatie, ${tel('geplaatst')} geplaatst, ${tel('geplaatst (pilot, concept)')} geplaatst als pilot. De volledige tekst van elk blok staat in \`docs/rag-concepten.md\`, de reden waarom een blok concept blijft in \`docs/rag-verificatie.md\`.`, '',
  'De eerste zin staat er zoals hij in de HTML komt. Bij een blok dat op publicatie wacht is de tekst niet herzien en kunnen er nog tokens in staan.', '',
  ...(boven.length ? [`## Eerst beoordelen: blokken met een gewijzigde vraagkop (${boven.length})`, '', 'Deze blokken staan ook in hun eigen paginatype hieronder.', '', ...kop, ...boven.map(regel), ''] : []),
  ...types.flatMap((t) => { const r = rijen.filter((x) => x.type === t).sort(opPagina); return [`## Paginatype: ${t} (${r.length})`, '', ...kop, ...r.map(regel), '']; }),
];
fs.writeFileSync(uit, `${md.join('\n').trimEnd()}\n`);
console.log(`${rijen.length} blokken in ${uit}: ${types.map((t) => `${t} ${rijen.filter((r) => r.type === t).length}`).join(', ')}`);
