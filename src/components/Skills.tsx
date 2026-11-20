import { skillGroups } from "../data/skills";
import Reveal from "./Reveal";
import Section from "./Section";
import { TAG_FRAME } from "./styles";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="What I build with."
      intro="The languages, frameworks and tools I use at work and across my projects."
      className="border-y border-navy-100/80 bg-white dark:border-white/10 dark:bg-navy-900/40"
    >
      <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 90} className="border-t border-navy-100 pt-6 dark:border-white/10">
            <h3 className="flex items-baseline gap-3 font-display text-lg font-medium">
              <span className="font-display text-xs tracking-[0.2em] text-gold-600 dark:text-gold-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              {group.title}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className={`${TAG_FRAME} bg-ivory dark:bg-white/5`}>
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
