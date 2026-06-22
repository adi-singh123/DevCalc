export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: "DevCalc",

    alternateName: "DevCalc Online Calculators",

    url: "https://www.devcalc.in",

    description:
      "DevCalc provides free online calculators for finance, health, math, education, construction, vehicle, utility, fun, and developer tools.",

    publisher: {
      "@type": "Organization",
      name: "DevCalc",
      url: "https://www.devcalc.in",
    },
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