import { ChatError, emptyState, type State } from "./engine";

const local = globalThis as typeof globalThis & { omagelV2?: State };
const CAS = "local current = redis.call('GET', KEYS[1]); if (current or '') ~= ARGV[1] then return 0 end; redis.call('SET', KEYS[1], ARGV[2], 'EX', 604800); return 1";

async function command(args: (string | number)[]) {
  const response = await fetch(process.env.UPSTASH_REDIS_REST_URL!, {
    method: "POST", headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(args), cache: "no-store", signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new ChatError("Chat storage is unavailable. Please try again shortly.", 503);
  const data = await response.json();
  if (data.error) throw new ChatError("Chat storage is unavailable. Please try again shortly.", 503);
  return data.result;
}

export async function transact<T>(run: (state: State) => T): Promise<T> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    // Seamless in-memory fallback when Redis is not configured
    const state = structuredClone(local.omagelV2 || emptyState());
    const result = run(state);
    local.omagelV2 = state;
    return result;
  }
  const key = process.env.OMAGEL_REDIS_KEY || "devcalc:omagel:v2";
  for (let attempt = 0; attempt < 10; attempt++) {
    const raw = await command(["GET", key]) as string | null;
    const state: State = raw ? JSON.parse(raw) : emptyState();
    const result = run(state);
    if (await command(["EVAL", CAS, 1, key, raw || "", JSON.stringify(state)]) === 1) return result;
    await new Promise(resolve => setTimeout(resolve, 10 + Math.random() * 40));
  }
  throw new ChatError("Chat is busy. Please try again shortly.", 503);
}
