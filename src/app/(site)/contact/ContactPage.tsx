"use client";

import Link from "next/link";
import { useState } from "react";

// ── Types ────────────────────────────────────────────────────────────────────
type Category = "general" | "request" | "bug" | "";
type Status   = "idle" | "sending" | "success" | "error";

interface FormState {
  name:     string;
  email:    string;
  category: Category;
  message:  string;
}

// ── Category config ──────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    value: "general" as Category,
    label: "General Enquiry",
    icon:  "💬",
    desc:  "Questions about DevCalc or its features",
  },
  {
    value: "request" as Category,
    label: "Calculator Request",
    icon:  "🧮",
    desc:  "Suggest a new calculator to add",
  },
  {
    value: "bug" as Category,
    label: "Bug Report",
    icon:  "🐛",
    desc:  "Report a wrong result or broken feature",
  },
];

// ── Component ────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name:     "",
    email:    "",
    category: "",
    message:  "",
  });

  const [status,  setStatus]  = useState<Status>("idle");
  const [errors,  setErrors]  = useState<Partial<Record<keyof FormState, string>>>({});
  const [apiError, setApiError] = useState("");

  // ── Validation ──────────────────────────────────────────────────────────────
  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim())
      e.name = "Please enter your name.";

    if (!form.email.trim())
      e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";

    if (!form.category)
      e.category = "Please choose a category.";

    if (!form.message.trim())
      e.message = "Please write a message.";
    else if (form.message.trim().length < 20)
      e.message = "Message must be at least 20 characters.";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // ── Submit → calls /api/contact ─────────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    setApiError("");

    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          name:     form.name.trim(),
          email:    form.email.trim(),
          category: CATEGORIES.find((c) => c.value === form.category)?.label ?? form.category,
          message:  form.message.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setApiError(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", category: "", message: "" });
      setErrors({});

    } catch {
      setApiError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  // ── Field change handler ────────────────────────────────────────────────────
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">

      {/* Hero */}
      <section className="text-center">
        <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
          Get in touch
        </span>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          How can we help?
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-slate-500">
          Have a question, found a bug, or want a new calculator? Drop us a
          message — we read every one and reply within 24–48 hours.
        </p>
      </section>

      {/* Main grid */}
      <section className="mt-14 grid gap-10 lg:grid-cols-[1fr_340px]">

        {/* ── Contact Form ── */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold">Send us a message</h2>
          <p className="mt-1 text-sm text-slate-500">All fields are required.</p>

          {/* ── Success banner ── */}
          {status === "success" && (
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 px-5 py-4">
              <span className="text-xl">✅</span>
              <div>
                <p className="font-semibold text-green-800">Message sent!</p>
                <p className="mt-0.5 text-sm text-green-700">
                  Thanks for reaching out. Check your inbox — we&apos;ve sent you a
                  confirmation. We&apos;ll reply within 24–48 hours.
                </p>
              </div>
            </div>
          )}

          {/* ── Error banner ── */}
          {status === "error" && (
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4">
              <span className="text-xl">❌</span>
              <div>
                <p className="font-semibold text-red-800">Something went wrong.</p>
                <p className="mt-0.5 text-sm text-red-700">
                  {apiError || "Please try again, or email us directly at "}
                  {!apiError && (
                    <a
                      href="mailto:devcalc35052@gmail.com"
                      className="underline"
                    >
                     devcalc35052@gmail.com
                    </a>
                  )}
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">

            {/* Name + Email */}
            <div className="grid gap-5 sm:grid-cols-2">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="cyz"
                  value={form.name}
                  onChange={handleChange}
                  className={`mt-1.5 w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                    ${errors.name
                      ? "border-red-400 bg-red-50"
                      : "border-slate-200 bg-slate-50"
                    }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={`mt-1.5 w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                    ${errors.email
                      ? "border-red-400 bg-red-50"
                      : "border-slate-200 bg-slate-50"
                    }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Category selector */}
            <div>
              <p className="text-sm font-medium text-slate-700">
                What&apos;s this about?
              </p>
              {errors.category && (
                <p className="mt-1 text-xs text-red-500">{errors.category}</p>
              )}
              <div className="mt-2 grid gap-3 sm:grid-cols-3">
                {CATEGORIES.map((cat) => (
                  <label
                    key={cat.value}
                    className={`flex cursor-pointer flex-col gap-1 rounded-2xl border p-4 transition
                      ${form.category === cat.value
                        ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500"
                        : "border-slate-200 bg-slate-50 hover:border-slate-300"
                      }`}
                  >
                    <input
                      type="radio"
                      name="category"
                      value={cat.value}
                      checked={form.category === cat.value}
                      onChange={() => {
                        setForm((prev) => ({ ...prev, category: cat.value }));
                        setErrors((prev) => ({ ...prev, category: undefined }));
                      }}
                      className="sr-only"
                    />
                    <span className="text-xl">{cat.icon}</span>
                    <span className="text-sm font-semibold text-slate-800">
                      {cat.label}
                    </span>
                    <span className="text-xs text-slate-500">{cat.desc}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Describe your question, suggestion, or bug in detail…"
                value={form.message}
                onChange={handleChange}
                className={`mt-1.5 w-full resize-none rounded-xl border px-4 py-2.5 text-sm outline-none transition
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                  ${errors.message
                    ? "border-red-400 bg-red-50"
                    : "border-slate-200 bg-slate-50"
                  }`}
              />
              <div className="mt-1 flex items-center justify-between">
                {errors.message
                  ? <p className="text-xs text-red-500">{errors.message}</p>
                  : <span />
                }
                <p className={`text-xs ${form.message.length >= 20 ? "text-green-500" : "text-slate-400"}`}>
                  {form.message.length} / 20 min
                </p>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle
                      className="opacity-25"
                      cx="12" cy="12" r="10"
                      stroke="currentColor" strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Sending…
                </>
              ) : (
                "Send Message →"
              )}
            </button>

          </form>
        </div>

        {/* ── Right sidebar ── */}
        <aside className="space-y-6">

          {/* Direct email */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-slate-800">Prefer email?</h2>
            <p className="mt-2 text-sm text-slate-500">
              Write to us directly and we&apos;ll reply within 24–48 hours.
            </p>
            <a
              href="mailto:devcalc35052@gmail.com"
              className="mt-4 flex items-center gap-2 break-all rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              <span className="text-lg shrink-0">✉️</span>
              devcalc35052@gmail.com
            </a>
          </div>

          {/* Response times */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-slate-800">Response time</h2>
            <div className="mt-4 space-y-3">
              {[
                { label: "General questions",    time: "Within 24 hrs" },
                { label: "Bug reports",          time: "Within 48 hrs" },
                { label: "Calculator requests",  time: "Within 72 hrs" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-slate-500">{item.label}</span>
                  <span className="font-medium text-slate-800">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Helpful links */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-slate-800">Helpful links</h2>
            <div className="mt-4 space-y-2">
              {[
                { href: "/about",          label: "About DevCalc"  },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms",          label: "Terms of Use"   },
                { href: "/calculators",    label: "All Calculators"},
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50"
                >
                  {link.label}
                  <span className="text-slate-400">→</span>
                </Link>
              ))}
            </div>
          </div>

        </aside>
      </section>
    </main>
  );
}