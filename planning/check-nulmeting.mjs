// Voor- en na-controle: vergelijkt de build (dist/) met de SEO-nulmeting in docs/seo-nulmeting/.
// Een pagina slaagt als elk beschermd element identiek is en de bestaande koppen, bodytekst en links
// volledig en in dezelfde volgorde terugkomen. Toevoegingen zijn toegestaan, wijzigingen niet.
// Gebruik: npm run build && node planning/check-nulmeting.mjs [--toon-toevoegingen] [/url ...]
import fs from 'node:fs';
import path from 'node:path';
import { meetUrl, nulmetingDir, distPaginas, urlVanBestand, naamVanUrl, naarNlPad } from './nulmeting-lib.mjs';

// i18n fase 1: elke nulmeting is vóór de migratie vastgelegd met het oude, ongeprefixte NL-pad.
// De pagina zelf staat nu onder /nl. Toegestane afwijking (zie i18n-opdracht): alleen de /nl-prefix
// in URL, canonical en interne hrefs, plus de nieuw toegevoegde hreflang/taalwisselaar-tags.
// metNl komt uit nulmeting-lib.mjs (naarNlPad): zelfde mapping die ook nulmeting.mjs gebruikt,
// zodat vastleggen en vergelijken nooit uit de pas kunnen lopen.
const metNl = naarNlPad;
// zonderNl hieronder normaliseert tekst-ínhoud (hrefs, canonical, social-urls) binnen één gemeten
// pagina, niet de top-level url-identiteit van de nulmeting zelf — vandaar een eigen, kleinere
// implementatie die los staat van naarNlPad/vanNlPad.
const zonderNl = (v) => {
  if (typeof v !== 'string') return v;
  const stripped = v.replace(/^(https?:\/\/[^/]+)?\/nl(?=\/|$)/, '$1');
  return /^(https?:\/\/[^/]+)?$/.test(stripped) ? `${stripped}/` : stripped;
};
// Normaliseert structured data vóór vergelijking: URL's verliezen de /nl-prefix (toegestaan) en
// inLanguage (nieuw, taalmetadata zoals hreflang) wordt genegeerd, net als hreflang hierboven.
const normaliseerSd = (waarde) => {
  if (Array.isArray(waarde)) return waarde.map(normaliseerSd);
  if (waarde && typeof waarde === 'object') {
    const kopie = {};
    for (const [k, v] of Object.entries(waarde)) {
      if (k === 'inLanguage') continue;
      kopie[k] = normaliseerSd(v);
    }
    return kopie;
  }
  return zonderNl(waarde);
};

const args = process.argv.slice(2);
const toonToevoegingen = args.includes('--toon-toevoegingen');
const gevraagd = args.filter((a) => a.startsWith('/'));
const onbekend = args.filter((a) => a !== '--toon-toevoegingen' && !a.startsWith('/'));
if (onbekend.length) {
  // Git Bash zet een argument als /pad om naar een Windows-pad; gebruik daar MSYS_NO_PATHCONV=1.
  console.error(`Onbekend argument: ${onbekend.join(' ')}. Geef URL's op als /pad.`);
  process.exit(1);
}

const gelijk = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const kort = (v) => {
  const s = typeof v === 'string' ? v : JSON.stringify(v);
  return s.length > 160 ? `${s.slice(0, 157)}...` : s;
};
// Komt elke waarde uit `voor` in dezelfde volgorde terug in `na`? Geeft de ontbrekende en de toegevoegde waarden.
// Langste gemeenschappelijke deelrij, zodat één gewijzigde regel niet alles erna als ontbrekend meldt.
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

const metingen = fs.readdirSync(nulmetingDir).filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(fs.readFileSync(path.join(nulmetingDir, f), 'utf8')))
  .filter((m) => !gevraagd.length || gevraagd.includes(m.url))
  .sort((a, b) => a.url.localeCompare(b.url));

let fouten = 0;
let gewijzigd = 0;
for (const voor of metingen) {
  const na = meetUrl(metNl(voor.url));
  const fout = [];
  const info = [];
  if (!na) {
    console.log(`✗ ${voor.url}\n  FOUT  pagina ontbreekt in dist/ (verwacht onder ${metNl(voor.url)})`);
    fouten++;
    continue;
  }
  // Bewaking tegen precies de fout die eerder optrad: sinds EN-pagina's live zijn, bestaat er ook
  // weer een dist-bestand op het kale, ongeprefixte pad (de Engelse versie) — als meetUrl daar ooit
  // per ongeluk naar wijst in plaats van naar /nl, meet deze check de verkeerde taalversie zonder
  // dat "pagina ontbreekt" dat ooit zou signaleren. Faal hard in plaats van door te meten.
  if (na.html.lang !== 'nl') {
    console.log(`✗ ${voor.url}\n  FOUT  nulmeting wijst naar ${metNl(voor.url)} maar die pagina heeft lang="${na.html.lang}" (verwacht "nl") — vergelijkt mogelijk met de verkeerde taalversie`);
    fouten++;
    continue;
  }

  // canonical verschuift mee naar /nl: dat is toegestaan, dus vergelijken na het strippen van die prefix.
  // hreflang bestond niet vóór de migratie; de nieuwe tags zijn een toegestane toevoeging, geen wijziging.
  for (const veld of ['title', 'meta_description', 'robots_meta', 'h1'])
    if (!gelijk(voor.beschermd[veld], na.beschermd[veld])) fout.push(`${veld} gewijzigd\n        voor: ${kort(voor.beschermd[veld])}\n        na:   ${kort(na.beschermd[veld])}`);
  if (zonderNl(voor.beschermd.canonical) !== zonderNl(na.beschermd.canonical))
    fout.push(`canonical gewijzigd (los van de /nl-prefix)\n        voor: ${kort(voor.beschermd.canonical)}\n        na:   ${kort(na.beschermd.canonical)}`);
  if (na.beschermd.hreflang.length) info.push(`hreflang toegevoegd: ${na.beschermd.hreflang.map((h) => h.hreflang).join(', ')}`);
  for (const veld of Object.keys(voor.social)) {
    if (veld === 'og:locale') continue; // og:locale blijft nl_NL; og:locale:alternate is nieuw en wordt hier niet gemeten.
    const v = veld === 'og:url' ? zonderNl(voor.social[veld]) : voor.social[veld];
    const n = veld === 'og:url' ? zonderNl(na.social[veld]) : na.social[veld];
    if (v !== n) fout.push(`${veld} gewijzigd\n        voor: ${kort(voor.social[veld])}\n        na:   ${kort(na.social[veld])}`);
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

  // De href van een intern NL-naar-NL-link verschuift mee naar /nl: toegestaan, dus genormaliseerd vergeleken.
  const link = (l) => `${l.regio} | ${zonderNl(l.href)} | ${l.anker}`;
  const links = volgorde(voor.links.map(link), na.links.map(link));
  for (const l of links.ontbreekt.slice(0, 8)) fout.push(`bestaande link of ankertekst ontbreekt of is gewijzigd: ${kort(l)}`);
  if (links.toegevoegd.length) info.push(`${links.toegevoegd.length} link(s) toegevoegd${toonToevoegingen ? `: ${links.toegevoegd.map(kort).join(' ; ')}` : ''}`);

  // Structured data: elke bestaande knoop en elk bestaand FAQ-item komt identiek en in dezelfde volgorde terug.
  // Toegevoegd mag alleen een FAQPage, een vraag daarin (RAG-blok) of taalmetadata zijn (zie normaliseerSd).
  const sdVoor = normaliseerSd(voor.structured_data.items);
  const sdNa = normaliseerSd(na.structured_data.items);
  if (JSON.stringify(sdVoor) !== JSON.stringify(sdNa)) {
    const plat = (items) => items.flat().flatMap((item) => {
      const { '@graph': graph, ...omhulsel } = item;
      return [...(graph ? [`omhulsel ${JSON.stringify(omhulsel)}`] : []), ...(graph ?? [item]).flatMap((knoop) => {
        if (knoop['@type'] !== 'FAQPage') return [`knoop ${JSON.stringify(knoop)}`];
        const { mainEntity = [], ...faq } = knoop;
        return [`FAQPage ${JSON.stringify(faq)}`, ...mainEntity.map((vraag) => `vraag ${JSON.stringify(vraag)}`)];
      })];
    });
    const sd = volgorde(plat(sdVoor), plat(sdNa));
    for (const s of sd.ontbreekt) fout.push(`structured data: bestaand deel ontbreekt, is gewijzigd of verplaatst: ${kort(s)}`);
    for (const s of sd.toegevoegd.filter((t) => !/^(FAQPage|vraag) /.test(t))) fout.push(`structured data: toevoeging die geen FAQ-vraag is: ${kort(s)}`);
    const vragen = sd.toegevoegd.filter((t) => t.startsWith('vraag '));
    if (vragen.length) info.push(`${vragen.length} vraag/vragen toegevoegd aan FAQPage in de structured data${toonToevoegingen ? `: ${vragen.map(kort).join(' ; ')}` : ''}`);
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

const bekend = new Set(metingen.map((m) => metNl(m.url)));
if (!gevraagd.length)
  for (const url of distPaginas().map(urlVanBestand))
    if (!bekend.has(url)) console.log(`  let op: ${url} heeft nog geen nulmeting (${naamVanUrl(url)}.json)`);

console.log(`\n${metingen.length} pagina's vergeleken met de nulmeting: ${metingen.length - gewijzigd} ongewijzigd, ${gewijzigd - fouten} met alleen toevoegingen, ${fouten} met fouten.`);
process.exitCode = fouten ? 1 : 0;
