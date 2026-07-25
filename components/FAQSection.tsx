"use client";

import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import AnimatedSection from "@/components/motion/AnimatedSection";

const faqs = [
  {
    question: "Puis-je résilier mon abonnement à tout moment ?",
    answer:
      "Oui, vous pouvez annuler votre abonnement à tout moment sans frais ni pénalités. Votre accès reste actif jusqu’à la fin de votre période de facturation en cours.",
  },
  {
    question: "Comment mes données sont-elles protégées ?",
    answer:
      "Vos données sont hébergées en France avec un chiffrement SSL 256 bits. Nous sommes conformes au RGPD et ne partageons jamais vos informations avec des tiers.",
  },
  {
    question: "Existe-t-il une période d’essai gratuite ?",
    answer:
      "Oui, nous proposons 14 jours d’essai gratuit sur tous nos plans. Une carte bancaire est requise pour activer l’essai, mais vous ne serez pas facturé avant la fin de la période gratuite.",
  },
  {
    question: "Comment résilier facilement mon abonnement ?",
    answer:
      "Vous pouvez annuler directement depuis votre espace client en un clic, ou nous envoyer un email. Votre service reste actif jusqu’à la fin de la période déjà payée.",
  },
  {
    question: "Combien de départements puis-je surveiller ?",
    answer:
      "La formule Indépendant inclut 1 département. La formule Agence inclut 1 département avec 3 collaborateurs. Vous pouvez ensuite ajouter des départements supplémentaires.",
  },
  {
    question: "GetFlaire fonctionne-t-il avec d’autres logiciels ?",
    answer:
      "GetFlaire est une solution autonome conçue pour centraliser vos besoins sans dépendre d’autres logiciels.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <AnimatedSection
      id="faq"
      className="bg-[#F3F6F8] py-24 lg:py-32"
      staggerSelector="[data-faq-reveal]"
    >
      <div className="site-shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
        <div data-faq-reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="section-kicker">Questions fréquentes</p>
          <h2 className="section-title mt-5">Tout ce qu’il faut savoir.</h2>
          <p className="section-copy mt-7 max-w-md">
            Une question plus précise ? Notre équipe française vous répond directement.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 border-b border-[#B56600] pb-2 text-sm font-extrabold text-[#B56600]"
          >
            Contacter l’équipe
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div data-faq-reveal className="border-t border-[#C9D3DB]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-[#C9D3DB]">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-8"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-extrabold text-[#101722] sm:text-xl">{faq.question}</span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-[#B56600] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-7 pr-12 leading-7 text-[#6F8097] sm:pb-9">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FAQSection;
