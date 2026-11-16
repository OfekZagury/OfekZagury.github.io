import type { ReactNode } from "react";

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
    <section id={id} aria-labelledby={`${id}-title`} className={`py-24 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.32em] text-gold-700 dark:text-gold-300">
          <span className="h-px w-8 bg-gold-500 dark:bg-gold-300" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 id={`${id}-title`} className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-navy-600 dark:text-navy-200">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
