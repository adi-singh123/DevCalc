import { randomUUID } from "node:crypto";
import { defaultProfile, parseProfile, type GuestProfile } from "./profile";

export type Mode = "text" | "video";
export type SignalKind = "chat-message" | "typing" | "offer" | "answer" | "ice-candidate" | "leave";
export type Payload = { text?: string; isTyping?: boolean; type?: RTCSdpType; sdp?: string; candidate?: string; sdpMid?: string | null; sdpMLineIndex?: number | null; usernameFragment?: string | null; reason?: string };
export interface Signal { id: string; sessionId: string; type: SignalKind; payload: Payload; timestamp: number }
export interface Session { id: string; a: string; b: string; mode: Mode; ended?: number }
interface Guest { active: number; mode: Mode; interests: string[]; queued: boolean; session?: string; previous?: string; profile?: GuestProfile }
export interface State {
  guests: Record<string, Guest>;
  sessions: Record<string, Session>;
  inboxes: Record<string, Signal[]>;
  blocks: Record<string, { peer: string; expires: number }[]>;
  reports: { id: string; reporter: string; peer: string; session: string; category: string; details: string; at: number }[];
  limits: Record<string, { count: number; expires: number }>;
}
export const emptyState = (): State => ({ guests: {}, sessions: {}, inboxes: {}, blocks: {}, reports: [], limits: {} });
export class ChatError extends Error {
  constructor(message: string, public status = 400) { super(message); }
}
export function finish(s: State, user: string, sessionId?: string, now = Date.now()) {
  const guest = s.guests[user];
  // A stale leave request must not end a newer conversation.
  const session = s.sessions[sessionId || guest?.session || ""];
  if (session && session.a !== user && session.b !== user) throw new ChatError("This conversation does not belong to you.", 403);
  if (session && !session.ended) {
    const peer = session.a === user ? session.b : session.a;
    session.ended = now;
    s.inboxes[peer] = [{ id: randomUUID(), sessionId: session.id, type: "leave", payload: {}, timestamp: now }];
    for (const id of [user, peer]) {
      if (s.guests[id]?.session === session.id) {
        delete s.guests[id].session;
        s.guests[id].previous = id === user ? peer : user;
      }
    }
  }
  if (guest && (!sessionId || !guest.session || guest.session === sessionId)) guest.queued = false;
}
export function prune(s: State, now = Date.now()) {
  for (const [id, guest] of Object.entries(s.guests)) {
    if (now - guest.active > 45_000) { finish(s, id, undefined, now); delete s.guests[id]; delete s.inboxes[id]; }
  }
  for (const [id, session] of Object.entries(s.sessions)) if (session.ended && now - session.ended > 300_000) delete s.sessions[id];
  for (const [id, entries] of Object.entries(s.blocks)) {
    s.blocks[id] = entries.filter(entry => entry.expires > now);
    if (!s.blocks[id].length) delete s.blocks[id];
  }
  s.reports = s.reports.filter(report => now - report.at < 7 * 86400_000);
  for (const [key, limit] of Object.entries(s.limits)) if (limit.expires <= now) delete s.limits[key];
}
export function limit(s: State, key: string, max: number, now = Date.now()) {
  const entry = s.limits[key];
  if (entry && entry.expires > now) {
    if (entry.count >= max) throw new ChatError("Too many requests. Wait a minute and try again.", 429);
    entry.count++;
  } else {
    if (Object.keys(s.limits).length >= 4000) throw new ChatError("Chat is busy. Please try again shortly.", 503);
    s.limits[key] = { count: 1, expires: now + 60_000 };
  }
}
export function view(s: State, user: string) {
  const guest = s.guests[user];
  const session = s.sessions[guest?.session || ""];
  return {
    status: session && !session.ended ? "matched" : guest?.queued ? "queued" : "idle",
    session: session && !session.ended ? { id: session.id, mode: session.mode, initiator: session.a === user, peerProfile: { ...(s.guests[session.a === user ? session.b : session.a]?.profile || defaultProfile) } } : null,
    onlineUsers: Object.values(s.guests).filter(g => g.queued || g.session).length,
  };
}
function member(s: State, user: string, id: unknown, allowEnded = false) {
  if (typeof id !== "string") throw new ChatError("Missing conversation ID.");
  const session = s.sessions[id];
  if (!session || (session.a !== user && session.b !== user)) throw new ChatError("Conversation not found.", 403);
  if (session.ended && !allowEnded) throw new ChatError("The stranger has left this conversation.", 409);
  return session;
}
function normalizeInterests(value: unknown): string[] {
  if (!Array.isArray(value) || value.length > 5 || value.some(v => typeof v !== "string" || v.length > 30)) throw new ChatError("Use up to five interests, each at most 30 characters.");
  return [...new Set(value.map(v => v.trim().toLowerCase()).filter(Boolean))];
}
export function queueAction(s: State, user: string, body: Record<string, unknown>, now = Date.now()) {
  if (body.action === "leave") {
    finish(s, user, typeof body.sessionId === "string" ? body.sessionId : undefined, now);
    // Clear only an idle identity; do not remove a newer active session.
    if (!s.guests[user]?.session) { delete s.guests[user]; delete s.inboxes[user]; }
    return { success: true, ...view(s, user) };
  }
  if (body.action === "status") {
    if (s.guests[user]) s.guests[user].active = now;
    return { success: true, ...view(s, user) };
  }
  if (body.action !== "join") throw new ChatError("Unknown queue action.");
  if (body.acceptedAge !== true) throw new ChatError("You must confirm that you are at least 18.", 403);
  if (body.mode !== "text" && body.mode !== "video") throw new ChatError("Choose text or video chat.");
  const interests = normalizeInterests(body.interests ?? []);
  let profile: GuestProfile;
  try { profile = parseProfile(body.profile); }
  catch (error) { throw new ChatError(error instanceof Error ? error.message : "Invalid chat profile."); }
  const existing = s.guests[user];
  if (existing?.session || existing?.queued) { existing.active = now; return { success: true, ...view(s, user) }; }
  limit(s, "join:" + user, 15, now);
  if (Object.keys(s.guests).length >= 100 && !existing) throw new ChatError("Chat is at capacity. Please try again shortly.", 503);
  const guest: Guest = { active: now, mode: body.mode, interests, queued: true, previous: existing?.previous, profile };
  s.guests[user] = guest;
  s.inboxes[user] = [];
  const candidates = Object.entries(s.guests).filter(([id, g]) => id !== user && g.queued && g.mode === guest.mode &&
    !(s.blocks[user] || []).some(b => b.peer === id) && !(s.blocks[id] || []).some(b => b.peer === user));
  // Prefer shared interests among currently waiting people; otherwise use the queue.
  candidates.sort(([a, ga], [b, gb]) => {
    const score = (id: string, g: Guest) => g.interests.filter(i => interests.includes(i)).length * 2 - (guest.previous === id ? 1 : 0);
    return score(b, gb) - score(a, ga) || ga.active - gb.active;
  });
  const match = candidates[0];
  if (match) {
    const [peer, other] = match;
    const session: Session = { id: randomUUID(), a: peer, b: user, mode: guest.mode };
    s.sessions[session.id] = session;
    guest.session = other.session = session.id;
    guest.queued = other.queued = false;
    s.inboxes[peer] = [];
  }
  return { success: true, ...view(s, user) };
}
function payloadFor(type: unknown, value: unknown): Payload {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new ChatError("Invalid signal payload.");
  const p = value as Record<string, unknown>;
  if (type === "chat-message") {
    if (typeof p.text !== "string" || !p.text.trim() || p.text.length > 500) throw new ChatError("Messages must contain 1–500 characters.");
    return { text: p.text.trim() };
  }
  if (type === "typing" && typeof p.isTyping === "boolean") return { isTyping: p.isTyping };
  if ((type === "offer" || type === "answer") && p.type === type && typeof p.sdp === "string" && p.sdp.length < 20_000) return { type, sdp: p.sdp };
  if (type === "ice-candidate" && typeof p.candidate === "string" && p.candidate.length < 2000 &&
    (p.sdpMid == null || (typeof p.sdpMid === "string" && p.sdpMid.length < 100)) &&
    (p.sdpMLineIndex == null || (Number.isInteger(p.sdpMLineIndex) && Number(p.sdpMLineIndex) >= 0 && Number(p.sdpMLineIndex) < 100)) &&
    (p.usernameFragment == null || (typeof p.usernameFragment === "string" && p.usernameFragment.length < 256))) {
    return { candidate: p.candidate, sdpMid: p.sdpMid as string | null, sdpMLineIndex: p.sdpMLineIndex as number | null, usernameFragment: p.usernameFragment as string | null };
  }
  throw new ChatError("Unsupported or invalid signal.");
}
export function signalAction(s: State, user: string, body: Record<string, unknown>, now = Date.now()) {
  const session = member(s, user, body.sessionId, body.action === "poll");
  if (s.guests[user]) s.guests[user].active = now;
  if (body.action === "poll") {
    // Acknowledgement avoids message loss if a polling HTTP response is dropped.
    const ack = Array.isArray(body.ack) ? body.ack.filter(v => typeof v === "string").slice(0, 128) : [];
    s.inboxes[user] = (s.inboxes[user] || []).filter(signal => !ack.includes(signal.id));
    return { success: true, ended: !!session.ended, signals: s.inboxes[user].filter(signal => signal.sessionId === session.id) };
  }
  if (body.action !== "send") throw new ChatError("Unknown signal action.");
  if (typeof body.id !== "string" || !/^[\w-]{1,80}$/.test(body.id)) throw new ChatError("Invalid message ID.");
  const payload = payloadFor(body.type, body.payload);
  const peer = session.a === user ? session.b : session.a;
  const inbox = s.inboxes[peer] ||= [];
  if (inbox.some(signal => signal.id === body.id)) return { success: true };
  if (inbox.length >= 128) throw new ChatError("The other connection is slow. Please wait or start a new chat.", 429);
  inbox.push({ id: body.id, sessionId: session.id, type: body.type as SignalKind, payload, timestamp: now });
  return { success: true };
}
export function reportAction(s: State, user: string, body: Record<string, unknown>, now = Date.now()) {
  const session = member(s, user, body.sessionId, true);
  if (!["inappropriate", "harassment", "spam", "underage", "other"].includes(String(body.category))) throw new ChatError("Choose a report category.");
  if (typeof body.details !== "string" || body.details.length > 500) throw new ChatError("Report details must be at most 500 characters.");
  limit(s, "report:" + user, 10, now);
  const peer = session.a === user ? session.b : session.a;
  const blocks = s.blocks[user] ||= [];
  if (!blocks.some(b => b.peer === peer)) blocks.push({ peer, expires: now + 86400_000 });
  s.blocks[user] = blocks.slice(-100);
  s.reports.push({ id: randomUUID(), reporter: user, peer, session: session.id, category: String(body.category), details: body.details, at: now });
  s.reports = s.reports.slice(-1000);
  finish(s, user, session.id, now);
  return { success: true, message: "Report saved. This guest is blocked for this browser identity for up to 24 hours." };
}
