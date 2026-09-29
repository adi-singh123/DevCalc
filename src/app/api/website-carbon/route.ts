import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/src/lib/website-xray/cache";
import { scanWebsiteCarbon } from "@/src/lib/website-carbon/engine";
import type { CarbonApiResponse } from "@/src/lib/website-carbon/types";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(request: NextRequest): Promise<NextResponse<CarbonApiResponse>> {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
  const limit = checkRateLimit(`carbon:${ip}`);
  if (!limit.allowed) return NextResponse.json({ success: false, error: "Too many checks. Please wait a minute and try again.", errorCode: "RATE_LIMITED" }, { status: 429 });
  try {
    const body = await request.json().catch(() => ({ url: "" })) as { url?: string };
    if (!body.url?.trim()) return NextResponse.json({ success: false, error: "Enter a website URL to continue.", errorCode: "INVALID_URL" }, { status: 400 });
    const data = await scanWebsiteCarbon(body.url);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    const code = error instanceof Error ? error.message : "UNREACHABLE";
    const messages: Record<string, string> = {
      INVALID_URL: "That does not look like a valid public website URL.", SSRF_BLOCKED: "For safety, local and private network addresses cannot be scanned.",
      TIMEOUT: "The website took too long to respond. Please try again later.", NOT_HTML: "The URL did not return an HTML web page.",
      PAGE_TOO_LARGE: "The page HTML is too large to scan safely.", TOO_MANY_REDIRECTS: "The website redirected too many times.", UNREACHABLE: "We could not reach that website. Check the URL or try again later.",
    };
    return NextResponse.json({ success: false, error: messages[code] ?? messages.UNREACHABLE, errorCode: code }, { status: code === "TIMEOUT" ? 504 : 400 });
  }
}
