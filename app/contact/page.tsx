import { SITE_CONFIG } from "@/lib/site-config";
import ContactForm from "./ContactForm";

const LINKS = [
  { label: "Email", href: `mailto:${SITE_CONFIG.email}`, target: "_blank", rel: "noopener noreferrer" },
  { label: "GitHub", href: SITE_CONFIG.github, target: "_blank", rel: "noopener noreferrer" },
  { label: "LinkedIn", href: SITE_CONFIG.linkedin, target: "_blank", rel: "noopener noreferrer" },
  { label: "Google Scholar", href: SITE_CONFIG.googleScholar, target: "_blank", rel: "noopener noreferrer" },
  { label: "ORCID", href: SITE_CONFIG.orcid, target: "_blank", rel: "noopener noreferrer" },
];

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="mb-8 font-mono text-xs uppercase tracking-widest text-text-faint">all_my_links.exe</div>
      <h1 className="mb-10 font-pixel text-2xl">Get in touch</h1>

      <div className="mb-12 flex flex-wrap gap-2.5">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.target}
            rel={l.rel}
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
