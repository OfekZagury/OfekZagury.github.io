// Shared surface styles so cards look the same across sections.
// *_FRAME variants have no background, so a section can pick its own without class conflicts.

export const CARD_FRAME =
  "rounded-2xl border border-navy-100/80 shadow-[0_1px_2px_rgb(10_22_39/0.04),0_12px_32px_-16px_rgb(10_22_39/0.18)] dark:border-white/10 dark:shadow-none";

/** White card on ivory (light) / translucent navy card (dark). */
export const CARD = `${CARD_FRAME} bg-white dark:bg-navy-900/60`;

export const TAG_FRAME =
  "rounded-full border border-navy-100 px-3 py-1 font-display text-xs tracking-wide text-navy-700 dark:border-white/10 dark:text-navy-100";

/** Small rounded tag. */
export const TAG = `${TAG_FRAME} bg-ivory dark:bg-white/5`;
