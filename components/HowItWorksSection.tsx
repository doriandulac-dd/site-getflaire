import { Database, BellRing, LineChart } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Database,
      number: "01",
      title: "Collecte automatique des annonces",
      description: "Notre système analyse en continu les annonces immobilières selon vos critères géographiques et vos besoins spécifiques.",
      color: "from-[#FFB23F] to-[#FF8F00]"
    },
    {
      icon: BellRing,
      number: "02",
      title: "Alertes intelligentes et scoring",
      description: "Recevez instantanément les opportunités les plus pertinentes avec un score de qualité et des recommandations personnalisées.",
      color: "from-[#1B263B] to-[#2A3B52]"
    },
    {
      icon: LineChart,
      number: "03",
      title: "Suivi et gestion avec CRM",
      description: "Organisez vos prospects, planifiez vos relances et gérez vos interactions pour maximiser vos conversions.",
      color: "from-[#FFB23F] to-[#FF8F00]"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB23F] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-[#FFB23F]/10 text-[#FFB23F] px-4 py-2 rounded-full text-sm font-semibold border border-[#FFB23F]/20">
              Comment ça marche
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1B263B] mb-6">
            Prospection immobilière simplifiée en 3 étapes
          </h2>
          <p className="text-xl text-[#778DA9] max-w-3xl mx-auto leading-relaxed">
            De la collecte automatique des annonces à la signature des mandats
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#FFB23F] via-[#1B263B] to-[#FFB23F] opacity-20 transform -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#FFB23F]/30 h-full">
                  {/* Number badge */}
                  <div className="absolute -top-4 -left-4 bg-gradient-to-br from-[#FFB23F] to-[#FF8F00] text-white rounded-2xl w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-xl">
                    {step.number}
                  </div>

                  <div className="mb-6 mt-8">
                    <div className={`bg-gradient-to-br ${step.color} rounded-2xl p-5 w-20 h-20 flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1B263B] mb-4 text-center group-hover:text-[#FFB23F] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-[#778DA9] text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-br from-[#1B263B] to-[#2A3B52] rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB23F] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFB23F] rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Prêt à transformer votre prospection ?</h3>
              <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
                Rejoignez plus de 2000 professionnels qui économisent du temps et signent plus de mandats
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('pricing');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#FFB23F] hover:bg-[#FF8F00] text-[#1B263B] px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:shadow-[#FFB23F]/50 transform hover:scale-105"
                >
                  Essayer gratuitement 14 jours
                </button>
                <div className="flex items-center space-x-4 text-white/70 text-sm">
                  <span className="flex items-center space-x-1">
                    <svg className="h-4 w-4 text-[#FFB23F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Sans engagement</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <svg className="h-4 w-4 text-[#FFB23F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Sans CB</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;