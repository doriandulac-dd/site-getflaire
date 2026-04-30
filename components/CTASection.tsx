"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import AnimatedSection from '@/components/motion/AnimatedSection';

const CTASection = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatedSection className="relative overflow-hidden bg-[#101827] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(255,178,63,0.28),transparent_28rem),radial-gradient(circle_at_82%_10%,rgba(119,141,169,0.18),transparent_30rem)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-animate-item className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-300 fill-current" />
              ))}
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Prêt à booster votre 
            <span className="block">prospection immobilière ?</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez plus de 2000 professionnels qui utilisent déjà GetFlaire pour automatiser leur veille immobilière et signer plus de mandats.
          </p>
        </div>

        <div data-animate-item className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            onClick={scrollToPricing}
            size="lg"
            className="bg-[#FFB23F] text-[#1B263B] hover:bg-[#FF8F00] px-8 py-4 rounded-full font-bold shadow-xl shadow-[#FFB23F]/25"
          >
            Créer mon compte GetFlaire
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
        </div>

        {/* Trust indicators */}
        <div data-animate-item className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
          <div className="flex items-center space-x-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>14 jours d'essai gratuit</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Sans engagement</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Support français</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CTASection;
