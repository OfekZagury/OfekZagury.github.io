import { ArrowDown, FileText, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { categories, projects } from "../data/projects";
import { GitHubIcon } from "./icons";

const technologyCount = new Set(projects.flatMap((p) => p.tech)).size;

const STATS = [
  { value: projects.length, label: "featured projects" },
  { value: categories.length, label: "domains" },
  { value: technologyCount, label: "technologies" },
];

export default function Hero() {
  const { links } = profile;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid fade-mask pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-8 pt-20 sm:px-6 sm:pb-10 sm:pt-28">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
          {profile.role}
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Hi, I'm {profile.name}.
        </h1>
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
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
          >
            <GitHubIcon />
            GitHub
          </a>
          {links.cv && (
            <a
              href={links.cv}
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
            >
              <FileText className="h-4 w-4" />
              CV
            </a>
          )}
          {links.email && (
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          )}
        </div>

        <dl className="mt-14 grid max-w-xl grid-cols-3 divide-x divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-3 py-4 first:pl-0 sm:px-6">
              <dt className="text-xs text-zinc-500 sm:text-sm dark:text-zinc-500">{stat.label}</dt>
              <dd className="mt-1 text-2xl font-bold tabular-nums sm:text-3xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
