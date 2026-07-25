"use client";

import { Activity, CheckCircle2, MapPin, Zap } from "lucide-react";
import MotionCounter from "@/components/motion/MotionCounter";
import AnimatedSection from "@/components/motion/AnimatedSection";

const ProofStrip = () => {
  const stats = [
    { icon: Activity, value: 2000, prefix: "+", suffix: "", label: "professionnels actifs" },
    { icon: CheckCircle2, value: 95, prefix: "", suffix: "%", label: "de satisfaction client" },
    { icon: Zap, value: 50, prefix: "", suffix: "k+", label: "annonces analysées par jour" },
    { icon: MapPin, value: 24, prefix: "", suffix: "/7", label: "surveillance du marché" },
  ];

  return (
    <AnimatedSection
      as="section"
      className="border-b border-[#DDE4EA] bg-white"
      staggerSelector="[data-proof]"
    >
      <div className="site-shell grid md:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ icon: Icon, value, prefix, suffix, label }, index) => (
          <div
            key={label}
            data-proof
            className={`flex items-center gap-4 py-7 md:px-6 lg:py-9 ${
              index > 0 ? "border-t border-[#E7ECF0] md:border-t-0 md:border-l" : ""
            }`}
          >
            <Icon className="h-5 w-5 shrink-0 text-[#D77D00]" />
            <div>
              <p className="text-2xl font-black text-[#101722]">
                <MotionCounter value={value} prefix={prefix} suffix={suffix} />
              </p>
              <p className="text-xs font-bold text-[#778DA9]">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default ProofStrip;
