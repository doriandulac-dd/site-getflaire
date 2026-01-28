import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Bell, Users, Calendar, Target, Shield } from 'lucide-react';

const HeroSection = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B263B] via-[#2A3B52] to-[#FFB23F]/20"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FFB23F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFB23F] rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6">
              <span className="bg-[#FFB23F]/20 text-[#FFB23F] px-4 py-2 rounded-full text-sm font-semibold border border-[#FFB23F]/30">
                La pige immobilière nouvelle génération
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Gagnez du temps,
              <span className="block text-[#FFB23F]">signez plus de mandats</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Automatisez votre prospection immobilière avec notre plateforme tout-en-un : pige intelligente, alertes, CRM et surveillance concurrence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button
                onClick={() => window.location.href = 'https://app.getflaire.fr/login'}
                size="lg"
                className="bg-[#FFB23F] hover:bg-[#FF8F00] text-[#1B263B] px-8 py-6 text-lg rounded-2xl font-bold transition-all duration-300 shadow-2xl hover:shadow-[#FFB23F]/50 transform hover:scale-105"
              >
                Essayer gratuitement
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                onClick={() => window.location.href = 'https://app.getflaire.fr/login'}
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-2xl font-semibold backdrop-blur-sm transition-all duration-300"
              >
                Se connecter
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="bg-[#FFB23F]/20 rounded-full p-1.5 border border-[#FFB23F]/30">
                  <svg className="h-3.5 w-3.5 text-[#FFB23F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">14 jours gratuits</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-[#FFB23F]/20 rounded-full p-1.5 border border-[#FFB23F]/30">
                  <svg className="h-3.5 w-3.5 text-[#FFB23F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Sans engagement</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-[#FFB23F]/20 rounded-full p-1.5 border border-[#FFB23F]/30">
                  <svg className="h-3.5 w-3.5 text-[#FFB23F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Hébergé en France</span>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FFB23F] to-[#FF8F00] rounded-3xl opacity-20 blur-2xl"></div>
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-br from-[#1B263B] to-[#2A3B52] rounded-2xl p-5 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold text-lg">Tableau de bord</h3>
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:bg-white/20 transition-all">
                    <BarChart3 className="h-7 w-7 text-[#FFB23F] mx-auto mb-2" />
                    <div className="text-white text-xl font-bold">47</div>
                    <div className="text-white/70 text-xs mt-1">Nouvelles annonces</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:bg-white/20 transition-all">
                    <Bell className="h-7 w-7 text-[#FFB23F] mx-auto mb-2" />
                    <div className="text-white text-xl font-bold">12</div>
                    <div className="text-white/70 text-xs mt-1">Alertes actives</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:bg-white/20 transition-all">
                    <Users className="h-7 w-7 text-[#FFB23F] mx-auto mb-2" />
                    <div className="text-white text-xl font-bold">8</div>
                    <div className="text-white/70 text-xs mt-1">Prospects</div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 border border-white/10 hover:bg-white/20 transition-all group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-[#FFB23F] rounded-lg p-2">
                          <Target className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">Villa Neuilly-sur-Seine</div>
                          <div className="text-white/50 text-xs">Publié il y a 2h</div>
                        </div>
                      </div>
                      <span className="bg-[#FFB23F] text-white text-xs font-bold px-3 py-1 rounded-full">Nouveau</span>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 border border-white/10 hover:bg-white/20 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-500 rounded-lg p-2">
                          <Calendar className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">RDV M. Dupont</div>
                          <div className="text-white/50 text-xs">Aujourd'hui à 14h00</div>
                        </div>
                      </div>
                      <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/30">Confirmé</span>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 border border-white/10 hover:bg-white/20 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-500 rounded-lg p-2">
                          <Shield className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">Suivi concurrence</div>
                          <div className="text-white/50 text-xs">3 agences surveillées</div>
                        </div>
                      </div>
                      <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30">Actif</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[#1B263B]/60 text-sm">
                <Shield className="h-4 w-4" />
                <span className="font-medium">Interface simple et sécurisée</span>
              </div>
            </div>

            {/* Stats below dashboard */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                <div className="text-3xl font-bold text-[#FFB23F] mb-1">+2000</div>
                <div className="text-white/70 text-sm">Professionnels actifs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                <div className="text-3xl font-bold text-[#FFB23F] mb-1">50k+</div>
                <div className="text-white/70 text-sm">Annonces par jour</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;