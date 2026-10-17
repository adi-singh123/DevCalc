"use client";

import { useEffect } from "react";

export default function AdSenseLoader() {
  useEffect(() => {
    let idleCallback: number | undefined;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    const loadAdSense = () => {
      if (document.getElementById("devcalc-adsense")) return;

      const script = document.createElement("script");
      script.id = "devcalc-adsense";
      script.async = true;
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3757135541422436";
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    };

    const scheduleLoad = () => {
      if ("requestIdleCallback" in window) {
        idleCallback = window.requestIdleCallback(loadAdSense, { timeout: 2500 });
      } else {
        timeout = setTimeout(loadAdSense, 1500);
      }
    };

    if (document.readyState === "complete") scheduleLoad();
    else window.addEventListener("load", scheduleLoad, { once: true });

    return () => {
      window.removeEventListener("load", scheduleLoad);
      if (idleCallback !== undefined) window.cancelIdleCallback(idleCallback);
      if (timeout !== undefined) clearTimeout(timeout);
    };
  }, []);

  return null;
}
