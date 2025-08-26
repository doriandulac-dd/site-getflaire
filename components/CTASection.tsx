import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const CTASection = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFB23F] via-[#FF8F00] to-[#1B263B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-300 fill-current" />
              ))}
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Prêt à booster votre 
            <span className="block">prospection immobilière ?</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez plus de 2000 professionnels qui utilisent déjà GetFlaire pour automatiser leur veille immobilière et signer plus de mandats.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            onClick={scrollToPricing}
            size="lg"
            className="bg-white text-[#1B263B] hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Créer mon compte GetFlaire
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
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
    </section>
  );
};

export default CTASection;