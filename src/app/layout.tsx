import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/src/config/site";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import OrganizationSchema from "@/src/components/seo/OrganizationSchema";
import ChatWidget from "@/src/components/chatbot/ChatWidget";
import AssistantSchema from "@/src/components/seo/AssistantSchema";
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  verification: {
    google: "hJr9mhDCoby0tp4SxBFxZsl1cWymDuQEprknv-TWvNk",
  },

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  authors: [
    {
      name: "Devcalc",
    },
  ],

  creator: "Aditya Singh",

  publisher: "DevCalc",

  description: siteConfig.description,

  keywords: [
     //interview
    "javascript interview question free",
    "c++ interview question free",
    "java interview question free",
    "node.js interview question free",
    "sql interview question free",


    // General
    "calculator",
    "online calculator",
    "free calculator",
    "calculator website",
    "online tools",
    "free online tools",

    // Finance
    "SIP calculator",
    "EMI calculator",
    "FD calculator",
    "PPF calculator",
    "NPS calculator",
    "GST calculator",
    "income tax calculator",
    "compound interest calculator",
    "simple interest calculator",
    "retirement calculator",
    "loan calculator",
    "investment calculator",
    "financial calculator",

    // Health
    "BMI calculator",
    "BMR calculator",
    "calorie calculator",
    "body fat calculator",
    "water intake calculator",
    "ideal body weight calculator",
    "protein intake calculator",
    "health calculator",

    // Math
    "percentage calculator",
    "scientific calculator",
    "fraction calculator",
    "matrix calculator",
    "probability calculator",
    "quadratic equation calculator",
    "standard deviation calculator",
    "math calculator",

    // Education
    "GPA calculator",
    "CGPA calculator",
    "attendance calculator",
    "study hours calculator",
    "marks calculator",
    "education calculator",

    // Utility
    "age calculator",
    "date calculator",
    "time duration calculator",
    "unit converter",
    "business days calculator",
    "password generator",
    "QR code generator",
    "random number generator",
    "utility calculator",

    // Vehicle
    "mileage calculator",
    "fuel cost calculator",
    "vehicle calculator",

    // Construction
    "house construction cost calculator",
    "cement calculator",
    "brick calculator",
    "concrete calculator",
    "construction calculator",

    // Developer Tools
    "JSON formatter",
    "UUID generator",
    "Base64 encoder",
    "Base64 decoder",
    "URL encoder",
    "URL decoder",
    "developer tools",
    "developer calculator",

    // Fun
    "love calculator",
    "friendship calculator",
    "lucky number calculator",
    "fun calculator",

    // Branding
    "DevCalc",
    "DevCalc calculators",
    "DevCalc online tools",

   
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DevCalc",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <OrganizationSchema />
        <AssistantSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
