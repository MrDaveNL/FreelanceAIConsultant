// Controleert de build (dist/): kapotte interne links, onvervangen tokens, zichtbare placeholders, H1-telling.
// Gebruik: npx astro build && node planning/check-dist.mjs
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
    d.isDirectory() ? walk(path.join(dir, d.name)) : d.name.endsWith('.html') ? [path.join(dir, d.name)] : [],
  );
const exists = (href) => {
  const p = path.join(dist, decodeURI(href));
  // Een root-404 (zoals /404) bouwt als plat <pad>.html, zonder eigen map; hosts en astro preview
  // lossen het extensieloze pad daar ook naar op (zie src/pages/404.astro, src/pages/nl/404.astro).
  return href === '/' || fs.existsSync(path.join(p, 'index.html')) || (fs.existsSync(p) && fs.statSync(p).isFile()) || fs.existsSync(`${p}.html`);
};

let problems = 0;
const seen = { titles: {}, descs: {} };
const report = (file, msg) => {
  problems++;
  console.log(`✗ ${path.relative(dist, file)}: ${msg}`);
};
for (const file of walk(dist)) {
  const html = fs.readFileSync(file, 'utf8');
  for (const [, href, hash] of html.matchAll(/href="(\/[^"#?]*)(?:#([^"]*))?"/g)) {
    if (!exists(href)) report(file, `kapotte link ${href}`);
    else if (hash) {
      const target = href === '/' ? path.join(dist, 'index.html') : path.join(dist, decodeURI(href), 'index.html');
      if (fs.existsSync(target) && !fs.readFileSync(target, 'utf8').includes(`id="${hash}"`)) report(file, `anker #${hash} bestaat niet op ${href}`);
    }
  }
  const text = html.replace(/<!--[\s\S]*?-->/g, '').replace(/<script[\s\S]*?<\/script>/g, '');
  if (/\{\{\w+:/.test(text)) report(file, 'onvervangen {{token}}');
  if (/\[PLACEHOLDER|LINK-TODO/.test(text)) report(file, 'zichtbare placeholder of LINK-TODO');
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  const is404 = file.endsWith('404.html') || path.basename(path.dirname(file)) === '404';
  if (h1 !== 1 && !is404) report(file, `${h1} H1's`);

  // 404-pagina's zijn infrastructuur zonder content: geen canonical, geen hreflang (dus ook geen
  // x-default, die ook als hreflang-attribuut rendert), en robots moet exact 'noindex' zijn.
  if (is404) {
    if (/<link rel="canonical"/.test(html)) report(file, '404 heeft een canonical, maar mag die niet hebben');
    if (/<link rel="alternate"[^>]*hreflang=/.test(html)) report(file, '404 heeft een hreflang/x-default, maar mag die niet hebben');
    if (!/<meta name="robots" content="noindex">/.test(html)) report(file, '404 mist exact <meta name="robots" content="noindex">');
  }

  // SEO: titel 30-60 tekens, beschrijving 120-160, uniek, geen oud merk, geen en/em dash.
  const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1].trim() ?? '');
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  if (title.length < 30 || title.length > 60) report(file, `titel ${title.length} tekens (30-60): ${title}`);
  if (desc.length < 120 || desc.length > 160) report(file, `beschrijving ${desc.length} tekens (120-160)`);
  if (/Freelance AI Specialist/.test(title + desc)) report(file, 'oud merk "Freelance AI Specialist" in titel of beschrijving');
  if (/[–—]/.test(title + desc)) report(file, 'en/em dash in titel of beschrijving');
  (seen.titles[title] ||= []).push(file);
  (seen.descs[desc] ||= []).push(file);
}
for (const [kind, map] of [['titel', seen.titles], ['beschrijving', seen.descs]])
  for (const [value, files] of Object.entries(map)) if (files.length > 1) report(files[0], `dubbele ${kind} op ${files.length} pagina's: ${value.slice(0, 60)}`);

// 404 mag in geen van de sitemaps voorkomen.
for (const sitemapFile of ['sitemap.xml', 'sitemap-en.xml', 'nl/sitemap.xml']) {
  const p = path.join(dist, sitemapFile);
  if (!fs.existsSync(p)) continue;
  if (/\/404(["<]|\/)/.test(fs.readFileSync(p, 'utf8'))) report(p, '404 staat in de sitemap, maar mag daar niet in');
}

// Expliciete check op /nl/404: anders dan de root-404 (die als plat /404.html bouwt en alleen via
// nginx's error_page bereikt wordt) bouwt nl/404.astro als een gewone route (/nl/404/index.html),
// dus https://freelanceaiconsultant.com/nl/404 is ook rechtstreeks bereikbaar en geeft dan een
// 200. Los van de generieke is404-matching hierboven (die hier ook op afvuurt) hardcoden we deze
// URL expliciet, zodat een latere wijziging aan die matching dit niet stilletjes laat glippen.
{
  const nl404 = path.join(dist, 'nl/404/index.html');
  if (!fs.existsSync(nl404)) {
    report(nl404, 'ontbreekt: /nl/404 moet bestaan (nginx wijst de /nl/*-404-fallback hiernaar)');
  } else {
    const html = fs.readFileSync(nl404, 'utf8');
    if (!/<meta name="robots" content="noindex">/.test(html)) report(nl404, '/nl/404 mist exact <meta name="robots" content="noindex">');
    if (/<link rel="canonical"/.test(html)) report(nl404, '/nl/404 heeft een canonical, maar mag die niet hebben');
    if (/<link rel="alternate"[^>]*hreflang=/.test(html)) report(nl404, '/nl/404 heeft een hreflang/x-default, maar mag die niet hebben');
  }
  for (const sitemapFile of ['sitemap.xml', 'sitemap-en.xml', 'nl/sitemap.xml']) {
    const p = path.join(dist, sitemapFile);
    if (fs.existsSync(p) && fs.readFileSync(p, 'utf8').includes('/nl/404')) report(p, '/nl/404 staat in de sitemap, maar mag daar niet in');
  }
}

console.log(`${walk(dist).length} HTML-bestanden gecontroleerd, ${problems} probleem/problemen.`);
process.exitCode = problems ? 1 : 0;
