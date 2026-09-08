import type { Metadata } from "next";
import Hero from "@/src/components/home/Hero";
import Features from "@/src/components/home/Features";
import PopularCalculators from "@/src/components/home/PopularCalculators";
import CalculatorCategories from "@/src/components/home/Categories";
import ServicesAndFeaturedSection from "@/src/components/home/ServicesAndFeaturedSection";
import Container from "@/src/components/layout/Container";
import WebsiteSchema from "@/src/components/seo/WebsiteSchema";

export const metadata: Metadata = {
  title: "DevCalc — Free Online Calculators for Finance, Health & More",
  description:
    "100+ free calculators for EMI, BMI, mileage, GPA, and tax — with an AI assistant to help you find the right one. No signup required.",
  alternates: {
    canonical: "https://www.devcalc.in/",
  },
  openGraph: {
    title: "DevCalc — Free Online Calculators for Finance, Health & More",
    description:
      "100+ free calculators for EMI, BMI, mileage, GPA, and tax — with an AI assistant to help you find the right one.",
    url: "https://www.devcalc.in/",
    siteName: "DevCalc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevCalc — Free Online Calculators for Finance, Health & More",
    description:
      "100+ free calculators for EMI, BMI, mileage, GPA, and tax — with an AI assistant to help you find the right one.",
  },
};
export default function HomePage() {
  return (
    <>
      <WebsiteSchema />

      <main>
        <Hero />

        <Features />

        <ServicesAndFeaturedSection />

        <section className="py-5">
          <Container>
            <PopularCalculators />
          </Container>
        </section>

        <CalculatorCategories />
      </main>
    </>
  );
}
