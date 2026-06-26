type BreadcrumbItem = {
  name: string;
  url?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export default function BreadcrumbSchema({
  items,
}: Props) {
  const schema = {
    "@context":
      "https://schema.org",
    "@type":
      "BreadcrumbList",

    itemListElement: items.map(
      (item, index) => ({
        "@type":
          "ListItem",

        position:
          index + 1,

        name: item.name,

        ...(item.url && {
          item: `https://www.devcalc.in${item.url}`,
        }),
      }),
    ),
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