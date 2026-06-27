"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// ── Accordion FAQ (used in both article and bottom section) ─────────────────
export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
              isOpen
                ? " bg-white dark:bg-slate-900"
                : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={`text-sm font-semibold leading-snug ${
                  isOpen
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-800 dark:text-slate-100"
                }`}
              >
                {faq.q}
              </span>
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
                  isOpen
                    ? "bg-blue-50 dark:bg-blue-900/30"
                    : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                }`}
              >
                {isOpen ? (
                  <Minus size={12} className="text-blue-600 dark:text-blue-400" />
                ) : (
                  <Plus size={12} className="text-slate-500 dark:text-slate-400" />
                )}
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 border-t border-slate-100 dark:border-slate-800">
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

