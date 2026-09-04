"use client";

import React, { useState } from "react";
import { XRayScanResult } from "@/src/lib/website-xray/types";
import {
  Globe,
  Clock,
  Share2,
  Download,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Server,
  Zap,
} from "lucide-react";

interface XRaySummaryCardProps {
  result: XRayScanResult;
}

export const XRaySummaryCard: React.FC<XRaySummaryCardProps> = ({ result }) => {
  const [copied, setCopied] = useState(false);

  const scoreTotal = result.overallScore.total;
  const scoreGrade = result.overallScore.grade;

  const getScoreBadgeColor = (score: number) => {
    if (score >= 90) return "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:border-emerald-500/30 dark:bg-emerald-950/40";
    if (score >= 75) return "text-blue-700 bg-blue-50 border-blue-200 dark:text-blue-400 dark:border-blue-500/30 dark:bg-blue-950/40";
    if (score >= 60) return "text-amber-700 bg-amber-50 border-amber-200 dark:text-amber-400 dark:border-amber-500/30 dark:bg-amber-950/40";
    return "text-rose-700 bg-rose-50 border-rose-200 dark:text-rose-400 dark:border-rose-500/30 dark:bg-rose-950/40";
  };

  const getScoreStrokeColor = (score: number) => {
    if (score >= 90) return "#10b981";
    if (score >= 75) return "#3b82f6";
    if (score >= 60) return "#f59e0b";
    return "#f43f5e";
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleExportJson = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(result, null, 2)
    )}`;
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", jsonString);
    downloadAnchor.setAttribute(
      "download",
      `devcalc-xray-${result.target.hostname.replace(/[^a-zA-Z0-9]/g, "_")}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scoreTotal / 100) * circumference;

  return (
    <div className="bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-xl space-y-6 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
        {/* Domain and Metadata */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 dark:bg-indigo-950/80 dark:border-indigo-500/30 dark:text-indigo-400">
              <Globe className="w-4 h-4" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#26364a] dark:text-white tracking-tight">
              {result.target.hostname}
            </h2>
            <a
              href={result.target.finalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors p-1"
              title="Open scanned URL"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            {result.scanMeta.cached && (
              <span className="px-2.5 py-0.5 rounded-md bg-stone-100 border border-stone-200 text-stone-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 text-[11px] font-mono font-medium">
                CACHED
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-500 dark:text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-stone-400 dark:text-slate-500" />
              {new Date(result.scanMeta.scannedAts).toLocaleString()}
            </span>
            <span className="text-stone-300 dark:text-slate-600">|</span>
            <span>HTTP {result.http.statusCode}</span>
            <span className="text-stone-300 dark:text-slate-600">|</span>
            <span>{result.performance.totalResponseTimeMs}ms Scan Latency</span>
          </div>
        </div>

        {/* Score Circular Gauge */}
        <div className="flex items-center gap-5 bg-stone-50 dark:bg-slate-950/70 border border-stone-200 dark:border-slate-800/80 p-4 rounded-xl shadow-2xs">
          <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 96 96">
              <circle
                cx="48"
                cy="48"
                r={radius}
                className="stroke-stone-200 dark:stroke-slate-800"
                strokeWidth="7"
                fill="transparent"
              />
              <circle
                cx="48"
                cy="48"
                r={radius}
                stroke={getScoreStrokeColor(scoreTotal)}
                strokeWidth="7"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-black text-[#26364a] dark:text-white leading-none">
                {scoreTotal}
              </span>
              <span className="text-[10px] text-stone-500 dark:text-slate-400 font-mono uppercase tracking-wider mt-0.5">
                Score
              </span>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs text-stone-500 dark:text-slate-400 font-medium">DevCalc Rating</div>
            <div
              className={`inline-flex items-center px-2.5 py-1 rounded-md border text-xs font-bold font-mono ${getScoreBadgeColor(
                scoreTotal
              )}`}
            >
              Grade {scoreGrade}
            </div>
            <div className="text-[11px] text-stone-500 dark:text-slate-500">
              {scoreTotal >= 85 ? "Production Ready" : "Optimization Recommended"}
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-stone-200 dark:border-slate-800/80">
        <div className="bg-stone-50 dark:bg-slate-950/50 border border-stone-200 dark:border-slate-800/70 rounded-xl p-3.5 space-y-1">
          <div className="text-[11px] text-stone-600 dark:text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Security Posture</span>
          </div>
          <div className="text-lg font-bold text-[#26364a] dark:text-white">
            {result.security.score}
            <span className="text-xs text-stone-400 dark:text-slate-500 font-normal"> / 100</span>
          </div>
        </div>

        <div className="bg-stone-50 dark:bg-slate-950/50 border border-stone-200 dark:border-slate-800/70 rounded-xl p-3.5 space-y-1">
          <div className="text-[11px] text-stone-600 dark:text-slate-400 flex items-center gap-1.5">
            <Server className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Hosting & CDN</span>
          </div>
          <div className="text-sm font-semibold text-[#26364a] dark:text-slate-200 truncate">
            {result.infrastructure.cdn?.name ||
              result.infrastructure.hosting?.name ||
              "Standard Edge"}
          </div>
        </div>

        <div className="bg-stone-50 dark:bg-slate-950/50 border border-stone-200 dark:border-slate-800/70 rounded-xl p-3.5 space-y-1">
          <div className="text-[11px] text-stone-600 dark:text-slate-400 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>TTFB Latency</span>
          </div>
          <div className="text-lg font-bold text-[#26364a] dark:text-white">
            {result.performance.ttfbMs}
            <span className="text-xs text-stone-400 dark:text-slate-500 font-normal">ms</span>
          </div>
        </div>

        <div className="bg-stone-50 dark:bg-slate-950/50 border border-stone-200 dark:border-slate-800/70 rounded-xl p-3.5 space-y-1">
          <div className="text-[11px] text-stone-600 dark:text-slate-400 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Discovered APIs</span>
          </div>
          <div className="text-lg font-bold text-[#26364a] dark:text-white">
            {result.apis.length}
            <span className="text-xs text-stone-400 dark:text-slate-500 font-normal"> endpoints</span>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="text-xs text-stone-500 dark:text-slate-500 font-mono">
          Redirect Hops: {result.http.redirectChain.length}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-stone-200 dark:border-slate-700 text-stone-700 dark:text-slate-300 hover:text-stone-900 dark:hover:text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share URL</span>
              </>
            )}
          </button>

          <button
            onClick={handleExportJson}
            className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 dark:bg-indigo-950/80 dark:hover:bg-indigo-900 dark:border-indigo-500/30 dark:text-indigo-300 dark:hover:text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export JSON</span>
          </button>
        </div>
      </div>
    </div>
  );
};
