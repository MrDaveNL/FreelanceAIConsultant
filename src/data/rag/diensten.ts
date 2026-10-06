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
