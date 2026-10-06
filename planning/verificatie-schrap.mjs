// Schrapt zinnen uit de concepten op aanwijzing (nooit herschrijven) en maakt de lijsten voor de vervolgcontroles.
//   node planning/verificatie-schrap.mjs <eind.json van de laatste verificatie> <concepten.json> <uitvoermap>
// Geschrapt worden: de voorgelegde zinnen, elke zin met een prijs van een tool van derden, en salarissen en
// marktcijfers op een pagina die daar niet zelf over gaat. Een zin in de antwoordalinea vervalt alleen als de
// alinea daarna nog 2 zinnen heeft en (bij dienstachtige blokken) de afzender nog noemt; anders blijft hij staan
// en wordt hij gemeld.
import fs from 'node:fs';
import path from 'node:path';
import { splitsZinnen } from '../src/lib/rag-tekst.js';

const [eindPad, conceptenPad, uit] = process.argv.slice(2);
const eind = JSON.parse(fs.readFileSync(eindPad, 'utf8'));
const concepten = JSON.parse(fs.readFileSync(conceptenPad, 'utf8'));
fs.mkdirSync(uit, { recursive: true });

const EIGEN_PAGINA = { salaris: ['/kennisbank/ai-specialist-salaris'], marktcijfer: ['/kennisbank/ai-specialist-salaris'] };
const heeftPrijs = (zin) => /[€$]\s?\d|\d\s?(euro|dollar)|per gebruiker per maand|zonder extra kosten|kosteloos|gratis|\bprijs|\bprijzen|\btarief|licentiekosten/i.test(zin);

const opdrachten = [];
for (const v of eind.voorgelegd) opdrachten.push({ pagina: v.pagina, id: v.id, zin: v.zin, reden: `voorgelegd en op aanwijzing geschrapt (${v.reden})` });
for (const e of eind.externLijst) {
  if (e.soort === 'toolprijs' && heeftPrijs(e.zin)) opdrachten.push({ pagina: e.pagina, id: e.id, zin: e.zin, reden: 'prijs van een tool van derden' });
  else if (EIGEN_PAGINA[e.soort] && !EIGEN_PAGINA[e.soort].includes(e.pagina)) opdrachten.push({ pagina: e.pagina, id: e.id, zin: e.zin, reden: `${e.soort} op een pagina die daar niet zelf over gaat` });
}

const geschrapt = [];
const nietGeschrapt = [];
const geplaatst = new Set(eind.rijen.filter((r) => r.geplaatst).map((r) => r.pagina));
for (const blok of concepten) {
  const mijn = opdrachten.filter((o) => o.pagina === blok.pagina && !geplaatst.has(o.pagina));
  if (!mijn.length) continue;
  const meld = (o, extra = '') => { geschrapt.push({ pagina: blok.pagina, zin: o.zin, reden: o.reden + extra }); (blok.geschrapt ??= []).push({ laag: 'aanwijzing', zin: o.zin, reden: o.reden + extra }); };
  // Antwoordalinea.
  const a = mijn.filter((o) => /^A\d+$/.test(o.id));
  if (a.length) {
    const zinnen = splitsZinnen(blok.antwoord);
    const weg = new Set(a.map((o) => Number(o.id.slice(1)) - 1));
    const rest = zinnen.filter((_, i) => !weg.has(i)).join(' ');
    const afzenderNodig = blok.type !== 'kennisbank';
    if (splitsZinnen(rest).length < 2 || (afzenderNodig && !rest.includes('{{afzender}}')))
      a.forEach((o) => nietGeschrapt.push({ ...o, waarom: splitsZinnen(rest).length < 2 ? 'de antwoordalinea zou minder dan 2 zinnen overhouden' : 'de antwoordalinea zou de afzender niet meer noemen' }));
    else { blok.antwoord = rest; a.forEach((o) => meld(o)); }
  }
  // Tabelrijen.
  const t = mijn.filter((o) => /^T\d+$/.test(o.id));
  if (t.length && blok.tabel) {
    const weg = new Set(t.map((o) => Number(o.id.slice(1)) - 1));
    blok.tabel.rijen = blok.tabel.rijen.filter((_, i) => !weg.has(i));
    if (blok.tabel.rijen.length < 2) delete blok.tabel;
    t.forEach((o) => meld(o));
  }
  // Vervolgvragen: de eerste zin draagt het antwoord, dus dan vervalt de hele vraag.
  const v = mijn.filter((o) => /^V\d+\.\d+$/.test(o.id));
  if (v.length) {
    const over = [];
    blok.vervolgvragen.forEach((vv, i) => {
      const hier = v.filter((o) => Number(o.id.match(/^V(\d+)/)[1]) - 1 === i);
      if (!hier.length) return over.push(vv);
      const zinnen = splitsZinnen(vv.antwoord);
      const weg = new Set(hier.map((o) => Number(o.id.split('.')[1]) - 1));
      const rest = zinnen.filter((_, j) => !weg.has(j)).join(' ');
      const zelfstandig = /\{\{(dienst|title):/.test(rest) || rest.toLowerCase().includes(blok.onderwerp.toLowerCase());
      if (weg.has(0) || !rest || !zelfstandig) {
        hier.forEach((o) => meld(o, ` De hele vervolgvraag "${vv.vraag}" vervalt.`));
        return;
      }
      hier.forEach((o) => meld(o));
      over.push({ ...vv, antwoord: rest });
    });
    blok.vervolgvragen = over;
  }
}
fs.writeFileSync(conceptenPad, `${JSON.stringify(concepten, null, 2)}\n`);

// Wat er aan externe feiten overblijft, per soort.
const weg = new Set(geschrapt.map((g) => `${g.pagina}|${g.zin}`));
const over = eind.externLijst.filter((e) => !weg.has(`${e.pagina}|${e.zin}`));
const primair = over.filter((e) => e.soort === 'wetgeving' || e.soort === 'salaris' || e.soort === 'marktcijfer');
const rest = over.filter((e) => !primair.includes(e));
fs.writeFileSync(path.join(uit, 'geschrapt.json'), JSON.stringify({ geschrapt, nietGeschrapt }, null, 1));
fs.writeFileSync(path.join(uit, 'extern-primair.json'), JSON.stringify(primair, null, 1));
fs.writeFileSync(path.join(uit, 'extern-rest.json'), JSON.stringify(rest, null, 1));
console.log(`${geschrapt.length} zinnen geschrapt, ${nietGeschrapt.length} niet geschrapt (blijven voorgelegd), tegen primaire bron te controleren: ${primair.length} zinnen op ${new Set(primair.map((e) => e.pagina)).size} pagina's, overige externe feiten: ${rest.length}`);
nietGeschrapt.forEach((o) => console.log(`  NIET GESCHRAPT ${o.pagina} ${o.id}: ${o.waarom}`));
