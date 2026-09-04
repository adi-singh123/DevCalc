"use client";

import React, { useState } from "react";
import { XRayScanResult } from "@/src/lib/website-xray/types";
import { Terminal, Copy, CheckCircle2, ArrowRight } from "lucide-react";

interface XRayEvidenceSectionProps {
  result: XRayScanResult;
}

export const XRayEvidenceSection: React.FC<XRayEvidenceSectionProps> = ({ result }) => {
  const [copiedHeaders, setCopiedHeaders] = useState(false);

  const handleCopyHeaders = () => {
    if (result.http.headers) {
      navigator.clipboard.writeText(JSON.stringify(result.http.headers, null, 2));
      setCopiedHeaders(true);
      setTimeout(() => setCopiedHeaders(false), 2000);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs dark:shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 dark:bg-indigo-950/80 dark:border-indigo-500/30 dark:text-indigo-400">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#26364a] dark:text-white">Raw Technical Evidence & Trace</h3>
            <p className="text-xs text-stone-500 dark:text-slate-400">Raw HTTP response headers and redirect trail</p>
          </div>
        </div>

        <button
          onClick={handleCopyHeaders}
          className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-stone-200 dark:border-slate-700 text-stone-700 dark:text-slate-300 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          {copiedHeaders ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Headers Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Headers</span>
            </>
          )}
        </button>
      </div>

      {/* Redirect Chain */}
      {result.http.redirectChain && result.http.redirectChain.length > 0 && (
        <div className="space-y-2 bg-stone-50 dark:bg-slate-950/70 border border-stone-200 dark:border-slate-800/80 rounded-xl p-4 font-mono text-xs shadow-2xs">
          <h4 className="text-stone-500 dark:text-slate-500 font-semibold">Redirect Chain:</h4>
          <div className="space-y-1.5">
            {result.http.redirectChain.map((hop, idx) => (
              <div key={idx} className="flex items-center gap-2 text-stone-700 dark:text-slate-300">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">#{idx + 1}</span>
                <span className="truncate">{hop.url}</span>
                <span className="text-stone-400 dark:text-slate-500 text-[10px]">(HTTP {hop.statusCode})</span>
                <ArrowRight className="w-3 h-3 text-stone-400 dark:text-slate-500 shrink-0" />
              </div>
            ))}
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 pt-1">
              <span className="px-2 py-0.5 bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20 rounded text-[10px] font-bold">
                FINAL DESTINATION
              </span>
              <span className="truncate">{result.target.finalUrl}</span>
            </div>
          </div>
        </div>
      )}

      {/* Raw Response Headers */}
      {result.http.headers && (
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-stone-500 dark:text-slate-400 uppercase tracking-wider font-mono">
            HTTP Response Headers
          </h4>
          <div className="bg-stone-900 text-stone-200 dark:bg-slate-950 dark:text-slate-300 border border-stone-800 dark:border-slate-800/90 rounded-xl p-4 overflow-x-auto max-h-96 font-mono text-xs scrollbar-thin space-y-1 shadow-inner">
            {Object.entries(result.http.headers).map(([key, value]) => (
              <div key={key} className="flex items-start gap-2 py-0.5 border-b border-stone-800/60 dark:border-slate-900/60">
                <span className="text-indigo-400 font-semibold shrink-0">{key}:</span>
                <span className="text-stone-300 dark:text-slate-300 break-all">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
