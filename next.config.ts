import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "devcalc.in",
          },
        ],
        destination: "https://www.devcalc.in/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
