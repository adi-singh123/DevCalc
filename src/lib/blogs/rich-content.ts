function headingText(html: string) {
  return html.replace(/<[^>]*>/g, "").replace(/&(?:amp|lt|gt|quot|nbsp|#39);/gi, (entity) => ({
    "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": "\"", "&nbsp;": " ", "&#39;": "'",
  })[entity.toLowerCase()] ?? entity).trim();
}

export function prepareRichArticleBody(html: string) {
  const headings: { id: string; title: string }[] = [];
  const used = new Map<string, number>();
  const bodyHtml = html.replace(/<h2(?:\s[^>]*)?>([\s\S]*?)<\/h2>/gi, (whole, inner: string) => {
    const title = headingText(inner);
    if (!title) return whole;
    const base = title.toLowerCase().normalize("NFKD").replace(/\p{M}/gu, "").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "") || "section";
    const count = (used.get(base) ?? 0) + 1;
    used.set(base, count);
    const id = count === 1 ? base : `${base}-${count}`;
    headings.push({ id, title });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { bodyHtml, headings };
}
