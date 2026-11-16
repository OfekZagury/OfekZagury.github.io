import { profile } from "../data/profile";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="About me">
      <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
