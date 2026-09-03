"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  faqs: FAQ[];
};

export default function FAQSection({ faqs }: FAQSectionProps) {
  // By default, open all FAQs so users and reviewers immediately see the full answers
  const [openIndices, setOpenIndices] = useState<Set<number>>(
    () => new Set(faqs.map((_, idx) => idx))
  );

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const toggleAll = () => {
    if (openIndices.size === faqs.length) {
      setOpenIndices(new Set());
    } else {
      setOpenIndices(new Set(faqs.map((_, idx) => idx)));
    }
  };

  return (
    <section className="mt-14">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Verified answers to essential calculation and diagnostic questions.
          </p>
        </div>

        <button
          type="button"
          onClick={toggleAll}
          className="self-start text-xs font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400"
        >
          {openIndices.size === faqs.length ? "Collapse All" : "Expand All"}
        </button>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndices.has(index);

          return (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all hover:border-blue-200 dark:border-slate-800 dark:bg-slate-900"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-slate-50/60 dark:hover:bg-slate-800/50"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                    <HelpCircle size={17} />
                  </div>

                  <h3 className="font-semibold text-base text-slate-900 dark:text-white">
                    {faq.question}
                  </h3>
                </div>

                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-slate-100 bg-slate-50/40 px-5 py-4 dark:border-slate-800 dark:bg-slate-900/40">
                  <p className="leading-relaxed text-sm sm:text-base text-slate-700 dark:text-slate-300">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}