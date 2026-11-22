// Zet NL .js-artikeldata en EN JSON-artikeldata om naar losse markdown-bestanden:
// src/content/articles/{nl,en}/<slug>/index.md, met YAML front matter voor alle velden
// behalve 'body' en de bestaande HTML letterlijk (ongewijzigd) als body-string.
//
// Zonder argumenten: volledige, eenmalige migratie vanaf de oude bronnen
// (src/data/articles/index.js voor NL, src/content/articles/all.json voor EN). Dit is de
// extractie die bij de migratie naar de per-artikel-markdown-collectie is gedraaid, zie
// planning/migratieplan-inzichten-cms.md.
//
// Met argumenten: converteert losse, nieuw toegevoegde bestanden, voor hergebruik op een
// publicatiedag (zie planning/werkafspraak-publicatiedagen.md, sectie vanaf 24 november 2026):
//   node scripts/extract-articles-to-md.mjs --nl-js pad/naar/nieuw-artikel.js
//   node scripts/extract-articles-to-md.mjs --en-json pad/naar/nieuw-item.json   (één object of array objecten)
// Beide vlaggen mogen samen en meerdere keren voorkomen. Een EN-item zonder 'order'-veld krijgt
// er in die modus GEEN automatisch toegekend (dat gebeurt alleen bij de volledige migratie, waar
// de oorspronkelijke array-positie de tiebreak bij een gelijke datum vastlegt); voeg dat veld bij
// hergebruik zo nodig handmatig toe aan het nieuwe item, met een order-waarde die consistent is
// met de al bestaande EN-artikelen (zie src/content/articles/en/*/index.md).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import yaml from 'js-yaml';

const root = process.cwd();
const articlesDir = path.join(root, 'src', 'content', 'articles');

function writeArticle(lang, item) {
  const { body, ...frontmatterRaw } = item;
  if (typeof body !== 'string') throw new Error(`artikel ${item.slug} (${lang}) heeft geen body-string`);
  if (!frontmatterRaw.slug) throw new Error(`artikel zonder slug (${lang})`);
  // 'id' en 'lang' staan zo vooraan in de front matter (zelfde volgorde als het bestaande
  // all.json); een al aanwezige id/lang (EN-items hadden die al) blijft overeind via de spread.
  const frontmatter = { id: frontmatterRaw.id ?? `${lang}-${frontmatterRaw.slug}`, lang, ...frontmatterRaw };
  const dumped = yaml.dump(frontmatter, { lineWidth: -1 });
  const dir = path.join(articlesDir, lang, frontmatter.slug);
  mkdirSync(dir, { recursive: true });
  const file = path.join(dir, 'index.md');
  writeFileSync(file, `---\n${dumped}---\n${body}`, 'utf8');
  console.log(`${lang}/${frontmatter.slug} -> ${path.relative(root, file)}`);
}

async function migrateAllNl() {
  const mod = await import(pathToFileURL(path.join(root, 'src', 'data', 'articles', 'index.js')).href);
  for (const item of mod.articles) writeArticle('nl', item);
}

function migrateAllEn() {
  const all = JSON.parse(readFileSync(path.join(articlesDir, 'all.json'), 'utf8'));
  const enItems = all.filter((e) => e.lang === 'en');
  // Geen 'order'-veld in de oude bron: de tiebreak bij een gelijke datum lag impliciet in de
  // array-positie (stabiele sort in de bestaande EN-consumenten). Expliciet vastleggen als
  // 'order' = oorspronkelijke positie + 1, zodat die tiebreak na migratie data-driven is in
  // plaats van afhankelijk van de inleesvolgorde van de nieuwe loader.
  enItems.forEach((item, index) => writeArticle('en', { ...item, order: item.order ?? index + 1 }));
}

const args = process.argv.slice(2);
const nlJsFiles = [];
const enJsonFiles = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--nl-js') nlJsFiles.push(args[++i]);
  else if (args[i] === '--en-json') enJsonFiles.push(args[++i]);
  else throw new Error(`onbekend argument: ${args[i]}`);
}

if (nlJsFiles.length === 0 && enJsonFiles.length === 0) {
  console.log('Geen argumenten: volledige migratie vanaf de oude bronnen (src/data/articles, all.json).');
  await migrateAllNl();
  migrateAllEn();
} else {
  for (const f of nlJsFiles) {
    const mod = await import(pathToFileURL(path.resolve(f)).href);
    writeArticle('nl', mod.default);
  }
  for (const f of enJsonFiles) {
    const data = JSON.parse(readFileSync(path.resolve(f), 'utf8'));
    const items = Array.isArray(data) ? data : [data];
    for (const item of items) writeArticle('en', item);
  }
}
