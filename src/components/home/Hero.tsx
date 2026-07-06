import CalculatorSearch from "@/src/components/calculator/CalculatorSearch";

export default function Hero() {
  return (
    <section className="border-b bg-slate-50 dark:bg-slate-900 dark:border-slate-700">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl dark:text-white">
          Free Online Calculators for Finance, Health, Vehicles , Education &amp; Developer 
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Instantly calculate loan EMIs, BMI, mileage, GPA, and more with our
          free, accurate, and easy-to-use online calculators — no signup
          required.
        </p>

    

        <div className="mx-auto mt-8 max-w-2xl">
          <CalculatorSearch />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">
              100+
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Calculators
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">
              8+
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Categories
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">
              100%
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Free</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">
              24/7
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
