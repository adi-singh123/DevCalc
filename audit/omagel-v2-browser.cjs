const puppeteer = require('puppeteer-core');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { randomBytes } = require('node:crypto');
const base = process.env.AUDIT_BASE_URL || 'http://localhost:3100';
const results = [];
const delay = ms => new Promise(r => setTimeout(r, ms));
let browser;
async function test(name, fn) { try { await fn(); results.push({ name, pass: true }); } catch (e) { results.push({ name, pass: false, error: e.stack }); throw e; } }
async function click(p, text) {
  await p.waitForFunction(text => [...document.querySelectorAll('button')].some(b => b.textContent.includes(text) && !b.disabled), {}, text);
  await p.evaluate(text => [...document.querySelectorAll('button')].find(b => b.textContent.includes(text) && !b.disabled).click(), text);
}
async function post(token, route, body) {
  const r = await fetch(base + '/api/omagel/' + route, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token }, body: JSON.stringify(body) });
  return { status: r.status, data: await r.json() };
}
async function newPage() {
  const ctx = await browser.createBrowserContext();
  const page = await ctx.newPage();
  page.setDefaultTimeout(25000);
  await page.setRequestInterception(true);
  page.on('request', r => r.url().startsWith(base) || r.url().startsWith('data:') ? r.continue() : r.abort());
  await page.goto(base + '/omagel-mini', { waitUntil: 'networkidle0' });
  return page;
}
async function start(p, mode = 'text') {
  await click(p, mode === 'text' ? 'Random Text Chat' : 'Random Video Chat');
  await click(p, mode === 'text' ? 'Start Text Chat' : 'Start Video Chat');
  await delay(100);
  if (await p.$('dialog[open]')) {
    if (p.auditProfile) {
      await p.click('#chat-nickname', { clickCount: 3 }); await p.keyboard.press('Backspace');
      await p.type('#chat-nickname', p.auditProfile.name);
      await p.select('#chat-gender', p.auditProfile.gender);
    }
    await click(p, 'I am 18+ and agree');
  }
}
async function leave(p) {
  const button = await p.$('button[title="Leave Chat"],button[title="End Chat"]');
  if (button) await button.click(); else if (await p.evaluate(() => document.body.innerText.includes('Cancel Queue'))) await click(p, 'Cancel Queue');
  await p.waitForFunction(() => document.body.innerText.includes('Start a conversation'));
  await delay(300);
}
(async () => {
  try {
    browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, timeout: 60000, args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'] });
    const a = await newPage(); const b = await newPage();
    a.auditProfile = { name: 'Alex', gender: 'Man' };
    b.auditProfile = { name: 'Riya', gender: 'Woman' };
    await test('SEO/content: one H1, canonical, schema, reference, preview, no ads', async () => {
      const info = await a.evaluate(() => ({ h1: document.querySelectorAll('h1').length, canonical: document.querySelector('link[rel=canonical]')?.href, title: document.title, main: document.querySelectorAll('main').length, schema: [...document.querySelectorAll('script[type="application/ld+json"]')].map(s => JSON.parse(s.textContent)), ads: [...document.scripts].some(s => /adsbygoogle|googlesyndication|googletagmanager/.test(s.src)), omegle: !!document.querySelector('a[href="https://www.omegle.com/"]'), content: document.body.innerText }));
      assert.equal(info.h1, 1); assert.equal(info.main, 1); assert.equal(info.ads, false); assert.equal(info.omegle, true);
      assert.equal(info.canonical, 'https://www.devcalc.in/omagel-mini'); assert.equal((info.title.match(/DevCalc/g) || []).length, 1);
      assert.match(info.content, /Privacy before you connect/); assert.ok(info.schema[0]['@graph'].some(s => s['@type'] === 'WebApplication'));
      const img = await fetch(base + '/omagel-mini/opengraph-image'); assert.equal(img.status, 200); assert.match(img.headers.get('content-type'), /image\/png/);
      assert.match((await fetch(base + '/omagel-mini')).headers.get('x-robots-tag'), /noindex/);
      assert.match(await a.$eval('meta[name="robots"]', el => el.content), /noindex/);
    });
    await test('Promo markup absent from initial source but visible in UI and dismissible', async () => {
      const html = await (await fetch(base + '/calculators')).text();
      assert.doesNotMatch(html, /Meet &amp; Chat with Strangers on Omagel Mini|data-testid="omagel-promo"/);
      await a.goto(base + '/calculators', { waitUntil: 'networkidle0' });
      await a.waitForSelector('[data-testid="omagel-promo"]');
      await a.click('[aria-label="Close promotion"]');
      await a.waitForSelector('[data-testid="omagel-promo"]', { hidden: true });
      await a.reload({ waitUntil: 'networkidle0' });
      assert.equal(await a.$('[data-testid="omagel-promo"]'), null);
    });
    await test('Ad-bearing page to chat navigation creates a fresh ad-free document', async () => {
      await a.evaluate(() => sessionStorage.removeItem('omagel_promo_closed'));
      await a.goto(base + '/calculators', { waitUntil: 'networkidle0' });
      await a.waitForSelector('a[href="/omagel-mini"]');
      await a.evaluate(() => { window.auditDocumentMarker = true; });
      // Click the actual promo/header Next Link, including its navigation handler.
      await a.evaluate(() => document.querySelector('a[href="/omagel-mini"]').click());
      await a.waitForFunction(() => location.pathname === '/omagel-mini' && !window.auditDocumentMarker);
      assert.equal(await a.evaluate(() => [...document.scripts].some(s => /adsbygoogle|googlesyndication|googletagmanager/.test(s.src))), false);
    });
    await test('18+ gate can be cancelled; queue cancellation removes server presence', async () => {
      await click(a, 'Start Text Chat'); await click(a, 'Cancel');
      assert.equal(await a.evaluate(() => !!document.querySelector('dialog[open]')), false);
      await start(a); await a.waitForFunction(() => document.body.innerText.includes('Looking for a stranger'));
      await click(a, 'Cancel Queue'); await delay(600);
      const token = await a.evaluate(() => sessionStorage.getItem('omagel_token_v2'));
      assert.equal((await post(token, 'queue', { action: 'status' })).data.status, 'idle');
    });
    await test('Text messages deliver both directions and typing appears', async () => {
      await start(a); await start(b);
      for (const p of [a,b]) await p.waitForSelector('input[aria-label="Message to stranger"]');
      assert.match(await a.$eval('[data-testid="peer-profile"]', el => el.textContent), /Riya.*Woman/);
      assert.match(await b.$eval('[data-testid="peer-profile"]', el => el.textContent), /Alex.*Man/);
      await a.type('input[aria-label="Message to stranger"]', 'Hello from A');
      await b.waitForFunction(() => document.body.innerText.includes('Stranger is typing'));
      await a.keyboard.press('Enter'); await b.waitForFunction(() => document.body.innerText.includes('Hello from A'));
      await b.type('input[aria-label="Message to stranger"]', 'Hello from B'); await b.keyboard.press('Enter');
      await a.waitForFunction(() => document.body.innerText.includes('Hello from B'));
      await a.setViewport({ width: 390, height: 844 });
      assert.equal(await a.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      await a.screenshot({ path: 'audit/omagel-v2-text-mobile.png', fullPage: true });
    });
    await test('Next notifies peer and re-enters matchmaking', async () => {
      await click(a, 'Next'); await b.waitForFunction(() => document.body.innerText.includes('Stranger Disconnected'));
      await a.waitForFunction(() => document.body.innerText.includes('Looking for a stranger'));
      await click(b, 'Next');
      for (const p of [a,b]) await p.waitForSelector('input[aria-label="Message to stranger"]:not(:disabled)');
    });
    await test('Leave notifies peer', async () => {
      await leave(a); await b.waitForFunction(() => document.body.innerText.includes('Stranger Disconnected')); await leave(b);
    });
    await test('Video negotiates offer/answer and both remote feeds play', async () => {
      await a.setViewport({ width: 1280, height: 900 });
      await start(a, 'video'); await start(b, 'video');
      for (const p of [a,b]) await p.waitForFunction(() => [...document.querySelectorAll('video')].some(v => !v.muted && v.srcObject && v.readyState >= 2), { timeout: 25000 });
      assert.match(await a.$eval('[data-testid="peer-profile"]', el => el.textContent), /Riya.*Woman/);
      assert.match(await b.$eval('[data-testid="peer-profile"]', el => el.textContent), /Alex.*Man/);
      await a.click('button[title="Mute Mic"]');
      assert.equal(await a.evaluate(() => [...document.querySelectorAll('video')].find(v => v.muted).srcObject.getAudioTracks()[0].enabled), false);
      await a.click('button[title="Turn Video Off"]');
      assert.equal(await a.evaluate(() => [...document.querySelectorAll('video')].find(v => v.muted).srcObject.getVideoTracks()[0].enabled), false);
      await a.screenshot({ path: 'audit/omagel-v2-video.png', fullPage: true });
      await leave(a); await leave(b);
    });
    await test('Report derives peer, disconnects, and prevents rematch', async () => {
      await start(a); await start(b);
      await a.waitForSelector('button[title="Report or Block"]'); await a.click('button[title="Report or Block"]');
      await click(a, 'Submit & Block'); await a.waitForFunction(() => document.body.innerText.includes('Report saved'));
      await b.waitForFunction(() => document.body.innerText.includes('Stranger Disconnected'));
      await click(a, 'Next'); await click(b, 'Next'); await delay(1600);
      for (const p of [a,b]) assert.equal(await p.evaluate(() => document.body.innerText.includes('Looking for a stranger')), true);
      await leave(a); await leave(b);
    });
    await test('API rejects missing auth, invalid input and outsider session access', async () => {
      assert.equal((await post('', 'queue', { action: 'join' })).status, 401);
      const t1 = randomBytes(32).toString('hex'), t2 = randomBytes(32).toString('hex'), t3 = randomBytes(32).toString('hex');
      assert.equal((await post(t1, 'queue', { action: 'join', mode: 'invalid', acceptedAge: true })).status, 400);
      await post(t1, 'queue', { action: 'join', mode: 'text', interests: [], acceptedAge: true });
      const { data } = await post(t2, 'queue', { action: 'join', mode: 'text', interests: [], acceptedAge: true });
      assert.equal((await post(t3, 'signal', { action: 'poll', sessionId: data.session.id })).status, 403);
      await post(t1, 'queue', { action: 'leave' }); await post(t2, 'queue', { action: 'leave' });
    });
    await test('Chat omitted from sitemap and blocked in robots; ordinary pages respond', async () => {
      assert.doesNotMatch(await (await fetch(base + '/sitemap.xml')).text(), /omagel-mini/);
      assert.match(await (await fetch(base + '/robots.txt')).text(), /Disallow: \/omagel-mini/);
      for (const route of ['/', '/age-calculator', '/contact', '/privacy-policy', '/robots.txt']) assert.equal((await fetch(base + route)).status, 200);
    });
  } catch (e) { console.error(e.message); process.exitCode = 1; }
  finally { if (browser) await browser.close(); fs.writeFileSync('audit/omagel-v2-browser-results.json', JSON.stringify(results, null, 2)); console.log(JSON.stringify(results, null, 2)); }
})();
