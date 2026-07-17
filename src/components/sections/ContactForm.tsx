"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

/**
 * ⚠️ NO BACKEND. No endpoint was specified, so rather than fake a submission
 * this composes a pre-filled email in the user's mail client. It genuinely
 * works with zero infrastructure.
 *
 * To wire up properly: replace `handleSubmit` with a Server Action that
 * validates server-side (never trust these values) and posts to your CRM/inbox.
 */
const field =
  "w-full border-[0.8px] border-grey-300 bg-base px-4 py-3 text-body text-contrast placeholder:text-grey-600 transition-colors duration-300 focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");

    const body = [
      `From: ${name}`,
      company && `Company: ${company}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `New enquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-body font-medium">
            Name <span className="text-accent">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-body font-medium">
            Company
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className={field}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-body font-medium">
          What are you building? <span className="text-accent">*</span>
        </label>
        <textarea id="message" name="message" required rows={6} className={field} />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit">Send</Button>
        {sent && (
          <p role="status" className="text-body text-grey-600">
            Opening your email client…
          </p>
        )}
      </div>

      <p className="text-small text-grey-600">
        This opens a pre-filled email in your mail app. Prefer to write directly?{" "}
        <a
          href={`mailto:${site.email}`}
          className="underline underline-offset-4 transition-colors duration-300 hover:text-accent"
        >
          {site.email}
        </a>
      </p>
    </form>
  );
}
