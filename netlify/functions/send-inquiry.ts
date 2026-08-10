import type { Config } from "@netlify/functions";
import nodemailer from "nodemailer";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().max(254),
  service: z.string().trim().min(2).max(100),
  location: z.string().trim().max(160),
  timeline: z.string().trim().max(160),
  message: z.string().trim().min(10).max(2000),
  load: z.string().trim().max(500),
  signage: z.string().trim().max(500),
  website: z.string().max(0),
  mode: z.enum(["contact", "quote"]),
}).strict();

export const config: Config = {
  path: "/api/inquiry",
  rateLimit: { windowLimit: 5, windowSize: 600, aggregateBy: ["ip", "domain"] },
};

const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);

const handler = async (request: Request) => {
  if (request.method !== "POST") return Response.json({ error: "Method not allowed." }, { status: 405, headers: { Allow: "POST" } });
  if (!(request.headers.get("content-type") || "").includes("application/json")) return Response.json({ error: "Invalid request format." }, { status: 415 });

  let body: unknown;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid request format." }, { status: 400 }); }
  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) return Response.json({ error: "Please check the required fields and try again." }, { status: 400 });
  if (parsed.data.website) return Response.json({ success: true });

  const smtpUser = process.env.SMTP_USER;
  const smtpAppPassword = process.env.SMTP_APP_PASSWORD;
  const recipient = process.env.INQUIRY_TO_EMAIL;
  if (!smtpUser || !smtpAppPassword || !recipient) return Response.json({ error: "The inquiry service is temporarily unavailable. Please call ARV directly." }, { status: 503 });

  const data = parsed.data;
  const kind = data.mode === "quote" ? "Quote request" : "Website inquiry";
  const rows: Array<[string, string]> = [["Name", data.name], ["Phone", data.phone], ["Email", data.email], ["Service", data.service], ["Location", data.location], ["Timeline", data.timeline], ...(data.load ? [["Load / item", data.load] as [string, string]] : []), ...(data.signage ? [["Signage size / placement", data.signage] as [string, string]] : []), ["Project details", data.message]];
  const text = ["ARV Construction & Supplies", kind, "", ...rows.map(([label, value]) => `${label}: ${value || "Not provided"}`), "", "ARV Construction & Supplies", "Design & Build | San Fernando City, La Union", "0927 044 2529 | arvconstruction92@gmail.com"].join("\n");
  const htmlRows = rows.map(([label, value]) => `<tr><td style="width:34%;padding:12px 14px 12px 0;border-top:1px solid #d9d9d2;vertical-align:top;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#707571;">${escapeHtml(label)}</td><td style="padding:12px 0;border-top:1px solid #d9d9d2;vertical-align:top;font-size:14px;line-height:1.5;color:#171918;">${value ? escapeHtml(value).replace(/\n/g, "<br />") : "Not provided"}</td></tr>`).join("");
  const html = `<!doctype html><html lang="en"><body style="margin:0;background:#f5f3ed;color:#171918;font-family:Arial,sans-serif;"><main style="padding:32px 16px;"><table role="presentation" style="width:100%;max-width:680px;margin:0 auto;background:#ffffff;border-collapse:collapse;"><tr><td style="padding:28px 32px;background:#171918;color:#ffffff;"><p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;color:#f4cf4f;">ARV Construction &amp; Supplies</p><h1 style="margin:0;font-size:28px;line-height:1.1;">${escapeHtml(kind)}</h1></td></tr><tr><td style="padding:28px 32px;"><p style="margin:0 0 24px;font-size:16px;line-height:1.55;">A new website inquiry is ready for review.</p><table role="presentation" style="width:100%;border-collapse:collapse;">${htmlRows}</table></td></tr><tr><td style="padding:24px 32px;background:#f4cf4f;color:#171918;"><strong style="display:block;font-size:15px;">ARV Construction &amp; Supplies</strong><span style="display:block;margin-top:5px;font-size:12px;line-height:1.5;">Design &amp; Build &middot; San Fernando City, La Union<br />0927 044 2529 Ã‚&middot; arvconstruction92@gmail.com</span></td></tr></table></main></body></html>`;

  try {
    const transporter = nodemailer.createTransport({ service: "gmail", auth: { user: smtpUser, pass: smtpAppPassword } });
    await transporter.sendMail({ from: { name: "ARV Construction & Supplies", address: smtpUser }, to: recipient, replyTo: { name: data.name, address: data.email }, subject: `${kind}: ${data.service} | ${data.name}`, text, html });
  } catch (error) {
    console.error("Unable to send inquiry email.", error instanceof Error ? error.message : "Unknown error");
    return Response.json({ error: "We could not send your inquiry. Please call ARV or try again shortly." }, { status: 502 });
  }
  return Response.json({ success: true });
};

export default handler;
