// Controleert een CMS-wijziging (branch "cms" t.o.v. "main") voordat die wordt gemerget.
//
// Twee soorten controles:
// 1. Toegevoegde regels (alleen "+"-regels uit de diff, niet de hele pagina) op TEST, TODO,
//    FIXME, lorem, xxx en op em dashes (—). Hoofdlettergevoelig op TEST/TODO/FIXME, zodat
//    gewone tekst als "testen" niet blokkeert.
// 2. De {{price:...}}, {{pricelc:...}}, {{timing:...}} en {{title:...}}-tokens: voor elk
//    bestand dat in de diff voorkomt, mag geen token verdwijnen of veranderen ten opzichte van
//    de main-versie. Dit vangt een CMS-save die per ongeluk een token overtypt of weggooit.
//
// Gebruik: node scripts/check-cms-content.mjs [main-ref] [cms-ref]
// Exit 0 = geen treffers, exit 1 = treffer(s) gevonden (zie console-output).
import { execSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const FORBIDDEN = [
  { name: 'TEST', re: /\bTEST\b/ },
  { name: 'TODO', re: /\bTODO\b/ },
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

// Geeft [{ file, text, hit }] voor elke toegevoegde regel die een verboden patroon bevat.
export function findForbidden(lines) {
  const hits = [];
  for (const line of lines) {
    for (const { name, re } of FORBIDDEN) {
      if (re.test(line.text)) hits.push({ ...line, hit: name });
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

  const changedFiles = [...new Set(added.map((l) => l.file))];
  const tokenProblems = [];
  for (const file of changedFiles) {
    let mainContent, cmsContent;
    try {
      mainContent = execSync(`git show ${mainRef}:${file}`, { encoding: 'utf8' });
    } catch {
      continue; // nieuw bestand, bestaat niet in main, niets om tokens tegen te bewaken.
    }
    try {
      cmsContent = execSync(`git show ${cmsRef}:${file}`, { encoding: 'utf8' });
    } catch {
      continue; // bestand verwijderd in cms; geen token-check hier, de rest van de review vangt dit.
    }
    for (const r of removedTokens(mainContent, cmsContent)) tokenProblems.push({ file, ...r });
  }

  if (!forbidden.length && !tokenProblems.length) {
    console.log('Geen treffers in de toegevoegde regels, alle tokens intact.');
    return;
  }

  for (const h of forbidden) console.log(`✗ ${h.file}: "${h.hit}" gevonden in "${h.text.trim()}"`);
  for (const p of tokenProblems)
    console.log(`✗ ${p.file}: token ${p.token} is verdwenen of verminderd (was ${p.before}×, nu ${p.after}×)`);
  console.log(`\n${forbidden.length} treffer(s) in toegevoegde regels, ${tokenProblems.length} token-probleem(en).`);
  process.exitCode = 1;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) main();
