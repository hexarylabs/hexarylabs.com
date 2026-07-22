"use server";

import { Resend } from "resend";
import { site } from "@/content/site";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { success: false, error: "Name, email and message are required." };
  }
  if (!EMAIL_RE.test(email)) {
    return { success: false, error: "Enter a valid email address." };
  }

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
