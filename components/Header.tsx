"use client";

import { useState } from 'react';
import { Menu, Sparkles, X } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/70 bg-white/[0.82] shadow-[0_10px_45px_rgba(27,38,59,0.08)] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="flex items-center rounded-full bg-white/70 px-2 py-1 shadow-sm transition-opacity hover:opacity-85"
            >
              <img
                src="/GetFlaire logo long hd 2000*500-min.png"
                alt="Logo GetFlaire"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center rounded-full border border-[#1B263B]/10 bg-white/70 px-4 py-2 shadow-sm">
            <button 
              onClick={() => scrollToSection('features')}
              className="px-3 text-sm font-semibold text-[#62738B] transition-colors hover:text-[#1B263B]"
            >
              Fonctionnalités
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="px-3 text-sm font-semibold text-[#62738B] transition-colors hover:text-[#1B263B]"
            >
              Tarifs
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="px-3 text-sm font-semibold text-[#62738B] transition-colors hover:text-[#1B263B]"
            >
              FAQ
            </button>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="px-3 text-sm font-semibold text-[#62738B] transition-colors hover:text-[#1B263B]"
            >
              Contact
            </button>
            <button 
              onClick={() => window.location.href = 'https://leblog.getflaire.fr'}
              className="px-3 text-sm font-semibold text-[#62738B] transition-colors hover:text-[#1B263B]"
            >
              Blog
            </button>
            <button 
              onClick={() => window.location.href = '/affiliation'}
              className="px-3 text-sm font-semibold text-[#62738B] transition-colors hover:text-[#1B263B]"
            >
              Affiliation
            </button>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline"
              onClick={() => window.location.href = 'https://app.getflaire.fr/login'}
              className="rounded-full border-[#1B263B]/[0.15] bg-white/60 text-[#1B263B] hover:bg-[#1B263B] hover:text-white"
            >
              Connexion
            </Button>
            <Button 
              onClick={() => window.location.href = 'https://app.getflaire.fr/login'}
              className="rounded-full bg-[#FFB23F] text-[#1B263B] shadow-lg shadow-[#FFB23F]/25 hover:bg-[#FF8F00]"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Essayer gratuitement
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full border border-[#1B263B]/10 bg-white/70 p-2 text-[#1B263B] shadow-sm"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-[#1B263B]/10 bg-white/95 px-2 pb-3 pt-2 shadow-xl">
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
                onClick={() => window.location.href = '/contact'}
                className="block w-full text-left px-3 py-2 text-[#778DA9] hover:text-[#1B263B] font-medium"
              >
                Contact
              </button>
              <button 
                onClick={() => window.location.href = 'https://leblog.getflaire.fr'}
                className="block w-full text-left px-3 py-2 text-[#778DA9] hover:text-[#1B263B] font-medium"
              >
                Blog
              </button>
              <button 
                onClick={() => window.location.href = '/affiliation'}
                className="block w-full text-left px-3 py-2 text-[#778DA9] hover:text-[#1B263B] font-medium"
              >
                Affiliation
              </button>
              
              <div className="pt-4 space-y-2">
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = 'https://app.getflaire.fr/login'}
                  className="w-full rounded-full border-[#1B263B]/[0.15] text-[#1B263B] hover:bg-[#1B263B] hover:text-white"
                >
                  Connexion
                </Button>
                <Button 
                  onClick={() => window.location.href = 'https://app.getflaire.fr/login'}
                  className="w-full rounded-full bg-[#FFB23F] text-[#1B263B] hover:bg-[#FF8F00]"
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
