"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

type FormValues = {
  name: string;
  email: string;
  company: string;
  website: string;
  partnership: string;
  budget: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  website: "",
  partnership: "",
  budget: "",
  message: "",
};

const fieldClass =
  "mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-stone-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white";

export default function AdvertiseForm() {
  const [form, setForm] = useState<FormValues>(initialValues);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function updateField(name: keyof FormValues, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const campaignDetails = [
      `Company: ${form.company.trim()}`,
      `Website: ${form.website.trim() || "Not provided"}`,
      `Partnership type: ${form.partnership}`,
      `Indicative budget: ${form.budget || "Not specified"}`,
      "",
      "Campaign details:",
      form.message.trim(),
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          category: "Advertising & Brand Partnership",
          message: campaignDetails,
        }),
      });

      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(data.error || "We could not send your enquiry.");
      }

      setForm(initialValues);
      setStatus("success");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not send your enquiry. Please try again.",
      );
      setStatus("error");
    }
  }

  return (
    <div className="grid overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-lg lg:grid-cols-[1fr_320px] dark:border-slate-700 dark:bg-slate-900">
      <form onSubmit={handleSubmit} className="p-6 sm:p-9">
        {status === "success" && (
          <div role="status" className="mb-7 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200">
            <CheckCircle2 className="mt-0.5 shrink-0" size={20} aria-hidden="true" />
            <div>
              <p className="font-bold">Your enquiry has been sent.</p>
              <p className="mt-1 text-sm">Thank you. We will review the proposal and reply by email.</p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div role="alert" className="mb-7 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">
            {error} You can also email us directly at devcalc35052@gmail.com.
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            Your name <span aria-hidden="true" className="text-red-600">*</span>
            <input
              required
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              className={fieldClass}
              placeholder="Your full name"
            />
          </label>
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            Business email <span aria-hidden="true" className="text-red-600">*</span>
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              className={fieldClass}
              placeholder="you@company.com"
            />
          </label>
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            Company or brand <span aria-hidden="true" className="text-red-600">*</span>
            <input
              required
              name="company"
              autoComplete="organization"
              value={form.company}
              onChange={(event) => updateField("company", event.target.value)}
              className={fieldClass}
              placeholder="Brand name"
            />
          </label>
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            Brand website
            <input
              type="url"
              name="website"
              autoComplete="url"
              value={form.website}
              onChange={(event) => updateField("website", event.target.value)}
              className={fieldClass}
              placeholder="https://example.com"
            />
          </label>
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            Partnership type <span aria-hidden="true" className="text-red-600">*</span>
            <select
              required
              name="partnership"
              value={form.partnership}
              onChange={(event) => updateField("partnership", event.target.value)}
              className={fieldClass}
            >
              <option value="">Select an option</option>
              <option>Calculator sponsorship</option>
              <option>Sponsored educational content</option>
              <option>Display campaign</option>
              <option>Custom partnership</option>
            </select>
          </label>
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            Indicative budget
            <select
              name="budget"
              value={form.budget}
              onChange={(event) => updateField("budget", event.target.value)}
              className={fieldClass}
            >
              <option value="">Prefer not to specify</option>
              <option>Under ₹10,000</option>
              <option>₹10,000–₹25,000</option>
              <option>₹25,000–₹50,000</option>
              <option>₹50,000+</option>
              <option>Product or value exchange</option>
            </select>
          </label>
        </div>

        <label className="mt-5 block text-sm font-semibold text-slate-700 dark:text-slate-200">
          Campaign details <span aria-hidden="true" className="text-red-600">*</span>
          <textarea
            required
            minLength={20}
            rows={6}
            name="message"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className={`${fieldClass} resize-y`}
            placeholder="Tell us about the product, intended audience, preferred pages or category, campaign dates, and desired outcome."
          />
        </label>

        <p className="mt-3 text-xs leading-5 text-stone-500 dark:text-slate-400">
          By submitting, you agree that DevCalc may use these details to evaluate
          and respond to your enquiry. Submitting does not guarantee acceptance.
        </p>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1f3a5c] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#294d77] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          <Send size={17} aria-hidden="true" />
          {status === "sending" ? "Sending enquiry…" : "Send partnership enquiry"}
        </button>
      </form>

      <aside className="border-t border-stone-200 bg-[#faf7f0] p-6 sm:p-8 lg:border-l lg:border-t-0 dark:border-slate-700 dark:bg-slate-950">
        <Mail className="text-blue-700 dark:text-blue-400" size={28} aria-hidden="true" />
        <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">Prefer email?</h3>
        <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-slate-300">
          Send your proposal directly. Include your brand, website, campaign idea,
          preferred dates, and an indicative budget.
        </p>
        <a
          href="mailto:devcalc35052@gmail.com?subject=Advertising%20enquiry%20for%20DevCalc"
          className="mt-5 block break-all font-semibold text-blue-700 hover:underline dark:text-blue-400"
        >
          devcalc35052@gmail.com
        </a>
        <div className="mt-8 border-t border-stone-200 pt-6 dark:border-slate-700">
          <p className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-slate-400">Helpful to include</p>
          <ul className="mt-4 space-y-3 text-sm text-stone-600 dark:text-slate-300">
            <li>Campaign objective and audience</li>
            <li>Preferred calculator category</li>
            <li>Creative format or content brief</li>
            <li>Timeline and indicative budget</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
