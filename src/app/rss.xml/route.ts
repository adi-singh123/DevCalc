import { blogs } from "@/src/data/blogs/blog";
import { siteConfig } from "@/src/config/site";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRfc822Date(value: string): string {
  const isoMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getUTCDay()];
    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][Number(month) - 1];
    return `${weekday}, ${day} ${monthName} ${year} 00:00:00 +0530`;
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime())
    ? new Date(0).toUTCString()
    : parsed.toUTCString();
}

export function GET() {
  const feedUrl = `${siteConfig.url}/rss.xml`;
  const sortedBlogs = [...blogs]
    .sort(
      (left, right) =>
        Date.parse(right.publishedDate) - Date.parse(left.publishedDate),
    )
    .slice(0, 50);
  const latestDate = sortedBlogs[0]?.lastVerified
    ?? sortedBlogs[0]?.publishedDate
    ?? "1970-01-01";

  const items = sortedBlogs.map((blog) => {
    const url = `${siteConfig.url}/blog/${blog.slug}`;
    const image = blog.image
      ? `\n      <enclosure url="${escapeXml(new URL(blog.image, siteConfig.url).toString())}" type="image/${blog.image.endsWith(".png") ? "png" : "jpeg"}" />`
      : "";

    return `
    <item>
      <title>${escapeXml(blog.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(blog.description)}</description>
      <pubDate>${toRfc822Date(blog.publishedDate)}</pubDate>
      <dc:creator>${escapeXml(blog.author)}</dc:creator>
      <category>${escapeXml(blog.category)}</category>${image}
    </item>`;
  }).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(siteConfig.name)} Blog</title>
    <link>${escapeXml(`${siteConfig.url}/blog`)}</link>
    <description>${escapeXml(`${siteConfig.description} Read practical guides, formulas and verified public updates.`)}</description>
    <language>en-IN</language>
    <lastBuildDate>${toRfc822Date(latestDate)}</lastBuildDate>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
    <ttl>60</ttl>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
