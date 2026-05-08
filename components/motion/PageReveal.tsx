"use client";

import { ReactNode, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const PageReveal = ({ children }: { children: ReactNode }) => {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      gsap.from(scope.current, {
        autoAlpha: 0,
        duration: 0.35,
        ease: "power2.out",
      });
    },
    { scope }
  );

  return <div ref={scope}>{children}</div>;
};

export default PageReveal;

