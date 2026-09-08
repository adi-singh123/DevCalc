import Link from "next/link";
import type { Metadata } from "next";
import "@/src/app/globals.css";

// Separate root layout: entering/leaving chat causes a full document navigation,
// so ads loaded on calculator pages cannot survive into a private conversation.
export const metadata: Metadata = {
  metadataBase: new URL("https://www.devcalc.in"),
  title: { default: "Omagel Mini | DevCalc", template: "%s | DevCalc" },
};

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="min-h-screen bg-stone-50 text-slate-900">
    <header className="border-b bg-white px-4 py-4"><nav aria-label="Main" className="mx-auto flex max-w-6xl flex-wrap items-center gap-6">
      <Link href="/" className="font-bold text-xl">DevCalc</Link>
      <Link href="/calculators" className="underline">Calculators</Link>
      <Link href="/privacy-policy" className="underline">Privacy</Link>
    </nav></header>
    {children}
    <footer className="border-t p-6 text-center text-sm">Omagel Mini by DevCalc · <Link className="underline" href="/contact">Contact</Link> · <Link className="underline" href="/terms">Terms</Link></footer>
  </body></html>;
}
