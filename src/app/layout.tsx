import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/src/config/site";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";


export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "calculator",
    "online calculator",
    "SIP calculator",
    "EMI calculator",
    "BMI calculator",
    "Mileage calculator",
    "age calculator",
    "calorie calculator",
    "loan calculator",
    "tax calculator",
    "currency converter",
    "unit converter",
    "percentage calculator",
    "time zone converter",
    "date calculator",
    "math calculator",
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
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
