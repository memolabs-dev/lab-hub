import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { CURATED, publicExplorations } from '../src/curation.ts';
const projects = JSON.parse(fs.readFileSync(new URL('../public/projects.json', import.meta.url)));

test('selected evidence points to a public source or package, never an authenticated product', () => {
  for (const item of CURATED) {
    assert.equal(projects.find(p => p.name === item.name)?.visibility, 'PUBLIC');
    assert.equal(new URL(item.href).protocol, 'https:');
    assert.ok(['github.com', 'www.npmjs.com'].includes(new URL(item.href).hostname));
    for (const locale of ['fr', 'en']) {
      assert.ok(item.title[locale].length > 10);
      assert.ok(item.description[locale].length > 30);
      assert.ok(item.context[locale].length > 10);
    }
  }
});

test('private, missing-source and navigation-only entries cannot enter the exploration list', () => {
  const base = projects[0];
  const input = [base, { ...base, name: 'private', visibility: 'PRIVATE' }, { ...base, name: 'missing', repo: null }, { ...base, name: 'portfolio' }, { ...base, name: 'lab-hub' }];
  assert.deepEqual(publicExplorations(input).map(p => p.name), [base.name]);
});

test('the public catalog has localized notes and retains honest legacy context', () => {
  for (const project of publicExplorations(projects)) {
    assert.ok(project.notes?.fr && project.notes?.en, project.name);
    assert.equal(new URL(project.repo).protocol, 'https:');
  }
  assert.equal(projects.find(p => p.name === 'uni').status, 'archived');
  assert.equal(projects.find(p => p.name === 'weave').url, null);
  assert.equal(projects.find(p => p.name === 'lab-hub').repo, 'https://github.com/memolabs-dev/lab-hub');
});
