"use client";

import { useSyncExternalStore } from "react";
import ThirdPartyAd from "@/src/components/ads/ThirdPartyAd";

const DESKTOP_SIDEBAR_QUERY = "(min-width: 1024px)";

function subscribe(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(DESKTOP_SIDEBAR_QUERY);
  mediaQuery.addEventListener("change", onStoreChange);
  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function getIsDesktopSidebar() {
  return window.matchMedia(DESKTOP_SIDEBAR_QUERY).matches;
}

export default function SidebarThirdPartyAd() {
  const isDesktopSidebar = useSyncExternalStore(
    subscribe,
    getIsDesktopSidebar,
    () => false,
  );

  if (!isDesktopSidebar) {
    return null;
  }

  return (
    <ThirdPartyAd
      adKey="b1c414725f762305671e153b1e65d10c"
      width={300}
      height={250}
      className="mx-auto"
    />
  );
}
