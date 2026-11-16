// Bewijst dat een Sveltia-achtige herschrijving van de front matter (YAML-load + YAML-dump via
// js-yaml, zoals de CMS-backend dat bij een "Save" doet) geen zichtbaar verschil maakt in de
// gebouwde HTML. Bouwt twee kopieën van de repo (origineel en met front matter opnieuw gedumpt)
// en vergelijkt de HTML-output byte voor byte. Raakt de echte src/content-bestanden nooit aan:
// alle schrijfacties gebeuren in tijdelijke kopieën die aan het eind worden opgeruimd.
//
// Gebruik: node scripts/check-cms-roundtrip.mjs
import { execSync } from 'node:child_process';
import { mkdtempSync, rmSync, symlinkSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import yaml from 'js-yaml';

const root = process.cwd();

// Eén EN- en één NL-kennisbankpagina, allebei met {{price:...}}/{{timing:...}}-tokens in de body,
// zodat de test ook meteen bewijst dat een YAML-herdump die tokens niet aanraakt.
const TARGETS = [
  { file: 'src/content/pages/en/kennisbank/ai-examples/index.md', out: 'knowledge-base/ai-examples/index.html' },
  { file: 'src/content/pages/nl/kennisbank/ai-voorbeelden/index.md', out: 'nl/kennisbank/ai-voorbeelden/index.html' },
];
const EXCLUDE_DIRS = ['node_modules', '.git', 'dist', '.astro', 'releases', '.claude'];

function robocopyTree(src, dest) {
  mkdirSync(dest, { recursive: true });
  const xd = EXCLUDE_DIRS.map((d) => `/XD "${path.join(src, d)}"`).join(' ');
  try {
    execSync(`robocopy "${src}" "${dest}" /E /NFL /NDL /NJH /NJS /NP ${xd}`, { stdio: 'pipe' });
  } catch (e) {
    // robocopy: 0-7 is succes (bestanden gekopieerd), >=8 is een echte fout.
    if ((e.status ?? 0) >= 8) throw e;
  }
}

function makeCopy(label) {
  const dir = path.join(mkdtempSync(path.join(tmpdir(), `cms-roundtrip-${label}-`)));
  robocopyTree(root, dir);
  symlinkSync(path.join(root, 'node_modules'), path.join(dir, 'node_modules'), 'junction');
  return dir;
}

function rewriteFrontmatter(absPath) {
  const raw = readFileSync(absPath, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) throw new Error(`geen front matter gevonden in ${absPath}`);
  const data = yaml.load(m[1]);
  const dumped = yaml.dump(data, { lineWidth: -1 });
  writeFileSync(absPath, `---\n${dumped}---\n${m[2]}`, 'utf8');
}

function build(dir) {
  execSync('npm run build', { cwd: dir, stdio: 'pipe' });
}

let failures = 0;
const copies = [];
try {
  console.log('Kopieer repo (origineel + herschreven front matter)...');
  const original = makeCopy('origineel');
  const rewritten = makeCopy('herschreven');
  copies.push(original, rewritten);

  for (const t of TARGETS) rewriteFrontmatter(path.join(rewritten, t.file));

  console.log('Build origineel...');
  build(original);
  console.log('Build met herschreven front matter...');
  build(rewritten);

  for (const t of TARGETS) {
    const a = readFileSync(path.join(original, 'dist', t.out), 'utf8');
    const b = readFileSync(path.join(rewritten, 'dist', t.out), 'utf8');
    if (a === b) {
      console.log(`OK  ${t.file}: HTML byte-identiek na front-matter-herdump`);
    } else {
      failures++;
      let i = 0;
      while (i < a.length && i < b.length && a[i] === b[i]) i++;
      console.log(`FOUT ${t.file}: HTML verschilt vanaf positie ${i}`);
      console.log(`  origineel : ...${a.slice(Math.max(0, i - 40), i + 40)}...`);
      console.log(`  herschreven: ...${b.slice(Math.max(0, i - 40), i + 40)}...`);
    }
  }
} finally {
  for (const dir of copies) rmSync(dir, { recursive: true, force: true });
}

console.log(`\n${TARGETS.length} pagina('s) getest, ${failures} met een verschil.`);
process.exitCode = failures ? 1 : 0;
