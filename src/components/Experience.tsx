import { ArrowUpRight, Briefcase, GraduationCap, Languages, Shield } from "lucide-react";
import type { ReactNode } from "react";
import { education, languages, service, work, type Position } from "../data/experience";
import Section from "./Section";

function TimelineItem({ position }: { position: Position }) {
  return (
    <li className="relative pb-10 pl-8 last:pb-0">
      <span
        className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-emerald-500 bg-white dark:bg-zinc-950"
        aria-hidden="true"
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold">
          {position.role}
          <span className="font-normal text-zinc-500 dark:text-zinc-400"> · </span>
          {position.href ? (
            <a
              href={position.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-400"
            >
              {position.org}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span>{position.org}</span>
          )}
        </h3>
        <p className="font-mono text-xs text-zinc-500">{position.period}</p>
      </div>
      {position.summary && <p className="mt-2 text-zinc-600 dark:text-zinc-400">{position.summary}</p>}
      <ul className="mt-3 space-y-2">
        {position.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

function SideCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
      <h3 className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-zinc-500">
        {icon}
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked and studied">
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-2">
          <h3 className="mb-6 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-zinc-500">
            <Briefcase className="h-4 w-4" aria-hidden="true" />
            Work
          </h3>
          <ol className="relative before:absolute before:bottom-2 before:left-[5px] before:top-2 before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
            {work.map((position) => (
              <TimelineItem key={position.org} position={position} />
            ))}
          </ol>
        </div>

        <div className="space-y-5">
          <SideCard icon={<GraduationCap className="h-4 w-4" aria-hidden="true" />} title="Education">
            <p className="font-semibold">{education.degree}</p>
            <p className="text-zinc-600 dark:text-zinc-400">{education.org}</p>
            <p className="mt-1 font-mono text-xs text-zinc-500">{education.period}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
              {education.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </SideCard>

          <SideCard icon={<Shield className="h-4 w-4" aria-hidden="true" />} title="Military service">
            <p className="font-semibold">{service.org}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{service.role}</p>
            <p className="mt-1 font-mono text-xs text-zinc-500">{service.period}</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {service.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </SideCard>

          <SideCard icon={<Languages className="h-4 w-4" aria-hidden="true" />} title="Languages">
            <p className="text-sm text-zinc-700 dark:text-zinc-300">{languages.join(" · ")}</p>
          </SideCard>
        </div>
      </div>
    </Section>
  );
}
