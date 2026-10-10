const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;

export function formatBlogDate(value: string): string {
  const trimmed = value.trim();
  const match = ISO_DATE.exec(trimmed);
  const date = match
    ? new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]), 12))
    : new Date(trimmed);

  if (Number.isNaN(date.getTime())) return trimmed;

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(date);
}
