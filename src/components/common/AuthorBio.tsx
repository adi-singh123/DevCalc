import Link from "next/link";
import { BadgeCheck } from "lucide-react";

type Props = {
  /** Shown above the disclaimer. Health/finance pages pass a topic-specific note. */
  disclaimer?: string;
  /** Optional ISO date string, e.g. "2026-01-15", to show a "last reviewed" line. */
  updated?: string;
};

/**
 * Author / E-E-A-T trust block. Kept factual and consistent with the About page.
 * Reused on calculator pages and blog posts so ad-bearing content carries a
 * clear, accountable author and an appropriate disclaimer.
 */
export default function AuthorBio({ disclaimer, updated }: Props) {
  return (
    <section className="mt-16 rounded-2xl border border-stone-200 bg-[#faf7f0] p-6 dark:border-slate-700 dark:bg-slate-900">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#1f3a5c]/15 bg-white text-2xl font-serif font-semibold text-[#1f3a5c] shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-blue-400">
          AS
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-serif text-lg font-semibold text-[#26364a] dark:text-white">
              Written &amp; maintained by Aditya Singh
            </h2>
            <BadgeCheck size={18} className="text-[#1f3a5c] dark:text-blue-400" />
          </div>

          <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-slate-400">
            Aditya Singh is a software engineer and the founder of DevCalc,
            based in Uttar Pradesh, India. He builds and maintains every
            calculator on this site, using standard, verified formulas — the same
            ones used by banks, institutions, and educators — with careful
            attention to accuracy.{" "}
            <Link
              href="/about"
              className="font-semibold text-[#1f3a5c] hover:underline dark:text-blue-400"
            >
              Read more about the author →
            </Link>
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
