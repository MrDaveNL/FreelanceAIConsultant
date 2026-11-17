// Waarschuwt (blokkeert niet) wanneer een CMS-wijziging (branch "cms" t.o.v. "main") een NIEUWE
// kennisbankpagina toevoegt die geen tegenhanger in de andere taal heeft (zelfde 'id'). Sinds
// CMS-fase 3 staan create/delete aan voor de kennisbank-collecties; bestaande NL-only pagina's
// (bijv. ai-specialist-salaris, notuleren-met-ai) zijn met opzet eentalig, dus deze check kijkt
// alleen naar bestanden die op "cms" zijn TOEGEVOEGD, niet naar de hele kennisbank.
//
// Gebruik: node scripts/check-cms-counterpart.mjs [main-ref] [cms-ref]
// Print altijd wat er gevonden is; exit-code blijft 0 (waarschuwing, geen blokkade).
import { execSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const KENNISBANK_RE = /^src\/content\/pages\/(en|nl)\/kennisbank\/.+\/index\.md$/;

function frontmatterField(content, key) {
  const match = content.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'));
  if (!match) return undefined;
  return match[1].trim().replace(/^["']|["']$/g, '');
}

function addedKennisbankFiles(mainRef, cmsRef) {
  const status = execSync(`git diff --name-status ${mainRef}...${cmsRef}`, { encoding: 'utf8' });
  const added = [];
  for (const line of status.split('\n')) {
    const [code, file] = line.split('\t');
    if (code === 'A' && file && KENNISBANK_RE.test(file)) {
      const [, lang] = file.match(KENNISBANK_RE);
      added.push({ file, lang });
    }
  }
  return added;
}

// Alle ids die op 'ref' bestaan in de kennisbank van 'lang' (bestaand ÉN net toegevoegd).
function kennisbankIds(ref, lang) {
  const files = execSync(`git ls-tree -r --name-only ${ref} -- src/content/pages/${lang}/kennisbank`, { encoding: 'utf8' })
    .split('\n')
    .filter((f) => f.endsWith('/index.md'));
  const ids = new Set();
  for (const file of files) {
    const content = execSync(`git show ${ref}:${file}`, { encoding: 'utf8' });
    const id = frontmatterField(content, 'id');
    if (id) ids.add(id);
  }
  return ids;
}

async function main() {
  const [mainRef = 'main', cmsRef = 'cms'] = process.argv.slice(2);
  const added = addedKennisbankFiles(mainRef, cmsRef);
  if (!added.length) {
    console.log('Geen nieuwe kennisbankpagina\'s, niets te controleren op een taal-tegenhanger.');
    return;
  }

  const idsByLang = { en: kennisbankIds(cmsRef, 'en'), nl: kennisbankIds(cmsRef, 'nl') };
  const warnings = [];
  for (const { file, lang } of added) {
    const content = execSync(`git show ${cmsRef}:${file}`, { encoding: 'utf8' });
    const id = frontmatterField(content, 'id');
    const otherLang = lang === 'en' ? 'nl' : 'en';
    if (id && !idsByLang[otherLang].has(id)) warnings.push({ file, id, lang, otherLang });
  }

  if (!warnings.length) {
    console.log(`${added.length} nieuwe kennisbankpagina('s), allemaal met een tegenhanger in de andere taal.`);
    return;
  }

  for (const w of warnings)
    console.log(`⚠ ${w.file}: nieuwe pagina met id '${w.id}' (${w.lang}) heeft geen ${w.otherLang.toUpperCase()}-tegenhanger met dat id.`);
  console.log(`\n${warnings.length} nieuwe kennisbankpagina('s) zonder taal-tegenhanger. Dit is een waarschuwing, geen blokkade: soms is dat bewust.`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) main();
