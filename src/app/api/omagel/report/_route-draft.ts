// Archived, unauthenticated implementation. Not a public route.
import { NextRequest, NextResponse } from "next/server";
import { addReport, endSession } from "@/src/lib/omagel/matchmaking";
import { ReportPayload } from "@/src/lib/omagel/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { report } = body;

    if (!report || !report.reporterId || !report.reportedSessionId || !report.category) {
      return NextResponse.json({ success: false, error: "Incomplete report payload" }, { status: 400 });
    }

    addReport(report as ReportPayload);
    endSession(report.reportedSessionId, report.reporterId);

    return NextResponse.json({
      success: true,
      message: "Report received. The stranger has been blocked and disconnected.",
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || "Report submission error" }, { status: 500 });
  }
}
