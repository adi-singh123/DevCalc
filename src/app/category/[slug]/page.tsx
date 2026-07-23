import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { calculators } from "@/src/data/calculators";
import { categories } from "@/src/data/categories/Category";
import Breadcrumb from "@/src/components/seo/Breadcrumb";
import BreadcrumbSchema from "@/src/components/seo/BreadcrumbSchema";
import CalculatorCard from "@/src/components/calculator/CalculatorCard";

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
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} Calculators`,
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
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-slate-400">
          Category
        </span>

        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#26364a] md:text-5xl dark:text-white">
          {category.name} Calculators
        </h1>

        <p className="mt-4 text-lg leading-8 text-stone-600 dark:text-slate-300">
          Browse all calculators available in the {category.name} category.
        </p>

        <p className="mt-2 text-sm text-stone-500 dark:text-slate-400">
          {categoryCalculators.length} calculators found
        </p>
      </section>

      <section className="mt-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryCalculators.map((calculator) => (
            <CalculatorCard
              key={calculator.slug}
              calculator={calculator}
            />
          ))}
        </div>
      </section>
    </main>
  );
}