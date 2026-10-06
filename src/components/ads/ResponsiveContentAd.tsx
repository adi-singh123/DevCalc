"use client";

import { useSyncExternalStore } from "react";
import ThirdPartyAd from "@/src/components/ads/ThirdPartyAd";

const DESKTOP_QUERY = "(min-width: 1024px)";

function subscribe(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(DESKTOP_QUERY);
  mediaQuery.addEventListener("change", onStoreChange);
  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function getIsDesktop() {
  return window.matchMedia(DESKTOP_QUERY).matches;
}

export default function ResponsiveContentAd({
  priority = false,
}: {
  priority?: boolean;
}) {
  const isDesktop = useSyncExternalStore<boolean | null>(
    subscribe,
    getIsDesktop,
    () => null,
  );

  return (
    <section
      className="my-8 flex min-h-[250px] w-full items-center justify-center overflow-hidden lg:min-h-[90px]"
      aria-label="Advertisement"
    >
      {isDesktop === true && (
        <ThirdPartyAd
          adKey="7da1fcc8bc2591c38404f2f0d38fbb3b"
          width={728}
          height={90}
          priority={priority}
        />
      )}

      {isDesktop === false && (
        <ThirdPartyAd
          adKey="b1c414725f762305671e153b1e65d10c"
          width={300}
          height={250}
          className="mx-auto max-w-full"
          priority={priority}
        />
      )}
    </section>
  );
}
