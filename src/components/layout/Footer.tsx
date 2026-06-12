import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-slate-100">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold">DevCalc</h3>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Free online calculators for finance, health,
              education, utility, and everyday calculations.
              Fast, accurate, and easy to use.
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
                <Link href="/bmi-calculator">
                  BMI Calculator
                </Link>
              </li>

              <li>
                <Link href="/percentage-calculator">
                  Percentage Calculator
                </Link>
              </li>

              <li>
                <Link href="/date-calculator">
                  Date Calculator
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
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 font-semibold">
              Newsletter
            </h4>

            <p className="mb-4 text-sm text-slate-600">
              Get updates when new calculators are added.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border bg-white p-3"
            />

            <button
              className="
                mt-3
                w-full
                rounded-xl
                bg-black
                py-3
                text-white
                transition
                hover:opacity-90
              "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-sm text-slate-600 md:flex-row">
          <p>
            © {new Date().getFullYear()} DevCalc. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms
            </Link>

            <Link href="/contact">
              Contact
            </Link>

            <Link href="/calculators">
              Calculators
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}