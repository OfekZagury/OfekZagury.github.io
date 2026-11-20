import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, eyebrow, title, intro, children, className = "" }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.32em] text-gold-700 dark:text-gold-300">
            <span className="h-px w-8 bg-gold-500 dark:bg-gold-300" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {title}
          </h2>
          {intro && <p className="mt-5 max-w-2xl text-lg text-navy-600 dark:text-navy-200">{intro}</p>}
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
