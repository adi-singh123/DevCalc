"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

const CONSENT_KEY = "devcalc_cookie_consent_v1";

const AD_CONFIGS = {
  "300x250": {
    width: 300,
    height: 250,
    mobileOnly: false,
    scriptUrl:
      "https://peacefulbicycle.com/b/XNV.stdFGslP0hY_W-cr/beamv9vudZAUml/kcPxTvc/0HNBzjQ_y/M/D/k/tCN/zLQf3UNZD/IwxKMmwy",
  },
  "300x100": {
    width: 300,
    height: 100,
    mobileOnly: true,
    scriptUrl:
      "//peacefulbicycle.com/bQX.V/sfdBGylL0/Y-WucR/lebmk9mu/ZrU/lxkBPpTrcb0SNVzwUGx/O/TQM_tONgz-Qp3aNjT/Eu5/Nawe",
  },
} as const;

type AdSlotType = keyof typeof AD_CONFIGS;

type AdSlotProps = {
  type?: AdSlotType;
};

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("devcalc-consent-change", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("devcalc-consent-change", onStoreChange);
  };
}

function hasAdvertisingConsent() {
  return window.localStorage.getItem(CONSENT_KEY) === "accepted";
}

function subscribeToMobile(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia("(max-width: 767px)");
  mediaQuery.addEventListener("change", onStoreChange);
  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 767px)").matches;
}

export default function AdSlot({ type = "300x250" }: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasConsent = useSyncExternalStore(
    subscribe,
    hasAdvertisingConsent,
    () => false,
  );
  const isMobile = useSyncExternalStore(
    subscribeToMobile,
    isMobileViewport,
    () => false,
  );
  const { width, height, mobileOnly, scriptUrl } = AD_CONFIGS[type];
  const shouldLoad = hasConsent && (!mobileOnly || isMobile);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || !shouldLoad) {
      return;
    }

    const bootstrap = document.createElement("script");
    bootstrap.text = `(function(settings){
var d=document,
    s=d.createElement('script'),
    l=d.currentScript||d.scripts[d.scripts.length-1];
s.settings=settings||{};
s.src=${JSON.stringify(scriptUrl)};
s.async=true;
s.referrerPolicy='no-referrer-when-downgrade';
l.parentNode.insertBefore(s,l);
})({})`;
    container.appendChild(bootstrap);

    return () => {
      container.replaceChildren();
    };
  }, [scriptUrl, shouldLoad]);

  if (!shouldLoad) {
    return null;
  }

  return (
    <div
      className="mt-8 flex justify-center"
      style={{ height }}
      aria-label="Advertisement"
    >
      <div
        ref={containerRef}
        className="shrink-0 overflow-hidden"
        style={{ width, height }}
      />
    </div>
  );
}
