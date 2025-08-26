"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Shield, Eye, Lock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button
              type="button"
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
              <Shield className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
            <h1 className="text-4xl font-bold text-[#1B263B] mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-xl text-[#778DA9]">
              Comment nous protégeons et utilisons vos données personnelles
            </p>
            <p className="text-sm text-[#778DA9] mt-2">
              Dernière mise à jour : 26 août 2025
            </p>
          </div>

          {/* Quick Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#FFB23F]/10 rounded-2xl p-6 text-center">
              <Eye className="h-8 w-8 text-[#FFB23F] mx-auto mb-4" aria-hidden="true" />
              <h3 className="font-semibold text-[#1B263B] mb-2">Transparence totale</h3>
              <p className="text-sm text-[#778DA9]">
                Nous vous expliquons clairement quelles données nous collectons et pourquoi
              </p>
            </div>
            <div className="bg-[#FFB23F]/10 rounded-2xl p-6 text-center">
              <Lock className="h-8 w-8 text-[#FFB23F] mx-auto mb-4" aria-hidden="true" />
              <h3 className="font-semibold text-[#1B263B] mb-2">Sécurité maximale</h3>
              <p className="text-sm text-[#778DA9]">Chiffrement et hébergement sécurisé en France</p>
            </div>
            <div className="bg-[#FFB23F]/10 rounded-2xl p-6 text-center">
              <Users className="h-8 w-8 text-[#FFB23F] mx-auto mb-4" aria-hidden="true" />
              <h3 className="font-semibold text-[#1B263B] mb-2">Vos droits respectés</h3>
              <p className="text-sm text-[#778DA9]">Accès, rectification, suppression : vous gardez le contrôle</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-[#1B263B] text-white rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Responsable du traitement</h2>
              <p className="text-white/90 mb-4">
                Le responsable du traitement de vos données personnelles est GetFlaire, dont le siège social est situé 11 rue de la Fontaine Nagot, 10120 Saint-André-les-Vergers.
              </p>
              <p className="text-white/90">
                <strong>Contact :</strong> hello@getflaire.fr
              </p>
            </div>

            {/* Données collectées et finalités */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">Données collectées et finalités</h2>
              <div className="text-[#778DA9] space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#1B263B] mb-3">Service de pige immobilière</h3>
                  <p className="mb-2">
                    <strong className="text-[#1B263B]">Données :</strong> Nom, prénom, email, entreprise, critères de recherche, historique d&apos;utilisation
                  </p>
                  <p className="mb-2">
                    <strong className="text-[#1B263B]">Finalité :</strong> Fourniture du service de surveillance immobilière, alertes personnalisées, notes
                  </p>
                  <p>
                    <strong className="text-[#1B263B]">Base légale :</strong> Exécution du contrat
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1B263B] mb-3">Facturation et paiement</h3>
                  <p className="mb-2">
                    <strong className="text-[#1B263B]">Données :</strong> Informations de facturation, historique des paiements
                  </p>
                  <p className="mb-2">
                    <strong className="text-[#1B263B]">Finalité :</strong> Gestion des abonnements, facturation, comptabilité
                  </p>
                  <p>
                    <strong className="text-[#1B263B]">Base légale :</strong> Exécution du contrat et obligations légales
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1B263B] mb-3">Support client</h3>
                  <p className="mb-2">
                    <strong className="text-[#1B263B]">Données :</strong> Échanges emails, logs de connexion, données techniques
                  </p>
                  <p className="mb-2">
                    <strong className="text-[#1B263B]">Finalité :</strong> Assistance technique, résolution de problèmes
                  </p>
                  <p>
                    <strong className="text-[#1B263B]">Base légale :</strong> Intérêt légitime
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1B263B] mb-3">Sécurité et amélioration</h3>
                  <p className="mb-2">
                    <strong className="text-[#1B263B]">Données :</strong> Logs de connexion, adresses IP, données d&apos;usage anonymisées
                  </p>
                  <p className="mb-2">
                    <strong className="text-[#1B263B]">Finalité :</strong> Sécurité, prévention de la fraude, amélioration du service
                  </p>
                  <p>
                    <strong className="text-[#1B263B]">Base légale :</strong> Intérêt légitime
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1B263B] mb-3">Communications marketing</h3>
                  <p className="mb-2">
                    <strong className="text-[#1B263B]">Données :</strong> Email, préférences de communication
                  </p>
                  <p className="mb-2">
                    <strong className="text-[#1B263B]">Finalité :</strong> Newsletter, informations produit, offres commerciales
                  </p>
                  <p>
                    <strong className="text-[#1B263B]">Base légale :</strong> Consentement (révocable à tout moment)
                  </p>
                </div>
              </div>
            </div>

            {/* Partage des données */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">Partage des données</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>Nous ne vendons jamais vos données personnelles. Nous pouvons les partager uniquement avec :</p>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Sous-traitants techniques</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>
                        <strong>Hébergeur :</strong> Données hébergées en France avec garanties de sécurité
                      </li>
                      <li>
                        <strong>Service d&apos;emailing :</strong> Pour l&apos;envoi des alertes et communications
                      </li>
                      <li>
                        <strong>Support client :</strong> Outils de gestion des tickets et assistance
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Stripe (paiements)</h4>
                    <p className="text-sm">
                      Les données de paiement sont traitées directement par Stripe (certifié PCI DSS). Nous ne stockons aucune donnée bancaire.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Transferts hors UE</h4>
                    <p className="text-sm">
                      Si des transferts hors UE sont nécessaires, ils sont encadrés par des clauses contractuelles types ou des décisions d&apos;adéquation de la Commission européenne.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conservation */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">Conservation des données</h2>
              <div className="text-[#778DA9] space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl overflow-hidden">
                    <thead className="bg-[#1B263B] text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Type de données</th>
                        <th className="px-6 py-4 text-left">Durée de conservation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 font-medium text-[#1B263B]">Données de compte actif</td>
                        <td className="px-6 py-4">Durée de l&apos;abonnement + 1 an</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-[#1B263B]">Données de facturation</td>
                        <td className="px-6 py-4">10 ans (obligation légale)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-[#1B263B]">Logs de connexion</td>
                        <td className="px-6 py-4">12 mois</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-[#1B263B]">Données marketing</td>
                        <td className="px-6 py-4">3 ans ou jusqu&apos;au retrait du consentement</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Droits RGPD */}
            <div className="bg-[#FFB23F] text-white rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Vos droits RGPD</h2>
              <div className="space-y-4">
                <p className="text-white/90 mb-6">Conformément au RGPD, vous disposez des droits suivants :</p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "Droit d'accès", desc: "Obtenir une copie de vos données personnelles" },
                    { title: "Droit de rectification", desc: "Corriger des données inexactes ou incomplètes" },
                    { title: "Droit à l'effacement", desc: "Demander la suppression de vos données" },
                    { title: "Droit à la portabilité", desc: "Récupérer vos données dans un format structuré" },
                    { title: "Droit d'opposition", desc: "Vous opposer au traitement de vos données" },
                    { title: "Droit de limitation", desc: "Limiter le traitement de vos données" },
                  ].map((item) => (
                    <div key={item.title} className="bg-white/10 rounded-xl p-4">
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-white/80">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 rounded-xl p-6 mt-6">
                  <h4 className="font-semibold mb-3">Comment exercer vos droits ?</h4>
                  <p className="text-sm text-white/90 mb-4">
                    Pour exercer vos droits, contactez-nous à : <strong>hello@getflaire.fr</strong>
                  </p>
                  <p className="text-xs text-white/70">Nous nous engageons à répondre dans un délai maximum de 30 jours.</p>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">Cookies et technologies similaires</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>Notre site utilise des cookies pour améliorer votre expérience :</p>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Cookies essentiels</h4>
                    <p className="text-sm">Nécessaires au fonctionnement du site (authentification, sécurité)</p>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Cookies analytiques</h4>
                    <p className="text-sm">Nous aident à comprendre l&apos;utilisation du site (avec votre consentement)</p>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Gestion des cookies</h4>
                    <p className="text-sm">Vous pouvez gérer vos préférences via les paramètres de votre navigateur</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-[#1B263B] text-white rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Contact et réclamations</h2>
              <div className="space-y-4">
                <p className="text-white/90">Pour toute question concernant cette politique de confidentialité :</p>

                <div className="bg-white/10 rounded-xl p-6">
                  <div className="space-y-2 text-sm text-white/90">
                    <p>
                      <strong>Email :</strong> hello@getflaire.fr
                    </p>
                    <p>
                      <strong>Adresse :</strong> GetFlaire, 11 rue de la Fontaine Nagot, 10120 Saint-André-les-Vergers
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-xs text-white/70">
                      Vous pouvez également introduire une réclamation auprès de la CNIL : www.cnil.fr
                    </p>
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