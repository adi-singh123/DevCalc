import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
    alternates: {
    canonical: "/privacy-policy",
  },
    authors: [
    {
      name: "Aditya Singh",
    },
  ],

  creator: "Aditya Singh",

  publisher: "DevCalc",
  description:
    "Read the Privacy Policy of DevCalc and learn how we collect, use, and protect user information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-bold">
        Privacy Policy
      </h1>

      <p className="mt-4 text-slate-600">
        Last Updated: June 2026
      </p>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold">
            Introduction
          </h2>

          <p className="mt-3 text-slate-600">
            DevCalc respects your privacy and is
            committed to protecting your personal
            information. This Privacy Policy explains
            how we collect, use, and safeguard your
            information when you use our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Information We Collect
          </h2>

          <p className="mt-3 text-slate-600">
            We may collect non-personal information
            such as browser type, device information,
            pages visited, and usage statistics.
          </p>

          <p className="mt-3 text-slate-600">
            If you contact us directly, we may collect
            your name, email address, and any
            information you voluntarily provide.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            How We Use Information
          </h2>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
            <li>Improve website performance.</li>
            <li>Provide a better user experience.</li>
            <li>Respond to user inquiries.</li>
            <li>Monitor website traffic and usage.</li>
            <li>Maintain website security.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Cookies
          </h2>

          <p className="mt-3 text-slate-600">
            DevCalc may use cookies to improve user
            experience, remember preferences, and
            analyze website performance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Analytics
          </h2>

          <p className="mt-3 text-slate-600">
            We may use analytics tools such as Google
            Analytics to understand visitor behavior
            and improve our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Advertising
          </h2>

          <p className="mt-3 text-slate-600">
            Third-party advertising partners,
            including Google AdSense, may use cookies
            and similar technologies to display
            relevant advertisements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Third-Party Links
          </h2>

          <p className="mt-3 text-slate-600">
            Our website may contain links to external
            websites. We are not responsible for the
            privacy practices of those websites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Data Security
          </h2>

          <p className="mt-3 text-slate-600">
            We implement reasonable security measures
            to protect information. However, no method
            of transmission over the internet is
            completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Contact Us
          </h2>

          <p className="mt-3 text-slate-600">
            If you have questions regarding this
            Privacy Policy, please contact:
          </p>

          <p className="mt-3 font-medium">
            adityasingh35052@gmail.com
          </p>
        </section>
      </div>
    </main>
  );
}