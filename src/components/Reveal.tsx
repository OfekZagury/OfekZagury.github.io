import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger siblings by giving each a slightly larger delay (ms). */
  delay?: number;
}

/** Fades its content up the first time it scrolls into view. */
export default function Reveal({ children, as: Tag = "div", className = "", delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
