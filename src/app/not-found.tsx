import Link from "next/link";
import { Home, Calculator, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[75vh] max-w-5xl flex-col items-center justify-center px-4 text-center">
      {" "}
      <div
        className="
       flex
       h-24
       w-24
       items-center
       justify-center
       rounded-full
       bg-blue-100
       text-blue-600
       dark:bg-blue-500/10
       dark:text-blue-400
     "
      >
        {" "}
        <SearchX size={48} />{" "}
      </div>
      <h1 className="mt-8 text-8xl font-bold text-slate-900 dark:text-white">
        404
      </h1>
      <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
        Page Not Found
      </h2>
      <p className="mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-400">
        The page you're looking for doesn't exist, may have been moved, or the
        URL might be incorrect.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="
        flex
        items-center
        gap-2
        rounded-xl
        bg-blue-600
        px-6
        py-3
        font-medium
        text-white
        transition
        hover:bg-blue-700
      "
        >
          <Home size={18} />
          Go Home
        </Link>

        <Link
          href="/calculators"
          className="
        flex
        items-center
        gap-2
        rounded-xl
        border
        border-slate-300
        px-6
        py-3
        font-medium
        transition
        hover:bg-slate-100
        dark:border-slate-700
        dark:hover:bg-slate-800
      "
        >
          <Calculator size={18} />
          Browse Calculators
        </Link>
      </div>
      <div
        className="
      mt-14
      w-full
      max-w-3xl
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-8
      shadow-sm
      dark:border-slate-700
      dark:bg-slate-900
    "
      >
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Popular Calculators
        </h3>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Try one of our most visited calculators.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {[
            ["Age Calculator", "/age-calculator"],
            ["SIP Calculator", "/sip-calculator"],
            ["EMI Calculator", "/emi-calculator"],
            ["BMI Calculator", "/bmi-calculator"],
            ["GST Calculator", "/gst-calculator"],
            ["Percentage Calculator", "/percentage-calculator"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="
            rounded-full
            bg-slate-100
            px-4
            py-2
            text-sm
            font-medium
            transition
            hover:bg-blue-100
            hover:text-blue-600
            dark:bg-slate-800
            dark:hover:bg-blue-500/10
            dark:hover:text-blue-400
          "
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
