import { ArrowDown, FileText, Mail } from "lucide-react";
import { profile } from "../data/profile";
import Beams from "./Beams";
import { GHOST_BUTTON_ON_NAVY, GOLD_BUTTON } from "./buttons";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Hero() {
  const { links } = profile;

  return (
    <section id="top" className="navy-surface relative overflow-hidden">
      {/* beams sit faintly behind the text on smaller screens, beside it on wide ones */}
      <Beams className="inset-y-0 right-0 w-full opacity-25 md:w-[70%] md:opacity-35 lg:w-[48%] lg:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-navy-950/40" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-32">
        <h1 className="font-script text-7xl leading-[1.1] text-ivory drop-shadow-[0_4px_24px_rgb(0_0_0/0.35)] sm:text-8xl lg:text-9xl">
          {profile.name}
        </h1>
        <p className="mt-4 font-display text-xs font-light uppercase tracking-[0.3em] text-gold-200 sm:text-base sm:tracking-[0.42em]">
          {/* each part stays on one line; on narrow screens the break happens at the "·" */}
          {profile.role.split(" · ").map((part, i) => (
            <span key={part} className="whitespace-nowrap">
              {i > 0 && <span className="px-2 text-gold-300/70">·</span>}
              {part}
            </span>
          ))}
        </p>
        <div className="mt-8 h-px w-24 bg-gradient-to-r from-gold-300 to-transparent" aria-hidden="true" />
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-navy-100/90 sm:text-xl">{profile.intro}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#projects" className={GOLD_BUTTON}>
            View projects
            <ArrowDown className="h-4 w-4" />
          </a>
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noreferrer" className={GHOST_BUTTON_ON_NAVY}>
              <LinkedInIcon />
              LinkedIn
            </a>
          )}
          <a href={links.github} target="_blank" rel="noreferrer" className={GHOST_BUTTON_ON_NAVY}>
            <GitHubIcon />
            GitHub
          </a>
          {links.cv && (
            <a href={links.cv} target="_blank" rel="noreferrer" className={GHOST_BUTTON_ON_NAVY}>
              <FileText className="h-4 w-4" />
              Resume
            </a>
          )}
          {links.email && (
            <a href={`mailto:${links.email}`} className={GHOST_BUTTON_ON_NAVY}>
              <Mail className="h-4 w-4" />
              Email
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
