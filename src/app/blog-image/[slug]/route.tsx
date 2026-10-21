import { ImageResponse } from "next/og";

import { getPublishedBlogBySlug } from "@/src/lib/blogs/repository";

export const runtime = "nodejs";

const WIDTH = 1200;
const HEIGHT = 630;

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;
  const blog = await getPublishedBlogBySlug(slug);

  if (!blog) {
    return new Response("Blog image not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "linear-gradient(135deg, #07152f 0%, #123d83 55%, #00a8e8 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 78,
              height: 78,
              borderRadius: 20,
              background: "rgba(255,255,255,0.16)",
              border: "2px solid rgba(255,255,255,0.35)",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            DC
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 34, fontWeight: 800 }}>DevCalc</span>
            <span style={{ marginTop: 4, fontSize: 20, opacity: 0.82 }}>
              Clear guides backed by useful details
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1040 }}>
          <span
            style={{
              alignSelf: "flex-start",
              marginBottom: 24,
              padding: "10px 18px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.15)",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 0.5,
            }}
          >
            {blog.category}
          </span>
          <div
            style={{
              display: "flex",
              fontSize: blog.title.length > 85 ? 46 : 54,
              lineHeight: 1.13,
              fontWeight: 800,
              letterSpacing: -1.5,
            }}
          >
            {blog.title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            opacity: 0.86,
          }}
        >
          <span>devcalc.in</span>
          <span>{blog.readingTime}</span>
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
    },
  );
}
