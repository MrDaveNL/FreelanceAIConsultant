// Legt de SEO-nulmeting vast: één JSON-bestand per URL in docs/seo-nulmeting/, uit de ruwe HTML in dist/.
// Gebruik: npm run build && node planning/nulmeting.mjs [--overschrijf] [/url ...]
//   zonder URL's: alle pagina's in dist/. Bestaande metingen blijven staan, tenzij --overschrijf is meegegeven.
// De nulmeting is de referentie voor planning/check-nulmeting.mjs: overschrijf alleen na akkoord op de wijziging.
import fs from 'node:fs';
import path from 'node:path';
import { distPaginas, meet, distDir, nulmetingDir, urlVanBestand, naamVanUrl, bestandVanUrl, naarNlPad, vanNlPad } from './nulmeting-lib.mjs';

const args = process.argv.slice(2);
const overschrijf = args.includes('--overschrijf');
const gevraagd = args.filter((a) => a.startsWith('/'));
const onbekend = args.filter((a) => a !== '--overschrijf' && !a.startsWith('/'));
if (onbekend.length) {
  // Git Bash zet een argument als /pad om naar een Windows-pad; gebruik daar MSYS_NO_PATHCONV=1.
  console.error(`Onbekend argument: ${onbekend.join(' ')}. Geef URL's op als /pad.`);
  process.exit(1);
}
// Zonder URL's: alle huidige /nl-pagina's, opgeslagen onder hun kale (pre-migratie) identiteit —
// zie naarNlPad/vanNlPad in nulmeting-lib.mjs. EN-pagina's horen niet in de nulmeting thuis.
// Ook een expliciet opgegeven URL wordt naar die kale identiteit genormaliseerd, zodat /privacy
// en /nl/privacy op dezelfde bestandsnaam uitkomen.
const urls = (gevraagd.length ? gevraagd : distPaginas().map(urlVanBestand).filter((u) => u === '/nl' || u.startsWith('/nl/'))).map(vanNlPad);
const vandaag = new Date().toISOString().slice(0, 10);

fs.mkdirSync(nulmetingDir, { recursive: true });
let geschreven = 0;
let overgeslagen = 0;
for (const url of urls) {
  // Altijd de huidige /nl-pagina lezen, ongeacht of `url` kaal is of al geprefixt werd opgegeven:
  // sinds de EN-pagina's live zijn, bestaat er ook een dist-bestand op het kale pad (de Engelse
  // versie), en dat is nooit wat de nulmeting moet vastleggen.
  const nlUrl = naarNlPad(url);
  const bron = path.join(distDir, bestandVanUrl(nlUrl));
  if (!fs.existsSync(bron)) {
    console.log(`✗ ${url}: niet gevonden in dist/ (verwacht onder ${nlUrl})`);
    process.exitCode = 1;
    continue;
  }
  const doel = path.join(nulmetingDir, `${naamVanUrl(url)}.json`);
  if (fs.existsSync(doel) && !overschrijf) {
    overgeslagen++;
    continue;
  }
  const meting = meet(fs.readFileSync(bron, 'utf8'), url);
  if (meting.html.lang !== 'nl') {
    console.error(`✗ ${url}: ${bron} heeft lang="${meting.html.lang}", verwacht "nl" — vastleggen geweigerd (dit zou een niet-NL-pagina als NL-nulmeting opslaan).`);
    process.exitCode = 1;
    continue;
  }
  fs.writeFileSync(doel, `${JSON.stringify({ ...meting, gemeten_op: vandaag }, null, 2)}\n`);
  geschreven++;
}
console.log(`${geschreven} nulmeting(en) geschreven, ${overgeslagen} bestaande overgeslagen${overgeslagen ? ' (gebruik --overschrijf om te vervangen)' : ''}.`);
