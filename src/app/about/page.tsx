import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
alternates: {
    canonical: "/about",
  },
  description:
    "Learn more about DevCalc and our mission to provide free online calculators.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          About DevCalc
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
          DevCalc is a free online calculator platform
          designed to help users solve everyday
          calculations quickly, accurately, and
          effortlessly.
        </p>
      </section>

      {/* Mission */}
      <section className="mt-16 rounded-3xl border bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-bold">
          Our Mission
        </h2>

        <p className="mt-4 text-slate-600">
          We believe calculations should be simple,
          accessible, and available to everyone.
          Our goal is to provide reliable calculators
          that help students, professionals,
          businesses, and individuals make informed
          decisions with confidence.
        </p>
      </section>

      {/* What We Offer */}
      <section className="mt-12">
        <h2 className="text-center text-3xl font-bold">
          What We Offer
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">
              Finance Calculators
            </h3>

            <p className="mt-3 text-slate-600">
              EMI, GST, SIP, Loan, FD, and other
              finance-related calculators.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">
              Health Calculators
            </h3>

            <p className="mt-3 text-slate-600">
              BMI, Calorie, Body Fat, and health
              tracking calculators.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">
              Vehicle Calculators
            </h3>

            <p className="mt-3 text-slate-600">
              Mileage, Fuel Cost, Car Loan, and
              vehicle planning calculators.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">
              Education Tools
            </h3>

            <p className="mt-3 text-slate-600">
              Useful calculators for students and
              educational purposes.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">
              Utility Calculators
            </h3>

            <p className="mt-3 text-slate-600">
              Everyday tools for percentages, dates,
              time, and more.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">
              Free & Fast
            </h3>

            <p className="mt-3 text-slate-600">
              All calculators are free, mobile
              friendly, and available instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-16 rounded-3xl border bg-slate-50 p-8">
        <h2 className="text-3xl font-bold">
          Why Choose DevCalc?
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">
              Accurate Results
            </h3>

            <p className="mt-2 text-slate-600">
              Built using trusted formulas and
              standard calculation methods.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Easy to Use
            </h3>

            <p className="mt-2 text-slate-600">
              Clean and user-friendly interface
              across all devices.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Always Free
            </h3>

            <p className="mt-2 text-slate-600">
              No subscriptions, no hidden costs,
              just free calculators.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold">
          Contact Us
        </h2>

        <p className="mt-4 text-slate-600">
          Have suggestions, feedback, or calculator
          requests?
        </p>

        <p className="mt-2 font-medium">
          adityasingh35052@gmail.com
        </p>
      </section>
    </main>
  );
}