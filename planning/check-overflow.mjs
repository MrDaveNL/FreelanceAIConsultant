// Controleert dat geen enkele pagina, in geen van beide talen, horizontaal scrolt op 360, 390
// en 768px breedte (document.documentElement.scrollWidth <= clientWidth, 1px tolerantie voor
// subpixel-afronding). Serveert dist/ zelf (geen astro preview nodig) en sluit af als alles past.
// Gebruik: npx astro build && node planning/check-overflow.mjs
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import { distDir, distPaginas, urlVanBestand, bestandVanUrl } from './nulmeting-lib.mjs';

const WIDTHS = [360, 390, 768];
const TOLERANTIE = 1;

const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.xml': 'application/xml',
  '.woff': 'font/woff', '.woff2': 'font/woff2' };

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(distDir, urlPath);
  if (urlPath.endsWith('/') || !path.extname(urlPath)) {
    const candidate = path.join(filePath, 'index.html');
    filePath = fs.existsSync(candidate) ? candidate : `${filePath}.html`;
  }
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] ?? 'application/octet-stream' });
    res.end(data);
  });
});

const urls = distPaginas().map(urlVanBestand).sort();

await new Promise((resolve) => server.listen(0, resolve));
const { port } = server.address();
const base = `http://127.0.0.1:${port}`;

const browser = await chromium.launch();
const page = await browser.newPage();

let problemen = 0;
for (const url of urls) {
  for (const width of WIDTHS) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(base + url, { waitUntil: 'load' });
    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    if (scrollWidth > clientWidth + TOLERANTIE) {
      problemen++;
      console.log(`✗ ${url} @ ${width}px: scrollWidth ${scrollWidth} > ${clientWidth} (+${scrollWidth - clientWidth}px)`);
    }
  }
}

await browser.close();
server.close();

console.log(`${urls.length} pagina's × ${WIDTHS.length} breedtes gecontroleerd, ${problemen} met horizontale overflow.`);
process.exitCode = problemen ? 1 : 0;
