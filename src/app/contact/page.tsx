import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
    alternates: {
    canonical: "/contact",
  },
    authors: [
    {
      name: "Aditya Singh",
    },
  ],

  creator: "Aditya Singh",

  publisher: "DevCalc",
  description:
    "Contact the DevCalc team for feedback, calculator requests, bug reports, and general enquiries.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          Contact Us
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          We'd love to hear from you. Whether you have
          feedback, calculator suggestions, bug reports,
          or general questions, feel free to contact us.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">
            General Enquiries
          </h2>

          <p className="mt-3 text-sm text-slate-600">
            Questions about DevCalc, calculators,
            or website features.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">
            Calculator Requests
          </h2>

          <p className="mt-3 text-sm text-slate-600">
            Suggest new calculators you'd like
            us to add.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">
            Bug Reports
          </h2>

          <p className="mt-3 text-sm text-slate-600">
            Report issues, incorrect calculations,
            or technical problems.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mt-12 rounded-3xl border bg-slate-50 p-8">
        <h2 className="text-2xl font-bold">
          Contact Information
        </h2>

        <div className="mt-6 space-y-4">
          <div>
            <p className="font-medium">
              Email
            </p>

            <p className="text-slate-600">
              adityasingh35052@gmail.com
            </p>
          </div>

          <div>
            <p className="font-medium">
              Response Time
            </p>

            <p className="text-slate-600">
              We typically respond within
              24–48 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Helpful Links */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">
          Helpful Links
        </h2>

        <div className="mt-4 flex flex-wrap gap-4">
          <Link
            href="/about"
            className="rounded-xl border px-4 py-2 hover:bg-slate-50"
          >
            About Us
          </Link>

          <Link
            href="/privacy-policy"
            className="rounded-xl border px-4 py-2 hover:bg-slate-50"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="rounded-xl border px-4 py-2 hover:bg-slate-50"
          >
            Terms of Use
          </Link>
        </div>
      </section>
    </main>
  );
}