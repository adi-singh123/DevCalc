import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read DevCalc's Privacy Policy to understand how we collect, use, and protect your data. DevCalc does not sell your personal information. All calculators run privately in your browser.",
  alternates: {
    canonical: "https://www.devcalc.in/privacy-policy",
  },
  keywords: [
    "DevCalc privacy policy",
    "calculator website privacy",
    "how DevCalc uses data",
    "DevCalc cookies policy",
    "DevCalc Google Analytics",
    "DevCalc AdSense",
    "online calculator privacy",
    "free calculator data policy",
    "DevCalc user data",
    "DevCalc personal information",
  ],
  authors:   [{ name: "Devcalc" }],
  creator:   "Devcalc",
  publisher: "DevCalc",
};

// ── Section data ──────────────────────────────────────────────────────────────
const SECTIONS = [
  {
    id:    "introduction",
    title: "Introduction",
    content: (
      <p>
        DevCalc (we, our, or us) respects your privacy and is committed
        to being transparent about how this website works. This Privacy Policy
        explains what information we collect when you visit{" "}
        <strong>devcalc.in</strong>, how we use it, and what choices you have.
        By using DevCalc, you agree to the practices described in this policy.
        If you disagree with anything here, please stop using the website and
        contact us with your concerns.
      </p>
    ),
  },
  {
    id:    "calculator-privacy",
    title: "Your Calculator Data Stays Private",
    content: (
      <>
        <p>
          This is the most important thing to know:{" "}
          <strong>
            all calculations on DevCalc happen entirely inside your browser.
          </strong>{" "}
          We do not receive, store, or transmit the numbers you enter into any
          calculator — whether it&apos;s your salary, loan amount, BMI, or any other
          personal figure.
        </p>
        <p className="mt-3">
          Your calculation inputs never leave your device.
        </p>
      </>
    ),
  },
  {
    id:    "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <p>We collect two types of information:</p>

        <h3 className="mt-5 font-semibold text-slate-800">
          1. Automatically Collected Information
        </h3>
        <p className="mt-2">
          When you visit DevCalc, standard web server logs and analytics tools
          may automatically collect:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Pages you visit and time spent on each page</li>
          <li>Your browser type and version (e.g. Chrome, Safari)</li>
          <li>Your device type (mobile, tablet, or desktop)</li>
          <li>Your approximate location (country or city level — not your exact address)</li>
          <li>The website or search engine that referred you to DevCalc</li>
          <li>Your IP address (used only for security and abuse prevention)</li>
        </ul>

        <h3 className="mt-5 font-semibold text-slate-800">
          2. Information You Voluntarily Provide
        </h3>
        <p className="mt-2">
          If you contact us via the contact form or by email, we collect:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Your name</li>
          <li>Your email address</li>
          <li>The content of your message</li>
        </ul>
        <p className="mt-3">
          We use this only to respond to your enquiry. We do not add you to any
          mailing list or share your contact details with third parties.
        </p>
      </>
    ),
  },
  {
    id:    "how-we-use-information",
    title: "How We Use Your Information",
    content: (
      <>
        <p>We use the information collected to:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Understand which calculators and pages are most useful to visitors</li>
          <li>Improve website performance, speed, and usability</li>
          <li>Fix bugs and incorrect calculation results reported by users</li>
          <li>Detect and prevent spam, abuse, or security threats</li>
          <li>Reply to messages sent through our contact form</li>
          <li>Monitor traffic patterns to plan future calculator additions</li>
        </ul>
        <p className="mt-3">
          We do <strong>not</strong> sell, rent, or trade your information to
          any third party, ever.
        </p>
      </>
    ),
  },
  {
    id:    "cookies",
    title: "Cookies",
    content: (
      <>
        <p>
          DevCalc uses cookies — small text files stored in your browser — for
          the following purposes:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>
            <strong>Analytics cookies</strong> — to understand how visitors use
            the site (via Google Analytics)
          </li>
          <li>
            <strong>Advertising cookies</strong> — to show relevant ads (via
            Google AdSense)
          </li>
          <li>
            <strong>Preference cookies</strong> — to remember any settings you
            choose on the site
          </li>
        </ul>
        <p className="mt-3">
          You can control or disable cookies through your browser settings.
          Note that disabling cookies may affect how some parts of the website
          behave. Most modern browsers allow you to block third-party cookies
          without affecting first-party functionality.
        </p>
      </>
    ),
  },
  {
    id:    "analytics",
    title: "Analytics — Google Analytics",
    content: (
      <p>
        We use <strong>Google Analytics</strong> to collect anonymized data
        about how visitors interact with DevCalc. This includes page views,
        session duration, bounce rate, and traffic sources. Google Analytics
        uses cookies to gather this data. The information is aggregated and
        anonymous — we cannot identify individual users from it. You can
        opt out of Google Analytics tracking by installing the{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Google Analytics Opt-out Browser Add-on
        </a>
        .
      </p>
    ),
  },
  {
    id:    "advertising",
    title: "Advertising — Google AdSense",
    content: (
      <p>
        DevCalc may display advertisements served by{" "}
        <strong>Google AdSense</strong>. Google uses cookies to show ads based
        on your previous visits to this and other websites. You can opt out of
        personalized advertising by visiting{" "}
        <a
          href="https://www.google.com/settings/ads"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Google&apos;s Ads Settings
        </a>
        . Opting out means you may still see ads, but they will not be
        personalized based on your interests.
      </p>
    ),
  },
  {
    id:    "third-party-links",
    title: "Third-Party Links",
    content: (
      <p>
        Some pages on DevCalc may contain links to external websites — for
        example, links to government portals, financial institutions, or
        reference articles. Once you leave devcalc.in, this Privacy Policy no
        longer applies. We encourage you to read the privacy policy of any
        external website you visit. DevCalc is not responsible for the content
        or privacy practices of any third-party website.
      </p>
    ),
  },
  {
    id:    "data-security",
    title: "Data Security",
    content: (
      <p>
        DevCalc is served over <strong>HTTPS</strong>, which encrypts data
        transmitted between your browser and our servers. We implement
        reasonable technical measures to protect information collected through
        the contact form. However, no method of internet transmission is
        100% secure. If you believe your information has been mishandled,
        please contact us immediately at{" "}
        <a
          href="mailto:devcalc35052@gmail.com"
          className="text-blue-600 underline hover:text-blue-800"
        >
          devcalc35052@gmail.com
        </a>
        .
      </p>
    ),
  },
  {
    id:    "childrens-privacy",
    title: "Children's Privacy",
    content: (
      <p>
        DevCalc is not directed at children under the age of 13. We do not
        knowingly collect personal information from children. If you are a
        parent or guardian and believe your child has submitted personal
        information to us, please contact us and we will delete it promptly.
      </p>
    ),
  },
  {
    id:    "your-rights",
    title: "Your Rights",
    content: (
      <>
        <p>You have the right to:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Ask what personal data we hold about you (if any)</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent for cookies at any time via your browser</li>
          <li>Contact us with any privacy concern or complaint</li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, email us at{" "}
          <a
            href="mailto:devcalc35052@gmail.com"
            className="text-blue-600 underline hover:text-blue-800"
          >
            devcalc35052@gmail.com
          </a>
          . We will respond within 48 hours.
        </p>
      </>
    ),
  },
  {
    id:    "changes",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or for legal reasons. When we do, the Last Updated
        date at the top of this page will change. We encourage you to review
        this page periodically. Continued use of DevCalc after any changes
        means you accept the updated policy.
      </p>
    ),
  },
  {
    id:    "contact",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy, please reach out:
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

// ── Table of contents labels ──────────────────────────────────────────────────
const TOC = SECTIONS.map((s) => ({ id: s.id, title: s.title }));

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">

      {/* ── Hero ── */}
      <div className="border-b border-slate-200 pb-8">
        <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
          Legal
        </span>

        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Privacy Policy
        </h1>

        <p className="mt-3 text-slate-500">
          Last Updated: <strong>June 2026</strong> &nbsp;·&nbsp; Applies to:{" "}
          <strong>devcalc.in</strong>
        </p>

        <p className="mt-4 max-w-2xl text-slate-600">
          The short version:{" "}
          <strong>
            DevCalc does not sell your data, does not store your calculation
            inputs, and does not require you to create an account.
          </strong>{" "}
          This page explains the full details.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[220px_1fr]">

        {/* ── Table of Contents (sticky sidebar) ── */}
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

        {/* ── Policy Sections ── */}
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

          {/* ── Footer links ── */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-700">
              Related pages
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href="/terms"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-100"
              >
                Terms of Use →
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