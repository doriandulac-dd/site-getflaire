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
    <section id="hero" className="relative pt-16 min-h-screen flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFB23F] via-[#FF8F00] to-[#1B263B] opacity-90"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              GetFlaire — La pige immobilière 
              <span className="block text-yellow-200">nouvelle génération</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              Pige, alertes, surveillance et CRM réunis dans une seule application. 
              Boostez votre prospection et signez plus de mandats.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToPricing}
                size="lg"
                className="bg-white text-[#1B263B] hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1B263B] px-8 py-4 rounded-2xl font-semibold transition-all duration-200"
              >
                Voir la démo
              </Button>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-r from-[#1B263B] to-[#778DA9] rounded-2xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold">Tableau de bord GetFlaire</h3>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <BarChart3 className="h-6 w-6 text-[#FFB23F] mx-auto mb-1" />
                    <div className="text-white text-sm font-medium">47</div>
                    <div className="text-white/70 text-xs">Nouvelles annonces</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <Bell className="h-6 w-6 text-[#FFB23F] mx-auto mb-1" />
                    <div className="text-white text-sm font-medium">12</div>
                    <div className="text-white/70 text-xs">Alertes actives</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <Users className="h-6 w-6 text-[#FFB23F] mx-auto mb-1" />
                    <div className="text-white text-sm font-medium">8</div>
                    <div className="text-white/70 text-xs">Prospects</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-[#FFB23F]" />
                        <span className="text-white text-sm">Villa Neuilly-sur-Seine</span>
                      </div>
                      <span className="text-[#FFB23F] text-sm font-medium">Nouveau</span>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-[#FFB23F]" />
                        <span className="text-white text-sm">RDV M. Dupont - 14h</span>
                      </div>
                      <span className="text-green-400 text-sm">Confirmé</span>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-[#FFB23F]" />
                        <span className="text-white text-sm">Suivi concurrence</span>
                      </div>
                      <span className="text-blue-400 text-sm">Actif</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center text-[#778DA9] text-sm">
                Interface simple et intuitive
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;