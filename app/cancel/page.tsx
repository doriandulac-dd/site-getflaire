"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { XCircle, ArrowLeft, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Cancel() {
  const scrollToPricing = () => {
    window.location.href = '/#pricing';
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Cancel Icon */}
          <div className="mb-8">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <XCircle className="h-12 w-12 text-white" />
            </div>
            
            <h1 className="text-4xl font-bold text-[#1B263B] mb-4">
              Paiement annulé
            </h1>
            
            <p className="text-xl text-[#778DA9] mb-8 max-w-2xl mx-auto">
              Votre paiement a été annulé. Aucun montant n'a été débité de votre compte.
              Vous pouvez réessayer quand vous le souhaitez.
            </p>
          </div>

          {/* Reasons & Solutions */}
          <div className="bg-gray-50 rounded-3xl p-8 mb-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">
              Pourquoi réessayer GetFlaire ?
            </h2>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-4">
                <div className="bg-[#FFB23F] rounded-full p-2 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1B263B]">Essai gratuit 14 jours</h3>
                  <p className="text-[#778DA9] text-sm">Testez toutes les fonctionnalités sans engagement</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#FFB23F] rounded-full p-2 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1B263B]">Annulation à tout moment</h3>
                  <p className="text-[#778DA9] text-sm">Résiliez votre abonnement quand vous voulez</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#FFB23F] rounded-full p-2 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1B263B]">Support français</h3>
                  <p className="text-[#778DA9] text-sm">Une équipe dédiée pour vous accompagner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={scrollToPricing}
              size="lg"
              className="bg-[#FFB23F] hover:bg-[#FF8F00] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <CreditCard className="mr-2 h-5 w-5" />
              Réessayer le paiement
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/'}
              className="border-2 border-[#778DA9] text-[#778DA9] hover:bg-[#778DA9] hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Retour à l'accueil
            </Button>
          </div>

          {/* Help Section */}
          <div className="bg-[#1B263B] rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Problème de paiement ?</h3>
            <p className="text-white/80 mb-6">
              Si vous rencontrez des difficultés avec le processus de paiement, 
              notre équipe support est là pour vous aider.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="bg-[#FFB23F] hover:bg-[#FF8F00] text-white px-6 py-3 rounded-xl font-medium transition-colors text-center"
              >
                Contacter le support
              </a>
              <a 
                href="/faq" 
                className="border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-medium transition-colors text-center"
              >
                Consulter la FAQ
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}