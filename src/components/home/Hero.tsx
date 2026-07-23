import Image from "next/image";
import CalculatorSearch from "@/src/components/calculator/CalculatorSearch";

export default function Hero() {
  return (
    <section className="border-b border-stone-200 bg-gradient-to-b from-[#ece4d8] to-[#f7f4ee] dark:from-slate-900 dark:to-slate-950 dark:border-slate-700">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy + search */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-[#26364a] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1] dark:text-white">
              Smart Calculators for Smarter Decisions
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-lg text-stone-600 lg:mx-0 dark:text-slate-300">
              Free online calculators for finance, health, math, and everyday
              life. Fast, accurate, and easy to use — no signup required.
            </p>

            <div className="mx-auto mt-8 max-w-xl lg:mx-0">
              <CalculatorSearch />
            </div>
          
          </div>

          {/* Right: hero image (blends into the cream background) */}
          <div className="relative mx-auto w-full max-w-lg">
            <Image
              src="/hero.png"
              alt="Calculator, notebook and plant on a desk"
              width={600}
              height={400}
              priority
              className="h-auto w-full object-contain mix-blend-multiply dark:mix-blend-normal"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
