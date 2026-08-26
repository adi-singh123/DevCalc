import type { Metadata } from "next";
import TugOfWarGame from "@/src/components/games/TugOfWarGame";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: "Calculator Tug of War - Mental Math Game",
  description:
    "Race a bot in a free mental math tug-of-war game. Solve quick arithmetic questions and pull the rope to your side.",
  alternates: {
    canonical: `${siteConfig.url}/tug-of-war-calculator`,
  },
};

export default function TugOfWarCalculatorPage() {
  return (
    <main className="bg-slate-50 px-4 py-12 dark:bg-slate-950 sm:py-16">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Interactive speed math game
        </p>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Calculator Tug of War
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          Solve arithmetic questions before the bot pulls the rope away. Every
          correct answer moves you closer to victory.
        </p>
      </div>

      <TugOfWarGame />

      <section className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          How to play
        </h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-600 dark:text-slate-300">
          <li>Start the match and solve the displayed math problem.</li>
          <li>Submit correct answers to pull the marker toward your side.</li>
          <li>Reach your end of the rope before the bot reaches its end.</li>
        </ol>
      </section>
    </main>
  );
}
