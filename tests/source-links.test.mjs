import assert from 'node:assert/strict';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { rewriteLink } from '../integrations/source-links.mjs';

const source = fileURLToPath(new URL('../src/content/docs/internals/documentation-home.md', import.meta.url));

test('source links become site links at the root or at a preview base', () => {
  assert.equal(rewriteLink('../index.md#platform', source, '/'), '/#platform');
  assert.equal(rewriteLink('../index.md', source, '/preview/'), '/preview/');
  assert.equal(rewriteLink('documentation-home.md#decision', source, '/'), '/internals/documentation-home/#decision');
  assert.equal(rewriteLink('#decision', source, '/'), '#decision');
});

test('repository references resolve to the documented branch', () => {
  assert.equal(rewriteLink('../../../../README.md#publish', source, '/'),
    'https://github.com/allors/allors.github.io/blob/main/README.md#publish');
  assert.equal(rewriteLink('https://example.com/guide.md', source, '/'), 'https://example.com/guide.md');
});

test('broken source links fail the build with a useful target', () => {
  assert.throws(() => rewriteLink('../missing.md', source, '/'), /missing\.md/);
});

test('repository fragments are checked against the local Markdown headings', () => {
  assert.equal(rewriteLink('../../../../AGENTS.md#documentation', source, '/'),
    'https://github.com/allors/allors.github.io/blob/main/AGENTS.md#documentation');
  assert.throws(() => rewriteLink('../../../../AGENTS.md#no-such-heading', source, '/'),
    /no-such-heading.*AGENTS\.md/);
  const fixture = 'https://github.com/allors/allors.github.io/blob/main/tests/fixtures/anchors.md';
  for (const id of ['added', 'added-1', 'use-rewritelink-in-astro', 'explicit-anchor']) {
    assert.equal(rewriteLink(`../../../../tests/fixtures/anchors.md#${id}`, source, '/'), `${fixture}#${id}`);
  }
  assert.throws(() => rewriteLink('../../../../tests/fixtures/anchors.md#not-a-heading', source, '/'), /not-a-heading/);
});

test('fragments on repository files that are not Markdown are left alone', () => {
  assert.equal(rewriteLink('../../../../scripts/check-links.mjs#L9', source, '/'),
    'https://github.com/allors/allors.github.io/blob/main/scripts/check-links.mjs#L9');
});
