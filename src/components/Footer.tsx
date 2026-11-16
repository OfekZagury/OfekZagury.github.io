import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-navy-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-script text-3xl leading-none text-gold-200">{profile.name}</p>
        <p className="font-display text-xs uppercase tracking-[0.25em]">
          © {new Date().getFullYear()} · Built with React, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
