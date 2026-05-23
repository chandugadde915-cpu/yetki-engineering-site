import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const DEFAULT_TO_EMAIL = "aarifmohammadsyed@gmail.com";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, service, details, message } = req.body || {};

    const result = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Yetki Engineering <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL,
      subject: `New Quote Request - ${service || "Website"}`,
      reply_to: email,
      html: `
        <h2>New Quote Request</h2>
        <p><b>Name:</b> ${name || "Not provided"}</p>
        <p><b>Email:</b> ${email || "Not provided"}</p>
        <p><b>Service:</b> ${service || "Not provided"}</p>
        <p><b>Details:</b> ${details || message || "Not provided"}</p>
      `,
    });

    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("CONTACT_API_ERROR:", error);
    return res.status(500).json({
      error: "Failed to send email",
      details: error.message,
    });
  }
}
