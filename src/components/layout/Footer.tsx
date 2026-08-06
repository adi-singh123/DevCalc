import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-stone-200 bg-[#f1ece3] dark:border-slate-700 dark:bg-slate-950">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
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

            <div className="mt-4 rounded-xl border border-stone-200 bg-white p-3 text-sm dark:border-slate-700 dark:bg-slate-900">
              <p className="font-semibold text-slate-900 dark:text-white">
                DevCalc
              </p>

              <p className="mt-1 text-slate-600 dark:text-slate-400">
                76, Pali, Gothawan, Jaunpur, Uttar Pradesh, India - 222162
              </p>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Contact: devcalc35052@gmail.com
              </p>
            </div>
          </div>

          {/* Popular Calculators */}
          <div>
            <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">
              Popular Calculators
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                ["Mileage Calculator", "/mileage-calculator"],
                ["Age Calculator", "/age-calculator"],
                ["EMI Calculator", "/emi-calculator"],
                ["GST Calculator", "/gst-calculator"],
                ["Income Tax Calculator", "/income-tax-calculator"],
                ["BMI Calculator", "/bmi-calculator"],
                ["Percentage Calculator", "/percentage-calculator"],

              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-600 transition hover:text-[#1f3a5c] dark:text-slate-400 dark:hover:text-blue-400"
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
                    className="text-slate-600 transition hover:text-[#1f3a5c] dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
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
                ["Income Tax Calculator", "/income-tax-calculator"],
                ["HRA Calculator", "/hra-calculator"],
                ["EMI Calculator", "/emi-calculator"],
                ["GST Calculator", "/gst-calculator"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-600 transition hover:text-[#1f3a5c] dark:text-slate-400 dark:hover:text-blue-400"
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
      <div className="border-t border-stone-200 bg-[#e9e2d6] dark:border-slate-700 dark:bg-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-sm text-slate-600 dark:text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} DevCalc. All rights reserved.</p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/calculators"
              className="hover:text-[#1f3a5c] dark:hover:text-blue-400"
            >
              Calculators
            </Link>

            <Link
              href="/blog"
              className="hover:text-[#1f3a5c] dark:hover:text-blue-400"
            >
              Blog
            </Link>

            <Link
              href="/about"
              className="hover:text-[#1f3a5c] dark:hover:text-blue-400"
            >
              About
            </Link>

            <Link
              href="/privacy-policy"
              className="hover:text-[#1f3a5c] dark:hover:text-blue-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-[#1f3a5c] dark:hover:text-blue-400"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="hover:text-[#1f3a5c] dark:hover:text-blue-400"
            >
              Contact
            </Link>

            <Link
              href="/sitemap.xml"
              className="hover:text-[#1f3a5c] dark:hover:text-blue-400"
            >
              Sitemap
            </Link>
          </div>
                {/* Featured On */}
      <div className="border-t border-stone-200 dark:border-slate-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-6 py-8">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Proudly Featured On
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://launchbuff.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Featured on LaunchBuff"
            >
              <Image
                src="https://launchbuff.com/badge-featured-light.svg"
                alt="Featured on LaunchBuff"
                width="256"
                height="80"
                loading="lazy"
              />
            </a>

            <a
              href="https://tools.cafe"
              target="_blank"
              rel="noopener"
              title="Featured on tools.cafe"
            >
              {/* Plain img: external SVG badge, avoids next/image remote-domain config */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://tools.cafe/b/light.svg"
                alt="Featured on tools.cafe"
                width={256}
                height={80}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
        </div>
      </div>
    </footer>
  );
}
