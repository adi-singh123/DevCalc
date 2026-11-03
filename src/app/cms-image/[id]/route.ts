import { getTursoClient } from "@/src/lib/db/turso";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!/^[a-f0-9]{32}$/.test(id)) return new Response("Not found", { status: 404 });
  try {
    const result = await getTursoClient().execute({ sql: "SELECT mime_type, bytes FROM cms_images WHERE id = ? LIMIT 1", args: [id] });
    const row = result.rows[0];
    if (!row || typeof row.mime_type !== "string") return new Response("Not found", { status: 404 });
    const storedBytes: unknown = row.bytes;
    const bytes = storedBytes instanceof ArrayBuffer ? storedBytes : storedBytes instanceof Uint8Array ? Uint8Array.from(storedBytes).buffer : null;
    if (!bytes) return new Response("Not found", { status: 404 });
    return new Response(bytes, { headers: { "Content-Type": row.mime_type, "Cache-Control": "public, max-age=31536000, immutable", "X-Content-Type-Options": "nosniff" } });
  } catch (error) {
    console.error("CMS image read failed", error);
    return new Response("Image unavailable", { status: 503 });
  }
}
