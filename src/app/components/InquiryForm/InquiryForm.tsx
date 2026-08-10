"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import services from "../../data/services";
import type { InquiryFormProps, InquiryPayload, InquiryStatus } from "./interface";
import { FormShell } from "./elements";

export default function InquiryForm({ mode = "quote" }: InquiryFormProps) {
  const [service, setService] = useState(services[0].title);
  const [status, setStatus] = useState<InquiryStatus>({ state: "idle", message: "Your details go directly to ARV. We only use them to respond to this inquiry." });
  const selectedSlug = useMemo(() => services.find((item) => item.title === service)?.slug, [service]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.state === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    if (!name || !phone || !email) { setStatus({ state: "error", message: "Please complete your name, phone number, and email." }); return; }
    const payload: InquiryPayload = { name, phone, email, service, location: String(data.get("location") || "").trim(), timeline: String(data.get("timeline") || "").trim(), message: String(data.get("message") || "").trim(), load: String(data.get("load") || "").trim(), signage: String(data.get("signage") || "").trim(), website: String(data.get("website") || "").trim() };
    setStatus({ state: "sending", message: "Sending your inquiry to ARV..." });
    try {
      const response = await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, mode }) });
      const result = await response.json().catch(() => null) as { error?: string } | null;
      if (!response.ok) throw new Error(result?.error || "We could not send your inquiry. Please try again shortly.");
      form.reset(); setService(services[0].title);
      setStatus({ state: "success", message: "Inquiry sent. ARV will get back to you soon." });
    } catch (error) { setStatus({ state: "error", message: error instanceof Error ? error.message : "We could not send your inquiry. Please try again shortly." }); }
  }

  return <FormShell><form className="inquiry-form" onSubmit={submit} noValidate>
    <div className="field-span-2"><label htmlFor="service">What do you need?</label><select id="service" name="service" value={service} onChange={(event) => setService(event.target.value)}>{services.map((item) => <option key={item.slug}>{item.title}</option>)}</select></div>
    <div><label htmlFor="name">Name *</label><input id="name" name="name" autoComplete="name" required maxLength={100} /></div>
    <div><label htmlFor="phone">Phone *</label><input id="phone" name="phone" inputMode="tel" autoComplete="tel" required maxLength={30} /></div>
    <div><label htmlFor="email">Email *</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} /></div>
    <div><label htmlFor="location">Project / pickup location</label><input id="location" name="location" maxLength={160} /></div>
    {selectedSlug === "truck-rental" && <div className="field-span-2"><label htmlFor="load">What needs to be transported?</label><input id="load" name="load" maxLength={500} placeholder="Materials, debris, household items, agricultural products..." /></div>}
    {selectedSlug === "signage-fabrication" && <div className="field-span-2"><label htmlFor="signage">Approximate size / installation area</label><input id="signage" name="signage" maxLength={500} placeholder="Share any known dimensions or placement details" /></div>}
    <div className="field-span-2"><label htmlFor="timeline">Preferred date or project timeline</label><input id="timeline" name="timeline" maxLength={160} /></div>
    <div className="field-span-2"><label htmlFor="message">Tell us about the requirement *</label><textarea id="message" name="message" rows={6} required maxLength={2000} /></div>
    <div className="form-honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <div className="field-span-2 form-submit"><p className={`form-status is-${status.state}`} aria-live="polite">{status.message}</p><button className="button button-primary" type="submit" disabled={status.state === "sending"}>{status.state === "sending" ? "Sending..." : mode === "quote" ? "Send quote request" : "Send inquiry"}<span>?</span></button></div>
  </form></FormShell>;
}
