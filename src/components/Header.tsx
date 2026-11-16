import { profile } from "../data/profile";
import ThemeToggle from "./ThemeToggle";

// mobile: false = hidden on small screens to keep the header on one line
const NAV = [
  { href: "#projects", label: "Projects", mobile: true },
  { href: "#experience", label: "Experience", mobile: true },
  { href: "#skills", label: "Skills", mobile: false },
  { href: "#about", label: "About", mobile: false },
  { href: "#contact", label: "Contact", mobile: true },
];

export default function Header() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  // The header stays navy in both themes so it reads as one piece with the hero.
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3" aria-label={`${profile.name}, back to top`}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#f3e3c6,#d3a872)] font-display text-xs font-semibold tracking-wider text-navy-950">
            {initials}
          </span>
          <span className="hidden font-serif text-lg font-medium leading-none tracking-tight text-ivory sm:inline">{profile.name}</span>
        </a>
        <nav aria-label="Main" className="flex items-center gap-0.5 sm:gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-md px-2 py-1.5 font-display text-sm tracking-wide text-navy-100/75 transition hover:text-gold-200 sm:px-3 ${
                item.mobile ? "" : "hidden md:inline-block"
              }`}
            >
              {item.label}
            </a>
          ))}
          <span className="ml-1 sm:ml-2">
            <ThemeToggle />
          </span>
        </nav>
      </div>
    </header>
  );
}
