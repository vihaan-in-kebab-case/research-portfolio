import { SITE_CONFIG } from "@/lib/site-config";
import ContactForm from "./ContactForm";

const LINKS = [
  { label: "Email", href: `mailto:${SITE_CONFIG.email}` },
  { label: "GitHub", href: SITE_CONFIG.github },
  { label: "LinkedIn", href: SITE_CONFIG.linkedin },
  { label: "Google Scholar", href: SITE_CONFIG.googleScholar },
  { label: "ORCID", href: SITE_CONFIG.orcid },
];

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="mb-8 font-mono text-xs uppercase tracking-widest text-text-faint">contact</div>
      <h1 className="mb-10 font-pixel text-2xl">Get in touch</h1>

      <div className="mb-12 flex flex-wrap gap-2.5">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="border border-border bg-card px-4 py-2.5 font-mono text-[13px] transition hover:border-cyan"
          >
            {l.label}
          </a>
        ))}
      </div>

      <ContactForm />
    </section>
  );
}
