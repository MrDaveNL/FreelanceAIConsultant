// Trekt de 'url' van elke kennisbankpagina gelijk aan de url die bij haar mapnaam hoort (zie
// expectedKennisbankUrl in kennisbank-routes.mjs), en schrijft het bestand alleen weg als dat
// verschilt. Zo kan het 'url'-veld in Sveltia verborgen worden (zie public/admin/config.yml): de
// gebruiker typt nooit meer een url, de publicatie-pijplijn leidt hem af uit de map.
//
// Gebruik: node scripts/fix-kennisbank-urls.mjs
// cms-publish.ps1 draait dit na de merge van cms naar main en vóór de build, zodat
// src/data/routes.ts (assertKennisbankUrl) nooit meer kan falen op een url die niet bij de
// mapnaam past.
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { expectedKennisbankUrl, frontmatterField, setFrontmatterField } from './kennisbank-routes.mjs';

const PAGES_ROOT = 'src/content/pages';

// content: ruwe bestandsinhoud. Geeft de gecorrigeerde inhoud terug, of null als de url al klopt.
export function fixKennisbankUrl(content, lang, folderName) {
  const expected = expectedKennisbankUrl(lang, folderName);
  const current = frontmatterField(content, 'url');
  if (current === expected) return null;
  return setFrontmatterField(content, 'url', expected);
}

function fixLang(lang) {
  const dir = join(PAGES_ROOT, lang, 'kennisbank');
  if (!existsSync(dir)) return [];
  const fixes = [];
  const walk = (current, segments) => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const full = join(current, entry.name);
      if (entry.isDirectory()) {
        walk(full, [...segments, entry.name]);
      } else if (entry.name === 'index.md') {
        const raw = readFileSync(full, 'utf8');
        const fixed = fixKennisbankUrl(raw, lang, segments.join('/'));
        if (fixed !== null) {
          writeFileSync(full, fixed);
          fixes.push({ file: full, url: expectedKennisbankUrl(lang, segments.join('/')) });
        }
      }
    }
  };
  walk(dir, []);
  return fixes;
}

function main() {
  const fixes = [...fixLang('nl'), ...fixLang('en')];
  if (!fixes.length) {
    console.log("Alle kennisbank-url's kwamen al overeen met hun mapnaam, niets aangepast.");
    return;
  }
  for (const f of fixes) console.log(`✓ ${f.file}: url gecorrigeerd naar '${f.url}' (afgeleid uit de mapnaam).`);
  console.log(`\n${fixes.length} url(s) gecorrigeerd op basis van de mapnaam.`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) main();
