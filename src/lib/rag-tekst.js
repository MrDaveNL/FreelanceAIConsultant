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

// Een antwoord op een vervolgvraag begint met ja, nee of het getal.
// In de databron mag dat getal een token zijn ({{timing:slug}} of {{price:slug}}).
export const begintMetJaNeeOfGetal = (tekst) => /^(Ja|Nee)[.,:]|^€?\s?\d|^\{\{(timing|price|pricelc):/.test(tekst.trim());
