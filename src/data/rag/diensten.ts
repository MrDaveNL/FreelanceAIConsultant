// Dienstfeiten voor de RAG-blokken. Naam, URL, prijs en doorlooptijd komen uit services.js en prijzen.ts
// en worden hier niet overgetypt. Dit bestand voegt alleen toe wat daar ontbreekt.
import { services } from '../services.js';
import { dienstSchema, valideer } from './schema.ts';
import type { Dienst, Pakket } from './schema.ts';

type Aanvulling = { resultaat: string; doelgroep: string; laatstGecontroleerd: string; pakketten?: Pakket[] };

// Eén regel per dienst, op slug. Een dienst zonder aanvulling kan geen dienstblok krijgen.
const aanvullingen: Record<string, Aanvulling> = {};

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
