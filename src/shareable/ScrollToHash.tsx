import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
export const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        // Kill any ongoing scroll animations to avoid overlaps
        gsap.killTweensOf(window);

        // Smooth scroll to target
        gsap.to(window, {
          duration: 1.2, // slightly longer duration for smoothness
          scrollTo: { y: target, offsetY: 100 }, // more breathing room
          ease: "power3.out", // smoother easing curve
        });

        // Delay refresh a bit more so GSAP finishes before recalculating
        setTimeout(() => {
          ScrollTrigger.refresh(true);
        }, 800);
      }
    }
  }, [location]);

  return null;
};
