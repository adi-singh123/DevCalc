"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function AgeGateModal({ onAccept, onClose }: { onAccept: () => void; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { dialog.current?.showModal(); }, []);
  return <dialog ref={dialog} onCancel={onClose} aria-labelledby="age-title" className="m-auto max-w-md rounded-2xl border p-6 text-slate-900 backdrop:bg-black/60">
    <h2 id="age-title" className="text-xl font-bold">Adults only â€” 18 and over</h2>
    <p className="my-4">You must be at least 18 to use Omagel Mini. This is a self-declaration, not identity verification. Conversations are not monitored live.</p>
    <p className="my-4">Do not share private information. Nudity, sexual content, harassment, scams and spam are prohibited. Leave and report anyone who breaks these rules.</p>
    <p className="my-4 text-sm">By continuing, you accept the chat rules below, <Link className="underline" href="/terms">terms</Link> and <Link className="underline" href="/privacy-policy">privacy policy</Link>.</p>
    <div className="flex flex-wrap gap-3">
      <button autoFocus onClick={onClose} className="rounded-lg border px-4 py-3">Cancel</button>
      <button onClick={onAccept} className="rounded-lg bg-slate-800 px-4 py-3 text-white">I am 18+ and agree</button>
    </div>
  </dialog>;
}
