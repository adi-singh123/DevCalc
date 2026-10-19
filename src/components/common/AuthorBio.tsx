import { BadgeCheck, ClipboardCheck } from "lucide-react";

type Props = {
  disclaimer?: string;
  updated?: string;
  category?: string;
};

/** A factual editorial-accountability block without repetitive personal biography. */
export default function AuthorBio({ disclaimer, updated, category }: Props) {
  const key = category?.toLowerCase() ?? "";
  const reviewFocus = key === "health"
    ? "formula selection, units, limitations and clear medical disclaimers"
    : key === "finance"
      ? "calculation logic, worked examples, assumptions and financial limitations"
      : key === "construction"
        ? "measurement units, material assumptions, wastage and practical limitations"
        : key === "education"
          ? "formula accuracy, worked examples and institution-specific limitations"
          : "calculation behavior, examples, clarity and stated limitations";

  return (
    <section className="mt-16 rounded-2xl border border-stone-200 bg-[#faf7f0] p-6 dark:border-slate-700 dark:bg-slate-900">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#1f3a5c]/15 bg-white text-[#1f3a5c] shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-blue-400">
          <ClipboardCheck aria-hidden="true" size={26} />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-serif text-lg font-semibold text-[#26364a] dark:text-white">
              Reviewed by the DevCalc Editorial Team
            </h2>
            <BadgeCheck aria-hidden="true" size={18} className="text-[#1f3a5c] dark:text-blue-400" />
          </div>

          <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-slate-400">
            This page is maintained through a documented review of {reviewFocus}.
            DevCalc is founded and maintained by software engineer Aditya Singh. Important financial,
            health, legal and government figures should still be confirmed with the relevant official source.
          </p>

          {updated && (
            <p className="mt-3 text-xs text-stone-500 dark:text-slate-500">
              Last reviewed:{" "}
              {new Date(updated).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}

          {disclaimer && (
            <p className="mt-3 rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs leading-5 text-stone-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
              {disclaimer}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
