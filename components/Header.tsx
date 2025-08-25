"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-[#FFB23F] to-[#FF8F00] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              GetFlaire
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-[#778DA9] hover:text-[#1B263B] font-medium transition-colors"
            >
              Fonctionnalités
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-[#778DA9] hover:text-[#1B263B] font-medium transition-colors"
            >
              Tarifs
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-[#778DA9] hover:text-[#1B263B] font-medium transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#778DA9] hover:text-[#1B263B] font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline"
              onClick={() => window.location.href = 'https://app.getflaire.fr/login'}
              className="border-[#778DA9] text-[#778DA9] hover:bg-[#778DA9] hover:text-white"
            >
              Connexion
            </Button>
            <Button 
              onClick={() => scrollToSection('pricing')}
              className="bg-[#FFB23F] hover:bg-[#FF8F00] text-white"
            >
              Essayer gratuitement
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#778DA9] hover:text-[#1B263B] p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-[#778DA9] hover:text-[#1B263B] font-medium"
              >
                Fonctionnalités
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-3 py-2 text-[#778DA9] hover:text-[#1B263B] font-medium"
              >
                Tarifs
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-3 py-2 text-[#778DA9] hover:text-[#1B263B] font-medium"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-[#778DA9] hover:text-[#1B263B] font-medium"
              >
                Contact
              </button>
              
              <div className="pt-4 space-y-2">
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = 'https://app.getflaire.fr/login'}
                  className="w-full border-[#778DA9] text-[#778DA9] hover:bg-[#778DA9] hover:text-white"
                >
                  Connexion
                </Button>
                <Button 
                  onClick={() => scrollToSection('pricing')}
                  className="w-full bg-[#FFB23F] hover:bg-[#FF8F00] text-white"
                >
                  Essayer gratuitement
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