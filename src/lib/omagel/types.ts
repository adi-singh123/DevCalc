/**
 * src/lib/omagel/types.ts
 * Type definitions for Omagel Mini matchmaking, WebRTC signaling, and chat sessions.
 */

export type ChatMode = "video" | "text";

export type MatchStatus =
  | "idle"
  | "age_gate"
  | "queued"
  | "connecting"
  | "connected"
  | "stranger_disconnected"
  | "ended"
  | "error";

export interface OmagelUser {
  id: string;
  guestName: string;
  mode: ChatMode;
  interests: string[];
  joinedAt: number;
  lastActive: number;
  sessionId?: string;
  blockedUsers: string[];
}

export interface OmagelSession {
  id: string;
  mode: ChatMode;
  userAId: string;
  userBId: string;
  createdAt: number;
  lastActive: number;
  status: "active" | "ended";
}

export type SignalType =
  | "offer"
  | "answer"
  | "ice-candidate"
  | "chat-message"
  | "typing"
  | "next"
  | "leave"
  | "media-state";

export interface SignalMessage {
  id: string;
  sessionId: string;
  senderId: string;
  recipientId: string;
  type: SignalType;
  payload: any;
  timestamp: number;
}

export interface ChatMessage {
  id: string;
  sessionId: string;
  senderId: string;
  isSelf: boolean;
  text: string;
  timestamp: number;
}

export type ReportCategory =
  | "inappropriate"
  | "harassment"
  | "spam"
  | "underage"
  | "other";

export interface ReportPayload {
  reporterId: string;
  reportedSessionId: string;
  reportedUserId?: string;
  category: ReportCategory;
  details?: string;
  timestamp: number;
}
