"use client";

import Script from "next/script";

const SOCIAL_BAR_SRC =
  "https://pl31578102.profitableratecpmnetwork.com/40/a8/32/40a832cb5b4ef9d86e4a7b60bbc725d6.js";
const POPUNDER_SRC =
  "https://pl31578101.profitableratecpmnetwork.com/43/c6/c8/43c6c8c833dbc16ce1ecc042f18c90ef.js";

/**
 * Global ad formats must be mounted once. Loading either script from page-level
 * slots can register duplicate overlays or click handlers during client-side
 * navigation.
 */
export default function GlobalThirdPartyAds() {
  return (
    <>
      <Script
        id="devcalc-third-party-social-bar"
        src={SOCIAL_BAR_SRC}
        strategy="lazyOnload"
      />
      <Script
        id="devcalc-third-party-popunder"
        src={POPUNDER_SRC}
        strategy="lazyOnload"
      />
    </>
  );
}
