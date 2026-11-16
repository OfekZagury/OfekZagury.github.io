import { ArrowUpRight, Briefcase, GraduationCap, Languages, Shield } from "lucide-react";
import type { ReactNode } from "react";
import { education, languages, service, work, type Position } from "../data/experience";
import Section from "./Section";
import { CARD } from "./styles";

const LABEL = "flex items-center gap-2 font-display text-xs font-medium uppercase tracking-[0.28em] text-navy-500 dark:text-navy-300";

function TimelineItem({ position }: { position: Position }) {
  return (
    <li className="relative pb-10 pl-9 last:pb-0">
      <span
        className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-gold-500 bg-ivory shadow-[0_0_0_4px_rgb(224_193_147/0.25)] dark:border-gold-300 dark:bg-navy-950"
        aria-hidden="true"
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-xl font-medium">
          {position.role}
          <span className="font-light text-navy-400"> · </span>
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
        </h3>
        <p className="font-display text-xs uppercase tracking-[0.2em] text-navy-500 dark:text-navy-300">{position.period}</p>
      </div>
      {position.summary && <p className="mt-2 text-navy-700 dark:text-navy-200">{position.summary}</p>}
      <ul className="mt-4 space-y-2.5">
        {position.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-navy-800 dark:text-navy-100">
            <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-gold-400 dark:bg-gold-300/70" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

function SideCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className={`p-6 ${CARD}`}>
      <h3 className={LABEL}>
        <span className="text-gold-600 dark:text-gold-300">{icon}</span>
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked and studied">
      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 className={`mb-8 ${LABEL}`}>
            <Briefcase className="h-4 w-4 text-gold-600 dark:text-gold-300" aria-hidden="true" />
            Work
          </h3>
          <ol className="relative before:absolute before:bottom-2 before:left-[6px] before:top-2 before:w-px before:bg-gradient-to-b before:from-gold-400 before:to-gold-200/0">
            {work.map((position) => (
              <TimelineItem key={position.org} position={position} />
            ))}
          </ol>
        </div>

        <div className="space-y-6">
          <SideCard icon={<GraduationCap className="h-4 w-4" aria-hidden="true" />} title="Education">
            <p className="font-display text-lg font-medium">{education.degree}</p>
            <p className="text-navy-600 dark:text-navy-200">{education.org}</p>
            <p className="mt-1 font-display text-xs uppercase tracking-[0.2em] text-navy-500 dark:text-navy-300">{education.period}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-navy-800 dark:text-navy-100">
              {education.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </SideCard>

          <SideCard icon={<Shield className="h-4 w-4" aria-hidden="true" />} title="Military service">
            <p className="font-display text-lg font-medium">{service.org}</p>
            <p className="text-sm text-navy-600 dark:text-navy-200">{service.role}</p>
            <p className="mt-1 font-display text-xs uppercase tracking-[0.2em] text-navy-500 dark:text-navy-300">{service.period}</p>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-navy-800 dark:text-navy-100">
              {service.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </SideCard>

          <SideCard icon={<Languages className="h-4 w-4" aria-hidden="true" />} title="Languages">
            <p className="text-sm text-navy-800 dark:text-navy-100">{languages.join(" · ")}</p>
          </SideCard>
        </div>
      </div>
    </Section>
  );
}
