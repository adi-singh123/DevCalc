/**
 * src/app/api/website-xray/scan/route.ts
 * Next.js App Router API Route for Website X-Ray Scan.
 */

import { NextRequest, NextResponse } from "next/server";
import { runXRayScan } from "@/src/lib/website-xray/engine";
import { checkRateLimit } from "@/src/lib/website-xray/cache";
import { ScanRequestPayload, ScanResponsePayload } from "@/src/lib/website-xray/types";

export async function POST(req: NextRequest): Promise<NextResponse<ScanResponsePayload>> {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Rate limit exceeded. Please wait ${Math.ceil(rateLimit.resetMs / 1000)}s before initiating a new scan.`,
          errorCode: "RATE_LIMITED",
        },
        { status: 429 }
      );
    }

    const body: ScanRequestPayload = await req.json().catch(() => ({ url: "" }));
    const targetUrl = (body.url || "").trim();

    if (!targetUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "Target URL is required. Please provide a valid domain name or URL.",
          errorCode: "INVALID_URL",
        },
        { status: 400 }
      );
    }

    const scanResult = await runXRayScan(targetUrl, Boolean(body.forceFresh));

    return NextResponse.json({
      success: true,
      data: scanResult,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    const isSsrf = message.includes("SSRF Blocked") || message.includes("private IP");
    const isTimeout = message.includes("timed out");

    return NextResponse.json(
      {
        success: false,
        error: message,
        errorCode: isSsrf ? "SSRF_BLOCKED" : isTimeout ? "TOUTOUT" : "UNREACHABLE",
      },
      { status: isSsrf ? 403 : isTimeout ? 504 : 500 }
    );
  }
}

