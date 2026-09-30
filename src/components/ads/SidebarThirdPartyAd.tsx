"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

const CONSENT_KEY = "devcalc_cookie_consent_v1";
const AD_KEY = "b1c414725f762305671e153b1e65d10c";
const AD_SCRIPT_URL = `https://www.highrevenueformat.com/${AD_KEY}/invoke.js`;
const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

type AdOptions = {
  key: string;
  format: "iframe";
  height: number;
  width: number;
  params: Record<string, never>;
};

declare global {
  interface Window {
    atOptions?: AdOptions;
  }
}

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

export default function SidebarThirdPartyAd() {
  const hasConsent = useSyncExternalStore(
    subscribe,
    hasAdvertisingConsent,
    () => false,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || !hasConsent || initializedRef.current) {
      return;
    }

    initializedRef.current = true;
    window.atOptions = {
      key: AD_KEY,
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };

    if (IS_DEVELOPMENT) {
      console.info("[ThirdPartyAd] consent granted");
      console.info("[ThirdPartyAd] initializing 300x250 ad");
    }

    const script = document.createElement("script");
    script.src = AD_SCRIPT_URL;
    script.async = true;
    script.dataset.thirdPartySidebarAd = "true";
    script.onload = () => {
      if (IS_DEVELOPMENT) {
        console.info("[ThirdPartyAd] invoke.js loaded");
      }
    };
    script.onerror = () => {
      initializedRef.current = false;
      if (IS_DEVELOPMENT) {
        console.error("[ThirdPartyAd] invoke.js failed to load");
      }
    };

    container.appendChild(script);

    return () => {
      script.onload = null;
      script.onerror = null;
      container.replaceChildren();
      initializedRef.current = false;

      if (window.atOptions?.key === AD_KEY) {
        delete window.atOptions;
      }
    };
  }, [hasConsent]);

  return (
    <div
      ref={containerRef}
      className="mx-auto h-[250px] w-[300px] overflow-hidden"
      aria-label="Advertisement"
    />
  );
}
