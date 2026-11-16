import { FileText, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { profile } from "../data/profile";
import Beams from "./Beams";
import { GHOST_BUTTON_ON_NAVY, GOLD_BUTTON } from "./buttons";
import { GitHubIcon, LinkedInIcon } from "./icons";

interface ContactLink {
  href: string;
  label: string;
  icon: ReactNode;
  external: boolean;
}

export default function Contact() {
  const { links } = profile;

  // Only links that are filled in profile.ts are shown. The first one gets the gold button.
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
        <div className="navy-surface relative overflow-hidden rounded-3xl px-6 py-16 text-center shadow-[0_30px_80px_-30px_rgb(10_22_39/0.6)] sm:px-12 sm:py-20">
          <Beams className="inset-y-0 right-0 w-full opacity-25 md:w-1/2 md:opacity-90" />
          <p className="relative font-serif text-3xl italic leading-none text-gold-200 sm:text-4xl">Let's talk</p>
          <h2 id="contact-title" className="relative mt-4 font-display text-3xl font-medium tracking-tight text-ivory sm:text-4xl">
            Let's build something together
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-navy-100/85">{profile.contactBlurb}</p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            {contactLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className={i === 0 ? GOLD_BUTTON : GHOST_BUTTON_ON_NAVY}
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
