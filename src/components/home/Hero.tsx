import CalculatorSearch from "@/src/components/calculator/CalculatorSearch";

export default function Hero() {
  return (
    <section className="border-b bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Free Online Calculators
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Calculate finance, health, vehicle, education, and daily-use
          calculations instantly.
        </p>

        <div className="mx-auto mt-8 max-w-2xl">
          <CalculatorSearch />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div>
            <p className="text-3xl font-bold">50+</p>
            <p className="text-sm text-slate-600">Calculators</p>
          </div>

          <div>
            <p className="text-3xl font-bold">5</p>
            <p className="text-sm text-slate-600">Categories</p>
          </div>

          <div>
            <p className="text-3xl font-bold">100%</p>
            <p className="text-sm text-slate-600">Free</p>
          </div>

          <div>
            <p className="text-3xl font-bold">24/7</p>
            <p className="text-sm text-slate-600">Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
