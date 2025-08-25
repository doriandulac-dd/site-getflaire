"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navigateToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // Si on est déjà sur la page d'accueil, faire défiler vers la section
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Sinon, naviguer vers la page d'accueil avec l'ancre
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => router.push('/')}
              className="text-2xl font-bold bg-gradient-to-r from-[#FFB23F] to-[#FF8F00] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              GetFlaire
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigateToSection('hero')}
              className="text-[#1B263B] hover:text-[#FFB23F] transition-colors font-medium"
            >
              Accueil
            </button>
            <button 
              onClick={() => navigateToSection('features')}
              className="text-[#1B263B] hover:text-[#FFB23F] transition-colors font-medium"
            >
              Fonctionnalités
            </button>
            <button 
              onClick={() => navigateToSection('pricing')}
              className="text-[#1B263B] hover:text-[#FFB23F] transition-colors font-medium"
            >
              Tarifs
            </button>
            <button 
              onClick={() => navigateToSection('faq')}
              className="text-[#1B263B] hover:text-[#FFB23F] transition-colors font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => router.push('/contact')}
              className="text-[#1B263B] hover:text-[#FFB23F] transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => navigateToSection('pricing')}
              className="bg-[#FFB23F] hover:bg-[#FF8F00] text-white px-6 py-2 rounded-2xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Essayer GetFlaire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#1B263B] p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <button 
                onClick={() => navigateToSection('hero')}
                className="block w-full text-left px-3 py-2 text-[#1B263B] hover:text-[#FFB23F] transition-colors font-medium"
              >
                Accueil
              </button>
              <button 
                onClick={() => navigateToSection('features')}
                className="block w-full text-left px-3 py-2 text-[#1B263B] hover:text-[#FFB23F] transition-colors font-medium"
              >
                Fonctionnalités
              </button>
              <button 
                onClick={() => navigateToSection('pricing')}
                className="block w-full text-left px-3 py-2 text-[#1B263B] hover:text-[#FFB23F] transition-colors font-medium"
              >
                Tarifs
              </button>
              <button 
                onClick={() => navigateToSection('faq')}
                className="block w-full text-left px-3 py-2 text-[#1B263B] hover:text-[#FFB23F] transition-colors font-medium"
              >
                FAQ
              </button>
              <button 
                onClick={() => router.push('/contact')}
                className="block w-full text-left px-3 py-2 text-[#1B263B] hover:text-[#FFB23F] transition-colors font-medium"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => navigateToSection('pricing')}
                  className="w-full bg-[#FFB23F] hover:bg-[#FF8F00] text-white px-6 py-2 rounded-2xl font-medium transition-all duration-200"
                >
                  Essayer GetFlaire
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;