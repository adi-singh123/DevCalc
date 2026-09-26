import type { Metadata } from "next";
import Breadcrumb from "@/src/components/seo/Breadcrumb";
import BreadcrumbSchema from "@/src/components/seo/BreadcrumbSchema";
import ImproveLifeExperience from "@/src/components/improve-life/ImproveLifeExperience";
import { improveLifeFaqs } from "@/src/lib/improve-life/content";

export const metadata: Metadata = {
  title: "Free Vedic Birth Chart & Mahadasha Calculator",
  description: "Create a free Vedic birth chart using your birth date, time and place. Explore Lagna, Nakshatra, planetary positions, D9, D10 and Vimshottari Mahadasha.",
  keywords: [
    "Vedic birth chart calculator",
    "free Kundli calculator",
    "online Janam Kundli",
    "Vedic astrology calculator",
    "Mahadasha calculator",
    "Vimshottari Dasha calculator",
    "Nakshatra calculator",
    "Lagna calculator",
    "sidereal birth chart",
    "planetary position calculator",
    "Navamsha D9 calculator",
    "Dashamsha D10 calculator",
    "birth chart by date time and place",
    "Jyotish calculator",
    "free astrology report",
  ],
  alternates: { canonical: "https://www.devcalc.in/improve-life" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Free Vedic Birth Chart & Mahadasha Calculator",
    description: "Calculate Lagna, Nakshatra, sidereal planetary positions, D9/D10 placements and Vimshottari Mahadasha from your birth details.",
    url: "https://www.devcalc.in/improve-life",
    siteName: "DevCalc",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "DevCalc Vedic Birth Chart Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Vedic Birth Chart & Mahadasha Calculator",
    description: "Explore Lagna, Nakshatra, planetary positions and Vimshottari Mahadasha using a transparent calculation.",
    images: ["/logo.png"],
  },
};

export default function ImproveLifePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.devcalc.in/improve-life#webpage",
        url: "https://www.devcalc.in/improve-life",
        name: "Free Vedic Birth Chart & Mahadasha Calculator",
        description: "Create a free Vedic birth chart using birth date, time and place, with Lagna, Nakshatra, planetary positions and Vimshottari Mahadasha.",
        inLanguage: "en-IN",
        isPartOf: { "@id": "https://www.devcalc.in/#website" },
        about: { "@id": "https://www.devcalc.in/improve-life#application" },
        mainEntity: { "@id": "https://www.devcalc.in/improve-life#application" },
      },
      {
        "@type": ["WebApplication", "SoftwareApplication"],
        "@id": "https://www.devcalc.in/improve-life#application",
        name: "DevCalc Vedic Birth Chart and Mahadasha Calculator",
        url: "https://www.devcalc.in/improve-life",
        description: "A free calculator for sidereal planetary positions, Lagna, Nakshatra, D9/D10 placements and Vimshottari Mahadasha using birth date, time and place.",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "All",
        browserRequirements: "Requires JavaScript",
        inLanguage: "en-IN",
        isAccessibleForFree: true,
        publisher: { "@id": "https://www.devcalc.in/#organization" },
        offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
        featureList: [
          "Sidereal planetary positions",
          "Lagna and whole-sign houses",
          "Nakshatra and Pada",
          "D9 and D10 sign placements",
          "Vimshottari Mahadasha timeline",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: improveLifeFaqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      {
        "@type": "HowTo",
        "@id": "https://www.devcalc.in/improve-life#howto",
        name: "How to create your Vedic birth chart report",
        description: "Enter and validate birth details, resolve the UTC instant, calculate sidereal chart positions and read the resulting life-period report.",
        totalTime: "PT5M",
        step: [
          { "@type": "HowToStep", position: 1, name: "Enter birth details", text: "Enter your name, birth date and birth-time accuracy." },
          { "@type": "HowToStep", position: 2, name: "Select birthplace", text: "Search for and select the correct birthplace and timezone." },
          { "@type": "HowToStep", position: 3, name: "Confirm the information", text: "Review the date, time, place and timezone before calculation." },
          { "@type": "HowToStep", position: 4, name: "Create the report", text: "Generate the sidereal planetary positions and Vimshottari Mahadasha timeline." },
          { "@type": "HowToStep", position: 5, name: "Read the guidance", text: "Review the plain-English past, present, future and practical guidance sections." },
        ],
      },
    ],
  };
  return <>
    <div className="mx-auto max-w-7xl px-4 pt-6">
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Improve Life", url: "/improve-life" }]} />
      <Breadcrumb items={[{ label: "Improve Life" }]} />
    </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c") }} />
    <ImproveLifeExperience />
  </>;
}
