import { notFound } from "next/navigation";
import { calculators } from "@/src/data/calculators";

export async function generateStaticParams() {
  return calculators.map((calculator) => ({
    slug: calculator.slug,
  }));
}



type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CalculatorPage({
  params,
}: Props) {
  const { slug } = await params;

  const calculator = calculators.find(
    (item) => item.slug === slug
  );

  if (!calculator) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-bold">
        {calculator.name}
      </h1>

      <p className="mt-4 text-slate-600">
        {calculator.description}
      </p>
    </main>
  );
}