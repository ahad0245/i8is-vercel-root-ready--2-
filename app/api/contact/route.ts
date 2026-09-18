import { Resend } from "resend";

export const runtime = "nodejs";

const recipient = process.env.CONTACT_RECIPIENT ?? "contact@i8is.com";
const sender = process.env.CONTACT_FROM;

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });

const readText = (value: unknown, maxLength = 2000) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY || !sender) {
    console.error("Contact form email is missing its Resend configuration.");
    return Response.json(
      { error: "The contact form is temporarily unavailable. Please email contact@i8is.com." },
      { status: 503 },
    );
  }

  try {
    const body = await request.json();
    const name = readText(body.name, 120);
    const email = readText(body.email, 254).toLowerCase();
    const organization = readText(body.organization, 160);
    const country = readText(body.country, 120);
    const interest = readText(body.interest, 160);
    const context = readText(body.context, 5000);
    const timeline = readText(body.timeline, 80);

    // A hidden field that legitimate visitors never fill in.
    if (readText(body.website, 200)) {
      return Response.json({ ok: true });
    }

    if (!name || !email || !interest || !context || !/^\S+@\S+\.\S+$/.test(email)) {
      return Response.json({ error: "Please complete the required fields with a valid work email." }, { status: 400 });
    }

    const fields = [
      ["Name", name],
      ["Work email", email],
      ["Organization", organization || "Not provided"],
      ["Country / region", country || "Not provided"],
      ["Area of interest", interest],
      ["Expected timeline", timeline || "Not provided"],
      ["Project context", context],
    ];

    const rows = fields
      .map(
        ([label, value]) => `<tr><td style="padding:8px 14px 8px 0;color:#506176;font-weight:700;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 0;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
      )
      .join("");

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: email,
      subject: `Website inquiry: ${interest}`,
      html: `<div style="font-family:Arial,sans-serif;color:#102238"><h1 style="font-size:22px">New i8is website inquiry</h1><table style="border-collapse:collapse">${rows}</table></div>`,
    });

    if (error) {
      console.error("Resend contact email failed:", error);
      return Response.json({ error: "We could not send your inquiry. Please try again or email contact@i8is.com." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form request failed:", error);
    return Response.json({ error: "We could not process your inquiry. Please try again." }, { status: 400 });
  }
}
