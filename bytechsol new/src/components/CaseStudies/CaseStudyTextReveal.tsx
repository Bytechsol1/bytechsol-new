import { Children, cloneElement, isValidElement, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import "./CaseStudyTextReveal.css";

function plainText(children: ReactNode): string {
  return Children.toArray(children).map((child) => {
    if (typeof child === "string" || typeof child === "number") return String(child);
    if (!isValidElement<{ children?: ReactNode }>(child)) return "";
    return child.type === "br" ? " " : plainText(child.props.children);
  }).join("");
}

export default function CaseStudyTextReveal({
  children,
  characters = false,
}: {
  children: ReactNode;
  characters?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const reduced = useReducedMotion();
  const [finished, setFinished] = useState(false);
  const text = plainText(children);
  const pieceCount = characters
    ? Array.from(text.replace(/\s/g, "")).length
    : text.trim().split(/\s+/).filter(Boolean).length;
  let position = 0;

  function split(content: ReactNode): ReactNode {
    return Children.map(content, (child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child).split(/(\s+)/).map((word, wordIndex) => {
          if (/^\s*$/.test(word)) return word;
          const pieces = characters ? Array.from(word) : [word];
          return (
            <span className="vt-word" key={wordIndex}>
              {pieces.map((piece, index) => {
                const last = position === pieceCount - 1;
                const delay = Math.min(position++ * (characters ? 18 : 32), 900);
                return (
                  <span
                    className="vt-piece"
                    key={index}
                    data-reveal-last={last ? "true" : undefined}
                    style={{ "--vt-delay": `${delay}ms` } as CSSProperties}
                  >
                    {piece}
                  </span>
                );
              })}
            </span>
          );
        });
      }
      if (isValidElement<{ children?: ReactNode }>(child)) {
        return cloneElement(child, undefined, split(child.props.children));
      }
      return child;
    });
  }

  if (reduced || finished) return <>{children}</>;

  return (
    <span
      ref={ref}
      className={`vt-text${visible ? " vt-text--visible" : ""}`}
      onAnimationEnd={(event) => {
        if (event.animationName === "vt-text-enter" &&
          event.target instanceof HTMLElement && event.target.dataset.revealLast === "true") {
          setFinished(true);
        }
      }}
    >
      <span className="vt-readable">{text}</span>
      <span aria-hidden="true">{split(children)}</span>
    </span>
  );
}

export function revealCaseStudyText(children: ReactNode): ReactNode {
  return Children.map(children, (child) => {
    if (!isValidElement<{ children?: ReactNode }>(child) || typeof child.type !== "string") {
      return child;
    }
    if (/^h[1-3]$/.test(child.type) || child.type === "p") {
      return cloneElement(child, undefined,
        <CaseStudyTextReveal characters={child.type !== "p"}>
          {child.props.children}
        </CaseStudyTextReveal>,
      );
    }
    if (["a", "button", "details", "summary"].includes(child.type)) return child;
    return cloneElement(child, undefined, revealCaseStudyText(child.props.children));
  });
}
