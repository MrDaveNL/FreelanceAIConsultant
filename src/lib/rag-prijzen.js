// Hoe prijs en doorlooptijd van een dienst in een RAG-blok staan. Alles komt letterlijk uit src/data/prijzen.ts.
// Gedeeld door de renderfunctie (src/lib/rag-blok.js) en de controle (planning/check-rag.mjs).
import { prijzen, fractionalNiveaus, prijsvoorwaarden, formatEur } from '../data/prijzen.ts';

// Zelfde notatie als in prijzen.ts: €7.000, punt als duizendtalscheiding.
const eur = (bedrag) => '€' + String(bedrag).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const opsomming = (items, voegwoord) => (items.length > 1 ? `${items.slice(0, -1).join(', ')} ${voegwoord} ${items.at(-1)}` : items[0]);

// Diensten met prijsniveaus. Naam, omvang en bedrag per niveau staan in prijzen.ts; wat een niveau inhoudelijk
// betekent staat daar niet en wordt dus nergens ingevuld.
const niveaus = { 'fractional-ai-lead': fractionalNiveaus };

// Voorwaarde die voor alle diensten geldt ("exclusief btw en reiskosten").
export const voorwaarden = prijsvoorwaarden;

// Prijs van een dienst. Bij een dienst met niveaus de bandbreedte met de omvang, zonder schuine strepen.
export const prijsTekst = (slug) =>
  niveaus[slug]
    ? `${eur(prijzen[slug].minPrice)} - ${eur(prijzen[slug].maxPrice)} per maand, voor ${opsomming(niveaus[slug].map((n) => String(n.dagen)), 'of')} dagen per maand`
    : prijzen[slug].price;
// Elk niveau voluit: bedrag, periode, naam en omvang. Alleen voor een tabelrij of een vervolgvraag over de niveaus.
export const niveausTekst = (slug) =>
  niveaus[slug] ? opsomming(niveaus[slug].map((n) => `${eur(n.perMaand)} per maand voor ${n.naam} (${n.dagen} dagen per maand)`), 'en') : null;
export const duurTekst = (slug) =>
  niveaus[slug] ? `${opsomming(niveaus[slug].map((n) => String(n.dagen)), 'of')} dagen per maand` : prijzen[slug].timingVoluit ?? prijzen[slug].timing;

// Alle tekst die de databron over één dienst bevat, voor de controle "staat dit letterlijk in prijzen.ts?".
export const bronTekst = (slug) => {
  const p = prijzen[slug];
  return [p.price, p.timing, p.priceNote, p.cardPrice ?? '', p.cardTiming ?? '', prijsTekst(slug), niveausTekst(slug) ?? '', duurTekst(slug), voorwaarden].join(' | ');
};
export const dienstSlugs = Object.keys(prijzen);

// EN-equivalent van prijsTekst/duurTekst, nog niet aan EN-content gekoppeld (fase 1 heeft geen EN-diensten).
// EN-getalnotatie via formatEur (komma als duizendtalscheiding); "from X" i.p.v. de NL-bandbreedtezin.
export const prijsTekstEn = (slug) =>
  niveaus[slug]
    ? `${formatEur(prijzen[slug].minPrice, 'en')}-${formatEur(prijzen[slug].maxPrice, 'en')} per month, for ${opsomming(niveaus[slug].map((n) => String(n.dagen)), 'or')} days per month`
    : `from ${formatEur(prijzen[slug].minPrice, 'en')}`;
export const duurTekstEn = (slug) =>
  niveaus[slug] ? `${opsomming(niveaus[slug].map((n) => String(n.dagen)), 'or')} days per month` : prijzen[slug].timing;
