"use client";

import { useRef, useState } from "react";
import { Check, ArrowUpRight, Building2, UserRound } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

type Audience = "independent" | "agency";
type Billing = "monthly" | "quarterly" | "yearly";

const plans = {
  independent: {
    name: "Pro",
    description: "Pour les indépendants",
    monthly: 29,
    quarterly: 78,
    yearly: 276,
    features: [
      "1 département inclus",
      "Pige immobilière avancée",
      "Alertes illimitées",
      "Surveillance concurrence",
      "Rappels automatiques",
      "Support prioritaire",
    ],
  },
  agency: {
    name: "Enterprise",
    description: "Pour les grandes structures",
    monthly: 79,
    quarterly: 213,
    yearly: 756,
    features: [
      "1 département inclus",
      "3 collaborateurs inclus",
      "Surveillance concurrence",
      "Rappels & gestion d’équipe",
      "Tableau de bord centralisé",
      "Support prioritaire",
    ],
  },
};

const extras = {
  independent: {
    department: { monthly: 15, quarterly: 43, yearly: 153 },
  },
  agency: {
    department: { monthly: 20, quarterly: 57, yearly: 204 },
    user: { monthly: 15, quarterly: 43, yearly: 153 },
  },
};

const billingLabels: Record<Billing, string> = {
  monthly: "/mois",
  quarterly: "/trimestre",
  yearly: "/an",
};

const PricingSection = () => {
  const [audience, setAudience] = useState<Audience>("independent");
  const [billing, setBilling] = useState<Billing>("monthly");
  const pricePanel = useRef<HTMLDivElement>(null);

  const plan = plans[audience];
  const amount =
    billing === "monthly" ? plan.monthly : billing === "quarterly" ? plan.quarterly : plan.yearly;
  const regularTotal =
    billing === "monthly" ? plan.monthly : plan.monthly * (billing === "quarterly" ? 3 : 12);
  const savings = regularTotal - amount;
  const departmentPrice = extras[audience].department[billing];
  const userPrice = audience === "agency" ? extras.agency.user[billing] : null;

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        "[data-price-change]",
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.42, ease: "power3.out", stagger: 0.035 }
      );
    },
    { scope: pricePanel, dependencies: [audience, billing], revertOnUpdate: true }
  );

  return (
    <section id="pricing" className="bg-[#101722] py-24 text-white lg:py-32">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="section-kicker text-[#FFB23F]">Tarifs</p>
            <h2 className="mt-5 text-[clamp(2.5rem,5vw,4.8rem)] font-extrabold leading-[0.96]">
              Simple à choisir.
              <span className="block text-white/35">Facile à rentabiliser.</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/55 lg:pb-2">
            Une formule adaptée à votre organisation, sans engagement et résiliable à tout moment.
          </p>
        </div>

        <div className="mt-16 grid overflow-hidden border border-white/10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="bg-white/[0.035] p-6 sm:p-9 lg:p-12">
            <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-white/35">Votre profil</p>
            <div className="mt-4 grid grid-cols-2 rounded-md border border-white/10 p-1">
              <button
                onClick={() => setAudience("independent")}
                aria-pressed={audience === "independent"}
                className={`flex h-12 items-center justify-center gap-2 rounded-sm text-sm font-extrabold transition-colors ${
                  audience === "independent" ? "bg-white text-[#101722]" : "text-white/55 hover:text-white"
                }`}
              >
                <UserRound className="h-4 w-4" />
                Indépendant
              </button>
              <button
                onClick={() => setAudience("agency")}
                aria-pressed={audience === "agency"}
                className={`flex h-12 items-center justify-center gap-2 rounded-sm text-sm font-extrabold transition-colors ${
                  audience === "agency" ? "bg-white text-[#101722]" : "text-white/55 hover:text-white"
                }`}
              >
                <Building2 className="h-4 w-4" />
                Agence
              </button>
            </div>

            <p className="mt-9 text-xs font-extrabold uppercase tracking-[0.13em] text-white/35">Facturation</p>
            <div className="mt-4 space-y-2">
              {[
                { value: "monthly" as Billing, label: "Mensuel", saving: null },
                { value: "quarterly" as Billing, label: "Trimestriel", saving: "-10%" },
                { value: "yearly" as Billing, label: "Annuel", saving: "-20%" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setBilling(option.value)}
                  aria-pressed={billing === option.value}
                  className={`flex w-full items-center justify-between rounded-md border px-4 py-3.5 text-left text-sm font-bold transition-colors ${
                    billing === option.value
                      ? "border-[#FFB23F] bg-[#FFB23F]/10 text-white"
                      : "border-white/10 text-white/55 hover:border-white/25 hover:text-white"
                  }`}
                >
                  <span>{option.label}</span>
                  {option.saving && (
                    <span className="text-xs font-extrabold text-[#FFB23F]">{option.saving}</span>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-7 text-sm text-white/45">
              <p className="flex justify-between gap-4">
                <span>Département supplémentaire</span>
                <strong className="text-white">+{departmentPrice}€{billingLabels[billing]}</strong>
              </p>
              {userPrice !== null && (
                <p className="mt-4 flex justify-between gap-4">
                  <span>Compte supplémentaire</span>
                  <strong className="text-white">+{userPrice}€{billingLabels[billing]}</strong>
                </p>
              )}
            </div>
          </div>

          <div ref={pricePanel} className="relative bg-white p-6 text-[#101722] sm:p-9 lg:p-12">
            <div className="flex items-start justify-between gap-5">
              <div data-price-change>
                <p className="text-sm font-bold text-[#B56600]">{plan.description}</p>
                <h3 className="mt-2 text-4xl font-black">{plan.name}</h3>
              </div>
              <span className="rounded-full bg-[#FFF3DF] px-3 py-1.5 text-xs font-extrabold text-[#B56600]">
                14 jours gratuits
              </span>
            </div>

            <div data-price-change className="mt-10 flex flex-wrap items-end gap-x-3 gap-y-1">
              <strong className="text-6xl font-black tracking-tight sm:text-7xl">{amount}€</strong>
              <span className="pb-2 text-sm font-bold text-[#778DA9]">{billingLabels[billing]}</span>
            </div>
            {savings > 0 && (
              <p data-price-change className="mt-3 text-sm font-bold text-[#2B7A43]">
                {regularTotal}€ au tarif mensuel · économisez {savings}€
              </p>
            )}

            <div className="my-9 h-px bg-[#DDE4EA]" />

            <ul data-price-change className="grid gap-4 sm:grid-cols-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm font-bold text-[#5F7087]">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#FFF3DF]">
                    <Check className="h-3 w-3 text-[#B56600]" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="https://app.getflaire.fr/login"
              className="button-lift mt-10 flex h-14 w-full items-center justify-center gap-2 rounded-md bg-[#FFB23F] text-sm font-extrabold shadow-[0_16px_40px_rgba(255,178,63,0.22)] hover:bg-[#FFC166]"
            >
              {audience === "independent" ? "Essayer gratuitement 14 jours" : "Nous contacter"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-4 text-center text-xs font-semibold text-[#778DA9]">
              Essai, remises et conditions :{" "}
              <a href="/conditions" className="font-extrabold text-[#B56600] hover:underline">
                voir les conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
