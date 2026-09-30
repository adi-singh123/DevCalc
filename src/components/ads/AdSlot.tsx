"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const CONSENT_KEY = "devcalc_cookie_consent_v1";

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

export default function AdSlot() {
  const hasConsent = useSyncExternalStore(
    subscribe,
    hasAdvertisingConsent,
    () => false,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || !hasConsent) {
      return;
    }

    const timer = window.setTimeout(() => {
      if (container.dataset.initialized === "true") {
        return;
      }

      container.dataset.initialized = "true";

      const bootstrap = document.createElement("script");
      bootstrap.dataset.multitagBootstrap = "7474173";
      bootstrap.text = `(function(miseg){
var d = document,
    s = d.createElement('script'),
    l = d.currentScript || d.scripts[d.scripts.length - 1];
s.settings = miseg || {};
s.src = "//peacefulbicycle.com/b/XNV.stdFGslP0hY_W-cr/beamv9vudZAUml/kcPxTvc/0HNBzjQ_y/M/D/k/tCN/zLQf3UNZD/IwxKMmwy";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})`;

      container.appendChild(bootstrap);

      const providerScript = container.querySelector<HTMLScriptElement>(
        'script[src^="//peacefulbicycle.com/b/XNV.stdFGslP0hY_W-cr"]',
      );
      providerScript?.addEventListener("error", () => setFailed(true), {
        once: true,
      });
    }, 0);

    return () => {
      window.clearTimeout(timer);
      container.replaceChildren();
      delete container.dataset.initialized;
    };
  }, [hasConsent]);

  if (!hasConsent || failed) {
    return null;
  }

  return (
    <div className="mt-8 flex h-[250px] justify-center" aria-label="Advertisement">
      <div
        ref={containerRef}
        className="h-[250px] w-[300px] shrink-0 overflow-hidden"
      />
    </div>
  );
}
