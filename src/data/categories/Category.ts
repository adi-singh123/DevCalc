export const categories = [
  {
    name: "Finance",
    slug: "finance",
  },
  {
    name: "Health",
    slug: "health",
  },
  {
    name: "Math",
    slug: "math",
  },
  {
    name: "Utility",
    slug: "utility",
  },
  {
    name: "Education",
    slug: "education",
  },
  {
    name:"Fun",
    slug:"fun",
  },
  {
    name:"Construction",
    slug:"construction",
  },
  {
    name:"Developer Tools",
    slug:"developer-tools"
  },
  {
  name: "Other",
  slug: "other",
},
{
  name:"Vehicle",
  slug:"vehicle"
}
];

export function getCategorySlug(categoryName: string): string {
  return (
    categories.find(
      (category) =>
        category.name.toLowerCase() === categoryName.trim().toLowerCase(),
    )?.slug ?? categoryName.trim().toLowerCase().replace(/\s+/g, "-")
  );
}
