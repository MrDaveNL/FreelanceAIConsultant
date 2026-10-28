// Hoe prijs en doorlooptijd van een dienst in een RAG-blok staan. Alles komt letterlijk uit src/data/prijzen.ts.
// Gedeeld door de renderfunctie (src/lib/rag-blok.js) en de controle (planning/check-rag.mjs).
import { prijzen, fractionalNiveaus, prijsvoorwaarden, formatEur, timingEn } from '../data/prijzen.ts';
import { site } from '../data/site.js';

// Eén vaste prijsbelofte, overal hetzelfde (ook in de hero- en FAQ-tekst elders op de site), zodat
// een lezer nooit twee verschillende formuleringen voor dezelfde belofte ziet. Alleen deze functie
// buigt om naar de neutrale tekst zolang site.showPrices false is; prijzen.ts blijft intact.
const prijsbeloftelc = 'een vaste prijs of vast maandbedrag, vastgelegd in het voorstel';
const prijsbeloftelcEn = 'a fixed price or fixed monthly fee, agreed upfront in the proposal';
const hoofdletter = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Zelfde notatie als in prijzen.ts: €7.000, punt als duizendtalscheiding.
const eur = (bedrag) => '€' + String(bedrag).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const opsomming = (items, voegwoord) => (items.length > 1 ? `${items.slice(0, -1).join(', ')} ${voegwoord} ${items.at(-1)}` : items[0]);

// Diensten met prijsniveaus. Naam, omvang en bedrag per niveau staan in prijzen.ts; wat een niveau inhoudelijk
// betekent staat daar niet en wordt dus nergens ingevuld.
const niveaus = { 'fractional-ai-lead': fractionalNiveaus };

// Voorwaarde die voor alle diensten geldt ("exclusief btw en reiskosten").
export const voorwaarden = prijsvoorwaarden;

// Prijs van een dienst. Bij een dienst met niveaus de bandbreedte met de omvang, zonder schuine strepen.
// Zolang site.showPrices false is, geeft dit overal dezelfde neutrale prijsbelofte terug in plaats
// van een bedrag; de tokens {{price:slug}}/{{pricelc:slug}} in de RAG-blokken hoeven daardoor niet
// per bestand aangepast te worden. prijzen.ts zelf blijft ongewijzigd.
export const prijsTekst = (slug) =>
  !site.showPrices ? hoofdletter(prijsbeloftelc) : niveaus[slug]
    ? `${eur(prijzen[slug].minPrice)} - ${eur(prijzen[slug].maxPrice)} per maand, voor ${opsomming(niveaus[slug].map((n) => String(n.dagen)), 'of')} dagen per maand`
    : prijzen[slug].price;
// Elk niveau voluit: bedrag, periode, naam en omvang. Alleen voor een tabelrij of een vervolgvraag over de niveaus.
export const niveausTekst = (slug) =>
  niveaus[slug] ? opsomming(niveaus[slug].map((n) => `${eur(n.perMaand)} per maand voor ${n.naam} (${n.dagen} dagen per maand)`), 'en') : null;
export const duurTekst = (slug) =>
  niveaus[slug] ? `${opsomming(niveaus[slug].map((n) => String(n.dagen)), 'of')} dagen per maand` : prijzen[slug].timingVoluit ?? prijzen[slug].timing;

export const dienstSlugs = Object.keys(prijzen);

// EN-equivalent van prijsTekst/duurTekst, zelfde opbouw als de NL-versie hierboven: bij niveaus de
// bandbreedte met de omvang, anders de vaste prijs of bandbreedte uit min/maxPrice (nooit "from" bij
// een vaste prijs: alleen fractional-ai-lead heeft niveaus en dus een echte bandbreedte).
export const prijsTekstEn = (slug) =>
  !site.showPrices ? hoofdletter(prijsbeloftelcEn) : niveaus[slug]
    ? `${formatEur(prijzen[slug].minPrice, 'en')} - ${formatEur(prijzen[slug].maxPrice, 'en')} per month, for ${opsomming(niveaus[slug].map((n) => String(n.dagen)), 'or')} days per month`
    : prijzen[slug].minPrice === prijzen[slug].maxPrice
      ? formatEur(prijzen[slug].minPrice, 'en')
      : `${formatEur(prijzen[slug].minPrice, 'en')} - ${formatEur(prijzen[slug].maxPrice, 'en')}`;
export const duurTekstEn = (slug) =>
  niveaus[slug] ? `${opsomming(niveaus[slug].map((n) => String(n.dagen)), 'or')} days per month` : timingEn[slug] ?? prijzen[slug].timing;
export const niveausTekstEn = (slug) =>
  niveaus[slug] ? opsomming(niveaus[slug].map((n) => `${formatEur(n.perMaand, 'en')} per month for ${n.naam} (${n.dagen} days per month)`), 'and') : null;
// EN-equivalent van prijsvoorwaarden ("excluding VAT and travel expenses"), zelfde feit als NL.
export const voorwaardenEn = 'excluding VAT and travel expenses';

// Alle tekst die de databron over één dienst bevat, voor de controle "staat dit letterlijk in prijzen.ts?".
// Bevat zowel de NL- als de EN-formulering: beide komen uit dezelfde prijzen.ts, en een EN RAG-blok mag zijn
// bedragen/doorlooptijden net zo tegen deze databron toetsen als een NL-blok (anders matcht een EN-zin als
// "takes 3-6 weeks" nooit tegen een Nederlandstalige bron).
export const bronTekst = (slug) => {
  const p = prijzen[slug];
  return [
    p.price, p.timing, p.priceNote, p.cardPrice ?? '', p.cardTiming ?? '',
    prijsTekst(slug), niveausTekst(slug) ?? '', duurTekst(slug), voorwaarden,
    prijsTekstEn(slug), niveausTekstEn(slug) ?? '', duurTekstEn(slug), voorwaardenEn,
  ].join(' | ');
};
