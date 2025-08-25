"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Success() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [customerEmail, setCustomerEmail] = useState<string>('');

  useEffect(() => {
    // En production, vous pourriez récupérer les détails de la session
    // pour afficher des informations personnalisées
    if (sessionId) {
      // Placeholder pour récupérer les détails de la session
      console.log('Session ID:', sessionId);
    }
  }, [sessionId]);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            
            <h1 className="text-4xl font-bold text-[#1B263B] mb-4">
              Paiement confirmé !
            </h1>
            
            <p className="text-xl text-[#778DA9] mb-8 max-w-2xl mx-auto">
              Félicitations ! Votre abonnement GetFlaire a été activé avec succès. 
              Vous allez recevoir un email de confirmation dans quelques instants.
            </p>
          </div>

          {/* Success Details */}
          <div className="bg-gray-50 rounded-3xl p-8 mb-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">
              Prochaines étapes
            </h2>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-4">
                <div className="bg-[#FFB23F] rounded-full p-2 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1B263B]">Email de bienvenue</h3>
                  <p className="text-[#778DA9] text-sm">Vérifiez votre boîte mail pour les instructions de connexion</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#FFB23F] rounded-full p-2 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1B263B]">Configuration initiale</h3>
                  <p className="text-[#778DA9] text-sm">Définissez vos critères de recherche et zones géographiques</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#FFB23F] rounded-full p-2 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1B263B]">Première pige</h3>
                  <p className="text-[#778DA9] text-sm">Lancez votre première surveillance immobilière</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#FFB23F] hover:bg-[#FF8F00] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Accéder à l'application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/'}
              className="border-2 border-[#778DA9] text-[#778DA9] hover:bg-[#778DA9] hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200"
            >
              <Home className="mr-2 h-5 w-5" />
              Retour à l'accueil
            </Button>
          </div>

          {/* Support Info */}
          <div className="mt-12 p-6 bg-[#1B263B] rounded-2xl text-white max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-3">Besoin d'aide ?</h3>
            <p className="text-white/80 mb-4">
              Notre équipe support est là pour vous accompagner dans la prise en main de GetFlaire.
            </p>
            <a 
              href="/contact" 
              className="text-[#FFB23F] hover:text-[#FF8F00] font-medium transition-colors"
            >
              Contactez le support →
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}