// Alle RAG-blokken. Nieuw blok toevoegen = bestand maken in blokken/ en hier importeren.
import { blokSchema, valideer } from './schema.ts';
import type { Blok } from './schema.ts';

const bronnen: unknown[] = [];

export const blokken: Blok[] = valideer(blokSchema, bronnen, 'blok', 'pagina');

const gezien = new Set<string>();
for (const blok of blokken) {
  if (gezien.has(blok.pagina)) throw new Error(`Meer dan één RAG-blok voor ${blok.pagina}`);
  gezien.add(blok.pagina);
}

export const blokVoor = (pagina: string) => blokken.find((b) => b.pagina === pagina);
