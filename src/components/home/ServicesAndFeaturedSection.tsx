import Link from "next/link";

const FEATURE_CARDS = [
  {
    eyebrow: "24-hour prototype",
    title: "Student Software Builds",
    description: "Custom full-stack web, AI/ML and mobile applications with clean code, remote setup and a prototype demonstration before payment.",
    href: "/college-project",
    cta: "Learn more",
  },
  {
    eyebrow: "Playwright and Python",
    title: "Automation & Scraping",
    description: "Automate browser tasks, business workflows, data extraction and repetitive pipelines with maintainable custom scripts.",
    href: "/want-automation",
    cta: "Explore automation",
  },
  {
    eyebrow: "Ready Reckoner 2026",
    title: "Stamp Duty Calculator",
    description: "Calculate property registration costs, circle rates and applicable women rebates across supported Indian states.",
    href: "/stamp-duty-calculator",
    cta: "Calculate stamp duty",
  },
  {
    eyebrow: "MH, KA, DL, UP and TN",
    title: "RTO Road Tax Calculator",
    description: "Check vehicle tax slabs, fuel-specific rates, EV policy waivers and BH Series registration guidance.",
    href: "/road-tax-calculator",
    cta: "Calculate road tax",
  },
];

export default function ServicesAndFeaturedSection() {
  return (
    <section className="border-t border-stone-200 bg-[#f4eee2] px-4 py-16 dark:border-slate-800 dark:bg-slate-900/50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1f3a5c] dark:text-blue-300">
            Services and featured tools
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[#26364a] dark:text-white sm:text-4xl">
            Practical tools and development services
          </h2>
          <p className="mt-4 text-sm leading-7 text-stone-600 dark:text-slate-400 sm:text-base">
            Explore state-wise calculators, custom software prototyping and browser automation services from DevCalc.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {FEATURE_CARDS.map((card) => (
            <article
              key={card.href}
              className="flex min-h-64 flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#1f3a5c]/40 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500 dark:text-slate-400">
                {card.eyebrow}
              </p>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-[#26364a] dark:text-white">
                {card.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-stone-600 dark:text-slate-400">
                {card.description}
              </p>
              <div className="mt-6 border-t border-stone-200 pt-5 dark:border-slate-800">
                <Link
                  href={card.href}
                  className="font-semibold text-[#1f3a5c] underline-offset-4 hover:underline dark:text-blue-300"
                >
                  {card.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <article className="mt-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500 dark:text-slate-400">
                Interactive speed-math game
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-[#26364a] dark:text-white">
                Calculator Tug of War — Beat the Bot
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-slate-400">
                Test your mental arithmetic speed in a head-to-head tug of war against the DevCalc bot.
              </p>
            </div>
            <Link
              href="/tug-of-war-calculator"
              className="shrink-0 rounded-xl bg-[#1f3a5c] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#172d48]"
            >
              Play match now
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
