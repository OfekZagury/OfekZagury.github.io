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
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
          {eyebrow}
        </p>
        <h2 id={`${id}-title`} className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
