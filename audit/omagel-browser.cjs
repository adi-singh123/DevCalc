const puppeteer = require('puppeteer-core');
const fs = require('node:fs');
const base = 'http://localhost:3100';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
(async () => {
  const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'] });
  const results = {};
  const contexts = [];
  const post = async (route, body) => (await fetch(base + '/api/omagel/' + route, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) })).json();
  const clickText = (page, text) => page.evaluate(text => {
    const button = [...document.querySelectorAll('button')].find(b => b.textContent.includes(text));
    if (!button) throw new Error('Missing button: ' + text);
    button.click();
  }, text);
  async function page() {
    const context = await browser.createBrowserContext(); contexts.push(context);
    const p = await context.newPage();
    await p.setRequestInterception(true);
    p.on('request', r => r.url().startsWith(base) || r.url().startsWith('data:') ? r.continue() : r.abort());
    await p.goto(base + '/omagel-mini', { waitUntil: 'networkidle0' });
    return p;
  }
  try {
    const a = await page();
    results.seo = await a.evaluate(() => ({ title: document.title, canonical: document.querySelector('link[rel=canonical]')?.href || null, headings: [...document.querySelectorAll('h1,h2,h3,h4')].map(e => ({ tag: e.tagName, text: e.textContent })), meta: [...document.querySelectorAll('meta[name],meta[property]')].map(e => ({ key: e.name || e.getAttribute('property'), value: e.content })), schema: [...document.querySelectorAll('script[type="application/ld+json"]')].map(e => JSON.parse(e.textContent)), mainCount: document.querySelectorAll('main').length, omegleLinks: [...document.querySelectorAll('a')].filter(e => /omegle/i.test(e.href)).map(e => e.href) }));
    await a.setViewport({ width: 390, height: 844 });
    await a.screenshot({ path: 'audit/omagel-mobile-age.png', fullPage: true });
    await clickText(a, 'I Agree');
    results.mobileOverflow = await a.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    await a.screenshot({ path: 'audit/omagel-mobile-lobby.png', fullPage: true });
    await clickText(a, 'Random Text Chat'); await clickText(a, 'Start Text Chat'); await delay(1200);
    const uid = await a.evaluate(() => sessionStorage.getItem('omagel_uid'));
    await clickText(a, 'Cancel Queue');
    results.cancelQueue = await post('queue', { action: 'status', userId: uid });
    await post('queue', { action: 'leave', userId: uid });
    const b = await page(); await clickText(b, 'I Agree');
    await clickText(a, 'Start Text Chat'); await delay(300);
    await clickText(b, 'Random Text Chat'); await clickText(b, 'Start Text Chat');
    await a.waitForSelector('input[placeholder="Type your message..."]');
    await b.waitForSelector('input[placeholder="Type your message..."]');
    await a.type('input[placeholder="Type your message..."]', 'audit-message-123'); await a.keyboard.press('Enter');
    await delay(2500);
    results.textDelivery = { senderShowsMessage: await a.evaluate(() => document.body.innerText.includes('audit-message-123')), recipientShowsMessage: await b.evaluate(() => document.body.innerText.includes('audit-message-123')) };
    await a.click('button[title="Leave Chat"]'); await delay(1500);
    results.peerSeesDisconnect = await b.evaluate(() => document.body.innerText.includes('Stranger Disconnected'));
    await b.click('button[title="Leave Chat"]');
    await b.waitForFunction(() => document.body.innerText.includes('Random Video Chat'));
    await clickText(a, 'Random Video Chat'); await clickText(b, 'Random Video Chat');
    const signals = [];
    a.on('request', r => { if (r.url().includes('/api/omagel/signal') && r.postData()) { const d = JSON.parse(r.postData()); if (d.action === 'send') signals.push(d.signal.type); } });
    b.on('request', r => { if (r.url().includes('/api/omagel/signal') && r.postData()) { const d = JSON.parse(r.postData()); if (d.action === 'send') signals.push(d.signal.type); } });
    await clickText(a, 'Start Video Chat'); await delay(500); await clickText(b, 'Start Video Chat'); await delay(6000);
    results.video = { signalsSent: signals, a: await a.evaluate(() => [...document.querySelectorAll('video')].map(v => ({ muted: v.muted, hasStream: !!v.srcObject, readyState: v.readyState }))), b: await b.evaluate(() => [...document.querySelectorAll('video')].map(v => ({ muted: v.muted, hasStream: !!v.srcObject, readyState: v.readyState }))) };
    for (const p of [a,b]) { const button = await p.$('button[title="End Chat"]'); if (button) await button.click(); }
    const raw = await (await fetch(base + '/omagel-mini')).text();
    results.serverHtml = { h1Count: (raw.match(/<h1\b/g) || []).length, hasOmagel: raw.includes('Omagel Mini') };
    results.sitemapIncludesPage = (await (await fetch(base + '/sitemap.xml')).text()).includes('https://www.devcalc.in/omagel-mini');
    results.robots = await (await fetch(base + '/robots.txt')).text();
  } catch (e) { results.error = e.stack; process.exitCode = 1; }
  finally { await browser.close(); fs.writeFileSync('audit/omagel-browser-results.json', JSON.stringify(results, null, 2)); console.log(JSON.stringify(results, null, 2)); }
})();
