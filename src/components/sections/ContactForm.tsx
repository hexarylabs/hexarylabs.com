"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { cn } from "@/lib/cn";

const fieldClass = cn(
  "w-full border-[0.8px] border-grey-200 bg-base px-4 py-3 text-body",
  "placeholder:text-grey-500 transition-colors duration-300 ease-in-out",
  "focus:border-accent focus:outline-none",
);

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-small text-accent">
      {message}
    </p>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "inline-flex w-full items-center justify-center gap-4 bg-contrast-2 px-6 py-4",
        "font-display font-medium text-white transition-colors duration-300 ease-in-out",
        "hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto",
      )}
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

const initialState: ContactFormState = { success: false };

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const fieldErrors = state.fieldErrors ?? {};

  if (state.success) {
    return (
      <div className="border-[0.8px] border-grey-200 bg-base p-8 text-center sm:p-12">
        <p className="text-h4">Message sent.</p>
        <p className="mt-2 text-body text-grey-600">
          We&rsquo;ll get back to you within a business day.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="border-[0.8px] border-grey-200 bg-base p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-small text-grey-600">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            className={cn(fieldClass, fieldErrors.name && "border-accent")}
          />
          <FieldError id="name-error" message={fieldErrors.name} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-small text-grey-600">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className={cn(fieldClass, fieldErrors.email && "border-accent")}
          />
          <FieldError id="email-error" message={fieldErrors.email} />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="company" className="mb-2 block text-small text-grey-600">
          Company <span className="text-grey-500">(optional)</span>
        </label>
        <input id="company" name="company" type="text" className={fieldClass} />
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="mb-2 block text-small text-grey-600">
          What are you building?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className={cn(fieldClass, "resize-y", fieldErrors.message && "border-accent")}
        />
        <FieldError id="message-error" message={fieldErrors.message} />
      </div>

      {state.error && (
        <p role="alert" className="mt-6 border-l-2 border-accent pl-3 text-body text-contrast-2">
          {state.error}
        </p>
      )}

      <div className="mt-8">
        <SubmitButton />
      </div>
    </form>
  );
}
