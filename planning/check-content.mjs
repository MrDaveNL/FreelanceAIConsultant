// Controleert nieuwe contentpagina's tegen de contentplanning.
// Gebruik: node planning/check-content.mjs [pad/naar/index.md ...]   (zonder argumenten: alle pagina's)
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { protectedUrls } from '../src/data/protected-urls.js';
import { services } from '../src/data/services.js';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')), '..');
const specDir = path.join(root, 'planning', 'specs');
const contentDir = path.join(root, 'src', 'content', 'pages');
const specs = Object.fromEntries(
  fs.readdirSync(specDir).map((f) => {
    const s = JSON.parse(fs.readFileSync(path.join(specDir, f), 'utf8'));
    return [s.ID, s];
  }),
);
const specByUrl = Object.fromEntries(Object.values(specs).map((s) => [s.URL, s]));
const urlOfId = (id) => specs[id]?.URL;
const validInternal = new Set([...protectedUrls, ...Object.keys(specByUrl)]);

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
    d.isDirectory() ? walk(path.join(dir, d.name)) : d.name.endsWith('.md') ? [path.join(dir, d.name)] : [],
  );
const files = process.argv.slice(2).length ? process.argv.slice(2).map((f) => path.resolve(f)) : walk(contentDir);

const words = (t) => (t.replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, ' ').match(/[\p{L}\p{N}€][\p{L}\p{N}'’.,€-]*/gu) || []).length;
const norm = (t) => t.replace(/\s+/g, ' ').replace(/[’]/g, "'").trim().toLowerCase();

// Bewust goedgekeurde afwijkingen van de koppenstructuur (waarheid gaat voor structuur).
const approvedHeadings = {
  'C5-00': { 'wat ik laat ontwikkelen': 'wat je kunt laten ontwikkelen' },
};

let errorCount = 0;
for (const file of files) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  const errors = [];
  const warnings = [];
  if (!m) {
    console.log(`\n✗ ${file}\n  - geen frontmatter`);
    errorCount++;
    continue;
  }
  let fm;
  try {
    fm = yaml.load(m[1]);
  } catch (e) {
    console.log(`\n✗ ${file}\n  - YAML-fout: ${e.message}`);
    errorCount++;
    continue;
  }
  const body = m[2];
  const spec = specs[fm.id];
  if (!spec) {
    console.log(`\n✗ ${file}\n  - onbekend id ${fm.id}`);
    errorCount++;
    continue;
  }

  // Frontmatter tegen planning.
  const expectPath = path.join(root, 'src', spec['Output bestandspad'].replace(/^content\//, 'content/pages/'));
  if (path.resolve(expectPath) !== path.resolve(file)) errors.push(`bestandspad moet ${expectPath} zijn`);
  if (fm.url !== spec.URL) errors.push(`url ${fm.url} ≠ planning ${spec.URL}`);
  if (fm.title !== spec.H1) errors.push(`title (H1) wijkt af van planning: "${spec.H1}"`);
  if (fm.metaTitle !== spec['Meta title']) warnings.push(`metaTitle wijkt af van planning: "${spec['Meta title']}"`);
  if (fm.metaDescription !== spec['Meta description']) warnings.push('metaDescription wijkt af van planning');
  if ((fm.metaTitle || '').length > 60) errors.push(`metaTitle te lang (${fm.metaTitle.length})`);
  const dl = (fm.metaDescription || '').length;
  if (dl < 120 || dl > 160) errors.push(`metaDescription lengte ${dl} (120–160)`);
  if (fm.navLabel !== spec.Navigatielabel) warnings.push(`navLabel ≠ "${spec.Navigatielabel}"`);
  if (fm.keyphrase !== spec['Primaire keyphrase']) warnings.push('keyphrase ≠ planning');
  for (const k of ['id', 'url', 'cluster', 'pageType', 'schema', 'navLabel', 'title', 'metaTitle', 'metaDescription', 'keyphrase', 'eyebrow', 'lede', 'primaryCta', 'published', 'updated'])
    if (fm[k] === undefined || fm[k] === '') errors.push(`frontmatter mist ${k}`);
  const sd = spec['Structured data'] || '';
  const expectSchema = spec.ID === 'P08' ? 'collection' : spec.ID === 'P04' ? 'pricing' : /^Service/.test(sd) ? 'service' : 'article';
  if (fm.schema !== expectSchema) errors.push(`schema moet "${expectSchema}" zijn (planning: ${sd})`);
  if (/FAQPage/.test(sd) && !/alleen bij zichtbare/.test(sd) && !(fm.faq?.length >= 3)) errors.push('planning vraagt FAQPage: minimaal 3 FAQ-items');

  // Koppenstructuur.
  const planned = String(spec['H1-H3 structuur'])
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => /^H[23]:/.test(l))
    .map((l) => ({ level: Number(l[1]), text: l.slice(3).trim() }));
  const actual = [...body.matchAll(/^(#{2,3}) (.+)$/gm)].map((x) => ({ level: x[1].length, text: x[2].trim() }));
  if (fm.faqTitle) actual.push({ level: 2, text: fm.faqTitle });
  // FAQ-vragen staan als H3 in de planning, maar worden als uitklapblok onder de FAQ-H2 getoond.
  for (const f of fm.faq || []) actual.push({ level: 3, text: f.q });
  if (fm.id === 'P08') actual.push({ level: 2, text: 'Uitgelichte artikelen' }, { level: 2, text: 'Onderwerpen' }, ...['AI consultancy en strategie', 'AI implementatie', 'AI automatisering', 'AI agents', 'AI beleid en AI Act', 'AI tools'].map((t) => ({ level: 3, text: t })), { level: 2, text: 'Nieuwste artikelen' });
  const renamed = approvedHeadings[fm.id] || {};
  const plannedSet = planned.map((h) => `${h.level}|${renamed[norm(h.text)] ?? norm(h.text)}`);
  const actualSet = actual.map((h) => `${h.level}|${norm(h.text)}`);
  for (const h of plannedSet) if (!actualSet.includes(h)) errors.push(`kop ontbreekt: H${h.split('|')[0]} "${h.split('|')[1]}"`);
  const faqQs = new Set((fm.faq || []).map((f) => `3|${norm(f.q)}`));
  for (const h of actualSet) if (!plannedSet.includes(h) && !faqQs.has(h)) warnings.push(`extra kop (niet in planning): H${h.split('|')[0]} "${h.split('|')[1]}"`);
  if (/^# /m.test(body)) errors.push('body bevat een H1 (# ...); de H1 komt uit frontmatter');

  // Interne links.
  const links = [
    ...[...body.matchAll(/\]\((\/[^)\s#]*)(#[^)\s]*)?\)/g)].map((x) => x[1]),
    ...[...body.matchAll(/href="(\/[^"#]*)(#[^"]*)?"/g)].map((x) => x[1]),
  ].filter((l) => !l.startsWith('/downloads/'));
  const counts = {};
  for (const l of links) counts[l] = (counts[l] || 0) + 1;
  for (const [l, n] of Object.entries(counts)) {
    if (!validInternal.has(l)) errors.push(`link naar onbekende/ongeplande URL: ${l}`);
    if (l.endsWith('/') && l !== '/') errors.push(`link met slash aan het eind: ${l}`);
    if (n > 1) errors.push(`${n}× link naar ${l} (max 1 per pagina)`);
    if (l === fm.url) errors.push('link naar zichzelf');
  }
  const required = new Set();
  for (const line of String(spec['Interne links (uitgaand)'] || '').split('\n')) {
    const id = line.trim().split(' ')[0];
    const url = urlOfId(id) || line.match(/BESTAAND: ([^)]+)\)/)?.[1];
    if (url && url !== fm.url) required.add(url);
  }
  // Hubs linken naar al hun spokes; spokes linken terug naar hun hub.
  for (const s of Object.values(specs)) if (s['Parent ID'] === fm.id) required.add(s.URL);
  if (spec['Parent ID'] && urlOfId(spec['Parent ID'])) required.add(urlOfId(spec['Parent ID']));
  for (const url of required) if (!counts[url]) errors.push(`verplichte link ontbreekt: ${url}`);
  const todos = (body.match(/LINK-TODO/g) || []).length;
  if (todos) warnings.push(`${todos} LINK-TODO('s) open`);
  if (/klik hier/i.test(body)) errors.push('ankertekst "klik hier" gevonden');
  for (const x of body.matchAll(/^#{2,3} .*\]\(/gm)) errors.push(`link in kop: ${x[0]}`);

  // Tokens, placeholders, diagram.
  for (const x of raw.matchAll(/\{\{(\w+):([a-z0-9-]+)\}\}/g)) {
    if (!['price', 'pricelc', 'timing', 'title'].includes(x[1])) errors.push(`onbekend token ${x[0]}`);
    if (!services.find((s) => s.slug === x[2])) errors.push(`onbekende dienst in token ${x[0]}`);
  }
  const visible = raw.replace(/<!--[\s\S]*?-->/g, '');
  if (/\[PLACEHOLDER|\[Naam\]|\[vanaf EUR/i.test(visible)) errors.push('zichtbare placeholder-tekst');
  if (/PLACEHOLDER|LINK-TODO|TODO|lorem ipsum|Dave, lever/i.test(raw.replace(/^#.*$/gm, ''))) errors.push('placeholder, TODO of promptrest in de pagina');
  if (/dagtarief|€\s?[\d.]+\s*(per|\/)\s*(dag|uur)\b/i.test(visible)) errors.push('dag- of uurtarief zichtbaar; toon alleen pakketprijzen');
  if (/—/.test(visible)) errors.push('em-dash (—) gevonden; herschrijf met komma, dubbele punt of punt');
  if (!/<figure class="diagram"/.test(body) && fm.id !== 'P08') errors.push('geen eigen diagram (<figure class="diagram">)');
  for (const x of body.matchAll(/<figure class="diagram"[^>]*>/g)) if (!/aria-label="[^"]{10,}"/.test(x[0])) errors.push('diagram mist beschrijvende aria-label');

  // Woorden.
  const faqText = (fm.faq || []).map((f) => `${f.q} ${f.a}`).join(' ');
  const total = words(body) + words(faqText) + words(fm.lede || '');
  const [lo, hi] = String(spec['Woorden (indicatie)']).replace(/\./g, '').match(/\d+/g).map(Number);
  if (total < lo * 0.9) errors.push(`te kort: ${total} woorden (planning ${lo}–${hi})`);
  else if (total > hi * 1.15) warnings.push(`lang: ${total} woorden (planning ${lo}–${hi})`);

  const ext = [...body.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)].map((x) => x[1]);
  const status = errors.length ? '✗' : '✓';
  if (errors.length) errorCount++;
  console.log(`\n${status} ${fm.id} ${fm.url} — ${total} woorden, ${Object.keys(counts).length} interne links, ${ext.length} externe links, ${(fm.sources || []).length} bronnen, ${(raw.match(/PLACEHOLDER/g) || []).length} placeholders`);
  errors.forEach((e) => console.log(`  ERROR  ${e}`));
  warnings.forEach((w) => console.log(`  let op ${w}`));
}
console.log(`\n${files.length} bestand(en), ${errorCount} met fouten.`);
process.exitCode = errorCount ? 1 : 0;
