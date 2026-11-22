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
// Harde grens: dit is het enige check-script met een eigen server en een Playwright-browser, dus
// het enige dat door een geblokkeerde poort of een hangende browserstart (bijv. een firewall-prompt
// die op een klik wacht) stil kan blijven hangen. Die situaties geven zelf geen foutmelding.
const TIMEOUT_MS = 5 * 60 * 1000;

const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.xml': 'application/xml',
  '.woff': 'font/woff', '.woff2': 'font/woff2' };

const horlogehond = setTimeout(() => {
  console.error(`\nFOUT: check-overflow.mjs hangt al langer dan ${TIMEOUT_MS / 1000} seconden stil, zonder voortgang.`);
  console.error('Mogelijke oorzaak: de lokale preview-server kon niet starten (poort al in gebruik of geblokkeerd),');
  console.error('of de Playwright-browser (chromium) start niet, bijvoorbeeld door een firewall-melding die op een');
  console.error('klik wacht. Breek het proces handmatig af, controleer of er nog een node- of chromium-proces op een');
  console.error('poort hangt, en draai het script opnieuw.');
  process.exit(124);
}, TIMEOUT_MS);

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
for (const [i, url] of urls.entries()) {
  process.stdout.write(`\r  pagina ${i + 1}/${urls.length}: ${url}`.padEnd(90));
  for (const width of WIDTHS) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(base + url, { waitUntil: 'load' });
    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    if (scrollWidth > clientWidth + TOLERANTIE) {
      problemen++;
      process.stdout.write('\n');
      console.log(`✗ ${url} @ ${width}px: scrollWidth ${scrollWidth} > ${clientWidth} (+${scrollWidth - clientWidth}px)`);
    }
  }
}
process.stdout.write('\n');

await browser.close();
server.close();
clearTimeout(horlogehond);

console.log(`${urls.length} pagina's × ${WIDTHS.length} breedtes gecontroleerd, ${problemen} met horizontale overflow.`);
process.exitCode = problemen ? 1 : 0;
