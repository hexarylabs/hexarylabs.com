"use server";

import { z } from "zod";
import { Resend } from "resend";
import { site } from "@/content/site";
import { dialCodes } from "@/lib/dialCodes";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required."),
  lastName: z.string().trim().min(1, "Last name is required."),
  companyEmail: z
    .string()
    .trim()
    .min(1, "Company email is required.")
    .email("Enter a valid email address."),
  companyName: z.string().trim().min(1, "Company name is required."),
  phoneCountry: z.string().trim(),
  phone: z.string().trim(),
  message: z.string().trim().min(1, "Project details are required."),
});

export type ContactFormState = {
  success: boolean;
  error?: string;
  fieldErrors?: Partial<
    Record<"firstName" | "lastName" | "companyEmail" | "companyName" | "message", string>
  >;
};

function fromFormData(formData: FormData) {
  return {
    firstName: String(formData.get("firstName") ?? ""),
    lastName: String(formData.get("lastName") ?? ""),
    companyEmail: String(formData.get("companyEmail") ?? ""),
    companyName: String(formData.get("companyName") ?? ""),
    phoneCountry: String(formData.get("phoneCountry") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    message: String(formData.get("message") ?? ""),
  };
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse(fromFormData(formData));

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      success: false,
      fieldErrors: {
        firstName: fieldErrors.firstName?.[0],
        lastName: fieldErrors.lastName?.[0],
        companyEmail: fieldErrors.companyEmail?.[0],
        companyName: fieldErrors.companyName?.[0],
        message: fieldErrors.message?.[0],
      },
    };
  }

  const { firstName, lastName, companyEmail, companyName, phoneCountry, phone, message } =
    parsed.data;

  const fullName = `${firstName} ${lastName}`;
  const dial = dialCodes.find((c) => c.name === phoneCountry)?.dial;
  const phoneLine = phone
    ? `Phone: ${dial ? `${dial} ` : ""}${phone}${dial ? ` (${phoneCountry})` : ""}`
    : "";

  const subject = `New project inquiry from ${fullName} at ${companyName}`;
  const details = [
    `First name: ${firstName}`,
    `Last name: ${lastName}`,
    `Company email: ${companyEmail}`,
    `Company name: ${companyName}`,
    phoneLine,
  ].filter(Boolean);
  const text = `${details.join("\n")}\n\n${message}`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Hexary Labs <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? site.email,
      replyTo: companyEmail,
      subject,
      text,
    });
    if (error) throw error;
  } catch {
    return {
      success: false,
      error: `Something went wrong sending your message. Email us directly at ${site.email} instead.`,
    };
  }

  return { success: true };
}
