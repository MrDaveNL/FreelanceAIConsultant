// Eén bron van waarheid voor alle prijzen op de site. Alle bedragen exclusief btw.
// De dagtarieven hieronder zijn interne rekenbasis en worden NOOIT op de site getoond:
// exporteer alleen de afgeleide bedragen en teksten.

const projectDagtarief = 1400; // projecten
const fractionalDagtarief = 1300; // fractional, bij minimaal 3 maanden

const project = (dagen: number) => dagen * projectDagtarief;
const fractional = (dagen: number) => dagen * fractionalDagtarief;

// €7.000: punt als duizendtalscheiding, geen spatie na €.
const eur = (bedrag: number) => '€' + String(bedrag).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const bandbreedte = (min: number, max: number) => `${eur(min)} - ${eur(max)}`;

// Geldt voor alle diensten. Blokken lezen de voorwaarde hier, zodat hij overal gelijk is.
export const prijsvoorwaarden = 'exclusief btw en reiskosten';

export const fractionalNiveaus = [
  { naam: 'Advies', dagen: 2, perMaand: fractional(2) },
  { naam: 'Lead', dagen: 4, perMaand: fractional(4) },
  { naam: 'Lead+', dagen: 8, perMaand: fractional(8) },
];

type Prijs = { price: string; timing: string; priceNote: string; minPrice: number; maxPrice: number; cardPrice?: string; cardTiming?: string; sessieduur?: string; timingVoluit?: string };

export const prijzen: Record<string, Prijs> = {
  'executive-briefing': {
    // 2 dagen: sessie van 1 dagdeel + voorbereiding
    price: eur(project(2)),
    timing: '1 dagdeel incl. voorbereiding',
    // De sessie zelf duurt drie uur; met de voorbereiding erbij is het één dagdeel.
    sessieduur: 'drie uur',
    timingVoluit: 'sessie van drie uur, samen met de voorbereiding één dagdeel',
    priceNote: 'Inclusief voorbereiding op jouw sector en situatie. Volledig verrekend als je binnen 60 dagen start met een AI Readiness Assessment.',
    minPrice: project(2),
    maxPrice: project(2),
  },
  'ai-readiness-assessment': {
    // 5 dagen
    price: eur(project(5)),
    timing: '2-3 weken',
    priceNote: 'Vaste prijs, inclusief eindpresentatie aan MT of board.',
    minPrice: project(5),
    maxPrice: project(5),
  },
  'ai-strategy-sprint': {
    // 11-16 dagen
    price: bandbreedte(project(11), project(16)),
    timing: '4-6 weken',
    priceNote: 'Onderkant als er al een Readiness Assessment ligt, bovenkant bij meerdere bedrijfsonderdelen.',
    minPrice: project(11),
    maxPrice: project(16),
  },
  'fractional-ai-lead': {
    // Advies 2, Lead 4, Lead+ 8 dagen per maand
    price: fractionalNiveaus.map((n) => eur(n.perMaand)).join(' / ') + ' per maand',
    timing: fractionalNiveaus.map((n) => n.dagen).join(', ').replace(/, (\d+)$/, ' of $1') + ' dagen / maand',
    priceNote: 'Advies (2 dagen), Lead (4 dagen) of Lead+ (8 dagen) per maand. Minimaal 3 maanden, daarna maandelijks opzegbaar.',
    minPrice: fractionalNiveaus[0].perMaand,
    // Alleen op de dienstkaart (ServiceCard); tabel en detailpagina tonen de drie niveaus.
    cardPrice: `Vanaf ${eur(fractionalNiveaus[0].perMaand)} / mnd`,
    cardTiming: '2, 4 of 8 dagen',
    maxPrice: fractionalNiveaus[fractionalNiveaus.length - 1].perMaand,
  },
  'vendor-review': {
    // 7-11 dagen
    price: bandbreedte(project(7), project(11)),
    timing: '3-6 weken',
    priceNote: 'Afhankelijk van het aantal leveranciers (2 tot 4).',
    minPrice: project(7),
    maxPrice: project(11),
  },
  'ai-due-diligence': {
    // 9-14 dagen
    price: bandbreedte(project(9), project(14)),
    timing: '2-4 weken',
    priceNote: 'Eén oplossing aan de onderkant, een heel bedrijf aan de bovenkant. Altijd onder NDA.',
    minPrice: project(9),
    maxPrice: project(14),
  },
};
