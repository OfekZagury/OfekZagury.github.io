import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

// Plain counts like "24", "1,172", "4,000+" or "17,000" count up; anything else ("1:3", "3×") is shown as is.
const COUNTABLE = /^(\d{1,3}(?:,\d{3})*|\d+)(\+?)$/;
const DURATION_MS = 1400;

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

export default function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const match = COUNTABLE.exec(value);
  const target = match ? Number(match[1].replace(/,/g, "")) : 0;
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [current, setCurrent] = useState(match && !prefersReducedMotion() ? 0 : target);

  useEffect(() => {
    if (!match || !inView || prefersReducedMotion()) {
      setCurrent(target);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / DURATION_MS);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`} aria-label={value}>
      {match ? `${current.toLocaleString("en-US")}${match[2]}` : value}
    </span>
  );
}
