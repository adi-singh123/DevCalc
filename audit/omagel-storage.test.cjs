const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const ts = require('typescript');
const fs = require('node:fs');
const crypto = require('node:crypto');

function load(file, extras = {}) {
  const context = { exports: {}, require: name => name === './engine' ? engine : name === './profile' ? load('src/lib/omagel/profile.ts') : require(name), structuredClone, AbortSignal, setTimeout, process: { env: {} }, ...extras };
  vm.runInNewContext(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, context);
  return context.exports;
}
const engine = load('src/lib/omagel/engine.ts');

test('two isolated server instances share atomic matchmaking via REST adapter', async () => {
  let raw = null, conflicts = 0;
  // Protocol fake, not a live Redis service: exercise competing GET/EVAL requests.
  const fetch = async (_url, options) => {
    const args = JSON.parse(options.body);
    let result;
    if (args[0] === 'GET') result = raw;
    else {
      assert.equal(args[0], 'EVAL'); assert.equal(args[2], 1);
      if ((raw || '') === args[4]) { raw = args[5]; result = 1; }
      else { conflicts++; result = 0; }
    }
    return { ok: true, json: async () => ({ result }) };
  };
  const env = { UPSTASH_REDIS_REST_URL: 'https://test.invalid', UPSTASH_REDIS_REST_TOKEN: 'fake', VERCEL: '1' };
  const a = load('src/lib/omagel/store.ts', { fetch, process: { env } });
  const b = load('src/lib/omagel/store.ts', { fetch, process: { env } });
  await Promise.all([
    a.transact(s => engine.queueAction(s, 'a', { action: 'join', mode: 'text', acceptedAge: true })),
    b.transact(s => engine.queueAction(s, 'b', { action: 'join', mode: 'text', acceptedAge: true })),
  ]);
  const stored = JSON.parse(raw);
  assert.equal(Object.keys(stored.sessions).length, 1);
  assert.equal(stored.guests.a.session, stored.guests.b.session);
  assert.ok(conflicts > 0);
  const prior = raw;
  await assert.rejects(a.transact(s => { s.guests = {}; throw new Error('abort'); }));
  assert.equal(raw, prior);
});

test('STUN-only video works with production/Vercel environment when TURN is absent', () => {
  const { iceConfiguration } = load('src/lib/omagel/ice.ts', { process: { env: { VERCEL: '1', NODE_ENV: 'production' } } });
  const config = iceConfiguration('guest');
  assert.match(config.iceServers[0].urls, /^stun:/);
});

test('configured TURN uses expiring HMAC credentials, not the signing secret', () => {
  const secret = 'test-only-shared-secret';
  const { iceConfiguration } = load('src/lib/omagel/ice.ts', { process: { env: { OMAGEL_TURN_URLS: 'turn:relay.test:3478', OMAGEL_TURN_SECRET: secret } } });
  const relay = iceConfiguration('guest').iceServers[1];
  const expires = Number(relay.username.split(':')[0]);
  assert.ok(expires > Date.now() / 1000 && expires <= Date.now() / 1000 + 3601);
  assert.equal(relay.credential, crypto.createHmac('sha1', secret).update(relay.username).digest('base64'));
  assert.ok(!JSON.stringify(relay).includes(secret));
});
