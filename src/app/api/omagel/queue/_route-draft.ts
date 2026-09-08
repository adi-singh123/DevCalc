// Archived, unauthenticated implementation. Not a public route.
import { NextRequest, NextResponse } from "next/server";
import { joinQueue, leaveQueue, checkMatchStatus, endSession, getStats } from "@/src/lib/omagel/matchmaking";
import { ChatMode } from "@/src/lib/omagel/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, userId, mode, interests, sessionId } = body;

    if (!userId) {
      return NextResponse.json({ success: false, error: "Missing userId" }, { status: 400 });
    }

    if (action === "join") {
      const matchMode: ChatMode = mode === "video" ? "video" : "text";
      const result = joinQueue(userId, matchMode, interests || []);
      return NextResponse.json({
        success: true,
        isQueued: result.isQueued,
        session: result.session,
        stats: getStats(),
      });
    }

    if (action === "status") {
      const status = checkMatchStatus(userId);
      return NextResponse.json({
        success: true,
        ...status,
        stats: getStats(),
      });
    }

    if (action === "leave") {
      leaveQueue(userId);
      if (sessionId) {
        endSession(sessionId, userId);
      }
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ success: true, stats: getStats() });
}
