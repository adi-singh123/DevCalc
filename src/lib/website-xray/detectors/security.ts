/**
 * src/lib/website-xray/detectors/security.ts
 * Passive security headers and transport posture auditing.
 */

import { SecurityAudit, SecurityHeaderCheck } from "../types";

export function auditSecurity(headers: Headers, isHttps: boolean): SecurityAudit {
  const checks: SecurityHeaderCheck[] = [];

  // 1. Strict-Transport-Security (HSTS)
  const hsts = headers.get("strict-transport-security");
  if (hsts) {
    checks.push({
      header: "Strict-Transport-Security",
      present: true,
      value: hsts,
      status: "pass",
      description: "Enforces HTTPS connections to prevent man-in-the-middle attacks.",
    });
  } else {
    checks.push({
      header: "Strict-Transport-Security",
      present: false,
      status: isHttps ? "warn" : "fail",
      description: "HSTS header is missing.",
      recommendation: "Add 'Strict-Transport-Security: max-age=31536000; includeSubDomains; preload' to enforce secure connections.",
    });
  }

  // 2. Content-Security-Policy (CSP)
  const csp = headers.get("content-security-policy");
  if (csp) {
    checks.push({
      header: "Content-Security-Policy",
      present: true,
      value: csp.length > 80 ? `${csp.slice(0, 77)}...` : csp,
      status: "pass",
      description: "Restricts loaded resources (scripts, styles, images) to prevent XSS.",
    });
  } else {
    checks.push({
      header: "Content-Security-Policy",
      present: false,
      status: "warn",
      description: "Content Security Policy header is not configured.",
      recommendation: "Define a CSP to restrict authorized script and asset sources.",
    });
  }

  // 3. X-Frame-Options
  const xfo = headers.get("x-frame-options");
  if (xfo) {
    checks.push({
      header: "X-Frame-Options",
      present: true,
      value: xfo,
      status: "pass",
      description: "Defends against Clickjacking by forbidding iframe framing.",
    });
  } else {
    checks.push({
      header: "X-Frame-Options",
      present: false,
      status: csp && csp.includes("frame-ancestors") ? "pass" : "warn",
      description: "X-Frame-Options header is absent.",
      recommendation: "Set 'X-Frame-Options: SAMEORIGIN' or 'frame-ancestors \'self\'' in CSP.",
    });
  }

  // 4. X-Content-Type-Options
  const xcto = headers.get("x-content-type-options");
  if (xcto && xcto.toLowerCase() === "nosniff") {
    checks.push({
      header: "X-Content-Type-Options",
      present: true,
      value: xcto,
      status: "pass",
      description: "Prevents MIME-sniffing attacks by instructing browsers to adhere to declared content-types.",
    });
  } else {
    checks.push({
      header: "X-Content-Type-Options",
      present: false,
      status: "warn",
      description: "Missing 'nosniff' MIME protection.",
      recommendation: "Set 'X-Content-Type-Options: nosniff'.",
    });
  }

  // 5. Referrer-Policy
  const refPol = headers.get("referrer-policy");
  if (refPol) {
    checks.push({
      header: "Referrer-Policy",
      present: true,
      value: refPol,
      status: "pass",
      description: "Controls how much referrer information is transmitted with requests.",
    });
  } else {
    checks.push({
      header: "Referrer-Policy",
      present: false,
      status: "info",
      description: "Referrer-Policy header is omitted (browser default will apply).",
      recommendation: "Configure 'Referrer-Policy: strict-origin-when-cross-origin'.",
    });
  }

  // 6. Permissions-Policy
  const permPol = headers.get("permissions-policy");
  if (permPol) {
    checks.push({
      header: "Permissions-Policy",
      present: true,
      value: permPol.length > 80 ? `${permPol.slice(0, 77)}...` : permPol,
      status: "pass",
      description: "Restricts browser features like camera, microphone, and geolocation.",
    });
  } else {
    checks.push({
      header: "Permissions-Policy",
      present: false,
      status: "info",
      description: "Permissions-Policy header is absent.",
      recommendation: "Disable unneeded hardware APIs via Permissions-Policy.",
    });
  }

  const passed = checks.filter((c) => c.status === "pass").length;
  const warnings = checks.filter((c) => c.status === "warn").length;
  const failed = checks.filter((c) => c.status === "fail").length;

  let score = isHttps ? 30 : 0;
  score += Math.round((passed / checks.length) * 70);

  return {
    score: Math.min(100, Math.max(0, score)),
    https: isHttps,
    hsts: Boolean(hsts),
    headers: checks,
    summary: {
      passed,
      warnings,
      failed,
    },
  };
}

