"use client";
import { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", dates: "", group: "", interest: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const msg = [
      "🦍 *New Safari Inquiry — Mbuni African Safaris*", "",
      `*Name:* ${form.name}`,
      `*Email:* ${form.email || "Not provided"}`,
      `*Phone:* ${form.phone || "Not provided"}`,
      `*Travel Dates:* ${form.dates || "Flexible"}`,
      `*Group Size:* ${form.group || "Not specified"}`,
      `*Safari Interest:* ${form.interest || "General"}`, "",
      `*Message:*`, form.message,
    ].join("\n");
    const url = `https://wa.me/256751621506?text=${encodeURIComponent(msg)}`;
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      window.open(url, "_blank");
      setTimeout(() => { setSent(false); setForm({ name: "", email: "", phone: "", dates: "", group: "", interest: "", message: "" }); }, 3000);
    }, 800);
  };

  return (
    <div className="relative">
      <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 opacity-20 pointer-events-none" style={{ borderColor: "var(--color-brand)" }}/>
      <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 opacity-20 pointer-events-none" style={{ borderColor: "var(--color-brand)" }}/>
      <div className="border border-gray-200 p-8 md:p-12 relative">
        <h3 className="font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-gray-900 mb-2">Start Your Adventure</h3>
        <p className="text-sm text-gray-400 mb-10">Your message goes directly to our team via WhatsApp for a fast response.</p>

        <form onSubmit={submit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Full Name *</label>
              <input name="name" value={form.name} onChange={handle} required placeholder="Jane Doe" className="input-field" />
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Email Address</label>
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" className="input-field" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Phone Number</label>
              <input name="phone" type="tel" value={form.phone} onChange={handle} placeholder="+256 700 000000" className="input-field" />
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Travel Dates</label>
              <input name="dates" value={form.dates} onChange={handle} placeholder="e.g. July 2025" className="input-field" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Group Size</label>
              <select name="group" value={form.group} onChange={handle} className="input-field">
                <option value="">Select group size…</option>
                <option>Solo Traveler</option>
                <option>2 Travelers</option>
                <option>3–5 Travelers</option>
                <option>6+ Travelers</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Safari Interest</label>
              <select name="interest" value={form.interest} onChange={handle} className="input-field">
                <option value="">Select interest…</option>
                <option>Gorilla Trekking</option>
                <option>Chimpanzee Tracking</option>
                <option>Big Game Safari</option>
                <option>Murchison Falls</option>
                <option>Cultural Tour</option>
                <option>Custom Itinerary</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Message *</label>
            <textarea name="message" value={form.message} onChange={handle} required rows={5}
              placeholder="Describe your dream Uganda safari — the more detail the better!"
              className="input-field resize-y" />
          </div>

          <button type="submit" disabled={loading || sent}
            className="w-full py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer border-none text-gray-900 flex items-center justify-center gap-3"
            style={{ background: sent ? "#16a34a" : loading ? "#B8891C" : "var(--color-brand)", color: sent ? "#fff" : undefined }}>
            {sent ? (<><span>✓</span> Opening WhatsApp…</>) : loading ? "Sending…" : (<>Send Message via WhatsApp <span>→</span></>)}
          </button>
          <p className="text-[11px] text-gray-400 text-center">Clicking send will open WhatsApp with your message pre-filled.</p>
        </form>
      </div>
    </div>
  );
}
