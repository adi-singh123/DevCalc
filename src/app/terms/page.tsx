import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read DevCalc's Terms of Use to understand the conditions for using our free online calculators. DevCalc results are for informational purposes only — not financial or medical advice.",
  alternates: {
    canonical: "https://www.devcalc.in/terms",
  },
  keywords: [
    "DevCalc terms of use",
    "DevCalc terms and conditions",
    "calculator website terms",
    "DevCalc disclaimer",
    "DevCalc no financial advice",
    "DevCalc no medical advice",
    "free calculator terms",
    "DevCalc intellectual property",
    "DevCalc liability disclaimer",
    "online calculator usage policy",
  ],
  authors:   [{ name: "Devcalc" }],
  creator:   "Devcalc",
  publisher: "DevCalc",
};

// ── Sections ──────────────────────────────────────────────────────────────────
const SECTIONS = [
  {
    id:    "acceptance",
    title: "Acceptance of Terms",
    content: (
      <p>
        By accessing or using <strong>devcalc.in</strong> (DevCalc, we,
        our, or us), you confirm that you have read, understood, and agree
        to be bound by these Terms of Use. If you do not agree with any part of
        these terms, please stop using the website immediately. We reserve the
        right to update these terms at any time — continued use of DevCalc
        after any changes means you accept the revised terms.
      </p>
    ),
  },
  {
    id:    "use-of-calculators",
    title: "Use of Calculators",
    content: (
      <>
        <p>
          DevCalc provides free online calculators for finance, health,
          education, vehicle, math, construction, developer tools, and utility
          purposes. All calculators are intended for{" "}
          <strong>informational and educational use only</strong>.
        </p>
        <p className="mt-3">
          Results produced by DevCalc calculators are estimates based on the
          values you enter and standard mathematical formulas. Actual results
          may differ depending on:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>The accuracy of the information you provide</li>
          <li>Changes in interest rates, tax slabs, or government policies</li>
          <li>Individual circumstances not accounted for by general formulas</li>
          <li>Rounding differences between calculation methods</li>
        </ul>
        <p className="mt-3">
          Always verify important results with a qualified professional before
          making any significant decision.
        </p>
      </>
    ),
  },
  {
    id:    "no-financial-advice",
    title: "No Financial Advice",
    content: (
      <>
        <p>
          DevCalc&apos;s finance-related calculators — including but not limited to
          EMI, SIP, FD, PPF, NPS, GST, Income Tax, HRA, CAGR, Retirement,
          Inflation, and Gratuity calculators — are provided for general
          informational purposes only.
        </p>
        <p className="mt-3">
          <strong>
            Nothing on DevCalc constitutes professional financial, investment,
            tax, or legal advice.
          </strong>{" "}
          Financial decisions involve personal factors that no general calculator
          can fully account for. Before making any financial decision — including
          taking a loan, investing in mutual funds, or planning for retirement —
          please consult a qualified financial advisor or chartered accountant
          (CA) licensed in your jurisdiction.
        </p>
      </>
    ),
  },
  {
    id:    "no-medical-advice",
    title: "No Medical Advice",
    content: (
      <>
        <p>
          DevCalc&apos;s health-related calculators — including but not limited to
          BMI, BMR, Calorie, Body Fat, Ideal Body Weight, Water Intake, Protein
          Intake, Heart Rate Zone, and Pregnancy calculators — are provided for
          general awareness and informational purposes only.
        </p>
        <p className="mt-3">
          <strong>
            DevCalc does not provide medical advice, diagnosis, or treatment.
          </strong>{" "}
          Health calculator results should never be used as a substitute for
          professional medical consultation. If you have any health concerns,
          please consult a qualified doctor or licensed healthcare provider.
        </p>
      </>
    ),
  },
  {
    id:    "accuracy-disclaimer",
    title: "Accuracy Disclaimer",
    content: (
      <>
        <p>
          We make every effort to ensure that our calculators use correct,
          up-to-date formulas and produce accurate results. However, DevCalc
          makes <strong>no warranties</strong> — express or implied — regarding:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>The completeness or accuracy of any calculation result</li>
          <li>
            The applicability of any result to your specific personal or
            financial situation
          </li>
          <li>
            The timeliness of formula updates following changes in government
            policy, tax law, or interest rates
          </li>
        </ul>
        <p className="mt-3">
          If you notice an error in any calculator, please report it via our{" "}
          <Link href="/contact" className="text-blue-600 underline hover:text-blue-800">
            Contact page
          </Link>{" "}
          and we will investigate and fix it promptly.
        </p>
      </>
    ),
  },
  {
    id:    "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <p>
        To the fullest extent permitted by applicable law, DevCalc, its owner
        (Aditya Singh), and contributors shall not be held liable for any
        direct, indirect, incidental, special, consequential, or punitive
        damages arising from your use of — or inability to use — this website,
        its calculators, or any content published on it. This includes, without
        limitation, any financial loss, health-related decisions, or reliance
        on calculator results for professional purposes. Use DevCalc at your
        own discretion and risk.
      </p>
    ),
  },
  {
    id:    "intellectual-property",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          All content on DevCalc — including calculator logic, source code,
          written content, blog articles, UI design, graphics, logos, and
          branding — is the intellectual property of DevCalc and its creator,
          Aditya Singh, and is protected under applicable copyright and
          intellectual property laws.
        </p>
        <p className="mt-3">You may <strong>not</strong>:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Copy, reproduce, or republish DevCalc content without written permission</li>
          <li>Scrape or extract calculator results or content using automated tools</li>
          <li>Resell, sublicense, or commercially exploit any part of DevCalc</li>
          <li>Claim DevCalc content or tools as your own work</li>
        </ul>
        <p className="mt-3">
          For licensing enquiries or content partnerships, please contact us at{" "}
          <a
            href="mailto:devcalc35052@gmail.com"
            className="text-blue-600 underline hover:text-blue-800"
          >
            devcalc35052@gmail.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id:    "prohibited-use",
    title: "Prohibited Use",
    content: (
      <>
        <p>You agree not to use DevCalc to:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Violate any applicable local, national, or international law</li>
          <li>Attempt to gain unauthorized access to any part of the website</li>
          <li>Introduce malware, viruses, or any harmful code</li>
          <li>
            Use automated bots or scrapers to extract data from the website
          </li>
          <li>
            Misrepresent DevCalc results as professional financial, medical, or
            legal advice to others
          </li>
          <li>Use the website in any way that disrupts the service for other users</li>
        </ul>
      </>
    ),
  },
  {
    id:    "third-party-links",
    title: "Third-Party Links",
    content: (
      <p>
        DevCalc may contain links to external websites for reference purposes.
        These links are provided for convenience only. DevCalc does not
        endorse, control, or take responsibility for the content, accuracy, or
        privacy practices of any third-party website. Visiting external links
        is entirely at your own risk.
      </p>
    ),
  },
  {
    id:    "governing-law",
    title: "Governing Law",
    content: (
      <p>
        These Terms of Use are governed by and construed in accordance with the
        laws of <strong>India</strong>. Any disputes arising from your use of
        DevCalc shall be subject to the exclusive jurisdiction of the courts
        located in <strong>Uttar Pradesh, India</strong>.
      </p>
    ),
  },
  {
    id:    "changes",
    title: "Changes to These Terms",
    content: (
      <p>
        We reserve the right to modify these Terms of Use at any time. When
        changes are made, the Last Updated date on this page will be revised.
        It is your responsibility to review these terms periodically. Continued
        use of DevCalc after any changes are posted constitutes your acceptance
        of the updated terms.
      </p>
    ),
  },
  {
    id:    "contact",
    title: "Contact Information",
    content: (
      <>
        <p>
          If you have any questions, concerns, or requests regarding these
          Terms of Use, please contact us:
        </p>
        <div className="mt-4 space-y-1">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:devcalc35052@gmail.com"
              className="text-blue-600 underline hover:text-blue-800"
            >
              devcalc35052@gmail.com
            </a>
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.devcalc.in"
              className="text-blue-600 underline hover:text-blue-800"
            >
              www.devcalc.in
            </a>
          </p>
          <p>
            <strong>Address:</strong> 76, Pali, Gothawan, Jaunpur,
            Uttar Pradesh, India — 222162
          </p>
        </div>
      </>
    ),
  },
];

const TOC = SECTIONS.map((s) => ({ id: s.id, title: s.title }));

// ── Page ──────────────────────────────────────────────────────────────────────
export default function TermsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">

      {/* ── Hero ── */}
      <div className="border-b border-slate-200 pb-8">
        <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
          Legal
        </span>

        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Terms of Use
        </h1>

        <p className="mt-3 text-slate-500">
          Last Updated: <strong>June 2026</strong> &nbsp;·&nbsp; Applies to:{" "}
          <strong>devcalc.in</strong>
        </p>

        {/* Plain-English summary */}
        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
          <p className="text-sm font-semibold text-amber-800">
            Plain-English Summary
          </p>
          <ul className="mt-2 space-y-1 text-sm text-amber-700">
            <li>✅ DevCalc is free to use for personal and informational purposes.</li>
            <li>⚠️ Calculator results are estimates — not financial or medical advice.</li>
            <li>🚫 Do not copy or reproduce DevCalc content without permission.</li>
            <li>📧 Found an error? Tell us and we&apos;ll fix it fast.</li>
          </ul>
        </div>
      </div>

      {/* ── Two-column layout ── */}
      <div className="mt-10 grid gap-10 lg:grid-cols-[220px_1fr]">

        {/* Sticky TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              On this page
            </p>
            <nav className="mt-3 space-y-1">
              {TOC.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-1.5 text-sm text-slate-600 transition hover:bg-white hover:text-blue-600"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Sections */}
        <div className="space-y-10">
          {SECTIONS.map((section, i) => (
            <section key={section.id} id={section.id}>
              <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-800">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                  {i + 1}
                </span>
                {section.title}
              </h2>
              <div className="mt-3 leading-7 text-slate-600">
                {section.content}
              </div>
            </section>
          ))}

          {/* Related pages */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-700">Related pages</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-100"
              >
                Privacy Policy →
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-100"
              >
                Contact Us →
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-100"
              >
                About DevCalc →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}