// EN-tegenhanger van nulmeting.mjs: legt een nulmeting vast van de huidige EN-pagina's in dist/,
// vóór de schema-parity-wijziging aan src/pages/insights/[slug].astro (seo/en-insights-schema-parity).
// De bestaande nulmeting.mjs/check-nulmeting.mjs zijn bewust NL-only (zie nulmeting-lib.mjs en de
// comments daar: "EN-pagina's horen niet in de nulmeting thuis") en gaan uit van de i18n-fase-1
// /nl-padmigratie (naarNlPad/vanNlPad) en een harde lang==="nl"-check. Die aannames gelden niet voor
// EN-pagina's (geen /nl-prefix, lang="en"), dus dit is een apart script in plaats van een wijziging
// aan het NL-contract. Hergebruikt alleen de taalneutrale bouwstenen uit nulmeting-lib.mjs (meet,
// distPaginas, urlVanBestand, bestandVanUrl, naamVanUrl).
// Gebruik: npm run build && node planning/nulmeting-en.mjs [--overschrijf] [/url ...]
import fs from 'node:fs';
import path from 'node:path';
import { distPaginas, meet, distDir, root, urlVanBestand, naamVanUrl, bestandVanUrl } from './nulmeting-lib.mjs';

// Niet exporteren voor check-nulmeting-en.mjs om over te nemen: dit bestand voert zijn vastleg-logica
// (incl. process.exit bij een onbekend argument) op het top-level uit, dus een import hiervan zou die
// logica ook afvuren. check-nulmeting-en.mjs bouwt daarom dit pad zelf, met dezelfde `root`.
const nulmetingEnDir = path.join(root, 'docs', 'seo-nulmeting-en');

const args = process.argv.slice(2);
const overschrijf = args.includes('--overschrijf');
const gevraagd = args.filter((a) => a.startsWith('/'));
const onbekend = args.filter((a) => a !== '--overschrijf' && !a.startsWith('/'));
if (onbekend.length) {
  console.error(`Onbekend argument: ${onbekend.join(' ')}. Geef URL's op als /pad.`);
  process.exit(1);
}
// Zonder URL's: alle huidige EN-pagina's, dat zijn alle dist-pagina's buiten /nl (/nl zelf is NL).
const urls = gevraagd.length ? gevraagd : distPaginas().map(urlVanBestand).filter((u) => u !== '/nl' && !u.startsWith('/nl/'));
const vandaag = new Date().toISOString().slice(0, 10);

fs.mkdirSync(nulmetingEnDir, { recursive: true });
let geschreven = 0;
let overgeslagen = 0;
for (const url of urls) {
  const bron = path.join(distDir, bestandVanUrl(url));
  if (!fs.existsSync(bron)) {
    console.log(`✗ ${url}: niet gevonden in dist/`);
    process.exitCode = 1;
    continue;
  }
  const doel = path.join(nulmetingEnDir, `${naamVanUrl(url)}.json`);
  if (fs.existsSync(doel) && !overschrijf) {
    overgeslagen++;
    continue;
  }
  const meting = meet(fs.readFileSync(bron, 'utf8'), url);
  if (meting.html.lang !== 'en') {
    console.error(`✗ ${url}: ${bron} heeft lang="${meting.html.lang}", verwacht "en" — vastleggen geweigerd.`);
    process.exitCode = 1;
    continue;
  }
  fs.writeFileSync(doel, `${JSON.stringify({ ...meting, gemeten_op: vandaag }, null, 2)}\n`);
  geschreven++;
}
console.log(`${geschreven} EN-nulmeting(en) geschreven, ${overgeslagen} bestaande overgeslagen${overgeslagen ? ' (gebruik --overschrijf om te vervangen)' : ''}.`);
