import { ArrowUp } from "lucide-react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-navy-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-serif text-xl font-medium leading-none text-gold-200">
          {profile.name}
          <span className="text-gold-300">.</span>
        </p>
        <p className="font-display text-xs uppercase tracking-[0.25em]">
          © {new Date().getFullYear()} · Built with React, TypeScript &amp; Tailwind CSS
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 self-start font-display text-xs uppercase tracking-[0.25em] text-navy-200 transition hover:text-gold-200 sm:self-auto"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
