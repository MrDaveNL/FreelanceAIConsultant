// Dienstfeiten voor de RAG-blokken. Naam, URL, prijs en doorlooptijd komen uit services.js en prijzen.ts
// en worden hier niet overgetypt. Dit bestand voegt alleen toe wat daar ontbreekt.
import { services } from '../services.js';
import { dienstSchema, valideer } from './schema.ts';
import type { Dienst, Pakket } from './schema.ts';

type Aanvulling = { resultaat: string; doelgroep: string; laatstGecontroleerd: string; pakketten?: Pakket[] };

// Eén regel per dienst, op slug. Een dienst zonder aanvulling kan geen dienstblok krijgen.
const aanvullingen: Record<string, Aanvulling> = {
  // Bron: deliverables en "best passend bij" in services.js. Prijs en doorlooptijd bevestigd op 6 oktober 2026.
  'ai-readiness-assessment': {
    resultaat: 'Het AI Readiness Assessment levert een readiness-score op vijf dimensies, een gap-analyse en een 90-dagenplan met eigenaren en beslismomenten op.',
    doelgroep: "Organisaties die AI serieus overwegen maar nog geen richting hebben gekozen, en MT's die een investeringsvoorstel moeten onderbouwen.",
    laatstGecontroleerd: '2026-10-06',
  },
  // Bron: deliverables en "best passend bij" in services.js. Voorstellen uit docs/rag-pilot.md hoofdstuk 7,
  // akkoord bevonden op 8 oktober 2026.
  'ai-strategy-sprint': {
    resultaat: 'De AI Strategy Sprint levert een board-ready AI-strategie en een use-case roadmap op, met een prioriteitenmatrix en business-case outlines.',
    doelgroep: 'Organisaties die AI serieus willen inzetten maar niet weten waar te beginnen, en focus en richting zoeken voor de komende 12 tot 18 maanden.',
    laatstGecontroleerd: '2026-10-08',
  },
  'fractional-ai-lead': {
    resultaat: 'De Fractional AI Lead levert eigenaarschap van de AI-portfolio op, met een besliskader, een maandelijkse rapportage en een overdrachtsplan.',
    doelgroep: 'Organisaties met lopende AI-initiatieven zonder duidelijke eigenaar, die koers en capaciteit nodig hebben maar nog geen fulltime rol kunnen dragen.',
    laatstGecontroleerd: '2026-10-08',
  },
  'vendor-review': {
    resultaat: 'De Vendor Review levert een onderbouwd selectieadvies op, met ingevulde scorecards, een TCO-vergelijking over drie jaar en een beslisdocument voor procurement en board.',
    doelgroep: 'Organisaties waar meerdere partijen intern een andere voorkeur hebben en waar de keuze achteraf uit te leggen moet zijn.',
    laatstGecontroleerd: '2026-10-08',
  },
  'executive-briefing': {
    resultaat: 'De Executive Briefing levert een gedeeld beeld van AI op, met een beslisagenda en een vragenlijst voor toezicht.',
    doelgroep: "RvC's, RvT's en directieteams die een gedeeld vertrekpunt missen of aan de vooravond van een grote AI-investering staan.",
    laatstGecontroleerd: '2026-10-08',
  },
  'ai-due-diligence': {
    resultaat: 'De AI Due Diligence levert een DD-rapport met een expliciet oordeel op, plus een overzicht van red flags, gescheiden in deal-breakers en onderhandelpunten.',
    doelgroep: 'Investeerders en corporate-development-teams bij AI-overnames, en organisaties die een strategische AI-leverancier binnenhalen.',
    laatstGecontroleerd: '2026-10-08',
  },
};

export const diensten: Dienst[] = valideer(
  dienstSchema,
  Object.entries(aanvullingen).map(([slug, aanvulling]) => {
    const service = services.find((s) => s.slug === slug);
    if (!service) throw new Error(`RAG-dienst "${slug}" bestaat niet in services.js`);
    return { slug, naam: service.title, url: `/diensten/${slug}`, doorlooptijd: service.timing, prijs: service.price, ...aanvulling };
  }),
  'dienst',
  'slug',
);

export const getDienst = (slug: string) => diensten.find((d) => d.slug === slug);
