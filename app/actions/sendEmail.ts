"use server";

import {
  TransactionalEmailsApi,
  TransactionalEmailsApiApiKeys,
} from "@getbrevo/brevo";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(80, "Write under 80 Characters!"),
  message: z.string().min(1, "Message is required"),
});

const apiInstance = new TransactionalEmailsApi();
apiInstance.setApiKey(
  TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY || ""
);

export async function sendContactFormEmail(formData: FormData) {
  if (!process.env.BREVO_API_KEY) {
    console.error("BREVO_API_KEY is not set");
    return { success: false, error: "BREVO_API_KEY is not set" };
  }

  // console.log('BREVO_API_KEY:', process.env.BREVO_API_KEY);

  let data;
  try {
    data = FormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });
  } catch (error) {
    console.error("Validation error:", error);
    return { success: false, error: "Invalid form data" };
  }

  const { name, email, subject, message } = data;

  const sendSmtpEmail = {
    sender: { name: "Burraq Digits", email: "info@burraqdigits.com" },
    to: [{ email: "info@burraqdigits.com" }],
    subject: `New Contact Form Submission: ${subject}`,
    htmlContent: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  const confirmationEmail = {
    sender: { name: "Burraq Digits", email: "info@burraqdigits.com" },
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
    const [agencyResponse, confirmationResponse] = await Promise.all([
      apiInstance.sendTransacEmail(sendSmtpEmail),
      apiInstance.sendTransacEmail(confirmationEmail),
    ]);
    console.log(
      "Agency email response:",
      JSON.stringify(agencyResponse, null, 2)
    );
    console.log(
      "Confirmation email response:",
      JSON.stringify(confirmationResponse, null, 2)
    );
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    let errorMessage = "Failed to send email";
    if (error instanceof Error) {
      errorMessage = error.message;
      if ("response" in error && error.response) {
        console.error("Response body:", error.response);
        errorMessage += `: ${JSON.stringify(error.response)}`;
      }
    }
    return { success: false, error: errorMessage };
  }
}
