// Pure helpers voor de kennisbank-urlcontrole in src/data/routes.ts: afgeleid uit de mapnaam
// onder src/content/pages/{lang}/kennisbank, los van node:fs zodat dit met `node --test`
// getest kan worden zonder een echte bestandsboom.
//
// Conventie (zie docs/cms.md): NL leeft onder /nl/kennisbank/<mapnaam>, EN onder
// /knowledge-base/<mapnaam> (geen taalprefix, ander segment dan 'kennisbank' -- bestaande
// EN-conventie voor deze sectie). De hub-pagina (index.md direct in kennisbank/, zonder
// submap) heeft geen <mapnaam>-segment.

const HUB_URL = { nl: '/nl/kennisbank', en: '/knowledge-base' };
const PAGE_URL_PREFIX = { nl: '/nl/kennisbank/', en: '/knowledge-base/' };

export function expectedKennisbankUrl(lang, folderName) {
  return folderName ? `${PAGE_URL_PREFIX[lang]}${folderName}` : HUB_URL[lang];
}

export class KennisbankUrlError extends Error {}
export class KennisbankIdError extends Error {}

// Leest een losse scalaire front-matter-waarde (geen lijsten/objecten) via een regel-regex, zonder
// YAML-parser. Alleen voor een ongeïndenteerde top-level sleutel (regel begint direct met
// '<key>:'), zodat bijv. een geïndenteerd 'url' onder 'sources:' niet per ongeluk meetelt.
export function frontmatterField(raw, key) {
  const match = raw.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'));
  if (!match) return undefined;
  return match[1].trim().replace(/^["']|["']$/g, '');
}

// Overschrijft de waarde van een top-level front-matter-sleutel (zie frontmatterField) met een
// nieuwe, letterlijke waarde. Gebruikt door scripts/fix-kennisbank-urls.mjs om de 'url' van een
// kennisbankpagina gelijk te trekken met de mapnaam.
export function setFrontmatterField(raw, key, value) {
  return raw.replace(new RegExp(`^${key}:\\s*.*$`, 'm'), `${key}: ${value}`);
}

// Gooit een Nederlandse foutmelding als de url in de front matter niet bij de mapnaam past
// (bijv. map 'ai-specialisten' met url '/nl/kennisbank/test').
export function assertKennisbankUrl({ lang, folderName, url, id, file }) {
  const expected = expectedKennisbankUrl(lang, folderName);
  if (url !== expected) {
    throw new KennisbankUrlError(
      `Kennisbankpagina '${file}' (id: ${id}) heeft url '${url}', maar moet '${expected}' zijn op basis van ` +
        `de mapnaam '${folderName || '(kennisbank-hub, geen submap)'}'.`
    );
  }
}

// Gooit een Nederlandse foutmelding bij een dubbel id binnen dezelfde taal. 'pages' moet al
// gefilterd zijn op één taal: hetzelfde id in NL en EN is juist bedoeld (zo worden de
// taalversies van een pagina gekoppeld).
export function assertUniqueKennisbankIds(pages) {
  const seen = new Map();
  for (const page of pages) {
    const existing = seen.get(page.id);
    if (existing) {
      throw new KennisbankIdError(
        `Dubbel kennisbank-id '${page.id}' binnen taal '${page.lang}': gebruikt door zowel ` +
          `'${existing.file}' als '${page.file}'. Een id moet uniek zijn binnen een taal.`
      );
    }
    seen.set(page.id, page);
  }
}
