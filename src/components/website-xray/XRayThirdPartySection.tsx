"use client";

import React from "react";
import { ThirdPartyService } from "@/src/lib/website-xray/types";
import { Share2, CheckCircle } from "lucide-react";

interface XRayThirdPartySectionProps {
  services: ThirdPartyService[];
}

export const XRayThirdPartySection: React.FC<XRayThirdPartySectionProps> = ({ services }) => {
  if (services.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 rounded-2xl p-8 text-center space-y-3 shadow-xs">
        <Share2 className="w-8 h-8 text-stone-400 dark:text-slate-600 mx-auto" />
        <h3 className="text-base font-semibold text-[#26364a] dark:text-slate-300">No Third-Party Services Observed</h3>
        <p className="text-xs text-stone-500 dark:text-slate-500 max-w-md mx-auto">
          This website appears to operate with zero third-party analytics trackers, external advertising pixels, or embedded widgets.
        </p>
      </div>
    );
  }

  const categories = Array.from(new Set(services.map((s) => s.category)));

  return (
    <div className="bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs dark:shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 dark:bg-indigo-950/80 dark:border-indigo-500/30 dark:text-indigo-400">
            <Share2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#26364a] dark:text-white">Third-Party Integrations & Trackers</h3>
            <p className="text-xs text-stone-500 dark:text-slate-400">Analytics engines, tag managers, support widgets, and advertising networks</p>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-lg bg-stone-100 border border-stone-200 text-stone-700 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-300 text-xs font-mono font-semibold">
          {services.length} Services
        </span>
      </div>

      <div className="space-y-6">
        {categories.map((cat) => {
          const categoryServices = services.filter((s) => s.category === cat);
          return (
            <div key={cat} className="space-y-3">
              <h4 className="text-xs font-bold text-stone-500 dark:text-slate-400 uppercase tracking-wider font-mono border-b border-stone-200 dark:border-slate-800/80 pb-1.5">
                {cat} ({categoryServices.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {categoryServices.map((service, idx) => (
                  <div
                    key={idx}
                    className="bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800/80 hover:border-stone-300 dark:hover:border-slate-700/80 rounded-xl p-3.5 space-y-1.5 transition-all shadow-2xs"
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-bold text-stone-900 dark:text-slate-100 text-sm">{service.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    </div>
                    {service.domains && service.domains.length > 0 && (
                      <p className="text-[11px] text-stone-500 dark:text-slate-500 font-mono truncate">
                        {service.domains.join(", ")}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
