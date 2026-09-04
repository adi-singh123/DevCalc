"use client";

import React from "react";
import { SecurityAudit } from "@/src/lib/website-xray/types";
import { ShieldCheck, CheckCircle2, XCircle } from "lucide-react";

interface XRaySecuritySectionProps {
  security: SecurityAudit;
}

export const XRaySecuritySection: React.FC<XRaySecuritySectionProps> = ({ security }) => {
  const { headers, score } = security;

  return (
    <div className="bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs dark:shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 dark:bg-emerald-950/80 dark:border-emerald-500/30 dark:text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#26364a] dark:text-white">Passive Security & Header Audit</h3>
            <p className="text-xs text-stone-500 dark:text-slate-400">HSTS, Content-Security-Policy, and anti-clickjacking directives</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-500 dark:text-slate-400 font-mono">Score:</span>
          <span className="text-sm font-bold text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border dark:border-emerald-500/30 font-mono">
            {score} / 100
          </span>
        </div>
      </div>

      {/* Security Headers Table */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold text-stone-500 dark:text-slate-400 uppercase tracking-wider font-mono">
          Observable HTTP Security Directives
        </h4>
        <div className="space-y-2">
          {headers.map((hdr, idx) => (
            <div
              key={idx}
              className="bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800/80 rounded-xl p-3.5 space-y-1.5 font-mono text-xs shadow-2xs"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {hdr.present ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                  )}
                  <span className="font-bold text-stone-900 dark:text-slate-100">{hdr.header}</span>
                </div>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    hdr.present
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-400 dark:border-emerald-500/30"
                      : "bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/60 dark:text-rose-400 dark:border-rose-500/30"
                  }`}
                >
                  {hdr.present ? "CONFIGURED" : "MISSING"}
                </span>
              </div>

              {hdr.value && (
                <p className="text-[11px] text-stone-700 dark:text-slate-400 bg-white dark:bg-slate-900/80 p-2 rounded border border-stone-200 dark:border-slate-800/80 break-all">
                  {hdr.value}
                </p>
              )}

              {hdr.recommendation && (
                <p className="text-[11px] font-sans text-amber-700 dark:text-amber-400/90 pt-0.5">
                  💡 {hdr.recommendation}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
