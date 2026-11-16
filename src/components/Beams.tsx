// Two crossing champagne beams with a warm glow where they meet (the banner motif).
// The left edge fades out so the beams melt into the navy instead of ending in a hard line.
export default function Beams({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_35%)] ${className}`}
      aria-hidden="true"
    >
      {/* wide beam, top-left to bottom-right */}
      <div className="gold-beam absolute left-[38%] top-[-40%] h-[180%] w-24 rotate-[-34deg] sm:w-28 lg:w-32" />
      {/* narrow beam crossing it */}
      <div className="gold-beam absolute left-[52%] top-[-40%] h-[180%] w-12 rotate-[30deg] sm:w-16 lg:w-20" />
      {/* copper glow at the crossing */}
      <div className="absolute left-[50%] top-[30%] h-44 w-44 -translate-x-1/2 rounded-full bg-copper/45 blur-3xl" />
    </div>
  );
}
