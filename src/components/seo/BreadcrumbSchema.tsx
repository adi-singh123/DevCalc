// src/components/seo/BreadcrumbSchema.tsx

type Props = {
  category: string;
  name: string;
  slug: string;
};

export default function BreadcrumbSchema({
  category,
  name,
  slug,
}: Props) {
  const schema = {
    "@context":
      "https://schema.org",
    "@type":
      "BreadcrumbList",
    itemListElement: [
      {
        "@type":
          "ListItem",
        position: 1,
        name: "Home",
        item:
          "https://www.devcalc.in",
      },
      {
        "@type":
          "ListItem",
        position: 2,
        name: category,
        item: `https://www.devcalc.in/category/${category.toLowerCase()}`,
      },
      {
        "@type":
          "ListItem",
        position: 3,
        name,
        item: `https://www.devcalc.in/${slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html:
          JSON.stringify(schema),
      }}
    />
  );
}