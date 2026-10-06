// Leest de beschermde SEO-elementen uit de ruwe HTML van één pagina.
// Gedeeld door planning/nulmeting.mjs (vastleggen) en planning/check-nulmeting.mjs (voor- en na-controle),
// zodat voor en na dezelfde parser en dezelfde regels gebruiken.
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'node-html-parser';

export const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')), '..');
export const distDir = path.join(root, 'dist');
export const nulmetingDir = path.join(root, 'docs', 'seo-nulmeting');

const BLOCK = new Set(['address', 'article', 'aside', 'blockquote', 'caption', 'dd', 'details', 'div', 'dl', 'dt', 'fieldset',
  'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'li', 'main', 'nav', 'ol', 'p',
  'section', 'table', 'tbody', 'td', 'th', 'thead', 'tr', 'ul', 'summary', 'label', 'option', 'button', 'legend', 'select', 'textarea']);
const SKIP = new Set(['script', 'style', 'svg', 'noscript', 'template']);

export const ws = (s) => s.replace(/\s+/g, ' ').trim();
export const sha = (s) => crypto.createHash('sha256').update(s, 'utf8').digest('hex');
export const tag = (node) => node.rawTagName?.toLowerCase();
export const parseHtml = (html) => parse(html, { comment: false, blockTextElements: { script: true, style: true, noscript: true } });

// JSON met vaste sleutelvolgorde, zodat de hash niet van de volgorde in de bron afhangt.
const stabiel = (v) =>
  Array.isArray(v) ? `[${v.map(stabiel).join(',')}]`
  : v && typeof v === 'object' ? `{${Object.keys(v).sort().map((k) => `${JSON.stringify(k)}:${stabiel(v[k])}`).join(',')}}`
  : JSON.stringify(v);

// Tekst van een element; <br> telt als spatie, scripts en svg's tellen niet mee.
export const tekstVan = (el, scheiding = '') => {
  const delen = [];
  const loop = (node) => {
    for (const kind of node.childNodes) {
      if (kind.nodeType === 3) delen.push(kind.text);
      else if (kind.nodeType === 1) {
        if (SKIP.has(tag(kind))) continue;
        if (tag(kind) === 'br') delen.push(' ');
        else loop(kind);
      }
    }
  };
  loop(el);
  return ws(delen.join(scheiding));
};

// Tekstblokken in documentvolgorde: opeenvolgende tekst binnen hetzelfde blokelement vormt één blok.
export const tekstblokken = (el) => {
  const uit = [];
  let huidig = [];
  let eigenaar = null;
  const sluit = () => {
    const t = ws(huidig.join(''));
    if (t) uit.push(t);
    huidig = [];
  };
  const loop = (node, blok) => {
    for (const kind of node.childNodes) {
      if (kind.nodeType === 3) {
        if (blok !== eigenaar) { sluit(); eigenaar = blok; }
        huidig.push(kind.text);
      } else if (kind.nodeType === 1) {
        const naam = tag(kind);
        if (SKIP.has(naam)) continue;
        if (naam === 'br') { if (blok !== eigenaar) { sluit(); eigenaar = blok; } huidig.push(' '); }
        else loop(kind, BLOCK.has(naam) ? kind : blok);
      }
    }
  };
  loop(el, el);
  sluit();
  return uit;
};

const regioVan = (el) => {
  for (let p = el.parentNode; p; p = p.parentNode) {
    const naam = tag(p);
    if (naam === 'main') return 'main';
    if ((naam === 'header' || naam === 'footer') && tag(p.parentNode) === 'body') return naam;
  }
  return 'overig';
};

export const woorden = (t) => (t.match(/[\p{L}\p{N}_€][\p{L}\p{N}_'’.,€-]*/gu) || []).length;

export const urlVanBestand = (rel) => {
  const r = rel.replace(/\\/g, '/');
  const url = r.endsWith('index.html') ? `/${r.slice(0, -'index.html'.length).replace(/\/$/, '')}` : `/${r.slice(0, -'.html'.length)}`;
  return url || '/';
};
export const bestandVanUrl = (url) => (url === '/' ? 'index.html' : url === '/404' ? '404.html' : `${url.slice(1)}/index.html`);
export const naamVanUrl = (url) => (url === '/' ? 'home' : url.slice(1).replace(/\//g, '__'));

export const distPaginas = () => {
  const loop = (dir) =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
      d.isDirectory() ? loop(path.join(dir, d.name)) : d.name.endsWith('.html') ? [path.join(dir, d.name)] : []);
  return loop(distDir).map((f) => path.relative(distDir, f).replace(/\\/g, '/')).sort();
};

export function meet(html, url) {
  const doc = parseHtml(html);
  const head = doc.querySelector('head');
  const body = doc.querySelector('body');
  const main = doc.querySelector('main');
  const meta = (naam) => head.querySelector(`meta[name="${naam}"]`)?.getAttribute('content') ?? null;
  const prop = (naam) => head.querySelector(`meta[property="${naam}"]`)?.getAttribute('content') ?? null;

  const jsonld = doc.querySelectorAll('script[type="application/ld+json"]').map((s) => {
    try { return JSON.parse(s.rawText); } catch (e) { return { _parse_error: String(e.message), _raw: s.rawText }; }
  });
  const scripts = doc.querySelectorAll('script')
    .filter((s) => s.getAttribute('type') !== 'application/ld+json')
    .map((s) => ({ src: s.getAttribute('src') ?? null, type: s.getAttribute('type') ?? null, inline_bytes: s.getAttribute('src') ? 0 : s.rawText.length }));
  const koppen = body.querySelectorAll('h1,h2,h3,h4,h5,h6').map((h) => ({
    niveau: Number(tag(h)[1]), tekst: tekstVan(h), regio: regioVan(h), id: h.getAttribute('id') ?? null,
  }));
  const links = body.querySelectorAll('a').filter((a) => a.getAttribute('href') !== undefined).map((a) => {
    const href = a.getAttribute('href');
    return {
      regio: regioVan(a),
      soort: href.startsWith('/') || href.startsWith('#') ? 'intern' : href.startsWith('http') ? 'extern' : 'overig',
      href,
      anker: tekstVan(a, ' '),
      rel: a.getAttribute('rel') ?? null,
    };
  });
  const afbeeldingen = body.querySelectorAll('img').map((i) => ({
    regio: regioVan(i), src: i.getAttribute('src') ?? null, alt: i.getAttribute('alt') ?? null,
    width: i.getAttribute('width') ?? null, height: i.getAttribute('height') ?? null, loading: i.getAttribute('loading') ?? null,
  }));
  const blokken = main ? tekstblokken(main) : [];
  const bodytekst = blokken.join('\n');

  return {
    url,
    build_bestand: `dist/${bestandVanUrl(url)}`,
    html: { bytes: Buffer.byteLength(html, 'utf8'), lang: doc.querySelector('html')?.getAttribute('lang') ?? null },
    beschermd: {
      title: ws(head.querySelector('title')?.text ?? '') || null,
      meta_description: meta('description'),
      canonical: head.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? null,
      robots_meta: meta('robots'),
      hreflang: head.querySelectorAll('link[rel="alternate"]').filter((l) => l.getAttribute('hreflang'))
        .map((l) => ({ hreflang: l.getAttribute('hreflang'), href: l.getAttribute('href') })),
      h1: koppen.filter((k) => k.niveau === 1).map((k) => k.tekst),
    },
    social: Object.fromEntries([
      ...['og:type', 'og:locale', 'og:site_name', 'og:title', 'og:description', 'og:url', 'og:image'].map((k) => [k, prop(k)]),
      ...['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'].map((k) => [k, meta(k)]),
    ]),
    koppen,
    bodytekst: { regio: 'main', woorden: woorden(bodytekst), sha256: sha(bodytekst), blokken },
    links,
    structured_data: { sha256: sha(stabiel(jsonld)), items: jsonld },
    afbeeldingen,
    laadprestaties: {
      scripts,
      stylesheets: doc.querySelectorAll('link[rel="stylesheet"]').map((l) => l.getAttribute('href')),
      aantal_details: body.querySelectorAll('details').length,
      aantal_tabellen: body.querySelectorAll('table').length,
    },
  };
}

export const meetUrl = (url) => {
  const bestand = path.join(distDir, bestandVanUrl(url));
  return fs.existsSync(bestand) ? meet(fs.readFileSync(bestand, 'utf8'), url) : null;
};
