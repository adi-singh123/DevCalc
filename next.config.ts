import type { NextConfig } from "next";

const securityHeaders = [
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
