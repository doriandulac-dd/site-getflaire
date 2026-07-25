"use client";

import { useRef } from "react";
import { BellRing, Radar, Target, ArrowUpRight, Check } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

const stories = [
  {
    number: "01",
    eyebrow: "Détecter",
    title: "Votre marché, sous surveillance.",
    description:
      "GetFlaire analyse les nouvelles annonces selon vos zones et vos critères pour faire remonter les opportunités qui comptent.",
    bullets: ["Veille continue", "Filtres géographiques précis", "Concurrence suivie"],
    icon: Radar,
    image: "/1.jpg",
    alt: "Tableau de bord GetFlaire",
  },
  {
    number: "02",
    eyebrow: "Réagir",
    title: "La bonne alerte, au bon moment.",
    description:
      "Recevez les opportunités qualifiées dès leur publication et concentrez votre énergie sur les contacts les plus prometteurs.",
    bullets: ["Alertes en temps réel", "Priorités visibles", "Historique centralisé"],
    icon: BellRing,
    image: "/2.jpg",
    alt: "Alertes intelligentes GetFlaire",
  },
  {
    number: "03",
    eyebrow: "Convertir",
    title: "Chaque relance reste en mouvement.",
    description:
      "Notes, rappels et suivi commercial vivent dans le même espace pour transformer plus vite une détection en mandat.",
    bullets: ["CRM intégré", "Rappels automatiques", "Collaboration d’équipe"],
    icon: Target,
    image: "/3.jpg",
    alt: "CRM intégré GetFlaire",
  },
];

const ProductFrame = ({ story, index }: { story: (typeof stories)[number]; index: number }) => {
  const Icon = story.icon;

  return (
    <div className="relative h-full overflow-hidden rounded-lg border border-white/10 bg-[#151F2F] p-3 shadow-[0_35px_90px_rgba(0,0,0,0.34)] sm:p-5">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-[#FFB23F] text-[#101722]">
            <Icon className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-white/35">GetFlaire</p>
            <p className="text-sm font-extrabold text-white">{story.eyebrow}</p>
          </div>
        </div>
        <span className="font-mono text-xs font-bold text-[#FFB23F]">{story.number}</span>
      </div>

      <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-md bg-white">
        <img src={story.image} alt={story.alt} className="h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 border border-black/5" />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          ["Signal", index === 0 ? "47" : index === 1 ? "12" : "8"],
          ["Vitesse", index === 0 ? "24/7" : index === 1 ? "< 1 min" : "Auto"],
          ["Statut", index === 2 ? "Suivi" : "Actif"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2.5">
            <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/35">{label}</p>
            <p className="mt-1 text-xs font-extrabold text-white">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductStorySection = () => {
  const scope = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);

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
            gsap.set("[data-story-copy], [data-story-media], [data-story-mobile]", {
              autoAlpha: 1,
              x: 0,
              y: 0,
            });
            return;
          }

          if (!desktop) {
            gsap.from("[data-story-mobile]", {
              autoAlpha: 0,
              y: 36,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.08,
              scrollTrigger: {
                trigger: scope.current,
                start: "top 76%",
                once: true,
              },
            });
            return;
          }

          const copies = gsap.utils.toArray<HTMLElement>("[data-story-copy]");
          const media = gsap.utils.toArray<HTMLElement>("[data-story-media]");
          gsap.set(copies.slice(1), { autoAlpha: 0, y: 34 });
          gsap.set(media.slice(1), { autoAlpha: 0, y: 54, scale: 0.94 });

          const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: stage.current,
              start: "top top",
              end: "+=2200",
              pin: true,
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          });

          timeline
            .to("[data-story-progress]", { scaleY: 0.5, transformOrigin: "top", duration: 1 })
            .to(copies[0], { autoAlpha: 0, y: -30, duration: 0.32 }, 0.68)
            .to(media[0], { autoAlpha: 0, y: -44, scale: 0.96, duration: 0.32 }, 0.68)
            .to(copies[1], { autoAlpha: 1, y: 0, duration: 0.32 }, 0.72)
            .to(media[1], { autoAlpha: 1, y: 0, scale: 1, duration: 0.38 }, 0.72)
            .to("[data-story-progress]", { scaleY: 0.75, duration: 1 }, 1)
            .to(copies[1], { autoAlpha: 0, y: -30, duration: 0.32 }, 1.68)
            .to(media[1], { autoAlpha: 0, y: -44, scale: 0.96, duration: 0.32 }, 1.68)
            .to(copies[2], { autoAlpha: 1, y: 0, duration: 0.32 }, 1.72)
            .to(media[2], { autoAlpha: 1, y: 0, scale: 1, duration: 0.38 }, 1.72)
            .to("[data-story-progress]", { scaleY: 1, duration: 1 }, 2);
        }
      );

      return () => mm.revert();
    },
    { scope }
  );

  return (
    <section ref={scope} id="product" className="overflow-hidden bg-[#101722] text-white">
      <div className="site-shell pb-10 pt-24 lg:pb-0 lg:pt-32">
        <p className="section-kicker text-[#FFB23F]">Le produit en action</p>
        <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <h2 className="max-w-3xl text-[clamp(2.6rem,6vw,5.6rem)] font-extrabold leading-[0.94]">
            Un seul cockpit.
            <span className="block text-white/35">Trois temps d’avance.</span>
          </h2>
          <p className="max-w-lg text-base leading-7 text-white/55 lg:pb-2">
            De la première annonce à la relance décisive, GetFlaire garde votre prospection lisible, rapide et structurée.
          </p>
        </div>
      </div>

      <div ref={stage} className="hidden min-h-screen items-center lg:flex">
        <div className="site-shell grid grid-cols-[0.78fr_1.22fr] items-center gap-14">
          <div className="relative min-h-[24rem] border-l border-white/10 pl-10">
            <span
              data-story-progress
              className="absolute -left-px top-0 h-full w-px origin-top bg-[#FFB23F] [transform:scaleY(.25)]"
            />
            {stories.map((story) => (
              <article key={story.number} data-story-copy className="absolute inset-y-0 left-10 flex max-w-md flex-col justify-center">
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-mono text-sm font-bold text-[#FFB23F]">{story.number}</span>
                  <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-white/40">{story.eyebrow}</span>
                </div>
                <h3 className="text-5xl font-extrabold leading-[0.98]">{story.title}</h3>
                <p className="mt-6 text-lg leading-8 text-white/55">{story.description}</p>
                <ul className="mt-7 space-y-3">
                  {story.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-sm font-bold text-white/75">
                      <Check className="h-4 w-4 text-[#FFB23F]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="relative h-[37rem]">
            {stories.map((story, index) => (
              <div key={story.number} data-story-media className="absolute inset-0 will-change-transform">
                <ProductFrame story={story} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="site-shell space-y-20 pb-24 pt-16 lg:hidden">
        {stories.map((story, index) => (
          <article key={story.number} data-story-mobile>
            <div className="mb-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-[#FFB23F]">{story.number}</span>
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-white/40">{story.eyebrow}</span>
              </div>
              <h3 className="text-4xl font-extrabold leading-none">{story.title}</h3>
              <p className="mt-5 leading-7 text-white/55">{story.description}</p>
            </div>
            <ProductFrame story={story} index={index} />
          </article>
        ))}
      </div>

      <div className="site-shell flex justify-end pb-24 lg:-mt-16 lg:pb-28">
        <a
          href="https://app.getflaire.fr/login"
          className="inline-flex items-center gap-2 border-b border-[#FFB23F] pb-2 text-sm font-extrabold text-[#FFB23F] transition-colors hover:text-[#FFD699]"
        >
          Explorer GetFlaire
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default ProductStorySection;
