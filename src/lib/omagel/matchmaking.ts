/**
 * src/lib/omagel/matchmaking.ts
 * Authoritative in-memory matchmaking queue, session manager, and signaling buffer.
 */

import { ChatMode, OmagelUser, OmagelSession, SignalMessage, ReportPayload } from "./types";

interface ServerState {
  waitingQueues: {
    video: Map<string, OmagelUser>;
    text: Map<string, OmagelUser>;
  };
  activeUsers: Map<string, OmagelUser>;
  activeSessions: Map<string, OmagelSession>;
  signalInbox: Map<string, SignalMessage[]>; // Keyed by recipientId
  reports: ReportPayload[];
  userBlocks: Map<string, Set<string>>; // userId -> Set of blocked userIds
  rateLimits: Map<string, { count: number; resetAt: number }>;
}

// Global server instance (persists in Node runtime)
const globalState: ServerState = (globalThis as any).__omagel_state__ || {
  waitingQueues: {
    video: new Map(),
    text: new Map(),
  },
  activeUsers: new Map(),
  activeSessions: new Map(),
  signalInbox: new Map(),
  reports: [],
  userBlocks: new Map(),
  rateLimits: new Map(),
};
(globalThis as any).__omagel_state__ = globalState;

const SESSION_TTL_MS = 60 * 60 * 1000; // 1 hour
const STALE_USER_TTL_MS = 25 * 1000; // 25s without heartbeat

/**
 * Prune stale queue users and inactive sessions
 */
function pruneStaleState() {
  const now = Date.now();

  // Prune queues
  for (const mode of ["video", "text"] as const) {
    for (const [userId, user] of globalState.waitingQueues[mode].entries()) {
      if (now - user.lastActive > STALE_USER_TTL_MS) {
        globalState.waitingQueues[mode].delete(userId);
      }
    }
  }

  // Prune inactive sessions
  for (const [sessionId, session] of globalState.activeSessions.entries()) {
    if (now - session.lastActive > SESSION_TTL_MS) {
      globalState.activeSessions.delete(sessionId);
    }
  }
}

export function registerUser(userId: string, mode: ChatMode, interests: string[] = []): OmagelUser {
  pruneStaleState();
  const existing = globalState.activeUsers.get(userId);
  const user: OmagelUser = {
    id: userId,
    guestName: existing?.guestName || `Stranger_${userId.slice(-4)}`,
    mode,
    interests: interests.map((i) => i.trim().toLowerCase()).filter(Boolean),
    joinedAt: existing?.joinedAt || Date.now(),
    lastActive: Date.now(),
    sessionId: undefined,
    blockedUsers: Array.from(globalState.userBlocks.get(userId) || []),
  };

  globalState.activeUsers.set(userId, user);
  return user;
}

export function joinQueue(userId: string, mode: ChatMode, interests: string[] = []): { session?: OmagelSession; isQueued: boolean } {
  pruneStaleState();
  const user = registerUser(userId, mode, interests);

  // Check if user is already in an active session
  if (user.sessionId) {
    const active = globalState.activeSessions.get(user.sessionId);
    if (active && active.status === "active") {
      return { session: active, isQueued: false };
    }
  }

  const queue = globalState.waitingQueues[mode];

  // Try to find a suitable match
  const userBlocked = globalState.userBlocks.get(userId) || new Set();

  for (const [candidateId, candidate] of queue.entries()) {
    if (candidateId === userId) continue;

    // Check mutual blocks
    const candidateBlocked = globalState.userBlocks.get(candidateId) || new Set();
    if (userBlocked.has(candidateId) || candidateBlocked.has(userId)) {
      continue;
    }

    // Match found! Remove candidate from queue
    queue.delete(candidateId);
    queue.delete(userId);

    const sessionId = `omg_sess_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const session: OmagelSession = {
      id: sessionId,
      mode,
      userAId: candidateId,
      userBId: userId,
      createdAt: Date.now(),
      lastActive: Date.now(),
      status: "active",
    };

    user.sessionId = sessionId;
    candidate.sessionId = sessionId;

    globalState.activeSessions.set(sessionId, session);
    globalState.activeUsers.set(userId, user);
    globalState.activeUsers.set(candidateId, candidate);

    return { session, isQueued: false };
  }

  // No match found yet, enqueue user
  queue.set(userId, user);
  return { isQueued: true };
}

export function leaveQueue(userId: string) {
  for (const mode of ["video", "text"] as const) {
    globalState.waitingQueues[mode].delete(userId);
  }
}

export function checkMatchStatus(userId: string): { session?: OmagelSession; status: "queued" | "matched" | "idle" } {
  pruneStaleState();
  const user = globalState.activeUsers.get(userId);
  if (!user) return { status: "idle" };

  user.lastActive = Date.now();

  if (user.sessionId) {
    const session = globalState.activeSessions.get(user.sessionId);
    if (session && session.status === "active") {
      return { session, status: "matched" };
    }
  }

  const isQueued =
    globalState.waitingQueues.video.has(userId) ||
    globalState.waitingQueues.text.has(userId);

  return { status: isQueued ? "queued" : "idle" };
}

export function endSession(sessionId: string, initiatorId: string) {
  const session = globalState.activeSessions.get(sessionId);
  if (!session) return;

  session.status = "ended";
  const otherUserId = session.userAId === initiatorId ? session.userBId : session.userAId;

  // Send disconnect signal to peer
  sendSignal({
    id: `sig_${Date.now()}`,
    sessionId,
    senderId: initiatorId,
    recipientId: otherUserId,
    type: "leave",
    payload: { reason: "peer_left" },
    timestamp: Date.now(),
  });

  const userA = globalState.activeUsers.get(session.userAId);
  const userB = globalState.activeUsers.get(session.userBId);
  if (userA) userA.sessionId = undefined;
  if (userB) userB.sessionId = undefined;
}

export function sendSignal(signal: SignalMessage): boolean {
  const session = globalState.activeSessions.get(signal.sessionId);
  if (!session || session.status !== "active") return false;

  session.lastActive = Date.now();

  let inbox = globalState.signalInbox.get(signal.recipientId);
  if (!inbox) {
    inbox = [];
    globalState.signalInbox.set(signal.recipientId, inbox);
  }

  inbox.push(signal);
  return true;
}

export function fetchSignals(userId: string): SignalMessage[] {
  const inbox = globalState.signalInbox.get(userId);
  if (!inbox || inbox.length === 0) return [];

  const messages = [...inbox];
  globalState.signalInbox.set(userId, []);
  return messages;
}

export function addReport(report: ReportPayload) {
  globalState.reports.push(report);

  // Block the reported user for this reporter
  if (report.reportedUserId) {
    let blocked = globalState.userBlocks.get(report.reporterId);
    if (!blocked) {
      blocked = new Set();
      globalState.userBlocks.set(report.reporterId, blocked);
    }
    blocked.add(report.reportedUserId);
  }
}

export function getStats() {
  pruneStaleState();
  return {
    videoQueue: globalState.waitingQueues.video.size,
    textQueue: globalState.waitingQueues.text.size,
    activeSessions: Array.from(globalState.activeSessions.values()).filter((s) => s.status === "active").length,
    onlineUsers: globalState.activeUsers.size,
  };
}
