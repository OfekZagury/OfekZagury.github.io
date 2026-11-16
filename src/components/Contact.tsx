import { FileText, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon } from "./icons";

interface ContactLink {
  href: string;
  label: string;
  icon: ReactNode;
  external: boolean;
}

export default function Contact() {
  const { links } = profile;

  // Only links that are filled in profile.ts are shown.
  const contactLinks: ContactLink[] = [];
  if (links.email) {
    contactLinks.push({ href: `mailto:${links.email}`, label: links.email, icon: <Mail className="h-4 w-4" />, external: false });
  }
  if (links.linkedin) {
    contactLinks.push({ href: links.linkedin, label: "LinkedIn", icon: <LinkedInIcon />, external: true });
  }
  if (links.github) {
    contactLinks.push({ href: links.github, label: "GitHub", icon: <GitHubIcon />, external: true });
  }
  if (links.cv) {
    contactLinks.push({ href: links.cv, label: "Resume (PDF)", icon: <FileText className="h-4 w-4" />, external: true });
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-24 pt-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 px-6 py-14 text-center sm:px-12 dark:border-zinc-800">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-20 invert" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -bottom-24 left-1/2 h-56 w-[30rem] max-w-full -translate-x-1/2 rounded-full bg-emerald-500/25 blur-3xl"
            aria-hidden="true"
          />
          <p className="relative font-mono text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">Contact</p>
          <h2 id="contact-title" className="relative mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's build something together
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-zinc-400">{profile.contactBlurb}</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
