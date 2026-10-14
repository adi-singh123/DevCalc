import { NextResponse } from "next/server";
import { getCalculators } from "@/src/lib/calculators/repository";

export const revalidate = 300;

export async function GET() {
  const calculators = await getCalculators();
  return NextResponse.json(
    calculators.map(({ slug, name, description, category, seo, faqs }) => ({
      slug,
      name,
      description,
      category,
      seo: { keywords: seo.keywords },
      faqs,
    })),
    { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600" } },
  );
}
