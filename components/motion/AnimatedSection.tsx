"use client";

import { ReactNode, useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
  staggerSelector?: string;
};

const AnimatedSection = ({
  children,
  className = "",
  id,
  as = "section",
  staggerSelector = "[data-animate-item]",
}: AnimatedSectionProps) => {
  const scope = useRef<HTMLElement>(null);
  const Component = as;

  useGSAP(
    () => {
      const mm = gsap.matchMedia(scope);

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          isDesktop: "(min-width: 768px)",
        },
        ({ conditions }) => {
          const reduceMotion = Boolean(conditions?.reduceMotion);
          const items = gsap.utils.toArray<HTMLElement>(staggerSelector);

          if (reduceMotion) {
            gsap.set(items, { autoAlpha: 1, y: 0, clearProps: "transform" });
            return;
          }

          gsap.from(items, {
            autoAlpha: 0,
            y: conditions?.isDesktop ? 42 : 24,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: scope.current,
              start: "top 78%",
              once: true,
            },
          });
        }
      );

      return () => {
        mm.revert();
        ScrollTrigger.refresh();
      };
    },
    { scope }
  );

  return (
    <Component ref={scope as never} id={id} className={className}>
      {children}
    </Component>
  );
};

export default AnimatedSection;

