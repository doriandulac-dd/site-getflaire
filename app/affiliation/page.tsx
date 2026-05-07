"use client";

import { useMemo, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/motion/AnimatedSection";
import MotionCounter from "@/components/motion/MotionCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { gsap, useGSAP } from "@/lib/gsap";
import {
  ArrowRight,
  BadgeEuro,
  BarChart3,
  BellRing,
  CheckCircle2,
  ChevronRight,
  Gift,
  LineChart,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserPlus,
  Users,
} from "lucide-react";

const COMMISSION_RATE = 0.3;

const proofPoints = [
  { value: "30%", label: "commission recurrente" },
  { value: "Mensuel", label: "versement des gains" },
  { value: "Illimite", label: "potentiel de revenus" },
  { value: "48h", label: "delai de reponse moyen" },
];

const benefitCards = [
  {
    icon: TrendingUp,
    title: "Un revenu qui s'accumule",
    body: "Chaque recommandation peut continuer a produire de la commission tant que le client reste actif sur GetFlaire.",
  },
  {
    icon: ShieldCheck,
    title: "Une offre facile a recommander",
    body: "Le produit est concret, lisible et deja aligne avec les besoins de prospection des professionnels de l'immobilier.",
  },
  {
    icon: Gift,
    title: "Des supports prets a diffuser",
    body: "Argumentaires, visuels et contenus de promotion vous aident a activer votre reseau sans repartir de zero.",
  },
];

const timelineSteps = [
  {
    step: "01",
    title: "Vous rejoignez le programme",
    body: "On valide votre profil, votre angle de recommandation et on vous transmet votre lien partenaire.",
    accent: "from-[#FFB23F] to-[#FF8F00]",
  },
  {
    step: "02",
    title: "Vous activez votre audience",
    body: "Vous partagez GetFlaire dans vos contenus, vos e-mails ou directement a votre portefeuille de contacts.",
    accent: "from-[#1B263B] to-[#42526B]",
  },
  {
    step: "03",
    title: "Vos leads se convertissent",
    body: "Vos filleuls decouvrent la plateforme, testent l'offre puis deviennent abonnes en fonction de leur besoin.",
    accent: "from-[#0F766E] to-[#14B8A6]",
  },
  {
    step: "04",
    title: "Vous encaissez tous les mois",
    body: "Les commissions sont calculees sur les abonnements actifs et reversees selon le calendrier du programme.",
    accent: "from-[#C46E00] to-[#FFB23F]",
  },
];

const pricingPlans = [
  {
    name: "Plan Independant",
    audience: "Pour les agents et independants",
    price: 29,
    commission: 8.7,
  },
  {
    name: "Plan Agence",
    audience: "Pour les equipes et agences structurees",
    price: 79,
    commission: 23.7,
  },
];

const profiles = [
  "Consultants et coachs immobilier",
  "Influenceurs ou createurs de contenu B2B",
  "Formateurs et reseaux de mandataires",
  "Agences, media ou partenaires logiciels complementaires",
];

const scenarios = [
  { label: "Starter", monthlyReferrals: 8, averagePrice: 29 },
  { label: "Momentum", monthlyReferrals: 18, averagePrice: 54 },
  { label: "Scale", monthlyReferrals: 32, averagePrice: 79 },
];

const faqs = [
  {
    question: "Quand suis-je paye ?",
    answer:
      "Les commissions sont versees chaque mois pour les abonnements actifs du mois precedent. Le versement est realise via PayPal, avec quelques jours de delai bancaire possibles.",
  },
  {
    question: "Y a-t-il un minimum de paiement ?",
    answer:
      "Oui. Le seuil minimum est de 50EUR. Si le montant n'est pas atteint, il est simplement reporte au cycle de paiement suivant.",
  },
  {
    question: "Combien de temps durent les commissions ?",
    answer:
      "Tant que le client recommande reste abonne dans le cadre du programme, vous continuez a percevoir votre part recurrente.",
  },
  {
    question: "Est-ce adapte si je n'ai pas une grosse audience ?",
    answer:
      "Oui. La page est pensee autant pour les createurs de contenu que pour les consultants, formateurs ou partenaires qui recommandent GetFlaire en direct a un reseau qualifie.",
  },
];

const scrollToCalculator = () => {
  const element = document.getElementById("calculator");
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

const applicationHref =
  "mailto:hello@getflaire.fr?subject=Demande d'adhesion - Programme d'affiliation GetFlaire&body=Bonjour,%0D%0A%0D%0AJe souhaite rejoindre le programme d'affiliation GetFlaire.%0D%0A%0D%0AMes informations :%0D%0A- Nom :%0D%0A- Prenom :%0D%0A- Entreprise :%0D%0A- Site web :%0D%0A- Reseau social principal :%0D%0A%0D%0AMerci de me recontacter pour finaliser mon inscription.%0D%0A%0D%0ACordialement";

export default function Affiliation() {
  const [monthlyReferrals, setMonthlyReferrals] = useState(18);
  const [averagePrice, setAveragePrice] = useState(54);
  const pageRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const resultCardRef = useRef<HTMLDivElement>(null);

  const earnings = useMemo(() => {
    const monthly = monthlyReferrals * averagePrice * COMMISSION_RATE;
    return {
      monthly,
      yearly: monthly * 12,
    };
  }, [monthlyReferrals, averagePrice]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia(pageRef);

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          isDesktop: "(min-width: 1024px)",
        },
        ({ conditions }) => {
          const reduceMotion = Boolean(conditions?.reduceMotion);

          if (reduceMotion) {
            gsap.set("[data-aff-hero-item]", { autoAlpha: 1, y: 0, scale: 1 });
            gsap.set("[data-aff-dashboard-card]", { autoAlpha: 1, y: 0, scale: 1 });
            return;
          }

          const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
          heroTimeline
            .from("[data-aff-hero-item]", {
              autoAlpha: 0,
              y: 36,
              duration: 0.88,
              stagger: 0.08,
            })
            .from(
              "[data-aff-dashboard-card]",
              {
                autoAlpha: 0,
                y: 28,
                scale: 0.96,
                duration: 0.82,
                stagger: 0.06,
              },
              "-=0.42"
            );

          if (timelineRef.current) {
            const axis =
              conditions?.isDesktop
                ? timelineRef.current.querySelector("[data-timeline-axis-desktop]")
                : timelineRef.current.querySelector("[data-timeline-axis-mobile]");

            const cards = gsap.utils.toArray<HTMLElement>("[data-timeline-card]");

            if (axis) {
              gsap.set(axis, {
                transformOrigin: conditions?.isDesktop ? "left center" : "center top",
                scaleX: conditions?.isDesktop ? 0 : 1,
                scaleY: conditions?.isDesktop ? 1 : 0,
              });

              gsap.to(axis, {
                scaleX: 1,
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: timelineRef.current,
                  start: "top 72%",
                  end: "bottom 35%",
                  scrub: true,
                },
              });
            }

            cards.forEach((card) => {
              gsap.from(card, {
                autoAlpha: 0,
                y: conditions?.isDesktop ? 32 : 20,
                duration: 0.85,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 82%",
                  once: true,
                },
              });
            });
          }
        }
      );

      return () => mm.revert();
    },
    { scope: pageRef }
  );

  useGSAP(
    () => {
      if (!resultCardRef.current) return;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) return;

      gsap.fromTo(
        resultCardRef.current,
        {
          y: 10,
          scale: 0.985,
          boxShadow: "0 18px 45px rgba(255,178,63,0.12)",
        },
        {
          y: 0,
          scale: 1,
          duration: 0.55,
          ease: "power2.out",
          boxShadow: "0 28px 70px rgba(255,178,63,0.22)",
          clearProps: "boxShadow",
        }
      );
    },
    { scope: resultCardRef, dependencies: [monthlyReferrals, averagePrice] }
  );

  return (
    <main ref={pageRef} className="min-h-screen bg-white">
      <Header />

      <section className="relative overflow-hidden bg-[#0F1722] pt-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(255,178,63,0.30),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(119,141,169,0.20),transparent_30rem),linear-gradient(135deg,#0F1722_0%,#182336_45%,#243247_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F6F8FB] to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div
              data-aff-hero-item
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#FFB23F]/25 bg-[#FFB23F]/10 px-4 py-2 text-sm font-semibold text-[#FFD699]"
            >
              <Sparkles className="h-4 w-4" />
              Programme partenaire GetFlaire
            </div>

            <h1
              data-aff-hero-item
              className="max-w-4xl text-4xl font-bold leading-[1.02] text-white sm:text-5xl lg:text-6xl"
            >
              Transformez votre reseau en revenu recurrent avec l'affiliation GetFlaire.
            </h1>

            <p
              data-aff-hero-item
              className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.74]"
            >
              Recommandez une solution utile aux professionnels de l'immobilier, suivez votre impact et
              touchez jusqu'a 30% de commission recurrente sur les abonnements generes.
            </p>

            <div data-aff-hero-item className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-14 rounded-full bg-[#FFB23F] px-7 text-base font-bold text-[#1B263B] shadow-2xl shadow-[#FFB23F]/30 hover:bg-[#FF8F00]"
                onClick={() => {
                  window.location.href = applicationHref;
                }}
              >
                Devenir partenaire
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToCalculator}
                className="h-14 rounded-full border-white bg-white text-base font-bold text-[#1B263B] shadow-xl shadow-black/10 hover:bg-[#F6F8FB]"
              >
                Estimer mes gains
              </Button>
            </div>

            <div
              data-aff-hero-item
              className="mt-8 grid max-w-xl grid-cols-1 gap-3 text-sm text-white/[0.74] sm:grid-cols-3"
            >
              {["Audience qualifiee", "Offre SaaS concrete", "Support dedie"].map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FFB23F]" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div data-aff-hero-item className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[#FFB23F]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.15] bg-white/[0.12] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:p-5">
              <div className="rounded-[1.45rem] bg-[#F8FAFC] p-4 text-[#1B263B]">
                <div className="mb-5 flex items-center justify-between border-b border-[#1B263B]/10 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#778DA9]">
                      Dashboard partenaire
                    </p>
                    <h3 className="text-xl font-bold">Vue affiliation</h3>
                  </div>
                  <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                    Tracking live
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Users, value: "126", label: "clics qualifies" },
                    { icon: UserPlus, value: "18", label: "inscriptions" },
                    { icon: LineChart, value: "972EUR", label: "MRR genere" },
                    { icon: BadgeEuro, value: "291EUR", label: "commission mensuelle" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      data-aff-dashboard-card
                      className="rounded-2xl border border-[#1B263B]/[0.08] bg-white p-4 shadow-sm"
                    >
                      <item.icon className="mb-3 h-5 w-5 text-[#FFB23F]" />
                      <div className="text-2xl font-black">{item.value}</div>
                      <div className="mt-1 text-xs font-semibold text-[#778DA9]">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    {
                      icon: Target,
                      title: "Campagne consultants immobilier",
                      meta: "Taux de conversion 14,2%",
                      badge: "Top source",
                    },
                    {
                      icon: BellRing,
                      title: "3 leads tres engages cette semaine",
                      meta: "Pret a relancer",
                      badge: "A suivre",
                    },
                    {
                      icon: BarChart3,
                      title: "Paiement du mois estime",
                      meta: "Prochaine echeance le 15",
                      badge: "+21%",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      data-aff-dashboard-card
                      className="flex items-center justify-between rounded-2xl border border-[#1B263B]/[0.08] bg-white p-3 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-[#1B263B] p-2">
                          <item.icon className="h-4 w-4 text-[#FFB23F]" />
                        </div>
                        <div>
                          <div className="text-sm font-bold">{item.title}</div>
                          <div className="text-xs text-[#778DA9]">{item.meta}</div>
                        </div>
                      </div>
                      <span className="rounded-full bg-[#FFB23F]/[0.12] px-3 py-1 text-xs font-bold text-[#C46E00]">
                        {item.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div data-aff-hero-item className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/[0.15] bg-white/10 p-5 backdrop-blur-xl">
                <div className="text-3xl font-black text-[#FFB23F]">30%</div>
                <div className="mt-1 text-sm text-white/70">sur chaque abonnement actif</div>
              </div>
              <div className="rounded-2xl border border-white/[0.15] bg-white/10 p-5 backdrop-blur-xl">
                <div className="text-3xl font-black text-[#FFB23F]">Sans plafond</div>
                <div className="mt-1 text-sm text-white/70">sur vos recommandations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-20">
        <section className="mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 rounded-[2rem] border border-white/80 bg-white/[0.88] p-5 shadow-[0_28px_90px_rgba(27,38,59,0.10)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
            {proofPoints.map((point) => (
              <div key={point.label} className="rounded-2xl border border-[#1B263B]/10 bg-[#F8FAFC] px-5 py-4">
                <div className="text-2xl font-black text-[#1B263B]">{point.value}</div>
                <div className="mt-1 text-sm font-medium text-[#62738B]">{point.label}</div>
              </div>
            ))}
          </div>
        </section>

        <AnimatedSection
          as="section"
          className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="mb-10 max-w-3xl" data-animate-item>
            <span className="section-eyebrow">Pourquoi maintenant</span>
            <h2 className="mt-5 text-3xl font-bold text-[#1B263B] sm:text-4xl">
              Une landing d'affiliation qui parle autant business que produit.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#62738B]">
              Le programme ne repose pas sur une simple promesse de pourcentage. Il repose sur une
              solution SaaS claire, utile et facile a recommander a une audience professionnelle.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {benefitCards.map((card) => (
              <article
                key={card.title}
                data-animate-item
                className="premium-card rounded-[2rem] p-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1B263B]">
                  <card.icon className="h-6 w-6 text-[#FFB23F]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1B263B]">{card.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#62738B]">{card.body}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <section
          ref={timelineRef}
          className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <AnimatedSection className="mb-10" staggerSelector="[data-animate-item]">
            <div className="max-w-3xl" data-animate-item>
              <span className="section-eyebrow">Parcours partenaire</span>
              <h2 className="mt-5 text-3xl font-bold text-[#1B263B] sm:text-4xl">
                Une progression simple, avec une monetisation lisible a chaque etape.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#62738B]">
                Vous n'avez pas besoin d'un dispositif complexe. Il vous faut un angle clair, une
                audience qualifiee et une offre qui convertit.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative mt-12 grid gap-6 lg:grid-cols-4">
            <div
              data-timeline-axis-desktop
              className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-[2px] rounded-full bg-gradient-to-r from-[#FFB23F] via-[#1B263B] to-[#14B8A6] lg:block"
            />
            <div
              data-timeline-axis-mobile
              className="absolute bottom-8 left-6 top-6 w-[2px] rounded-full bg-gradient-to-b from-[#FFB23F] via-[#1B263B] to-[#14B8A6] lg:hidden"
            />

            {timelineSteps.map((item) => (
              <article
                key={item.step}
                data-timeline-card
                className="relative rounded-[2rem] border border-[#1B263B]/10 bg-white p-6 shadow-[0_24px_80px_rgba(27,38,59,0.08)] lg:pt-14"
              >
                <div className="absolute left-5 top-5 flex items-center gap-4 lg:left-1/2 lg:top-0 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex-col">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${item.accent} text-sm font-black text-white shadow-lg`}
                  >
                    {item.step}
                  </div>
                </div>
                <div className="pl-16 lg:pl-0">
                  <h3 className="text-xl font-bold text-[#1B263B]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#62738B]">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnimatedSection
          as="section"
          className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div data-animate-item className="premium-panel rounded-[2rem] p-8">
              <span className="section-eyebrow">Commissions</span>
              <h2 className="mt-5 text-3xl font-bold text-[#1B263B]">Ce que vaut chaque abonnement recommande.</h2>
              <p className="mt-4 text-lg leading-8 text-[#62738B]">
                La valeur de votre recommandation est immediate, puis recurrente. C'est ce qui rend le
                programme interessant meme avec un volume de leads modere.
              </p>
              <div className="mt-8 space-y-4">
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className="rounded-[1.6rem] border border-[#1B263B]/10 bg-[#F8FAFC] p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#1B263B]">{plan.name}</h3>
                        <p className="mt-1 text-sm text-[#62738B]">{plan.audience}</p>
                      </div>
                      <div className="rounded-full bg-[#FFB23F]/12 px-4 py-2 text-sm font-bold text-[#C46E00]">
                        30% recurrent
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <div className="text-sm font-medium text-[#778DA9]">Abonnement</div>
                        <div className="mt-2 text-2xl font-black text-[#1B263B]">{plan.price}EUR/mois</div>
                      </div>
                      <div className="rounded-2xl bg-[#1B263B] p-4 text-white shadow-sm">
                        <div className="text-sm font-medium text-white/70">Commission</div>
                        <div className="mt-2 text-2xl font-black text-[#FFB23F]">
                          {plan.commission.toFixed(2)}EUR/mois
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-animate-item className="premium-card rounded-[2rem] p-8">
              <span className="section-eyebrow">Profils adaptes</span>
              <h3 className="mt-5 text-3xl font-bold text-[#1B263B]">
                Qui performe le mieux dans ce programme ?
              </h3>
              <p className="mt-4 text-lg leading-8 text-[#62738B]">
                Les meilleurs resultats viennent souvent des profils capables de recommander GetFlaire
                dans une logique de confiance et de preuve metier.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {profiles.map((profile) => (
                  <div
                    key={profile}
                    className="flex gap-3 rounded-2xl border border-[#1B263B]/10 bg-white p-4 shadow-sm"
                  >
                    <div className="mt-1 rounded-full bg-[#FFB23F]/15 p-2">
                      <ChevronRight className="h-4 w-4 text-[#C46E00]" />
                    </div>
                    <p className="text-sm font-medium leading-6 text-[#1B263B]">{profile}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="calculator"
          as="section"
          className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#101827_0%,#1B263B_52%,#2D3543_100%)] text-white shadow-[0_40px_120px_rgba(16,24,39,0.34)]">
            <div className="grid gap-8 px-6 py-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-10">
              <div data-animate-item>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80">
                  Potentiel de gains
                </span>
                <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                  Simulez un scenario realiste pour votre reseau.
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/72">
                  Ajustez le volume de recommandations et la typologie d'abonnement pour estimer ce que
                  votre canal peut generer sur une base recurrente.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {scenarios.map((scenario) => {
                    const active =
                      monthlyReferrals === scenario.monthlyReferrals &&
                      averagePrice === scenario.averagePrice;

                    return (
                      <button
                        key={scenario.label}
                        type="button"
                        onClick={() => {
                          setMonthlyReferrals(scenario.monthlyReferrals);
                          setAveragePrice(scenario.averagePrice);
                        }}
                        className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                          active
                            ? "border-[#FFB23F] bg-[#FFB23F] text-[#1B263B]"
                            : "border-white/15 bg-white/10 text-white/80 hover:bg-white/16"
                        }`}
                      >
                        {scenario.label}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <div className="mb-3 flex items-center justify-between text-sm text-white/80">
                      <label htmlFor="monthly-referrals">Nouveaux filleuls par mois</label>
                      <span className="font-bold text-[#FFB23F]">{monthlyReferrals}</span>
                    </div>
                    <input
                      id="monthly-referrals"
                      type="range"
                      min="1"
                      max="100"
                      value={monthlyReferrals}
                      onChange={(event) => setMonthlyReferrals(parseInt(event.target.value, 10))}
                      className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-[#FFB23F]"
                    />
                  </div>

                  <div>
                    <div className="mb-3 flex items-center justify-between text-sm text-white/80">
                      <label htmlFor="average-price">Typologie d'abonnement</label>
                      <span className="font-bold text-[#FFB23F]">{averagePrice}EUR</span>
                    </div>
                    <select
                      id="average-price"
                      value={averagePrice}
                      onChange={(event) => setAveragePrice(parseInt(event.target.value, 10))}
                      className="h-14 w-full rounded-2xl border border-white/15 bg-white/10 px-4 text-base font-semibold text-white outline-none backdrop-blur"
                    >
                      <option value="29" className="text-black">
                        29EUR - Plan Pro
                      </option>
                      <option value="54" className="text-black">
                        54EUR - Mix moyen
                      </option>
                      <option value="79" className="text-black">
                        79EUR - Plan Agence
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div
                ref={resultCardRef}
                data-animate-item
                className="rounded-[1.8rem] border border-white/15 bg-white/[0.08] p-5 backdrop-blur-xl"
              >
                <div className="rounded-[1.45rem] bg-white p-6 text-[#1B263B] shadow-[0_24px_90px_rgba(16,24,39,0.18)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#778DA9]">
                        Estimation recurrente
                      </p>
                      <h3 className="mt-2 text-2xl font-bold">Projection de revenu partenaire</h3>
                    </div>
                    <div className="rounded-full bg-[#FFB23F]/12 px-3 py-1 text-xs font-bold text-[#C46E00]">
                      Base 30%
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.4rem] bg-[#1B263B] p-5 text-white">
                      <div className="text-sm font-medium text-white/70">Commission mensuelle estimee</div>
                      <div className="mt-3 text-4xl font-black text-[#FFB23F]">
                        <MotionCounter value={earnings.monthly} decimals={0} suffix="EUR" />
                      </div>
                      <div className="mt-2 text-sm text-white/70">
                        pour {monthlyReferrals} nouveaux filleuls / mois
                      </div>
                    </div>
                    <div className="rounded-[1.4rem] bg-[#F8FAFC] p-5">
                      <div className="text-sm font-medium text-[#778DA9]">Projection annuelle</div>
                      <div className="mt-3 text-4xl font-black text-[#1B263B]">
                        <MotionCounter value={earnings.yearly} decimals={0} suffix="EUR" />
                      </div>
                      <div className="mt-2 text-sm text-[#62738B]">
                        si le rythme mensuel reste stable sur 12 mois
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-[#1B263B]/10 bg-[#F8FAFC] p-4">
                      <div className="text-sm font-medium text-[#778DA9]">Prix moyen</div>
                      <div className="mt-2 text-2xl font-black text-[#1B263B]">{averagePrice}EUR</div>
                    </div>
                    <div className="rounded-2xl border border-[#1B263B]/10 bg-[#F8FAFC] p-4">
                      <div className="text-sm font-medium text-[#778DA9]">Taux applique</div>
                      <div className="mt-2 text-2xl font-black text-[#1B263B]">30%</div>
                    </div>
                    <div className="rounded-2xl border border-[#1B263B]/10 bg-[#F8FAFC] p-4">
                      <div className="text-sm font-medium text-[#778DA9]">Volume mensuel</div>
                      <div className="mt-2 text-2xl font-black text-[#1B263B]">{monthlyReferrals}</div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.4rem] bg-[#FFB23F]/12 p-5">
                    <p className="text-sm leading-7 text-[#4B5B73]">
                      Cette simulation est basee sur {monthlyReferrals} nouveaux filleuls par mois avec un
                      abonnement moyen a {averagePrice}EUR. La valeur reelle dependra du mix de plans, de la
                      retention et du cadre exact du programme.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          as="section"
          className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div data-animate-item className="max-w-xl">
              <span className="section-eyebrow">FAQ partenaire</span>
              <h2 className="mt-5 text-3xl font-bold text-[#1B263B] sm:text-4xl">
                Les questions qui reviennent avant de rejoindre le programme.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#62738B]">
                On a garde une FAQ concise pour lever les frictions principales: paiement, duree des
                commissions, niveau de volume requis et fonctionnement global.
              </p>
            </div>

            <div data-animate-item className="premium-card rounded-[2rem] p-6 sm:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={`item-${index}`}
                    className="border-b border-[#1B263B]/10"
                  >
                    <AccordionTrigger className="py-5 text-left text-base font-semibold text-[#1B263B] hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-base leading-7 text-[#62738B]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          as="section"
          className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div
            data-animate-item
            className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#FFB23F] to-[#FF8F00] p-8 text-white shadow-[0_35px_90px_rgba(255,178,63,0.28)] sm:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold">
                  Activation rapide
                </span>
                <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                  Vous avez deja l'audience, le reseau ou la credibilite. Il ne manque qu'une offre qui convertit.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/88">
                  Candidatez en quelques minutes et on revient vers vous avec le cadre du programme, les
                  ressources disponibles et la meilleure facon d'activer votre canal.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-white/90">
                  {["Programme gratuit", "Support dedie", "Reponse sous 48h"].map((label) => (
                    <div key={label} className="rounded-full bg-white/14 px-4 py-2">
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  size="lg"
                  className="h-14 rounded-full bg-white text-base font-bold text-[#1B263B] shadow-lg hover:bg-[#F6F8FB]"
                  onClick={() => {
                    window.location.href = applicationHref;
                  }}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Postuler maintenant
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 rounded-full border-white bg-transparent text-base font-bold text-white hover:bg-white hover:text-[#1B263B]"
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Nous contacter
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </main>
  );
}
