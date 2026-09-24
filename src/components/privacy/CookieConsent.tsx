"use client";

import Script from "next/script";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

const CONSENT_KEY = "devcalc_cookie_consent_v1";
type Consent = "accepted" | "rejected" | null;

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("devcalc-consent-change", onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("devcalc-consent-change", onStoreChange);
  };
}

function getConsentSnapshot(): Consent {
  const saved = window.localStorage.getItem(CONSENT_KEY);
  return saved === "accepted" || saved === "rejected" ? saved : null;
}

export default function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getConsentSnapshot, () => null);
  const [isEditing, setIsEditing] = useState(false);

  function choose(next: Exclude<Consent, null>) {
    window.localStorage.setItem(CONSENT_KEY, next);

    if (next === "rejected") {
      document.cookie.split(";").forEach((cookie) => {
        const name = cookie.split("=")[0]?.trim();
        if (name === "_ga" || name?.startsWith("_ga_")) {
          document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
          document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.devcalc.in; SameSite=Lax`;
        }
      });
    }

    if (consent === "accepted" && next === "rejected") {
      window.location.reload();
      return;
    }

    setIsEditing(false);
    window.dispatchEvent(new Event("devcalc-consent-change"));
  }

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            id="devcalc-adsense"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3757135541422436"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
          <Script
            id="devcalc-google-analytics"
            src="https://www.googletagmanager.com/gtag/js?id=G-RXYYY7TG81"
            strategy="afterInteractive"
          />
          <Script id="devcalc-google-analytics-config" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-RXYYY7TG81',{anonymize_ip:true});`}
          </Script>
        </>
      )}

      {(consent === null || isEditing) && (
        <section
          aria-label="Cookie consent"
          className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-700 dark:bg-slate-900 sm:p-5"
        >
          <h2 className="font-semibold text-slate-950 dark:text-white">Your privacy choices</h2>
          <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
            DevCalc uses optional Google Analytics and advertising cookies only when you accept them. The calculators work without optional cookies. Read our{" "}
            <Link href="/privacy-policy#cookies" className="font-medium text-blue-700 underline dark:text-blue-400">
              Cookie and Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={() => choose("accepted")} className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800">
              Accept optional cookies
            </button>
            <button type="button" onClick={() => choose("rejected")} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800">
              Reject optional cookies
            </button>
          </div>
        </section>
      )}

      {consent !== null && !isEditing && (
        <button
          type="button"
          onClick={() => setIsEditing(true)}
          className="fixed bottom-3 left-3 z-[90] rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          aria-label="Change cookie preferences"
        >
          Cookie settings
        </button>
      )}
    </>
  );
}
