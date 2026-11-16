import { useState } from "react";
import { categories, projects, type Category } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

type Filter = "All" | Category;

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));
  const filters: Filter[] = ["All", ...categories];

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured projects"
      intro="Each card shows the project's pipeline, what makes it technically interesting and the stack behind it."
    >
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by domain">
        {filters.map((f) => {
          const count = f === "All" ? projects.length : projects.filter((p) => p.categories.includes(f)).length;
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-1.5 font-display text-sm tracking-wide transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 ${
                active
                  ? "border-navy-900 bg-navy-900 text-ivory dark:border-gold-300 dark:bg-gold-300 dark:text-navy-950"
                  : "border-navy-200 text-navy-600 hover:border-gold-400 hover:text-navy-900 dark:border-white/15 dark:text-navy-200 dark:hover:border-gold-300/60 dark:hover:text-ivory"
              }`}
            >
              {f}
              <span className={`ml-1.5 tabular-nums ${active ? "opacity-70" : "text-navy-400 dark:text-navy-400"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-7 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
