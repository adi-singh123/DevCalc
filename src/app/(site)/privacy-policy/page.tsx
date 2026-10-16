import type { Metadata } from "next";
import DatabaseSitePage, { getDatabaseSitePageMetadata } from "@/src/components/site-pages/DatabaseSitePage";

export const revalidate = 300;

export function generateMetadata(): Promise<Metadata> {
  return getDatabaseSitePageMetadata("privacy-policy");
}

export default function PrivacyPolicyPage() {
  return <DatabaseSitePage slug="privacy-policy" />;
}
