import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim() ?? "";
  if (query.length < 2 || query.length > 120) return NextResponse.json({ results: [] });

  const endpoint = new URL("https://geocoding-api.open-meteo.com/v1/search");
  endpoint.searchParams.set("name", query);
  endpoint.searchParams.set("count", "6");
  endpoint.searchParams.set("language", "en");
  endpoint.searchParams.set("format", "json");

  try {
    const response = await fetch(endpoint, { next: { revalidate: 86400 } });
    if (!response.ok) throw new Error(`Geocoding returned ${response.status}`);
    const data = await response.json() as { results?: Array<Record<string, unknown>> };
    const results = (data.results ?? []).map((item) => ({
      label: [item.name, item.admin1, item.country].filter(Boolean).join(", "),
      latitude: item.latitude,
      longitude: item.longitude,
      timezone: item.timezone,
    })).filter((item) => typeof item.latitude === "number" && typeof item.longitude === "number" && typeof item.timezone === "string");
    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Location search is temporarily unavailable." }, { status: 503 });
  }
}
