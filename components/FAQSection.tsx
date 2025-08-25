"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Puis-je résilier mon abonnement à tout moment ?",
      answer: "Oui, vous pouvez annuler votre abonnement à tout moment sans frais ni pénalités. Votre accès restera actif jusqu'à la fin de votre période de facturation en cours."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Absolument. Nous utilisons un chiffrement de niveau bancaire (SSL 256 bits) et nos serveurs sont hébergés en France avec certification ISO 27001. Vos données ne sont jamais partagées avec des tiers."
    },
    {
      question: "Existe-t-il une période d'essai gratuite ?",
      answer: "Oui, nous proposons 14 jours d'essai gratuit sur tous nos plans Pro et Équipe, sans obligation d'engagement. Aucune carte bancaire n'est requise pour commencer."
    },
    {
      question: "Combien de départements puis-je surveiller ?",
      answer: "Cela dépend de votre formule : le plan Starter inclut 1 département, Pro inclut 3 départements, Équipe inclut 5 départements. Vous pouvez ajouter des départements supplémentaires à 5€/mois chacun."
    },
    {
      question: "GetFlaire s'intègre-t-il avec d'autres logiciels ?",
      answer: "Oui, nous proposons des intégrations avec les principaux CRM immobiliers (Hektor, Immowork, etc.) et les logiciels de transaction. Une API est disponible pour les intégrations personnalisées sur les plans Enterprise."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B263B] mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-[#778DA9]">
            Retrouvez les réponses aux questions les plus courantes sur GetFlaire
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
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
        <div className="text-center mt-12">
          <p className="text-[#778DA9] mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#FFB23F] hover:bg-[#FF8F00] text-white px-8 py-3 rounded-2xl font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            Contactez-nous
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;