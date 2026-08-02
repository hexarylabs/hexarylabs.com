"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { Button } from "@/components/ui/Button";
import { ChevronDownIcon } from "@/components/ui/ChevronDownIcon";
import { dialCodes, DEFAULT_DIAL_COUNTRY } from "@/lib/dialCodes";
import { cn } from "@/lib/cn";

const fieldBase = cn(
  "bg-base px-4 py-3 text-body",
  "placeholder:text-grey-500 transition-colors duration-300 ease-in-out",
  "focus:outline-none",
);

const fieldClass = cn(
  fieldBase,
  "w-full border-[0.8px] border-grey-200 focus:border-accent",
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
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className={cn(
        "w-full justify-center sm:w-auto",
        "disabled:cursor-not-allowed disabled:opacity-60",
      )}
    >
      {pending ? "Sending…" : "Send message"}
    </Button>
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
          <label htmlFor="firstName" className="mb-2 block text-small text-grey-600">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            aria-invalid={!!fieldErrors.firstName}
            aria-describedby={fieldErrors.firstName ? "firstName-error" : undefined}
            className={cn(fieldClass, fieldErrors.firstName && "border-accent")}
          />
          <FieldError id="firstName-error" message={fieldErrors.firstName} />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-2 block text-small text-grey-600">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            aria-invalid={!!fieldErrors.lastName}
            aria-describedby={fieldErrors.lastName ? "lastName-error" : undefined}
            className={cn(fieldClass, fieldErrors.lastName && "border-accent")}
          />
          <FieldError id="lastName-error" message={fieldErrors.lastName} />
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="companyEmail" className="mb-2 block text-small text-grey-600">
            Company Email
          </label>
          <input
            id="companyEmail"
            name="companyEmail"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!fieldErrors.companyEmail}
            aria-describedby={fieldErrors.companyEmail ? "companyEmail-error" : undefined}
            className={cn(fieldClass, fieldErrors.companyEmail && "border-accent")}
          />
          <FieldError id="companyEmail-error" message={fieldErrors.companyEmail} />
        </div>
        <div>
          <label htmlFor="companyName" className="mb-2 block text-small text-grey-600">
            Company Name
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            autoComplete="organization"
            required
            aria-invalid={!!fieldErrors.companyName}
            aria-describedby={fieldErrors.companyName ? "companyName-error" : undefined}
            className={cn(fieldClass, fieldErrors.companyName && "border-accent")}
          />
          <FieldError id="companyName-error" message={fieldErrors.companyName} />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="phone" className="mb-2 block text-small text-grey-600">
          Phone Number <span className="text-grey-500">(optional)</span>
        </label>
        <div
          className={cn(
            "flex border-[0.8px] border-grey-200 bg-base",
            "transition-colors duration-300 ease-in-out focus-within:border-accent",
          )}
        >
          <div className="relative shrink-0">
            <select
              id="phoneCountry"
              name="phoneCountry"
              defaultValue={DEFAULT_DIAL_COUNTRY}
              aria-label="Country dial code"
              className={cn(
                fieldBase,
                "w-[9.5rem] cursor-pointer appearance-none truncate pr-10 sm:w-[13.5rem]",
                "border-r-[0.8px] border-grey-200",
              )}
            >
              {dialCodes.map((country) => (
                <option key={country.name} value={country.name}>
                  {`${country.name} ${country.dial}`}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-4 size-3.5 -translate-y-1/2 text-grey-500" />
          </div>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel-national"
            className={cn(fieldBase, "w-full min-w-0 flex-1")}
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="mb-2 block text-small text-grey-600">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="What you're building, the core problem, any key constraints, and how did you hear about us?"
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
