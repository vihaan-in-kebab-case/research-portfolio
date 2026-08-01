"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/site-config";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();

    const subject = `Message from ${name || "your site"}`;
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;

    const mailto = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <div>
        <label className="mb-1.5 block font-mono text-xs text-text-faint">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-border bg-card px-3 py-2.5 text-sm focus:border-cyan focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-1.5 block font-mono text-xs text-text-faint">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-border bg-card px-3 py-2.5 text-sm focus:border-cyan focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-1.5 block font-mono text-xs text-text-faint">Message</label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full border border-border bg-card px-3 py-2.5 text-sm focus:border-cyan focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="border border-cyan bg-cyan px-4 py-2.5 font-mono text-[13px] font-semibold text-bg transition hover:opacity-90"
      >
        Send
      </button>
    </form>
  );
}
