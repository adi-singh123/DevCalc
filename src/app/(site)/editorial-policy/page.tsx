import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenCheck, CheckCircle2, RefreshCw, ShieldCheck } from "lucide-react";
import Breadcrumb from "@/src/components/seo/Breadcrumb";
import BreadcrumbSchema from "@/src/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How DevCalc researches, tests, reviews, corrects and updates calculator pages and practical articles.",
  alternates: { canonical: "https://www.devcalc.in/editorial-policy" },
};

const standards = [
  {
    icon: BookOpenCheck,
    title: "Method before marketing",
    text: "A calculator page should explain what its inputs mean, show the formula or decision rules it applies, include a worked example, and state important limitations. We do not describe an estimate as an official quote, diagnosis or guaranteed outcome.",
  },
  {
    icon: CheckCircle2,
    title: "Functional review",
    text: "Inputs, validation, units, boundary cases and displayed results are checked against the documented method. Where a result depends on government rules, institutional policies or market prices, the page tells readers to confirm the current figure with the responsible source.",
  },
  {
    icon: ShieldCheck,
    title: "Higher care for important decisions",
    text: "Finance, tax, health, legal and construction pages include category-specific limitations. DevCalc tools support preliminary planning and education; they do not replace a qualified adviser, clinician, engineer, institution or government authority.",
  },
  {
    icon: RefreshCw,
    title: "Corrections and updates",
    text: "Pages are updated when formulas, source rules or product behavior change. A displayed review date should reflect an actual content check. Readers can report an error through the contact page, and material corrections are prioritized over adding new pages.",
  },
];

export default function EditorialPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Editorial Policy", url: "/editorial-policy" }]} />
      <Breadcrumb items={[{ label: "Editorial Policy" }]} />

      <header className="mt-6 max-w-4xl border-l-4 border-[#1f3a5c] pl-6 sm:pl-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f3a5c] dark:text-blue-400">Accountability</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#26364a] sm:text-5xl dark:text-white">How DevCalc reviews its calculators and articles</h1>
        <p className="mt-5 text-lg leading-8 text-stone-600 dark:text-slate-300">DevCalc is an independent calculator and practical-information website founded by software engineer Aditya Singh. This policy explains how the DevCalc Editorial Team turns a calculation method into a useful page, where automation may assist, and what readers should verify independently.</p>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {standards.map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <Icon aria-hidden="true" className="text-[#1f3a5c] dark:text-blue-400" size={28} />
            <h2 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">{title}</h2>
            <p className="mt-3 leading-7 text-stone-600 dark:text-slate-300">{text}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-3xl bg-[#f1ece3] p-7 sm:p-10 dark:bg-slate-900">
        <h2 className="font-serif text-3xl font-semibold text-[#26364a] dark:text-white">Our publishing workflow</h2>
        <ol className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            ["1", "Define the user question", "We identify the decision the calculator should support and avoid creating a page only because a keyword exists."],
            ["2", "Document the method", "Inputs, formula, units, assumptions, rounding and a worked example are written so a reader can understand the result."],
            ["3", "Test the implementation", "The interactive calculator is checked with normal, boundary and invalid inputs before publication."],
            ["4", "Review the complete page", "Explanations, FAQs, internal links, sources and limitations are checked for clarity, usefulness and consistency with the working tool."],
          ].map(([number, title, text]) => (
            <li key={number} className="flex gap-4 rounded-2xl bg-white p-5 dark:bg-slate-800">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1f3a5c] font-bold text-white">{number}</span>
              <div><h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-stone-600 dark:text-slate-300">{text}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Use of automation and AI assistance</h2>
          <p className="mt-4 leading-7 text-stone-600 dark:text-slate-300">Automation may help collect structured source details, identify missing fields, format drafts or run repeatable quality checks. It does not remove DevCalc&apos;s responsibility for the published result. Automatically produced wording must be reviewed for factual support, relevance, repetition and clarity before it is treated as editorial content.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Sources and independence</h2>
          <p className="mt-4 leading-7 text-stone-600 dark:text-slate-300">Where a calculation depends on an external rule, we prefer primary sources such as government departments, regulators, standards bodies and recognised institutions. A source explains where a figure came from; it does not mean that the source endorses DevCalc. Advertising and commercial enquiries do not determine calculator results or editorial conclusions.</p>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-[#1f3a5c]/20 bg-white p-8 text-center dark:border-blue-900 dark:bg-slate-900">
        <h2 className="font-serif text-2xl font-semibold text-[#26364a] dark:text-white">Found an error or an unclear assumption?</h2>
        <p className="mx-auto mt-3 max-w-2xl leading-7 text-stone-600 dark:text-slate-300">Tell us which page, input and result you checked. Reproducible correction reports help us improve existing tools before publishing more content.</p>
        <Link href="/contact" className="mt-6 inline-flex rounded-full bg-[#1f3a5c] px-6 py-3 font-semibold text-white transition hover:bg-[#162a43]">Report a correction</Link>
      </section>
    </main>
  );
}
