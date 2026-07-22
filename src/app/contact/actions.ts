"use server";

import { z } from "zod";
import { Resend } from "resend";
import { site } from "@/content/site";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  email: z.string().trim().min(1, "Email is required.").email("Enter a valid email address."),
  company: z.string().trim(),
  message: z.string().trim().min(1, "Message is required."),
});

export type ContactFormState = {
  success: boolean;
  error?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

function fromFormData(formData: FormData) {
  return {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
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
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      },
    };
  }

  const { name, email, company, message } = parsed.data;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Hexary Labs <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? site.email,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, company && `Company: ${company}`, "", message]
        .filter(Boolean)
        .join("\n"),
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
