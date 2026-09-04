"use client";

import React from "react";
import { ObservedApi } from "@/src/lib/website-xray/types";
import { Network, Lock } from "lucide-react";

interface XRayApiSectionProps {
  apis: ObservedApi[];
}

export const XRayApiSection: React.FC<XRayApiSectionProps> = ({ apis }) => {
  const getMethodBadge = (method?: string) => {
    switch (method?.toUpperCase()) {
      case "GET":
        return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/80 dark:text-blue-400 dark:border-blue-500/30";
      case "POST":
        return "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/80 dark:text-emerald-400 dark:border-emerald-500/30";
      case "PUT":
      case "PATCH":
        return "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/80 dark:text-amber-400 dark:border-amber-500/30";
      case "DELETE":
        return "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/80 dark:text-rose-400 dark:border-rose-500/30";
      default:
        return "bg-stone-100 text-stone-600 border-stone-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700";
    }
  };

  if (apis.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 rounded-2xl p-8 text-center space-y-3 shadow-xs">
        <Network className="w-8 h-8 text-stone-400 dark:text-slate-600 mx-auto" />
        <h3 className="text-base font-semibold text-[#26364a] dark:text-slate-300">No Observable Public API Endpoints</h3>
        <p className="text-xs text-stone-500 dark:text-slate-500 max-w-md mx-auto">
          No client-side dynamic query, action fetch calls, or public REST/GraphQL endpoints were observable in the static client bundles.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs dark:shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 dark:bg-indigo-950/80 dark:border-indigo-500/30 dark:text-indigo-400">
            <Network className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#26364a] dark:text-white">Discovered API Endpoints</h3>
            <p className="text-xs text-stone-500 dark:text-slate-400">Observable REST, Next.js dynamic actions, and GraphQL query schemas</p>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-lg bg-stone-100 border border-stone-200 text-stone-700 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-300 text-xs font-mono font-semibold">
          {apis.length} Found
        </span>
      </div>

      <div className="space-y-3">
        {apis.map((api) => (
          <div
            key={api.id}
            className="bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800/80 hover:border-stone-300 dark:hover:border-slate-700/80 rounded-xl p-4 space-y-3 transition-all font-mono text-xs shadow-2xs"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <span
                  className={`px-2 py-0.5 rounded border text-[10px] font-bold ${getMethodBadge(
                    api.method
                  )}`}
                >
                  {api.method || "GET"}
                </span>
                <span className="text-stone-900 dark:text-slate-100 font-semibold truncate" title={api.url}>
                  {api.path || api.url}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 text-stone-600 dark:text-slate-400 text-[10px] uppercase">
                  {api.resourceType}
                </span>
                {api.status && (
                  <span className="px-2 py-0.5 rounded bg-stone-200 dark:bg-slate-800 text-stone-700 dark:text-slate-300 text-[10px]">
                    HTTP {api.status}
                  </span>
                )}
              </div>
            </div>

            {api.details?.headersRedacted && Object.keys(api.details.headersRedacted).length > 0 && (
              <div className="space-y-1 bg-white dark:bg-slate-900/80 p-2.5 rounded-lg border border-stone-200 dark:border-slate-800/80 text-[11px]">
                <span className="text-stone-500 dark:text-slate-500 font-semibold">Observed Headers:</span>
                <div className="space-y-0.5">
                  {Object.entries(api.details.headersRedacted).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400">{key}:</span>
                      <span className="text-stone-700 dark:text-slate-300 truncate">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
