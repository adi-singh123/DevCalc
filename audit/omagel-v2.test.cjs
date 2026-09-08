const { test } = require('node:test');
const assert = require('node:assert/strict');
const ts = require('typescript');
const fs = require('node:fs');
const vm = require('node:vm');
const sandbox = { exports: {}, require, Date, structuredClone };
vm.runInNewContext(ts.transpileModule(fs.readFileSync('src/lib/omagel/engine.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, sandbox);
const e = sandbox.exports;
const join = (s, id, mode = 'text', interests = []) => e.queueAction(s, id, { action: 'join', mode, interests, acceptedAge: true });
const pair = s => { join(s, 'alice'); return join(s, 'bob').session.id; };

test('queue matches same mode and repeated join preserves session', () => {
  const s = e.emptyState(); join(s, 'video', 'video');
  const id = pair(s); assert.equal(join(s, 'alice').session.id, id);
  assert.equal(e.view(s, 'video').status, 'queued');
});
test('send routes to peer and poll requires acknowledgement before deleting', () => {
  const s = e.emptyState(), id = pair(s);
  e.signalAction(s, 'alice', { action: 'send', sessionId: id, id: 'msg-1', type: 'chat-message', payload: { text: 'hi' }, recipientId: 'attacker' });
  const poll = ack => e.signalAction(s, 'bob', { action: 'poll', sessionId: id, ack });
  assert.equal(poll([]).signals[0].payload.text, 'hi');
  assert.equal(poll([]).signals.length, 1);
  assert.equal(poll(['msg-1']).signals.length, 0);
  assert.equal(s.inboxes.attacker, undefined);
});
test('outsider cannot poll, inject signals, report, or end a session', () => {
  const s = e.emptyState(), id = pair(s);
  for (const action of ['send', 'poll']) assert.throws(() => e.signalAction(s, 'outsider', { action, sessionId: id }), /not found/);
  assert.throws(() => e.reportAction(s, 'outsider', { sessionId: id, category: 'spam', details: '' }), /not found/);
  assert.throws(() => e.finish(s, 'outsider', id), /belong/);
  assert.equal(e.view(s, 'alice').status, 'matched');
});
test('cancel removes queued user; stale end cannot terminate newer session', () => {
  const s = e.emptyState(); join(s, 'alice');
  e.queueAction(s, 'alice', { action: 'leave' }); assert.equal(e.view(s, 'alice').status, 'idle');
  const old = pair(s); e.finish(s, 'alice', old);
  join(s, 'charlie'); const next = join(s, 'alice').session.id;
  e.queueAction(s, 'alice', { action: 'leave', sessionId: old });
  assert.equal(e.view(s, 'alice').session.id, next);
});
test('disconnect signal reaches peer after session ends', () => {
  const s = e.emptyState(), id = pair(s); e.finish(s, 'alice', id);
  const result = e.signalAction(s, 'bob', { action: 'poll', sessionId: id });
  assert.equal(result.ended, true); assert.equal(result.signals[0].type, 'leave');
});
test('report derives counterpart and mutual block prevents rematching', () => {
  const s = e.emptyState(), id = pair(s);
  e.reportAction(s, 'alice', { sessionId: id, category: 'spam', details: 'spam', reportedUserId: 'outsider' });
  assert.equal(s.reports[0].peer, 'bob');
  join(s, 'alice'); assert.equal(join(s, 'bob').session, null);
});
test('shared topics preferred among waiting eligible people', () => {
  const s = e.emptyState(); join(s, 'a', 'text', ['music']);
  // Keep two candidates waiting by blocking only that pair.
  s.blocks.a = [{ peer: 'b', expires: Date.now() + 10000 }];
  join(s, 'b', 'text', ['coding']);
  const id = join(s, 'c', 'text', ['coding']).session.id;
  assert.equal(s.sessions[id].a, 'b');
});
test('stale sessions, online presence, expired blocks and reports are pruned', () => {
  const s = e.emptyState(); pair(s);
  s.blocks.a = [{ peer: 'b', expires: Date.now() - 1 }];
  s.reports.push({ at: Date.now() - 8 * 86400000 });
  e.prune(s, Date.now() + 46000);
  assert.equal(e.view(s, 'alice').onlineUsers, 0);
  assert.equal(Object.keys(s.blocks).length, 0); assert.equal(s.reports.length, 0);
});
test('age, mode, interests, message size and signal types are validated', () => {
  const s = e.emptyState();
  assert.throws(() => e.queueAction(s, 'x', { action: 'join', mode: 'text' }), /18/);
  assert.throws(() => join(s, 'x', 'invalid'), /Choose/);
  assert.throws(() => join(s, 'x', 'text', [12]), /interests/);
  const id = pair(s);
  for (const [type, payload] of [['chat-message', { text: 'x'.repeat(501) }], ['offer', { type: 'answer', sdp: '' }], ['madeup', {}]]) {
    assert.throws(() => e.signalAction(s, 'alice', { action: 'send', sessionId: id, id: 'x', type, payload }));
  }
});
test('inbox and request limits are enforced', () => {
  const s = e.emptyState(), id = pair(s);
  for (let n = 0; n < 128; n++) e.signalAction(s, 'alice', { action: 'send', sessionId: id, id: 'm' + n, type: 'chat-message', payload: { text: 'hi' } });
  assert.throws(() => e.signalAction(s, 'alice', { action: 'send', sessionId: id, id: 'overflow', type: 'typing', payload: { isTyping: true } }), /slow/);
  for (let n = 0; n < 5; n++) e.limit(s, 'test', 5);
  assert.throws(() => e.limit(s, 'test', 5), /Too many/);
});
