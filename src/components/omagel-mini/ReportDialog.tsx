"use client";
import { useEffect, useRef, useState } from "react";
import type { ReportCategory } from "@/src/lib/omagel/types";

export function ReportDialog({ isOpen, onClose, onSubmit }: { isOpen: boolean; onClose: () => void; onSubmit: (category: ReportCategory, details: string) => Promise<void> }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [category, setCategory] = useState<ReportCategory>("inappropriate");
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  useEffect(() => { if (isOpen) dialog.current?.showModal(); else dialog.current?.close(); }, [isOpen]);
  return <dialog ref={dialog} onCancel={event => { if (busy) event.preventDefault(); else onClose(); }} aria-labelledby="report-title" className="m-auto w-[min(95vw,440px)] rounded-2xl border p-6 text-slate-900 backdrop:bg-black/60">
    <h2 id="report-title" className="text-xl font-bold">Report &amp; Block Stranger</h2>
    <p className="my-3 text-sm">Submitting ends this conversation and blocks this guest for your browser identity for up to 24 hours. It does not create an IP ban. Reports are not monitored live.</p>
    <form className="space-y-4" onSubmit={async event => {
      event.preventDefault(); if (busy) return;
      setBusy(true); setError("");
      try { await onSubmit(category, details); setDetails(""); }
      catch (e) { setError(e instanceof Error ? e.message : "Report could not be saved. Please retry."); }
      finally { setBusy(false); }
    }}>
      <label className="block" htmlFor="report-category">Reason</label>
      <select autoFocus id="report-category" value={category} onChange={e => setCategory(e.target.value as ReportCategory)} className="w-full rounded border p-3">
        <option value="inappropriate">Inappropriate content</option><option value="harassment">Harassment</option><option value="spam">Spam or scam</option><option value="underage">Underage participant</option><option value="other">Other</option>
      </select>
      <label className="block" htmlFor="report-details">Details (optional, avoid personal information)</label>
      <textarea id="report-details" value={details} onChange={e => setDetails(e.target.value)} maxLength={500} rows={3} className="w-full rounded border p-3" />
      {error && <p role="alert" className="text-rose-700">{error}</p>}
      <div className="flex gap-3"><button type="button" disabled={busy} onClick={onClose} className="rounded border px-4 py-3">Cancel</button><button disabled={busy} className="rounded bg-rose-700 px-4 py-3 text-white">{busy ? "Submitting…" : "Submit & Block"}</button></div>
    </form>
  </dialog>;
}
