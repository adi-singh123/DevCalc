import { siteConfig } from "@/src/config/site";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DevCalc",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description:
      "Free online calculators for finance, health, vehicle, education, and everyday calculations.",
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
