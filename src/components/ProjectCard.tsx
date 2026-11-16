import { ArrowUpRight, Check, ChevronRight, Globe } from "lucide-react";
import type { Accent, Project } from "../data/projects";
import { GitHubIcon } from "./icons";

// Full class strings so Tailwind can find them at build time.
const ACCENTS: Record<Accent, { cover: string; label: string; chip: string; icon: string }> = {
  emerald: {
    cover: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    label: "text-emerald-700 dark:text-emerald-300",
    chip: "border-emerald-600/20 text-emerald-900 dark:border-emerald-400/20 dark:text-emerald-100",
    icon: "text-emerald-600 dark:text-emerald-400",
  },
  sky: {
    cover: "from-sky-500/20 via-sky-500/5 to-transparent",
    label: "text-sky-700 dark:text-sky-300",
    chip: "border-sky-600/20 text-sky-900 dark:border-sky-400/20 dark:text-sky-100",
    icon: "text-sky-600 dark:text-sky-400",
  },
  violet: {
    cover: "from-violet-500/20 via-violet-500/5 to-transparent",
    label: "text-violet-700 dark:text-violet-300",
    chip: "border-violet-600/20 text-violet-900 dark:border-violet-400/20 dark:text-violet-100",
    icon: "text-violet-600 dark:text-violet-400",
  },
  amber: {
    cover: "from-amber-500/25 via-amber-500/5 to-transparent",
    label: "text-amber-800 dark:text-amber-300",
    chip: "border-amber-600/25 text-amber-950 dark:border-amber-400/20 dark:text-amber-100",
    icon: "text-amber-600 dark:text-amber-400",
  },
  rose: {
    cover: "from-rose-500/20 via-rose-500/5 to-transparent",
    label: "text-rose-700 dark:text-rose-300",
    chip: "border-rose-600/20 text-rose-900 dark:border-rose-400/20 dark:text-rose-100",
    icon: "text-rose-600 dark:text-rose-400",
  },
  cyan: {
    cover: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    label: "text-cyan-700 dark:text-cyan-300",
    chip: "border-cyan-600/20 text-cyan-900 dark:border-cyan-400/20 dark:text-cyan-100",
    icon: "text-cyan-600 dark:text-cyan-400",
  },
  indigo: {
    cover: "from-indigo-500/25 via-indigo-500/5 to-transparent",
    label: "text-indigo-700 dark:text-indigo-300",
    chip: "border-indigo-600/20 text-indigo-900 dark:border-indigo-400/20 dark:text-indigo-100",
    icon: "text-indigo-600 dark:text-indigo-400",
  },
};

const LINK_CLASS =
  "inline-flex items-center gap-2 text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100";

export default function ProjectCard({ project }: { project: Project }) {
  const accent = ACCENTS[project.accent];

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:shadow-black/20 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Cover: the project's pipeline instead of a screenshot */}
      <div className={`relative bg-gradient-to-br ${accent.cover} px-5 pb-5 pt-4`}>
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <p className={`relative font-mono text-[11px] font-medium uppercase tracking-wider ${accent.label}`}>
          {project.featured ? "Featured · " : ""}
          {project.categories.join(" · ")}
        </p>
        <ol className="relative mt-4 flex flex-wrap items-center gap-y-2" aria-label="How it works">
          {project.pipeline.map((step, i) => (
            <li key={step} className="flex items-center">
              <span
                className={`rounded-md border bg-white/80 px-2 py-1 font-mono text-[11px] leading-none backdrop-blur-sm dark:bg-zinc-950/50 ${accent.chip}`}
              >
                {step}
              </span>
              {i < project.pipeline.length - 1 && (
                <ChevronRight className="mx-0.5 h-3.5 w-3.5 shrink-0 text-zinc-400 dark:text-zinc-600" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
        <p className={`mt-1 text-sm font-medium ${accent.label}`}>{project.tagline}</p>
        {project.role && (
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            {project.role}
            {project.period && <span className="whitespace-nowrap"> · {project.period}</span>}
          </p>
        )}
        <p className={`mt-4 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 ${project.featured ? "max-w-3xl" : ""}`}>
          {project.description}
        </p>

        <ul className={`mt-5 gap-x-8 gap-y-2.5 ${project.featured ? "grid sm:grid-cols-2" : "grid"}`}>
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <Check className={`mt-0.5 h-4 w-4 shrink-0 ${accent.icon}`} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-zinc-100 px-2 py-1 font-mono text-[11px] text-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6">
          {project.website && (
            <a href={project.website} target="_blank" rel="noreferrer" className={LINK_CLASS}>
              <Globe className="h-4 w-4" />
              {new URL(project.website).hostname}
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className={LINK_CLASS}>
              <GitHubIcon />
              View code
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
