// Waarschuwt (blokkeert niet) wanneer een CMS-wijziging (branch "cms" t.o.v. "main"):
// 1. een NIEUWE kennisbankpagina toevoegt die geen tegenhanger in de andere taal heeft (zelfde
//    'id'). Sinds CMS-fase 3 staan create/delete aan voor de kennisbank-collecties; bestaande
//    NL-only pagina's (bijv. ai-specialist-salaris, notuleren-met-ai) zijn met opzet eentalig,
//    dus dit kijkt alleen naar bestanden die op "cms" zijn TOEGEVOEGD, niet naar de hele
//    kennisbank.
// 2. een TOEGEVOEGDE of GEWIJZIGDE kennisbankpagina een 'cluster' of 'parent' heeft die niet
//    overeenkomt met haar tegenhanger (zelfde 'id') in de andere taal, als die tegenhanger
//    bestaat. Dit duidt meestal op een vergissing (bijv. de NL-pagina onder cluster 3, de
//    EN-pagina per ongeluk onder cluster 5).
//
// Gebruik: node scripts/check-cms-counterpart.mjs [main-ref] [cms-ref]
// Print altijd wat er gevonden is; exit-code blijft 0 (waarschuwing, geen blokkade).
import { execSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { frontmatterField } from './kennisbank-routes.mjs';

const KENNISBANK_RE = /^src\/content\/pages\/(en|nl)\/kennisbank\/.+\/index\.md$/;

// code: 'A' (toegevoegd) of 'A'+'M' (toegevoegd of gewijzigd), afhankelijk van de check.
function changedKennisbankFiles(mainRef, cmsRef, codes) {
  const status = execSync(`git diff --name-status ${mainRef}...${cmsRef}`, { encoding: 'utf8' });
  const changed = [];
  for (const line of status.split('\n')) {
    const [code, file] = line.split('\t');
    if (file && codes.includes(code) && KENNISBANK_RE.test(file)) {
      const [, lang] = file.match(KENNISBANK_RE);
      changed.push({ file, lang, code });
    }
  }
  return changed;
}

// { id => { cluster, parent, file } } voor elke kennisbankpagina die op 'ref' bestaat in de
// kennisbank van 'lang' (bestaand ÉN net toegevoegd/gewijzigd).
function kennisbankFrontmatterByLang(ref, lang) {
  const files = execSync(`git ls-tree -r --name-only ${ref} -- src/content/pages/${lang}/kennisbank`, { encoding: 'utf8' })
    .split('\n')
    .filter((f) => f.endsWith('/index.md'));
  const byId = new Map();
  for (const file of files) {
    const content = execSync(`git show ${ref}:${file}`, { encoding: 'utf8' });
    const id = frontmatterField(content, 'id');
    if (id) byId.set(id, { cluster: frontmatterField(content, 'cluster'), parent: frontmatterField(content, 'parent'), file });
  }
  return byId;
}

// Vergelijkt cluster en parent van een pagina met haar tegenhanger; geeft een lijst afwijkende
// veldnamen (leeg als alles overeenkomt).
export function mismatchedFields(page, counterpart) {
  const fields = [];
  if (page.cluster !== counterpart.cluster) fields.push('cluster');
  if ((page.parent || '') !== (counterpart.parent || '')) fields.push('parent');
  return fields;
}

async function main() {
  const [mainRef = 'main', cmsRef = 'cms'] = process.argv.slice(2);
  const added = changedKennisbankFiles(mainRef, cmsRef, ['A']);
  const changed = changedKennisbankFiles(mainRef, cmsRef, ['A', 'M']);

  if (!changed.length) {
    console.log('Geen nieuwe of gewijzigde kennisbankpagina\'s, niets te controleren op een taal-tegenhanger.');
    return;
  }

  const byLang = { en: kennisbankFrontmatterByLang(cmsRef, 'en'), nl: kennisbankFrontmatterByLang(cmsRef, 'nl') };

  const noCounterpart = [];
  for (const { file, lang } of added) {
    const id = frontmatterField(execSync(`git show ${cmsRef}:${file}`, { encoding: 'utf8' }), 'id');
    const otherLang = lang === 'en' ? 'nl' : 'en';
    if (id && !byLang[otherLang].has(id)) noCounterpart.push({ file, id, lang, otherLang });
  }

  const mismatches = [];
  for (const { file, lang } of changed) {
    const id = frontmatterField(execSync(`git show ${cmsRef}:${file}`, { encoding: 'utf8' }), 'id');
    if (!id) continue;
    const otherLang = lang === 'en' ? 'nl' : 'en';
    const page = byLang[lang].get(id);
    const counterpart = byLang[otherLang].get(id);
    if (!page || !counterpart) continue; // geen tegenhanger: al gemeld (of bewust eentalig), niets te vergelijken.
    const fields = mismatchedFields(page, counterpart);
    if (fields.length) mismatches.push({ file, counterpartFile: counterpart.file, id, lang, otherLang, fields });
  }

  if (!noCounterpart.length && !mismatches.length) {
    console.log(`${changed.length} nieuwe/gewijzigde kennisbankpagina('s): geen ontbrekende tegenhangers, geen cluster/parent-afwijkingen.`);
    return;
  }

  for (const w of noCounterpart)
    console.log(`⚠ ${w.file}: nieuwe pagina met id '${w.id}' (${w.lang}) heeft geen ${w.otherLang.toUpperCase()}-tegenhanger met dat id.`);
  for (const m of mismatches)
    console.log(
      `⚠ ${m.file}: id '${m.id}' (${m.lang}) heeft ${m.fields.join(' en ')} die niet overeenkomt/-en met de ${m.otherLang.toUpperCase()}-tegenhanger (${m.counterpartFile}).`
    );
  console.log(
    `\n${noCounterpart.length} pagina('s) zonder taal-tegenhanger, ${mismatches.length} cluster/parent-afwijking(en). Dit is een waarschuwing, geen blokkade: soms is dat bewust.`
  );
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) main();
