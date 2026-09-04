"use client";

import React from "react";
import { SeoAudit } from "@/src/lib/website-xray/types";
import { Search, CheckCircle2 } from "lucide-react";

interface XRaySeoSectionProps {
  seo: SeoAudit;
}

export const XRaySeoSection: React.FC<XRaySeoSectionProps> = ({ seo }) => {
  const { title, description, canonical, hasStructuredData, hasSitemapIndicator, structuredDataTypes } =
    seo;

  return (
    <div className="bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs dark:shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 dark:bg-indigo-950/80 dark:border-indigo-500/30 dark:text-indigo-400">
            <Search className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#26364a] dark:text-white">SEO & Metadata Signals</h3>
            <p className="text-xs text-stone-500 dark:text-slate-400">Open Graph tags, canonical URLs, structured data, and crawler policies</p>
          </div>
        </div>
      </div>

      {/* Basic Meta Info */}
      <div className="space-y-3 font-mono text-xs">
        <div className="bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-stone-500 dark:text-slate-500 font-semibold">Page Title ({title?.length || 0} chars):</span>
          <p className="text-stone-900 dark:text-slate-100 font-sans text-sm font-semibold">
            {title || <span className="text-rose-600 dark:text-rose-400">Missing title tag</span>}
          </p>
        </div>

        <div className="bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-stone-500 dark:text-slate-500 font-semibold">Meta Description ({description?.length || 0} chars):</span>
          <p className="text-stone-700 dark:text-slate-300 font-sans text-xs leading-relaxed">
            {description || <span className="text-amber-600 dark:text-amber-400">Missing meta description</span>}
          </p>
        </div>

        {canonical && (
          <div className="bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800/80 rounded-xl p-3.5 space-y-1 truncate shadow-2xs">
            <span className="text-stone-500 dark:text-slate-500 font-semibold">Canonical URL:</span>
            <p className="text-indigo-600 dark:text-indigo-400 truncate">{canonical}</p>
          </div>
        )}
      </div>

      {/* Crawlability Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-stone-200 dark:border-slate-800/80">
        <div className="bg-stone-50 dark:bg-slate-950/50 border border-stone-200 dark:border-slate-800/70 rounded-xl p-3 flex items-center justify-between text-xs font-mono">
          <span className="text-stone-600 dark:text-slate-400">sitemap.xml Indicator</span>
          {hasSitemapIndicator ? (
            <span className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> Detected
            </span>
          ) : (
            <span className="text-stone-400 dark:text-slate-600">Not Indicated</span>
          )}
        </div>

        <div className="bg-stone-50 dark:bg-slate-950/50 border border-stone-200 dark:border-slate-800/70 rounded-xl p-3 flex items-center justify-between text-xs font-mono">
          <span className="text-stone-600 dark:text-slate-400">Structured Data (JSON-LD)</span>
          {hasStructuredData ? (
            <span className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1 truncate font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              {structuredDataTypes?.join(", ") || "Present"}
            </span>
          ) : (
            <span className="text-stone-400 dark:text-slate-600">None Found</span>
          )}
        </div>
      </div>
    </div>
  );
};
