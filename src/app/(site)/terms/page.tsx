import type { Metadata } from "next";
import DatabaseSitePage, { getDatabaseSitePageMetadata } from "@/src/components/site-pages/DatabaseSitePage";

export const revalidate = 300;

export function generateMetadata(): Promise<Metadata> {
  return getDatabaseSitePageMetadata("terms");
}

export default function TermsPage() {
  return <DatabaseSitePage slug="terms" />;
}
