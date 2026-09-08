import { createHash } from "node:crypto";
import { ChatError, limit, prune, queueAction, reportAction, signalAction } from "./engine";
import { transact } from "./store";
import { iceConfiguration } from "./ice";

const headers = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" };
export async function handleChat(request: Request, kind: "queue" | "signal" | "report") {
  try {
    const bearer = request.headers.get("authorization")?.replace(/^Bearer /, "");
    if (!bearer || !/^[a-f0-9]{64}$/.test(bearer)) throw new ChatError("A valid guest session is required.", 401);
    // Knowing a public session ID cannot grant access: identity comes from a secret.
    const user = createHash("sha256").update(bearer).digest("hex");
    if (!request.headers.get("content-type")?.includes("application/json")) throw new ChatError("Expected JSON.", 415);
    const reader = request.body?.getReader();
    if (!reader) throw new ChatError("Missing request body.");
    const chunks: Uint8Array[] = []; let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.length;
      if (size > 24_000) { await reader.cancel(); throw new ChatError("Request is too large.", 413); }
      chunks.push(value);
    }
    let body: Record<string, unknown>;
    try { body = JSON.parse(Buffer.concat(chunks).toString("utf8")); } catch { throw new ChatError("Invalid JSON."); }
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new ChatError("Invalid request.");
    const result = await transact(state => {
      prune(state);
      limit(state, "request:" + user, 240);
      if (kind === "queue" && body.action === "ice") return { success: true, rtcConfiguration: iceConfiguration(user) };
      return kind === "queue" ? queueAction(state, user, body) : kind === "signal" ? signalAction(state, user, body) : reportAction(state, user, body);
    });
    return Response.json(result, { headers });
  } catch (error) {
    return Response.json({ success: false, error: error instanceof ChatError ? error.message : "Chat is temporarily unavailable. Please try again." }, { status: error instanceof ChatError ? error.status : 503, headers });
  }
}
