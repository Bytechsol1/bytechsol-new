import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { revealCaseStudyText } from "./CaseStudyTextReveal";

export default function CaseStudyReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5 }}
    >
      {revealCaseStudyText(children)}
    </motion.div>
  );
}
