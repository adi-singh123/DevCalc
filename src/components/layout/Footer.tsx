import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-950">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <Image
                src="/logo.png"
                alt="DevCalc Logo"
                width={48}
                height={48}
                className="rounded-lg"
              />

              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                DevCalc
              </span>
            </Link>

            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Free online calculators for finance,
              health, education, utility, and
              everyday calculations. Fast,
              accurate, and easy to use.
            </p>

            <p className="mt-3 text-sm font-medium text-blue-600 dark:text-blue-400">
              50+ Free Calculators Available
            </p>
          </div>

          {/* Popular Calculators */}
          <div>
            <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">
              Popular Calculators
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                ["Age Calculator", "/age-calculator"],
                ["EMI Calculator", "/emi-calculator"],
                ["GST Calculator", "/gst-calculator"],
                [
                  "Income Tax Calculator",
                  "/income-tax-calculator",
                ],
                ["BMI Calculator", "/bmi-calculator"],
                [
                  "Percentage Calculator",
                  "/percentage-calculator",
                ],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">
              Categories
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                "finance",
                "health",
                "math",
                "utility",
                "education",
                "vehicle",
              ].map((category) => (
                <li key={category}>
                  <Link
                    href={`/category/${category}`}
                    className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {category.charAt(0).toUpperCase() +
                      category.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Finance Calculators */}
          <div>
            <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">
              Finance Calculators
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                ["SIP Calculator", "/sip-calculator"],
                ["FD Calculator", "/fd-calculator"],
                [
                  "Income Tax Calculator",
                  "/income-tax-calculator",
                ],
                ["HRA Calculator", "/hra-calculator"],
                ["EMI Calculator", "/emi-calculator"],
                ["GST Calculator", "/gst-calculator"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 bg-slate-200 dark:border-slate-700 dark:bg-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-sm text-slate-600 dark:text-slate-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} DevCalc.
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/calculators"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Calculators
            </Link>

            <Link
              href="/blog"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Blog
            </Link>

            <Link
              href="/about"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </Link>

            <Link
              href="/privacy-policy"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </Link>

            <Link
              href="/sitemap.xml"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}