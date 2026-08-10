"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import services from "../../data/services";
import { company } from "../../data/company";
import type { InquiryFormProps } from "./interface";
import { FormShell } from "./elements";

export default function InquiryForm({ mode = "quote" }: InquiryFormProps) {
  const [service, setService] = useState(services[0].title);
  const [status, setStatus] = useState("");
  const selectedSlug = useMemo(() => services.find((item) => item.title === service)?.slug, [service]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    if (!name || !phone || !email) {
      setStatus("Please complete your name, phone number, and email.");
      return;
    }
    const lines = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${service}`,
      `Location: ${String(data.get("location") || "")}`,
      `Preferred date / timeline: ${String(data.get("timeline") || "")}`,
      `Project details: ${String(data.get("message") || "")}`,
    ];
    if (selectedSlug === "truck-rental") lines.splice(5, 0, `Load / item: ${String(data.get("load") || "")}`);
    if (selectedSlug === "signage-fabrication") lines.splice(5, 0, `Signage size / placement: ${String(data.get("signage") || "")}`);
    const subject = encodeURIComponent(`${mode === "quote" ? "Quote Request" : "Website Inquiry"} - ${service}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  }

  return (
    <FormShell>
      <form className="inquiry-form" onSubmit={submit} noValidate>
        <div className="field-span-2"><label htmlFor="service">What do you need?</label><select id="service" name="service" value={service} onChange={(e) => setService(e.target.value)}>{services.map((item) => <option key={item.slug}>{item.title}</option>)}</select></div>
        <div><label htmlFor="name">Name *</label><input id="name" name="name" autoComplete="name" /></div>
        <div><label htmlFor="phone">Phone *</label><input id="phone" name="phone" inputMode="tel" autoComplete="tel" /></div>
        <div><label htmlFor="email">Email *</label><input id="email" name="email" type="email" autoComplete="email" /></div>
        <div><label htmlFor="location">Project / pickup location</label><input id="location" name="location" /></div>
        {selectedSlug === "truck-rental" && <div className="field-span-2"><label htmlFor="load">What needs to be transported?</label><input id="load" name="load" placeholder="Materials, debris, household items, agricultural products..." /></div>}
        {selectedSlug === "signage-fabrication" && <div className="field-span-2"><label htmlFor="signage">Approximate size / installation area</label><input id="signage" name="signage" placeholder="Share any known dimensions or placement details" /></div>}
        <div className="field-span-2"><label htmlFor="timeline">Preferred date or project timeline</label><input id="timeline" name="timeline" /></div>
        <div className="field-span-2"><label htmlFor="message">Tell us about the requirement</label><textarea id="message" name="message" rows={6} /></div>
        <div className="field-span-2 form-submit"><p>{status || "Submitting opens your email app with the inquiry pre-filled. No information is stored on this website."}</p><button className="button button-primary" type="submit">Prepare inquiry <span>↗</span></button></div>
      </form>
    </FormShell>
  );
}
