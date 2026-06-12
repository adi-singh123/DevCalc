import Link from "next/link";

type Props = {
  calculator: {
    slug: string;
    name: string;
    description: string;
    category: string;
  };
};

export default function CalculatorCard({
  calculator,
}: Props) {
  return (
    <Link
      href={`/${calculator.slug}`}
      className="block rounded-2xl border bg-white p-5 transition hover:shadow-md"
    >
      <span className="text-xs font-medium text-blue-600">
        {calculator.category}
      </span>

      <h3 className="mt-2 text-lg font-semibold">
        {calculator.name}
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        {calculator.description}
      </p>
    </Link>
  );
}