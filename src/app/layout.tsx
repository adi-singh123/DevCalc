import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/src/config/site";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import OrganizationSchema from "@/src/components/seo/OrganizationSchema";

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
      name: "Aditya Singh",
    },
  ],

  creator: "Aditya Singh",

  publisher: "DevCalc",

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
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
