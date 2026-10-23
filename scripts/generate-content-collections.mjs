// Genereert de content collections 'services', 'cases' en 'articles' uit hun bronbestanden.
//
// src/data/services.js, src/data/cases.js en src/data/articles/*.js blijven de ENE bron van
// waarheid voor deze NL-gegevens (ook voor de RAG-blokken en de planning-scripts, die buiten
// Astro's build draaien en dus geen toegang hebben tot 'astro:content'). Dit script zet die
// bronnen om naar de JSON-bestanden die de content collections (src/content.config.ts) lezen,
// zodat Astro-routes via getCollection() kunnen werken terwijl er maar één plek is om NL-tekst
// te wijzigen.
//
// EN-entries in de output zijn losse, handgeschreven content (fase 2+) en worden hier nooit
// aangemaakt of overschreven: dit script herschrijft alleen de 'lang: nl'-entries en laat elke
// 'lang: en'-entry die al in het bestand staat ongewijzigd staan.
// Draait vóór elke build (zie package.json "prebuild").
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { services } from '../src/data/services.js';
import { cases } from '../src/data/cases.js';
import { articles } from '../src/data/articles/index.js';

function write(target, nlEntries) {
  const existing = existsSync(target) ? JSON.parse(readFileSync(target, 'utf8')) : [];
  const preservedEn = existing.filter((entry) => entry.lang === 'en');
  const nl = nlEntries.map((entry) => ({ id: `nl-${entry.slug}`, lang: 'nl', ...entry }));
  writeFileSync(target, JSON.stringify([...nl, ...preservedEn], null, 2) + '\n', 'utf8');
  console.log(target, '->', nl.length, 'nl +', preservedEn.length, 'en');
}

write('src/content/services/all.json', services);
write('src/content/cases/all.json', cases);
write('src/content/articles/all.json', articles);
