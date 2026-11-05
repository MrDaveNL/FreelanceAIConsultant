// EN-tegenhanger van check-nulmeting.mjs: vergelijkt dist/ met de EN-nulmeting in docs/seo-nulmeting-en/
// (vastgelegd met nulmeting-en.mjs, zie de uitleg daar). Geen /nl-padmigratie en geen zonderNl/metNl-
// normalisatie nodig: EN-url's zijn al de echte build-url's. Verder dezelfde regels als check-nulmeting.mjs:
// een pagina slaagt als elk beschermd element identiek is en bestaande koppen/bodytekst/links/structured
// data volledig en in dezelfde volgorde terugkomen; toevoegingen (incl. FAQ) zijn toegestaan, wijzigingen niet.
// Gebruik: npm run build && node planning/check-nulmeting-en.mjs [--toon-toevoegingen] [/url ...]
import fs from 'node:fs';
import path from 'node:path';
import { meetUrl, root, distPaginas, urlVanBestand, naamVanUrl } from './nulmeting-lib.mjs';

// Zelfde map als nulmeting-en.mjs schrijft, maar hier als losse constante in plaats van een import
// van dat script: nulmeting-en.mjs voert zijn vastleg-logica (incl. process.exit bij een onbekend
// argument) op het top-level uit, en zou die dus ook afvuren zodra dit bestand het importeert.
const nulmetingEnDir = path.join(root, 'docs', 'seo-nulmeting-en');

const args = process.argv.slice(2);
const toonToevoegingen = args.includes('--toon-toevoegingen');
const gevraagd = args.filter((a) => a.startsWith('/'));
const onbekend = args.filter((a) => a !== '--toon-toevoegingen' && !a.startsWith('/'));
if (onbekend.length) {
  console.error(`Onbekend argument: ${onbekend.join(' ')}. Geef URL's op als /pad.`);
  process.exit(1);
}

const gelijk = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const kort = (v) => {
  const s = typeof v === 'string' ? v : JSON.stringify(v);
  return s.length > 160 ? `${s.slice(0, 157)}...` : s;
};
const volgorde = (voor, na) => {
  const n = voor.length;
  const m = na.length;
  const lcs = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--)
      lcs[i][j] = voor[i] === na[j] ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
  const ontbreekt = [];
  const toegevoegd = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (voor[i] === na[j]) { i++; j++; }
    else if (lcs[i + 1][j] >= lcs[i][j + 1]) ontbreekt.push(voor[i++]);
    else toegevoegd.push(na[j++]);
  }
  ontbreekt.push(...voor.slice(i));
  toegevoegd.push(...na.slice(j));
  return { ontbreekt, toegevoegd };
};

const metingen = fs.readdirSync(nulmetingEnDir).filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(fs.readFileSync(path.join(nulmetingEnDir, f), 'utf8')))
  .filter((m) => !gevraagd.length || gevraagd.includes(m.url))
  .sort((a, b) => a.url.localeCompare(b.url));

let fouten = 0;
let gewijzigd = 0;
for (const voor of metingen) {
  const na = meetUrl(voor.url);
  const fout = [];
  const info = [];
  if (!na) {
    console.log(`✗ ${voor.url}\n  FOUT  pagina ontbreekt in dist/`);
    fouten++;
    continue;
  }
  if (na.html.lang !== 'en') {
    console.log(`✗ ${voor.url}\n  FOUT  pagina heeft lang="${na.html.lang}" (verwacht "en")`);
    fouten++;
    continue;
  }

  for (const veld of ['title', 'meta_description', 'canonical', 'robots_meta', 'h1'])
    if (!gelijk(voor.beschermd[veld], na.beschermd[veld])) fout.push(`${veld} gewijzigd\n        voor: ${kort(voor.beschermd[veld])}\n        na:   ${kort(na.beschermd[veld])}`);
  if (na.beschermd.hreflang.length !== voor.beschermd.hreflang.length) info.push(`hreflang: ${voor.beschermd.hreflang.length} → ${na.beschermd.hreflang.length}`);
  for (const veld of Object.keys(voor.social)) {
    if (voor.social[veld] !== na.social[veld]) fout.push(`${veld} gewijzigd\n        voor: ${kort(voor.social[veld])}\n        na:   ${kort(na.social[veld])}`);
  }

  const kop = (k) => `H${k.niveau}: ${k.tekst}`;
  const koppen = volgorde(voor.koppen.map(kop), na.koppen.map(kop));
  for (const k of koppen.ontbreekt) fout.push(`bestaande kop ontbreekt, is gewijzigd of staat op een andere plek: ${kort(k)}`);
  if (na.beschermd.h1.length !== voor.beschermd.h1.length) fout.push(`aantal H1's was ${voor.beschermd.h1.length}, is ${na.beschermd.h1.length}`);
  if (koppen.toegevoegd.length) info.push(`${koppen.toegevoegd.length} kop(pen) toegevoegd${toonToevoegingen || koppen.ontbreekt.length ? `: ${koppen.toegevoegd.map(kort).join(' | ')}` : ''}`);

  const tekst = volgorde(voor.bodytekst.blokken, na.bodytekst.blokken);
  for (const b of tekst.ontbreekt.slice(0, 8)) fout.push(`bestaande bodytekst ontbreekt, is gewijzigd of verplaatst: "${kort(b)}"`);
  if (tekst.ontbreekt.length > 8) fout.push(`... en nog ${tekst.ontbreekt.length - 8} tekstblok(ken)`);
  if (tekst.toegevoegd.length) {
    info.push(`${tekst.toegevoegd.length} tekstblok(ken) toegevoegd, ${na.bodytekst.woorden - voor.bodytekst.woorden} woorden erbij`);
    if (toonToevoegingen || tekst.ontbreekt.length) for (const b of tekst.toegevoegd) info.push(`  + "${kort(b)}"`);
  }

  const link = (l) => `${l.regio} | ${l.href} | ${l.anker}`;
  const links = volgorde(voor.links.map(link), na.links.map(link));
  for (const l of links.ontbreekt.slice(0, 8)) fout.push(`bestaande link of ankertekst ontbreekt of is gewijzigd: ${kort(l)}`);
  if (links.toegevoegd.length) info.push(`${links.toegevoegd.length} link(s) toegevoegd${toonToevoegingen ? `: ${links.toegevoegd.map(kort).join(' ; ')}` : ''}`);

  // Structured data: elke bestaande knoop en elk bestaand FAQ-item komt identiek en in dezelfde volgorde terug.
  // Toegevoegd mag alleen een FAQPage, een vraag daarin, of een nieuwe knoop zijn (bv. BreadcrumbList/Person @id).
  if (!gelijk(voor.structured_data.items, na.structured_data.items)) {
    const plat = (items) => items.flat().flatMap((item) => {
      const { '@graph': graph, ...omhulsel } = item;
      return [...(graph ? [`omhulsel ${JSON.stringify(omhulsel)}`] : []), ...(graph ?? [item]).flatMap((knoop) => {
        if (knoop['@type'] !== 'FAQPage') return [`knoop ${JSON.stringify(knoop)}`];
        const { mainEntity = [], ...faq } = knoop;
        return [`FAQPage ${JSON.stringify(faq)}`, ...mainEntity.map((vraag) => `vraag ${JSON.stringify(vraag)}`)];
      })];
    });
    const sd = volgorde(plat(voor.structured_data.items), plat(na.structured_data.items));
    for (const s of sd.ontbreekt) fout.push(`structured data: bestaand deel ontbreekt, is gewijzigd of verplaatst: ${kort(s)}`);
    if (sd.toegevoegd.length) info.push(`${sd.toegevoegd.length} structured-data-knoop/knopen toegevoegd${toonToevoegingen ? `: ${sd.toegevoegd.map(kort).join(' ; ')}` : ''}`);
  }
  if (na.structured_data.items.some((i) => i._parse_error)) fout.push('structured data is geen geldige JSON meer');
  if (!gelijk(voor.afbeeldingen, na.afbeeldingen)) fout.push('afbeeldingen, alt-teksten of bestandsnamen gewijzigd');
  if (!gelijk(voor.laadprestaties.scripts, na.laadprestaties.scripts)) fout.push(`scripts gewijzigd (was ${voor.laadprestaties.scripts.length}, is ${na.laadprestaties.scripts.length}): geen extra client-side JavaScript toegestaan`);
  if (na.laadprestaties.aantal_details !== voor.laadprestaties.aantal_details) fout.push(`aantal <details> was ${voor.laadprestaties.aantal_details}, is ${na.laadprestaties.aantal_details}`);
  if (na.laadprestaties.aantal_tabellen !== voor.laadprestaties.aantal_tabellen) info.push(`tabellen: ${voor.laadprestaties.aantal_tabellen} → ${na.laadprestaties.aantal_tabellen}`);
  if (na.html.bytes !== voor.html.bytes && (info.length || fout.length)) info.push(`HTML: ${voor.html.bytes} → ${na.html.bytes} bytes`);

  if (fout.length) fouten++;
  if (fout.length || info.length) {
    gewijzigd++;
    console.log(`${fout.length ? '✗' : '✓'} ${voor.url}`);
    fout.forEach((f) => console.log(`  FOUT  ${f}`));
    info.forEach((i) => console.log(`  info  ${i}`));
  }
}

const bekend = new Set(metingen.map((m) => m.url));
if (!gevraagd.length)
  for (const url of distPaginas().map(urlVanBestand))
    if (url !== '/nl' && !url.startsWith('/nl/') && !bekend.has(url)) console.log(`  let op: ${url} heeft nog geen EN-nulmeting (${naamVanUrl(url)}.json)`);

console.log(`\n${metingen.length} EN-pagina's vergeleken met de nulmeting: ${metingen.length - gewijzigd} ongewijzigd, ${gewijzigd - fouten} met alleen toevoegingen, ${fouten} met fouten.`);
process.exitCode = fouten ? 1 : 0;
