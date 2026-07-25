"use client";

import { MouseEvent, useRef } from "react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CalendarDays,
  Check,
  Radar,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import MotionCounter from "@/components/motion/MotionCounter";

const HeroSection = () => {
  const scope = useRef<HTMLElement>(null);
  const dashboard = useRef<HTMLDivElement>(null);
  const rotateXTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const rotateYTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 1024px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        ({ conditions }) => {
          const desktop = Boolean(conditions?.desktop);
          const reduceMotion = Boolean(conditions?.reduceMotion);

          if (reduceMotion) {
            gsap.set("[data-hero-reveal], [data-dashboard], [data-dashboard-item]", {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotateX: 0,
              rotateY: 0,
            });
            return;
          }

          const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
          intro
            .from("[data-site-header]", { autoAlpha: 0, y: -18, duration: 0.65 })
            .from(
              "[data-hero-reveal]",
              { autoAlpha: 0, y: 36, duration: 0.85, stagger: 0.09 },
              "-=0.35"
            )
            .from(
              "[data-dashboard]",
              {
                autoAlpha: 0,
                y: desktop ? 70 : 36,
                scale: desktop ? 0.88 : 0.95,
                rotateX: desktop ? 9 : 0,
                duration: 1.05,
                transformOrigin: "50% 70%",
              },
              "-=0.62"
            )
            .from(
              "[data-dashboard-item]",
              { autoAlpha: 0, y: 20, scale: 0.95, duration: 0.58, stagger: 0.055 },
              "-=0.48"
            );

          if (desktop && dashboard.current) {
            rotateXTo.current = gsap.quickTo(dashboard.current, "rotationX", {
              duration: 0.65,
              ease: "power3.out",
            });
            rotateYTo.current = gsap.quickTo(dashboard.current, "rotationY", {
              duration: 0.65,
              ease: "power3.out",
            });

            gsap.to("[data-live-dot]", {
              scale: 1.7,
              autoAlpha: 0,
              duration: 1.5,
              repeat: -1,
              ease: "power2.out",
            });
          }
        }
      );

      return () => mm.revert();
    },
    { scope }
  );

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!dashboard.current || !rotateXTo.current || !rotateYTo.current) return;
    const rect = dashboard.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rotateXTo.current(y * -5);
    rotateYTo.current(x * 7);
  };

  const resetTilt = () => {
    rotateXTo.current?.(0);
    rotateYTo.current?.(0);
  };

  return (
    <section
      ref={scope}
      id="hero"
      className="relative min-h-[92svh] overflow-hidden bg-[#101722] pt-[4.5rem] text-white"
    >
      <div className="fine-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className="site-shell relative z-10 grid min-h-[calc(92svh-4.5rem)] items-center gap-12 py-12 lg:grid-cols-[0.86fr_1.14fr] lg:py-14">
        <div className="max-w-xl">
          <div
            data-hero-reveal
            className="mb-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#FFD699]"
          >
            <Sparkles className="h-4 w-4" />
            La pige immobilière nouvelle génération
          </div>

          <h1
            data-hero-reveal
            className="text-[clamp(2.8rem,5.5vw,5.7rem)] font-extrabold leading-[0.92]"
          >
            Passez avant les autres.
            <span className="mt-2 block text-[#FFB23F]">Signez plus vite.</span>
          </h1>

          <p data-hero-reveal className="mt-7 max-w-lg text-base leading-7 text-white/65 sm:text-lg">
            Pige, alertes, CRM et surveillance concurrence réunis dans un seul cockpit pour transformer chaque opportunité en mandat.
          </p>

          <div data-hero-reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://app.getflaire.fr/login"
              className="button-lift inline-flex h-14 items-center justify-center gap-2 rounded-md bg-[#FFB23F] px-7 text-sm font-extrabold text-[#101722] shadow-[0_18px_45px_rgba(255,178,63,0.25)] hover:bg-[#FFC166]"
            >
              Essayer gratuitement
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => document.getElementById("product")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex h-14 items-center justify-center rounded-md border border-white/20 px-7 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Voir le produit
            </button>
          </div>

          <div data-hero-reveal className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-white/55">
            {["14 jours gratuits", "Sans engagement", "Hébergé en France"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-[#FFB23F]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          className="relative [perspective:1400px]"
          onMouseMove={handlePointerMove}
          onMouseLeave={resetTilt}
        >
          <div
            ref={dashboard}
            data-dashboard
            className="glass-dark relative will-change-transform rounded-lg p-2.5 sm:p-4"
          >
            <div className="overflow-hidden rounded-md bg-[#F7F9FB] text-[#101722]">
              <div className="flex items-center justify-between border-b border-[#DDE4EA] px-4 py-3.5 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-md bg-[#101722] text-[#FFB23F]">
                    <Radar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#778DA9]">Cockpit commercial</p>
                    <p className="text-sm font-extrabold sm:text-base">Vue en temps réel</p>
                  </div>
                </div>
                <div className="relative flex items-center gap-2 rounded-full bg-[#E8F7EC] px-3 py-1.5 text-[10px] font-extrabold text-[#23783A]">
                  <span data-live-dot className="absolute left-3 h-2 w-2 rounded-full bg-[#38A755]" />
                  <span className="h-2 w-2 rounded-full bg-[#38A755]" />
                  LIVE
                </div>
              </div>

              <div className="grid gap-3 p-3 sm:grid-cols-[1.08fr_0.92fr] sm:p-5">
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { icon: BarChart3, value: 47, label: "Annonces" },
                      { icon: Bell, value: 12, label: "Alertes" },
                      { icon: Users, value: 8, label: "Prospects" },
                    ].map(({ icon: Icon, value, label }) => (
                      <div data-dashboard-item key={label} className="rounded-md border border-[#E1E7ED] bg-white p-3 shadow-sm">
                        <Icon className="mb-3 h-4 w-4 text-[#D77D00]" />
                        <p className="text-xl font-black sm:text-2xl">
                          <MotionCounter value={value} />
                        </p>
                        <p className="mt-1 text-[10px] font-bold text-[#778DA9] sm:text-xs">{label}</p>
                      </div>
                    ))}
                  </div>

                  <div data-dashboard-item className="rounded-md border border-[#E1E7ED] bg-white p-4 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-xs font-extrabold">Flux d’opportunités</p>
                      <span className="text-[10px] font-bold text-[#D77D00]">Actualisé à l’instant</span>
                    </div>
                    <div className="space-y-2.5">
                      {[
                        ["Villa Neuilly-sur-Seine", "Publié il y a 2 min", "Nouveau"],
                        ["Appartement Boulogne", "Prix ajusté aujourd’hui", "À appeler"],
                        ["Maison Saint-Cloud", "Vendeur particulier", "Qualifié"],
                      ].map(([title, meta, badge]) => (
                        <div key={title} className="flex items-center justify-between gap-3 border-t border-[#EDF1F4] pt-2.5 first:border-0 first:pt-0">
                          <div className="min-w-0">
                            <p className="truncate text-[11px] font-extrabold sm:text-xs">{title}</p>
                            <p className="truncate text-[9px] text-[#778DA9] sm:text-[10px]">{meta}</p>
                          </div>
                          <span className="shrink-0 rounded-full bg-[#FFF3DF] px-2 py-1 text-[9px] font-extrabold text-[#B56600]">{badge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
                  <div data-dashboard-item className="rounded-md bg-[#101722] p-4 text-white">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/45">Mandats gagnés</p>
                        <p className="mt-2 text-3xl font-black text-[#FFB23F]">+40%</p>
                      </div>
                      <ShieldCheck className="h-5 w-5 text-[#FFB23F]" />
                    </div>
                    <div className="mt-5 flex h-12 items-end gap-1">
                      {[35, 52, 42, 68, 61, 86, 100].map((height, index) => (
                        <span
                          key={index}
                          className="flex-1 rounded-t-sm bg-[#FFB23F]"
                          style={{ height: `${height}%`, opacity: 0.35 + index * 0.09 }}
                        />
                      ))}
                    </div>
                  </div>
                  <div data-dashboard-item className="rounded-md border border-[#E1E7ED] bg-white p-4 shadow-sm">
                    <CalendarDays className="h-5 w-5 text-[#D77D00]" />
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[#778DA9]">Prochaine relance</p>
                    <p className="mt-1 text-sm font-extrabold">M. Dupont · 14h00</p>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#EEF2F5]">
                      <div className="h-full w-3/4 rounded-full bg-[#FFB23F]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-hero-reveal
            className="absolute -bottom-5 left-4 hidden items-center gap-3 rounded-md border border-white/10 bg-[#1A2638] px-4 py-3 shadow-2xl sm:flex"
          >
            <div className="grid h-8 w-8 place-items-center rounded-full bg-[#FFB23F] text-[#101722]">
              <Bell className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/45">Nouvelle alerte</p>
              <p className="text-xs font-extrabold">Une opportunité correspond à vos critères</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
