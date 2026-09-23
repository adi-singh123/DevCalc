import { siteConfig } from "@/src/config/site";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: "DevCalc",
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        description:
          "Free online calculators for finance, health, vehicle, education, and everyday calculations.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: "DevCalc",
        url: siteConfig.url,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "en-IN",
      },
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
