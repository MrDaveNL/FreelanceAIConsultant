// Controleert de RAG-blokken in de build (dist/) tegen de eisen uit de briefing en tegen de databron.
// Leest de ruwe HTML, dus zonder JavaScript: wat hier niet staat, staat niet in de respons.
// Gebruik: npm run build (draait dit script na de build) of node planning/check-rag.mjs
import fs from 'node:fs';
import path from 'node:path';
import { parseHtml, tekstVan, tekstblokken, tag, distDir, distPaginas, urlVanBestand, bestandVanUrl } from './nulmeting-lib.mjs';
import { blokSchema, valideer } from '../src/data/rag/schema.ts';
import { services } from '../src/data/services.js';
import { afzender } from '../src/lib/rag-blok.js';
import { bronTekst, dienstSlugs } from '../src/lib/rag-prijzen.js';
import { splitsZinnen, normaliseer, celFout, schrijfregelFout, begintMetAntwoord, begintMetBedrag, isKaalJaNee, vraagtNaarBedrag,
  normaliseerGetallen, getalUitdrukkingen, getalStaatIn } from '../src/lib/rag-tekst.js';

// RAG_BLOKKEN: JSON-bestand met blokken in plaats van de databron, voor het controleren van concepten.
const blokken = process.env.RAG_BLOKKEN
  ? valideer(blokSchema, JSON.parse(fs.readFileSync(process.env.RAG_BLOKKEN, 'utf8')), 'blok', 'pagina')
  : (await import('../src/data/rag/index.ts')).blokken;

const bedragen = (t) => t.match(/€\s?\d[\d.]*\d|€\s?\d/g)?.map((b) => b.replace(/\s/g, '')) ?? [];
const duren = (t) =>
  t.match(/(?<![\p{L}\d])(?:\d+(?:\s?-\s?\d+)?(?:,\s\d+)*(?:\sof\s\d+)?|één|een|twee|drie|vier|vijf|zes|acht)\s(?:weken|week|maanden|maand|dagen|dagdelen|dagdeel|uur)(?![\p{L}])/giu) ?? [];
// Wat de databron per dienst over prijs en doorlooptijd zegt.
const bron = Object.fromEntries(dienstSlugs.map((slug) => [slug, { bedragen: bedragen(bronTekst(slug)), tekst: bronTekst(slug).toLowerCase() }]));
const alleBronBedragen = new Set(Object.values(bron).flatMap((b) => b.bedragen));
const databron = normaliseerGetallen(dienstSlugs.map(bronTekst).join(' | '));
const dienstnamen = services.map((s) => s.title);

const paginas = distPaginas().map((rel) => {
  const url = urlVanBestand(rel);
  return { url, doc: parseHtml(fs.readFileSync(path.join(distDir, rel), 'utf8')) };
});
const inBlok = (el) => { for (let p = el; p; p = p.parentNode) if (p.classList?.contains('rag-blok')) return true; return false; };
const inTabel = (el) => { for (let p = el; p; p = p.parentNode) if (tag(p) === 'table') return true; return false; };
const elementen = (el) => el.childNodes.filter((n) => n.nodeType === 1);
// Alle koppen van de site, om dubbele vraagkoppen te vinden. Ook de vragen in de FAQ-accordeons (summary)
// tellen mee: dat zijn op deze site de bestaande vraagkoppen.
const koppenPerPagina = new Map(paginas.map(({ url, doc }) => [url, doc.querySelectorAll('h1,h2,h3,h4,h5,h6,summary').map((h) => ({ tekst: normaliseer(tekstVan(h).replace(/\s*\+$/, '')), blok: inBlok(h) }))]));

let fouten = 0;
const concepten = [];
for (const { url, doc } of paginas) {
  const blok = blokken.find((b) => b.pagina === url);
  const delen = doc.querySelectorAll('section.rag-blok');
  if (!blok && !delen.length) continue;
  const fout = [];
  const verwacht = blok?.onderBestaandeKop ? 2 : 1;
  if (!blok) fout.push('pagina bevat een RAG-blok dat niet in de databron staat');
  else if (delen.length !== verwacht) fout.push(`verwacht ${verwacht} blokdeel/blokdelen in de ruwe HTML, gevonden ${delen.length}`);

  if (blok && delen.length === verwacht) {
    const [eersteDeel] = delen;
    const laatsteDeel = delen.at(-1);
    const alle = (sel) => delen.flatMap((d) => d.querySelectorAll(sel));
    const tekst = delen.map((d) => tekstVan(d, ' ')).join(' ');
    const kinderen = delen.flatMap(elementen);
    const main = doc.querySelector('main');

    // Tekst van de pagina zonder het blok: de bestaande tekst.
    const zonderBlok = parseHtml(main.toString());
    zonderBlok.querySelectorAll('section.rag-blok').forEach((s) => s.remove());
    const bestaandeBlokken = tekstblokken(zonderBlok);
    // Met spaties tussen alle tekstdelen, zodat een woord niet aan het volgende element vastplakt.
    const paginaTekst = normaliseerGetallen(tekstVan(zonderBlok, ' '));

    // Vraagkop en plek.
    const eigenKop = alle('h2')[0];
    let kop;
    if (blok.onderBestaandeKop) {
      if (eigenKop) fout.push('blok onder een bestaande kop mag geen eigen h2 hebben');
      if (!eersteDeel.classList.contains('rag-blok--antwoord') || !laatsteDeel.classList.contains('rag-blok--vervolg')) fout.push('blok onder een bestaande kop moet gesplitst zijn in een antwoorddeel en een vervolgdeel');
      const vorige = eersteDeel.previousElementSibling;
      if (!vorige || tag(vorige) !== 'h2') fout.push('antwoordalinea staat niet direct onder de bestaande h2');
      else kop = tekstVan(vorige);
      // Beide delen horen bij dezelfde sectie: geen h2 ertussen.
      let tussen = eersteDeel.nextElementSibling;
      while (tussen && tussen !== laatsteDeel) {
        if (tag(tussen) === 'h2') { fout.push('vervolgvragen staan niet in de sectie van de bestaande kop'); break; }
        tussen = tussen.nextElementSibling;
      }
      if (!tussen) fout.push('vervolgdeel staat niet in dezelfde container als de antwoordalinea');
      if (eersteDeel.querySelector('h3')) fout.push('antwoorddeel bevat een h3; daaronder zou bestaande tekst terechtkomen');
    } else if (!eigenKop || elementen(eersteDeel)[0] !== eigenKop) fout.push('vraagkop (h2) ontbreekt aan het begin van het blok');
    else kop = tekstVan(eigenKop);
    if (kop !== undefined) {
      if (!kop.endsWith('?')) fout.push(`vraagkop eindigt niet op een vraagteken: "${kop}"`);
      if (!kop.toLowerCase().includes(blok.onderwerp.toLowerCase())) fout.push(`vraagkop noemt "${blok.onderwerp}" niet: "${kop}"`);
    }
    // Bestaande tekst mag nooit onder een h3 van het blok terechtkomen: na het deel met de vervolgvragen
    // volgt in dezelfde container niets meer, of meteen de volgende h2.
    if (laatsteDeel.querySelector('h3')) {
      const erna = laatsteDeel.nextElementSibling;
      if (erna && tag(erna) !== 'h2') fout.push(`bestaande tekst staat onder een h3 van het blok: na het blok volgt <${tag(erna)}> in plaats van een h2 of het einde van de content`);
    }

    // Antwoord eerst.
    const eerste = elementen(eersteDeel).find((k) => tag(k) !== 'h2');
    if (!eerste || tag(eerste) !== 'p' || !eerste.classList.contains('rag-blok__antwoord')) fout.push('antwoordalinea ontbreekt direct na de vraagkop');
    else {
      const n = splitsZinnen(tekstVan(eerste)).length;
      if (n > 3) fout.push(`antwoordalinea heeft ${n} zinnen (maximaal 3)`);
      if (n < 2) fout.push(`antwoordalinea heeft ${n} zin (minimaal 2)`);
      // In de antwoordalinea staat de bandbreedte, niet de opsomming per niveau.
      if (/per maand voor \p{Lu}[\p{L}+]* \(\d+ dagen per maand\)/u.test(tekstVan(eerste))) fout.push('antwoordalinea somt de prijsniveaus op; gebruik daar de bandbreedte');
      // Afzender: voluit in de antwoordalinea bij dienstachtige blokken, bij kennisbankblokken alleen in de bronregel.
      const metAfzender = tekstVan(eerste).includes(afzender);
      if (blok.type !== 'kennisbank' && !metAfzender) fout.push(`antwoordalinea noemt de afzender (${afzender}) niet`);
      if (blok.type === 'kennisbank' && metAfzender) fout.push('antwoordalinea van een kennisbankblok noemt de afzender; die hoort daar alleen in de bronregel');
    }

    // Tabel.
    for (const tabel of alle('table')) {
      const rijen = tabel.querySelectorAll('tbody tr').map(elementen);
      if (rijen.length < 2) fout.push('tabel met minder dan twee rijen');
      rijen.forEach((cellen, i) => {
        if (tag(cellen[0]) !== 'th' || cellen[0].getAttribute('scope') !== 'row') fout.push(`tabelrij ${i + 1} heeft geen th scope="row"`);
        cellen.forEach((c) => { const f = celFout(tekstVan(c)); if (f) fout.push(`tabelrij ${i + 1}: cel ${f}`); });
        if (!cellen.at(-1)?.querySelector('a')) fout.push(`tabelrij ${i + 1} eindigt niet met een gelinkte dienst of vervolgstap`);
      });
      tabel.querySelectorAll('thead th').map((th) => tekstVan(th)).forEach((naam, i) => {
        if (rijen.length > 1 && new Set(rijen.map((r) => (r[i] ? tekstVan(r[i]) : ''))).size === 1) fout.push(`kolom "${naam}" heeft in elke rij dezelfde waarde`);
      });
    }

    // Vervolgvragen.
    const vragen = alle('h3');
    // Een blok zonder vervolgvragen is toegestaan: antwoordalinea plus bronregel volstaat.
    if (vragen.length > 3 || (blok.alleenAntwoord && vragen.length)) fout.push(`${vragen.length} vervolgvragen (${blok.alleenAntwoord ? 'geen' : 'maximaal 3'} toegestaan)`);
    for (const h3 of vragen) {
      const vraag = tekstVan(h3);
      const antwoord = h3.nextElementSibling;
      if (!vraag.endsWith('?')) fout.push(`vervolgvraag eindigt niet op een vraagteken: "${vraag}"`);
      if (!antwoord || tag(antwoord) !== 'p') { fout.push(`antwoord op "${vraag}" ontbreekt`); continue; }
      const t = tekstVan(antwoord);
      // Het antwoord begint met het antwoord op de vraag; een bedrag komt daarna, tenzij de vraag naar het bedrag vraagt.
      // Stelligheid: het antwoord begint in de stelligheid van de bron. Een voorbehoud staat letterlijk in de eerste
      // zin en op de pagina zelf; een kaal Ja of Nee mag alleen als het blok de bron als onvoorwaardelijk aanmerkt.
      const bronVraag = blok.vervolgvragen.find((v) => normaliseer(v.vraag) === normaliseer(vraag));
      const eersteZin = splitsZinnen(t)[0] ?? '';
      if (isKaalJaNee(t) && !bronVraag?.onvoorwaardelijk) fout.push(`antwoord op "${vraag}" begint met een kaal Ja of Nee zonder dat de bron als onvoorwaardelijk is aangemerkt`);
      if (bronVraag?.voorbehoud) {
        if (!eersteZin.toLowerCase().includes(bronVraag.voorbehoud.toLowerCase())) fout.push(`antwoord op "${vraag}" neemt het voorbehoud "${bronVraag.voorbehoud}" niet over in de eerste zin`);
        if (!paginaTekst.includes(normaliseerGetallen(bronVraag.voorbehoud)) && !databron.includes(normaliseerGetallen(bronVraag.voorbehoud))) fout.push(`voorbehoud "${bronVraag.voorbehoud}" staat niet letterlijk op de eigen pagina of in prijzen.ts`);
      } else if (!begintMetAntwoord(t, dienstnamen, vraag)) fout.push(`antwoord op "${vraag}" begint niet met het antwoord: ja of nee bij een ja-neevraag, anders het getal of de naam`);
      if (begintMetBedrag(t) && !vraagtNaarBedrag(vraag)) fout.push(`antwoord op "${vraag}" begint met een bedrag, terwijl de vraag daar niet naar vraagt`);
      // In een vervolgvraag staat de afzender niet; de volledige dienstnaam of het onderwerp wel.
      if (t.includes(afzender)) fout.push(`antwoord op "${vraag}" noemt de afzender; die hoort alleen in de antwoordalinea en de bronregel`);
      if (!dienstnamen.some((n) => t.includes(n)) && !t.toLowerCase().includes(blok.onderwerp.toLowerCase())) fout.push(`antwoord op "${vraag}" noemt geen dienst of het onderwerp "${blok.onderwerp}" voluit`);
    }

    // Links: elke genoemde dienst met eigen URL is gelinkt, maximaal één link per doel-URL (in de tabelrij als
    // het doel daar staat, anders bij de eerste vermelding), en elke interne link bestaat.
    const ankers = alle('a');
    const hrefs = ankers.map((a) => a.getAttribute('href') ?? '');
    for (const s of services) {
      const eigenUrl = `/diensten/${s.slug}`;
      if (tekst.includes(s.title) && eigenUrl !== url && !hrefs.includes(eigenUrl)) fout.push(`dienst "${s.title}" is genoemd maar niet gelinkt naar ${eigenUrl}`);
    }
    const alineas = alle('p');
    for (const href of new Set(hrefs)) {
      const naarDoel = ankers.filter((a) => a.getAttribute('href') === href);
      if (naarDoel.length > 1) { fout.push(`${naarDoel.length} links naar ${href} in één blok (maximaal 1)`); continue; }
      const anker = tekstVan(naarDoel[0]);
      if (!inTabel(naarDoel[0])) {
        if (alle('tbody tr').some((tr) => tekstVan(tr, ' ').includes(anker))) fout.push(`link naar ${href} hoort in de tabelrij, niet in een alinea`);
        const eersteVermelding = alineas.find((p) => tekstVan(p, ' ').includes(anker));
        if (eersteVermelding && !eersteVermelding.querySelectorAll('a').includes(naarDoel[0])) fout.push(`link naar ${href} staat niet bij de eerste vermelding in het blok`);
      }
      if (href === url) fout.push('link naar de pagina zelf');
      // Een interne link is een pagina (map met index.html) of een bestand, zoals een download.
      const doel = href.split('#')[0];
      if (href.startsWith('/') && !fs.existsSync(path.join(distDir, bestandVanUrl(doel))) && !(fs.existsSync(path.join(distDir, doel)) && fs.statSync(path.join(distDir, doel)).isFile())) fout.push(`link geeft geen 200: ${href}`);
      if (href.length > 1 && href.endsWith('/')) fout.push(`link met slash aan het eind: ${href}`);
    }

    // Bron en datum.
    const bronregel = alle('.rag-blok__bron')[0];
    if (!bronregel || !/^Bron: \S/.test(tekstVan(bronregel))) fout.push('bronregel ontbreekt');
    else if (!tekstVan(bronregel).includes(afzender)) fout.push(`bronregel noemt de afzender (${afzender}) niet`);
    if (!/^\d{4}-\d{2}(-\d{2})?$/.test(bronregel?.querySelector('time')?.getAttribute('datetime') ?? '')) fout.push('time met datetime ontbreekt in de bronregel');

    // Zichtbaar en server-side.
    for (const deel of delen) {
      for (let p = deel.parentNode; p; p = p.parentNode) {
        const klasse = p.getAttribute?.('class') ?? '';
        if (tag(p) === 'details' || p.getAttribute?.('hidden') !== undefined || p.getAttribute?.('aria-hidden') === 'true' || p.getAttribute?.('role') === 'tabpanel' || /accordion|tab-?panel|collapse/.test(klasse))
          fout.push(`blok staat in een verborgen of ingeklapt element (<${tag(p)} class="${klasse}">)`);
      }
      if (deel.querySelector('details, script, [hidden]')) fout.push('blok bevat details, script of een verborgen element');
    }
    if (main.querySelectorAll('section.rag-blok').length !== delen.length) fout.push('blok staat niet in <main>');

    // Schrijfregels. Prijsniveaus staan voluit, zonder schuine strepen.
    const schrijf = schrijfregelFout(tekst);
    if (schrijf) fout.push(`tekst ${schrijf}`);
    if (/€[\d.]+\s*\/|\/\s*(?:€|maand|mnd|jaar|week|dag|uur)/i.test(tekst)) fout.push('bedrag of omvang met een schuine streep; schrijf elk niveau voluit');

    // Consistentie met de databron (src/data/prijzen.ts).
    // Een bedrag hoort bij een dienst uit dezelfde zin, anders uit dezelfde alinea of rij. Een termijn alleen bij
    // een dienst uit dezelfde zin: termijnen komen ook los van het eigen aanbod voor (een proef van vier weken,
    // een wettelijke termijn). Op een dienstpagina telt de eigen dienst altijd mee.
    const genoemdIn = (t) => services.filter((s) => t.includes(s.title)).map((s) => s.slug);
    const eigen = blok.type === 'dienst' ? [url.split('/').pop()] : [];
    for (const deel of [...alineas, ...alle('tbody tr')]) {
      const deelTekst = tekstVan(deel, ' ');
      const inDeel = genoemdIn(deelTekst);
      for (const zin of tag(deel) === 'tr' ? [deelTekst] : splitsZinnen(deelTekst)) {
        const inZin = genoemdIn(zin);
        const voorBedrag = inZin.length ? inZin : inDeel.length ? inDeel : eigen;
        const voorDuur = inZin.length ? inZin : eigen;
        for (const b of new Set(bedragen(zin))) if (voorBedrag.length && !voorBedrag.some((s) => bron[s].bedragen.includes(b))) fout.push(`bedrag ${b} staat niet in de databron bij ${voorBedrag.join(' of ')}`);
        for (const d of new Set(duren(zin).map((x) => x.toLowerCase().replace(/\s?-\s?/g, '-')))) if (voorDuur.length && !voorDuur.some((s) => bron[s].tekst.includes(d))) fout.push(`doorlooptijd "${d}" staat niet in de databron bij ${voorDuur.join(' of ')}`);
      }
    }

    // Laag A: elk bedrag, elke doorlooptijd, elk aantal en elke termijn staat letterlijk in prijzen.ts of in de
    // tekst van de eigen pagina. Geen match is een fout.
    const gemeld = new Set();
    // De bronregel telt hier niet mee: die noemt een bron bij naam, met nummer en peildatum.
    const zonderBronregel = delen.map((d) => { const k = parseHtml(d.toString()); k.querySelectorAll('.rag-blok__bron').forEach((b) => b.remove()); return tekstVan(k, ' '); }).join(' ');
    for (const u of getalUitdrukkingen(zonderBronregel)) {
      if (getalStaatIn(u, databron) || getalStaatIn(u, paginaTekst)) continue;
      const leesbaar = [u.voor, u.getal, u.na].filter(Boolean).join(' ');
      if (!gemeld.has(leesbaar)) fout.push(`getal staat niet letterlijk in prijzen.ts of op de eigen pagina: "${leesbaar}"`);
      gemeld.add(leesbaar);
    }

    // Een bedrag van een dienst staat alleen in het blok als de pagina zelf dat bedrag noemt, of als de vraagkop over kosten gaat.
    if (!vraagtNaarBedrag(kop ?? ''))
      for (const b of new Set(bedragen(tekst))) if (alleBronBedragen.has(b) && !paginaTekst.includes(b.toLowerCase())) fout.push(`bedrag ${b} staat niet op de pagina zelf en de vraagkop gaat niet over kosten`);

    // Dubbele tekst: geen zin uit de bestaande tekst van de pagina woordelijk in het blok.
    const bestaand = new Set(bestaandeBlokken.flatMap(splitsZinnen).map(normaliseer));
    const blokZinnen = kinderen.filter((k) => ['p', 'h2', 'h3'].includes(tag(k))).flatMap((k) => splitsZinnen(tekstVan(k)));
    for (const zin of blokZinnen) if (zin.split(' ').length >= 4 && bestaand.has(normaliseer(zin))) fout.push(`zin staat al woordelijk op de pagina: "${zin}"`);

    // Dubbele vraagkop: dezelfde vraag staat niet al als kop op deze of een andere pagina.
    for (const h of [...(eigenKop ? [eigenKop] : []), ...vragen]) {
      const vraag = normaliseer(tekstVan(h));
      for (const [andere, koppen] of koppenPerPagina)
        if (koppen.some((k) => k.tekst === vraag && !(andere === url && k.blok))) fout.push(`vraag "${tekstVan(h)}" staat al als kop op ${andere === url ? 'deze pagina' : andere}`);
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
