// Archived draft: do not restore as page.tsx until the chat audit is resolved.
import { Metadata } from "next";
import OmagelClient from "@/src/components/omagel-mini/OmagelClient";

export const metadata: Metadata = {
  title: "Omagel Mini – Random Stranger Text & Video Chat | DevCalc",
  description:
    "Meet new people with Omagel Mini. Start instant random text or WebRTC video chats with strangers safely and anonymously.",
  keywords: [
    "Omagel Mini",
    "random video chat",
    "random text chat",
    "stranger chat",
    "talk to strangers",
    "WebRTC video chat",
    "anonymous chat online",
  ],
  openGraph: {
    title: "Omagel Mini – Random Stranger Text & Video Chat",
    description: "Start instant random text or WebRTC video chats with strangers safely and anonymously.",
    url: "https://devcalc.in/omagel-mini",
    siteName: "DevCalc",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omagel Mini – Random Stranger Text & Video Chat",
    description: "Start instant random text or WebRTC video chats with strangers safely and anonymously.",
  },
};

export default function OmagelPage() {
  return <OmagelClient />;
}
