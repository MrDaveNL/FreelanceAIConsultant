// Parsed de front matter van elke content-markdown apart met js-yaml, los van Astro's eigen
// content-loader. Astro's glob()-loader (pages-collectie) en de losse loader van de
// articles-collectie (zie content.config.ts) verwerken front matter elk op hun eigen manier; een
// front-matter-blok dat voor Astro nog "goed genoeg" is kan voor Sveltia ongeldige YAML zijn.
// Sveltia slaat zo'n bestand dan stil over (verdwijnt uit het CMS, zonder foutmelding), terwijl
// de build groen blijft. Dit script is het vangnet: elk front-matter-blok moet ook los, als
// losstaande YAML, geldig zijn.
//
// Gebruik: node scripts/check-frontmatter-yaml.mjs
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const ROOTS = ['src/content/pages', 'src/content/articles'];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const full = path.join(dir, d.name);
    if (d.isDirectory()) return walk(full);
    return d.name.endsWith('.md') ? [full] : [];
  });
}

function frontmatterBlock(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  return match ? match[1] : null;
}

let problems = 0;
const files = ROOTS.flatMap(walk);
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const fm = frontmatterBlock(content);
  if (fm === null) {
    problems++;
    console.log(`✗ ${file}: geen front-matter-blok (--- ... ---) gevonden`);
    continue;
  }
  try {
    const parsed = yaml.load(fm);
    if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
      problems++;
      console.log(`✗ ${file}: front matter parsed niet naar een object (${JSON.stringify(parsed)})`);
    }
  } catch (e) {
    problems++;
    console.log(`✗ ${file}: ongeldige YAML in front matter (${e.message.split('\n')[0]})`);
  }
}

console.log(`${files.length} contentbestand(en) gecontroleerd op geldige front-matter-YAML, ${problems} probleem/problemen.`);
process.exitCode = problems ? 1 : 0;
