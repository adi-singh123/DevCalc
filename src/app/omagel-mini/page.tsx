import Link from "next/link";
import type { Metadata } from "next";
import OmagelClient from "@/src/components/omagel-mini/OmagelClient";

const url = "https://www.devcalc.in/omagel-mini";
const title = "Omagel Mini â€“ Random Text & Video Chat for Adults";
const description = "Start a guest text or video conversation with another adult. Learn how matching, camera permissions, privacy, and reporting work on Omagel Mini by DevCalc.";
export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "DevCalc", type: "website", images: [{ url: "/omagel-mini/opengraph-image", width: 1200, height: 630, alt: "Omagel Mini â€” text and video chat by DevCalc" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/omagel-mini/opengraph-image"] },
};
const faqs = [
  { question: "Do I need an account?", answer: "No. A random guest token is saved in this browser tab to identify your chat requests. Keep personal details out of conversations; guest access does not guarantee anonymity." },
  { question: "Why am I waiting for a stranger?", answer: "A match needs two people in the same mode. Text users match with text users, and video users with video users. Shared interests are preferred among people already waiting, but are not guaranteed. Cancel Queue removes you from the queue." },
  { question: "Why is my video not connecting?", answer: "Allow camera and microphone access and use an HTTPS connection. Check that another app is not using your camera. Network restrictions can prevent a call even when your local preview works. You can leave and choose text chat instead." },
  { question: "What happens when I report someone?", answer: "A successful report ends the conversation and blocks that guest for your browser identity for up to 24 hours. A different browser identity can bypass that block. Reports are not monitored live, and this is not an emergency service." },
  { question: "Is this the original Omegle?", answer: "No. Omagel Mini is an independent DevCalc project inspired by the random-chat format. It is not affiliated with or endorsed by Omegle." },
];
export default function OmagelPage() {
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "WebPage", "@id": url + "#page", url, name: title, description, mainEntity: { "@id": url + "#app" } },
    { "@type": "WebApplication", "@id": url + "#app", name: "Omagel Mini", url, description, applicationCategory: "CommunicationApplication", operatingSystem: "Web browser", isAccessibleForFree: true, publisher: { "@type": "Organization", name: "DevCalc", url: "https://www.devcalc.in" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "DevCalc", item: "https://www.devcalc.in" }, { "@type": "ListItem", position: 2, name: "Omagel Mini", item: url }] },
    { "@type": "FAQPage", mainEntity: faqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ] };
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <div className="mx-auto max-w-4xl px-4 pt-8 text-center">
      <nav aria-label="Breadcrumb" className="mb-5 text-sm"><Link href="/" className="underline">DevCalc</Link> / Omagel Mini</nav>
      <h1 className="text-3xl font-extrabold sm:text-4xl">Omagel Mini â€“ Random Text &amp; Video Chat</h1>
      <p className="mx-auto mt-4 max-w-2xl text-stone-600">Meet another adult for a one-to-one conversation. Choose text or video, add a few interests if you like, and leave whenever you want. For people aged 18 and over.</p>
    </div>
    <OmagelClient />
    <article className="prose mx-auto max-w-4xl px-4 py-10 prose-headings:text-slate-900">
      <h2>How to use Omagel Mini</h2>
      <ol><li>Choose Text Chat for messages, or Video Chat for camera and audio.</li><li>Optionally enter up to five interests, separated by commas.</li><li>Confirm you are at least 18 and accept the rules. For video, grant camera and microphone permission.</li><li>Wait for someone in the same mode. Your interests help prioritize available matches.</li><li>Use Next to find another person, Leave to stop, or Report &amp; Block if someone breaks the rules.</li></ol>
      <h2>Text chat or video chat?</h2>
      <p>Text chat works without camera access and is a useful choice on slower connections. Messages travel through our chat server. Video chat uses your browserâ€™s WebRTC connection and includes microphone and camera controls. Both modes include a message box and a way to end the conversation.</p>
      <p>Matching depends on who is online. There are no simulated strangers or guaranteed instant matches. If nobody is waiting, try again later or switch modes.</p>
      <h2 id="rules">Chat rules and reporting</h2>
      <p>This service is for adults aged 18 and over. Nudity, sexual content, harassment, hateful abuse, threats, spam and scams are prohibited. Do not ask people for money, passwords, identifying documents or private images.</p>
      <p>Conversations are not monitored live. If you feel uncomfortable, leave immediately. Report &amp; Block records a report and prevents matching with that guest identity for up to 24 hours. It does not verify someoneâ€™s identity or permanently ban their device. For concerns that need a response, <Link href="/contact">contact DevCalc</Link>; avoid sending private conversation content unless necessary.</p>
      <h2>Privacy before you connect</h2>
      <p>No account is required, but this is not a promise of anonymity. Text and connection signals pass through our server. WebRTC may expose network information to the other participant, and another person can record what you share. Keep your address, financial details and contact information private.</p>
      <p>Chat messages wait in a delivery buffer until acknowledged or the session is cleaned up; the interface keeps only the latest 200 messages. Reports older than seven days are removed during cleanup, subject to storage limits. Guest blocks last up to 24 hours and depend on keeping the same browser identity. Read our <Link href="/privacy-policy#omagel-mini">privacy policy</Link> for details. This chat section does not load Google ads or analytics.</p>
      <h2>About the Omegle reference</h2>
      <p>Omagel Mini is an independent project by DevCalc, inspired by the random-chat format associated with <Link href="https://www.omegle.com/" rel="noopener noreferrer" target="_blank">Omegle</Link>. It is not the original Omegle website and is not affiliated with or endorsed by Omegle.</p>
      <h2>Frequently asked questions</h2>
      {faqs.map(faq => <section key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></section>)}
    </article>
  </main>;
}
