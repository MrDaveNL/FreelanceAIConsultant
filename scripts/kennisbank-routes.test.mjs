// Gebruik: node --test scripts/kennisbank-routes.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  expectedKennisbankUrl,
  assertKennisbankUrl,
  assertUniqueKennisbankIds,
  KennisbankUrlError,
  KennisbankIdError,
} from './kennisbank-routes.mjs';

test('expectedKennisbankUrl leidt de NL-url af van de mapnaam', () => {
  assert.equal(expectedKennisbankUrl('nl', 'ai-voorbeelden'), '/nl/kennisbank/ai-voorbeelden');
});

test('expectedKennisbankUrl leidt de EN-url af van de mapnaam (zonder taalprefix)', () => {
  assert.equal(expectedKennisbankUrl('en', 'ai-examples'), '/knowledge-base/ai-examples');
});

test('expectedKennisbankUrl geeft de hub-url zonder mapnaam-segment', () => {
  assert.equal(expectedKennisbankUrl('nl', ''), '/nl/kennisbank');
  assert.equal(expectedKennisbankUrl('en', ''), '/knowledge-base');
});

test('assertKennisbankUrl laat een url die bij de mapnaam past ongemoeid', () => {
  assert.doesNotThrow(() =>
    assertKennisbankUrl({
      lang: 'nl',
      folderName: 'ai-voorbeelden',
      url: '/nl/kennisbank/ai-voorbeelden',
      id: 'C3-06',
      file: 'src/content/pages/nl/kennisbank/ai-voorbeelden/index.md',
    })
  );
});

test('assertKennisbankUrl faalt als de url niet bij de mapnaam past (map vs. url-mismatch)', () => {
  assert.throws(
    () =>
      assertKennisbankUrl({
        lang: 'nl',
        folderName: 'ai-specialisten',
        url: '/nl/kennisbank/test',
        id: 'C3-99',
        file: 'src/content/pages/nl/kennisbank/ai-specialisten/index.md',
      }),
    KennisbankUrlError
  );
});

test('assertKennisbankUrl faalt met een foutmelding die pagina-id, url en verwachte url noemt', () => {
  try {
    assertKennisbankUrl({
      lang: 'nl',
      folderName: 'ai-specialisten',
      url: '/nl/kennisbank/test',
      id: 'C3-99',
      file: 'src/content/pages/nl/kennisbank/ai-specialisten/index.md',
    });
    assert.fail('had moeten gooien');
  } catch (err) {
    assert.match(err.message, /C3-99/);
    assert.match(err.message, /\/nl\/kennisbank\/test/);
    assert.match(err.message, /\/nl\/kennisbank\/ai-specialisten/);
  }
});

test('assertKennisbankUrl accepteert de hub-url zonder submap', () => {
  assert.doesNotThrow(() =>
    assertKennisbankUrl({
      lang: 'en',
      folderName: '',
      url: '/knowledge-base',
      id: 'P08',
      file: 'src/content/pages/en/kennisbank/index.md',
    })
  );
});

test('assertUniqueKennisbankIds laat unieke id\'s binnen een taal ongemoeid', () => {
  assert.doesNotThrow(() =>
    assertUniqueKennisbankIds([
      { id: 'C3-06', lang: 'nl', file: 'a/index.md' },
      { id: 'C3-07', lang: 'nl', file: 'b/index.md' },
    ])
  );
});

test('assertUniqueKennisbankIds faalt bij een dubbel id binnen dezelfde taal', () => {
  assert.throws(
    () =>
      assertUniqueKennisbankIds([
        { id: 'C3-06', lang: 'nl', file: 'a/index.md' },
        { id: 'C3-06', lang: 'nl', file: 'b/index.md' },
      ]),
    KennisbankIdError
  );
});

test('assertUniqueKennisbankIds noemt beide bestanden en de taal in de foutmelding', () => {
  try {
    assertUniqueKennisbankIds([
      { id: 'C3-06', lang: 'nl', file: 'a/index.md' },
      { id: 'C3-06', lang: 'nl', file: 'b/index.md' },
    ]);
    assert.fail('had moeten gooien');
  } catch (err) {
    assert.match(err.message, /C3-06/);
    assert.match(err.message, /nl/);
    assert.match(err.message, /a\/index\.md/);
    assert.match(err.message, /b\/index\.md/);
  }
});
