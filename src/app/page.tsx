import type { Metadata } from "next";
import Hero from "../components/home/Hero";
import PopularCalculators from "../components/home/PopularCalculators";
import CalculatorCategories from "../components/home/Categories";
import Container from "../components/layout/Container";

export const metadata: Metadata = {
  title: "DevCalc — Free Online Calculators",
  description:
    "Free online calculators for finance, health, vehicle, education and daily use calculations. Fast, accurate and easy to use.",
  alternates: {
    canonical: "https://www.devcalc.in/",
  },
  openGraph: {
    title: "DevCalc — Free Online Calculators",
    description:
      "Free online calculators for finance, health, vehicle, education and daily use calculations.",
    url: "https://www.devcalc.in/",
    siteName: "DevCalc",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevCalc — Free Online Calculators",
    description:
      "Free online calculators for finance, health, vehicle, education and daily use calculations.",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="py-5">
        <Container>
          <PopularCalculators />
        </Container>
      </section>

      <CalculatorCategories />
    </main>
  );
}