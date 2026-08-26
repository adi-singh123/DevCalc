import Link from "next/link";
import { Sparkles, Bot, Building2, Car, ArrowRight, Code2, CheckCircle2 } from "lucide-react";

export default function ServicesAndFeaturedSection() {
  return (
    <section className="border-t border-stone-200 bg-[#f4eee2] px-4 py-16 sm:px-6 lg:px-8 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
            Specialized Solutions &amp; Tools
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Explore Custom Development &amp; State-Wise Calculators
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From verified state-wise tax estimation to custom software prototyping and automated web scraping services.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Student Software Projects */}
          <div className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                <Code2 className="h-6 w-6" />
              </div>
              <div className="mt-4 inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300">
                <Sparkles className="h-3 w-3" /> 24h Prototype
              </div>
              <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                Student Software Builds
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Custom full-stack web, AI/ML, and mobile apps with clean code, remote setup, and 24-hour prototype demo before payment.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 dark:border-slate-800">
              <Link
                href="/collegeProject"
                className="inline-flex items-center gap-1 text-sm font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Automation & Web Scraping */}
          <div className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                <Bot className="h-6 w-6" />
              </div>
              <div className="mt-4 inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-0.5 text-xs font-bold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300">
                Playwright &amp; Python
              </div>
              <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                Automation &amp; Scraping
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Automate browser tasks, business workflows, data extraction, bots, and repetitive pipelines with custom test scripts.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 dark:border-slate-800">
              <Link
                href="/want-automation"
                className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                Explore Automation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: State Stamp Duty Calculators */}
          <div className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400">
                <Building2 className="h-6 w-6" />
              </div>
              <div className="mt-4 inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 text-xs font-bold text-amber-700 dark:bg-amber-950/80 dark:text-amber-300">
                Ready Reckoner 2026
              </div>
              <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                Stamp Duty Calculator
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Calculate property registration costs, Ready Reckoner / Circle Rates &amp; women rebates in MH, KA, DL, UP &amp; TN.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 dark:border-slate-800">
              <Link
                href="/stamp-duty-calculator"
                className="inline-flex items-center gap-1 text-sm font-bold text-amber-600 hover:text-amber-700 dark:text-amber-400"
              >
                Calculate Stamp Duty <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Card 4: State Road Tax Calculators */}
          <div className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400">
                <Car className="h-6 w-6" />
              </div>
              <div className="mt-4 inline-flex items-center gap-1 rounded-md bg-purple-50 px-2 py-0.5 text-xs font-bold text-purple-700 dark:bg-purple-950/80 dark:text-purple-300">
                MH, KA, DL, UP &amp; TN
              </div>
              <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                RTO Road Tax Calculator
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Check official vehicle RTO tax slabs, petrol vs diesel rates, EV policy waivers, and BH Series registration rules.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 dark:border-slate-800">
              <Link
                href="/road-tax-calculator"
                className="inline-flex items-center gap-1 text-sm font-bold text-purple-600 hover:text-purple-700 dark:text-purple-400"
              >
                Calculate Road Tax <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}