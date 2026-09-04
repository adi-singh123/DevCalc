"use client";

import React, { useState, useEffect } from "react";
import { Search, Loader2, Sparkles, AlertCircle, RefreshCw } from "lucide-react";

interface XRayScannerFormProps {
  onScan: (url: string, forceFresh?: boolean) => void;
  isLoading: boolean;
  initialUrl?: string;
  error?: string | null;
}

const SCAN_STEPS = [
  "Resolving DNS authoritative records...",
  "Probing TLS 1.3 socket & cipher suites...",
  "Fetching HTML DOM & headers...",
  "Fingerprinting frontend frameworks & CMS...",
  "Auditing passive security & CSP policies...",
  "Tracing REST & GraphQL API endpoints...",
  "Synthesizing DevCalc X-Ray Score...",
];

export const XRayScannerForm: React.FC<XRayScannerFormProps> = ({
  onScan,
  isLoading,
  initialUrl = "",
  error,
}) => {
  const [inputUrl, setInputUrl] = useState(initialUrl);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    if (initialUrl) {
      setInputUrl(initialUrl);
    }
  }, [initialUrl]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      setCurrentStepIndex(0);
      interval = setInterval(() => {
        setCurrentStepIndex((prev) => (prev < SCAN_STEPS.length - 1 ? prev + 1 : prev));
      }, 750);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleSubmit = (e: React.FormEvent, force = false) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;
    onScan(inputUrl.trim(), force);
  };

  const sampleTargets = [
    "https://nextjs.org",
    "https://tailwindcss.com",
    "https://github.com",
    "https://stripe.com",
  ];

  return (
    <div className="w-full space-y-4">
      <form
        onSubmit={(e) => handleSubmit(e, false)}
        className="relative flex flex-col sm:flex-row items-center gap-3 bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 p-2.5 rounded-2xl shadow-sm dark:shadow-xl backdrop-blur-md"
      >
        <div className="relative flex-1 w-full flex items-center">
          <div className="absolute left-4 text-stone-400 dark:text-slate-500 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          </div>
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="Enter website URL (e.g. stripe.com or https://example.com)"
            disabled={isLoading}
            className="w-full pl-11 pr-4 py-3 bg-stone-50 dark:bg-slate-950/70 border border-stone-200 dark:border-slate-800 rounded-xl text-sm text-stone-900 dark:text-slate-100 placeholder-stone-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all font-mono"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            type="submit"
            disabled={isLoading || !inputUrl.trim()}
            className="flex-1 sm:flex-none px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-sm font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Scanning...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-indigo-100" />
                <span>Run X-Ray</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={(e) => handleSubmit(e, true)}
            disabled={isLoading || !inputUrl.trim()}
            title="Bypass cache and force a fresh scan"
            className="p-3 bg-stone-100 hover:bg-stone-200 dark:bg-slate-950 border border-stone-200 dark:border-slate-800 text-stone-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-300 dark:hover:border-slate-700 rounded-xl transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </form>

      {/* Loading Progress Stepper */}
      {isLoading && (
        <div className="p-4 bg-white dark:bg-slate-900/90 border border-indigo-200 dark:border-indigo-500/20 rounded-xl space-y-2 animate-fadeIn shadow-xs">
          <div className="flex items-center justify-between text-xs text-stone-600 dark:text-slate-400 font-mono">
            <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              {SCAN_STEPS[currentStepIndex]}
            </span>
            <span>{currentStepIndex + 1} / {SCAN_STEPS.length}</span>
          </div>
          <div className="w-full h-1.5 bg-stone-100 dark:bg-slate-950 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 dark:to-emerald-400 transition-all duration-500 rounded-full"
              style={{ width: `${((currentStepIndex + 1) / SCAN_STEPS.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/80 rounded-xl text-rose-700 dark:text-rose-300 text-xs flex items-start gap-3 animate-fadeIn">
          <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold">Scan Failed</p>
            <p className="text-rose-600 dark:text-rose-400">{error}</p>
          </div>
        </div>
      )}

      {/* Quick Test Links */}
      <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-stone-500 dark:text-slate-400">
        <span className="text-stone-500 dark:text-slate-500 font-medium">Quick Test:</span>
        {sampleTargets.map((target) => (
          <button
            key={target}
            type="button"
            onClick={() => {
              setInputUrl(target);
              onScan(target);
            }}
            disabled={isLoading}
            className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 hover:bg-stone-100 dark:hover:bg-slate-800 border border-stone-200 dark:border-slate-800 hover:border-stone-300 dark:hover:border-slate-700 text-stone-700 dark:text-slate-300 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer font-mono text-[11px] disabled:opacity-50 shadow-2xs"
          >
            {target.replace("https://", "")}
          </button>
        ))}
      </div>
    </div>
  );
};
