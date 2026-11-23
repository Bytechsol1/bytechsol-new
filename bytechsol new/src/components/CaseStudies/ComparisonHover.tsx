import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./ComparisonHover.css";

export default function ComparisonHover({ children }: { children: ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const [highlight, setHighlight] = useState<{ y: number; height: number } | null>(null);
  const reducedMotion = useReducedMotion();

  function followRow(target: EventTarget | null) {
    if (!(target instanceof Element) || !container.current) return;
    const row = target.closest("tbody tr");
    if (!row) {
      setHighlight(null);
      return;
    }
    const bounds = row.getBoundingClientRect();
    const y = bounds.top - container.current.getBoundingClientRect().top;
    setHighlight((previous) => previous?.y === y && previous.height === bounds.height
      ? previous
      : { y, height: bounds.height });
  }

  return (
    <div
      className="vc-hover-table"
      ref={container}
      onPointerMove={(event) => {
        if (event.pointerType === "mouse") followRow(event.target);
      }}
      onPointerLeave={() => followRow(document.activeElement)}
      onFocusCapture={(event) => followRow(event.target)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHighlight(null);
      }}
    >
      <motion.div
        className="vc-row-highlight"
        aria-hidden="true"
        initial={false}
        animate={{ y: highlight?.y ?? 0, height: highlight?.height ?? 0, opacity: highlight ? 1 : 0 }}
        transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 38 }}
      />
      {children}
    </div>
  );
}
