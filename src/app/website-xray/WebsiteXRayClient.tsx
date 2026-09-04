"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { XRayScanResult, ScanResponsePayload } from "@/src/lib/website-xray/types";
import { XRayScannerForm } from "@/src/components/website-xray/XRayScannerForm";
import { XRaySummaryCard } from "@/src/components/website-xray/XRaySummaryCard";
import { XRayTechSection } from "@/src/components/website-xray/XRayTechSection";
import { XRayInfrastructureSection } from "@/src/components/website-xray/XRayInfrastructureSection";
import { XRayApiSection } from "@/src/components/website-xray/XRayApiSection";
import { XRayThirdPartySection } from "@/src/components/website-xray/XRayThirdPartySection";
import { XRaySecuritySection } from "@/src/components/website-xray/XRaySecuritySection";
import { XRaySeoSection } from "@/src/components/website-xray/XRaySeoSection";
import { XRayPerformanceSection } from "@/src/components/website-xray/XRayPerformanceSection";
import { XRayEvidenceSection } from "@/src/components/website-xray/XRayEvidenceSection";
import {
  Layers,
  Server,
  Network,
  Share2,
  ShieldCheck,
  Search,
  Zap,
  Terminal,
  LayoutGrid,
} from "lucide-react";

type ActiveTab =
  | "overview"
  | "tech"
  | "infra"
  | "apis"
  | "third-party"
  | "security"
  | "seo"
  | "performance"
  | "evidence";

export const WebsiteXRayClient: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<XRayScanResult | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>("overview");

  const queryUrl = searchParams.get("url");

  useEffect(() => {
    if (queryUrl && !result && !isLoading) {
      handleScan(queryUrl);
    }
  }, [queryUrl]);

  const handleScan = async (targetUrl: string, forceFresh = false) => {
    setIsLoading(true);
    setError(null);

    try {
      router.replace(`/website-x-ray?url=${encodeURIComponent(targetUrl)}`, { scroll: false });

      const res = await fetch("/api/website-xray/scan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: targetUrl, forceFresh }),
      });

      const data: ScanResponsePayload = await res.json();

      if (!res.ok || !data.success || !data.data) {
        throw new Error(data.error || "Failed to scan target website.");
      }

      setResult(data.data);
      setActiveTab("overview");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected scan error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const tabs: Array<{ id: ActiveTab; label: string; icon: React.ReactNode; count?: number }> = [
    { id: "overview", label: "Overview", icon: <LayoutGrid className="w-3.5 h-3.5" /> },
    {
      id: "tech",
      label: "Tech Stack",
      icon: <Layers className="w-3.5 h-3.5" />,
      count: result?.technologies.length,
    },
    { id: "infra", label: "Infrastructure", icon: <Server className="w-3.5 h-3.5" /> },
    {
      id: "apis",
      label: "APIs",
      icon: <Network className="w-3.5 h-3.5" />,
      count: result?.apis.length,
    },
    {
      id: "third-party",
      label: "Third-Party",
      icon: <Share2 className="w-3.5 h-3.5" />,
      count: result?.thirdPartyServices.length,
    },
    { id: "security", label: "Security", icon: <ShieldCheck className="w-3.5 h-3.5" /> },
    { id: "seo", label: "SEO Signals", icon: <Search className="w-3.5 h-3.5" /> },
    { id: "performance", label: "Performance", icon: <Zap className="w-3.5 h-3.5" /> },
    { id: "evidence", label: "Raw Evidence", icon: <Terminal className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="space-y-8">
      {/* Scanner Input Form */}
      <XRayScannerForm
        onScan={handleScan}
        isLoading={isLoading}
        initialUrl={queryUrl || ""}
        error={error}
      />

      {/* Results View */}
      {result && (
        <div className="space-y-8 animate-fadeIn">
          {/* Summary Card */}
          <XRaySummaryCard result={result} />

          {/* Segmented Tab Control */}
          <div className="p-1 bg-stone-200/80 dark:bg-slate-900/90 border border-stone-300 dark:border-slate-800 rounded-xl overflow-x-auto scrollbar-none shadow-xs flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "text-stone-700 hover:text-stone-900 hover:bg-stone-100/80 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800/60"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.count !== undefined && tab.count > 0 && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                      activeTab === tab.id
                        ? "bg-white/20 text-white"
                        : "bg-stone-300/80 text-stone-700 dark:bg-slate-800 dark:text-slate-400"
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Active Tab View */}
          <div className="space-y-8">
            {activeTab === "overview" && (
              <div className="space-y-8">
                <XRayTechSection technologies={result.technologies} />
                <XRayInfrastructureSection infrastructure={result.infrastructure} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <XRaySecuritySection security={result.security} />
                  <XRaySeoSection seo={result.seo} />
                </div>
              </div>
            )}

            {activeTab === "tech" && <XRayTechSection technologies={result.technologies} />}

            {activeTab === "infra" && (
              <XRayInfrastructureSection infrastructure={result.infrastructure} />
            )}

            {activeTab === "apis" && (
              <XRayApiSection apis={result.apis} targetHostname={result.target.hostname} />
            )}

            {activeTab === "third-party" && (
              <XRayThirdPartySection services={result.thirdPartyServices} />
            )}

            {activeTab === "security" && <XRaySecuritySection security={result.security} />}

            {activeTab === "seo" && <XRaySeoSection seo={result.seo} />}

            {activeTab === "performance" && (
              <XRayPerformanceSection performance={result.performance} />
            )}

            {activeTab === "evidence" && <XRayEvidenceSection result={result} />}
          </div>
        </div>
      )}
    </div>
  );
};
