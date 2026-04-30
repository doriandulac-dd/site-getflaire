"use client";

import { Linkedin, Instagram, Play } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#0F1722] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img 
                src="/GetFlaire logo long hd 2000*500-min.png" 
                alt="Logo GetFlaire" 
                className="h-12 w-auto"
              />
              <p className="text-[#778DA9] mt-2 text-lg">
                La pige immobilière nouvelle génération
              </p>
            </div>
            
            <p className="text-[#778DA9] leading-relaxed max-w-md">
              GetFlaire révolutionne la prospection immobilière en automatisant la veille du marché et en centralisant tous vos outils dans une seule plateforme intuitive.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              <a 
                href="#"
                className="bg-[#778DA9]/20 hover:bg-[#FFB23F] p-3 rounded-xl transition-colors duration-200 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-[#778DA9] group-hover:text-white" />
              </a>
              <a 
                href="#"
                className="bg-[#778DA9]/20 hover:bg-[#FFB23F] p-3 rounded-xl transition-colors duration-200 group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-[#778DA9] group-hover:text-white" />
              </a>
              <a 
                href="#"
                className="bg-[#778DA9]/20 hover:bg-[#FFB23F] p-3 rounded-xl transition-colors duration-200 group"
                aria-label="TikTok"
              >
                <Play className="h-5 w-5 text-[#778DA9] group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liens rapides</h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-[#778DA9] hover:text-[#FFB23F] transition-colors"
                >
                  Fonctionnalités
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-[#778DA9] hover:text-[#FFB23F] transition-colors"
                >
                  Tarifs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-[#778DA9] hover:text-[#FFB23F] transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a href="https://leblog.getflaire.fr" className="text-[#778DA9] hover:text-[#FFB23F] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support & Légal</h4>
            <ul className="space-y-4">
              <li>
                <a href="/mentions-legales" className="text-[#778DA9] hover:text-[#FFB23F] transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/cgu" className="text-[#778DA9] hover:text-[#FFB23F] transition-colors">
                  CGU
                </a>
              </li>
              <li>
                <a href="/politique-confidentialite" className="text-[#778DA9] hover:text-[#FFB23F] transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="/conditions" className="text-[#778DA9] hover:text-[#FFB23F] transition-colors">
                  Conditions
                </a>
              </li>
              <li>
                <a href="/remboursements" className="text-[#778DA9] hover:text-[#FFB23F] transition-colors">
                  Remboursements
                </a>
              </li>
              <li>
                <a href="/annulation" className="text-[#778DA9] hover:text-[#FFB23F] transition-colors">
                  Annulation
                </a>
              </li>
              <li>
                <a href="/contact" className="text-[#778DA9] hover:text-[#FFB23F] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/rgpd" className="text-[#778DA9] hover:text-[#FFB23F] transition-colors">
                  RGPD
                </a>
              </li>
              <li>
                <a href="/affiliation" className="text-[#778DA9] hover:text-[#FFB23F] transition-colors">
                  Affiliation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#778DA9]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#778DA9] text-sm mb-4 md:mb-0">
              © 2026 GetFlaire. Tous droits réservés.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-[#778DA9]">
              <span>🇫🇷 Fait avec ❤️ en France</span>
              <span>•</span>
              <span>Hébergé par OVH</span>
              <span>•</span>
              <span>Données sécurisées</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
