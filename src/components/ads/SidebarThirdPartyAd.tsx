"use client";

import { useSyncExternalStore } from "react";

const CONSENT_KEY = "devcalc_cookie_consent_v1";
const AD_KEY = "b1c414725f762305671e153b1e65d10c";
const AD_SCRIPT_URL = `https://www.highperformanceformat.com/${AD_KEY}/invoke.js`;
const AD_DOCUMENT = `<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"></head><body style="margin:0;overflow:hidden;width:300px;height:250px"><script>atOptions={key:'${AD_KEY}',format:'iframe',height:250,width:300,params:{}};<\/script><script src="${AD_SCRIPT_URL}"><\/script></body></html>`;

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("devcalc-consent-change", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("devcalc-consent-change", onStoreChange);
  };
}

function getConsentSnapshot() {
  return window.localStorage.getItem(CONSENT_KEY) === "accepted";
}

export default function SidebarThirdPartyAd() {
  const hasConsent = useSyncExternalStore(
    subscribe,
    getConsentSnapshot,
    () => false,
  );
  return (
    <div className="mx-auto flex h-[270px] w-[300px] flex-col items-center gap-1" aria-label="Advertisement">
      <span className="text-xs text-slate-500">Advertisement</span>
      {hasConsent && (
        <iframe
          title="Advertisement"
          srcDoc={AD_DOCUMENT}
          width={300}
          height={250}
          loading="lazy"
          sandbox="allow-scripts allow-popups"
          className="block h-[250px] w-[300px] shrink-0 overflow-hidden border-0"
        />
      )}
    </div>
  );
}
