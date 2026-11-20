import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import Beams from "./Beams";
import { GOLD_BUTTON } from "./buttons";
import Reveal from "./Reveal";

interface ContactRow {
  label: string;
  value: string;
  href: string;
  external: boolean;
}

export default function Contact() {
  const { links } = profile;

  // Only links that are filled in profile.ts are shown (no phone number on the public site).
  const rows: ContactRow[] = [];
  if (links.email) rows.push({ label: "Email", value: links.email, href: `mailto:${links.email}`, external: false });
  if (links.linkedin) rows.push({ label: "LinkedIn", value: "ofek-zagury", href: links.linkedin, external: true });
  if (links.github) rows.push({ label: "GitHub", value: "OfekZagury", href: links.github, external: true });
  if (links.cv) rows.push({ label: "Resume", value: "Download PDF", href: links.cv, external: true });

  return (
    <section id="contact" aria-labelledby="contact-title" className="navy-surface relative overflow-hidden">
      <div className="star-field pointer-events-none absolute inset-0" aria-hidden="true" />
      <Beams className="inset-y-0 right-0 w-full opacity-15 md:w-1/2 md:opacity-40" />
      <div
        className="pointer-events-none absolute bottom-[-20%] left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-gold-300/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-36">
        <Reveal>
          <p className="flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.32em] text-gold-200">
            <span className="h-px w-8 bg-gold-300" aria-hidden="true" />
            Contact
          </p>
          <h2
            id="contact-title"
            className="mt-6 font-display text-5xl font-medium leading-[0.98] tracking-tight text-ivory sm:text-7xl lg:text-8xl"
          >
            Let's build something together<span className="gold-text">.</span>
          </h2>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-lg text-navy-100/85">{profile.contactBlurb}</p>
            {links.email && (
              <a href={`mailto:${links.email}`} className={`${GOLD_BUTTON} self-start sm:self-auto`}>
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={120} as="ul" className="mt-16 border-t border-white/10">
          {rows.map((row) => (
            <li key={row.label} className="border-b border-white/10">
              <a
                href={row.href}
                {...(row.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group flex items-center justify-between gap-4 py-5 transition sm:py-6"
              >
                <span className="font-display text-xs uppercase tracking-[0.28em] text-navy-200/80">{row.label}</span>
                <span className="flex items-center gap-3 font-display text-lg font-medium text-ivory transition group-hover:text-gold-200 sm:text-2xl">
                  {row.value}
                  <ArrowUpRight className="h-5 w-5 text-gold-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
