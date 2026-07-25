"use client";

import { useRef } from "react";
import { BellRing, Database, LineChart, ArrowRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

const steps = [
  {
    icon: Database,
    number: "01",
    label: "Observer",
    title: "Votre marché devient lisible.",
    description:
      "La pige analyse en continu les annonces qui correspondent à vos zones et à vos critères.",
  },
  {
    icon: BellRing,
    number: "02",
    label: "Prioriser",
    title: "Les bons signaux remontent.",
    description:
      "Les opportunités qualifiées arrivent en temps réel avec les informations utiles pour agir.",
  },
  {
    icon: LineChart,
    number: "03",
    label: "Convertir",
    title: "Votre suivi fait la différence.",
    description:
      "Prospects, notes et relances restent organisés pour transformer davantage de contacts en mandats.",
  },
];

const HowItWorksSection = () => {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          desktop: "(min-width: 768px)",
        },
        ({ conditions }) => {
          if (conditions?.reduceMotion) {
            gsap.set("[data-workflow-step], [data-workflow-line]", { autoAlpha: 1, x: 0, y: 0, scaleX: 1 });
            return;
          }

          gsap.from("[data-workflow-step]", {
            autoAlpha: 0,
            y: conditions?.desktop ? 54 : 28,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.14,
            scrollTrigger: {
              trigger: scope.current,
              start: "top 70%",
              once: true,
            },
          });

          gsap.from("[data-workflow-line]", {
            scaleX: 0,
            transformOrigin: "left",
            ease: "none",
            scrollTrigger: {
              trigger: "[data-workflow-grid]",
              start: "top 72%",
              end: "bottom 58%",
              scrub: 0.8,
            },
          });
        }
      );
      return () => mm.revert();
    },
    { scope }
  );

  return (
    <section ref={scope} id="workflow" className="bg-[#F3F6F8] py-24 lg:py-32">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="section-kicker">Une méthode claire</p>
            <h2 className="section-title mt-5">Du signal au mandat.</h2>
          </div>
          <p className="section-copy max-w-2xl lg:pb-2">
            GetFlaire ne remplace pas votre expertise. Il retire le bruit, structure l’action et vous laisse vous concentrer sur la relation.
          </p>
        </div>

        <div data-workflow-grid className="relative mt-16 grid gap-0 md:grid-cols-3 lg:mt-24">
          <div data-workflow-line className="absolute left-0 right-0 top-7 hidden h-px bg-[#FFB23F] md:block" />
          {steps.map(({ icon: Icon, number, label, title, description }, index) => (
            <article
              key={number}
              data-workflow-step
              className={`relative py-8 md:px-8 md:py-0 ${index > 0 ? "border-t border-[#D7DFE6] md:border-l md:border-t-0" : ""}`}
            >
              <div className="relative z-10 mb-9 flex h-14 w-14 items-center justify-center rounded-full border border-[#CAD4DC] bg-[#F3F6F8]">
                <Icon className="h-5 w-5 text-[#C66F00]" />
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#C66F00]">{number}</span>
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#778DA9]">{label}</span>
              </div>
              <h3 className="mt-5 max-w-xs text-2xl font-extrabold leading-tight text-[#101722]">{title}</h3>
              <p className="mt-4 max-w-sm leading-7 text-[#6F8097]">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-[#D7DFE6] pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-lg font-bold text-[#101722]">
            Une prospection structurée, sans alourdir vos journées.
          </p>
          <button
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 self-start text-sm font-extrabold text-[#B56600] sm:self-auto"
          >
            Voir les tarifs
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
