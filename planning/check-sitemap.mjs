// Controleert dat de drie sitemaps (sitemap.xml, sitemap-en.xml, nl/sitemap.xml) exact
// overeenkomen met de daadwerkelijk gebouwde pagina's in dist/, in plaats van alleen te
// vertrouwen op een handmatige routelijst (zie fix/sitemap-automatisch, planning/TODO-fix-
// sitemap-automatisch.md voor de aanleiding: twee inzichtenartikelen bleven stil uit de sitemap
// omdat routes.ts ze niet kende, ondanks dat ze wél gebouwd werden).
// Gebruik: npx astro build && node planning/check-sitemap.mjs
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const full = path.join(dir, d.name);
    return d.isDirectory() ? walk(full) : d.name === 'index.html' ? [full] : [];
  });

// /admin is het Sveltia CMS-bewerkscherm, geen contentpagina (zie check-dist.mjs).
const isAdmin = (file) => path.relative(dist, file).split(path.sep)[0] === 'admin';
const htmlFiles = walk(dist).filter((f) => !isAdmin(f));

// dist/pad/index.html -> '/pad' ; dist/index.html -> '/'. (Let op: '/' + relatief pad éérst,
// dan pas de '/index.html'-suffix strippen; anders matcht de regex niet op het root-bestand,
// waar relative() enkel 'index.html' zonder voorloop-slash teruggeeft.)
const toUrlPath = (f) => {
  const rel = ('/' + path.relative(dist, f).replace(/\\/g, '/')).replace(/\/index\.html$/, '');
  return rel === '' ? '/' : rel;
};

// Root-404 bouwt plat als dist/404.html (geen eigen map, geen 'index.html'), dus walk() vindt
// 'm niet mee: /404 zit daardoor nooit in pagePaths. Apart al gecontroleerd in check-dist.mjs
// (404 mag nooit in een sitemap staan); check 2 hieronder vangt een regressie daarop ook nog
// mee (een '/404'-sitemap-entry zou daar als "bestaat niet in dist" gerapporteerd worden).
const pagePaths = new Set(htmlFiles.map(toUrlPath));

const noindexPaths = new Set(
  htmlFiles.filter((f) => /<meta name="robots" content="noindex/.test(fs.readFileSync(f, 'utf8'))).map(toUrlPath)
);
const is404Path = (p) => p === '/404' || p === '/nl/404';

const sitemapFiles = ['sitemap.xml', 'sitemap-en.xml', 'nl/sitemap.xml'];
// url-entries per sitemapbestand (sitemapindex-<sitemap>-entries in sitemap.xml zelf tellen niet mee).
const urlsPerSitemap = new Map();
for (const sf of sitemapFiles) {
  const p = path.join(dist, sf);
  if (!fs.existsSync(p)) continue;
  const xml = fs.readFileSync(p, 'utf8');
  if (!/<urlset/.test(xml)) continue; // sitemap.xml is een sitemapindex, geen urlset.
  const urls = new Set();
  for (const m of xml.matchAll(/<url>[\s\S]*?<loc>([^<]+)<\/loc>/g)) {
    urls.add(new URL(m[1]).pathname.replace(/\/$/, '') || '/');
  }
  urlsPerSitemap.set(sf, urls);
}

let problems = 0;
const report = (msg) => {
  problems++;
  console.log(`✗ ${msg}`);
};

const allSitemapUrls = new Map(); // pad -> [sitemapbestand, ...]
for (const [sf, urls] of urlsPerSitemap) {
  for (const u of urls) {
    if (!allSitemapUrls.has(u)) allSitemapUrls.set(u, []);
    allSitemapUrls.get(u).push(sf);
  }
}

// 1. Elke live, indexeerbare pagina in dist staat in precies één sitemap.
for (const p of pagePaths) {
  if (is404Path(p) || noindexPaths.has(p)) {
    if (allSitemapUrls.has(p)) report(`${p} is noindex/404, maar staat toch in ${allSitemapUrls.get(p).join(', ')}`);
    continue;
  }
  const inSitemaps = allSitemapUrls.get(p) ?? [];
  if (inSitemaps.length === 0) report(`${p} is een live, indexeerbare pagina in dist, maar staat in geen enkele sitemap`);
  else if (inSitemaps.length > 1) report(`${p} staat in meer dan één sitemap: ${inSitemaps.join(', ')}`);
}

// 2. Elke sitemap-URL bestaat als pagina in dist.
for (const [p, files] of allSitemapUrls) {
  if (!pagePaths.has(p)) report(`${p} staat in ${files.join(', ')}, maar bestaat niet in dist`);
}

console.log(`${pagePaths.size} HTML-pagina's, ${allSitemapUrls.size} sitemap-URL's gecontroleerd, ${problems} probleem/problemen.`);
process.exitCode = problems ? 1 : 0;
