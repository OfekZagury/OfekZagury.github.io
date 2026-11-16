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
              className={`rounded-full border px-3.5 py-1.5 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 ${
                active
                  ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-900"
                  : "border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
              }`}
            >
              {f}
              <span className={`ml-1.5 tabular-nums ${active ? "opacity-70" : "text-zinc-400 dark:text-zinc-500"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
