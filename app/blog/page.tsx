"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen } from 'lucide-react';

export default function Blog() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-br from-[#FFB23F] to-[#FF8F00] rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-[#1B263B] mb-4">
              Blog GetFlaire
            </h1>
            <p className="text-xl text-[#778DA9] max-w-3xl mx-auto">
              Découvrez nos conseils, actualités et guides pour optimiser votre prospection immobilière
            </p>
          </div>

          {/* No Posts State */}
          <div className="text-center py-12">
            <div className="bg-gray-50 rounded-2xl p-8 max-w-md mx-auto">
              <BookOpen className="h-12 w-12 text-[#778DA9] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#1B263B] mb-2">
                Aucun article pour le moment
              </h3>
              <p className="text-[#778DA9]">
                Les premiers articles seront bientôt disponibles. Revenez nous voir !
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#FFB23F] to-[#FF8F00] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Envie de tester GetFlaire ?</h3>
              <p className="text-lg opacity-90 mb-6">
                Découvrez comment notre plateforme peut révolutionner votre prospection immobilière
              </p>
              <button 
                onClick={() => window.location.href = '/#pricing'}
                className="bg-white text-[#1B263B] px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Essayer gratuitement
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}