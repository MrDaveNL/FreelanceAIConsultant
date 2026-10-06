# Fase 0: SEO-nulmeting per URL uit de ruwe HTML van een verse build (dist/).
# Schrijft docs/seo-nulmeting/<url>.json en een samenvatting voor de analyse.
import hashlib, json, os, re, sys
from bs4 import BeautifulSoup, NavigableString, Comment

ROOT = sys.argv[1]
OUT = os.path.join(ROOT, 'docs', 'seo-nulmeting')
SUMMARY = sys.argv[2]
DIST = os.path.join(ROOT, 'dist')
os.makedirs(OUT, exist_ok=True)

BLOCK = {'address', 'article', 'aside', 'blockquote', 'caption', 'dd', 'details', 'div', 'dl', 'dt', 'fieldset',
         'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'li', 'main', 'nav',
         'ol', 'p', 'section', 'table', 'tbody', 'td', 'th', 'thead', 'tr', 'ul', 'summary', 'label', 'option',
         'button', 'legend', 'select', 'textarea'}
SKIP = {'script', 'style', 'svg', 'noscript', 'template'}
ws = lambda s: re.sub(r'\s+', ' ', s).strip()
sha = lambda s: hashlib.sha256(s.encode('utf-8')).hexdigest()


def text_of(el):
    for br in el.find_all('br'):
        br.replace_with(' ')
    return ws(el.get_text())


def blocks(root):
    out, cur, cur_owner = [], [], None
    for node in root.descendants:
        if isinstance(node, Comment) or not isinstance(node, NavigableString):
            continue
        if any(p.name in SKIP for p in node.parents):
            continue
        owner = next((p for p in node.parents if p.name in BLOCK), root)
        if owner is not cur_owner:
            if ws(''.join(cur)):
                out.append(ws(''.join(cur)))
            cur, cur_owner = [], owner
        cur.append(str(node))
    if ws(''.join(cur)):
        out.append(ws(''.join(cur)))
    return out


def region_of(el):
    for p in el.parents:
        if p.name == 'main':
            return 'main'
        if p.name == 'header' and p.parent and p.parent.name == 'body':
            return 'header'
        if p.name == 'footer' and p.parent and p.parent.name == 'body':
            return 'footer'
    return 'overig'


def source_of(url):
    seg = url.strip('/').split('/')
    if url == '/':
        return ['src/pages/index.astro']
    if url == '/404':
        return ['src/pages/404.astro']
    md = os.path.join(ROOT, 'src', 'content', 'pages', *seg, 'index.md')
    if os.path.exists(md):
        return ['src/content/pages/' + '/'.join(seg) + '/index.md', 'src/pages/[...slug].astro']
    if seg[0] == 'diensten' and len(seg) == 2:
        return ['src/pages/diensten/[slug].astro', 'src/data/services.js', 'src/data/prijzen.ts']
    if seg[0] == 'cases' and len(seg) == 2:
        return ['src/pages/cases/[slug].astro', 'src/data/cases.js']
    if seg[0] == 'inzichten' and len(seg) == 2:
        return ['src/pages/inzichten/[slug].astro', 'src/data/articles/' + seg[1] + '.js']
    if len(seg) == 1:
        return ['src/pages/' + seg[0] + '.astro'] if os.path.exists(os.path.join(ROOT, 'src', 'pages', seg[0] + '.astro')) else ['src/pages/' + seg[0] + '/index.astro']
    return []


pages = []
for dirpath, _, files in os.walk(DIST):
    for f in files:
        if f.endswith('.html'):
            pages.append(os.path.join(dirpath, f))

summary = []
for path in sorted(pages):
    rel = os.path.relpath(path, DIST).replace('\\', '/')
    url = '/' + rel[:-len('index.html')].rstrip('/') if rel.endswith('index.html') else '/' + rel[:-5]
    url = url or '/'
    raw = open(path, encoding='utf-8').read()
    soup = BeautifulSoup(raw, 'html.parser')
    head = soup.head
    meta = lambda name: (head.find('meta', attrs={'name': name}) or {}).get('content')
    prop = lambda name: (head.find('meta', attrs={'property': name}) or {}).get('content')
    canonical = head.find('link', rel='canonical')
    hreflang = [{'hreflang': l.get('hreflang'), 'href': l.get('href')} for l in head.find_all('link', rel='alternate') if l.get('hreflang')]
    jsonld = []
    for s in head.find_all('script', type='application/ld+json') + (soup.body.find_all('script', type='application/ld+json') if soup.body else []):
        try:
            jsonld.append(json.loads(s.string))
        except Exception as e:
            jsonld.append({'_parse_error': str(e), '_raw': s.string})
    scripts = [{'src': s.get('src'), 'type': s.get('type'), 'inline_bytes': len(s.string or '') if not s.get('src') else 0}
               for s in soup.find_all('script') if s.get('type') != 'application/ld+json']
    styles = [l.get('href') for l in soup.find_all('link', rel='stylesheet')]
    main = soup.find('main')

    links = []
    for a in soup.body.find_all('a'):
        href = a.get('href')
        if href is None:
            continue
        kind = 'intern' if href.startswith('/') or href.startswith('#') else ('extern' if href.startswith('http') else 'overig')
        links.append({'regio': region_of(a), 'soort': kind, 'href': href, 'anker': ws(a.get_text(' ')), 'rel': ' '.join(a.get('rel', [])) or None})
    images = [{'regio': region_of(i), 'src': i.get('src'), 'alt': i.get('alt'), 'width': i.get('width'), 'height': i.get('height'), 'loading': i.get('loading')}
              for i in soup.body.find_all('img')]

    # Koppen voor de hele body (volgorde in de HTML), met regio.
    headings = []
    for h in soup.body.find_all(re.compile(r'^h[1-6]$')):
        clone = BeautifulSoup(str(h), 'html.parser')
        headings.append({'niveau': int(h.name[1]), 'tekst': text_of(clone), 'regio': region_of(h), 'id': h.get('id')})
    main_clone = BeautifulSoup(str(main), 'html.parser') if main else None
    body_blocks = blocks(main_clone) if main_clone else []
    body_text = '\n'.join(body_blocks)

    record = {
        'url': url,
        'build_bestand': 'dist/' + rel,
        'bron': source_of(url),
        'gemeten_op': '2026-10-06',
        'html': {'bytes': len(raw.encode('utf-8')), 'sha256': sha(raw), 'lang': soup.html.get('lang')},
        'beschermd': {
            'title': ws(head.title.get_text()) if head.title else None,
            'meta_description': meta('description'),
            'canonical': canonical.get('href') if canonical else None,
            'robots_meta': meta('robots'),
            'hreflang': hreflang,
            'h1': [h['tekst'] for h in headings if h['niveau'] == 1],
        },
        'social': {k: prop(k) for k in ['og:type', 'og:locale', 'og:site_name', 'og:title', 'og:description', 'og:url', 'og:image']}
        | {k: meta(k) for k in ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']},
        'koppen': headings,
        'bodytekst': {'regio': 'main', 'woorden': len(re.findall(r'[\w€][\w\'’.,€-]*', body_text)), 'sha256': sha(body_text), 'blokken': body_blocks},
        'links': links,
        'structured_data': {'sha256': sha(json.dumps(jsonld, sort_keys=True, ensure_ascii=False)), 'items': jsonld},
        'afbeeldingen': images,
        'laadprestaties': {'scripts': scripts, 'stylesheets': styles, 'aantal_details': len(soup.body.find_all('details')), 'aantal_tabellen': len(soup.body.find_all('table'))},
    }
    name = 'home' if url == '/' else url.strip('/').replace('/', '__')
    with open(os.path.join(OUT, name + '.json'), 'w', encoding='utf-8', newline='\n') as fh:
        json.dump(record, fh, ensure_ascii=False, indent=2)
        fh.write('\n')

    types = []
    for item in jsonld:
        for g in (item.get('@graph') or [item]) if isinstance(item, dict) else []:
            types.append(g.get('@type'))
    main_h = [h for h in headings if h['regio'] == 'main']
    summary.append({
        'url': url, 'file': name + '.json', 'title': record['beschermd']['title'], 'desc_len': len(record['beschermd']['meta_description'] or ''),
        'canonical': record['beschermd']['canonical'], 'robots': record['beschermd']['robots_meta'], 'h1': record['beschermd']['h1'],
        'headings': [f"H{h['niveau']}: {h['tekst']}" for h in main_h], 'words': record['bodytekst']['woorden'],
        'first_blocks': body_blocks[:14], 'jsonld_types': types, 'tables': len(main.find_all('table')) if main else 0,
        'details': len(main.find_all('details')) if main else 0,
        'emdash': len(re.findall('—', body_text)), 'endash': len(re.findall('–', body_text)),
        'gids': sorted(set(re.findall(r'\b\w*gids\w*\b', body_text, flags=re.I))),
        'euro': sorted(set(re.findall(r'€\s?[\d.,]+\s?[MK]?(?:\+)?(?:\s?-\s?€\s?[\d.,]+)?', body_text))),
        'tarief': sorted(set(m.strip() for m in re.findall(r'[^.\n]{0,60}(?:dagtarief|uurtarief|per uur|per dag\b)[^.\n]{0,40}', body_text, flags=re.I))),
        'scripts': len(scripts), 'int_links_main': len([l for l in links if l['regio'] == 'main' and l['soort'] == 'intern']),
        'dienst_links': sorted(set(l['href'] for l in links if l['regio'] == 'main' and l['href'].startswith('/diensten/'))),
        'bytes': record['html']['bytes'],
    })

json.dump(summary, open(SUMMARY, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(len(summary), 'pagina\'s gemeten')
