// Controleert een CMS-wijziging (branch "cms" t.o.v. "main") voordat die wordt gemerget.
//
// Twee soorten controles:
// 1. Toegevoegde regels (alleen "+"-regels uit de diff, niet de hele pagina) op TEST, TODO,
//    FIXME, lorem, xxx en op em dashes (—). TODO/FIXME zijn hoofdlettergevoelig. \b aan beide
//    kanten voorkomt dat gewone tekst als "testen" of "contest" blokkeert. TEST blokkeert alleen
//    hoofdletters ("TEST") of een regel waarvan de hele (eventueel gequote) waarde "test" is,
//    hoofdletterongevoelig (isWholeFieldValueTest hieronder) — een los woord "test" in lopende
//    tekst ("including a test period") is bewust GEEN treffer, dat is legitieme contenttekst.
// 2. De {{price:...}}, {{pricelc:...}}, {{timing:...}} en {{title:...}}-tokens: voor elk
//    bestand dat in de diff voorkomt, mag geen token verdwijnen of veranderen ten opzichte van
//    de main-versie. Dit vangt een CMS-save die per ongeluk een token overtypt of weggooit.
//
// Gebruik: node scripts/check-cms-content.mjs [main-ref] [cms-ref]
// Exit 0 = geen treffers, exit 1 = treffer(s) gevonden (zie console-output).
import { execSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const FORBIDDEN = [
  { name: 'TEST', test: (text) => /\bTEST\b/.test(text) || isWholeFieldValueTest(text) },
  // Negatieve lookbehind sluit "LINK-TODO" uit: dat is een bewuste, zichtbare placeholder uit de
  // publicatiedag-routine (planning/werkafspraak-publicatiedagen.md), geen vergeten TODO. Deze
  // check draait sowieso alleen op de cms-branch, waar inzichten-artikelen (en dus LINK-TODO's)
  // niet via Sveltia worden bewerkt (zie docs/cms.md) — dit is een extra vangrail, geen noodzaak.
  { name: 'TODO', re: /(?<!LINK-)\bTODO\b/ },
  { name: 'FIXME', re: /\bFIXME\b/ },
  { name: 'lorem', re: /\blorem\b/i },
  { name: 'xxx', re: /\bxxx\b/i },
  { name: 'em dash (—)', re: /—/ },
];

const TOKEN_RE = /\{\{(price|pricelc|timing|title):[a-z0-9-]+\}\}/g;

// diffText: ruwe output van `git diff`. Geeft [{ file, line, text }] voor elke toegevoegde regel.
export function addedLines(diffText) {
  const out = [];
  let file = null;
  for (const raw of diffText.split('\n')) {
    if (raw.startsWith('+++ b/')) {
      file = raw.slice(6);
      continue;
    }
    if (raw.startsWith('+++ /dev/null')) {
      file = null;
      continue;
    }
    if (!file) continue;
    if (raw.startsWith('+') && !raw.startsWith('+++')) out.push({ file, text: raw.slice(1) });
  }
  return out;
}

// Geeft true voor een "key: waarde"- of lijst-item-regel ("- waarde") waarvan de volledige,
// eventueel aanhalingsteken-omsloten waarde letterlijk "test" is (hoofdletterongevoelig).
// Herkent dus "title: test", "q: 'Test'" of "- TEST", maar niet een zin die toevallig op het
// losse woord "test" eindigt (de waarde is dan de hele zin, niet "test").
export function isWholeFieldValueTest(text) {
  const m = text.match(/^\s*(?:[\w.-]+:\s*|-\s*)(.*)$/);
  if (!m) return false;
  let value = m[1].trim();
  if (value.length >= 2 && ((value[0] === '"' && value.endsWith('"')) || (value[0] === "'" && value.endsWith("'")))) {
    value = value.slice(1, -1).trim();
  }
  return /^test$/i.test(value);
}

// Geeft [{ file, text, hit }] voor elke toegevoegde regel die een verboden patroon bevat.
export function findForbidden(lines) {
  const hits = [];
  for (const line of lines) {
    for (const { name, re, test } of FORBIDDEN) {
      const matched = test ? test(line.text) : re.test(line.text);
      if (matched) hits.push({ ...line, hit: name });
    }
  }
  return hits;
}

// Multiset van tokens in een bestandsinhoud, bijv. { '{{timing:ai-readiness-assessment}}': 2 }.
function tokenCounts(content) {
  const counts = {};
  for (const [token] of content.matchAll(TOKEN_RE)) counts[token] = (counts[token] ?? 0) + 1;
  return counts;
}

// Tijdelijke uitzondering (docs/cms.md): inzichten-artikelen staan technisch al als CMS-collectie
// in public/admin/config.yml (create/delete aan), maar gaan voorlopig NIET via dit scherm, tot de
// blogreeks en de inzichten-CMS-migratie allebei zijn afgerond. Dit is de technische vangrail
// daarvoor: een cms-wijziging die toch een artikel raakt, blokkeert de geautomatiseerde merge.
export function articlesTouched(files) {
  return files.filter((f) => f.startsWith('src/content/articles/'));
}

// mainContent/cmsContent: bestandsinhoud (string) van dezelfde pad in main resp. cms.
// Geeft een lijst tokens die verdwenen zijn of waarvan het aantal is afgenomen.
export function removedTokens(mainContent, cmsContent) {
  const before = tokenCounts(mainContent);
  const after = tokenCounts(cmsContent);
  const removed = [];
  for (const [token, count] of Object.entries(before)) {
    const left = after[token] ?? 0;
    if (left < count) removed.push({ token, before: count, after: left });
  }
  return removed;
}

async function main() {
  const [mainRef = 'main', cmsRef = 'cms'] = process.argv.slice(2);
  const diff = execSync(`git diff ${mainRef}...${cmsRef}`, { encoding: 'utf8', maxBuffer: 1024 * 1024 * 64 });
  const added = addedLines(diff);
  const forbidden = findForbidden(added);

  // stdio[2] ('ignore'): git schrijft "fatal: path '...' does not exist in '<ref>'" rechtstreeks
  // naar stderr zodra het bestand in die ref niet bestaat (execSync erft stderr standaard door
  // naar de console, ook al wordt de fout hieronder al afgehandeld). Dat is een normaal, verwacht
  // geval bij een NIEUW bestand (nog niet op main) en zou zonder deze optie een verwarrende
  // "fatal: ..."-regel op het scherm zetten terwijl de publicatie prima doorgaat.
  const showFile = (ref, file) => execSync(`git show ${ref}:${file}`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });

  const changedFiles = [...new Set(added.map((l) => l.file))];
  // Alle gewijzigde paden (ook pure verwijderingen, die geen +-regel hebben en dus niet in
  // changedFiles hierboven zitten), voor de artikelen-vangrail hieronder.
  const allChangedFiles = execSync(`git diff --name-only ${mainRef}...${cmsRef}`, { encoding: 'utf8' })
    .split('\n')
    .filter(Boolean);
  const articleHits = articlesTouched(allChangedFiles);
  const tokenProblems = [];
  for (const file of changedFiles) {
    let mainContent;
    try {
      mainContent = showFile(mainRef, file);
    } catch {
      mainContent = ''; // nieuw bestand: behandel als lege basis, er was niets om tokens tegen te bewaken.
    }
    let cmsContent;
    try {
      cmsContent = showFile(cmsRef, file);
    } catch {
      continue; // bestand verwijderd in cms; geen token-check hier, de rest van de review vangt dit.
    }
    for (const r of removedTokens(mainContent, cmsContent)) tokenProblems.push({ file, ...r });
  }

  if (!forbidden.length && !tokenProblems.length && !articleHits.length) {
    console.log('Geen treffers in de toegevoegde regels, alle tokens intact, geen inzichten-artikelen geraakt.');
    return;
  }

  for (const h of forbidden) console.log(`✗ ${h.file}: "${h.hit}" gevonden in "${h.text.trim()}"`);
  for (const p of tokenProblems)
    console.log(`✗ ${p.file}: token ${p.token} is verdwenen of verminderd (was ${p.before}×, nu ${p.after}×)`);
  for (const f of articleHits)
    console.log(`✗ ${f}: inzichten-artikelen gaan voorlopig niet via het CMS (tijdelijke uitzondering, zie docs/cms.md)`);
  console.log(
    `\n${forbidden.length} treffer(s) in toegevoegde regels, ${tokenProblems.length} token-probleem(en), ${articleHits.length} inzichten-artikel(en) geraakt.`,
  );
  process.exitCode = 1;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) main();
