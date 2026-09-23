import { siteConfig } from "@/src/config/site";

type WebPageSchemaProps = {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
};

export default function WebPageSchema({
  title,
  description,
  path,
  type = "WebPage",
}: WebPageSchemaProps) {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: "en-IN",
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
