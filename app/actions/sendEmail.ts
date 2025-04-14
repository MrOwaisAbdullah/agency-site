"use server";

import {
  TransactionalEmailsApi,
  TransactionalEmailsApiApiKeys,
} from "@getbrevo/brevo";
import { z } from "zod";

// Define the schema for validation (same as client-side)
const FormSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject is required").max(80, "Write under 80 Characters!"),
  message: z.string().min(3, "Message is required"),
});

// Configure Brevo API client
const apiInstance = new TransactionalEmailsApi();
apiInstance.setApiKey(
  TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY || ""
);

export async function sendContactFormEmail(formData: FormData) {
  // Parse and validate form data
  let data;
  try {
    data = FormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });
  } catch (error) {
    return { success: false, error: "Invalid form data" };
  }

  const { name, email, subject, message } = data;

  // Send email to agency
  const sendSmtpEmail = {
    sender: { name: "Burraq Digits", email: "mr.fantastic0567@gmail.com" },
    to: [{ email: "mrowaisabdullah@gmail.com" }],
    subject: `New Contact Form Submission: ${subject}`,
    htmlContent: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  // Optionally send confirmation email to user
  const confirmationEmail = {
    sender: { name: "Burraq Digits", email: "mr.fantastic0567@gmail.com" },
    to: [{ email }],
    subject: "Thank You for Contacting Burraq Digits",
    htmlContent: `
      <p>Dear ${name},</p>
      <p>Thank you for reaching out to us! We have received your message and will get back to you soon.</p>
      <p><strong>Your Message:</strong> ${message}</p>
      <p>Best regards,<br>Burraq Digits Team</p>
    `,
  };

  try {
    // Send both emails
    await Promise.all([
      apiInstance.sendTransacEmail(sendSmtpEmail),
      apiInstance.sendTransacEmail(confirmationEmail),
    ]);
    return { success: true };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email";
    return { success: false, error: errorMessage };
  }
}
