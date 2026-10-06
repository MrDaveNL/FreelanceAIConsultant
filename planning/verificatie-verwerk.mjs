// Verwerkt de uitkomsten van de inhoudelijke verificatie (laag B en C).
//   node planning/verificatie-verwerk.mjs b <map>            controleert de oordelen van laag B en maakt de steekproef voor laag C
//   node planning/verificatie-verwerk.mjs eind <map> <concepten.json> <rapport.md>
//                                                            verwerkt B en C: schrapt of legt voor, zet de status en schrijft het rapport
// Alleen "bevestigd" telt. Een zin die niet bevestigd is wordt niet herschreven: hij wordt geschrapt of voorgelegd.
import fs from 'node:fs';
import path from 'node:path';
import { root } from './nulmeting-lib.mjs';
import { splitsZinnen } from '../src/lib/rag-tekst.js';

const [stap, map, conceptenPad, rapportPad] = process.argv.slice(2);
const lees = (f) => JSON.parse(fs.readFileSync(f, 'utf8'));
const bestaat = (f) => fs.existsSync(path.join(map, f));
const plat = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();
const batches = fs.readdirSync(map).filter((f) => /^batch-\d+\.json$/.test(f)).map((f) => Number(f.match(/\d+/)[0])).sort((a, b) => a - b);
// De laatste ronde van een laag telt: b-3-r2.json gaat voor b-3.json.
const laatste = (laag, n) => [`${laag}-${n}-r2.json`, `${laag}-${n}.json`].find(bestaat);

const bronCache = new Map();
const bronRegels = (bestand) => {
  if (!bronCache.has(bestand)) {
    const pad = bestand.startsWith('prijzen-waarden') ? path.join(map, 'prijzen-waarden.txt') : path.join(root, bestand);
    bronCache.set(bestand, fs.existsSync(pad) ? fs.readFileSync(pad, 'utf8').split(/\r?\n/) : null);
  }
  return bronCache.get(bestand);
};
// Staat het fragment letterlijk in het genoemde bestand, en op of rond de genoemde regel?
const controleerFragment = (bestand, regel, fragment, toegestaan) => {
  const naam = plat(bestand).replace(/\\/g, '/').replace(/ \(.*$/, '');
  if (!toegestaan.some((t) => t.startsWith(naam))) return 'bestand hoort niet bij de bronnen van dit blok';
  const regels = bronRegels(naam);
  if (!regels) return 'bronbestand bestaat niet';
  const f = plat(fragment);
  if (f.length < 8) return 'bronfragment ontbreekt of is te kort';
  if (!plat(regels.join(' ')).includes(f)) return 'bronfragment staat niet letterlijk in het bestand';
  const kop = f.slice(0, Math.min(40, f.length));
  const rond = plat(regels.slice(Math.max(0, regel - 6), regel + 5).join(' '));
  return rond.includes(kop) ? null : 'bronfragment staat in het bestand, maar niet bij het genoemde regelnummer';
};

// Uitkomst van laag B per batch, met de fragmentcontrole erbij.
const laagB = (n) => {
  const invoer = lees(path.join(map, `batch-${n}.json`));
  const uit = lees(path.join(map, laatste('b', n)));
  return invoer.map((blok) => {
    const b = uit.find((x) => x.pagina === blok.pagina);
    const zinnen = blok.zinnen.map((z) => {
      const o = b?.zinnen?.find((x) => x.id === z.id);
      if (!o) return { ...z, oordeel: 'niet gevonden', reden: 'laag B gaf geen oordeel voor deze zin' };
      let oordeel = ['bevestigd', 'niet gevonden', 'tegenstrijdig'].includes(o.oordeel) ? o.oordeel : 'niet gevonden';
      let reden = oordeel === 'bevestigd' ? null : plat(o.toelichting) || 'geen toelichting';
      let regelAfwijking = null;
      if (oordeel === 'bevestigd') {
        const f = controleerFragment(o.bestand, Number(o.regel) || 0, o.fragment, blok.bronbestanden);
        if (f && /regelnummer/.test(f)) regelAfwijking = f;
        else if (f) { oordeel = 'niet gevonden'; reden = `${f} (laag B noemde ${plat(o.bestand)}:${o.regel})`; }
      }
      return { ...z, claim: plat(o.claim), bestand: plat(o.bestand), regel: o.regel, fragment: plat(o.fragment), oordeel, reden, regelAfwijking };
    });
    // Geen bevinding: een bevestiging dat iets klopt, de datum in de bronregel (eigen metadata van het blok),
    // de naam van de afzender (komt uit src/data/site.js en is goedgekeurd) en de notatie van links in de invoer.
    const ruis = /Bijgewerkt|Willemstein|woord direct vóór|woord ervoor|\[link naar|: past|passen en staan|exact gespeld|lidwoord correct|: correct\b|correct\.|Geen links|geen fout|Geen inhoudelijke afwijking|geen veronderstelling buiten|staat letterlijk in de bron|Geen onjuiste veronderstelling/i;
    const extra = (b?.extra ?? []).filter((e) => !ruis.test(String(e.bevinding ?? '')));
    return { pagina: blok.pagina, geplaatst: blok.geplaatst, bronbestanden: blok.bronbestanden, zinnen, extra };
  });
};

if (stap === 'b') {
  for (const n of batches) {
    if (!laatste('b', n)) { console.log(`batch ${n}: nog geen uitkomst van laag B`); continue; }
    const blokken = laagB(n);
    const alle = blokken.flatMap((b) => b.zinnen.map((z) => ({ pagina: b.pagina, bronbestanden: b.bronbestanden, ...z })));
    const bevestigd = alle.filter((z) => z.oordeel === 'bevestigd');
    // Steekproef voor laag C: alle bevestigde zinnen met een getal, plus elke derde van de rest (minimaal 20 procent).
    const zonder = bevestigd.filter((z) => !z.heeftGetal);
    const steekproef = [...bevestigd.filter((z) => z.heeftGetal), ...zonder.filter((_, i) => i % 3 === 0)];
    fs.writeFileSync(path.join(map, `c-invoer-${n}.json`), JSON.stringify(steekproef.map(({ pagina, id, zin, claim, bestand, regel, fragment, bronbestanden }) => ({ pagina, id, zin, claim, bestand, regel, fragment, bronbestanden })), null, 1));
    const telling = (o) => alle.filter((z) => z.oordeel === o).length;
    console.log(`batch ${n}: ${alle.length} zinnen | bevestigd ${telling('bevestigd')} | niet gevonden ${telling('niet gevonden')} | tegenstrijdig ${telling('tegenstrijdig')} | fragment afgekeurd ${alle.filter((z) => /bronfragment|bestand/.test(z.reden ?? '')).length} | steekproef C ${steekproef.length} (${Math.round((100 * (steekproef.length - bevestigd.length + zonder.length)) / Math.max(1, zonder.length))}% van de zinnen zonder getal) | extra ${blokken.reduce((s, b) => s + b.extra.length, 0)}`);
  }
}

if (stap === 'c') {
  // Telt per batch de afwijkende oordelen van laag C.
  for (const n of batches) {
    if (!laatste('c', n)) { console.log(`batch ${n}: nog geen uitkomst van laag C`); continue; }
    const c = lees(path.join(map, laatste('c', n)));
    const af = c.filter((x) => x.oordeel !== 'akkoord');
    console.log(`batch ${n}: ${c.length} nagetrokken, ${af.length} afwijkend${af.length > 1 ? '  => hele batch opnieuw door laag B' : ''}`);
    af.forEach((x) => console.log(`   ${x.pagina} ${x.id}: ${plat(x.toelichting).slice(0, 160)}`));
  }
}

if (stap === 'eind') {
  const concepten = lees(conceptenPad);
  const rijen = [];
  const voorgelegd = [];
  const geschrapt = [];
  const extraLijst = [];
  const laagC = [];
  for (const n of batches) {
    const c = laatste('c', n) ? lees(path.join(map, laatste('c', n))) : [];
    const af = c.filter((x) => x.oordeel !== 'akkoord');
    laagC.push({ n, nagetrokken: c.length, afwijkend: af.length, rondeB: /-r2/.test(laatste('b', n)) ? 2 : 1 });
    for (const blok of laagB(n)) {
      const concept = concepten.find((x) => x.pagina === blok.pagina);
      // Laag C: een afwijkend oordeel maakt de zin alsnog niet bevestigd.
      for (const z of blok.zinnen) {
        const a = af.find((x) => x.pagina === blok.pagina && x.id === z.id);
        if (a && z.oordeel === 'bevestigd') { z.oordeel = 'niet gevonden'; z.reden = `tweede lezing (laag C) wijkt af: ${plat(a.toelichting)}`; }
      }
      const mis = blok.zinnen.filter((z) => z.oordeel !== 'bevestigd');
      let nGeschrapt = 0;
      let nVoorgelegd = 0;
      // Eerder al geschrapt bij laag A (zelf getelde aantallen).
      for (const g of concept?.geschrapt ?? []) geschrapt.push({ pagina: blok.pagina, zin: g.zin, reden: `laag A: ${g.reden}` });
      const legVoor = (z, extra = '') => { nVoorgelegd++; voorgelegd.push({ pagina: blok.pagina, id: z.id, soort: z.soort, zin: z.zin, oordeel: z.oordeel, reden: `${z.reden}${extra}` }); };
      const weg = new Map();
      const vervallen = new Set(); // vervolgvragen die helemaal geschrapt zijn (index vanaf 0)
      for (const z of mis) {
        const v = z.id.match(/^V(\d+)\.(\d+)$/);
        // Een geplaatst blok wijzigt niet zonder akkoord; antwoordalinea en tabelrij worden altijd voorgelegd.
        if (!v || blok.geplaatst || !concept) { legVoor(z, blok.geplaatst ? ' (blok is al geplaatst en is niet gewijzigd)' : ''); continue; }
        const vi = Number(v[1]) - 1;
        if (!weg.has(vi)) weg.set(vi, new Set());
        weg.get(vi).add(Number(v[2]) - 1);
      }
      if (concept && weg.size) {
        const over = [];
        concept.vervolgvragen.forEach((vv, i) => {
          const zinnen = splitsZinnen(vv.antwoord);
          const schrap = weg.get(i);
          if (!schrap) return over.push(vv);
          const ids = (j) => blok.zinnen.find((z) => z.id === `V${i + 1}.${j + 1}`);
          if (schrap.has(0)) {
            // De eerste zin draagt het antwoord: dan vervalt de hele vervolgvraag.
            zinnen.forEach((_, j) => { const z = ids(j); nGeschrapt++; geschrapt.push({ pagina: blok.pagina, zin: z?.zin ?? zinnen[j], reden: schrap.has(j) ? `${z?.oordeel}: ${z?.reden}` : `vervalt mee met de vervolgvraag "${vv.vraag}"` }); });
            vervallen.add(i);
            return;
          }
          const rest = zinnen.filter((_, j) => !schrap.has(j)).join(' ');
          // Zonder de geschrapte zin moet het antwoord nog zelfstandig staan, met de dienst of het onderwerp voluit.
          if (!/\{\{(dienst|title):/.test(rest) && !rest.toLowerCase().includes(concept.onderwerp.toLowerCase())) {
            zinnen.forEach((_, j) => { const z = ids(j); nGeschrapt++; geschrapt.push({ pagina: blok.pagina, zin: z?.zin ?? zinnen[j], reden: schrap.has(j) ? `${z?.oordeel}: ${z?.reden}` : `vervalt mee met de vervolgvraag "${vv.vraag}": zonder de geschrapte zin noemt het antwoord de dienst of het onderwerp niet meer` }); });
            vervallen.add(i);
            return;
          }
          [...schrap].forEach((j) => { const z = ids(j); nGeschrapt++; geschrapt.push({ pagina: blok.pagina, zin: z?.zin ?? zinnen[j], reden: `${z?.oordeel}: ${z?.reden}` }); });
          over.push({ ...vv, antwoord: rest });
        });
        if (over.length < 1 && !concept.alleenAntwoord) {
          // Zonder vervolgvraag is het blok niet meer geldig: dan niets schrappen maar voorleggen.
          nGeschrapt = 0;
          geschrapt.splice(0, geschrapt.length, ...geschrapt.filter((g) => g.pagina !== blok.pagina || g.reden.startsWith('laag A')));
          mis.filter((z) => /^V/.test(z.id)).forEach((z) => legVoor(z, ' (schrappen zou het blok zonder vervolgvraag laten)'));
          vervallen.clear();
        } else concept.vervolgvragen = over;
      }
      // Een bevinding over een vervolgvraag die geschrapt is, is daarmee vervallen.
      blok.extra = blok.extra.filter((e) => {
        const w = String(e.waar ?? '');
        const i = w.match(/vervolgvragen\[(\d+)\]/) ? Number(w.match(/vervolgvragen\[(\d+)\]/)[1]) : w.match(/V(\d+)\./) ? Number(w.match(/V(\d+)\./)[1]) - 1 : null;
        return i === null || !vervallen.has(i);
      });
      for (const e of blok.extra) extraLijst.push({ pagina: blok.pagina, ...e });
      const geverifieerd = nVoorgelegd === 0 && blok.extra.length === 0;
      if (concept) {
        concept.status = geverifieerd ? 'geverifieerd' : 'concept';
        concept.verificatie = { datum: new Date().toISOString().slice(0, 10), zinnen: blok.zinnen.length, bevestigd: blok.zinnen.length - mis.length, geschrapt: nGeschrapt, voorgelegd: nVoorgelegd, bevindingen: blok.extra.length };
      }
      rijen.push({ pagina: blok.pagina, geplaatst: blok.geplaatst, zinnen: blok.zinnen.length, bevestigd: blok.zinnen.length - mis.length, geschrapt: nGeschrapt, voorgelegd: nVoorgelegd, extra: blok.extra.length, status: geverifieerd ? 'geverifieerd' : 'concept', regels: blok.zinnen.filter((z) => z.regelAfwijking).length });
    }
  }
  fs.writeFileSync(conceptenPad, `${JSON.stringify(concepten, null, 2)}\n`);
  fs.writeFileSync(path.join(map, 'eind.json'), JSON.stringify({ rijen, voorgelegd, geschrapt, extraLijst, laagC }, null, 1));
  const som = (k) => rijen.reduce((s, r) => s + r[k], 0);
  console.log(`${rijen.length} blokken | zinnen ${som('zinnen')} | bevestigd ${som('bevestigd')} | geschrapt ${som('geschrapt')} | voorgelegd ${som('voorgelegd')} | geverifieerd ${rijen.filter((r) => r.status === 'geverifieerd').length} | concept ${rijen.filter((r) => r.status !== 'geverifieerd').length} | bevindingen ${extraLijst.length}`);
  if (rapportPad) {
    const cel = (s) => plat(s).replace(/\|/g, '\\|');
    const r = [fs.readFileSync(path.join(root, 'planning', 'rag-verificatie-kop.md'), 'utf8').trimEnd(), ''];
    r.push('## Totaal', '', '| Blokken | Zinnen | Bevestigd | Geschrapt | Voorgelegd | Geverifieerd | Nog concept |', '|---|---|---|---|---|---|---|');
    r.push(`| ${rijen.length} | ${som('zinnen')} | ${som('bevestigd')} | ${som('geschrapt')} | ${som('voorgelegd')} | ${rijen.filter((x) => x.status === 'geverifieerd').length} | ${rijen.filter((x) => x.status !== 'geverifieerd').length} |`, '');
    r.push('## Laag C per batch', '', '| Batch | Ronde laag B | Nagetrokken | Afwijkend |', '|---|---|---|---|');
    laagC.forEach((c) => r.push(`| ${c.n} | ${c.rondeB} | ${c.nagetrokken} | ${c.afwijkend} |`));
    r.push('', '## Per blok', '', '| Pagina | Zinnen | Bevestigd | Geschrapt | Voorgelegd | Bevindingen | Status |', '|---|---|---|---|---|---|---|');
    rijen.sort((a, b) => a.pagina.localeCompare(b.pagina)).forEach((x) => r.push(`| \`${x.pagina}\`${x.geplaatst ? ' (geplaatst)' : ''} | ${x.zinnen} | ${x.bevestigd} | ${x.geschrapt} | ${x.voorgelegd} | ${x.extra} | ${x.status} |`));
    r.push('', `## Voorgelegde zinnen (${voorgelegd.length})`, '', voorgelegd.length ? 'Deze zinnen zijn niet bevestigd en staan nog in het blok. Het blok blijft "concept" tot jij per zin beslist: schrappen, of de bron aanwijzen.' : 'Geen.', '');
    voorgelegd.forEach((v) => r.push(`- \`${v.pagina}\` · ${v.id} (${v.soort}) · **${v.oordeel}**`, `  - Zin: ${cel(v.zin)}`, `  - Reden: ${cel(v.reden)}`));
    r.push('', `## Geschrapte zinnen (${geschrapt.length})`, '', geschrapt.length ? 'Deze zinnen zijn uit het concept gehaald en staan niet meer in `docs/rag-concepten.json`.' : 'Geen.', '');
    geschrapt.forEach((g) => r.push(`- \`${g.pagina}\`: ${cel(g.zin)}`, `  - Reden: ${cel(g.reden)}`));
    r.push('', `## Overige bevindingen: links, dienstnamen, lidwoorden en vragen (${extraLijst.length})`, '', extraLijst.length ? 'Een blok met een bevinding blijft "concept".' : 'Geen.', '');
    extraLijst.forEach((e) => r.push(`- \`${e.pagina}\` · ${e.soort} · ${cel(e.waar)}: ${cel(e.bevinding)}`));
    fs.writeFileSync(rapportPad, `${r.join('\n').trimEnd()}\n`);
  }
}
