import { Search, Bell, Eye, Users, Target, Calendar } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Pige immobilière intelligente",
      description: "Surveillez automatiquement les nouvelles annonces selon vos critères précis et géographiques."
    },
    {
      icon: Bell,
      title: "Alertes personnalisées",
      description: "Recevez des notifications en temps réel dès qu'une nouvelle opportunité correspond à vos besoins."
    },
    {
      icon: Eye,
      title: "Surveillance concurrence",
      description: "Analysez les stratégies et tarifs de vos concurrents pour rester compétitif sur votre marché."
    },
    {
      icon: Users,
      title: "Notes intégrées",
      description: "Garde une trace claire de tes observations et échanges."
    },
    {
      icon: Calendar,
      title: "Gestion des rappels",
      description: "Planifiez et automatisez vos relances pour ne jamais manquer une opportunité commerciale."
    },
    {
      icon: Target,
      title: "Collaboration multi-utilisateurs",
      description: "Travaillez en équipe avec des accès personnalisés et un partage d'informations fluide."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFB23F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1B263B] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[#FFB23F]/10 text-[#FFB23F] px-4 py-2 rounded-full text-sm font-semibold border border-[#FFB23F]/20">
              Fonctionnalités
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1B263B] mb-6">
            Maîtrisez chaque étape de votre prospection
          </h2>
          <p className="text-xl text-[#778DA9] max-w-3xl mx-auto leading-relaxed">
            Une visibilité complète sur votre marché, des alertes ciblées et un suivi structuré pour développer votre portefeuille.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 hover:border-[#FFB23F]/30"
            >
              <div className="bg-gradient-to-br from-[#FFB23F] to-[#FF8F00] rounded-xl p-3 w-14 h-14 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <feature.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-[#1B263B] mb-3 group-hover:text-[#FFB23F] transition-colors">
                {feature.title}
              </h3>

              <p className="text-[#778DA9] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-br from-[#1B263B] to-[#2A3B52] rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB23F] rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-white mb-3">GetFlaire en chiffres</h3>
              <p className="text-white/70 text-lg">Des résultats concrets pour les professionnels de l'immobilier</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-5xl font-bold text-[#FFB23F] mb-3">+2000</div>
                <div className="text-white/80 font-medium">Professionnels actifs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-5xl font-bold text-[#FFB23F] mb-3">95%</div>
                <div className="text-white/80 font-medium">Satisfaction client</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-5xl font-bold text-[#FFB23F] mb-3">50k+</div>
                <div className="text-white/80 font-medium">Annonces par jour</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-5xl font-bold text-[#FFB23F] mb-3">24/7</div>
                <div className="text-white/80 font-medium">Surveillance active</div>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-[#FFB23F]/10 text-[#FFB23F] px-4 py-2 rounded-full text-sm font-semibold border border-[#FFB23F]/20">
                Aperçu de l'interface
              </span>
            </div>
            <h3 className="text-3xl font-bold text-[#1B263B] mb-4">
              Une interface pensée pour vous
            </h3>
            <p className="text-lg text-[#778DA9] max-w-2xl mx-auto">
              Découvrez une plateforme intuitive qui simplifie votre quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#FFB23F]/30">
              <div className="bg-gray-100 rounded-xl h-56 mb-5 overflow-hidden relative">
                <img
                  src="/1.jpg"
                  alt="Tableau de bord GetFlaire"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B263B]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="text-lg font-bold text-[#1B263B] mb-2 group-hover:text-[#FFB23F] transition-colors">Tableau de bord</h4>
              <p className="text-[#778DA9] text-sm leading-relaxed">Vue d'ensemble complète de votre activité et de vos performances</p>
            </div>

            <div className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#FFB23F]/30">
              <div className="bg-gray-100 rounded-xl h-56 mb-5 overflow-hidden relative">
                <img
                  src="/2.jpg"
                  alt="Système d'alertes GetFlaire"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B263B]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="text-lg font-bold text-[#1B263B] mb-2 group-hover:text-[#FFB23F] transition-colors">Alertes intelligentes</h4>
              <p className="text-[#778DA9] text-sm leading-relaxed">Notifications personnalisées pour ne jamais manquer une opportunité</p>
            </div>

            <div className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#FFB23F]/30">
              <div className="bg-gray-100 rounded-xl h-56 mb-5 overflow-hidden relative">
                <img
                  src="/3.jpg"
                  alt="CRM intégré GetFlaire"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B263B]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="text-lg font-bold text-[#1B263B] mb-2 group-hover:text-[#FFB23F] transition-colors">CRM intégré</h4>
              <p className="text-[#778DA9] text-sm leading-relaxed">Gestion complète et centralisée de vos prospects et clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;