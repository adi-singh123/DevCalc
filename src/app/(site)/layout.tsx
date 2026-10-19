import type { Metadata } from "next";
import Script from "next/script";
import "@/src/app/globals.css";
import { siteConfig } from "@/src/config/site";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import OrganizationSchema from "@/src/components/seo/OrganizationSchema";
import ChatWidget from "@/src/components/chatbot/ChatWidget";
import AssistantSchema from "@/src/components/seo/AssistantSchema";
import PwaManager from "@/src/components/pwa/PwaManager";

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

  referrer: "origin-when-cross-origin",

  other: {
    "google-adsense-account": "ca-pub-3757135541422436",
    dd347746bf5000e900f2aef3b655ed7f57c14ddf:
      "dd347746bf5000e900f2aef3b655ed7f57c14ddf",
  },

  description: siteConfig.description,

  alternates: {
    types: {
      "application/rss+xml": `${siteConfig.url}/rss.xml`,
    },
  },

  keywords: [
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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K4GPT85Z');`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K4GPT85Z"
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="devcalc-service-worker" strategy="afterInteractive">
          {`if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
              navigator.serviceWorker.register('/sw.js', {
                scope: '/',
                updateViaCache: 'none'
              }).then(function (registration) {
                registration.update();
              }).catch(function (error) {
                console.error('DevCalc service worker registration failed:', error);
              });
            });
          }`}
        </Script>
        <OrganizationSchema />
        <AssistantSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
        <PwaManager />
      </body>
    </html>
  );
}
