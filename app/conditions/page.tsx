"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Conditions() {
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
            <div className="bg-gradient-to-br from-[#FFB23F] to-[#FF8F00] rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-[#1B263B] mb-4">
              Conditions Générales d&apos;Utilisation
            </h1>
            <p className="text-xl text-[#778DA9]">
              Conditions d&apos;utilisation du service GetFlaire
            </p>
            <p className="text-sm text-[#778DA9] mt-2">
              Dernière mise à jour : 15 janvier 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-[#FFB23F]/10 border-l-4 border-[#FFB23F] rounded-r-2xl p-6">
              <p className="text-[#1B263B] font-medium mb-2">Important</p>
              <p className="text-[#778DA9]">
                Le support client est disponible par email à hello@getflaire.fr avec un temps de réponse moyen de 2 heures en jours ouvrés.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">1. Objet du service</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  GetFlaire est un service SaaS (Software as a Service) de pige immobilière qui propose :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Surveillance automatique des annonces immobilières</li>
                  <li>Système d&apos;alertes personnalisées</li>
                  <li>Outils de surveillance de la concurrence</li>
                  <li>CRM intégré pour la gestion des prospects</li>
                  <li>Outils de collaboration multi-utilisateurs</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">2. Accès et comptes utilisateur</h2>
              <div className="text-[#778DA9] space-y-4">
                <h3 className="text-lg font-semibold text-[#1B263B]">2.1 Inscription</h3>
                <p>
                  L&apos;accès aux services nécessite la création d&apos;un compte utilisateur. L&apos;inscription est réservée aux professionnels de l&apos;immobilier.
                </p>
                
                <h3 className="text-lg font-semibold text-[#1B263B]">2.2 Responsabilité du compte</h3>
                <p>
                  Vous êtes responsable de la confidentialité de vos identifiants et de toutes les activités effectuées sous votre compte.
                </p>

                <h3 className="text-lg font-semibold text-[#1B263B]">2.3 Période d&apos;essai</h3>
                <p>
                  Une période d&apos;essai gratuite de 14 jours peut être proposée pour certains plans. Aucune carte bancaire n&apos;est requise pour débuter l&apos;essai.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">3. Offres et tarifs</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>GetFlaire propose plusieurs formules d&apos;abonnement :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-[#1B263B]">Plan Starter :</strong> 15€ HT/mois</li>
                  <li><strong className="text-[#1B263B]">Plan Pro :</strong> 20€ HT/mois</li>
                  <li><strong className="text-[#1B263B]">Plan Équipe :</strong> 30€ HT/mois</li>
                  <li><strong className="text-[#1B263B]">Plan Enterprise :</strong> 50€ HT/mois</li>
                </ul>
                <p>
                  Les tarifs sont indiqués hors taxes et peuvent évoluer. Toute modification tarifaire sera notifiée 30 jours à l&apos;avance.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">4. Facturation et paiement</h2>
              <div className="text-[#778DA9] space-y-4">
                <h3 className="text-lg font-semibold text-[#1B263B]">4.1 Modalités de paiement</h3>
                <p>Les abonnements peuvent être facturés :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mensuellement</li>
                  <li>Trimestriellement (remise de 10%)</li>
                  <li>Annuellement (remise de 20%)</li>
                </ul>

                <h3 className="text-lg font-semibold text-[#1B263B]">4.2 Reconduction tacite</h3>
                <p>
                  Les abonnements se renouvellent automatiquement pour la même durée, sauf résiliation avant la date d&apos;échéance.
                </p>

                <h3 className="text-lg font-semibold text-[#1B263B]">4.3 Défaut de paiement</h3>
                <p>
                  En cas de défaut de paiement, l&apos;accès au service peut être suspendu après mise en demeure restée sans effet pendant 15 jours.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">5. Annulation et résiliation</h2>
              <div className="text-[#778DA9] space-y-4">
                <h3 className="text-lg font-semibold text-[#1B263B]">5.1 Résiliation par l&apos;utilisateur</h3>
                <p>
                  Vous pouvez résilier votre abonnement à tout moment depuis votre espace client. La résiliation prend effet à la fin de la période de facturation en cours.
                </p>

                <h3 className="text-lg font-semibold text-[#1B263B]">5.2 Résiliation par GetFlaire</h3>
                <p>
                  GetFlaire peut résilier un compte en cas de non-respect des présentes conditions, après mise en demeure restée sans effet pendant 15 jours.
                </p>

                <p className="bg-white p-4 rounded-xl border-l-4 border-[#FFB23F]">
                  <strong className="text-[#1B263B]">Politique d&apos;annulation détaillée :</strong> 
                  <a href="/annulation" className="text-[#FFB23F] hover:underline ml-1">Consultez notre page dédiée</a>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">6. Remboursements</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  Les périodes d&apos;abonnement entamées ne sont généralement pas remboursées, sauf dans les cas prévus par la loi ou en cas d&apos;indisponibilité prolongée du service de notre fait.
                </p>
                <p className="bg-white p-4 rounded-xl border-l-4 border-[#FFB23F]">
                  <strong className="text-[#1B263B]">Politique de remboursement complète :</strong> 
                  <a href="/remboursements" className="text-[#FFB23F] hover:underline ml-1">Consultez notre page dédiée</a>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">7. Utilisation acceptable</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>Il est interdit d&apos;utiliser GetFlaire pour :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Des activités illégales ou frauduleuses</li>
                  <li>Perturber le fonctionnement du service</li>
                  <li>Tenter de contourner les mesures de sécurité</li>
                  <li>Extraire massivement des données sans autorisation</li>
                  <li>Partager vos identifiants avec des tiers non autorisés</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">8. Disponibilité et support</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  GetFlaire s&apos;efforce d&apos;assurer une disponibilité maximale du service, avec un objectif de 99,5% de temps de fonctionnement.
                </p>
                <p>
                  Le support client est disponible par email à support@getflaire.fr avec un temps de réponse moyen de 2 heures en jours ouvrés.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">9. Limitation de responsabilité</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  La responsabilité de GetFlaire est limitée aux dommages directs et ne peut excéder le montant des sommes versées par l&apos;utilisateur au cours des 12 derniers mois.
                </p>
                <p>
                  GetFlaire ne saurait être tenue responsable des dommages indirects, pertes de profits ou préjudices commerciaux.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">10. Propriété intellectuelle</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  GetFlaire et tous ses éléments (logiciels, bases de données, contenus) sont protégés par le droit de la propriété intellectuelle.
                </p>
                <p>
                  L&apos;utilisateur dispose d&apos;un droit d&apos;usage personnel et non exclusif du service, sans droit de reproduction ou de distribution.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">11. Données utilisateur</h2>
              <div className="text-[#778DA9] space-y-4">
                <h3 className="text-lg font-semibold text-[#1B263B]">11.1 Propriété des données</h3>
                <p>
                  L&apos;utilisateur reste propriétaire de ses données. GetFlaire s&apos;engage à ne pas les utiliser à d&apos;autres fins que la fourniture du service.
                </p>

                <h3 className="text-lg font-semibold text-[#1B263B]">11.2 Export des données</h3>
                <p>
                  L&apos;utilisateur peut exporter ses données à tout moment dans un format standard.
                </p>

                <p className="bg-white p-4 rounded-xl border-l-4 border-[#FFB23F]">
                  <strong className="text-[#1B263B]">Protection des données :</strong> 
                  <a href="/confidentialite" className="text-[#FFB23F] hover:underline ml-1">Consultez notre politique de confidentialité</a>
                </p>
              </div>
            </div>

            <div className="bg-[#1B263B] text-white rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">12. Droit applicable et juridiction</h2>
              <div className="space-y-4">
                <p className="text-white/90">
                  Les présentes conditions sont régies par le droit français. En cas de litige, les tribunaux de Troyes seront seuls compétents.
                </p>
                <p className="text-white/90">
                  Avant tout recours contentieux, les parties s&apos;engagent à rechercher une solution amiable en contactant notre support.
                </p>
                
                <div className="bg-white/10 rounded-xl p-6 mt-6">
                  <h4 className="font-semibold mb-3">Contact</h4>
                  <div className="space-y-2 text-sm text-white/90">
                    <p><strong>Email :</strong> hello@getflaire.fr</p>
                    <p><strong>Adresse :</strong> GetFlaire SAS, 10 rue Exemple, 10000 Troyes, France</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}