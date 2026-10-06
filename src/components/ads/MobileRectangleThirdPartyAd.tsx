"use client";

import { useSyncExternalStore } from "react";
import ThirdPartyAd from "@/src/components/ads/ThirdPartyAd";

const MOBILE_QUERY = "(max-width: 1023px)";

function subscribe(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(MOBILE_QUERY);
  mediaQuery.addEventListener("change", onStoreChange);
  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function getIsMobile() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

export default function MobileRectangleThirdPartyAd() {
  const isMobile = useSyncExternalStore(
    subscribe,
    getIsMobile,
    () => false,
  );

  if (!isMobile) {
    return null;
  }

  return (
    <section
      className="mt-8 flex min-h-[250px] w-full justify-center overflow-hidden"
      aria-label="Advertisement"
    >
      <ThirdPartyAd
        adKey="b1c414725f762305671e153b1e65d10c"
        width={300}
        height={250}
        className="mx-auto max-w-full"
      />
    </section>
  );
}
