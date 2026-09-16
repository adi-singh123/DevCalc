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
  await check('Sitemap keeps calculators', async () => {
    const res = await fetch(base + '/sitemap.xml'); assert.equal(res.status, 200);
    const xml = await res.text();
    assert.match(xml, /https:\/\/www\.devcalc\.in\/age-calculator/);
  });
  for (const route of ['/', '/calculators', '/age-calculator', '/contact', '/privacy-policy']) {
    await check('Public page works without chat navigation: ' + route, async () => {
      const res = await fetch(base + route); assert.equal(res.status, 200);
      const html = await res.text();
      assert.match(html, /<h1\b/);
      if (route === '/privacy-policy') {
        assert.match(html, /web beacons/);
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
