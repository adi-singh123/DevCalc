"use client";

import React from "react";
import { TechnologyDetection, ConfidenceLevel } from "@/src/lib/website-xray/types";
import { Layers, Cpu } from "lucide-react";

interface XRayTechSectionProps {
  technologies: TechnologyDetection[];
}

export const XRayTechSection: React.FC<XRayTechSectionProps> = ({ technologies }) => {
  const getConfidenceBadge = (level: ConfidenceLevel) => {
    switch (level) {
      case "confirmed":
        return (
          <span className="px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 dark:bg-emerald-950/60 dark:border-emerald-500/30 dark:text-emerald-400 text-[10px] font-mono font-semibold">
            CONFIRMED
          </span>
        );
      case "likely":
        return (
          <span className="px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-950/60 dark:border-blue-500/30 dark:text-blue-400 text-[10px] font-mono font-semibold">
            LIKELY
          </span>
        );
      case "inferred":
      case "possible":
        return (
          <span className="px-2 py-0.5 rounded-md bg-stone-100 border border-stone-200 text-stone-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 text-[10px] font-mono">
            INFERRED
          </span>
        );
      default:
        return null;
    }
  };

  const categories = Array.from(new Set(technologies.map((t) => t.category)));

  if (technologies.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 rounded-2xl p-8 text-center space-y-3 shadow-xs">
        <Cpu className="w-8 h-8 text-stone-400 dark:text-slate-600 mx-auto" />
        <h3 className="text-base font-semibold text-[#26364a] dark:text-slate-300">No Frontend Framework Signatures Detected</h3>
        <p className="text-xs text-stone-500 dark:text-slate-500 max-w-md mx-auto">
          The scanned application may be using vanilla server-rendered HTML or custom proprietary tooling without observable client framework footprints.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs dark:shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 dark:bg-indigo-950/80 dark:border-indigo-500/30 dark:text-indigo-400">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#26364a] dark:text-white">Detected Technology Stack</h3>
            <p className="text-xs text-stone-500 dark:text-slate-400">Frontend frameworks, CMS, state management, and build tools</p>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-lg bg-stone-100 border border-stone-200 text-stone-700 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-300 text-xs font-mono font-semibold">
          {technologies.length} Detected
        </span>
      </div>

      <div className="space-y-6">
        {categories.map((category) => {
          const techsInCategory = technologies.filter((t) => t.category === category);
          return (
            <div key={category} className="space-y-3">
              <h4 className="text-xs font-bold text-stone-500 dark:text-slate-400 uppercase tracking-wider font-mono border-b border-stone-200 dark:border-slate-800/80 pb-1.5">
                {category} ({techsInCategory.length})
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {techsInCategory.map((tech, idx) => (
                  <div
                    key={idx}
                    className="bg-stone-50 dark:bg-slate-950/60 border border-stone-200 dark:border-slate-800/80 hover:border-stone-300 dark:hover:border-slate-700/80 rounded-xl p-4 space-y-2.5 transition-all shadow-2xs"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-stone-900 dark:text-slate-100 text-sm">{tech.name}</span>
                        {tech.version && (
                          <span className="px-2 py-0.5 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 dark:bg-indigo-950 dark:border-indigo-500/30 dark:text-indigo-300 text-[10px] font-mono font-bold">
                            v{tech.version}
                          </span>
                        )}
                      </div>
                      {getConfidenceBadge(tech.confidenceLevel)}
                    </div>

                    {tech.evidence && tech.evidence.length > 0 && (
                      <div className="pt-1 text-[11px] font-mono text-stone-500 dark:text-slate-500 flex items-center gap-1">
                        <span className="text-stone-400 dark:text-slate-600">Evidence:</span>
                        <span className="text-indigo-600 dark:text-indigo-400 truncate">{tech.evidence[0]}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
