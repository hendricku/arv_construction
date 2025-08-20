"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactsPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.name || !form.phone || !form.email) {
      setError("Please fill in all required fields.");
      return;
    }
    const subject = encodeURIComponent("New Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`
    );
    window.location.href = `mailto:arvconstruction92@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="w-full min-h-screen bg-white bg-grid flex flex-col items-center px-2">
      <Navbar />

      <div className="flex-1 w-full flex flex-col items-center">
        <div className="mt-8" />
        <div className="text-emerald-500 font-semibold text-sm flex items-center gap-2 mb-8">
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#10B981" /></svg>
          Contact us
        </div>
        <h1 className="text-4xl font-bold mb-2 text-gray-900 text-center">Have questions? Ready to help!</h1>
        <p className="text-gray-500 text-center max-w-2xl mb-8">
          We are an engineering design and build company. Our team is ready to assist you with your construction and engineering needs—reach out for expert guidance and tailored solutions.
        </p>
        <div className="w-full max-w-4xl bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row overflow-hidden">
          <div className="relative flex-1 min-w-[260px] bg-gray-400 p-6 flex flex-col justify-center items-start">
            <Image src="/arvcovertwo.png" alt="Contact" fill className="object-cover object-center absolute inset-0 z-0 opacity-60" />
            <div className="relative z-10">
              <div className="text-white text-2xl font-bold mb-2 drop-shadow">Contact Information</div>
              <div className="text-white mb-4 drop-shadow">Ready to start your next project? We&apos;re here to help!</div>
              <div className="flex flex-col gap-2 text-white text-sm">
                <div className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 0 0 7.48 19h9.04a2 2 0 0 0 1.83-1.3L21 13M7 13V6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v7" /></svg> +639270442529</div>
                <div className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0z" /></svg>arvconstruction92@gmail.com</div>
                <div className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.828 0l-4.243-4.243a8 8 0 1 1 11.314 0z" /><circle cx="12" cy="11" r="3" /></svg>San Fernando , La Union</div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="flex-1 p-6 flex flex-col gap-4 bg-white">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <label className="font-medium text-gray-800">Name *</label>
                <input required type="text" className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-900 placeholder-gray-400" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Your name" />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="font-medium text-gray-800">Phone number *</label>
                <input required type="tel" className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-900 placeholder-gray-400" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="xxx-xxx-xxxx" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium text-gray-800">Email address *</label>
              <input required type="email" className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-900 placeholder-gray-400" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="Your email" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium text-gray-800">Message</label>
              <textarea className="border border-gray-300 rounded-2xl px-4 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-900 placeholder-gray-400" value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Write here your message" />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full w-fit transition self-end">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
} 