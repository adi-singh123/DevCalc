// Read-only source audit: transpiles the matchmaking module into isolated memory.
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const source = fs.readFileSync('src/lib/omagel/matchmaking.ts', 'utf8');
function fresh() {
  const sandbox = { exports: {}, Map, Set, Date, Math };
  vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, sandbox);
  return sandbox.exports;
}
const results = [];
function check(name, fn) {
  try { const evidence = fn(fresh()); results.push({ name, ...evidence }); }
  catch (error) { results.push({ name, error: error.message }); }
}
function pair(m) { m.joinQueue('a', 'text'); return m.joinQueue('b', 'text').session; }
check('Two users match', m => ({ pass: !!pair(m) }));
check('Client peer alias delivers to counterpart', m => {
  const s = pair(m);
  const accepted = m.sendSignal({ id: 'test', sessionId: s.id, senderId: 'a', recipientId: 'peer', type: 'chat-message', payload: { text: 'hello' } });
  const received = m.fetchSignals('b');
  return { pass: received.length === 1, accepted, received, misplaced: m.fetchSignals('peer') };
});
check('End session notifies counterpart', m => {
  const s = pair(m); m.endSession(s.id, 'a');
  const received = m.fetchSignals('b'); return { pass: received.some(s => s.type === 'leave'), received };
});
check('Non-member cannot inject signals', m => {
  const s = pair(m);
  const accepted = m.sendSignal({ id: 'forged', sessionId: s.id, senderId: 'outsider', recipientId: 'b', type: 'chat-message', payload: { text: 'forged' } });
  return { pass: !accepted, accepted, received: m.fetchSignals('b') };
});
check('Non-member cannot terminate session', m => {
  const s = pair(m); m.endSession(s.id, 'outsider'); return { pass: s.status === 'active', status: s.status };
});
check('Repeated join preserves active session', m => {
  const s = pair(m); const result = m.joinQueue('a', 'text');
  return { pass: result.session?.id === s.id, result, stats: m.getStats() };
});
check('Client report payload prevents rematching', m => {
  const s = pair(m);
  m.addReport({ reporterId: 'a', reportedSessionId: s.id, category: 'spam', timestamp: Date.now() });
  m.endSession(s.id, 'a'); m.joinQueue('a', 'text');
  const result = m.joinQueue('b', 'text'); return { pass: !result.session, rematched: !!result.session };
});
check('Leaving removes online presence', m => {
  m.joinQueue('a', 'text'); m.leaveQueue('a'); return { pass: m.getStats().onlineUsers === 0, stats: m.getStats() };
});
console.log(JSON.stringify(results, null, 2));
