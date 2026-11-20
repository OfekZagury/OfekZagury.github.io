import { ArrowDown, FileDown, Mail } from "lucide-react";
import { profile } from "../data/profile";
import Beams from "./Beams";
import { GHOST_BUTTON_ON_NAVY, GOLD_BUTTON, ICON_BUTTON_ON_NAVY } from "./buttons";
import { GitHubIcon, LinkedInIcon } from "./icons";

/** "*word*" segments of the headline are rendered in gold. */
function Highlighted({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/).map((part, i) =>
        part.startsWith("*") ? (
          <span key={i} className="gold-text">
            {part.slice(1, -1)}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

export default function Hero() {
  const { links } = profile;

  return (
    <section id="top" className="navy-surface relative overflow-hidden">
      <div className="star-field pointer-events-none absolute inset-0" aria-hidden="true" />
      {/* warm glow behind the headline */}
      <div
        className="pointer-events-none absolute left-[8%] top-[18%] h-[420px] w-[520px] rounded-full bg-gold-300/10 blur-[110px]"
        aria-hidden="true"
      />
      {/* beams sit faintly behind the text on smaller screens, beside it on wide ones */}
      <Beams className="inset-y-0 right-0 w-full opacity-20 md:w-[70%] md:opacity-30 lg:w-[46%] lg:opacity-95" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-navy-950/40" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-28">
        <p className="font-display text-xs font-medium uppercase tracking-[0.34em] text-gold-200/90 sm:text-sm">
          {profile.role}
        </p>
        <h1 className="mt-5 font-serif text-5xl font-medium leading-[1.02] tracking-tight text-ivory drop-shadow-[0_4px_24px_rgb(0_0_0/0.35)] sm:text-7xl lg:text-8xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight text-ivory sm:text-4xl">
          <Highlighted text={profile.headline} />
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-100/85 sm:text-lg">{profile.intro}</p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#projects" className={GOLD_BUTTON}>
            View projects
            <ArrowDown className="h-4 w-4" />
          </a>
          {links.cv && (
            <a href={links.cv} target="_blank" rel="noreferrer" className={GHOST_BUTTON_ON_NAVY}>
              Resume
              <FileDown className="h-4 w-4" />
            </a>
          )}
          <span className="mx-1 hidden h-6 w-px bg-white/15 sm:block" aria-hidden="true" />
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noreferrer" className={ICON_BUTTON_ON_NAVY} aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          )}
          <a href={links.github} target="_blank" rel="noreferrer" className={ICON_BUTTON_ON_NAVY} aria-label="GitHub">
            <GitHubIcon />
          </a>
          {links.email && (
            <a href={`mailto:${links.email}`} className={ICON_BUTTON_ON_NAVY} aria-label={`Email ${links.email}`}>
              <Mail className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
