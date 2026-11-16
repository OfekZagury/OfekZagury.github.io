import { ArrowDown, ArrowUpRight, FileText, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon } from "./icons";

const SECONDARY_BUTTON =
  "inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-900";

export default function Hero() {
  const { links, current, stats } = profile;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid fade-mask pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-8 pt-16 sm:px-6 sm:pb-10 sm:pt-24">
        {current.label && (
          <a
            href={current.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 transition hover:border-emerald-600/40 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {current.label}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}

        <p className="mt-8 font-mono text-xs font-medium uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
          {profile.role}
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">Hi, I'm {profile.name}.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-400">
          {profile.intro}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            View projects
            <ArrowDown className="h-4 w-4" />
          </a>
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noreferrer" className={SECONDARY_BUTTON}>
              <LinkedInIcon />
              LinkedIn
            </a>
          )}
          <a href={links.github} target="_blank" rel="noreferrer" className={SECONDARY_BUTTON}>
            <GitHubIcon />
            GitHub
          </a>
          {links.cv && (
            <a href={links.cv} className={SECONDARY_BUTTON}>
              <FileText className="h-4 w-4" />
              CV
            </a>
          )}
          {links.email && (
            <a href={`mailto:${links.email}`} className={SECONDARY_BUTTON}>
              <Mail className="h-4 w-4" />
              Email
            </a>
          )}
        </div>

        <dl className="mt-14 grid max-w-2xl grid-cols-3 divide-x divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse px-3 py-4 first:pl-0 sm:px-6">
              <dt className="mt-1 text-xs leading-snug text-zinc-500 sm:text-sm">{stat.label}</dt>
              <dd className="text-2xl font-bold tabular-nums sm:text-3xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
