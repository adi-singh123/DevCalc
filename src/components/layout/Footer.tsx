import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-stone-200 bg-[#f1ece3] dark:border-slate-700 dark:bg-slate-950">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Contact */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="DevCalc Logo"
                width={48}
                height={48}
                className="rounded-lg h-auto w-auto max-h-12"
              />
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                DevCalc
              </span>
            </Link>

            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Accurate online calculators, state-wise tax tools, and custom software development services.
            </p>

            <div className="mt-4 rounded-xl border border-stone-200 bg-white p-3 text-xs dark:border-slate-700 dark:bg-slate-900">
              <p className="font-semibold text-slate-900 dark:text-white">
                DevCalc Headquarters
              </p>
              <p className="mt-1 text-slate-600 dark:text-slate-400">
                76, Pali, Gothawan, Jaunpur, Uttar Pradesh, India - 222162
              </p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Email: devcalc35052@gmail.com | Phone: 8081158775
              </p>
            </div>
          </div>

          {/* Services & Developer Tools */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Services &amp; Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/collegeProject"
                  className="font-medium text-emerald-700 transition hover:underline dark:text-emerald-400"
                >
                  ⚡ Student Software Builds (24h Prototype)
                </Link>
              </li>
              <li>
                <Link
                  href="/want-automation"
                  className="font-medium text-blue-700 transition hover:underline dark:text-blue-400"
                >
                  🤖 Automation &amp; Web Scraping
                </Link>
              </li>
              <li>
                <Link
                  href="/interview-questions"
                  className="text-slate-600 transition hover:text-[#1f3a5c] dark:text-slate-400 dark:hover:text-blue-400"
                >
                  Technical Interview Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-600 transition hover:text-[#1f3a5c] dark:text-slate-400 dark:hover:text-blue-400"
                >
                  Tech Blog &amp; Calculators Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators"
                  className="text-slate-600 transition hover:text-[#1f3a5c] dark:text-slate-400 dark:hover:text-blue-400"
                >
                  Browse All 100+ Calculators
                </Link>
              </li>
            </ul>
          </div>

          {/* State-Wise Tax Calculators */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              State Tax Calculators
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/stamp-duty-calculator"
                  className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                >
                  Stamp Duty Calculator (Hub)
                </Link>
              </li>
              <li className="flex flex-wrap gap-x-2 text-xs text-slate-500">
                <Link href="/stamp-duty-calculator/maharashtra" className="hover:underline">MH</Link> •
                <Link href="/stamp-duty-calculator/karnataka" className="hover:underline">KA</Link> •
                <Link href="/stamp-duty-calculator/delhi" className="hover:underline">DL</Link> •
                <Link href="/stamp-duty-calculator/uttar-pradesh" className="hover:underline">UP</Link> •
                <Link href="/stamp-duty-calculator/tamil-nadu" className="hover:underline">TN</Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/road-tax-calculator"
                  className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                >
                  Road Tax Calculator (Hub)
                </Link>
              </li>
              <li className="flex flex-wrap gap-x-2 text-xs text-slate-500">
                <Link href="/road-tax-calculator/maharashtra" className="hover:underline">MH</Link> •
                <Link href="/road-tax-calculator/karnataka" className="hover:underline">KA</Link> •
                <Link href="/road-tax-calculator/delhi" className="hover:underline">DL</Link> •
                <Link href="/road-tax-calculator/uttar-pradesh" className="hover:underline">UP</Link> •
                <Link href="/road-tax-calculator/tamil-nadu" className="hover:underline">TN</Link>
              </li>
            </ul>
          </div>

          {/* Calculator Categories */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Calculator Categories
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Finance & Tax", "/category/finance"],
                ["Health & Fitness", "/category/health"],
                ["Math & Algebra", "/category/math"],
                ["Utility & Dates", "/category/utility"],
                ["Education & GPA", "/category/education"],
                ["Vehicle & Mileage", "/category/vehicle"],
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
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-sm text-slate-600 dark:text-slate-400 md:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} DevCalc. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm">
            <Link href="/calculators" className="hover:text-[#1f3a5c] dark:hover:text-blue-400">
              Calculators
            </Link>
            <Link href="/collegeProject" className="hover:text-[#1f3a5c] dark:hover:text-blue-400">
              Student Projects
            </Link>
            <Link href="/want-automation" className="hover:text-[#1f3a5c] dark:hover:text-blue-400">
              Automation
            </Link>
            <Link href="/interview-questions" className="hover:text-[#1f3a5c] dark:hover:text-blue-400">
              Interview Questions
            </Link>
            <Link href="/blog" className="hover:text-[#1f3a5c] dark:hover:text-blue-400">
              Blog
            </Link>
            <Link href="/about" className="hover:text-[#1f3a5c] dark:hover:text-blue-400">
              About
            </Link>
            <Link href="/privacy-policy" className="hover:text-[#1f3a5c] dark:hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#1f3a5c] dark:hover:text-blue-400">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-[#1f3a5c] dark:hover:text-blue-400">
              Contact
            </Link>
            <Link href="/sitemap.xml" className="hover:text-[#1f3a5c] dark:hover:text-blue-400">
              Sitemap
            </Link>
          </div>
        </div>

        {/* Featured On */}
        <div className="border-t border-stone-200/60 dark:border-slate-700">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-6 py-6">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
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
                  width="200"
                  height="60"
                  loading="lazy"
                  className="h-auto w-auto"
                />
              </a>

              <a
                href="https://tools.cafe"
                target="_blank"
                rel="noopener"
                title="Featured on tools.cafe"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://tools.cafe/b/light.svg"
                  alt="Featured on tools.cafe"
                  width={200}
                  height={60}
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}