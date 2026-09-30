"use client";

import { useSyncExternalStore } from "react";
import ThirdPartyAd from "@/src/components/ads/ThirdPartyAd";

const DESKTOP_MEDIA_QUERY = "(min-width: 768px)";

function subscribe(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
  mediaQuery.addEventListener("change", onStoreChange);
  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function getIsDesktop() {
  return window.matchMedia(DESKTOP_MEDIA_QUERY).matches;
}

export default function LeaderboardThirdPartyAd() {
  const isDesktop = useSyncExternalStore<boolean | null>(
    subscribe,
    getIsDesktop,
    () => null,
  );

  return (
    <div className="mt-6">
      <div className="hidden h-[90px] justify-center md:flex">
        {isDesktop === true && (
          <ThirdPartyAd
            adKey="7da1fcc8bc2591c38404f2f0d38fbb3b"
            width={728}
            height={90}
          />
        )}
      </div>

      <div className="relative left-1/2 flex h-[50px] w-[320px] -translate-x-1/2 justify-center md:hidden">
        {isDesktop === false && (
          <ThirdPartyAd
            adKey="851deb562af5a8a032b29f055d46b63b"
            width={320}
            height={50}
          />
        )}
      </div>
    </div>
  );
}
