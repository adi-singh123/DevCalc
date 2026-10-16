import { NextResponse } from "next/server";
import { getCalculatorChatDirectory } from "@/src/lib/calculators/repository";

export const revalidate = 300;

export async function GET() {
  const calculators = await getCalculatorChatDirectory();
  return NextResponse.json(
    calculators,
    { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600" } },
  );
}
