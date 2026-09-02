"use client";

import { useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeEuro,
  BarChart3,
  BellRing,
  Check,
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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/motion/AnimatedSection";
import MotionCounter from "@/components/motion/MotionCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { gsap, useGSAP } from "@/lib/gsap";

const COMMISSION_RATE = 0.3;

const proofPoints = [
  { value: "30 %", label: "Commission récurrente" },
  { value: "Mensuel", label: "Versement des gains" },
  { value: "Illimité", label: "Potentiel de revenus" },
  { value: "48 h", label: "Délai de réponse moyen" },
];

const benefitCards = [
  {
    icon: TrendingUp,
    title: "Un revenu qui s’accumule",
    body: "Chaque recommandation peut continuer à produire de la commission tant que le client reste actif sur GetFlaire.",
  },
  {
    icon: ShieldCheck,
    title: "Une offre facile à recommander",
    body: "Le produit est concret, lisible et déjà aligné avec les besoins de prospection des professionnels de l’immobilier.",
  },
  {
    icon: Gift,
    title: "Des supports prêts à diffuser",
    body: "Argumentaires, visuels et contenus de promotion vous aident à activer votre réseau sans repartir de zéro.",
  },
];

const timelineSteps = [
  {
    step: "01",
    title: "Vous rejoignez le programme",
    body: "On valide votre profil et votre angle de recommandation, puis on vous transmet votre lien partenaire.",
  },
  {
    step: "02",
    title: "Vous activez votre audience",
    body: "Vous partagez GetFlaire dans vos contenus, vos e-mails ou directement auprès de votre portefeuille de contacts.",
  },
  {
    step: "03",
    title: "Vos leads se convertissent",
    body: "Vos filleuls découvrent la plateforme, testent l’offre puis deviennent abonnés en fonction de leurs besoins.",
  },
  {
    step: "04",
    title: "Vous encaissez tous les mois",
    body: "Les commissions sont calculées sur les abonnements actifs et reversées selon le calendrier du programme.",
  },
];

const pricingPlans = [
  { name: "Plan Indépendant", audience: "Pour les agents et indépendants", price: 29, commission: 8.7 },
  { name: "Plan Agence", audience: "Pour les équipes et agences structurées", price: 79, commission: 23.7 },
];

const profiles = [
  "Consultants et coachs immobiliers",
  "Influenceurs ou créateurs de contenu B2B",
  "Formateurs et réseaux de mandataires",
  "Agences, médias ou partenaires logiciels complémentaires",
];

const scenarios = [
  { label: "Starter", monthlyReferrals: 8, averagePrice: 29 },
  { label: "Momentum", monthlyReferrals: 18, averagePrice: 54 },
  { label: "Scale", monthlyReferrals: 32, averagePrice: 79 },
];

const faqs = [
  {
    question: "Quand suis-je payé ?",
    answer: "Les commissions sont versées chaque mois pour les abonnements actifs du mois précédent. Le versement est réalisé via PayPal, avec quelques jours de délai bancaire possibles.",
  },
  {
    question: "Y a-t-il un minimum de paiement ?",
    answer: "Oui. Le seuil minimum est de 50 €. Si le montant n’est pas atteint, il est simplement reporté au cycle de paiement suivant.",
  },
  {
    question: "Combien de temps durent les commissions ?",
    answer: "Tant que le client recommandé reste abonné dans le cadre du programme, vous continuez à percevoir votre part récurrente.",
  },
  {
    question: "Est-ce adapté si je n’ai pas une grosse audience ?",
    answer: "Oui. Le programme est pensé autant pour les créateurs de contenu que pour les consultants, formateurs ou partenaires qui recommandent GetFlaire directement à un réseau qualifié.",
  },
];

const applicationHref =
  "mailto:hello@getflaire.fr?subject=Demande d'adhesion - Programme d'affiliation GetFlaire&body=Bonjour,%0D%0A%0D%0AJe souhaite rejoindre le programme d'affiliation GetFlaire.%0D%0A%0D%0AMes informations :%0D%0A- Nom :%0D%0A- Prenom :%0D%0A- Entreprise :%0D%0A- Site web :%0D%0A- Reseau social principal :%0D%0A%0D%0AMerci de me recontacter pour finaliser mon inscription.%0D%0A%0D%0ACordialement";

export default function Affiliation() {
  const [monthlyReferrals, setMonthlyReferrals] = useState(18);
  const [averagePrice, setAveragePrice] = useState(54);
  const pageRef = useRef<HTMLElement>(null);
  const resultCardRef = useRef<HTMLDivElement>(null);

  const earnings = useMemo(() => {
    const monthly = monthlyReferrals * averagePrice * COMMISSION_RATE;
    return { monthly, yearly: monthly * 12 };
  }, [monthlyReferrals, averagePrice]);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const heroItems = gsap.utils.toArray<HTMLElement>("[data-aff-hero]");
      const dashboardItems = gsap.utils.toArray<HTMLElement>("[data-aff-dashboard]");

      if (reduceMotion) {
        gsap.set([...heroItems, ...dashboardItems], { autoAlpha: 1, y: 0, scale: 1, clearProps: "transform" });
        return;
      }

      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(heroItems, { autoAlpha: 0, y: 28, duration: 0.72, stagger: 0.07 })
        .from(dashboardItems, { autoAlpha: 0, y: 20, scale: 0.98, duration: 0.62, stagger: 0.05 }, "-=0.38");
    },
    { scope: pageRef }
  );

  useGSAP(
    () => {
      if (!resultCardRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(resultCardRef.current, { y: 8, scale: 0.992 }, { y: 0, scale: 1, duration: 0.4, ease: "power2.out" });
    },
    { scope: resultCardRef, dependencies: [monthlyReferrals, averagePrice], revertOnUpdate: true }
  );

  const scrollToCalculator = () => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main ref={pageRef} className="min-h-screen bg-white">
      <Header />

      <section className="relative min-h-[90svh] overflow-hidden bg-[#101722] pt-[4.5rem] text-white">
        <div className="fine-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
        <div className="site-shell relative z-10 grid min-h-[calc(90svh-4.5rem)] items-center gap-12 py-14 lg:grid-cols-[0.86fr_1.14fr] lg:py-16">
          <div className="max-w-xl">
            <div data-aff-hero className="mb-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#FFD699]">
              <Sparkles className="h-4 w-4" />
              Programme partenaire GetFlaire
            </div>
            <h1 data-aff-hero className="text-[clamp(2.8rem,5.4vw,5.5rem)] font-extrabold leading-[0.92]">
              Transformez votre réseau en
              <span className="mt-2 block text-[#FFB23F]">revenu récurrent.</span>
            </h1>
            <p data-aff-hero className="mt-7 max-w-lg text-base leading-7 text-white/65 sm:text-lg">
              Recommandez une solution utile aux professionnels de l’immobilier, suivez votre impact et touchez jusqu’à 30 % de commission récurrente sur les abonnements générés.
            </p>
            <div data-aff-hero className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="button-lift h-14 rounded-md bg-[#FFB23F] px-7 text-sm font-extrabold text-[#101722] shadow-[0_18px_45px_rgba(255,178,63,0.25)] hover:bg-[#FFC166]">
                <a href={applicationHref}>Devenir partenaire<ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button variant="outline" onClick={scrollToCalculator} className="h-14 rounded-md border-white/20 bg-transparent px-7 text-sm font-bold text-white hover:bg-white/10 hover:text-white">
                Estimer mes gains
              </Button>
            </div>
            <div data-aff-hero className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-white/55">
              {["Audience qualifiée", "Offre SaaS concrète", "Support dédié"].map((label) => (
                <span key={label} className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#FFB23F]" />{label}</span>
              ))}
            </div>
          </div>

          <div data-aff-hero className="relative [perspective:1400px]">
            <div className="glass-dark relative rounded-lg p-2.5 sm:p-4">
              <div className="overflow-hidden rounded-md bg-[#F7F9FB] text-[#101722]">
                <div className="flex items-center justify-between border-b border-[#DDE4EA] px-4 py-3.5 sm:px-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-md bg-[#101722] text-[#FFB23F]"><BadgeEuro className="h-5 w-5" /></div>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#778DA9]">Dashboard partenaire</p>
                      <p className="text-sm font-extrabold sm:text-base">Vue affiliation</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#E8F7EC] px-3 py-1.5 text-[10px] font-extrabold text-[#23783A]">EN DIRECT</span>
                </div>

                <div className="grid gap-3 p-3 sm:grid-cols-[1fr_0.9fr] sm:p-5">
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { icon: Users, value: "126", label: "Clics qualifiés" },
                      { icon: UserPlus, value: "18", label: "Inscriptions" },
                      { icon: LineChart, value: "972 €", label: "MRR généré" },
                      { icon: BadgeEuro, value: "291 €", label: "Commission" },
                    ].map(({ icon: Icon, value, label }) => (
                      <div data-aff-dashboard key={label} className="rounded-md border border-[#E1E7ED] bg-white p-3 shadow-sm">
                        <Icon className="mb-3 h-4 w-4 text-[#D77D00]" />
                        <p className="text-xl font-black sm:text-2xl">{value}</p>
                        <p className="mt-1 text-[10px] font-bold text-[#778DA9] sm:text-xs">{label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { icon: Target, title: "Campagne consultants", meta: "Conversion 14,2 %", badge: "Top source" },
                      { icon: BellRing, title: "3 leads engagés", meta: "Prêts à relancer", badge: "À suivre" },
                      { icon: BarChart3, title: "Paiement estimé", meta: "Échéance le 15", badge: "+21 %" },
                    ].map(({ icon: Icon, title, meta, badge }) => (
                      <div data-aff-dashboard key={title} className="rounded-md border border-[#E1E7ED] bg-white p-3 shadow-sm">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex min-w-0 gap-2.5">
                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[#101722] text-[#FFB23F]"><Icon className="h-3.5 w-3.5" /></span>
                            <div className="min-w-0"><p className="truncate text-[11px] font-extrabold">{title}</p><p className="mt-0.5 text-[9px] text-[#778DA9]">{meta}</p></div>
                          </div>
                          <span className="shrink-0 text-[9px] font-extrabold text-[#B56600]">{badge}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div data-aff-dashboard className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-4"><p className="text-2xl font-black text-[#FFB23F]">30 %</p><p className="mt-1 text-xs font-semibold text-white/45">sur chaque abonnement actif</p></div>
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-4"><p className="text-2xl font-black text-[#FFB23F]">Sans plafond</p><p className="mt-1 text-xs font-semibold text-white/45">sur vos recommandations</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#DDE4EA] bg-white">
        <div className="site-shell grid grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point, index) => (
            <div key={point.label} className={`py-7 ${index % 2 === 0 ? "pr-5" : "border-l border-[#DDE4EA] pl-5"} ${index > 1 ? "border-t border-[#DDE4EA] lg:border-t-0" : ""} lg:border-l lg:px-7 lg:first:border-l-0`}>
              <p className="text-2xl font-black text-[#101722]">{point.value}</p>
              <p className="mt-1 text-xs font-bold text-[#778DA9]">{point.label}</p>
            </div>
          ))}
        </div>
      </section>

      <AnimatedSection className="bg-[#F3F6F8] py-24 lg:py-32">
        <div className="site-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div data-animate-item>
              <p className="section-kicker">Pourquoi maintenant</p>
              <h2 className="section-title mt-5 max-w-4xl">Une recommandation utile.<span className="block text-[#778DA9]">Un revenu qui dure.</span></h2>
            </div>
            <p data-animate-item className="section-copy max-w-xl lg:pb-2">Le programme ne repose pas sur une simple promesse de pourcentage, mais sur une solution SaaS claire et facile à recommander à une audience professionnelle.</p>
          </div>
          <div className="mt-16 grid gap-10 border-t border-[#CAD4DC] pt-10 lg:grid-cols-3">
            {benefitCards.map(({ icon: Icon, title, body }, index) => (
              <article data-animate-item key={title} className="lg:border-l lg:border-[#CAD4DC] lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
                <div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-md bg-[#101722] text-[#FFB23F]"><Icon className="h-5 w-5" /></span><span className="font-mono text-xs font-bold text-[#B56600]">0{index + 1}</span></div>
                <h3 className="mt-8 text-2xl font-extrabold leading-tight text-[#101722]">{title}</h3>
                <p className="mt-4 leading-7 text-[#6F8097]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-24 lg:py-32">
        <div className="site-shell">
          <div className="max-w-4xl" data-animate-item>
            <p className="section-kicker">Parcours partenaire</p>
            <h2 className="section-title mt-5">Du premier lien au<span className="block text-[#C66F00]">revenu mensuel.</span></h2>
            <p className="section-copy mt-7 max-w-2xl">Un angle clair, une audience qualifiée et une offre qui convertit : le programme avance en quatre étapes lisibles.</p>
          </div>
          <div className="relative mt-16 grid gap-8 lg:grid-cols-4 lg:gap-0">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-[#CAD4DC] lg:block" />
            {timelineSteps.map((item, index) => (
              <article data-animate-item key={item.step} className="relative border-l border-[#CAD4DC] pl-6 lg:border-l-0 lg:border-r lg:px-7 lg:last:border-r-0 lg:last:pr-0 lg:first:pl-0">
                <div className={`relative z-10 grid h-12 w-12 place-items-center rounded-full text-xs font-black ${index === 0 ? "bg-[#FFB23F] text-[#101722]" : "bg-[#101722] text-white"}`}>{item.step}</div>
                <h3 className="mt-7 text-xl font-extrabold leading-tight text-[#101722]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6F8097]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="overflow-hidden bg-[#101722] py-24 text-white lg:py-32">
        <div className="site-shell">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div data-animate-item><p className="section-kicker text-[#FFB23F]">Commissions</p><h2 className="mt-5 text-[clamp(2.5rem,5.4vw,5rem)] font-extrabold leading-[0.94]">Chaque abonnement compte.</h2></div>
            <p data-animate-item className="max-w-xl text-base leading-7 text-white/55 lg:justify-self-end lg:pb-2">La valeur de votre recommandation est immédiate, puis récurrente. Le programme reste intéressant même avec un volume de leads modéré.</p>
          </div>
          <div className="mt-16 grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div data-animate-item className="space-y-3">
              {pricingPlans.map((plan) => (
                <article key={plan.name} className="rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4"><div><h3 className="text-xl font-extrabold">{plan.name}</h3><p className="mt-1 text-sm text-white/45">{plan.audience}</p></div><span className="text-xs font-extrabold uppercase tracking-[0.1em] text-[#FFB23F]">30 % récurrent</span></div>
                  <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
                    <div><p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-white/35">Abonnement</p><p className="mt-2 text-2xl font-black">{plan.price} €/mois</p></div>
                    <div><p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-white/35">Commission</p><p className="mt-2 text-2xl font-black text-[#FFB23F]">{plan.commission.toFixed(2).replace(".", ",")} €/mois</p></div>
                  </div>
                </article>
              ))}
            </div>
            <div data-animate-item className="border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-white/35">Profils adaptés</p>
              <h3 className="mt-5 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">Qui performe le mieux dans ce programme ?</h3>
              <p className="mt-5 max-w-xl leading-7 text-white/55">Les meilleurs résultats viennent des profils capables de recommander GetFlaire dans une logique de confiance et de preuve métier.</p>
              <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2">
                {profiles.map((profile) => <div key={profile} className="flex min-h-24 items-center gap-3 bg-[#101722] p-5"><ChevronRight className="h-4 w-4 shrink-0 text-[#FFB23F]" /><p className="text-sm font-bold leading-6 text-white/75">{profile}</p></div>)}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="calculator" className="bg-[#F3F6F8] py-24 lg:py-32">
        <div className="site-shell">
          <div className="relative overflow-hidden rounded-lg bg-[#101722] text-white shadow-[0_30px_80px_rgba(16,23,34,0.2)]">
            <div className="fine-grid pointer-events-none absolute inset-0" />
            <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:p-10">
              <div data-animate-item>
                <p className="section-kicker text-[#FFB23F]">Potentiel de gains</p>
                <h2 className="mt-5 text-4xl font-extrabold leading-[0.98] sm:text-5xl">Simulez un scénario réaliste pour votre réseau.</h2>
                <p className="mt-6 leading-7 text-white/55">Ajustez le volume de recommandations et la typologie d’abonnement pour estimer ce que votre canal peut générer sur une base récurrente.</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {scenarios.map((scenario) => {
                    const active = monthlyReferrals === scenario.monthlyReferrals && averagePrice === scenario.averagePrice;
                    return <button key={scenario.label} type="button" aria-pressed={active} onClick={() => { setMonthlyReferrals(scenario.monthlyReferrals); setAveragePrice(scenario.averagePrice); }} className={`rounded-md border px-4 py-2 text-xs font-extrabold transition-colors ${active ? "border-[#FFB23F] bg-[#FFB23F] text-[#101722]" : "border-white/15 bg-white/[0.04] text-white/65 hover:bg-white/10 hover:text-white"}`}>{scenario.label}</button>;
                  })}
                </div>
                <div className="mt-10 space-y-8">
                  <div>
                    <div className="mb-4 flex items-center justify-between text-sm font-bold text-white/70"><label htmlFor="monthly-referrals">Nouveaux filleuls par mois</label><span className="text-[#FFB23F]">{monthlyReferrals}</span></div>
                    <Slider id="monthly-referrals" min={1} max={100} step={1} value={[monthlyReferrals]} onValueChange={([value]) => setMonthlyReferrals(value)} aria-label="Nouveaux filleuls par mois" className="[&_[role=slider]]:border-[#FFB23F] [&_[role=slider]]:bg-white" />
                  </div>
                  <div>
                    <div className="mb-3 flex items-center justify-between text-sm font-bold text-white/70"><label htmlFor="average-price">Typologie d’abonnement</label><span className="text-[#FFB23F]">{averagePrice} €</span></div>
                    <Select value={String(averagePrice)} onValueChange={(value) => setAveragePrice(Number(value))}>
                      <SelectTrigger id="average-price" aria-label="Typologie d’abonnement" className="h-12 rounded-md border-white/15 bg-white/[0.06] px-4 font-bold text-white focus:ring-[#FFB23F]"><SelectValue /></SelectTrigger>
                      <SelectContent><SelectItem value="29">29 € — Plan Pro</SelectItem><SelectItem value="54">54 € — Mix moyen</SelectItem><SelectItem value="79">79 € — Plan Agence</SelectItem></SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div ref={resultCardRef} data-animate-item className="will-change-transform rounded-md bg-white p-5 text-[#101722] sm:p-7">
                <div className="flex items-start justify-between gap-4 border-b border-[#DDE4EA] pb-5"><div><p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#778DA9]">Estimation récurrente</p><h3 className="mt-2 text-2xl font-extrabold">Projection de revenu partenaire</h3></div><span className="shrink-0 text-xs font-extrabold text-[#B56600]">Base 30 %</span></div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-md bg-[#101722] p-5 text-white"><p className="text-xs font-bold text-white/45">Commission mensuelle estimée</p><p className="mt-3 text-4xl font-black text-[#FFB23F]"><MotionCounter value={earnings.monthly} decimals={0} suffix=" €" /></p><p className="mt-2 text-xs text-white/45">pour {monthlyReferrals} nouveaux filleuls par mois</p></div>
                  <div className="rounded-md border border-[#DDE4EA] bg-[#F3F6F8] p-5"><p className="text-xs font-bold text-[#778DA9]">Projection annuelle</p><p className="mt-3 text-4xl font-black"><MotionCounter value={earnings.yearly} decimals={0} suffix=" €" /></p><p className="mt-2 text-xs text-[#778DA9]">si le rythme reste stable sur 12 mois</p></div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-px overflow-hidden rounded-md border border-[#DDE4EA] bg-[#DDE4EA]">
                  {[["Prix moyen", `${averagePrice} €`], ["Taux appliqué", "30 %"], ["Volume mensuel", String(monthlyReferrals)]].map(([label, value]) => <div key={label} className="bg-white p-4"><p className="text-[10px] font-bold text-[#778DA9]">{label}</p><p className="mt-2 text-lg font-black sm:text-xl">{value}</p></div>)}
                </div>
                <p className="mt-5 border-l-2 border-[#FFB23F] pl-4 text-xs leading-6 text-[#5F7087]">Cette simulation est basée sur {monthlyReferrals} nouveaux filleuls par mois avec un abonnement moyen à {averagePrice} €. La valeur réelle dépendra du mix de plans, de la rétention et du cadre exact du programme.</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-24 lg:py-32">
        <div className="site-shell grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <div data-animate-item><p className="section-kicker">FAQ partenaire</p><h2 className="section-title mt-5">Les réponses avant de vous lancer.</h2><p className="section-copy mt-7 max-w-lg">Paiement, durée des commissions, niveau de volume requis et fonctionnement global : l’essentiel est ici.</p></div>
          <div data-animate-item>
            <Accordion type="single" collapsible className="w-full border-t border-[#CAD4DC]">
              {faqs.map((item, index) => <AccordionItem key={item.question} value={`item-${index}`} className="border-[#CAD4DC]"><AccordionTrigger className="py-6 text-left text-base font-extrabold text-[#101722] hover:no-underline sm:text-lg">{item.question}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 text-base leading-7 text-[#6F8097]">{item.answer}</AccordionContent></AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative overflow-hidden bg-[#FFB23F] py-20 text-[#101722] lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(16,23,34,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(16,23,34,.2)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="site-shell relative z-10">
          <div data-animate-item className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.13em]"><Sparkles className="h-4 w-4" />Activation rapide</div>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 data-animate-item className="max-w-5xl text-[clamp(2.7rem,6vw,6rem)] font-black leading-[0.9]">Votre réseau mérite une offre qui convertit.</h2>
              <p data-animate-item className="mt-7 max-w-2xl text-base font-semibold leading-7 text-[#101722]/65">Candidatez en quelques minutes. Nous revenons vers vous avec le cadre du programme, les ressources disponibles et la meilleure façon d’activer votre canal.</p>
              <div data-animate-item className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">{["Programme gratuit", "Support dédié", "Réponse sous 48 h"].map((label) => <span key={label} className="inline-flex items-center gap-2"><Check className="h-4 w-4" />{label}</span>)}</div>
            </div>
            <div data-animate-item className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild className="button-lift h-14 rounded-md bg-[#101722] px-7 font-extrabold text-white hover:bg-[#1B263B]"><a href={applicationHref}><Mail className="mr-2 h-4 w-4" />Postuler maintenant</a></Button>
              <Button asChild variant="outline" className="h-14 rounded-md border-[#101722]/30 bg-transparent px-7 font-extrabold text-[#101722] hover:bg-[#101722]/10 hover:text-[#101722]"><a href="/contact"><Phone className="mr-2 h-4 w-4" />Nous contacter</a></Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
