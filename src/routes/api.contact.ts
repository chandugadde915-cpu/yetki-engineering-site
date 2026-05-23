import { createFileRoute } from "@tanstack/react-router";

type ContactLead = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
  page: string;
};

const DEFAULT_TO_EMAIL = "aarifmohammadsyed@gmail.com";
const DEFAULT_FROM_EMAIL = "Yetki Engineering <info@yetkiengineering.com>";
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const MAX_FIELD_LENGTH = 2000;

type RuntimeGlobal = typeof globalThis & {
  process?: {
    env?: Record<string, string | undefined>;
  };
};

function jsonResponse(body: unknown, status = 200) {
  return Response.json(body, { status });
}

function env(name: string) {
  return (globalThis as RuntimeGlobal).process?.env?.[name];
}

function toText(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function parseLead(body: Record<string, unknown>): ContactLead & { website: string } {
  return {
    name: toText(body.name, 160),
    company: toText(body.company, 160),
    email: toText(body.email, 254),
    phone: toText(body.phone, 80),
    service: toText(body.service, 160),
    projectDetails: toText(body.projectDetails),
    page: toText(body.page, 500),
    website: toText(body.website, 160),
  };
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function emailText(lead: ContactLead) {
  return [
    "New website lead from Yetki Engineering",
    "",
    `Name: ${lead.name}`,
    `Company: ${lead.company || "Not provided"}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone || "Not provided"}`,
    `Service: ${lead.service || "Not selected"}`,
    `Page: ${lead.page || "Not captured"}`,
    "",
    "Project details:",
    lead.projectDetails || "Not provided",
  ].join("\n");
}

function emailHtml(lead: ContactLead) {
  const rows = [
    ["Name", lead.name],
    ["Company", lead.company || "Not provided"],
    ["Email", lead.email],
    ["Phone", lead.phone || "Not provided"],
    ["Service", lead.service || "Not selected"],
    ["Page", lead.page || "Not captured"],
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5">
      <h2 style="margin:0 0 16px">New website lead from Yetki Engineering</h2>
      <table style="border-collapse:collapse;width:100%;max-width:680px">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border:1px solid #e5e7eb;padding:10px 12px;font-weight:700;background:#f9fafb">${escapeHtml(label)}</td>
                <td style="border:1px solid #e5e7eb;padding:10px 12px">${escapeHtml(value)}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
      <h3 style="margin:20px 0 8px">Project details</h3>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(lead.projectDetails || "Not provided")}</p>
    </div>
  `;
}

async function sendLeadEmail(lead: ContactLead) {
  const apiKey = env("RESEND_API_KEY");
  const from = env("CONTACT_FROM_EMAIL") || DEFAULT_FROM_EMAIL;
  const to = env("CONTACT_TO_EMAIL") || DEFAULT_TO_EMAIL;

  if (!apiKey) {
    console.error("Contact email is missing RESEND_API_KEY.");
    return {
      ok: false,
      status: 503,
      message: "Email service is not configured in Vercel. Please add RESEND_API_KEY.",
    };
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: lead.email,
      subject: `New website lead: ${lead.name} - ${lead.service || "General enquiry"}`,
      text: emailText(lead),
      html: emailHtml(lead),
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Resend email failed", response.status, details);
    return {
      ok: false,
      status: 502,
      message: "Email could not be sent. Check RESEND_API_KEY and CONTACT_FROM_EMAIL in Vercel.",
    };
  }

  return { ok: true, status: 200, message: "Thank you. Your details were sent successfully." };
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;

        try {
          body = await request.json();
        } catch {
          return jsonResponse({ message: "Please submit the form again." }, 400);
        }

        if (!body || typeof body !== "object" || Array.isArray(body)) {
          return jsonResponse({ message: "Please submit the form again." }, 400);
        }

        const lead = parseLead(body as Record<string, unknown>);

        if (lead.website) {
          return jsonResponse({ message: "Thank you. Your details were sent successfully." });
        }

        if (!lead.name || !isValidEmail(lead.email)) {
          return jsonResponse({ message: "Please enter your name and a valid email address." }, 400);
        }

        const result = await sendLeadEmail(lead);
        return jsonResponse({ message: result.message }, result.status);
      },
    },
  },
});
