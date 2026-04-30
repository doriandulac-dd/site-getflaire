"use client";

import { useRef } from "react";
import AnimatedSection from "@/components/motion/AnimatedSection";
import { gsap, useGSAP } from "@/lib/gsap";
import { BellRing, Database, LineChart } from "lucide-react";

const HowItWorksSection = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion || !lineRef.current) {
        gsap.set(lineRef.current, { scaleX: 1 });
        return;
      }

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const steps = [
    {
      icon: Database,
      number: "01",
      title: "Visibilité complète sur votre marché",
      description: "Analyse continue des annonces selon vos zones, critères et priorités du moment.",
    },
    {
      icon: BellRing,
      number: "02",
      title: "Opportunités qualifiées en temps réel",
      description: "Alertes ciblées, signaux clairs et contexte utile pour décider vite.",
    },
    {
      icon: LineChart,
      number: "03",
      title: "Conversions pilotées avec précision",
      description: "Relances, notes et suivi commercial pour transformer plus d'opportunités en mandats.",
    },
  ];

  return (
    <AnimatedSection as="div" className="relative overflow-hidden bg-white py-24">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-animate-item className="mx-auto mb-16 max-w-3xl text-center">
          <span className="section-eyebrow">Comment ça marche</span>
          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1B263B] sm:text-5xl">
            Une prospection maîtrisée en 3 étapes.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#62738B]">
            Du flux d'annonces continu à la conversion structurée de vos opportunités.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-10 hidden h-1 rounded-full bg-[#E8EBF0] lg:block">
            <div ref={lineRef} className="h-full rounded-full bg-gradient-to-r from-[#FFB23F] via-[#FF8F00] to-[#1B263B]" />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} data-animate-item className="relative">
                <div className="premium-panel h-full rounded-2xl p-7">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1B263B] shadow-xl shadow-[#1B263B]/[0.15]">
                      <step.icon className="h-8 w-8 text-[#FFB23F]" />
                    </div>
                    <span className="text-5xl font-black text-[#1B263B]/[0.08]">{step.number}</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#1B263B]">{step.title}</h3>
                  <p className="mt-4 leading-7 text-[#62738B]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-animate-item className="mt-16 overflow-hidden rounded-[1.75rem] bg-[#1B263B] p-8 text-white shadow-[0_30px_90px_rgba(27,38,59,0.24)] sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-3xl font-black">Prêt à développer votre portefeuille ?</h3>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/[0.72]">
                Rejoignez les professionnels qui structurent leur prospection et multiplient leurs mandats.
              </p>
            </div>
            <button
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full bg-[#FFB23F] px-8 py-4 font-bold text-[#1B263B] shadow-xl shadow-[#FFB23F]/25 transition-colors hover:bg-[#FF8F00]"
            >
              Essayer gratuitement 14 jours
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HowItWorksSection;
