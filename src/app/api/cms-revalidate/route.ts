import { timingSafeEqual } from "node:crypto";
import { revalidatePath, revalidateTag } from "next/cache";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const secret = process.env.CMS_REVALIDATE_SECRET;
  const supplied = request.headers.get("authorization")?.replace(/^Bearer /, "") ?? "";
  const suppliedBytes = Buffer.from(supplied);
  const secretBytes = Buffer.from(secret ?? "");
  if (!secret || secret.length < 32 || suppliedBytes.length !== secretBytes.length || !timingSafeEqual(suppliedBytes, secretBytes)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await request.json().catch(() => null);
  const kind = body?.kind;
  const slug = body?.slug;
  if ((kind !== "blogs" && kind !== "calculators" && kind !== "pages") || typeof slug !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return Response.json({ error: "Invalid content target" }, { status: 400 });
  }
  if (kind === "blogs") {
    revalidateTag("blog-posts", { expire: 0 });
    revalidateTag(`blog-post:${slug}`, { expire: 0 });
    revalidatePath(`/blog/${slug}`);
    revalidatePath("/blog");
    revalidatePath("/rss.xml");
  } else if (kind === "calculators") {
    revalidateTag("calculators", { expire: 0 });
    revalidateTag(`calculator:${slug}`, { expire: 0 });
    revalidatePath(`/${slug}`);
    revalidatePath("/calculators");
  } else {
    if (!["about", "privacy-policy", "terms"].includes(slug)) return Response.json({ error: "Page is not managed by the CMS" }, { status: 400 });
    revalidateTag("site-pages", { expire: 0 });
    revalidateTag(`site-page:${slug}`, { expire: 0 });
    revalidatePath(`/${slug}`);
  }
  revalidatePath("/sitemap.xml");
  return Response.json({ revalidated: true });
}
