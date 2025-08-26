"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Shield, Eye, Lock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PolitiqueConfidentialite() {
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
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-[#1B263B] mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-xl text-[#778DA9]">
              Comment nous protégeons et utilisons vos données personnelles
            </p>
            <p className="text-sm text-[#778DA9] mt-2">
              Dernière mise à jour : 15 janvier 2025
            </p>
          </div>

          {/* Quick Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#FFB23F]/10 rounded-2xl p-6 text-center">
              <Eye className="h-8 w-8 text-[#FFB23F] mx-auto mb-4" />
              <h3 className="font-semibold text-[#1B263B] mb-2">Transparence totale</h3>
              <p className="text-sm text-[#778DA9]">Nous vous expliquons clairement quelles données nous collectons et pourquoi</p>
            </div>
            <div className="bg-[#FFB23F]/10 rounded-2xl p-6 text-center">
              <Lock className="h-8 w-8 text-[#FFB23F] mx-auto mb-4" />
              <h3 className="font-semibold text-[#1B263B] mb-2">Sécurité maximale</h3>
              <p className="text-sm text-[#778DA9]">Chiffrement SSL 256 bits et hébergement sécurisé en France</p>
            </div>
            <div className="bg-[#FFB23F]/10 rounded-2xl p-6 text-center">
              <Users className="h-8 w-8 text-[#FFB23F] mx-auto mb-4" />
              <h3 className="font-semibold text-[#1B263B] mb-2">Vos droits respectés</h3>
              <p className="text-sm text-[#778DA9]">Accès, rectification, suppression : vous gardez le contrôle</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-[#1B263B] text-white rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Notre engagement</h2>
              <p className="text-white/90">
                Chez GetFlaire, la protection de vos données personnelles est une priorité absolue. Cette politique de confidentialité 
                vous explique de manière transparente comment nous collectons, utilisons et protégeons vos informations personnelles 
                dans le respect du Règlement Général sur la Protection des Données (RGPD).
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">1. Responsable du traitement</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  Le responsable du traitement de vos données personnelles est :
                </p>
                <div className="bg-white rounded-xl p-6 border-l-4 border-[#FFB23F]">
                  <p><strong className="text-[#1B263B]">GetFlaire SAS</strong><br />
                  11 rue de la fontaine nagot, 10120 Saint-André-les-Vergers<br />
                  <strong className="text-[#1B263B]">Email :</strong> hello@getflaire.fr<br />
                  
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">2. Données collectées</h2>
              <div className="text-[#778DA9] space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#1B263B] mb-3">2.1 Données d'identification</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse email professionnelle</li>
                    <li>Numéro de téléphone</li>
                    <li>Nom de l'entreprise</li>
                    <li>Fonction/poste occupé</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1B263B] mb-3">2.2 Données d'utilisation</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Logs de connexion (adresse IP, date, heure)</li>
                    <li>Données de navigation sur la plateforme</li>
                    <li>Préférences et paramètres de recherche</li>
                    <li>Historique des actions effectuées</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1B263B] mb-3">2.3 Données de facturation</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Informations de facturation</li>
                    <li>Historique des paiements</li>
                    <li>Données bancaires (traitées par notre prestataire de paiement sécurisé)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">3. Finalités du traitement</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>Nous utilisons vos données personnelles pour :</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Services principaux</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Création et gestion de votre compte</li>
                      <li>Fourniture des services de pige immobilière</li>
                      <li>Envoi d'alertes personnalisées</li>
                      <li>Gestion du CRM intégré</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Support et amélioration</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Support client et assistance technique</li>
                      <li>Amélioration de nos services</li>
                      <li>Analyses statistiques anonymisées</li>
                      <li>Prévention de la fraude</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">4. Base légale du traitement</h2>
              <div className="text-[#778DA9] space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Exécution du contrat</h4>
                    <p className="text-sm">Fourniture des services GetFlaire conformément à nos CGU</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Intérêt légitime</h4>
                    <p className="text-sm">Amélioration de nos services et prévention de la fraude</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Consentement</h4>
                    <p className="text-sm">Communications marketing (avec possibilité de retrait)</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Obligation légale</h4>
                    <p className="text-sm">Respect des obligations comptables et fiscales</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">5. Partage des données</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  Nous ne vendons jamais vos données personnelles. Nous pouvons les partager uniquement avec :
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Prestataires de services</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Hébergeur (OVHcloud - France)</li>
                      <li>Processeur de paiement (Stripe - certifié PCI DSS)</li>
                      <li>Service d'emailing (avec consentement)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Obligations légales</h4>
                    <p className="text-sm">
                      Autorités compétentes en cas de demande légale ou judiciaire
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">6. Durée de conservation</h2>
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
                        <td className="px-6 py-4">Durée de l'abonnement + 1 an</td>
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
                        <td className="px-6 py-4">3 ans ou jusqu'au retrait du consentement</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">7. Sécurité des données</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>Nous mettons en œuvre des mesures de sécurité robustes :</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Mesures techniques</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Chiffrement SSL/TLS 256 bits</li>
                      <li>Authentification à deux facteurs</li>
                      <li>Sauvegardes automatiques chiffrées</li>
                      <li>Surveillance 24/7 des systèmes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Mesures organisationnelles</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Accès limité aux données (principe du moindre privilège)</li>
                      <li>Formation régulière des équipes</li>
                      <li>Audits de sécurité périodiques</li>
                      <li>Plan de réponse aux incidents</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFB23F] text-white rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">8. Vos droits</h2>
              <div className="space-y-4">
                <p className="text-white/90 mb-6">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">Droit d'accès</h4>
                    <p className="text-sm text-white/80">Obtenir une copie de vos données personnelles</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">Droit de rectification</h4>
                    <p className="text-sm text-white/80">Corriger des données inexactes ou incomplètes</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">Droit à l'effacement</h4>
                    <p className="text-sm text-white/80">Demander la suppression de vos données</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">Droit à la portabilité</h4>
                    <p className="text-sm text-white/80">Récupérer vos données dans un format structuré</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">Droit d'opposition</h4>
                    <p className="text-sm text-white/80">Vous opposer au traitement de vos données</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">Droit de limitation</h4>
                    <p className="text-sm text-white/80">Limiter le traitement de vos données</p>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6 mt-6">
                  <h4 className="font-semibold mb-3">Comment exercer vos droits ?</h4>
                  <p className="text-sm text-white/90 mb-4">
                    Pour exercer vos droits, contactez notre Délégué à la Protection des Données :
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Email :</strong> hello@getflaire.fr</p>
                    <p><strong>Courrier :</strong> GetFlaire SAS, 11 rue de la fontaine nagot, 10120 Saint-André-les-Vergers</p>
                  </div>
                  <p className="text-xs text-white/70 mt-4">
                    Nous nous engageons à répondre dans un délai maximum de 30 jours.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">9. Cookies et technologies similaires</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience utilisateur :
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Cookies essentiels</h4>
                    <p className="text-sm">Nécessaires au fonctionnement du site (authentification, sécurité)</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Cookies analytiques</h4>
                    <p className="text-sm">Nous aident à comprendre l'utilisation du site (avec votre consentement)</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Gestion des cookies</h4>
                    <p className="text-sm">Vous pouvez gérer vos préférences via les paramètres de votre navigateur</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">10. Modifications de la politique</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  Nous pouvons modifier cette politique de confidentialité pour refléter les évolutions de nos services 
                  ou de la réglementation. Toute modification importante vous sera notifiée par email et/ou via la plateforme.
                </p>
                <p>
                  La version en vigueur est toujours disponible sur cette page avec la date de dernière mise à jour.
                </p>
              </div>
            </div>

            <div className="bg-[#1B263B] text-white rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Contact et réclamations</h2>
              <div className="space-y-4">
                <p className="text-white/90">
                  Pour toute question concernant cette politique de confidentialité ou le traitement de vos données :
                </p>
                
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Délégué à la Protection des Données</h4>
                      <div className="space-y-2 text-sm text-white/90">
                        <p><strong>Email :</strong> hello@getflaire.fr</p>
                        
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Autorité de contrôle</h4>
                      <div className="space-y-2 text-sm text-white/90">
                        <p>CNIL (Commission Nationale de l'Informatique et des Libertés)</p>
                        <p><strong>Site :</strong> www.cnil.fr</p>
                      </div>
                    </div>
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
  )
}
  )
}