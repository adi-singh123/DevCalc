/**
 * Best-effort browser network capture for APIs requested during initial page load.
 * It never clicks controls or submits forms because those actions can mutate data.
 */

import { existsSync } from "fs";
import puppeteer, { Browser, HTTPRequest } from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import { validateTargetUrl } from "./ssrf";
import { ObservedApi } from "./types";

export interface LiveApiScanResult {
  apis: ObservedApi[];
  warning?: string;
}

const NAVIGATION_TIMEOUT_MS = 18_000;
const OBSERVATION_WINDOW_MS = 4_000;
const MAX_LIVE_APIS = 150;
const ALLOWED_METHODS = new Set<ObservedApi["method"]>([
  "GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS",
]);

function localChromePath(): string | null {
  const candidates = process.platform === "win32"
    ? [
        process.env.CHROME_EXECUTABLE_PATH,
        "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
      ]
    : [process.env.CHROME_EXECUTABLE_PATH, "/usr/bin/google-chrome", "/usr/bin/chromium"];

  return candidates.find((candidate): candidate is string => Boolean(candidate && existsSync(candidate))) || null;
}

function redactHeaders(headers: Record<string, string>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(headers).map(([name, value]) => [
      name,
      /authorization|cookie|token|api[-_]?key|secret/i.test(name) ? "[REDACTED]" : value,
    ])
  );
}

async function launchBrowser(): Promise<Browser> {
  const localExecutable = localChromePath();
  if (localExecutable) {
    return puppeteer.launch({
      executablePath: localExecutable,
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-extensions"],
    });
  }

  chromium.setGraphicsMode = false;
  return puppeteer.launch({
    executablePath: await chromium.executablePath(),
    headless: "shell",
    args: chromium.args,
  });
}

export async function captureLiveApis(targetUrl: string): Promise<LiveApiScanResult> {
  let browser: Browser | null = null;
  const capturedApis: ObservedApi[] = [];

  try {
    browser = await launchBrowser();
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
      "(KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 DevCalc-XRay/2.0"
    );
    await page.setViewport({ width: 1440, height: 900 });
    await page.setRequestInterception(true);

    const seen = new Set<string>();
    const requestRecords = new WeakMap<HTTPRequest, ObservedApi>();
    const requestStarted = new WeakMap<HTTPRequest, number>();
    const hostChecks = new Map<string, Promise<boolean>>();

    const isSafeRequest = (url: string): Promise<boolean> => {
      let origin: string;
      try {
        origin = new URL(url).origin;
      } catch {
        return Promise.resolve(false);
      }
      let check = hostChecks.get(origin);
      if (!check) {
        check = validateTargetUrl(url).then((result) => result.safe).catch(() => false);
        hostChecks.set(origin, check);
      }
      return check;
    };

    page.on("request", (request) => {
      void (async () => {
        const url = request.url();
        const resourceType = request.resourceType();

        if (!/^https?:/i.test(url)) {
          await request.continue().catch(() => undefined);
          return;
        }

        // These resources cannot produce application API traffic and are expensive to load.
        if (["image", "media", "font"].includes(resourceType)) {
          await request.abort().catch(() => undefined);
          return;
        }

        if (!(await isSafeRequest(url))) {
          await request.abort().catch(() => undefined);
          return;
        }

        if ((resourceType === "fetch" || resourceType === "xhr") && capturedApis.length < MAX_LIVE_APIS) {
          try {
            const parsed = new URL(url);
            const rawMethod = request.method().toUpperCase() as ObservedApi["method"];
            const method = ALLOWED_METHODS.has(rawMethod) ? rawMethod : "GET";
            const path = `${parsed.pathname}${parsed.search}`;
            const key = `${method}:${parsed.host}:${path}`;

            if (!seen.has(key)) {
              seen.add(key);
              const api: ObservedApi = {
                id: `live-api-${capturedApis.length + 1}`,
                method,
                url,
                path,
                host: parsed.host,
                resourceType,
                source: "live-request",
                details: {
                  initiator: "Observed browser network request",
                  headersRedacted: redactHeaders(request.headers()),
                },
              };
              capturedApis.push(api);
              requestRecords.set(request, api);
              requestStarted.set(request, performance.now());
            }
          } catch {
            // Ignore malformed browser request URLs.
          }
        }

        await request.continue().catch(() => undefined);
      })();
    });

    page.on("response", (response) => {
      const request = response.request();
      const api = requestRecords.get(request);
      if (!api) return;
      api.status = response.status();
      api.contentType = response.headers()["content-type"];
      const startedAt = requestStarted.get(request);
      if (startedAt !== undefined) api.durationMs = Math.round(performance.now() - startedAt);
    });

    await page.goto(targetUrl, { waitUntil: "domcontentloaded", timeout: NAVIGATION_TIMEOUT_MS });

    // Trigger safe lazy loading without clicking, typing, or submitting anything.
    await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }));
    await new Promise((resolve) => setTimeout(resolve, OBSERVATION_WINDOW_MS));

    return { apis: capturedApis };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return { apis: capturedApis, warning: `Live browser API capture ended early: ${message}` };
  } finally {
    await browser?.close().catch(() => undefined);
  }
}
