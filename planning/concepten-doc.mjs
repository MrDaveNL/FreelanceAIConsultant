// Maakt docs/rag-concepten.md (ter beoordeling) uit de concept-JSON. Plaatst niets.
// Gebruik: npm run build && node planning/concepten-doc.mjs docs/rag-concepten.json docs/rag-concepten.md planning/rag-concepten-kop.md
import fs from 'node:fs';
import path from 'node:path';
import { parseHtml, tekstVan, tekstblokken, tag, distDir, bestandVanUrl } from './nulmeting-lib.mjs';
import { blokSchema, valideer } from '../src/data/rag/schema.ts';
import { renderRagBlok } from '../src/lib/rag-blok.js';

const [bron, uit, kop] = process.argv.slice(2);
const concepten = JSON.parse(fs.readFileSync(bron, 'utf8'));

const md = (el) => {
  let s = '';
  for (const k of el.childNodes) {
    if (k.nodeType === 3) s += k.text;
    else if (tag(k) === 'a') s += `[${tekstVan(k)}](${k.getAttribute('href')})`;
    else s += md(k);
  }
  return s.replace(/\s+/g, ' ').trim();
};
const cel = (s) => s.replace(/\|/g, '\\|');

const soort = (c, pagina) => {
  const u = c.pagina;
  if (u === '/diensten' || u === '/tarieven') return 'Dienstenoverzicht en tarieven';
  if (u.startsWith('/diensten/')) return "Dienstpagina's";
  if (u.startsWith('/inzichten/')) return 'Inzichten (artikelen)';
  if (u.startsWith('/kennisbank/')) return 'Kennisbankartikelen';
  if (u.startsWith('/markten/')) return "Branchepagina's";
  if (u.startsWith('/ai-workshop')) return 'Workshops, training en coaching';
  if (u.split('/').length === 2) return "Hubs en overige hoofdpagina's";
  return "Spokes (verdiepingspagina's onder een hub)";
};
const volgorde = ["Dienstpagina's", 'Dienstenoverzicht en tarieven', "Hubs en overige hoofdpagina's", "Spokes (verdiepingspagina's onder een hub)",
  'Workshops, training en coaching', "Branchepagina's", 'Kennisbankartikelen', 'Inzichten (artikelen)'];

const groepen = new Map(volgorde.map((v) => [v, []]));
const getallenMis = [];
for (const c of concepten) {
  const { herkomst, opmerking, _groep, status, verificatie, geschrapt, ...velden } = c;
  const [blok] = valideer(blokSchema, [{ bijgewerkt: '2026-10', concept: true, ...velden }], 'concept', 'pagina');
  const sectie = parseHtml(`<div>${renderRagBlok(blok)}</div>`).querySelector('div');
  const pagina = parseHtml(fs.readFileSync(path.join(distDir, bestandVanUrl(blok.pagina)), 'utf8'));
  const robots = pagina.querySelector('meta[name="robots"]')?.getAttribute('content');
  const h1 = tekstVan(pagina.querySelector('h1'));
  const eersteH2 = pagina.querySelector('main').querySelectorAll('h2').map((h) => tekstVan(h))[0];

  // Signaal voor verzonnen feiten: elk getal in de concepttekst (buiten de tokens) moet op de pagina zelf staan.
  const paginaTekst = tekstblokken(pagina.querySelector('main')).join(' ');
  const eigenTekst = [velden.antwoord, ...velden.vervolgvragen.flatMap((v) => [v.vraag, v.antwoord]), ...(velden.tabel?.rijen ?? []).flat().filter((x) => typeof x === 'string')]
    .join(' ').replace(/\{\{[^}]+\}\}/g, ' ');
  const mis = [...new Set(eigenTekst.match(/\d[\d.,]*\d|\d/g) ?? [])].filter((g) => !paginaTekst.includes(g));
  if (mis.length) getallenMis.push(`${blok.pagina}: ${mis.join(', ')}`);

  const r = [];
  r.push(`### \`${blok.pagina}\``);
  r.push('');
  r.push(`Pagina: ${h1}${robots ? ` · staat op \`${robots}\`` : ''}`);
  r.push('');
  r.push(`- **Status:** ${status ?? 'concept'}${verificatie ? ` (${verificatie.bevestigd} van ${verificatie.zinnen} zinnen bevestigd, ${verificatie.geschrapt} geschrapt, ${verificatie.voorgelegd} voorgelegd, ${verificatie.bevindingen} bevinding(en) open)` : ''}`);
  r.push(`- **Bloktype:** ${blok.type}${blok.alleenAntwoord ? ' (alleen vraagkop, antwoordalinea en bronregel)' : ''}`);
  r.push(blok.onderBestaandeKop
    ? `- **Plek:** antwoordalinea direct onder de bestaande H2 "${blok.vraagkop}"; vervolgvragen en bronregel aan het eind van die sectie. Geen eigen kop.`
    : `- **Plek:** eigen vraagkop, na de hero en vóór de eerste bestaande H2 ("${eersteH2}").`);
  r.push(`- **Vraagkop:** ${blok.vraagkop}${blok.onderBestaandeKop ? ' (bestaand)' : ''}`);
  r.push(`- **Antwoordalinea:** ${md(sectie.querySelector('.rag-blok__antwoord'))}`);
  const tabel = sectie.querySelector('table');
  if (tabel) {
    r.push(`- **Tabel:** ${tekstVan(tabel.querySelector('caption'))}`);
    r.push('');
    const koppen = tabel.querySelectorAll('thead th').map((th) => cel(tekstVan(th)));
    r.push(`  | ${koppen.join(' | ')} |`);
    r.push(`  |${koppen.map(() => '---').join('|')}|`);
    for (const tr of tabel.querySelectorAll('tbody tr')) r.push(`  | ${tr.childNodes.filter((n) => n.nodeType === 1).map((c) => cel(md(c))).join(' | ')} |`);
    r.push('');
  }
  const vragen = sectie.querySelectorAll('h3');
  if (vragen.length) {
    r.push('- **Vervolgvragen:**');
    vragen.forEach((h3, i) => r.push(`  ${i + 1}. *${tekstVan(h3)}* ${md(h3.nextElementSibling)}`));
  }
  r.push(`- **Bronregel:** ${md(sectie.querySelector('.rag-blok__bron')).replace(/ Bijgewerkt:.*$/, '')}`);
  if (herkomst) r.push(`- **Herkomst:** ${herkomst}`);
  if (opmerking) r.push(`- **Let op:** ${opmerking}`);
  r.push('');
  groepen.get(soort(c)).push({ url: blok.pagina, tekst: r.join('\n'), tabel: !!tabel, bestaand: blok.onderBestaandeKop });
}

const delen = [fs.readFileSync(kop, 'utf8').trimEnd(), ''];
delen.push('## Overzicht', '', '| Paginatype | Aantal | Onder bestaande kop | Met tabel |', '|---|---|---|---|');
for (const [naam, items] of groepen) delen.push(`| ${naam} | ${items.length} | ${items.filter((i) => i.bestaand).length} | ${items.filter((i) => i.tabel).length} |`);
const alle = [...groepen.values()].flat();
delen.push(`| **Totaal** | **${alle.length}** | **${alle.filter((i) => i.bestaand).length}** | **${alle.filter((i) => i.tabel).length}** |`, '');
let n = 0;
for (const [naam, items] of groepen) {
  delen.push(`## ${++n}. ${naam} (${items.length})`, '');
  for (const item of items.sort((a, b) => a.url.localeCompare(b.url))) delen.push(item.tekst);
}
fs.writeFileSync(uit, `${delen.join('\n').trimEnd()}\n`);
console.log(`${alle.length} concepten geschreven naar ${uit}`);
console.log(`getallen die niet letterlijk op de pagina staan (${getallenMis.length} pagina's):`);
getallenMis.forEach((g) => console.log('  ' + g));
