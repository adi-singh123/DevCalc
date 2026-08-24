"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = {
  q: string;
  a: string;
};

export default function InteractiveFaq({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-10 space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:border-blue-200 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-slate-900 dark:text-white transition"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                  Q{index + 1}
                </div>
                <span className="text-base sm:text-lg">{faq.q}</span>
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
                }`}
              />
            </button>

            {/* Always rendered in DOM with CSS toggle for Google SEO crawling */}
            <div
              className={`border-t border-stone-100 px-5 py-4 dark:border-slate-800 ${
                isOpen ? "" : "hidden"
              }`}
            >
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
