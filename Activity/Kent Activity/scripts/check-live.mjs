import assert from 'node:assert/strict';

const base = new URL('https://devsarmiento11.github.io/MyWebProject/');
const pages = ['', 'sites/manaoag-church/', 'sites/pangasinan-capitol/', 'sites/umbrella-rock/'];
const resources = new Set();
for (const page of pages) {
  const url = new URL(page, base);
  const response = await fetch(url);
  assert.equal(response.status, 200, `${url} must load`);
  const html = await response.text();
  assert.match(html, /<main[^>]*id="main-content"/, 'Skip link destination exists');
  assert.match(html, /<h1[ >]/, 'Page has a main heading');
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = new URL(match[1].replaceAll('&amp;', '&'), url);
    if (target.origin !== base.origin) continue;
    assert.ok(target.pathname.startsWith(base.pathname), `Missing repository prefix: ${target}`);
    if (target.pathname === url.pathname && target.hash) {
      assert.ok(html.includes(`id="${target.hash.slice(1)}"`), `Missing anchor: ${target}`);
    }
    target.hash = '';
    resources.add(target.href);
  }
  for (const match of html.matchAll(/srcSet="([^"]+)"/gi)) {
    for (const candidate of match[1].split(',')) resources.add(new URL(candidate.trim().split(/\s+/)[0], url).href);
  }
  console.log(`PASS ${url}`);
}
for (const resource of resources) {
  const response = await fetch(resource, { method: 'HEAD' });
  assert.equal(response.status, 200, `Broken resource: ${resource}`);
}
console.log(`PASS ${pages.length} pages and ${resources.size} unique internal links/assets`);
