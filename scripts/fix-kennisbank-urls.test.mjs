// Gebruik: node --test scripts/fix-kennisbank-urls.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fixKennisbankUrl } from './fix-kennisbank-urls.mjs';

const page = (url) => `---\nid: C3-99\nlang: nl\nurl: ${url}\nparent: C3-00\nsources:\n  - title: "x"\n    url: "https://example.com"\n---\n\nTekst.\n`;

test('fixKennisbankUrl laat een url die al bij de mapnaam past ongemoeid (geeft null)', () => {
  const content = page('/nl/kennisbank/ai-voorbeelden');
  assert.equal(fixKennisbankUrl(content, 'nl', 'ai-voorbeelden'), null);
});

test('fixKennisbankUrl corrigeert een url die niet bij de mapnaam past', () => {
  const content = page('/nl/kennisbank/test');
  const fixed = fixKennisbankUrl(content, 'nl', 'ai-specialisten');
  assert.match(fixed, /^url: \/nl\/kennisbank\/ai-specialisten$/m);
});

test('fixKennisbankUrl corrigeert een leeg (verborgen) url-veld', () => {
  const content = page('');
  const fixed = fixKennisbankUrl(content, 'en', 'ai-examples');
  assert.match(fixed, /^url: \/knowledge-base\/ai-examples$/m);
});

test('fixKennisbankUrl raakt de geïndenteerde url onder sources niet aan', () => {
  const content = page('/nl/kennisbank/test');
  const fixed = fixKennisbankUrl(content, 'nl', 'ai-specialisten');
  assert.match(fixed, /url: "https:\/\/example\.com"/);
});

test('fixKennisbankUrl leidt de hub-url af zonder mapnaam-segment', () => {
  const content = page('/nl/kennisbank/test');
  const fixed = fixKennisbankUrl(content, 'nl', '');
  assert.match(fixed, /^url: \/nl\/kennisbank$/m);
});
