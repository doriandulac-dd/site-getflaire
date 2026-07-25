"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Produit", id: "product" },
  { label: "Méthode", id: "workflow" },
  { label: "Tarifs", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      data-site-header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "border-b border-[#DDE4EA]/80 bg-white/90 text-[#101722] shadow-[0_12px_40px_rgba(16,23,34,0.08)] backdrop-blur-xl"
          : "border-b border-white/10 bg-[#101722]/65 text-white backdrop-blur-md"
      }`}
    >
      <div className="site-shell flex h-[4.5rem] items-center justify-between">
        <a href="/" aria-label="Accueil GetFlaire" className="relative z-10">
          <img
            src="/GetFlaire logo long hd 2000*500-min.png"
            alt="GetFlaire"
            className="h-8 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-semibold transition-colors ${
                isScrolled ? "text-[#5F7087] hover:text-[#101722]" : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://blog.getflaire.fr"
            className={`text-sm font-semibold transition-colors ${
              isScrolled ? "text-[#5F7087] hover:text-[#101722]" : "text-white/70 hover:text-white"
            }`}
          >
            Blog
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://app.getflaire.fr/login"
            className={`px-4 py-2 text-sm font-bold transition-colors ${
              isScrolled ? "text-[#5F7087] hover:text-[#101722]" : "text-white/75 hover:text-white"
            }`}
          >
            Connexion
          </a>
          <a
            href="https://app.getflaire.fr/login"
            className="button-lift inline-flex items-center gap-2 rounded-md bg-[#FFB23F] px-5 py-3 text-sm font-extrabold text-[#101722] shadow-[0_12px_30px_rgba(255,178,63,0.25)] hover:bg-[#FFC166]"
          >
            Essayer gratuitement
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center lg:hidden"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[#DDE4EA] bg-white px-5 pb-6 pt-3 text-[#101722] lg:hidden">
          <nav className="flex flex-col" aria-label="Navigation mobile">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="border-b border-[#E8EDF1] py-4 text-left text-base font-bold"
              >
                {link.label}
              </button>
            ))}
            <a href="https://blog.getflaire.fr" className="border-b border-[#E8EDF1] py-4 font-bold">
              Blog
            </a>
          </nav>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href="https://app.getflaire.fr/login"
              className="grid h-12 place-items-center rounded-md border border-[#CAD3DB] text-sm font-bold"
            >
              Connexion
            </a>
            <a
              href="https://app.getflaire.fr/login"
              className="grid h-12 place-items-center rounded-md bg-[#FFB23F] text-sm font-extrabold"
            >
              Essai gratuit
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
