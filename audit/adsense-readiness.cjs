// Run against `npm run start -- --port 3100` after building.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const base = process.env.AUDIT_BASE_URL || 'http://localhost:3100';
const results = [];
async function check(name, run) {
  try { await run(); results.push({ name, pass: true }); }
  catch (error) { results.push({ name, pass: false, error: error.message }); }
}
(async () => {
  for (const suffix of ['', '?source=old-link']) {
    await check('Withdrawn chat is 410, noindex and script-free: ' + suffix, async () => {
      const res = await fetch(base + '/omagel-mini' + suffix);
      assert.equal(res.status, 410);
      assert.match(res.headers.get('content-type'), /text\/html/);
      assert.match(res.headers.get('x-robots-tag'), /noindex/);
      assert.match(res.headers.get('content-security-policy'), /default-src 'none'/);
      assert.equal(res.headers.get('permissions-policy'), 'camera=(), microphone=()');
      const html = await res.text();
      assert.match(html, /Omagel Mini is unavailable/);
      assert.equal((html.match(/<h1\b/g) || []).length, 1);
      assert.doesNotMatch(html, /<script\b|adsbygoogle|googlesyndication|<iframe\b|<video\b/i);
    });
  }
  await check('HEAD preserves withdrawal and indexing status', async () => {
    const res = await fetch(base + '/omagel-mini', { method: 'HEAD' });
    assert.equal(res.status, 410);
    assert.match(res.headers.get('x-robots-tag'), /noindex/);
    assert.equal(await res.text(), '');
  });
  await check('Old Next client navigation cannot fetch a chat UI', async () => {
    const res = await fetch(base + '/omagel-mini?_rsc=audit', { headers: { RSC: '1' } });
    assert.equal(res.status, 410);
    assert.doesNotMatch(await res.text(), /<script\b|adsbygoogle|Start Video Chat/);
  });
  for (const [route, method, body] of [
    ['queue', 'GET'], ['queue', 'POST', { action: 'join', userId: 'audit', mode: 'text' }],
    ['queue', 'POST', { action: 'status', userId: 'audit' }],
    ['signal', 'POST', { action: 'poll', userId: 'audit' }],
    ['signal', 'POST', { action: 'send', signal: {} }],
    ['report', 'POST', { report: { reporterId: 'audit' } }],
  ]) {
    await check(`API disabled: ${method} ${route} ${body?.action || ''}`, async () => {
      const res = await fetch(base + '/api/omagel/' + route, {
        method, ...(body ? { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } : {}),
      });
      assert.equal(res.status, 410);
      assert.equal(res.headers.get('cache-control'), 'no-store');
      const data = await res.json();
      assert.equal(data.success, false);
      assert.match(data.error, /unavailable/);
      assert.equal(data.session, undefined);
      assert.equal(data.signals, undefined);
    });
  }
  await check('Sitemap removes Omagel and keeps calculators', async () => {
    const res = await fetch(base + '/sitemap.xml'); assert.equal(res.status, 200);
    const xml = await res.text();
    assert.doesNotMatch(xml, /omagel-mini/);
    assert.match(xml, /https:\/\/www\.devcalc\.in\/age-calculator/);
  });
  for (const route of ['/', '/calculators', '/age-calculator', '/contact', '/privacy-policy']) {
    await check('Public page works without chat navigation: ' + route, async () => {
      const res = await fetch(base + route); assert.equal(res.status, 200);
      const html = await res.text();
      assert.doesNotMatch(html, /href="\/omagel-mini"/);
      assert.match(html, /<h1\b/);
      if (route === '/privacy-policy') {
        assert.match(html, /web beacons/);
        assert.match(html, /Omagel Mini Is Unavailable/);
        assert.match(html, /September 8, 2026/);
      }
    });
  }
  await check('AdSense ownership file is preserved', async () => {
    const res = await fetch(base + '/ads.txt'); assert.equal(res.status, 200);
    assert.match(await res.text(), /google\.com, pub-3757135541422436, DIRECT/);
  });
  fs.writeFileSync('audit/adsense-readiness-results.json', JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
  if (results.some(result => !result.pass)) process.exitCode = 1;
})();
