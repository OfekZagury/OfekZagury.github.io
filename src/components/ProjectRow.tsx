import { ArrowUpRight, Check, Globe, Play } from "lucide-react";
import { useState } from "react";
import type { Project } from "../data/projects";
import CountUp from "./CountUp";
import { GITHUB_LINK_ICON } from "./icons";
import Reveal from "./Reveal";
import { TAG } from "./styles";
import VideoModal from "./VideoModal";

const LINK_BASE = "group/link inline-flex items-center gap-2 font-display text-sm font-medium tracking-wide transition";
const LINK = `${LINK_BASE} text-navy-900 hover:text-gold-700 dark:text-ivory dark:hover:text-gold-300`;
const PRIMARY_LINK =
  "inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#f3e3c6_0%,#e0c193_50%,#d3a872_100%)] px-5 py-2 font-display text-sm font-medium tracking-wide text-navy-950 shadow-[0_10px_26px_-12px_rgb(211_168_114/0.8)] transition hover:brightness-105";
const ARROW = <ArrowUpRight className="h-4 w-4 transition group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />;

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

function hostOf(project: Project) {
  const url = project.demo ?? project.website;
  if (url) return new URL(url).hostname.replace(/^www\./, "");
  return project.repo ? project.repo.replace(/^https:\/\//, "") : project.title;
}

/** The project's pipeline drawn as a vertical flow, used when there is no screenshot. */
function PipelineVisual({ steps }: { steps: string[] }) {
  return (
    <ol className="relative mx-auto flex w-full max-w-xs flex-col gap-2.5 py-8" aria-label="How it works">
      <span className="absolute bottom-10 left-[19px] top-10 w-px bg-gradient-to-b from-gold-300/70 via-gold-300/30 to-transparent" aria-hidden="true" />
      {steps.map((step, i) => (
        <li key={step} className="relative flex items-center gap-3">
          <span className="z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-gold-200/30 bg-navy-950/80 font-display text-[11px] font-medium tracking-wider text-gold-200">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="flex-1 rounded-lg border border-white/10 bg-white/[0.06] px-3.5 py-2 font-display text-sm tracking-wide text-ivory backdrop-blur-sm transition group-hover/frame:border-gold-200/25">
            {step}
          </span>
        </li>
      ))}
    </ol>
  );
}

/** A browser window mock-up holding the project's poster (with a play button) or its pipeline. */
function BrowserFrame({ project, onPlay }: { project: Project; onPlay: () => void }) {
  const target = project.demo ?? project.website ?? project.repo;
  const body = project.poster ? (
    <>
      <img
        src={withBase(project.poster)}
        alt={`${project.title} demo`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover/frame:scale-[1.03]"
      />
      <span className="absolute inset-0 bg-navy-950/25 transition group-hover/frame:bg-navy-950/10" aria-hidden="true" />
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f3e3c6,#d3a872)] text-navy-950 shadow-[0_12px_40px_-8px_rgb(211_168_114/0.8)] transition group-hover/frame:scale-110">
        <Play className="ml-1 h-6 w-6 fill-current" />
      </span>
    </>
  ) : (
    <>
      <div className="star-field pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="gold-beam absolute -right-8 top-[-50%] h-[200%] w-5 rotate-[32deg] opacity-70 transition duration-500 group-hover/frame:opacity-100"
        aria-hidden="true"
      />
      <div className="relative flex h-full items-center px-6">
        <PipelineVisual steps={project.pipeline} />
      </div>
    </>
  );

  const bodyClass =
    "navy-surface relative block min-h-[300px] overflow-hidden sm:aspect-[16/11] sm:min-h-0 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-gold-300";

  return (
    <div className="group/frame overflow-hidden rounded-2xl border border-navy-100 bg-navy-950 shadow-[0_40px_80px_-40px_rgb(10_22_39/0.6)] transition duration-500 hover:-translate-y-1 dark:border-white/10">
      <div className="flex items-center gap-3 border-b border-white/10 bg-navy-900 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6159]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c941]/80" />
        </span>
        <span className="mx-auto min-w-0 truncate rounded-md bg-white/5 px-4 py-1 text-center font-display text-xs tracking-wide text-navy-200">
          {hostOf(project)}
        </span>
        <span className="w-[42px]" aria-hidden="true" />
      </div>
      {project.video ? (
        <button type="button" onClick={onPlay} className={`${bodyClass} w-full text-left`} aria-label={`Play the ${project.title} demo video`}>
          {body}
        </button>
      ) : target ? (
        <a href={target} target="_blank" rel="noreferrer" className={bodyClass} aria-label={`Open ${project.title}`}>
          {body}
        </a>
      ) : (
        <div className={bodyClass}>{body}</div>
      )}
    </div>
  );
}

export default function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
      {/* min-w-0 lets long text (URLs, tags) wrap or truncate instead of widening the grid on phones */}
      <Reveal className={`min-w-0 md:col-span-6 ${flip ? "md:order-2" : ""}`}>
        <BrowserFrame project={project} onPlay={() => setPlaying(true)} />
      </Reveal>

      <Reveal delay={120} className="min-w-0 md:col-span-6">
        <p className="flex flex-wrap items-center gap-x-2 font-display text-xs font-medium uppercase tracking-[0.24em] text-navy-500 dark:text-navy-300">
          {project.featured && <span className="text-gold-700 dark:text-gold-300">Featured</span>}
          {project.featured && <span aria-hidden="true">·</span>}
          {project.categories.join(" · ")}
        </p>
        <h3 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">{project.title}</h3>
        <p className="mt-2 font-display text-base tracking-wide text-gold-700 dark:text-gold-300">{project.tagline}</p>
        {project.role && (
          <p className="mt-2 text-sm text-navy-500 dark:text-navy-300">
            {project.role}
            {project.period && <span className="whitespace-nowrap"> · {project.period}</span>}
          </p>
        )}
        <p className="mt-5 text-[15px] leading-relaxed text-navy-700 dark:text-navy-100/85">{project.description}</p>

        {project.metrics && (
          <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-5 border-y border-navy-100 py-5 dark:border-white/10">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="sr-only">{metric.label}</dt>
                <dd className="font-display text-3xl font-medium tracking-tight text-navy-950 dark:text-ivory">
                  <CountUp value={metric.value} />
                </dd>
                <dd className="mt-1 text-xs tracking-wide text-navy-500 dark:text-navy-300" aria-hidden="true">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <ul className="mt-6 space-y-2.5">
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

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className={PRIMARY_LINK}>
              <Play className="h-4 w-4 fill-current" />
              Try it live
            </a>
          )}
          {project.video && (
            <button type="button" onClick={() => setPlaying(true)} className={LINK}>
              <Play className="h-4 w-4" />
              Watch demo
            </button>
          )}
          {project.website && (
            <a href={project.website} target="_blank" rel="noreferrer" className={LINK}>
              <Globe className="h-4 w-4" />
              {new URL(project.website).hostname}
              {ARROW}
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className={LINK}>
              {GITHUB_LINK_ICON}
              View code
              {ARROW}
            </a>
          )}
        </div>
      </Reveal>

      {project.video && (
        <VideoModal
          open={playing}
          onClose={() => setPlaying(false)}
          src={withBase(project.video)}
          poster={project.poster ? withBase(project.poster) : undefined}
          title={project.title}
        />
      )}
    </article>
  );
}
