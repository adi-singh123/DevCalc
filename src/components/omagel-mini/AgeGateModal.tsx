"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { defaultProfile, genders, parseProfile, type GuestProfile } from "@/src/lib/omagel/profile";

export function AgeGateModal({ onAccept, onClose, initialProfile = defaultProfile }: { onAccept: (profile: GuestProfile) => void; onClose: () => void; initialProfile?: GuestProfile }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [name, setName] = useState(initialProfile.displayName === "Stranger" ? "" : initialProfile.displayName);
  const [gender, setGender] = useState<GuestProfile["gender"]>(initialProfile.gender);
  const [error, setError] = useState("");
  useEffect(() => { dialog.current?.showModal(); }, []);
  return <dialog ref={dialog} onCancel={onClose} aria-labelledby="age-title" className="m-auto max-w-md rounded-2xl border p-6 text-slate-900 backdrop:bg-black/60">
    <h2 id="age-title" className="text-xl font-bold">Before you chat</h2>
    <form onSubmit={event => {
      event.preventDefault();
      try { onAccept(parseProfile({ displayName: name, gender })); }
      catch (e) { setError(e instanceof Error ? e.message : "Please check your profile."); }
    }}>
    <p id="profile-sharing" className="my-4 text-sm">Your nickname and selected gender will be shown to the person you match with. Use a nickname, not your full name. Both fields are optional and self-reported.</p>
    <label htmlFor="chat-nickname" className="block font-medium">Nickname (optional)</label>
    <input autoFocus id="chat-nickname" value={name} onChange={e => setName(e.target.value)} maxLength={30} autoComplete="off" aria-describedby="profile-sharing" placeholder="Shown as Stranger if blank" className="my-2 w-full rounded-lg border p-3" />
    <label htmlFor="chat-gender" className="block font-medium">Gender (optional)</label>
    <select id="chat-gender" value={gender} onChange={e => setGender(e.target.value as GuestProfile["gender"])} className="my-2 w-full rounded-lg border p-3">
      {genders.map(option => <option key={option}>{option}</option>)}
    </select>
    {error && <p role="alert" className="text-rose-700">{error}</p>}
    <p className="my-4">You must be at least 18 to use Omagel Mini. This is a self-declaration, not identity verification. Conversations are not monitored live.</p>
    <p className="my-4">Do not share private information. Nudity, sexual content, harassment, scams and spam are prohibited. Leave and report anyone who breaks these rules.</p>
    <p className="my-4 text-sm">By continuing, you accept the chat rules below, <Link className="underline" href="/terms">terms</Link> and <Link className="underline" href="/privacy-policy">privacy policy</Link>.</p>
    <div className="flex flex-wrap gap-3">
      <button type="button" onClick={onClose} className="rounded-lg border px-4 py-3">Cancel</button>
      <button type="submit" className="rounded-lg bg-slate-800 px-4 py-3 text-white">I am 18+ and agree</button>
    </div>
    </form>
  </dialog>;
}
