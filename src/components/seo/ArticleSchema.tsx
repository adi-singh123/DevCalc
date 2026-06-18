type ArticleSchemaProps = {
  title: string;
  description: string;
  slug: string;
  image?: string;
  publishedDate: string;
  modifiedDate?: string;
  author?: string;
};

export default function ArticleSchema({
  title,
  description,
  slug,
  image,
  publishedDate,
  modifiedDate,
  author = "Aditya Singh",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: title,

    description,

    url: `https://www.devcalc.in/blog/${slug}`,

    image: image
      ? [`https://www.devcalc.in${image}`]
      : undefined,

    datePublished: publishedDate,

    dateModified:
      modifiedDate ||
      publishedDate,

    inLanguage: "en-IN",

    author: {
      "@type": "Person",
      name: author,
    },

    publisher: {
      "@type": "Organization",
      name: "DevCalc",
      url: "https://www.devcalc.in",
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.devcalc.in/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          schema
        ),
      }}
    />
  );
}