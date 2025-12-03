import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToTop(): void {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);
}
