import AnimatedSection from "@/components/motion/AnimatedSection";
import MotionCounter from "@/components/motion/MotionCounter";
import { Bell, Calendar, Eye, Search, Target, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Pige immobilière intelligente",
      description: "Surveillez les annonces selon vos critères, vos zones et vos priorités commerciales.",
    },
    {
      icon: Bell,
      title: "Alertes personnalisées",
      description: "Repérez les opportunités pertinentes dès leur publication pour prendre une longueur d'avance.",
    },
    {
      icon: Eye,
      title: "Surveillance concurrence",
      description: "Suivez les mouvements du marché et adaptez votre prospection avec plus de précision.",
    },
    {
      icon: Users,
      title: "Notes intégrées",
      description: "Centralisez vos observations et les échanges utiles avant chaque relance.",
    },
    {
      icon: Calendar,
      title: "Gestion des rappels",
      description: "Planifiez vos relances et gardez le rythme sur chaque opportunité active.",
    },
    {
      icon: Target,
      title: "Collaboration multi-utilisateurs",
      description: "Travaillez en équipe avec une vision claire des rôles, actions et prospects.",
    },
  ];

  const screenshots = [
    { image: "/1.jpg", title: "Tableau de bord", description: "Vue d'ensemble complète de votre activité et de vos performances" },
    { image: "/2.jpg", title: "Alertes intelligentes", description: "Notifications personnalisées pour ne jamais manquer une opportunité" },
    { image: "/3.jpg", title: "CRM intégré", description: "Gestion complète et centralisée de vos prospects et clients" },
  ];

  return (
    <AnimatedSection id="features" className="relative overflow-hidden bg-[#F6F8FB] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,178,63,0.18),transparent_28rem),radial-gradient(circle_at_88%_16%,rgba(27,38,59,0.08),transparent_30rem)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-animate-item className="mx-auto mb-14 max-w-3xl text-center">
          <span className="section-eyebrow">Fonctionnalités</span>
          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1B263B] sm:text-5xl">
            Maîtrisez chaque étape de votre prospection.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#62738B]">
            Une plateforme claire pour détecter, prioriser et convertir les opportunités immobilières avec méthode.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} data-animate-item className="premium-card group rounded-2xl p-6 transition-transform hover:-translate-y-1">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1B263B] shadow-lg shadow-[#1B263B]/[0.15]">
                <feature.icon className="h-6 w-6 text-[#FFB23F]" />
              </div>
              <h3 className="text-xl font-black text-[#1B263B]">{feature.title}</h3>
              <p className="mt-3 leading-7 text-[#62738B]">{feature.description}</p>
            </div>
          ))}
        </div>

        <div data-animate-item className="mt-16 overflow-hidden rounded-[1.75rem] bg-[#101827] p-6 shadow-[0_35px_100px_rgba(27,38,59,0.22)] sm:p-10">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#FFB23F]">GetFlaire en chiffres</span>
              <h3 className="mt-3 text-3xl font-black text-white">Des signaux de marché lisibles en continu.</h3>
            </div>
            <p className="max-w-xl text-white/[0.64]">Des indicateurs concrets pour suivre votre marché, votre rythme et vos opportunités sans multiplier les outils.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              { value: 2000, prefix: "+", label: "Professionnels actifs" },
              { value: 95, suffix: "%", label: "Satisfaction client" },
              { value: 50, suffix: "k+", label: "Annonces par jour" },
              { value: 24, suffix: "/7", label: "Surveillance active" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.08] p-5">
                <div className="text-4xl font-black text-[#FFB23F]">
                  <MotionCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm font-semibold text-white/[0.72]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div data-animate-item className="mb-10 text-center">
            <span className="section-eyebrow">Aperçu de l'interface</span>
            <h3 className="mt-5 text-3xl font-black text-[#1B263B]">Une interface pensée pour l'action.</h3>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {screenshots.map((item) => (
              <div key={item.title} data-animate-item className="premium-panel group overflow-hidden rounded-2xl p-4">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#E8EBF0]">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h4 className="mt-5 text-lg font-black text-[#1B263B]">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-[#62738B]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FeaturesSection;
