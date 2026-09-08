// Archived, unauthenticated implementation. Not a public route.
import { NextRequest, NextResponse } from "next/server";
import { sendSignal, fetchSignals } from "@/src/lib/omagel/matchmaking";
import { SignalMessage } from "@/src/lib/omagel/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, signal, userId } = body;

    if (action === "send") {
      if (!signal || !signal.sessionId || !signal.recipientId) {
        return NextResponse.json({ success: false, error: "Invalid signal payload" }, { status: 400 });
      }

      const delivered = sendSignal(signal as SignalMessage);
      return NextResponse.json({ success: delivered });
    }

    if (action === "poll") {
      if (!userId) {
        return NextResponse.json({ success: false, error: "Missing userId" }, { status: 400 });
      }

      const signals = fetchSignals(userId);
      return NextResponse.json({ success: true, signals });
    }

    return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || "Signaling error" }, { status: 500 });
  }
}
