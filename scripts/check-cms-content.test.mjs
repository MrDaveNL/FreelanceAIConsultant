// Gebruik: node --test scripts/check-cms-content.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { addedLines, findForbidden, removedTokens } from './check-cms-content.mjs';

const diff = (body) => `diff --git a/x b/x\nindex 111..222 100644\n--- a/x\n+++ b/x\n${body}`;

test('addedLines pakt alleen +-regels, niet +++ of context', () => {
  const lines = addedLines(diff('@@ -1,2 +1,3 @@\n context\n+nieuwe regel\n-oude regel\n'));
  assert.deepEqual(lines, [{ file: 'x', text: 'nieuwe regel' }]);
});

test('addedLines negeert een verwijderd bestand (+++ /dev/null)', () => {
  const removedDiff = 'diff --git a/x b/x\ndeleted file mode 100644\n--- a/x\n+++ /dev/null\n@@ -1 +0,0 @@\n-weg\n';
  assert.deepEqual(addedLines(removedDiff), []);
});

test('findForbidden signaleert TEST als los woord, niet "testen"', () => {
  const hits = findForbidden([{ file: 'x', text: 'We testen dit nog.' }]);
  assert.equal(hits.length, 0);
});

test('findForbidden signaleert TEST als los hoofdletterwoord', () => {
  const hits = findForbidden([{ file: 'x', text: 'TEST: dit mag niet live.' }]);
  assert.equal(hits.length, 1);
  assert.equal(hits[0].hit, 'TEST');
});

test('findForbidden signaleert TODO, FIXME, lorem, xxx en em dash', () => {
  const cases = ['nog een TODO hier', 'FIXME later', 'lorem ipsum tekst', 'placeholder xxx waarde', 'tekst — met em dash'];
  for (const text of cases) {
    const hits = findForbidden([{ file: 'x', text }]);
    assert.ok(hits.length >= 1, `geen treffer voor: ${text}`);
  }
});

test('findForbidden laat normale Nederlandse tekst met "test" als deel van een woord erin ongemoeid', () => {
  const hits = findForbidden([{ file: 'x', text: 'We testen de aanpassing, geen contest of attestatie hier.' }]);
  assert.equal(hits.length, 0);
});

test('removedTokens vindt niets als de tokens ongewijzigd blijven', () => {
  const before = 'tekst {{timing:ai-readiness-assessment}} meer tekst';
  const after = 'tekst {{timing:ai-readiness-assessment}} iets andere tekst';
  assert.deepEqual(removedTokens(before, after), []);
});

test('removedTokens signaleert een verwijderd token', () => {
  const before = 'tekst {{timing:ai-readiness-assessment}} meer tekst';
  const after = 'tekst meer tekst, zonder token';
  const removed = removedTokens(before, after);
  assert.equal(removed.length, 1);
  assert.equal(removed[0].token, '{{timing:ai-readiness-assessment}}');
  assert.equal(removed[0].before, 1);
  assert.equal(removed[0].after, 0);
});

test('removedTokens signaleert een gewijzigd token (ander slug ingetypt)', () => {
  const before = 'prijs: {{price:ai-readiness-assessment}}';
  const after = 'prijs: {{price:ai-strategy-sprint}}';
  const removed = removedTokens(before, after);
  assert.equal(removed.length, 1);
  assert.equal(removed[0].token, '{{price:ai-readiness-assessment}}');
});

test('removedTokens laat een extra toegevoegd token ongemoeid', () => {
  const before = '{{timing:ai-readiness-assessment}}';
  const after = '{{timing:ai-readiness-assessment}} en ook {{price:ai-readiness-assessment}}';
  assert.deepEqual(removedTokens(before, after), []);
});
