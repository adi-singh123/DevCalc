"use client";

import dynamic from "next/dynamic";

// No banner markup in the initial HTML. The browser renders the same promotion
// for every visitor; this is not a way to conceal content from inspection/bots.
const Banner = dynamic(() => import("./OmagelPromoBannerContent"), { ssr: false });

export default function OmagelPromoBanner() {
  return <Banner />;
}
