// Controleert de RAG-blokken in de build (dist/) tegen de eisen uit de briefing en tegen de databron.
// Leest de ruwe HTML, dus zonder JavaScript: wat hier niet staat, staat niet in de respons.
// Gebruik: npm run build (draait dit script na de build) of node planning/check-rag.mjs
import fs from 'node:fs';
import path from 'node:path';
import { parseHtml, tekstVan, tekstblokken, tag, distDir, distPaginas, urlVanBestand, bestandVanUrl } from './nulmeting-lib.mjs';
import { blokken } from '../src/data/rag/index.ts';
import { services } from '../src/data/services.js';
import { prijzen } from '../src/data/prijzen.ts';
import { afzender } from '../src/lib/rag-blok.js';
import { splitsZinnen, normaliseer, celFout, schrijfregelFout, begintMetJaNeeOfGetal } from '../src/lib/rag-tekst.js';

const bedragen = (t) => t.match(/€\s?\d[\d.]*\d|€\s?\d/g)?.map((b) => b.replace(/\s/g, '')) ?? [];
const duren = (t) =>
  t.match(/(?<![\p{L}\d])(?:\d+(?:\s?-\s?\d+)?(?:,\s\d+)*(?:\sof\s\d+)?|één|een|twee|drie|vier|vijf|zes|acht)\s(?:weken|week|maanden|maand|dagen|dagdelen|dagdeel|uur)(?![\p{L}])/giu) ?? [];
// Wat de databron per dienst over prijs en doorlooptijd zegt.
const bron = Object.fromEntries(Object.entries(prijzen).map(([slug, p]) => [slug, {
  bedragen: bedragen(`${p.price} ${p.cardPrice ?? ''} ${p.priceNote}`),
  tekst: `${p.timing} | ${p.cardTiming ?? ''} | ${p.priceNote}`.toLowerCase(),
}]));

const paginas = distPaginas().map((rel) => {
  const url = urlVanBestand(rel);
  return { url, doc: parseHtml(fs.readFileSync(path.join(distDir, rel), 'utf8')) };
});
const inBlok = (el) => { for (let p = el; p; p = p.parentNode) if (p.classList?.contains('rag-blok')) return true; return false; };
// Alle koppen van de site, om dubbele vraagkoppen te vinden.
// Ook de vragen in de FAQ-accordeons (summary) tellen mee: dat zijn op deze site de bestaande vraagkoppen.
const koppenPerPagina = new Map(paginas.map(({ url, doc }) => [url, doc.querySelectorAll('h1,h2,h3,h4,h5,h6,summary').map((h) => ({ tekst: normaliseer(tekstVan(h).replace(/\s*\+$/, '')), blok: inBlok(h) }))]));

let fouten = 0;
const concepten = [];
for (const { url, doc } of paginas) {
  const blok = blokken.find((b) => b.pagina === url);
  const secties = doc.querySelectorAll('section.rag-blok');
  if (!blok && !secties.length) continue;
  const fout = [];
  if (!blok) fout.push('pagina bevat een RAG-blok dat niet in de databron staat');
  else if (secties.length !== 1) fout.push(`verwacht 1 RAG-blok in de ruwe HTML, gevonden ${secties.length}`);

  if (blok && secties.length === 1) {
    const sectie = secties[0];
    const tekst = tekstVan(sectie, ' ');
    const kinderen = sectie.childNodes.filter((n) => n.nodeType === 1);

    // Vraagkop.
    const eigenKop = sectie.querySelector('h2');
    let kop;
    if (blok.onderBestaandeKop) {
      if (eigenKop) fout.push('blok onder een bestaande kop mag geen eigen h2 hebben');
      const vorige = sectie.previousElementSibling;
      if (!vorige || tag(vorige) !== 'h2') fout.push('blok staat niet direct onder de bestaande h2');
      else kop = tekstVan(vorige);
    } else if (!eigenKop) fout.push('vraagkop (h2) ontbreekt');
    else kop = tekstVan(eigenKop);
    if (kop !== undefined) {
      if (!kop.endsWith('?')) fout.push(`vraagkop eindigt niet op een vraagteken: "${kop}"`);
      if (!kop.toLowerCase().includes(blok.onderwerp.toLowerCase())) fout.push(`vraagkop noemt "${blok.onderwerp}" niet: "${kop}"`);
    }

    // Antwoord eerst.
    const eerste = kinderen.find((k) => tag(k) !== 'h2');
    if (!eerste || tag(eerste) !== 'p') fout.push('antwoordalinea ontbreekt direct na de vraagkop');
    else {
      const n = splitsZinnen(tekstVan(eerste)).length;
      if (n > 3) fout.push(`antwoordalinea heeft ${n} zinnen (maximaal 3)`);
      if (n < 2) fout.push(`antwoordalinea heeft ${n} zin (minimaal 2)`);
      // De afzender staat voluit in de antwoordalinea (bij kennisbankblokken volstaat de bronregel).
      if (blok.type !== 'kennisbank' && !tekstVan(eerste).includes(afzender)) fout.push(`antwoordalinea noemt de afzender (${afzender}) niet`);
    }

    // Tabel.
    for (const tabel of sectie.querySelectorAll('table')) {
      const rijen = tabel.querySelectorAll('tbody tr').map((tr) => tr.childNodes.filter((n) => n.nodeType === 1));
      if (rijen.length < 2) fout.push('tabel met minder dan twee rijen');
      rijen.forEach((cellen, i) => {
        if (tag(cellen[0]) !== 'th' || cellen[0].getAttribute('scope') !== 'row') fout.push(`tabelrij ${i + 1} heeft geen th scope="row"`);
        cellen.forEach((c) => { const f = celFout(tekstVan(c)); if (f) fout.push(`tabelrij ${i + 1}: cel ${f}`); });
        if (!cellen.at(-1)?.querySelector('a')) fout.push(`tabelrij ${i + 1} eindigt niet met een gelinkte dienst of vervolgstap`);
      });
      const kolommen = tabel.querySelectorAll('thead th').map((th) => tekstVan(th));
      kolommen.forEach((naam, i) => {
        if (rijen.length > 1 && new Set(rijen.map((r) => (r[i] ? tekstVan(r[i]) : ''))).size === 1) fout.push(`kolom "${naam}" heeft in elke rij dezelfde waarde`);
      });
    }

    // Vervolgvragen.
    const vragen = sectie.querySelectorAll('h3');
    if (vragen.length < 1 || vragen.length > 3) fout.push(`${vragen.length} vervolgvragen (1 tot 3 vereist)`);
    for (const h3 of vragen) {
      const vraag = tekstVan(h3);
      const antwoord = h3.nextElementSibling;
      if (!vraag.endsWith('?')) fout.push(`vervolgvraag eindigt niet op een vraagteken: "${vraag}"`);
      if (!antwoord || tag(antwoord) !== 'p' || !begintMetJaNeeOfGetal(tekstVan(antwoord))) fout.push(`antwoord op "${vraag}" begint niet met Ja, Nee of het getal`);
      if (antwoord && tag(antwoord) === 'p') {
        const t = tekstVan(antwoord);
        // In een vervolgvraag staat de afzender niet; de volledige dienstnaam of het onderwerp wel.
        if (t.includes(afzender)) fout.push(`antwoord op "${vraag}" noemt de afzender; die hoort alleen in de antwoordalinea en de bronregel`);
        if (!services.some((s) => t.includes(s.title)) && !t.toLowerCase().includes(blok.onderwerp.toLowerCase())) fout.push(`antwoord op "${vraag}" noemt geen dienst of het onderwerp "${blok.onderwerp}" voluit`);
      }
    }

    // Links: elke genoemde dienst met eigen URL is gelinkt, en elke interne link bestaat.
    const hrefs = sectie.querySelectorAll('a').map((a) => a.getAttribute('href') ?? '');
    for (const s of services) {
      const eigenUrl = `/diensten/${s.slug}`;
      if (tekst.includes(s.title) && eigenUrl !== url && !hrefs.includes(eigenUrl)) fout.push(`dienst "${s.title}" is genoemd maar niet gelinkt naar ${eigenUrl}`);
    }
    // Maximaal één link per doel-URL: in de tabelrij als het doel daar staat, anders bij de eerste vermelding.
    const alineas = sectie.querySelectorAll('p');
    const inTabel = (el) => { for (let p = el; p; p = p.parentNode) if (tag(p) === 'table') return true; return false; };
    for (const href of new Set(hrefs)) {
      const ankers = sectie.querySelectorAll('a').filter((a) => a.getAttribute('href') === href);
      if (ankers.length > 1) { fout.push(`${ankers.length} links naar ${href} in één blok (maximaal 1)`); continue; }
      if (inTabel(ankers[0])) continue;
      const anker = tekstVan(ankers[0]);
      if (sectie.querySelectorAll('tbody tr').some((tr) => tekstVan(tr, ' ').includes(anker))) fout.push(`link naar ${href} hoort in de tabelrij, niet in een alinea`);
      const eersteVermelding = alineas.find((p) => tekstVan(p, ' ').includes(anker));
      if (eersteVermelding && !eersteVermelding.querySelectorAll('a').includes(ankers[0])) fout.push(`link naar ${href} staat niet bij de eerste vermelding in het blok`);
    }
    for (const href of new Set(hrefs)) {
      if (href === url) fout.push('link naar de pagina zelf');
      if (href.startsWith('/') && !fs.existsSync(path.join(distDir, bestandVanUrl(href.split('#')[0])))) fout.push(`link geeft geen 200: ${href}`);
      if (href.length > 1 && href.endsWith('/')) fout.push(`link met slash aan het eind: ${href}`);
    }

    // Bron en datum.
    const bronregel = sectie.querySelector('.rag-blok__bron');
    if (!bronregel || !/^Bron: \S/.test(tekstVan(bronregel))) fout.push('bronregel ontbreekt');
    else if (!tekstVan(bronregel).includes(afzender)) fout.push(`bronregel noemt de afzender (${afzender}) niet`);
    if (!/^\d{4}-\d{2}(-\d{2})?$/.test(bronregel?.querySelector('time')?.getAttribute('datetime') ?? '')) fout.push('time met datetime ontbreekt in de bronregel');

    // Zichtbaar en server-side.
    for (let p = sectie.parentNode; p; p = p.parentNode) {
      const klasse = p.getAttribute?.('class') ?? '';
      if (tag(p) === 'details' || p.getAttribute?.('hidden') !== undefined || p.getAttribute?.('aria-hidden') === 'true' || p.getAttribute?.('role') === 'tabpanel' || /accordion|tab-?panel|collapse/.test(klasse))
        fout.push(`blok staat in een verborgen of ingeklapt element (<${tag(p)} class="${klasse}">)`);
    }
    if (sectie.querySelector('details, script, [hidden]')) fout.push('blok bevat details, script of een verborgen element');
    if (!doc.querySelector('main')?.querySelector('section.rag-blok')) fout.push('blok staat niet in <main>');

    // Schrijfregels.
    const schrijf = schrijfregelFout(tekst);
    if (schrijf) fout.push(`tekst ${schrijf}`);

    // Consistentie met de databron (src/data/prijzen.ts).
    // Per alinea en per tabelrij: elk bedrag en elke doorlooptijd hoort bij een dienst die daar genoemd wordt.
    for (const deel of [...sectie.querySelectorAll('p'), ...sectie.querySelectorAll('tbody tr')]) {
      const deelTekst = tekstVan(deel, ' ');
      const genoemd = services.filter((s) => deelTekst.includes(s.title)).map((s) => s.slug);
      const slugs = genoemd.length ? genoemd : Object.keys(bron);
      const bij = genoemd.length ? ` bij ${genoemd.join(' of ')}` : '';
      for (const b of new Set(bedragen(deelTekst))) if (!slugs.some((s) => bron[s].bedragen.includes(b))) fout.push(`bedrag ${b} staat niet in de databron${bij}`);
      for (const d of new Set(duren(deelTekst).map((x) => x.toLowerCase().replace(/\s?-\s?/g, '-')))) if (!slugs.some((s) => bron[s].tekst.includes(d))) fout.push(`doorlooptijd "${d}" staat niet in de databron${bij}`);
    }

    // Dubbele tekst: geen zin uit de bestaande tekst van de pagina woordelijk in het blok.
    const zonderBlok = parseHtml(doc.querySelector('main').toString());
    zonderBlok.querySelectorAll('section.rag-blok').forEach((s) => s.remove());
    const bestaand = new Set(tekstblokken(zonderBlok).flatMap(splitsZinnen).map(normaliseer));
    const blokZinnen = kinderen.filter((k) => ['p', 'h2', 'h3'].includes(tag(k))).flatMap((k) => splitsZinnen(tekstVan(k)));
    for (const zin of blokZinnen) if (zin.split(' ').length >= 4 && bestaand.has(normaliseer(zin))) fout.push(`zin staat al woordelijk op de pagina: "${zin}"`);

    // Dubbele vraagkop: dezelfde vraag staat niet al als kop op deze of een andere pagina.
    for (const h of [...(eigenKop ? [eigenKop] : []), ...vragen]) {
      const vraag = normaliseer(tekstVan(h));
      for (const [andere, koppen] of koppenPerPagina) {
        const aantal = koppen.filter((k) => k.tekst === vraag && !(andere === url && k.blok)).length;
        if (aantal) fout.push(`vraag "${tekstVan(h)}" staat al als kop op ${andere === url ? 'deze pagina' : andere}`);
      }
    }

    if (blok.concept) concepten.push(url);
  }

  if (fout.length) fouten++;
  console.log(`${fout.length ? '✗' : '✓'} ${url}${blok?.concept ? '  (concept: teksten nog niet beoordeeld)' : ''}`);
  fout.forEach((f) => console.log(`  FOUT  ${f}`));
}

for (const blok of blokken)
  if (!paginas.some((p) => p.url === blok.pagina)) {
    console.log(`✗ ${blok.pagina}\n  FOUT  blok staat in de databron maar de pagina bestaat niet in dist/`);
    fouten++;
  }

console.log(`\n${blokken.length} RAG-blok(ken) in de databron, ${fouten} pagina('s) met fouten, ${concepten.length} concept(en) nog te beoordelen.`);
process.exitCode = fouten ? 1 : 0;
