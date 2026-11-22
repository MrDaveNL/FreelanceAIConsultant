// Gebruik: node --test scripts/href-validation.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isValidHref } from './href-validation.mjs';

const routes = [
  { paths: { nl: '/nl/contact', en: '/contact' }, live: { nl: true, en: true } },
  { paths: { nl: '/nl/ai-consultancy', en: '/ai-consulting' }, live: { nl: true, en: false } },
];

test('isValidHref accepteert een volledige https-URL', () => {
  assert.equal(isValidHref('https://example.com/ergens', routes), true);
});

test('isValidHref accepteert een bestaand NL-pad', () => {
  assert.equal(isValidHref('/nl/contact', routes), true);
});

test('isValidHref accepteert een bestaand EN-pad', () => {
  assert.equal(isValidHref('/contact', routes), true);
});

test('isValidHref weigert een pad van een taal die niet live is', () => {
  assert.equal(isValidHref('/ai-consulting', routes), false);
});

test('isValidHref weigert een niet-bestaand pad', () => {
  assert.equal(isValidHref('/nl/typfout', routes), false);
});

test('isValidHref accepteert de mailto-uitzondering alleen met het juiste e-mailadres', () => {
  assert.equal(isValidHref('mailto:dave@freelanceaiconsultant.com', routes, 'dave@freelanceaiconsultant.com'), true);
  assert.equal(isValidHref('mailto:iemand-anders@example.com', routes, 'dave@freelanceaiconsultant.com'), false);
});

test('isValidHref weigert mailto zonder siteEmail-parameter', () => {
  assert.equal(isValidHref('mailto:dave@freelanceaiconsultant.com', routes), false);
});
