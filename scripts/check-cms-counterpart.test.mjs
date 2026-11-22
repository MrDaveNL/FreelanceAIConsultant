// Gebruik: node --test scripts/check-cms-counterpart.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mismatchedFields } from './check-cms-counterpart.mjs';

test('mismatchedFields geeft niets terug als cluster en parent overeenkomen', () => {
  const page = { cluster: '3. AI Automatisering', parent: 'C3-00' };
  const counterpart = { cluster: '3. AI Automatisering', parent: 'C3-00' };
  assert.deepEqual(mismatchedFields(page, counterpart), []);
});

test('mismatchedFields signaleert een afwijkend cluster', () => {
  const page = { cluster: '3. AI Automatisering', parent: 'C3-00' };
  const counterpart = { cluster: '5. AI Development', parent: 'C3-00' };
  assert.deepEqual(mismatchedFields(page, counterpart), ['cluster']);
});

test('mismatchedFields signaleert een afwijkende parent', () => {
  const page = { cluster: '3. AI Automatisering', parent: 'C3-00' };
  const counterpart = { cluster: '3. AI Automatisering', parent: 'C3-05' };
  assert.deepEqual(mismatchedFields(page, counterpart), ['parent']);
});

test('mismatchedFields behandelt een ontbrekende parent (hub) hetzelfde als een lege string', () => {
  const page = { cluster: '10. Kennisbank AI tools', parent: undefined };
  const counterpart = { cluster: '10. Kennisbank AI tools', parent: '' };
  assert.deepEqual(mismatchedFields(page, counterpart), []);
});

test('mismatchedFields signaleert beide velden tegelijk', () => {
  const page = { cluster: '3. AI Automatisering', parent: 'C3-00' };
  const counterpart = { cluster: '5. AI Development', parent: 'C5-00' };
  assert.deepEqual(mismatchedFields(page, counterpart), ['cluster', 'parent']);
});
