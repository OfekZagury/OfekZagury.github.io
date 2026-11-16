import { skillGroups } from "../data/skills";
import Section from "./Section";
import { CARD_FRAME, TAG_FRAME } from "./styles";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Skills"
      intro="What I use at work and across my projects."
      className="border-y border-navy-100/80 bg-white dark:border-white/10 dark:bg-navy-900/40"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className={`p-6 sm:p-7 ${CARD_FRAME} bg-ivory dark:bg-navy-950/60`}>
            <h3 className="flex items-center gap-3 font-display text-lg font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500 dark:bg-gold-300" aria-hidden="true" />
              {group.title}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className={`${TAG_FRAME} bg-white dark:bg-white/5`}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
