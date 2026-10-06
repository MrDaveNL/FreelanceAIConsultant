// Alle RAG-blokken. Nieuw blok toevoegen = bestand maken in blokken/ en hier importeren.
import { blokSchema, valideer } from './schema.ts';
import type { Blok } from './schema.ts';
import { getDienst } from './diensten.ts';
import dienstenAiReadinessAssessment from './blokken/diensten-ai-readiness-assessment.ts';

const bronnen: unknown[] = [dienstenAiReadinessAssessment];

export const blokken: Blok[] = valideer(blokSchema, bronnen, 'blok', 'pagina');

const gezien = new Set<string>();
for (const blok of blokken) {
  if (gezien.has(blok.pagina)) throw new Error(`Meer dan één RAG-blok voor ${blok.pagina}`);
  gezien.add(blok.pagina);
  // Een dienstblok kan alleen bestaan als de dienstfeiten compleet zijn (resultaat, doelgroep, laatst gecontroleerd).
  if (blok.type === 'dienst' && !getDienst(blok.pagina.split('/').pop()!))
    throw new Error(`RAG-blok ${blok.pagina}: dienstfeiten ontbreken in src/data/rag/diensten.ts`);
}

export const blokVoor = (pagina: string) => blokken.find((b) => b.pagina === pagina);
