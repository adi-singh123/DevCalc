import { defaultProfile, type GuestProfile } from "@/src/lib/omagel/profile";

export function PeerProfile({ profile = defaultProfile }: { profile?: GuestProfile }) {
  return <span data-testid="peer-profile" className="inline-flex max-w-full flex-wrap items-center gap-x-2 break-words">
    <strong className="break-all">{profile.displayName}</strong>
    <span className="text-xs opacity-80">{profile.gender}</span>
  </span>;
}
