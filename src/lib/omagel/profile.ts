export const genders = ["Prefer not to say", "Woman", "Man", "Non-binary"] as const;
export type GuestProfile = { displayName: string; gender: typeof genders[number] };
export const defaultProfile: GuestProfile = { displayName: "Stranger", gender: "Prefer not to say" };

export function parseProfile(value: unknown): GuestProfile {
  if (value === undefined) return { ...defaultProfile };
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid chat profile.");
  const input = value as Record<string, unknown>;
  if (typeof input.displayName !== "string" || input.displayName.length > 30 || /[<>\p{Cc}\p{Cf}]/u.test(input.displayName)) throw new Error("Use a nickname of up to 30 characters without markup or control characters.");
  if (!genders.includes(input.gender as GuestProfile["gender"])) throw new Error("Choose a gender option or Prefer not to say.");
  return { displayName: input.displayName.trim().normalize("NFC") || "Stranger", gender: input.gender as GuestProfile["gender"] };
}
