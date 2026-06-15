import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
    alternates: {
    canonical: "https://www.devcalc.in/terms",
  },
    authors: [
    {
      name: "Aditya Singh",
    },
  ],

  creator: "Aditya Singh",

  publisher: "DevCalc",
  
  description:
    "Read the Terms of Use for DevCalc and understand the conditions for using our website and calculators.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-bold">
        Terms of Use
      </h1>

      <p className="mt-4 text-slate-600">
        Last Updated: June 2026
      </p>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold">
            Acceptance of Terms
          </h2>

          <p className="mt-3 text-slate-600">
            By accessing and using DevCalc, you agree
            to comply with these Terms of Use. If you
            do not agree with any part of these terms,
            please discontinue use of the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Use of Calculators
          </h2>

          <p className="mt-3 text-slate-600">
            The calculators provided on DevCalc are
            intended for informational and educational
            purposes only. Results are estimates and
            may vary depending on the accuracy of the
            information entered.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            No Financial Advice
          </h2>

          <p className="mt-3 text-slate-600">
            Finance-related calculators, including EMI,
            GST, SIP, loan, and investment calculators,
            do not constitute professional financial
            advice. Always consult a qualified
            financial advisor before making financial
            decisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            No Medical Advice
          </h2>

          <p className="mt-3 text-slate-600">
            Health-related calculators, including BMI
            and calorie calculators, are provided for
            informational purposes only and should not
            replace professional medical advice,
            diagnosis, or treatment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Accuracy Disclaimer
          </h2>

          <p className="mt-3 text-slate-600">
            While we strive to ensure the accuracy of
            all calculations and information provided,
            DevCalc makes no warranties regarding the
            completeness, reliability, or accuracy of
            the results.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Limitation of Liability
          </h2>

          <p className="mt-3 text-slate-600">
            DevCalc shall not be held liable for any
            direct, indirect, incidental, or
            consequential damages arising from the use
            of our website, calculators, or content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Intellectual Property
          </h2>

          <p className="mt-3 text-slate-600">
            All content, design elements, calculator
            logic, text, graphics, and branding on
            DevCalc are protected by applicable
            intellectual property laws and may not be
            copied or reproduced without permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Changes to These Terms
          </h2>

          <p className="mt-3 text-slate-600">
            We reserve the right to update or modify
            these Terms of Use at any time. Changes
            will become effective immediately upon
            posting on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Contact Information
          </h2>

          <p className="mt-3 text-slate-600">
            If you have any questions regarding these
            Terms of Use, please contact us at:
          </p>

          <p className="mt-3 font-medium">
            adityasingh35052@gmail.com
          </p>
        </section>
      </div>
    </main>
  );
}