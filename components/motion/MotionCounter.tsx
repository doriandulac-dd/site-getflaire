"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type MotionCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
};

const MotionCounter = ({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
}: MotionCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const state = { value: 0 };

      const render = () => {
        if (!ref.current) return;
        ref.current.textContent = `${prefix}${state.value.toFixed(decimals)}${suffix}`;
      };

      if (reduceMotion) {
        state.value = value;
        render();
        return;
      }

      gsap.to(state, {
        value,
        duration: 1.4,
        ease: "power3.out",
        onUpdate: render,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: ref, dependencies: [value, suffix, prefix, decimals] }
  );

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
};

export default MotionCounter;

