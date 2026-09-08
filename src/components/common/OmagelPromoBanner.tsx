"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, X } from "lucide-react";

export default function OmagelPromoBanner() {
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("omagel_promo_closed") === "true") {
        setDismissed(true);
      }
    } catch {}
    setMounted(true);
  }, []);

  // Ensure 100% client-side mount so text is never present in static SSR page source
  if (!mounted || dismissed) return null;

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDismissed(true);
    try {
      sessionStorage.setItem("omagel_promo_closed", "true");
    } catch {}
  };

  return (
    <div className="my-5 w-full">
      <div className="relative overflow-hidden rounded-2xl border border-indigo-200/80 bg-gradient-to-r from-indigo-50/90 via-amber-50/70 to-emerald-50/80 p-4 sm:p-5 shadow-xs transition-all hover:shadow-md dark:border-indigo-900/50 dark:from-slate-900/90 dark:via-indigo-950/40 dark:to-slate-900/90">
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1.5 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-slate-200 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          title="Dismiss banner"
          aria-label="Close promotion"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pr-6 sm:pr-0">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#26364a] text-white flex items-center justify-center shrink-0 shadow-xs dark:bg-indigo-600">
              <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 text-[10px] font-bold uppercase tracking-wider">
                  Featured Tool
                </span>
                <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Matchmaking
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-[#26364a] dark:text-white">
                Meet &amp; Chat with Strangers on Omagel Mini
              </h3>
              <p className="text-[11px] sm:text-xs text-stone-600 dark:text-slate-400 max-w-xl">
                Take a break from calculations! Connect instantly with random strangers worldwide for anonymous text or WebRTC video chat.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center shrink-0 pt-1 sm:pt-0">
            <Link
              href="/omagel-mini"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#26364a] hover:bg-[#1a2533] dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-xs hover:shadow-md active:scale-98 cursor-pointer"
            >
              <span>Try Omagel Mini</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
