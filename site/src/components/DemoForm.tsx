"use client";

import { FormEvent, useState } from "react";
import Script from "next/script";

const TURNSTILE_SITEKEY = "0x4AAAAAACyywom24zjoEvQ4";

type Status = "idle" | "submitting" | "success" | "error";

export default function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const turnstileToken = data.get("cf-turnstile-response");
    if (!turnstileToken) {
      setStatus("error");
      setErrorMessage("Please complete the verification challenge and try again.");
      return;
    }

    const payload = {
      site: "calqulis.com",
      source: "contact-page",
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      message: data.get("message"),
      turnstileToken,
    };

    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-emerald/30 bg-brand-emerald/10 p-8 text-center">
        <h3 className="text-xl font-semibold text-slate-900">Request received</h3>
        <p className="mt-3 text-slate-600">
          Thank you for your interest in Calqulis. A member of our team will follow up with you
          shortly to schedule your demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            autoComplete="name"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-700">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan"
          placeholder="Company name"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
          What are you hoping to learn from Calqulis?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan"
          placeholder="Tell us a bit about your team and what you would like to see in a demo."
        />
      </div>

      <div className="cf-turnstile" data-sitekey={TURNSTILE_SITEKEY} data-theme="light" />

      {status === "error" && (
        <p className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-brand-cyan px-7 py-3.5 text-sm font-semibold text-brand-indigo-deep shadow-lg shadow-brand-cyan/25 transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-cyan/40 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none disabled:hover:translate-y-0 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Request a Demo"}
      </button>
    </form>
  );
}
