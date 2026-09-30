"use client";

import { useSyncExternalStore } from "react";

const CONSENT_KEY = "devcalc_cookie_consent_v1";

const AD_SCRIPT =
  "//peacefulbicycle.com/b/XNV.stdFGslP0hY_W-cr/beamv9vudZAUml/kcPxTvc/0HNBzjQ_y/M/D/k/tCN/zLQf3UNZD/IwxKMmwy";
const DESKTOP_SIDEBAR_QUERY = "(min-width: 1024px)";

function createAdDocument() {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=300, initial-scale=1">
    <style>html,body{width:300px;height:250px;margin:0;overflow:hidden;background:transparent}</style>
  </head>
  <body>
    <script>
      (function(settings){
        var d=document,
            s=d.createElement('script'),
            l=d.currentScript||d.scripts[d.scripts.length-1];
        s.settings=settings||{};
        s.src=${JSON.stringify(AD_SCRIPT)};
        s.async=true;
        s.referrerPolicy='no-referrer-when-downgrade';
        l.parentNode.insertBefore(s,l);
      })({});
    <\/script>
  </body>
</html>`;
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

function subscribeToDesktop(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(DESKTOP_SIDEBAR_QUERY);
  mediaQuery.addEventListener("change", onStoreChange);
  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function getIsDesktopSidebar() {
  return window.matchMedia(DESKTOP_SIDEBAR_QUERY).matches;
}

export default function AdSlot() {
  const hasConsent = useSyncExternalStore(
    subscribe,
    hasAdvertisingConsent,
    () => false,
  );
  const isDesktopSidebar = useSyncExternalStore(
    subscribeToDesktop,
    getIsDesktopSidebar,
    () => false,
  );

  if (!hasConsent || !isDesktopSidebar) {
    return null;
  }

  return (
    <div className="mt-8 flex h-[250px] justify-center" aria-label="Advertisement">
      <iframe
        className="block h-[250px] w-[300px] shrink-0 overflow-hidden border-0"
        width={300}
        height={250}
        srcDoc={createAdDocument()}
        title="Advertisement 300 by 250"
        loading="eager"
        scrolling="no"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
