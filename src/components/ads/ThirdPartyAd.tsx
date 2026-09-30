"use client";

import { useEffect, useRef } from "react";

const IS_DEVELOPMENT = process.env.NODE_ENV === "development";
let adLoadQueue = Promise.resolve();

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

type ThirdPartyAdProps = {
  adKey: string;
  width: number;
  height: number;
  className?: string;
};

export default function ThirdPartyAd({
  adKey,
  width,
  height,
  className = "",
}: ThirdPartyAdProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let cancelled = false;

    if (!container) {
      return;
    }

    const initializeAd = () =>
      new Promise<void>((resolve) => {
        if (cancelled) {
          resolve();
          return;
        }

        window.atOptions = {
          key: adKey,
          format: "iframe",
          height,
          width,
          params: {},
        };

        if (IS_DEVELOPMENT) {
          console.info(`[ThirdPartyAd] initializing ${width}x${height} ad`);
        }

        const script = document.createElement("script");
        script.src = `https://www.highrevenueformat.com/${adKey}/invoke.js`;
        script.async = true;
        script.dataset.thirdPartyAdKey = adKey;
        script.onload = () => {
          if (IS_DEVELOPMENT) {
            console.info(`[ThirdPartyAd] ${width}x${height} invoke.js loaded`);
          }
          resolve();
        };
        script.onerror = () => {
          if (IS_DEVELOPMENT) {
            console.error(`[ThirdPartyAd] ${width}x${height} invoke.js failed to load`);
          }
          resolve();
        };

        container.appendChild(script);
      });

    adLoadQueue = adLoadQueue.then(initializeAd, initializeAd);

    return () => {
      cancelled = true;
      container.replaceChildren();
    };
  }, [adKey, height, width]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`.trim()}
      style={{ width, height }}
      aria-label="Advertisement"
    />
  );
}
