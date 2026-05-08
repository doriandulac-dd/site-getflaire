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
          const isDesktop = Boolean(conditions?.isDesktop);

          if (reduceMotion) {
            gsap.set(
              [
                "[data-hero-animate]",
                "[data-dashboard-shell]",
                "[data-dashboard-kpi]",
                "[data-dashboard-feed]",
                "[data-dashboard-stat]",
                "[data-dashboard-badge]",
              ].join(", "),
              { autoAlpha: 1, x: 0, y: 0, scale: 1, rotateX: 0, rotateY: 0, clearProps: "transform" }
            );
            gsap.set("[data-dashboard-shimmer]", { autoAlpha: 0 });
            return;
          }

          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
          tl.from("[data-hero-animate]", {
            autoAlpha: 0,
            y: 34,
            duration: 0.9,
            stagger: 0.08,
          })
            .from(
              "[data-dashboard-shell]",
              {
                autoAlpha: 0,
                y: isDesktop ? 58 : 32,
                scale: isDesktop ? 0.9 : 0.96,
                rotateX: isDesktop ? 8 : 0,
                duration: isDesktop ? 1 : 0.75,
                transformOrigin: "50% 65%",
              },
              "-=0.48"
            )
            .from(
              "[data-dashboard-kpi]",
              {
                autoAlpha: 0,
                x: (index) => (index - 1) * (isDesktop ? 34 : 14),
                y: isDesktop ? 34 : 18,
                scale: 0.86,
                duration: isDesktop ? 0.78 : 0.58,
                stagger: 0.08,
              },
              "-=0.45"
            )
            .from(
              "[data-dashboard-feed]",
              {
                autoAlpha: 0,
                x: isDesktop ? 42 : 20,
                y: isDesktop ? 18 : 12,
                scale: 0.96,
                duration: isDesktop ? 0.68 : 0.52,
                stagger: 0.07,
              },
              "-=0.35"
            )
            .from(
              "[data-dashboard-stat]",
              {
                autoAlpha: 0,
                y: isDesktop ? 28 : 18,
                scale: 0.94,
                duration: 0.62,
                stagger: 0.08,
              },
              "-=0.28"
            )
            .from(
              "[data-dashboard-badge]",
              {
                autoAlpha: 0,
                scale: 0.72,
                duration: 0.45,
                stagger: 0.06,
                ease: "back.out(2.4)",
              },
              "-=0.52"
            );

          gsap.to("[data-dashboard-shell]", {
            y: isDesktop ? -8 : -4,
            scale: isDesktop ? 1.012 : 1.006,
            duration: isDesktop ? 3.8 : 4.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 2,
          });

          gsap.to("[data-dashboard-kpi]", {
            y: (index) => (index % 2 === 0 ? -12 : -8),
            x: (index) => (isDesktop ? [5, -4, 6][index] : 0),
            duration: (index) => (isDesktop ? [2.7, 3.15, 2.9][index] : 4),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.12,
            delay: 2.15,
          });

          gsap.to("[data-dashboard-badge]", {
            scale: isDesktop ? 1.08 : 1.04,
            boxShadow: isDesktop
              ? "0 0 22px rgba(255,178,63,0.28)"
              : "0 0 14px rgba(255,178,63,0.18)",
            duration: 0.85,
            repeat: -1,
            yoyo: true,
            repeatDelay: isDesktop ? 1.2 : 2.4,
            ease: "sine.inOut",
            stagger: 0.18,
            delay: 2.25,
          });

          if (isDesktop) {
            gsap.to("[data-dashboard-shimmer]", {
              keyframes: [
                { xPercent: -60, autoAlpha: 0, duration: 0 },
                { autoAlpha: 0.78, duration: 0.35 },
                { xPercent: 260, duration: 1.7 },
                { autoAlpha: 0, duration: 0.35 },
              ],
              repeat: -1,
              repeatDelay: 1.6,
              ease: "power2.inOut",
              delay: 2.35,
            });

            gsap.to("[data-dashboard-feed]", {
              y: (index) => [-6, 5, -4][index],
              duration: (index) => [2.8, 3.35, 3.05][index],
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              stagger: 0.1,
              delay: 2.25,
            });

            gsap.to("[data-dashboard-stat]", {
              y: (index) => (index === 0 ? -7 : -10),
              scale: 1.015,
              duration: (index) => (index === 0 ? 3.2 : 3.55),
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2.35,
            });
          } else {
            gsap.to("[data-dashboard-stat]", {
              y: -4,
              duration: 4.4,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2.4,
              stagger: 0.18,
            });
          }

          if (isDesktop) {
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
              onClick={() => window.location.href = "https://app.getflaire.fr/login"}
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-white bg-white px-7 text-base font-bold text-[#1B263B] shadow-xl shadow-black/10 backdrop-blur hover:bg-[#F6F8FB] hover:text-[#1B263B]"
            >
              Se connecter
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

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[#FFB23F]/20 blur-3xl" />
          <div data-dashboard-shell className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.15] bg-white/[0.12] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl will-change-transform lg:p-5">
            <div data-dashboard-shimmer className="pointer-events-none absolute -left-1/2 top-0 z-20 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0" />
            <div className="rounded-[1.35rem] bg-[#F8FAFC] p-4 text-[#1B263B]">
              <div className="mb-5 flex items-center justify-between border-b border-[#1B263B]/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#778DA9]">Dashboard</p>
                  <h3 className="text-xl font-bold">Vue commerciale</h3>
                </div>
                <div data-dashboard-badge className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">Live</div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: BarChart3, value: 47, label: "Annonces", suffix: "" },
                  { icon: Bell, value: 12, label: "Alertes", suffix: "" },
                  { icon: Users, value: 8, label: "Prospects", suffix: "" },
                ].map((item) => (
                  <div key={item.label} data-dashboard-kpi className="rounded-2xl border border-[#1B263B]/[0.08] bg-white p-4 shadow-sm will-change-transform">
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
                  <div key={item.title} data-dashboard-feed className="flex items-center justify-between rounded-2xl border border-[#1B263B]/[0.08] bg-white p-3 shadow-sm will-change-transform">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-[#1B263B] p-2">
                        <item.icon className="h-4 w-4 text-[#FFB23F]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">{item.title}</div>
                        <div className="text-xs text-[#778DA9]">{item.meta}</div>
                      </div>
                    </div>
                    <span data-dashboard-badge className="rounded-full bg-[#FFB23F]/[0.12] px-3 py-1 text-xs font-bold text-[#C46E00]">{item.badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div data-dashboard-stat className="rounded-2xl border border-white/[0.15] bg-white/10 p-5 backdrop-blur-xl will-change-transform">
              <div className="text-3xl font-black text-[#FFB23F]">+<MotionCounter value={2000} /></div>
              <div className="mt-1 text-sm text-white/70">Professionnels actifs</div>
            </div>
            <div data-dashboard-stat className="rounded-2xl border border-white/[0.15] bg-white/10 p-5 backdrop-blur-xl will-change-transform">
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
