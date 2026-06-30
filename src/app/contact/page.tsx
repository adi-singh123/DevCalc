// app/contact/page.tsx  ← keep metadata here (server component)
import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | DevCalc",
keywords: [
  "DevCalc contact",
  "Contact DevCalc",
  "Contact us",
  "Get in touch",
  "Support",
  "Customer support",
  "Help center",
  "Technical support",
  "Report a bug",
  "Feedback",
  "Feature request",
  "Business inquiry",
  "Developer tools support",
  "Calculator support",
  "Interview platform support",
  "Contact DevCalc team",
],
  description: "Have a question or found a bug? Send us a message — we reply within 24 hours.",
  alternates: { canonical: "https://www.devcalc.in/contact" },
};

export default function Page() {
  return <ContactPage />;
}