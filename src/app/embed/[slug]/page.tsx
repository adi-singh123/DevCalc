import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CalculatorRenderer from "@/src/components/calculator/CalculatorRenderer";
import { calculators } from "@/src/data/calculators";

export const metadata: Metadata = {
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
};

export function generateStaticParams() {
  return calculators.map(({ slug }) => ({ slug }));
}

export default async function EmbeddedCalculatorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const calculator = calculators.find((item) => item.slug === slug);
  if (!calculator) notFound();

  return (
    <main className="mx-auto max-w-4xl p-3 sm:p-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Free calculator by DevCalc</p>
        <h1 className="mt-1 text-xl font-bold text-[#26364a] dark:text-white">{calculator.name}</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{calculator.description}</p>
      </div>
      <CalculatorRenderer slug={calculator.slug} />
      <footer className="py-5 text-center text-xs text-slate-600 dark:text-slate-400">
        Powered by{" "}
        <Link href={`https://www.devcalc.in/${calculator.slug}`} target="_blank" rel="noopener noreferrer nofollow" className="font-semibold text-blue-700 underline underline-offset-2 dark:text-blue-400">
          {calculator.name} on DevCalc
        </Link>
      </footer>
    </main>
  );
}
