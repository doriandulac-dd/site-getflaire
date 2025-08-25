import { Search, Bell, Eye, Users, Calendar, Target } from 'lucide-react';

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
      title: "CRM intégré",
      description: "Gérez vos contacts, prospects et clients dans un seul outil centralisé et efficace."
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
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B263B] mb-4">
            Toutes les fonctionnalités dont vous avez besoin
          </h2>
          <p className="text-xl text-[#778DA9] max-w-3xl mx-auto">
            GetFlaire centralise tous vos outils de prospection immobilière dans une seule plateforme intuitive et performante.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-br from-[#FFB23F] to-[#FF8F00] rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-[#1B263B] mb-4">
                {feature.title}
              </h3>
              
              <p className="text-[#778DA9] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 shadow-xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#FFB23F] mb-2">2000+</div>
              <div className="text-[#778DA9]">Professionnels utilisent GetFlaire</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FFB23F] mb-2">95%</div>
              <div className="text-[#778DA9]">Taux de satisfaction client</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FFB23F] mb-2">50k+</div>
              <div className="text-[#778DA9]">Annonces analysées par jour</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FFB23F] mb-2">24/7</div>
              <div className="text-[#778DA9]">Surveillance automatique</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;