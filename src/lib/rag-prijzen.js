// Hoe prijs en doorlooptijd van een dienst in een RAG-blok staan. Alles komt letterlijk uit src/data/prijzen.ts.
// Gedeeld door de renderfunctie (src/lib/rag-blok.js) en de controle (planning/check-rag.mjs).
import { prijzen, fractionalNiveaus } from '../data/prijzen.ts';

// Zelfde notatie als in prijzen.ts: €7.000, punt als duizendtalscheiding.
const eur = (bedrag) => '€' + String(bedrag).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const opsomming = (items, voegwoord) => (items.length > 1 ? `${items.slice(0, -1).join(', ')} ${voegwoord} ${items.at(-1)}` : items[0]);

// Diensten met prijsniveaus. Naam, omvang en bedrag per niveau staan in prijzen.ts; wat een niveau inhoudelijk
// betekent staat daar niet en wordt dus nergens ingevuld.
const niveaus = { 'fractional-ai-lead': fractionalNiveaus };

// Elk prijsniveau voluit, zonder schuine strepen: bedrag, periode, naam van het niveau en omvang.
export const prijsTekst = (slug) =>
  niveaus[slug]
    ? opsomming(niveaus[slug].map((n) => `${eur(n.perMaand)} per maand voor ${n.naam} (${n.dagen} dagen per maand)`), 'en')
    : prijzen[slug].price;
export const duurTekst = (slug) =>
  niveaus[slug] ? `${opsomming(niveaus[slug].map((n) => String(n.dagen)), 'of')} dagen per maand` : prijzen[slug].timing;

// Alle tekst die de databron over één dienst bevat, voor de controle "staat dit letterlijk in prijzen.ts?".
export const bronTekst = (slug) => {
  const p = prijzen[slug];
  return [p.price, p.timing, p.priceNote, p.cardPrice ?? '', p.cardTiming ?? '', prijsTekst(slug), duurTekst(slug)].join(' | ');
};
export const dienstSlugs = Object.keys(prijzen);
