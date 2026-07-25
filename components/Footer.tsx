const quickLinks = [
  { label: "Fonctionnalités", href: "/#product" },
  { label: "Tarifs", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "https://blog.getflaire.fr" },
  { label: "Contact", href: "/contact" },
  { label: "Affiliation", href: "/affiliation" },
];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGU", href: "/cgu" },
  { label: "Confidentialité", href: "/politique-confidentialite" },
  { label: "Conditions", href: "/conditions" },
  { label: "Remboursements", href: "/remboursements" },
  { label: "Annulation", href: "/annulation" },
  { label: "RGPD", href: "/rgpd" },
];

const Footer = () => {
  return (
    <footer className="bg-[#101722] text-white">
      <div className="site-shell py-16 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <img
              src="/GetFlaire logo long hd 2000*500-min.png"
              alt="GetFlaire"
              className="h-10 w-auto"
            />
            <p className="mt-6 max-w-md text-base leading-7 text-white/45">
              La pige immobilière nouvelle génération pour détecter, suivre et convertir davantage d’opportunités.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.13em] text-white/35">GetFlaire</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm font-bold text-white/65 transition-colors hover:text-[#FFB23F]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.13em] text-white/35">Informations</h3>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm font-bold text-white/65 transition-colors hover:text-[#FFB23F]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs font-semibold text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 GetFlaire. Tous droits réservés.</p>
          <p>Hébergé en France · Données sécurisées</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
