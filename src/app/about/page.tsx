import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DevCalc | Free Online Calculators",
  description:
    "Learn about DevCalc, created by Aditya Singh, a Software Developer. Discover our mission to provide free, accurate, and easy-to-use online calculators for finance, health, education, vehicle, and everyday calculations.",
  alternates: {
    canonical: "https://www.devcalc.in/about",
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl font-bold md:text-5xl">About DevCalc</h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
          DevCalc is a free online calculator platform designed to help users
          solve everyday calculations quickly, accurately, and effortlessly.
        </p>
      </section>

      {/* Mission */}
      <section className="mt-16 rounded-3xl border bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-bold">Our Mission</h2>

        <p className="mt-4 text-slate-600">
          We believe calculations should be simple, accessible, and available to
          everyone. Our goal is to provide reliable calculators that help
          students, professionals, businesses, and individuals make informed
          decisions with confidence.
        </p>
      </section>

      {/* What We Offer */}
      <section className="mt-12">
        <h2 className="text-center text-3xl font-bold">What We Offer</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Finance Calculators</h3>

            <p className="mt-3 text-slate-600">
              EMI, GST, SIP, Loan, FD, and other finance-related calculators.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Health Calculators</h3>

            <p className="mt-3 text-slate-600">
              BMI, Calorie, Body Fat, and health tracking calculators.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Vehicle Calculators</h3>

            <p className="mt-3 text-slate-600">
              Mileage, Fuel Cost, Car Loan, and vehicle planning calculators.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Education Tools</h3>

            <p className="mt-3 text-slate-600">
              Useful calculators for students and educational purposes.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Utility Calculators</h3>

            <p className="mt-3 text-slate-600">
              Everyday tools for percentages, dates, time, and more.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Free & Fast</h3>

            <p className="mt-3 text-slate-600">
              All calculators are free, mobile friendly, and available
              instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-16 rounded-3xl border bg-slate-50 p-8">
        <h2 className="text-3xl font-bold">Why Choose DevCalc?</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">Accurate Results</h3>

            <p className="mt-2 text-slate-600">
              Built using trusted formulas and standard calculation methods.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Easy to Use</h3>

            <p className="mt-2 text-slate-600">
              Clean and user-friendly interface across all devices.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Always Free</h3>

            <p className="mt-2 text-slate-600">
              No subscriptions, no hidden costs, just free calculators.
            </p>
          </div>
        </div>
      </section>

      {/* About the Founder */}
      <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="max-w-4xl">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
            Founder Story
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
            About the Founder
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-600 dark:text-slate-300">
            <p>
              Hi, I'm{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Aditya Singh
              </span>
              , a Software Developer and the creator of DevCalc.
            </p>

            <p>
              I am passionate about building useful web applications that solve
              real-world problems. DevCalc started as a project to provide free,
              accurate, and easy-to-use online calculators for students,
              professionals, businesses, and everyday users.
            </p>

            <p>
              As a Full Stack Developer, I work with modern technologies such as
              React, Next.js, TypeScript, Node.js, Express, and MySQL. My goal
              is to create tools that simplify calculations and help users make
              informed decisions quickly.
            </p>

            <p>
              DevCalc currently offers calculators across Finance, Health,
              Education, Vehicle, Math, and Utility categories, with new tools,
              comparison features, and educational content being added
              regularly.
            </p>

            <p>
              Thank you for visiting DevCalc and supporting this journey. Every
              visit, suggestion, and feedback helps improve the platform for
              everyone.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                60+
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Free Calculators
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Multiple Categories
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Finance, Health, Education & More
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Made in India 🇮🇳
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Built by an Indian Developer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>

        <p className="mt-4 text-slate-600">
          Have suggestions, feedback, or calculator requests?
        </p>

        <div className="mt-4 space-y-2">
          <p className="font-medium">Email: devcalc35052@gmail.com</p>

          <p className="text-slate-600">
            Address: 76, Pali, Gothawan, Jaunpur, Uttar Pradesh, India - 222162
          </p>
        </div>
      </section>
    </main>
  );
}
