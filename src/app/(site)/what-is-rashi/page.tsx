import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/src/components/seo/Breadcrumb";
import BreadcrumbSchema from "@/src/components/seo/BreadcrumbSchema";
import InteractiveFaq from "@/src/components/common/InteractiveFaq";
import RashiCalculator from "@/src/components/rashi/RashiCalculator";
import RashiIllustration from "@/src/components/rashi/RashiIllustration";
import { RASHIS } from "@/src/lib/rashi/calculateRashi";
import { rashiFaqs } from "@/src/lib/rashi/content";

const canonical = "https://www.devcalc.in/what-is-rashi";

export const metadata: Metadata = {
  title: "What Is My Rashi? Janma Rashi Calculator",
  description: "Find your accurate Janma Rashi and Nakshatra from birth date, exact time and birthplace. Free Vedic Moon sign calculator with transparent calculation details.",
  keywords: ["what is my rashi", "rashi calculator", "janma rashi calculator", "moon sign calculator vedic", "rashi by date of birth time and place", "chandra rashi calculator", "nakshatra and rashi calculator"],
  alternates: { canonical },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { title: "What Is My Rashi? Free Janma Rashi Calculator", description: "Calculate your Vedic Moon sign and Nakshatra from exact birth details.", url: canonical, siteName: "DevCalc", type: "website", locale: "en_IN", images: [{ url: "/logo.png", width: 1200, height: 630, alt: "DevCalc Janma Rashi Calculator" }] },
  twitter: { card: "summary_large_image", title: "What Is My Rashi? Janma Rashi Calculator", description: "Find your Vedic Moon sign from birth date, time and place.", images: ["/logo.png"] },
};

export default function WhatIsRashiPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${canonical}#webpage`, url: canonical, name: "What Is My Rashi? Janma Rashi Calculator", description: "Find Janma Rashi and Nakshatra from birth date, exact time and birthplace.", inLanguage: "en-IN", isPartOf: { "@id": "https://www.devcalc.in/#website" }, mainEntity: { "@id": `${canonical}#calculator` } },
      { "@type": ["WebApplication", "SoftwareApplication"], "@id": `${canonical}#calculator`, name: "DevCalc Janma Rashi Calculator", url: canonical, applicationCategory: "LifestyleApplication", operatingSystem: "All", browserRequirements: "Requires JavaScript", inLanguage: "en-IN", isAccessibleForFree: true, publisher: { "@id": "https://www.devcalc.in/#organization" }, offers: { "@type": "Offer", price: "0", priceCurrency: "INR" }, featureList: ["Janma Rashi calculation", "Nakshatra and Pada", "Birthplace timezone resolution", "Lahiri-style sidereal longitude", "Rashi boundary warning"] },
      { "@type": "FAQPage", mainEntity: rashiFaqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
      { "@type": "HowTo", "@id": `${canonical}#howto`, name: "How to find your Janma Rashi", totalTime: "PT2M", step: [
        { "@type": "HowToStep", position: 1, name: "Enter birth date", text: "Enter the date shown on your birth record." },
        { "@type": "HowToStep", position: 2, name: "Enter exact birth time", text: "Enter the local time at which you were born." },
        { "@type": "HowToStep", position: 3, name: "Select birthplace", text: "Search and select the correct city to apply its time zone." },
        { "@type": "HowToStep", position: 4, name: "Calculate Rashi", text: "Calculate the sidereal Moon sign, Nakshatra and Pada." },
      ] },
    ],
  };

  return <>
    <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "What Is My Rashi?", url: "/what-is-rashi" }]} />
      <Breadcrumb items={[{ label: "What Is My Rashi?" }]} />
    </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

    <main className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <header className="py-10 text-center sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b692f]">Vedic Moon sign calculator</p>
        <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">What Is My Rashi?</h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">Enter your birth date, exact time and birthplace to calculate your <strong>Janma Rashi</strong>—the sidereal zodiac sign occupied by the Moon when you were born. You will also receive your Nakshatra, Pada and calculation details.</p>
        <a href="#calculator" className="mt-7 inline-flex rounded-xl bg-[#1f3a5c] px-6 py-3 font-bold text-white hover:bg-[#172c46]">Find my Rashi</a>
      </header>

      <RashiCalculator />

      <section className="mt-14 grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">How this Rashi calculation works</h2>
          <ol className="mt-5 space-y-4 text-slate-600 dark:text-slate-300">
            <li><strong className="text-slate-900 dark:text-white">1. Resolve the birth instant.</strong> Your local date and time are converted to UTC using the selected birthplace’s IANA time zone, including the historical offset.</li>
            <li><strong className="text-slate-900 dark:text-white">2. Locate the Moon.</strong> Astronomy Engine supplies the geocentric ecliptic longitude of the Moon for that UTC instant.</li>
            <li><strong className="text-slate-900 dark:text-white">3. Convert to the sidereal zodiac.</strong> A mean Lahiri-style ayanamsha is subtracted from the tropical longitude.</li>
            <li><strong className="text-slate-900 dark:text-white">4. Identify the division.</strong> The 360° zodiac is divided into twelve 30° Rashis and twenty-seven equal Nakshatras; the Moon’s position selects your result.</li>
          </ol>
        </article>
        <article className="rounded-3xl border border-stone-200 bg-[#f5f0e7] p-6 dark:border-slate-800 dark:bg-slate-950 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">What information do you need?</h2>
          <dl className="mt-5 space-y-4">
            <div><dt className="font-bold text-slate-900 dark:text-white">Birth date</dt><dd className="mt-1 text-slate-600 dark:text-slate-300">Sets the day on which the Moon’s position is calculated.</dd></div>
            <div><dt className="font-bold text-slate-900 dark:text-white">Exact birth time</dt><dd className="mt-1 text-slate-600 dark:text-slate-300">Fixes the Moon’s position within the day and is especially important near a Rashi boundary.</dd></div>
            <div><dt className="font-bold text-slate-900 dark:text-white">Birthplace</dt><dd className="mt-1 text-slate-600 dark:text-slate-300">Supplies the correct local time zone. Latitude and longitude are retained for consistent birth-location data, although Janma Rashi uses the geocentric Moon.</dd></div>
          </dl>
          <p className="mt-6 rounded-xl border border-[#b58a3b]/35 bg-white/70 p-4 text-sm leading-6 text-slate-700 dark:bg-slate-900 dark:text-slate-300"><strong>Important:</strong> this is an educational Jyotish calculation, not scientific evidence or a prediction of life events. Traditional descriptions are clearly labelled as traditional associations.</p>
        </article>
      </section>

      <section className="mt-14" aria-labelledby="rashi-list-title">
        <div className="max-w-3xl"><h2 id="rashi-list-title" className="text-3xl font-bold text-slate-950 dark:text-white">The 12 Rashis at a glance</h2><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">Each Rashi covers 30° of the sidereal zodiac. The English name is included for recognition, but Janma Rashi is based on the Moon rather than the commonly used Western Sun sign.</p></div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RASHIS.map((rashi) => <article key={rashi.key} className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"><RashiIllustration symbol={rashi.symbol} name={rashi.name} westernName={rashi.westernName} className="h-24 w-24 shrink-0" /><div><h3 className="font-bold text-slate-950 dark:text-white">{rashi.name} ({rashi.westernName})</h3><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{rashi.element} · {rashi.nature} · Lord: {rashi.lord}</p></div></article>)}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <h2 className="text-3xl font-bold text-slate-950 dark:text-white">Rashi calculator FAQ</h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">Clear answers about inputs, calculation method and the difference between Janma Rashi and other zodiac systems.</p>
        <InteractiveFaq faqs={[...rashiFaqs]} />
      </section>

      <aside className="mt-10 rounded-2xl border border-stone-200 bg-[#f5f0e7] p-5 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
        <h2 className="text-lg font-bold text-slate-950 dark:text-white">Method and references</h2>
        <p className="mt-2">The result uses Astronomy Engine’s geocentric Moon longitude and a mean Lahiri-style ayanamsha. It is intentionally described as a Lahiri-style approximation rather than Swiss Ephemeris output. For a full chart with Lagna, planets and Mahadasha, use the <Link href="/improve-life" className="font-semibold text-[#1f3a5c] underline dark:text-blue-300">Vedic birth chart calculator</Link>.</p>
        <p className="mt-2">Technical references: <a className="underline" href="https://www.npmjs.com/package/astronomy-engine" target="_blank" rel="noopener noreferrer">Astronomy Engine documentation</a> and <a className="underline" href="https://www.astro.com/swisseph/swephinfo_e.htm" target="_blank" rel="noopener noreferrer">Swiss Ephemeris information</a>.</p>
      </aside>
    </main>
  </>;
}
