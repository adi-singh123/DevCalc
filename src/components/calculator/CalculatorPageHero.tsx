import type { Calculator } from "@/src/types/calculator";

type Props = {
  calculator: Calculator;
};

const categoryStyles: Record<string, { shell: string; eyebrow: string; label: string }> = {
  Finance: {
    shell: "border-blue-200 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_58%,#fef3c7_100%)] dark:border-blue-900/60 dark:bg-[linear-gradient(135deg,#0f172a_0%,#111827_58%,#172554_100%)]",
    eyebrow: "text-blue-700 dark:text-blue-300",
    label: "Plan the numbers",
  },
  Health: {
    shell: "border-emerald-200 bg-[linear-gradient(135deg,#ecfdf5_0%,#ffffff_62%,#f0fdfa_100%)] dark:border-emerald-900/60 dark:bg-[linear-gradient(135deg,#052e2b_0%,#0f172a_62%,#022c22_100%)]",
    eyebrow: "text-emerald-700 dark:text-emerald-300",
    label: "Understand your estimate",
  },
  Math: {
    shell: "border-violet-200 bg-[linear-gradient(rgba(124,58,237,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,.06)_1px,transparent_1px),#faf5ff] bg-[size:24px_24px] dark:border-violet-900/60 dark:bg-[linear-gradient(rgba(167,139,250,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,.08)_1px,transparent_1px),#0f172a]",
    eyebrow: "text-violet-700 dark:text-violet-300",
    label: "Work through the method",
  },
  Education: {
    shell: "border-indigo-200 bg-[linear-gradient(135deg,#eef2ff_0%,#ffffff_65%,#eff6ff_100%)] dark:border-indigo-900/60 dark:bg-[linear-gradient(135deg,#1e1b4b_0%,#0f172a_65%,#172554_100%)]",
    eyebrow: "text-indigo-700 dark:text-indigo-300",
    label: "Learn by calculation",
  },
  "Developer Tools": {
    shell: "border-slate-700 bg-[radial-gradient(circle_at_top_right,#1e3a5f_0%,#0f172a_48%,#020617_100%)] text-white",
    eyebrow: "text-cyan-300",
    label: "Run a browser-side tool",
  },
  Construction: {
    shell: "border-amber-200 bg-[linear-gradient(135deg,#fffbeb_0%,#ffffff_64%,#fff7ed_100%)] dark:border-amber-900/60 dark:bg-[linear-gradient(135deg,#29210b_0%,#0f172a_64%,#2a1607_100%)]",
    eyebrow: "text-amber-700 dark:text-amber-300",
    label: "Estimate materials and quantity",
  },
  Vehicle: {
    shell: "border-slate-300 bg-[linear-gradient(120deg,#f8fafc_0%,#ffffff_60%,#e0f2fe_100%)] dark:border-slate-700 dark:bg-[linear-gradient(120deg,#0f172a_0%,#111827_60%,#082f49_100%)]",
    eyebrow: "text-sky-700 dark:text-sky-300",
    label: "Calculate ownership and running figures",
  },
  Fun: {
    shell: "border-pink-200 bg-[linear-gradient(135deg,#fdf2f8_0%,#ffffff_52%,#f5f3ff_100%)] dark:border-pink-900/60 dark:bg-[linear-gradient(135deg,#3b0a2a_0%,#0f172a_52%,#2e1065_100%)]",
    eyebrow: "text-pink-700 dark:text-pink-300",
    label: "A transparent entertainment tool",
  },
};

const fallback = {
  shell: "border-stone-200 bg-[linear-gradient(135deg,#fafaf9_0%,#ffffff_62%,#f1f5f9_100%)] dark:border-slate-700 dark:bg-[linear-gradient(135deg,#1c1917_0%,#0f172a_62%,#111827_100%)]",
  eyebrow: "text-[#1f3a5c] dark:text-blue-300",
  label: "Calculate with a clear method",
};

export default function CalculatorPageHero({ calculator }: Props) {
  const style = categoryStyles[calculator.category] ?? fallback;
  const isDeveloperTool = calculator.category === "Developer Tools";

  return (
    <header className={`mt-5 overflow-hidden rounded-[2rem] border px-6 py-8 shadow-sm sm:px-9 sm:py-10 ${style.shell}`}>
      <div className="max-w-4xl">
        <p className={`text-xs font-bold uppercase tracking-[0.2em] ${style.eyebrow}`}>
          {style.label}
        </p>
        <h1 className={`mt-3 font-serif text-4xl font-semibold tracking-tight md:text-5xl ${isDeveloperTool ? "text-white" : "text-[#26364a] dark:text-white"}`}>
          {calculator.name}
        </h1>
        <p className={`mt-5 max-w-3xl text-lg leading-8 ${isDeveloperTool ? "text-slate-200" : "text-stone-600 dark:text-slate-300"}`}>
          {calculator.description}
        </p>
        {calculator.editorialIntro && (
          <p className={`mt-4 max-w-3xl border-l-2 pl-4 leading-7 ${isDeveloperTool ? "border-cyan-400 text-slate-300" : "border-current text-stone-600 dark:text-slate-400"}`}>
            {calculator.editorialIntro}
          </p>
        )}
      </div>
    </header>
  );
}
