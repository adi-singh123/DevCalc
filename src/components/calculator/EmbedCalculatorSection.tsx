"use client";

import { useState } from "react";
import { Check, Code2, Copy } from "lucide-react";

type Props = { slug: string; name: string };

export default function EmbedCalculatorSection({ slug, name }: Props) {
  const [copied, setCopied] = useState(false);
  const src = `https://www.devcalc.in/embed/${slug}`;
  const code = `<iframe src="${src}" title="${name} by DevCalc" width="100%" height="780" style="border:1px solid #e2e8f0;border-radius:16px" loading="lazy"></iframe>`;

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-8">
      <div className="flex items-start gap-3">
        <span className="rounded-xl bg-blue-50 p-2.5 text-blue-700 dark:bg-blue-950 dark:text-blue-300"><Code2 size={20} /></span>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Embed this calculator</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Add the {name} to your website for free. Keep the attribution link in the widget intact.
          </p>
        </div>
      </div>
      <label className="mt-5 block text-sm font-semibold text-slate-800 dark:text-slate-200" htmlFor={`embed-${slug}`}>Iframe code</label>
      <textarea id={`embed-${slug}`} readOnly value={code} rows={4} className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 p-3 font-mono text-xs leading-5 text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300" />
      <button type="button" onClick={copyCode} className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[#26364a] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1b2939]">
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? "Copied" : "Copy embed code"}
      </button>
      <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">The embedded route is excluded from search indexing to prevent duplicate-content pages. The main calculator page remains the canonical source.</p>
    </section>
  );
}
