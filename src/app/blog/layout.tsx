import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.devcalc.in",
  ),

  title: {
    default: "DevCalc Blog",
    template: "%s | DevCalc",
  },

  description:
    "Learn finance, health, education, vehicle and utility calculations with detailed guides, formulas, examples and practical tutorials.",

keywords: [
  // Brand
  "devcalc",
  "devcalc blog",
  "devcalc calculator",

  // General
  "calculator blog",
  "online calculator blog",
  "free calculator guides",
  "calculation tutorials",
  "calculation tips and tricks",
  "daily calculation guides",
  "online tools blog",
  "finance and calculator blog",

  // Finance
  "finance guides",
  "personal finance calculator",
  "investment calculation guide",
  "loan calculation guide",
  "emi calculation guide",
  "sip calculation guide",
  "income tax calculation guide",
  "gst calculation",
  "gst calculation formula",
  "gst calculator guide",
  "how to calculate gst in india",
  "gst percentage calculator",
  "gst inclusive calculator",
  "gst exclusive calculator",

  // Education
  "cgpa calculation",
  "cgpa calculator guide",
  "how to calculate cgpa",
  "cgpa to percentage calculation",
  "semester cgpa calculator",
  "student grade calculator",

  // Math
  "percentage calculation",
  "percentage calculator guide",
  "percentage increase calculator",
  "percentage decrease calculator",
  "how to calculate percentage",
  "percentage formula explained",
  "math calculation guide",

  // Vehicle
  "mileage calculation",
  "mileage calculator guide",
  "car mileage calculation",
  "bike mileage calculation",
  "fuel efficiency calculation",
  "km per litre calculator",
  "fuel cost calculator",
  "petrol mileage calculator",
  "diesel mileage calculator",

  // Health
  "health guides",
  "health calculator blog",
  "bmi calculator guide",
  "body fat calculator guide",
  "calorie calculator guide",
  "ideal weight calculator guide",

  // Question Based
  "how to calculate percentage in calculator",
  "how to calculate gst online",
  "how to calculate mileage of car",
  "how to calculate bike mileage",
  "how to calculate cgpa from marks",
  "best online calculator website",
  "free online calculation tools",
  "easy calculation methods",

  // Hindi Keywords
  "कैलकुलेटर ब्लॉग",
  "ऑनलाइन कैलकुलेटर",
  "फ्री कैलकुलेटर टूल",
  "प्रतिशत कैलकुलेशन",
  "प्रतिशत कैसे निकालें",
  "जीएसटी कैलकुलेशन",
  "जीएसटी कैसे निकालें",
  "सीजीपीए कैलकुलेशन",
  "सीजीपीए से प्रतिशत",
  "माइलेज कैलकुलेशन",
  "गाड़ी का माइलेज कैसे निकालें",
  "बाइक का माइलेज कैसे निकालें",
  "ईएमआई कैलकुलेटर गाइड",
  "फाइनेंस गाइड हिंदी",
  "स्वास्थ्य कैलकुलेटर",
  "बीएमआई कैलकुलेटर",
  "ऑनलाइन गणना टूल",
  "कैलकुलेशन गाइड हिंदी",

  // Long Tail Hindi
  "प्रतिशत निकालने का आसान तरीका",
  "जीएसटी निकालने का फार्मूला",
  "सीजीपीए को प्रतिशत में कैसे बदलें",
  "कार का माइलेज कैसे चेक करें",
  "बाइक का एवरेज कैसे निकालें",
  "ईएमआई कैसे कैलकुलेट करें",
  "ऑनलाइन कैलकुलेटर वेबसाइट इंडिया",
  "फ्री ऑनलाइन कैलकुलेटर हिंदी",
  "सभी प्रकार के कैलकुलेटर एक जगह",
],

  alternates: {
    canonical:
      "https://www.devcalc.in/blog",
  },

  openGraph: {
    siteName: "DevCalc",

    type: "website",

    title: "DevCalc Blog",

    description:
      "Learn finance, health, education, vehicle and utility calculations through detailed guides and examples.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}