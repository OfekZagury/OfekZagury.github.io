import { ArrowUpRight, Briefcase, GraduationCap, Languages, Shield } from "lucide-react";
import { languages, timeline, type Position, type TimelineGroup } from "../data/experience";
import Reveal from "./Reveal";
import Section from "./Section";
import { TAG } from "./styles";

// Margin is added per use so the label never carries two conflicting margins.
const LABEL =
  "flex items-center gap-2 font-display text-xs font-medium uppercase tracking-[0.28em] text-navy-500 dark:text-navy-300";
const ICON = "h-4 w-4 text-gold-600 dark:text-gold-300";

const GROUP_ICONS: Record<TimelineGroup["icon"], typeof Briefcase> = {
  work: Briefcase,
  education: GraduationCap,
  service: Shield,
};

function TimelineItem({ position }: { position: Position }) {
  return (
    <Reveal as="li" className="relative pb-14 pl-10 last:pb-0">
      <span
        className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-gold-500 bg-ivory shadow-[0_0_0_5px_rgb(224_193_147/0.22)] dark:border-gold-300 dark:bg-navy-950"
        aria-hidden="true"
      />
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1">
        <div>
          <h4 className="font-display text-2xl font-medium tracking-tight">{position.role}</h4>
          <p className="mt-1 font-display text-base tracking-wide">
            {position.href ? (
              <a
                href={position.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-gold-700 transition hover:text-gold-600 dark:text-gold-300 dark:hover:text-gold-200"
              >
                {position.org}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <span className="text-gold-700 dark:text-gold-300">{position.org}</span>
            )}
          </p>
        </div>
        <p className="pt-2 font-display text-xs uppercase tracking-[0.2em] text-navy-500 dark:text-navy-300">{position.period}</p>
      </div>
      {position.summary && <p className="mt-3 text-navy-700 dark:text-navy-200">{position.summary}</p>}
      <ul className="mt-5 space-y-2.5">
        {position.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-navy-800 dark:text-navy-100">
            <span className="mt-2.5 h-px w-3 shrink-0 bg-gold-500 dark:bg-gold-300" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      {position.tech && (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {position.tech.map((tech) => (
            <li key={tech} className={TAG}>
              {tech}
            </li>
          ))}
        </ul>
      )}
    </Reveal>
  );
}

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Work, study and service.">
      <div className="max-w-4xl space-y-16">
        {timeline.map((group) => {
          const Icon = GROUP_ICONS[group.icon];
          return (
            <div key={group.title}>
              <Reveal as="h3" className={`mb-8 ${LABEL}`}>
                <Icon className={ICON} aria-hidden="true" />
                {group.title}
              </Reveal>
              <ol className="relative before:absolute before:bottom-2 before:left-[6px] before:top-2 before:w-px before:bg-gradient-to-b before:from-gold-400 before:to-gold-200/0">
                {group.items.map((position) => (
                  <TimelineItem key={position.org + position.role} position={position} />
                ))}
              </ol>
            </div>
          );
        })}

        <Reveal>
          <h3 className={`mb-4 ${LABEL}`}>
            <Languages className={ICON} aria-hidden="true" />
            Languages
          </h3>
          <p className="pl-10 text-[15px] text-navy-800 dark:text-navy-100">{languages.join(" · ")}</p>
        </Reveal>
      </div>
    </Section>
  );
}
