"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CGU() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              variant="outline"
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-[#778DA9] border-[#778DA9] hover:bg-[#778DA9] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Retour</span>
            </Button>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#1B263B] mb-4">
              Conditions Générales d'Utilisation
            </h1>
            <p className="text-xl text-[#778DA9]">
              Dernière mise à jour : 15 janvier 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-[#FFB23F]/10 border-l-4 border-[#FFB23F] rounded-r-2xl p-6">
              <p className="text-[#1B263B] font-medium mb-2">Important</p>
              <p className="text-[#778DA9]">
                En utilisant les services GetFlaire, vous acceptez les présentes conditions générales d'utilisation. 
                Nous vous recommandons de les lire attentivement.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">1. Objet</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation de la plateforme GetFlaire, 
                  service SaaS de pige immobilière, d'alertes personnalisées et de CRM destiné aux professionnels de l'immobilier.
                </p>
                <p>
                  GetFlaire est édité par GetFlaire SAS, société par actions simplifiée au capital de 50 000 €, 
                  immatriculée au RCS de Paris sous le numéro B 123 456 789.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">2. Définitions</h2>
              <div className="text-[#778DA9] space-y-4">
                <p><strong className="text-[#1B263B]">Utilisateur :</strong> Toute personne physique ou morale utilisant les services GetFlaire.</p>
                <p><strong className="text-[#1B263B]">Services :</strong> L'ensemble des fonctionnalités proposées par la plateforme GetFlaire.</p>
                <p><strong className="text-[#1B263B]">Compte :</strong> Espace personnel de l'Utilisateur sur la plateforme GetFlaire.</p>
                <p><strong className="text-[#1B263B]">Abonnement :</strong> Souscription payante donnant accès aux services GetFlaire.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">3. Accès aux services</h2>
              <div className="text-[#778DA9] space-y-4">
                <h3 className="text-lg font-semibold text-[#1B263B]">3.1 Inscription</h3>
                <p>
                  L'accès aux services GetFlaire nécessite la création d'un compte utilisateur. L'inscription est réservée 
                  aux professionnels de l'immobilier justifiant de leur activité.
                </p>
                
                <h3 className="text-lg font-semibold text-[#1B263B]">3.2 Identifiants</h3>
                <p>
                  L'Utilisateur s'engage à conserver confidentiels ses identifiants de connexion et à ne pas les communiquer 
                  à des tiers. Il est seul responsable de l'utilisation qui en est faite.
                </p>

                <h3 className="text-lg font-semibold text-[#1B263B]">3.3 Période d'essai</h3>
                <p>
                  GetFlaire propose une période d'essai gratuite de 14 jours pour les nouveaux utilisateurs. 
                  Aucune carte bancaire n'est requise pour débuter l'essai.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">4. Abonnements et tarification</h2>
              <div className="text-[#778DA9] space-y-4">
                <h3 className="text-lg font-semibold text-[#1B263B]">4.1 Formules d'abonnement</h3>
                <p>
                  GetFlaire propose différentes formules d'abonnement adaptées aux besoins des utilisateurs :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Plan Starter : 15€ HT/mois</li>
                  <li>Plan Pro : 20€ HT/mois</li>
                  <li>Plan Équipe : 30€ HT/mois</li>
                  <li>Plan Enterprise : 50€ HT/mois</li>
                </ul>

                <h3 className="text-lg font-semibold text-[#1B263B]">4.2 Facturation</h3>
                <p>
                  Les abonnements sont facturés mensuellement, trimestriellement ou annuellement selon l'option choisie. 
                  Des remises sont appliquées pour les paiements trimestriels (-10%) et annuels (-20%).
                </p>

                <h3 className="text-lg font-semibold text-[#1B263B]">4.3 Résiliation</h3>
                <p>
                  L'Utilisateur peut résilier son abonnement à tout moment sans préavis ni pénalité. 
                  La résiliation prend effet à la fin de la période de facturation en cours.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">5. Utilisation des services</h2>
              <div className="text-[#778DA9] space-y-4">
                <h3 className="text-lg font-semibold text-[#1B263B]">5.1 Usage autorisé</h3>
                <p>
                  Les services GetFlaire sont destinés exclusivement à un usage professionnel dans le cadre d'activités immobilières légales.
                </p>

                <h3 className="text-lg font-semibold text-[#1B263B]">5.2 Interdictions</h3>
                <p>Il est formellement interdit de :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Utiliser les services à des fins illégales ou frauduleuses</li>
                  <li>Tenter de contourner les mesures de sécurité</li>
                  <li>Partager ses identifiants avec des tiers non autorisés</li>
                  <li>Extraire massivement des données sans autorisation</li>
                  <li>Perturber le fonctionnement des services</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">6. Données et confidentialité</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  GetFlaire s'engage à protéger les données personnelles de ses utilisateurs conformément au RGPD. 
                  Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-[#FFB23F] hover:underline">Politique de confidentialité</a>.
                </p>
                <p>
                  L'Utilisateur reste propriétaire de ses données et peut les exporter ou demander leur suppression à tout moment.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">7. Disponibilité et maintenance</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  GetFlaire s'efforce d'assurer une disponibilité maximale de ses services, avec un objectif de 99,5% de temps de fonctionnement.
                </p>
                <p>
                  Des maintenances programmées peuvent occasionner des interruptions temporaires, notifiées à l'avance aux utilisateurs.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">8. Limitation de responsabilité</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  GetFlaire ne saurait être tenue responsable des dommages indirects, pertes de profits ou préjudices commerciaux 
                  résultant de l'utilisation ou de l'impossibilité d'utiliser les services.
                </p>
                <p>
                  La responsabilité de GetFlaire est limitée au montant des sommes versées par l'Utilisateur au cours des 12 derniers mois.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">9. Modification des CGU</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  GetFlaire se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés 
                  des modifications par email et/ou notification sur la plateforme.
                </p>
                <p>
                  La poursuite de l'utilisation des services après modification vaut acceptation des nouvelles conditions.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">10. Droit applicable et juridiction</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  Les présentes CGU sont régies par le droit français. En cas de litige, les tribunaux de Paris seront seuls compétents.
                </p>
                <p>
                  Avant tout recours contentieux, les parties s'engagent à rechercher une solution amiable.
                </p>
              </div>
            </div>

            <div className="bg-[#1B263B] text-white rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Contact</h2>
              <p className="mb-4">
                Pour toute question relative aux présentes CGU, vous pouvez nous contacter :
              </p>
              <div className="space-y-2">
                <p><strong>Email :</strong> legal@getflaire.fr</p>
                <p><strong>Adresse :</strong> GetFlaire SAS, 123 Avenue des Champs-Élysées, 75008 Paris</p>
                <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}