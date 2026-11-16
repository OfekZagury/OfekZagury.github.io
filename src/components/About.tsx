import { profile } from "../data/profile";
import Section from "./Section";

export default function About() {
  const [first, ...rest] = profile.about;

  return (
    <Section id="about" eyebrow="About" title="About me">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <p className="font-serif text-5xl font-medium italic leading-none text-navy-800 sm:text-6xl dark:text-gold-200" aria-hidden="true">
          {profile.name.split(" ")[0]}
        </p>
        <div className="space-y-5 text-lg leading-relaxed text-navy-700 dark:text-navy-100/85">
          <p className="font-display text-xl leading-relaxed text-navy-900 sm:text-2xl dark:text-ivory">{first}</p>
          {rest.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
