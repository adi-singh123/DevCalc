import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-lg text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist
        or may have been moved.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-xl border px-5 py-3"
        >
          Go Home
        </Link>

        <Link
          href="/calculators"
          className="rounded-xl border px-5 py-3"
        >
          Browse Calculators
        </Link>
      </div>

      <div className="mt-12">
        <h3 className="mb-4 text-xl font-semibold">
          Popular Calculators
        </h3>

        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/age-calculator">
            Age Calculator
          </Link>

          <Link href="/sip-calculator">
            SIP Calculator
          </Link>

          <Link href="/emi-calculator">
            EMI Calculator
          </Link>
        </div>
      </div>
    </main>
  );
}