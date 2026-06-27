import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { calculators } from "@/src/data/calculators";
import { categories } from "@/src/data/categories/Category";
import Breadcrumb from "@/src/components/seo/Breadcrumb";
import BreadcrumbSchema from "@/src/components/seo/BreadcrumbSchema";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const category = categories.find(
    (item) => item.slug === slug,
  );

  if (!category) {
    return {
      title: "Category Not Found | DevCalc",
    };
  }

  return {
    title: `${category.name} Calculators | DevCalc`,
    description: `Browse free online ${category.name.toLowerCase()} calculators on DevCalc. Accurate formulas, instant results, and easy-to-use tools.`,

    keywords: [
      `${category.name.toLowerCase()} calculators`,
      `${category.name.toLowerCase()} tools`,
      `free ${category.name.toLowerCase()} calculators`,
      "online calculators",
      "DevCalc",
    ],

    alternates: {
      canonical: `https://www.devcalc.in/category/${slug}`,
    },

    openGraph: {
      title: `${category.name} Calculators | DevCalc`,
      description: `Browse free online ${category.name.toLowerCase()} calculators on DevCalc.`,
      url: `https://www.devcalc.in/category/${slug}`,
      siteName: "DevCalc",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${category.name} Calculators | DevCalc`,
      description: `Browse free online ${category.name.toLowerCase()} calculators on DevCalc.`,
    },
  };
}

export default async function CategoryPage({
  params,
}: Props) {
  const { slug } = await params;

  const category = categories.find(
    (item) => item.slug === slug,
  );

  if (!category) {
    notFound();
  }

  const categoryCalculators = calculators.filter(
    (calculator) =>
      calculator.category.toLowerCase() ===
      category.name.toLowerCase(),
  );

  const breadcrumbItems = [
  {
    label: "Categories",
  },
];

const breadcrumbSchema = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Categories",
    url: "/categories",
  },
];

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
          <BreadcrumbSchema items={breadcrumbSchema} />

    <Breadcrumb items={breadcrumbItems} />
      <section className="max-w-3xl">
        <h1 className="text-4xl font-bold md:text-5xl">
          {category.name} Calculators
        </h1>

        <p className="mt-4 text-slate-600">
          Browse all calculators available in the{" "}
          {category.name} category.
        </p>

        <p className="mt-2 text-sm text-slate-500">
          {categoryCalculators.length} calculators found
        </p>
      </section>

      <section className="mt-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryCalculators.map((calculator) => (
            <Link
              key={calculator.slug}
              href={`/${calculator.slug}`}
              className="
                rounded-2xl
                border
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <h2 className="text-lg font-semibold">
                {calculator.name}
              </h2>

              <p className="mt-3 text-sm text-slate-600">
                {calculator.description}
              </p>

              <p className="mt-4 text-sm font-medium text-blue-600">
                Open Calculator →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}