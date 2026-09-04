"use client";

import React, { useState, useMemo } from "react";
import { ObservedApi } from "@/src/lib/website-xray/types";
import { Network, Search, Copy, Check, ShieldCheck, Globe, Database, Sparkles, Layers, Image as ImageIcon } from "lucide-react";

interface XRayApiSectionProps {
  apis: ObservedApi[];
}

export const XRayApiSection: React.FC<XRayApiSectionProps> = ({ apis }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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

  const filteredApis = useMemo(() => {
    return apis.filter((api) => {
      const matchesSearch =
        api.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
        api.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
        api.host.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (api.details?.initiator && api.details.initiator.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (selectedType === "all") return true;
      if (selectedType === "live") return api.source === "live-request";
      if (selectedType === "write") return ["POST", "PUT", "PATCH", "DELETE"].includes(api.method);
      if (selectedType === "rest") return api.resourceType === "rest";
      if (selectedType === "cdn-transform") return api.resourceType === "cdn-transform";
      if (selectedType === "query") return api.resourceType === "discovered-endpoint";
      if (selectedType === "next-data") return api.resourceType === "next-data";
      if (selectedType === "structured-data") return api.resourceType === "structured-data";
      if (selectedType === "microservice") return api.resourceType === "microservice";
      if (selectedType === "graphql") return api.resourceType === "graphql";
      if (selectedType === "fetch") return api.resourceType === "fetch" || api.resourceType === "xhr";
      return true;
    });
  }, [apis, searchQuery, selectedType]);

  const typeCounts = useMemo(() => {
    return {
      all: apis.length,
      live: apis.filter((a) => a.source === "live-request").length,
      write: apis.filter((a) => ["POST", "PUT", "PATCH", "DELETE"].includes(a.method)).length,
      rest: apis.filter((a) => a.resourceType === "rest").length,
      "cdn-transform": apis.filter((a) => a.resourceType === "cdn-transform").length,
      query: apis.filter((a) => a.resourceType === "discovered-endpoint").length,
      "next-data": apis.filter((a) => a.resourceType === "next-data").length,
      "structured-data": apis.filter((a) => a.resourceType === "structured-data").length,
      microservice: apis.filter((a) => a.resourceType === "microservice").length,
      graphql: apis.filter((a) => a.resourceType === "graphql").length,
      fetch: apis.filter((a) => a.resourceType === "fetch" || a.resourceType === "xhr").length,
    };
  }, [apis]);

  if (apis.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 rounded-2xl p-8 text-center space-y-4 shadow-xs">
        <div className="w-12 h-12 rounded-full bg-stone-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-stone-400 dark:text-slate-500">
          <Network className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-[#26364a] dark:text-slate-200">No Observable Public API Endpoints</h3>
          <p className="text-xs text-stone-500 dark:text-slate-400 max-w-lg mx-auto">
            Our deep scanner analyzed the full DOM, script bundles, and fetch patterns. This page is either statically rendered server-side without exposed public APIs or operates behind private microservice proxies.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-[11px] text-stone-400 dark:text-slate-500">
          <span className="flex items-center gap-1 bg-stone-50 dark:bg-slate-950 px-2.5 py-1 rounded-md border border-stone-200 dark:border-slate-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> HTML & Bundles Scanned
          </span>
          <span className="flex items-center gap-1 bg-stone-50 dark:bg-slate-950 px-2.5 py-1 rounded-md border border-stone-200 dark:border-slate-800">
            <Globe className="w-3.5 h-3.5 text-blue-500" /> Subdomains Checked
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs dark:shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 dark:bg-indigo-950/80 dark:border-indigo-500/30 dark:text-indigo-400 shadow-2xs">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#26364a] dark:text-white flex items-center gap-2">
              Discovered APIs & Dynamic Endpoints
              <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-500/30 text-xs font-semibold">
                {apis.length} Found
              </span>
              {typeCounts.live > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-500/30 text-xs font-semibold">
                  {typeCounts.live} Observed Live
                </span>
              )}
            </h3>
            <p className="text-xs text-stone-500 dark:text-slate-400">
              Request calls found in the page and its client bundles. Runtime-only requests may require browser interaction and cannot be confirmed by a static scan.
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Filter endpoint or path..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-stone-50 dark:bg-slate-950 border border-stone-200 dark:border-slate-800 text-stone-800 dark:text-slate-200 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-[#26364a] dark:focus:ring-indigo-500 transition-all"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-stone-200 dark:border-slate-800/80 pb-3 text-xs">
        <button
          onClick={() => setSelectedType("all")}
          className={`px-3 py-1 rounded-lg font-medium transition-all ${
            selectedType === "all"
              ? "bg-[#26364a] text-white dark:bg-indigo-600 dark:text-white shadow-xs"
              : "bg-stone-100 text-stone-600 hover:bg-stone-200/70 dark:bg-slate-800 dark:text-slate-400"
          }`}
        >
          All ({typeCounts.all})
        </button>
        {typeCounts.live > 0 && (
          <button
            onClick={() => setSelectedType("live")}
            className={`px-3 py-1 rounded-lg font-medium transition-all ${
              selectedType === "live"
                ? "bg-emerald-600 text-white shadow-xs"
                : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300"
            }`}
          >
            Observed Live ({typeCounts.live})
          </button>
        )}
        {typeCounts.write > 0 && (
          <button
            onClick={() => setSelectedType("write")}
            className={`px-3 py-1 rounded-lg font-medium transition-all ${
              selectedType === "write"
                ? "bg-[#26364a] text-white dark:bg-indigo-600 dark:text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/70 dark:bg-slate-800 dark:text-slate-400"
            }`}
          >
            Write APIs ({typeCounts.write})
          </button>
        )}
        {typeCounts.rest > 0 && (
          <button
            onClick={() => setSelectedType("rest")}
            className={`px-3 py-1 rounded-lg font-medium transition-all ${
              selectedType === "rest"
                ? "bg-[#26364a] text-white dark:bg-indigo-600 dark:text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/70 dark:bg-slate-800 dark:text-slate-400"
            }`}
          >
            REST ({typeCounts.rest})
          </button>
        )}
        {typeCounts["cdn-transform"] > 0 && (
          <button
            onClick={() => setSelectedType("cdn-transform")}
            className={`px-3 py-1 rounded-lg font-medium transition-all flex items-center gap-1 ${
              selectedType === "cdn-transform"
                ? "bg-[#26364a] text-white dark:bg-indigo-600 dark:text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/70 dark:bg-slate-800 dark:text-slate-400"
            }`}
          >
            <ImageIcon className="w-3 h-3" /> CDN Transforms ({typeCounts["cdn-transform"]})
          </button>
        )}
        {typeCounts.query > 0 && (
          <button
            onClick={() => setSelectedType("query")}
            className={`px-3 py-1 rounded-lg font-medium transition-all flex items-center gap-1 ${
              selectedType === "query"
                ? "bg-[#26364a] text-white dark:bg-indigo-600 dark:text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/70 dark:bg-slate-800 dark:text-slate-400"
            }`}
          >
            <Sparkles className="w-3 h-3" /> Dynamic Routes ({typeCounts.query})
          </button>
        )}
        {typeCounts["structured-data"] > 0 && (
          <button
            onClick={() => setSelectedType("structured-data")}
            className={`px-3 py-1 rounded-lg font-medium transition-all flex items-center gap-1 ${
              selectedType === "structured-data"
                ? "bg-[#26364a] text-white dark:bg-indigo-600 dark:text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/70 dark:bg-slate-800 dark:text-slate-400"
            }`}
          >
            <Database className="w-3 h-3" /> Schema Feeds ({typeCounts["structured-data"]})
          </button>
        )}
        {typeCounts["next-data"] > 0 && (
          <button
            onClick={() => setSelectedType("next-data")}
            className={`px-3 py-1 rounded-lg font-medium transition-all flex items-center gap-1 ${
              selectedType === "next-data"
                ? "bg-[#26364a] text-white dark:bg-indigo-600 dark:text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/70 dark:bg-slate-800 dark:text-slate-400"
            }`}
          >
            <Layers className="w-3 h-3" /> Next.js Data ({typeCounts["next-data"]})
          </button>
        )}
        {typeCounts.microservice > 0 && (
          <button
            onClick={() => setSelectedType("microservice")}
            className={`px-3 py-1 rounded-lg font-medium transition-all ${
              selectedType === "microservice"
                ? "bg-[#26364a] text-white dark:bg-indigo-600 dark:text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/70 dark:bg-slate-800 dark:text-slate-400"
            }`}
          >
            Microservices ({typeCounts.microservice})
          </button>
        )}
        {typeCounts.graphql > 0 && (
          <button
            onClick={() => setSelectedType("graphql")}
            className={`px-3 py-1 rounded-lg font-medium transition-all ${
              selectedType === "graphql"
                ? "bg-[#26364a] text-white dark:bg-indigo-600 dark:text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/70 dark:bg-slate-800 dark:text-slate-400"
            }`}
          >
            GraphQL ({typeCounts.graphql})
          </button>
        )}
        {typeCounts.fetch > 0 && (
          <button
            onClick={() => setSelectedType("fetch")}
            className={`px-3 py-1 rounded-lg font-medium transition-all ${
              selectedType === "fetch"
                ? "bg-[#26364a] text-white dark:bg-indigo-600 dark:text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/70 dark:bg-slate-800 dark:text-slate-400"
            }`}
          >
            Fetch / AJAX ({typeCounts.fetch})
          </button>
        )}
      </div>

      {/* Discovered APIs List */}
      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
        {filteredApis.length === 0 ? (
          <div className="p-6 text-center text-xs text-stone-500 dark:text-slate-400 bg-stone-50 dark:bg-slate-950/60 rounded-xl border border-stone-200 dark:border-slate-800">
            No endpoints match your active search or filter tab.
          </div>
        ) : (
          filteredApis.map((api) => (
            <div
              key={api.id}
              className="bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800/80 hover:border-stone-300 dark:hover:border-slate-700/80 rounded-xl p-3.5 space-y-2.5 transition-all text-xs font-mono shadow-2xs"
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
                  <span
                    className="text-stone-900 dark:text-slate-100 font-semibold truncate select-all cursor-pointer hover:underline"
                    title={api.url}
                    onClick={() => handleCopy(api.id, api.url)}
                  >
                    {api.path || api.url}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {api.status && (
                    <span className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 text-stone-600 dark:text-slate-400 text-[10px] font-sans font-semibold">
                      {api.status}{api.durationMs ? ` · ${api.durationMs}ms` : ""}
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 text-stone-600 dark:text-slate-400 text-[10px] uppercase font-sans font-medium">
                    {api.resourceType}
                  </span>
                  <button
                    onClick={() => handleCopy(api.id, api.url)}
                    className="p-1 rounded-md bg-white hover:bg-stone-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-stone-200 dark:border-slate-800 text-stone-600 dark:text-slate-400 transition-colors"
                    title="Copy full URL"
                  >
                    {copiedId === api.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Endpoint Meta & Initiator */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-sans text-stone-500 dark:text-slate-400 pt-1 border-t border-stone-200/60 dark:border-slate-800/60">
                <div className="flex items-center gap-2 truncate">
                  <span className="font-semibold text-stone-700 dark:text-slate-300">Host:</span>
                  <span className="font-mono text-stone-600 dark:text-slate-400">{api.host}</span>
                </div>
                {api.details?.initiator && (
                  <div className="flex items-center gap-1.5 text-stone-500 dark:text-slate-400 truncate">
                    <span className="font-medium text-stone-600 dark:text-slate-300">Source:</span>
                    <span className="truncate">{api.details.initiator}</span>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
