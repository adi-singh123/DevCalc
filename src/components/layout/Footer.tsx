import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-slate-100">
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

              <span className="text-2xl font-bold">
                DevCalc
              </span>
            </Link>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Free online calculators for finance,
              health, education, utility, and
              everyday calculations. Fast,
              accurate, and easy to use.
            </p>

            <p className="mt-3 text-sm font-medium text-blue-600">
              20+ Free Calculators Available
            </p>
          </div>

          {/* Popular Calculators */}
          <div>
            <h4 className="mb-4 font-semibold">
              Popular Calculators
            </h4>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link href="/age-calculator">
                  Age Calculator
                </Link>
              </li>

              <li>
                <Link href="/emi-calculator">
                  EMI Calculator
                </Link>
              </li>

              <li>
                <Link href="/gst-calculator">
                  GST Calculator
                </Link>
              </li>

              <li>
                <Link href="/income-tax-calculator">
                  Income Tax Calculator
                </Link>
              </li>

              <li>
                <Link href="/bmi-calculator">
                  BMI Calculator
                </Link>
              </li>

              <li>
                <Link href="/percentage-calculator">
                  Percentage Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 font-semibold">
              Categories
            </h4>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link href="/category/finance">
                  Finance
                </Link>
              </li>

              <li>
                <Link href="/category/health">
                  Health
                </Link>
              </li>

              <li>
                <Link href="/category/math">
                  Math
                </Link>
              </li>

              <li>
                <Link href="/category/utility">
                  Utility
                </Link>
              </li>

              <li>
                <Link href="/category/education">
                  Education
                </Link>
              </li>

              <li>
                <Link href="/category/vehicle">
                  Vehicle
                </Link>
              </li>
            </ul>
          </div>

          {/* Finance Calculators */}
          <div>
            <h4 className="mb-4 font-semibold">
              Finance Calculators
            </h4>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link href="/sip-calculator">
                  SIP Calculator
                </Link>
              </li>

              <li>
                <Link href="/fd-calculator">
                  FD Calculator
                </Link>
              </li>

              <li>
                <Link href="/income-tax-calculator">
                  Income Tax Calculator
                </Link>
              </li>

              <li>
                <Link href="/hra-calculator">
                  HRA Calculator
                </Link>
              </li>

              <li>
                <Link href="/emi-calculator">
                  EMI Calculator
                </Link>
              </li>

              <li>
                <Link href="/gst-calculator">
                  GST Calculator
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-sm text-slate-600 md:flex-row">
          <p>
            © {new Date().getFullYear()} DevCalc.
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/calculators">
              Calculators
            </Link>

            <Link href="/blog">
              Blog
            </Link>

            <Link href="/about">
              About
            </Link>

            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms
            </Link>

            <Link href="/contact">
              Contact
            </Link>

            <Link href="/sitemap.xml">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}