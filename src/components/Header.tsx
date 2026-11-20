import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import ThemeToggle from "./ThemeToggle";

// mobile: false = hidden on small screens to keep the header on one line
const NAV = [
  { id: "projects", label: "Projects", mobile: true },
  { id: "experience", label: "Experience", mobile: true },
  { id: "skills", label: "Skills", mobile: false },
  { id: "contact", label: "Contact", mobile: false },
];

/** The section currently in the middle of the viewport, for the nav underline. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    sections.forEach((section) => observer.observe(section));
    const top = document.getElementById("top");
    const topObserver = new IntersectionObserver(([entry]) => entry.isIntersecting && setActive(null), {
      rootMargin: "-45% 0px -50% 0px",
    });
    if (top) topObserver.observe(top);
    return () => {
      observer.disconnect();
      topObserver.disconnect();
    };
  }, [ids]);

  return active;
}

const SECTION_IDS = NAV.map((item) => item.id);

export default function Header() {
  const active = useActiveSection(SECTION_IDS);
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  // The header stays navy in both themes so it reads as one piece with the hero.
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3" aria-label={`${profile.name}, back to top`}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#f3e3c6,#d3a872)] font-display text-xs font-semibold tracking-wider text-navy-950">
            {initials}
          </span>
          <span className="hidden font-serif text-lg font-medium leading-none tracking-tight text-ivory sm:inline">
            {profile.name}
            <span className="text-gold-300">.</span>
          </span>
        </a>
        <nav aria-label="Main" className="flex items-center gap-0.5 sm:gap-1">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-md px-2 py-1.5 font-display text-sm tracking-wide transition hover:text-gold-200 sm:px-3 ${
                  isActive ? "text-ivory" : "text-navy-100/70"
                } ${item.mobile ? "" : "hidden md:inline-block"}`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-2 -bottom-0.5 h-0.5 origin-left rounded-full bg-gold-300 transition-transform duration-300 sm:inset-x-3 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden="true"
                />
              </a>
            );
          })}
          <a
            href="#contact"
            className="ml-1 hidden rounded-full border border-gold-300/50 px-4 py-1.5 font-display text-sm tracking-wide text-gold-100 transition hover:border-gold-200 hover:bg-gold-300 hover:text-navy-950 sm:ml-3 sm:inline-flex"
          >
            Let's talk
          </a>
          <span className="ml-1 sm:ml-2">
            <ThemeToggle />
          </span>
        </nav>
      </div>
    </header>
  );
}
