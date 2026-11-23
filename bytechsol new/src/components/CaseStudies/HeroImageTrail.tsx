import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import "./HeroImageTrail.css";

const images = [
  "/media/voxxiq-sales-ai-v2.webp",
  "/media/voxxiq-saas-ai-v2.webp",
  "/media/voxxiq-business-ai-v3.webp",
  "/media/voxxiq-agencies-ai-v2.webp",
  "/media/voxxiq-property-ai-v3.webp",
];

export default function HeroImageTrail() {
  const layer = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const overlay = layer.current;
    const hero = overlay?.parentElement;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!overlay || !hero || reducedMotion || !finePointer.matches) return;

    const frames = Array.from(overlay.querySelectorAll("img"));
    let lastPoint: { x: number; y: number } | null = null;
    let lastTime = 0;
    let next = 0;

    function clear() {
      frames.forEach((frame) => frame.getAnimations().forEach((animation) => animation.cancel()));
      lastPoint = null;
    }

    function move(event: PointerEvent) {
      if (event.pointerType !== "mouse" || !hero || !finePointer.matches) return;
      if ((event.target as Element).closest("a, button, summary")) return;
      const bounds = hero.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const now = performance.now();
      if (lastPoint && (Math.hypot(x - lastPoint.x, y - lastPoint.y) < 65 || now - lastTime < 75)) {
        return;
      }
      const frame = frames[next % frames.length];
      frame.getAnimations().forEach((animation) => animation.cancel());
      frame.style.left = `${x}px`;
      frame.style.top = `${y}px`;
      frame.style.zIndex = String(next + 1);
      const angle = (next % 3 - 1) * 7;
      frame.animate([
        { opacity: 0, transform: `translate(-50%, -50%) rotate(${angle}deg) scale(0.75)` },
        { opacity: 1, transform: `translate(-50%, -50%) rotate(${angle}deg) scale(1)`, offset: 0.16 },
        { opacity: 1, transform: `translate(-50%, -55%) rotate(${angle}deg) scale(1)`, offset: 0.55 },
        { opacity: 0, transform: `translate(-50%, -70%) rotate(${angle}deg) scale(0.9)` },
      ], { duration: 1100, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)" });
      next += 1;
      lastPoint = { x, y };
      lastTime = now;
    }

    hero.addEventListener("pointermove", move, { passive: true });
    hero.addEventListener("pointerleave", clear);
    finePointer.addEventListener("change", clear);
    return () => {
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", clear);
      finePointer.removeEventListener("change", clear);
      clear();
    };
  }, [reducedMotion]);

  return (
    <div className="vh-image-trail" ref={layer} aria-hidden="true">
      {images.map((src) => <img key={src} src={src} alt="" width={210} height={132} />)}
    </div>
  );
}
