"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedSection from '@/components/motion/AnimatedSection';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
  {
    "question": "Puis-je résilier mon abonnement à tout moment ?",
    "answer": "Oui, vous pouvez annuler votre abonnement à tout moment sans frais ni pénalités. Votre accès reste actif jusqu'à la fin de votre période de facturation en cours."
  },
  {
    "question": "Comment mes données sont-elles protégées ?",
    "answer": "Vos données sont hébergées en France avec un chiffrement SSL 256 bits. Nous sommes conformes au RGPD et ne partageons jamais vos informations avec des tiers."
  },
  {
    "question": "Existe-t-il une période d'essai gratuite ?",
    "answer": "Oui, nous proposons 14 jours d'essai gratuit sur tous nos plans. Une carte bancaire est requise pour activer l'essai, mais vous ne serez pas facturé avant la fin de la période gratuite."
  },
  {
    "question": "Comment résilier facilement mon abonnement ?",
    "answer": "Très simple ! Vous pouvez annuler directement depuis votre espace client en un clic, ou nous envoyer un email. Votre service reste actif jusqu'à la fin de la période déjà payée."
  },
  {
    "question": "Combien de départements puis-je surveiller ?",
    "answer": "Cela dépend de votre formule : Indépendant inclut 1 département, Agence inclut 1 département avec 3 collaborateurs. Vous pouvez ajouter des départements supplémentaires."
  },
  {
    "question": "GetFlaire fonctionne-t-il avec d'autres logiciels ?",
    "answer": "Non, GetFlaire est une solution autonome conçue pour centraliser vos besoins sans dépendre d'autres logiciels."
  }
];

  return (
    <AnimatedSection id="faq" className="bg-[#F6F8FB] py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-animate-item className="text-center mb-14">
          <span className="section-eyebrow mb-5">FAQ</span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1B263B] mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-[#62738B]">
            Retrouvez les réponses aux questions les plus courantes sur GetFlaire
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-animate-item
              className="premium-panel overflow-hidden rounded-2xl transition-transform hover:-translate-y-0.5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#F6F8FB] transition-colors sm:px-8 sm:py-6"
              >
                <h3 className="text-lg font-semibold text-[#1B263B] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-[#FFB23F]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#778DA9]" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-[#778DA9] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div data-animate-item className="text-center mt-12">
          <p className="text-[#778DA9] mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <button 
            onClick={() => {
              window.location.href = '/contact';
            }}
            className="bg-[#FFB23F] hover:bg-[#FF8F00] text-white px-8 py-3 rounded-2xl font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            Contactez-nous
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FAQSection;
