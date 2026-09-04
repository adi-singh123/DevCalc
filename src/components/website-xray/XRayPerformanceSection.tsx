"use client";

import React from "react";
import { PerformanceAudit } from "@/src/lib/website-xray/types";
import { Zap, Clock, HardDrive } from "lucide-react";

interface XRayPerformanceSectionProps {
  performance: PerformanceAudit;
}

export const XRayPerformanceSection: React.FC<XRayPerformanceSectionProps> = ({
  performance,
}) => {
  const { dnsLookupMs, ttfbMs, contentLengthBytes, resourceCounts } = performance;

  const formatBytes = (bytes?: number) => {
    if (!bytes) return "Unknown";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <div className="bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs dark:shadow-xl">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 dark:bg-emerald-950/80 dark:border-emerald-500/30 dark:text-emerald-400">
          <Zap className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#26364a] dark:text-white">Latency & Performance Breakdown</h3>
          <p className="text-xs text-stone-500 dark:text-slate-400">Network latency, Time to First Byte (TTFB), and DOM resource counts</p>
        </div>
      </div>

      {/* Latency Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800/80 rounded-xl p-4 space-y-1 shadow-2xs">
          <span className="text-xs text-stone-500 dark:text-slate-400 font-mono flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            DNS Resolution Time
          </span>
          <div className="text-xl font-bold text-[#26364a] dark:text-white font-mono">
            {dnsLookupMs !== undefined ? `${dnsLookupMs}ms` : "N/A"}
          </div>
        </div>

        <div className="bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800/80 rounded-xl p-4 space-y-1 shadow-2xs">
          <span className="text-xs text-stone-500 dark:text-slate-400 font-mono flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            Time to First Byte (TTFB)
          </span>
          <div className="text-xl font-bold text-[#26364a] dark:text-white font-mono">
            {ttfbMs}ms
          </div>
        </div>

        <div className="bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800/80 rounded-xl p-4 space-y-1 shadow-2xs">
          <span className="text-xs text-stone-500 dark:text-slate-400 font-mono flex items-center gap-1.5">
            <HardDrive className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            HTML Document Payload
          </span>
          <div className="text-xl font-bold text-[#26364a] dark:text-white font-mono">
            {formatBytes(contentLengthBytes)}
          </div>
        </div>
      </div>

      {/* Resource Breakdown */}
      {resourceCounts && (
        <div className="bg-stone-50 dark:bg-slate-950/70 border border-stone-200 dark:border-slate-800/90 rounded-xl p-5 space-y-3 shadow-2xs">
          <h4 className="text-xs font-bold text-stone-500 dark:text-slate-400 uppercase tracking-wider font-mono">
            Observed DOM Resource Dependencies
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-stone-200 dark:border-slate-800 text-center space-y-1">
              <span className="text-stone-500 dark:text-slate-500">Scripts (JS)</span>
              <div className="text-lg font-bold text-[#26364a] dark:text-white">{resourceCounts.scripts || 0}</div>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-stone-200 dark:border-slate-800 text-center space-y-1">
              <span className="text-stone-500 dark:text-slate-500">Stylesheets (CSS)</span>
              <div className="text-lg font-bold text-[#26364a] dark:text-white">{resourceCounts.stylesheets || 0}</div>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-stone-200 dark:border-slate-800 text-center space-y-1">
              <span className="text-stone-500 dark:text-slate-500">Images</span>
              <div className="text-lg font-bold text-[#26364a] dark:text-white">{resourceCounts.images || 0}</div>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-stone-200 dark:border-slate-800 text-center space-y-1">
              <span className="text-stone-500 dark:text-slate-500">Fonts</span>
              <div className="text-lg font-bold text-[#26364a] dark:text-white">{resourceCounts.fonts || 0}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
