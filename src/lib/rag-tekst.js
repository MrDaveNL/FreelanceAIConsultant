// Tekstregels voor de RAG-blokken, gedeeld door het schema, de renderfunctie en planning/check-rag.mjs.

// Een zin eindigt op . ! of ? gevolgd door witruimte en een hoofdletter, cijfer of €.
// Daardoor telt "incl. voorbereiding" of "€7.000" niet als zinseinde.
export const splitsZinnen = (tekst) =>
  tekst
    .replace(/\s+/g, ' ')
    .trim()
    .split(/(?<=[.!?])\s+(?=[\p{Lu}\d€"“'‘(])/u)
    .filter(Boolean);
export const telZinnen = (tekst) => splitsZinnen(tekst).length;

// Voor het vergelijken van koppen en zinnen: kleine letters, rechte apostrof, enkele spaties.
export const normaliseer = (tekst) => tekst.replace(/\s+/g, ' ').replace(/[’‘]/g, "'").trim().toLowerCase();

// Schrijfregels uit de briefing: geen em dash en nooit het woord "gids".
export const schrijfregelFout = (tekst) =>
  /—/.test(tekst) ? 'bevat een em dash' : /gids/i.test(tekst) ? 'bevat het woord "gids"' : null;

// Een tabelcel mag niet leeg zijn en niet doorverwijzen of uitstellen.
export const celFout = (tekst) =>
  !tekst.trim() ? 'is leeg' : /(^|[^\p{L}])(zie|n\.v\.t\.?|nvt|volgt)([^\p{L}]|$)/iu.test(tekst) ? 'bevat "zie", "n.v.t." of "volgt"' : null;

const TELWOORDEN = ['één', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen', 'tien', 'elf', 'twaalf', 'vijftien', 'twintig', 'dertig', 'veertig', 'vijftig', 'zestig', 'honderd', 'duizend'];

// Een antwoord op een vervolgvraag begint met het antwoord zelf: ja, nee, het getal, of de naam van de dienst
// of het pakket waar de vraag naar vraagt. Een bedrag komt pas daarna, tenzij de vraag naar het bedrag vraagt.
// In de databron mag het begin een token zijn ({{timing:slug}}, {{price:slug}}, {{dienst:slug}}).
export const begintMetAntwoord = (tekst, namen = [], vraag = '') => {
  const t = tekst.trim();
  // Een open vraag vraagt om een naam of omschrijving; alleen een ja-neevraag eist ja of nee.
  if (/^(Wat|Welk|Welke|Wie|Hoe|Hoeveel|Waar|Waarom|Wanneer|Waardoor|Waarmee|Waarvoor)(?![\p{L}])/u.test(vraag.trim())) return true;
  if (/^(Ja|Nee)[.,:]/.test(t) || /^€?\s?\d/.test(t) || /^\{\{(timing|price|pricelc|dienst|title):/.test(t)) return true;
  if (new RegExp(`^(${TELWOORDEN.join('|')}|Eén|Één)(?![\\p{L}])`, 'iu').test(t)) return true;
  const zonderLidwoord = t.replace(/^(De|Het|Een)\s+/, '');
  return /^\{\{(dienst|title):/.test(zonderLidwoord) || namen.some((n) => zonderLidwoord.startsWith(n));
};
// Een kaal "Ja." of "Nee.": alleen toegestaan als de bron onvoorwaardelijk is.
export const isKaalJaNee = (tekst) => /^(Ja|Nee)\.(\s|$)/.test(tekst.trim());
export const begintMetBedrag = (tekst) => /^€|^\{\{(price|pricelc):/.test(tekst.trim());
export const vraagtNaarBedrag = (vraag) => /kost|prijs|tarie|bedrag|investering/i.test(vraag);

// ---- Laag A: elk bedrag, elke doorlooptijd, elk aantal en elke termijn moet letterlijk in de bron staan. ----

// Enige normalisatie bij het vergelijken: hoofdletters, witruimte, "€ 7.000" naast "€7.000", en het
// scheidingsteken in een bereik (2-3, 2–3 en 2 tot 3 gelden als gelijk).
export const normaliseerGetallen = (tekst) =>
  tekst
    .toLowerCase()
    .replace(/[  ]/g, ' ')
    .replace(/[’‘]/g, "'")
    .replace(/\s+/g, ' ')
    .replace(/€\s+(?=\d)/g, '€')
    .replace(/(\d)\s?(?:-|–|tot)\s?(?=\d)/g, '$1-');

const FUNCTIEWOORDEN = new Set(['de', 'het', 'een', 'van', 'in', 'op', 'voor', 'met', 'tot', 'of', 'en', 'na', 'sinds', 'per', 'bij', 'uit', 'aan', 'om', 'dan',
  'is', 'zijn', 'ruim', 'circa', 'ongeveer', 'minimaal', 'maximaal', 'minstens', 'ten', 'die', 'dat', 'als', 'er', 'al', 'nog', 'ook', 'door', 'over', 'naar', 'binnen', 'vanaf', 'rond', 'zo', 'te', 'wordt', 'worden', 'kost', 'duurt']);
const ontsnap = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// "één" telt hier niet mee: het staat meestal als lidwoord of in een vaste uitdrukking ("in één keer").
const TEL = TELWOORDEN.filter((w) => w !== 'één').join('|');
const GETAL = `\\d+(?:, \\d+)+ (?:of|en) \\d+|(?<![\\p{L}])(?:${TEL}) tot (?:${TEL})(?![\\p{L}])|€?\\d[\\d.,]*\\d(?:-\\d[\\d.,]*\\d|-\\d)?%?|€?\\d(?:-\\d[\\d.,]*\\d|-\\d)?%?|(?<![\\p{L}])(?:${TELWOORDEN.filter((w) => w !== 'één').join('|')})(?![\\p{L}])`;

// Alle getalsuitdrukkingen in een tekst, elk met het woord ervoor en erna.
export const getalUitdrukkingen = (tekst) => {
  const t = normaliseerGetallen(tekst);
  const uit = [];
  for (const m of t.matchAll(new RegExp(`(?<![\\d.,])(?:${GETAL})`, 'gu'))) {
    const getal = m[0].replace(/[.,]$/, '');
    const voor = t.slice(0, m.index).match(/([\p{L}][\p{L}'-]*)[\s(]*$/u)?.[1] ?? null;
    const na = t.slice(m.index + getal.length).match(/^[\s)]*([\p{L}][\p{L}'-]*)/u)?.[1] ?? null;
    uit.push({ getal, voor, na });
  }
  return uit;
};

// Staat deze uitdrukking letterlijk in de (genormaliseerde) brontekst?
// Een bedrag, percentage of jaartal moet zelf voorkomen. Elk ander getal moet voorkomen samen met het
// inhoudswoord erna of ervoor ("vijf werksessies", "artikel 25"), zodat een los cijfer niet toevallig past.
export const getalStaatIn = ({ getal, voor, na }, bron) => {
  const los = new RegExp(`(?<![\\d.,\\p{L}])${ontsnap(getal)}(?![\\d\\p{L}]|[.,]\\d)`, 'u');
  if (/^€|%$/.test(getal) || /^(19|20)\d\d$/.test(getal)) return los.test(bron);
  const metNa = na && !FUNCTIEWOORDEN.has(na) ? new RegExp(`(?<![\\d.,\\p{L}])${ontsnap(getal)}[\\s(]+${ontsnap(na)}(?![\\p{L}])`, 'u') : null;
  const metVoor = voor && !FUNCTIEWOORDEN.has(voor) ? new RegExp(`(?<![\\p{L}])${ontsnap(voor)}[\\s(]+${ontsnap(getal)}(?![\\d\\p{L}]|[.,]\\d)`, 'u') : null;
  if (!metNa && !metVoor) return los.test(bron);
  return Boolean((metNa && metNa.test(bron)) || (metVoor && metVoor.test(bron)));
};
