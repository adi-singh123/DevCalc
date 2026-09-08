import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/omagel-mini/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive, noimageindex" }] }];
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
