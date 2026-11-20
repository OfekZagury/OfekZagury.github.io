// Shared button styles.

/** Champagne-gold primary button. */
export const GOLD_BUTTON =
  "inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#f3e3c6_0%,#e0c193_50%,#d3a872_100%)] px-6 py-2.5 font-display text-sm font-medium tracking-wide text-navy-950 shadow-[0_10px_30px_-10px_rgb(211_168_114/0.7)] transition hover:brightness-105 hover:shadow-[0_12px_34px_-10px_rgb(211_168_114/0.9)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300";

/** Round icon-only button for navy backgrounds (needs an aria-label). */
export const ICON_BUTTON_ON_NAVY =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-ivory backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-gold-300/70 hover:text-gold-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300";

/** Outline button for light / dark page backgrounds. */
export const GHOST_BUTTON =
  "inline-flex items-center gap-2 rounded-full border border-navy-200 px-5 py-2 font-display text-sm tracking-wide text-navy-800 transition hover:border-gold-500 hover:text-navy-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 dark:border-white/15 dark:text-navy-100 dark:hover:border-gold-300/70 dark:hover:text-ivory";

/** Outline button for navy backgrounds. */
export const GHOST_BUTTON_ON_NAVY =
  "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-2.5 font-display text-sm tracking-wide text-ivory backdrop-blur-sm transition hover:border-gold-300/70 hover:text-gold-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300";
