import { UserPlus, Search, TrendingUp } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Créez votre compte",
      description: "Inscrivez-vous en 2 minutes et configurez vos critères de recherche personnalisés.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Search,
      title: "Suivez vos annonces et alertes",
      description: "GetFlaire surveille automatiquement le marché et vous alerte des meilleures opportunités.",
      color: "from-[#FFB23F] to-[#FF8F00]"
    },
    {
      icon: TrendingUp,
      title: "Gagnez du temps et signez plus",
      description: "Concentrez-vous sur la relation client pendant que GetFlaire gère votre veille immobilière.",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B263B] mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-[#778DA9] max-w-3xl mx-auto">
            3 étapes simples pour révolutionner votre prospection immobilière
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-[#FFB23F] to-green-500 transform -translate-y-1/2 rounded-full"></div>

          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className={`bg-gradient-to-br ${step.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 bg-white text-[#1B263B] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold border-2 border-gray-200 shadow-lg">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-[#1B263B] mb-4">
                  {step.title}
                </h3>
                
                <p className="text-[#778DA9] text-lg leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#FFB23F] to-[#FF8F00] rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4">Prêt à simplifier votre prospection ?</h3>
            <p className="text-lg mb-6 opacity-90">Rejoignez plus de 2000 professionnels qui font confiance à GetFlaire</p>
            <button 
              onClick={() => {
                const element = document.getElementById('pricing');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-[#1B263B] px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Commencer gratuitement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;