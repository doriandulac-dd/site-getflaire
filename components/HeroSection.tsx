"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import MotionCounter from "@/components/motion/MotionCounter";
import { gsap, useGSAP } from "@/lib/gsap";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Calendar,
  CheckCircle2,
  Gauge,
  Shield,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const HeroSection = () => {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia(scope);

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          isDesktop: "(min-width: 1024px)",
        },
        ({ conditions }) => {
          const reduceMotion = Boolean(conditions?.reduceMotion);

          if (reduceMotion) {
            gsap.set("[data-hero-animate]", { autoAlpha: 1, y: 0, scale: 1 });
            return;
          }

          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
          tl.from("[data-hero-animate]", {
            autoAlpha: 0,
            y: 34,
            duration: 0.9,
            stagger: 0.08,
          }).from(
            "[data-dashboard-card]",
            {
              autoAlpha: 0,
              y: 24,
              scale: 0.96,
              duration: 0.8,
              stagger: 0.06,
            },
            "-=0.45"
          );

          if (conditions?.isDesktop) {
            gsap.to("[data-hero-orbit]", {
              y: -18,
              duration: 3.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          }
        }
      );

      return () => mm.revert();
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0F1722] pt-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(255,178,63,0.28),transparent_28rem),radial-gradient(circle_at_78%_24%,rgba(119,141,169,0.22),transparent_30rem),linear-gradient(135deg,#101827_0%,#1B263B_52%,#2D3543_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F6F8FB] to-transparent" />
      <div className="absolute left-8 top-28 hidden h-28 w-28 rounded-full border border-white/10 lg:block" data-hero-orbit />
      <div className="absolute bottom-32 right-12 hidden h-44 w-44 rounded-full border border-[#FFB23F]/25 lg:block" data-hero-orbit />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
        <div>
          <div data-hero-animate className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFB23F]/25 bg-[#FFB23F]/10 px-4 py-2 text-sm font-semibold text-[#FFD699]">
            <Sparkles className="h-4 w-4" />
            La pige immobilière nouvelle génération
          </div>

          <h1 data-hero-animate className="max-w-4xl text-4xl font-bold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
            Pilotez votre prospection et transformez chaque opportunité en mandat.
          </h1>

          <p data-hero-animate className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.72]">
            GetFlaire réunit pige intelligente, alertes, CRM et surveillance concurrence dans une interface claire pour les professionnels qui veulent agir vite.
          </p>

          <div data-hero-animate className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button
              onClick={() => window.location.href = "https://app.getflaire.fr/login"}
              size="lg"
              className="h-14 rounded-full bg-[#FFB23F] px-7 text-base font-bold text-[#1B263B] shadow-2xl shadow-[#FFB23F]/30 hover:bg-[#FF8F00]"
            >
              Essayer gratuitement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-white/25 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur hover:bg-white/10"
            >
              Voir les tarifs
            </Button>
          </div>

          <div data-hero-animate className="mt-8 grid max-w-xl grid-cols-1 gap-3 text-sm text-white/[0.74] sm:grid-cols-3">
            {["14 jours gratuits", "Sans engagement", "Hébergé en France"].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#FFB23F]" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div data-hero-animate className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[#FFB23F]/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.15] bg-white/[0.12] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:p-5">
            <div className="rounded-[1.35rem] bg-[#F8FAFC] p-4 text-[#1B263B]">
              <div className="mb-5 flex items-center justify-between border-b border-[#1B263B]/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#778DA9]">Dashboard</p>
                  <h3 className="text-xl font-bold">Vue commerciale</h3>
                </div>
                <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">Live</div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: BarChart3, value: 47, label: "Annonces", suffix: "" },
                  { icon: Bell, value: 12, label: "Alertes", suffix: "" },
                  { icon: Users, value: 8, label: "Prospects", suffix: "" },
                ].map((item) => (
                  <div key={item.label} data-dashboard-card className="rounded-2xl border border-[#1B263B]/[0.08] bg-white p-4 shadow-sm">
                    <item.icon className="mb-3 h-5 w-5 text-[#FFB23F]" />
                    <div className="text-2xl font-black">
                      <MotionCounter value={item.value} suffix={item.suffix} />
                    </div>
                    <div className="mt-1 text-xs font-semibold text-[#778DA9]">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-3">
                {[
                  { icon: Target, title: "Villa Neuilly-sur-Seine", meta: "Publié il y a 2h", badge: "Nouveau" },
                  { icon: Calendar, title: "RDV M. Dupont", meta: "Aujourd'hui à 14h00", badge: "Confirmé" },
                  { icon: Shield, title: "Suivi concurrence", meta: "3 agences surveillées", badge: "Actif" },
                ].map((item) => (
                  <div key={item.title} data-dashboard-card className="flex items-center justify-between rounded-2xl border border-[#1B263B]/[0.08] bg-white p-3 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-[#1B263B] p-2">
                        <item.icon className="h-4 w-4 text-[#FFB23F]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">{item.title}</div>
                        <div className="text-xs text-[#778DA9]">{item.meta}</div>
                      </div>
                    </div>
                    <span className="rounded-full bg-[#FFB23F]/[0.12] px-3 py-1 text-xs font-bold text-[#C46E00]">{item.badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div data-hero-animate className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/[0.15] bg-white/10 p-5 backdrop-blur-xl">
              <div className="text-3xl font-black text-[#FFB23F]">+<MotionCounter value={2000} /></div>
              <div className="mt-1 text-sm text-white/70">Professionnels actifs</div>
            </div>
            <div className="rounded-2xl border border-white/[0.15] bg-white/10 p-5 backdrop-blur-xl">
              <div className="text-3xl font-black text-[#FFB23F]"><MotionCounter value={50} />k+</div>
              <div className="mt-1 text-sm text-white/70">Annonces par jour</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
