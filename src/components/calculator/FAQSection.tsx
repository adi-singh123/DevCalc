"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  faqs: FAQ[];
};

export default function FAQSection({
  faqs,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  return (
    <section className="mt-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h2>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Find answers to common questions about this calculator.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen =
            openIndex === index;

          return (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              <button
                onClick={() =>
                  setOpenIndex(
                    isOpen
                      ? null
                      : index
                  )
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-4
                  p-5
                  text-left
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-100
                      text-sm
                      font-bold
                      text-blue-600
                      dark:bg-blue-500/10
                      dark:text-blue-400
                    "
                  >
                    ?
                  </div>

                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </h3>
                </div>

                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    isOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-slate-200 px-5 py-4 dark:border-slate-700">
                  <div
                    className="
                      max-h-72
                      overflow-y-auto
                      pr-2
                      leading-7
                      text-slate-600
                      dark:text-slate-300
                    "
                  >
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}