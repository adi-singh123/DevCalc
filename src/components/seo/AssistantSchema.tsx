export default function AssistantSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",

    name: "DevCalc Assistant",

    applicationCategory:
      "UtilityApplication",

    operatingSystem: "Web",

    url: "https://www.devcalc.in",

    description:
      "DevCalc Assistant helps users discover calculators, understand formulas, find relevant tools, and get answers to calculator-related questions across finance, health, education, construction, utility, and developer categories.",

    creator: {
      "@type": "Organization",
      name: "DevCalc",
      url: "https://www.devcalc.in",
    },

    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },

    featureList: [
      "Calculator Discovery",
      "FAQ Assistance",
      "Finance Calculator Search",
      "Health Calculator Search",
      "Construction Calculator Search",
      "Developer Tool Search",
      "Instant Tool Recommendations",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}