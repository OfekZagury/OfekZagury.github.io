import { ArrowUpRight, Check, ChevronRight, Globe } from "lucide-react";
import type { Project } from "../data/projects";
import { GitHubIcon } from "./icons";
import { CARD, TAG } from "./styles";

const LINK_CLASS =
  "inline-flex items-center gap-2 font-display text-sm font-medium tracking-wide text-navy-900 transition hover:text-gold-700 dark:text-ivory dark:hover:text-gold-300";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group flex flex-col overflow-hidden transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgb(10_22_39/0.35)] ${CARD} ${
        project.featured ? "ring-1 ring-gold-400/50 md:col-span-2 dark:ring-gold-300/30" : ""
      }`}
    >
      {/* Cover: the project's pipeline on navy, with a thin gold beam accent */}
      <div className="navy-surface relative overflow-hidden px-6 pb-6 pt-5">
        <div
          className="gold-beam absolute -right-6 top-[-60%] h-[220%] w-3 rotate-[32deg] opacity-70 transition duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />
        <p className="relative font-display text-[11px] font-medium uppercase tracking-[0.28em] text-gold-200">
          {project.featured ? "Featured · " : ""}
          {project.categories.join(" · ")}
        </p>
        <ol className="relative mt-5 flex flex-wrap items-center gap-y-2 pr-6" aria-label="How it works">
          {project.pipeline.map((step, i) => (
            <li key={step} className="flex items-center">
              <span className="rounded-full border border-gold-200/25 bg-white/5 px-3 py-1 font-display text-xs leading-none tracking-wide text-ivory backdrop-blur-sm">
                {step}
              </span>
              {i < project.pipeline.length - 1 && (
                <ChevronRight className="mx-1 h-3.5 w-3.5 shrink-0 text-gold-300/60" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-2xl font-medium tracking-tight">{project.title}</h3>
        <p className="mt-1 font-display text-sm tracking-wide text-gold-700 dark:text-gold-300">{project.tagline}</p>
        {project.role && (
          <p className="mt-2 text-sm text-navy-500 dark:text-navy-300">
            {project.role}
            {project.period && <span className="whitespace-nowrap"> · {project.period}</span>}
          </p>
        )}
        <p className={`mt-4 text-[15px] leading-relaxed text-navy-700 dark:text-navy-100/85 ${project.featured ? "max-w-3xl" : ""}`}>
          {project.description}
        </p>

        <ul className={`mt-5 gap-x-8 gap-y-3 ${project.featured ? "grid sm:grid-cols-2" : "grid"}`}>
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-navy-800 dark:text-navy-100">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-600 dark:text-gold-300" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tech.map((tech) => (
            <li key={tech} className={TAG}>
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 border-t border-navy-100/80 pt-5 dark:border-white/10 [&:not(:empty)]:mt-7">
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
