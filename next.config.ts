import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "script-src 'self' 'unsafe-inline' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://tpc.googlesyndication.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://*.doubleclick.net",
  "frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://*.google.com",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Calculator widgets are intentionally allowed to appear on third-party sites.
        source: "/embed/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy.replace("frame-ancestors 'self'", "frame-ancestors *"),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/website-xray",
        destination: "https://www.devcalc.in/website-x-ray",
        permanent: true,
      },
      {
        source: "/category/developer-tool",
        destination: "https://www.devcalc.in/category/developer-tools",
        permanent: true,
      },
      {
        source: "/category/developertool",
        destination: "https://www.devcalc.in/category/developer-tools",
        permanent: true,
      },
      {
        source: "/collegeProject",
        destination: "https://www.devcalc.in/college-project",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "devcalc.in",
          },
        ],
        destination: "https://www.devcalc.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
