"use client";

import React from "react";
import { InfrastructureDetection } from "@/src/lib/website-xray/types";
import { Server, Cloud, Lock, Network, CheckCircle2, XCircle } from "lucide-react";

interface XRayInfrastructureSectionProps {
  infrastructure: InfrastructureDetection;
}

export const XRayInfrastructureSection: React.FC<XRayInfrastructureSectionProps> = ({
  infrastructure,
}) => {
  const { cdn, hosting, server, tls, ipAddresses, nameservers, dnsProvider } = infrastructure;

  return (
    <div className="bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs dark:shadow-xl">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 dark:bg-blue-950/80 dark:border-blue-500/30 dark:text-blue-400">
          <Server className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#26364a] dark:text-white">Infrastructure, Edge CDN & DNS</h3>
          <p className="text-xs text-stone-500 dark:text-slate-400">Edge network routing, SSL certificate validity, and nameserver resolution</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* CDN Info */}
        <div className="bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800/80 rounded-xl p-4 space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-slate-400 font-mono">
            <Cloud className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Content Delivery Network</span>
          </div>
          <div className="text-base font-bold text-[#26364a] dark:text-white">
            {cdn?.name || "Standard Network"}
          </div>
          <p className="text-xs text-stone-600 dark:text-slate-400">
            {cdn?.evidence?.join(", ") || "No specialized CDN headers detected."}
          </p>
        </div>

        {/* Hosting Platform */}
        <div className="bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800/80 rounded-xl p-4 space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-slate-400 font-mono">
            <Server className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Cloud Hosting Platform</span>
          </div>
          <div className="text-base font-bold text-[#26364a] dark:text-white">
            {hosting?.name || "Custom Cloud Infrastructure"}
          </div>
          <p className="text-xs text-stone-600 dark:text-slate-400">
            {hosting?.evidence?.join(", ") || "Origin host deduced from network patterns."}
          </p>
        </div>

        {/* Web Server / Reverse Proxy */}
        <div className="bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800/80 rounded-xl p-4 space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-slate-400 font-mono">
            <Network className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Web Server / Proxy</span>
          </div>
          <div className="text-base font-bold text-[#26364a] dark:text-white">
            {server?.name || "Masked / Protected Proxy"}
          </div>
          <p className="text-xs text-stone-600 dark:text-slate-400">
            {server?.evidence?.join(", ") || "Server headers sanitized by reverse proxy."}
          </p>
        </div>
      </div>

      {/* TLS / SSL Certificate Health */}
      {tls && (
        <div className="bg-stone-50 dark:bg-slate-950/70 border border-stone-200 dark:border-slate-800/90 rounded-xl p-5 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between border-b border-stone-200 dark:border-slate-800/80 pb-3">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <h4 className="text-sm font-bold text-[#26364a] dark:text-white">TLS / SSL Certificate</h4>
            </div>
            {tls.enabled ? (
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-mono font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Valid HTTPS
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs text-rose-700 dark:text-rose-400 font-mono font-semibold">
                <XCircle className="w-3.5 h-3.5" />
                Invalid Certificate
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="space-y-1">
              <span className="text-stone-500 dark:text-slate-500">Issuer Authority:</span>
              <p className="text-stone-800 dark:text-slate-200 font-semibold truncate">{tls.issuer || "Unknown"}</p>
            </div>
            <div className="space-y-1">
              <span className="text-stone-500 dark:text-slate-500">Protocol Version:</span>
              <p className="text-stone-800 dark:text-slate-200 font-semibold">{tls.protocol || "TLSv1.3"}</p>
            </div>
            <div className="space-y-1">
              <span className="text-stone-500 dark:text-slate-500">Validity Window:</span>
              <p className="text-stone-800 dark:text-slate-200">
                {tls.validFrom?.split("T")[0]} to {tls.validTo?.split("T")[0]}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-stone-500 dark:text-slate-500">Expiration Status:</span>
              <p className={tls.daysRemaining && tls.daysRemaining < 30 ? "text-amber-600 dark:text-amber-400 font-bold" : "text-emerald-700 dark:text-emerald-400 font-bold"}>
                {tls.daysRemaining !== undefined ? `${tls.daysRemaining} days remaining` : "Active"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* DNS Records */}
      <div className="bg-stone-50 dark:bg-slate-950/70 border border-stone-200 dark:border-slate-800/90 rounded-xl p-5 space-y-4 shadow-2xs">
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-slate-800/80 pb-3">
          <div className="flex items-center gap-2">
            <Network className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h4 className="text-sm font-bold text-[#26364a] dark:text-white">DNS Routing & Records</h4>
          </div>
          {dnsProvider && (
            <span className="text-xs text-stone-500 dark:text-slate-400 font-mono">
              DNS Provider: <strong className="text-stone-800 dark:text-slate-200">{dnsProvider}</strong>
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
          <div className="space-y-1.5">
            <span className="text-stone-500 dark:text-slate-500 font-medium">A Records (IP Addresses):</span>
            <div className="space-y-0.5 text-stone-700 dark:text-slate-300">
              {ipAddresses && ipAddresses.length > 0 ? (
                ipAddresses.map((ip, i) => <div key={i}>{ip}</div>)
              ) : (
                <div className="text-stone-400 dark:text-slate-600">None resolved</div>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="text-stone-500 dark:text-slate-500 font-medium">Nameservers (NS):</span>
            <div className="space-y-0.5 text-stone-700 dark:text-slate-300 truncate">
              {nameservers && nameservers.length > 0 ? (
                nameservers.map((ns, i) => <div key={i} className="truncate">{ns}</div>)
              ) : (
                <div className="text-stone-400 dark:text-slate-600">None resolved</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
