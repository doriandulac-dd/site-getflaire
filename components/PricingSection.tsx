"use client";

import { useState } from 'react';
import { Check, Zap, Building, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState<'independent' | 'agency'>('independent');
  const [billing, setBilling] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');

  const getPrice = (basePrice: number) => {
    switch (billing) {
      case 'quarterly':
        return Math.round(basePrice * 0.9 * 100) / 100;
      case 'yearly':
        return Math.round(basePrice * 0.8 * 100) / 100;
      default:
        return basePrice;
    }
  };

  const getBillingLabel = () => {
    switch (billing) {
      case 'quarterly':
        return '/mois (facturation trimestrielle)';
      case 'yearly':
        return '/mois (facturation annuelle)';
      default:
        return '/mois';
    }
  };

  const independentPlans = [
    {
      name: "Starter",
      price: getPrice(15),
      originalPrice: 15,
      description: "Parfait pour débuter",
      icon: Zap,
      features: [
        "1 département inclus",
        "Pige immobilière de base",
        "5 alertes personnalisées",
        "CRM simplifié",
        "Support email"
      ],
      cta: "Commencer",
      popular: false
    },
    {
      name: "Pro",
      price: getPrice(20),
      originalPrice: 20,
      description: "Le plus populaire",
      icon: Crown,
      features: [
        "3 départements inclus",
        "Pige immobilière avancée",
        "Alertes illimitées",
        "CRM complet",
        "Surveillance concurrence",
        "Rappels automatiques",
        "Support prioritaire"
      ],
      cta: "Essayer gratuitement",
      popular: true
    }
  ];

  const agencyPlans = [
    {
      name: "Équipe",
      price: getPrice(30),
      originalPrice: 30,
      description: "Pour les petites agences",
      icon: Building,
      features: [
        "3 utilisateurs inclus",
        "5 départements inclus",
        "Toutes les fonctionnalités Pro",
        "Collaboration en équipe",
        "Tableau de bord partagé",
        "Formation incluse"
      ],
      cta: "Commencer l'essai",
      popular: false
    },
    {
      name: "Enterprise",
      price: getPrice(50),
      originalPrice: 50,
      description: "Pour les grandes structures",
      icon: Crown,
      features: [
        "Utilisateurs illimités",
        "Départements illimités",
        "API personnalisée",
        "Intégrations sur mesure",
        "Support dédié",
        "Formation sur site",
        "SLA garanti"
      ],
      cta: "Nous contacter",
      popular: true
    }
  ];

  const currentPlans = activeTab === 'independent' ? independentPlans : agencyPlans;

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
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-[#FFB23F] ring-opacity-50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#FFB23F] text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Le plus populaire
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
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
                      {plan.price}€
                    </span>
                    <span className="text-[#778DA9] ml-1">
                      {getBillingLabel()}
                    </span>
                  </div>
                  {billing !== 'monthly' && (
                    <div className="text-sm text-[#778DA9] mt-1">
                      <span className="line-through">{plan.originalPrice}€/mois</span>
                      <span className="text-green-600 font-semibold ml-2">
                        Économisez {((plan.originalPrice - plan.price) * (billing === 'yearly' ? 12 : 3)).toFixed(0)}€
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
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
            </div>
          ))}
        </div>

        {/* Additional Options */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-[#1B263B] mb-4">
              Options supplémentaires
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="text-[#778DA9]">Département supplémentaire</span>
                <span className="font-semibold text-[#1B263B]">+5€/mois</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <span className="text-[#778DA9]">Utilisateur supplémentaire</span>
                <span className="font-semibold text-[#1B263B]">+8€/mois</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;