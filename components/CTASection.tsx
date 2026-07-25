"use client";

import { ArrowRight, Check, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/motion/AnimatedSection";

const CTASection = () => {
  return (
    <AnimatedSection
      className="relative overflow-hidden bg-[#FFB23F] py-20 text-[#101722] lg:py-28"
      staggerSelector="[data-cta]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(16,23,34,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(16,23,34,.2)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="site-shell relative z-10">
        <div data-cta className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.13em]">
          <Sparkles className="h-4 w-4" />
          Prenez une longueur d’avance
        </div>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 data-cta className="max-w-5xl text-[clamp(2.7rem,6.5vw,6.5rem)] font-black leading-[0.9]">
              Votre prochaine opportunité est déjà sur le marché.
            </h2>
            <div data-cta className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
              {["14 jours gratuits", "Sans engagement", "Support français"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <a
            data-cta
            href="https://app.getflaire.fr/login"
            className="button-lift inline-flex h-16 items-center justify-center gap-3 self-start rounded-md bg-[#101722] px-8 text-sm font-extrabold text-white shadow-[0_20px_50px_rgba(16,23,34,0.25)] hover:bg-[#1B263B] lg:self-auto"
          >
            Créer mon compte
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CTASection;
