// Legt de SEO-nulmeting vast: één JSON-bestand per URL in docs/seo-nulmeting/, uit de ruwe HTML in dist/.
// Gebruik: npm run build && node planning/nulmeting.mjs [--overschrijf] [/url ...]
//   zonder URL's: alle pagina's in dist/. Bestaande metingen blijven staan, tenzij --overschrijf is meegegeven.
// De nulmeting is de referentie voor planning/check-nulmeting.mjs: overschrijf alleen na akkoord op de wijziging.
import fs from 'node:fs';
import path from 'node:path';
import { distPaginas, meet, distDir, nulmetingDir, urlVanBestand, naamVanUrl, bestandVanUrl } from './nulmeting-lib.mjs';

const args = process.argv.slice(2);
const overschrijf = args.includes('--overschrijf');
const gevraagd = args.filter((a) => a.startsWith('/'));
const onbekend = args.filter((a) => a !== '--overschrijf' && !a.startsWith('/'));
if (onbekend.length) {
  // Git Bash zet een argument als /pad om naar een Windows-pad; gebruik daar MSYS_NO_PATHCONV=1.
  console.error(`Onbekend argument: ${onbekend.join(' ')}. Geef URL's op als /pad.`);
  process.exit(1);
}
const urls = gevraagd.length ? gevraagd : distPaginas().map(urlVanBestand);
const vandaag = new Date().toISOString().slice(0, 10);

fs.mkdirSync(nulmetingDir, { recursive: true });
let geschreven = 0;
let overgeslagen = 0;
for (const url of urls) {
  const bron = path.join(distDir, bestandVanUrl(url));
  if (!fs.existsSync(bron)) {
    console.log(`✗ ${url}: niet gevonden in dist/`);
    process.exitCode = 1;
    continue;
  }
  const doel = path.join(nulmetingDir, `${naamVanUrl(url)}.json`);
  if (fs.existsSync(doel) && !overschrijf) {
    overgeslagen++;
    continue;
  }
  const meting = meet(fs.readFileSync(bron, 'utf8'), url);
  fs.writeFileSync(doel, `${JSON.stringify({ ...meting, gemeten_op: vandaag }, null, 2)}\n`);
  geschreven++;
}
console.log(`${geschreven} nulmeting(en) geschreven, ${overgeslagen} bestaande overgeslagen${overgeslagen ? ' (gebruik --overschrijf om te vervangen)' : ''}.`);
