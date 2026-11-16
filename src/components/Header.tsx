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

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/80 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 font-semibold" aria-label={`${profile.name}, back to top`}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-xs font-extrabold text-white">
            {initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-md px-2 py-1.5 text-sm text-zinc-600 transition hover:text-zinc-900 sm:px-3 dark:text-zinc-400 dark:hover:text-zinc-100 ${
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
