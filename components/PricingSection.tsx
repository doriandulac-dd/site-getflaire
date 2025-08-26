"use client";

import { useState } from 'react';
import { Check, Zap, Building, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState<'independent' | 'agency'>('independent');
  const [billing, setBilling] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');


  const independentPlans = [
    {
      name: "Pro",
      prices: { monthly: 29, quarterly: Math.round((78 / 3) * 100) / 100, yearly: Math.round((276 / 12) * 100) / 100 },
      description: "Le plus populaire",
      icon: Crown,
      features: [
        "1 départements inclus",
        "Pige immobilière avancée",
        "Alertes illimitées",
        "Surveillance concurrence",
        "Rappels automatiques",
        "Support prioritaire"
      ],
      cta: "Essayer gratuitement 14 jours",
      popular: true
    }
  ];

  const agencyPlans = [
    {
      name: "Enterprise",
      prices: { monthly: 79, quarterly: Math.round((213 / 3) * 100) / 100, yearly: Math.round((756 / 12) * 100) / 100 },
      description: "Pour les grandes structures",
      icon: Crown,
      features: [
        "1 département inclus",
        "3 collaborateurs inclus",
        "Surveillance concurrence",
        "Rappels & gestion d’équipe",
        "Tableau de bord centralisé",
        "Support prioritaire"
      ],
      cta: "Nous contacter",
      popular: true
    }
  ];

  const currentPlans = activeTab === 'independent' ? independentPlans : agencyPlans;

  // Calculate dynamic pricing for additional options
  const getAdditionalOptionPrice = () => {
    switch (billing) {
      case 'quarterly':
        return { price: 45, period: '/trimestre' }; // 15 * 3
      case 'yearly':
        return { price: 180, period: '/an' }; // 15 * 12
      default:
        return { price: 15, period: '/mois' };
    }
  };

  const additionalOption = getAdditionalOptionPrice();

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B263B] mb-4">
            Tarifs transparents et flexibles
          </h2>
          <p className="text-xl text-[#778DA9] max-w-3xl mx-auto">
            Choisissez la formule qui correspond à vos besoins. Sans engagement, résiliable à tout moment.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('independent')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === 'independent'
                  ? 'bg-[#FFB23F] text-white shadow-lg'
                  : 'text-[#778DA9] hover:text-[#1B263B]'
              }`}
            >
              Indépendants
            </button>
            <button
              onClick={() => setActiveTab('agency')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === 'agency'
                  ? 'bg-[#FFB23F] text-white shadow-lg'
                  : 'text-[#778DA9] hover:text-[#1B263B]'
              }`}
            >
              Agences
            </button>
          </div>
        </div>

        {/* Billing Options */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 text-sm ${
                billing === 'monthly'
                  ? 'bg-[#FFB23F] text-white shadow-lg'
                  : 'text-[#778DA9] hover:text-[#1B263B]'
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setBilling('quarterly')}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 text-sm ${
                billing === 'quarterly'
                  ? 'bg-[#FFB23F] text-white shadow-lg'
                  : 'text-[#778DA9] hover:text-[#1B263B]'
              }`}
            >
              Trimestriel <span className="text-green-600 font-bold">-10%</span>
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 text-sm ${
                billing === 'yearly'
                  ? 'bg-[#FFB23F] text-white shadow-lg'
                  : 'text-[#778DA9] hover:text-[#1B263B]'
              }`}
            >
              Annuel <span className="text-green-600 font-bold">-20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-1 gap-8 max-w-lg mx-auto">
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-[#FFB23F] ring-opacity-50' : ''
              }`}
            >
              {(() => {
                let amountToPay: number;
                let billingPeriodText: string;
                let periodMultiplier: number;

                switch (billing) {
                  case 'quarterly':
                    amountToPay = Math.round(plan.prices.quarterly * 3 * 100) / 100;
                    billingPeriodText = '/trimestre';
                    periodMultiplier = 3;
                    break;
                  case 'yearly':
                    amountToPay = Math.round(plan.prices.yearly * 12 * 100) / 100;
                    billingPeriodText = '/an';
                    periodMultiplier = 12;
                    break;
                  default:
                    amountToPay = plan.prices.monthly;
                    billingPeriodText = '/mois';
                    periodMultiplier = 1;
                }

                const monthlyTotal = plan.prices.monthly * periodMultiplier;
                const savings = Math.round((monthlyTotal - amountToPay) * 100) / 100;

                return (
                  <>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#FFB23F] text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Le plus populaire
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`bg-gradient-to-br ${plan.popular ? 'from-[#FFB23F] to-[#FF8F00]' : 'from-[#778DA9] to-[#1B263B]'} rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#1B263B] mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-[#778DA9] mb-4">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-[#1B263B]">
                      {amountToPay}€
                    </span>
                    <span className="text-[#778DA9] ml-1">
                      {billingPeriodText}
                    </span>
                  </div>
                  {billing !== 'monthly' && (
                    <div className="text-sm text-[#778DA9] mt-1">
                      <span className="line-through">{monthlyTotal}€{billingPeriodText}</span>
                      <span className="text-green-600 font-semibold ml-2">
                        Économisez {savings}€
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-[#FFB23F] mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-[#778DA9]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-4 rounded-2xl font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-[#FFB23F] hover:bg-[#FF8F00] text-white shadow-lg hover:shadow-xl'
                    : 'bg-[#1B263B] hover:bg-[#0F1419] text-white'
                }`}
                onClick={() => window.location.href = 'https://app.getflaire.fr/login'}
              >
                {plan.cta}
              </Button>
              
              {/* Legal text */}
              <p className="text-xs text-[#778DA9] text-center mt-4">
                Essai, remises et conditions : voir{' '}
                <a href="/conditions" className="text-[#FFB23F] hover:underline">
                  Conditions
                </a>
              </p>
                  </>
                );
              })()}
            </div>
          ))}
        </div>

        {/* Additional Options */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-6 shadow-xl max-w-lg mx-auto">
            <h3 className="text-xl font-semibold text-[#1B263B] mb-4">
              Options supplémentaires
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="text-[#778DA9]">Département supplémentaire</span>
                <span className="font-semibold text-[#1B263B]">+{additionalOption.price}€{additionalOption.period}</span>
              </div>
              {activeTab === 'agency' && (
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="text-[#778DA9]">Utilisateur supplémentaire</span>
                  <span className="font-semibold text-[#1B263B]">+{additionalOption.price}€{additionalOption.period}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;