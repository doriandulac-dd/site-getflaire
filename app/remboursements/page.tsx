"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, CreditCard, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Remboursements() {
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
              <CreditCard className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-[#1B263B] mb-4">
              Politique de remboursement
            </h1>
            <p className="text-xl text-[#778DA9]">
              Conditions de remboursement et gestion des litiges
            </p>
            <p className="text-sm text-[#778DA9] mt-2">
              Dernière mise à jour : 15 janvier 2025
            </p>
          </div>

          {/* Quick Summary */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-red-50 rounded-2xl p-6 text-center">
              <XCircle className="h-8 w-8 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold text-[#1B263B] mb-2">Période entamée</h3>
              <p className="text-sm text-[#778DA9]">Pas de remboursement prorata pour une période déjà commencée</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 text-center">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-[#1B263B] mb-2">Annulation</h3>
              <p className="text-sm text-[#778DA9]">Effet à la fin de la période de facturation en cours</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 text-center">
              <AlertCircle className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-[#1B263B] mb-2">Exceptions</h3>
              <p className="text-sm text-[#778DA9]">Remboursement possible selon obligations légales</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-[#FFB23F]/10 border-l-4 border-[#FFB23F] rounded-r-2xl p-6">
              <p className="text-[#1B263B] font-medium mb-2">Principe général</p>
              <p className="text-[#778DA9]">
                GetFlaire applique une politique de remboursement claire et transparente, conforme à la réglementation française sur les services numériques.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">1. Règle générale</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  <strong className="text-[#1B263B]">Aucun remboursement prorata</strong> n&apos;est effectué pour une période d&apos;abonnement déjà entamée, conformément aux conditions d&apos;utilisation des services SaaS.
                </p>
                <p>
                  Lorsque vous annulez votre abonnement, celui-ci reste actif jusqu&apos;à la fin de la période de facturation en cours. Vous continuez à bénéficier du service jusqu&apos;à cette date.
                </p>
                
                <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500">
                  <h4 className="font-semibold text-[#1B263B] mb-3">Exemple pratique</h4>
                  <p className="text-sm">
                    Si vous avez souscrit un abonnement mensuel le 5 janvier et que vous l&apos;annulez le 20 janvier, 
                    votre service restera actif jusqu&apos;au 5 février. Aucun remboursement ne sera effectué pour la période du 5 au 31 janvier.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">2. Exceptions légales</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  Des remboursements peuvent être accordés dans les cas suivants :
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">2.1 Obligations légales</h4>
                    <p className="text-sm">
                      Conformément au droit français, notamment en cas d&apos;exercice du droit de rétractation 
                      (si applicable) ou d&apos;autres dispositions légales impératives.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">2.2 Indisponibilité prolongée</h4>
                    <p className="text-sm">
                      En cas d&apos;indisponibilité prolongée du service de notre fait (plus de 72h consécutives), 
                      un remboursement prorata peut être accordé pour la période d&apos;indisponibilité.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">2.3 Erreur de facturation</h4>
                    <p className="text-sm">
                      En cas d&apos;erreur avérée de notre part dans la facturation, 
                      le montant erroné sera remboursé intégralement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">3. Période d&apos;essai</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  <strong className="text-[#1B263B]">Essai gratuit de 14 jours :</strong> Si vous bénéficiez d&apos;une période d&apos;essai gratuite, 
                  vous pouvez annuler votre abonnement avant la fin de cette période pour éviter toute facturation.
                </p>
                
                <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                  <h4 className="font-semibold text-[#1B263B] mb-3">Important</h4>
                  <p className="text-sm">
                    Si vous n&apos;annulez pas avant la fin de la période d&apos;essai, 
                    votre abonnement sera automatiquement activé et facturé selon les conditions choisies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">4. Procédure de demande</h2>
              <div className="text-[#778DA9] space-y-4">
                <h3 className="text-lg font-semibold text-[#1B263B]">4.1 Contact préalable</h3>
                <p>
                  Avant toute demande de remboursement, nous vous encourageons à contacter notre support client 
                  pour résoudre d&apos;éventuels problèmes techniques ou d&apos;utilisation.
                </p>

                <h3 className="text-lg font-semibold text-[#1B263B]">4.2 Demande écrite</h3>
                <p>
                  Les demandes de remboursement doivent être adressées par email à <strong>support@getflaire.fr</strong> 
                  en précisant :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Vos coordonnées complètes</li>
                  <li>Le motif de la demande</li>
                  <li>Les éléments justificatifs le cas échéant</li>
                </ul>

                <h3 className="text-lg font-semibold text-[#1B263B]">4.3 Délai de traitement</h3>
                <p>
                  Nous nous engageons à traiter votre demande dans un délai de 15 jours ouvrés 
                  et à vous communiquer notre décision motivée.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">5. Modalités de remboursement</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  Lorsqu&apos;un remboursement est accordé :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Le remboursement s&apos;effectue sur le même moyen de paiement utilisé pour l&apos;achat</li>
                  <li>Le délai de remboursement est de 14 jours maximum après acceptation de la demande</li>
                  <li>Les frais bancaires éventuels restent à votre charge</li>
                  <li>Un justificatif de remboursement vous sera transmis</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">6. Gestion des litiges</h2>
              <div className="text-[#778DA9] space-y-4">
                <h3 className="text-lg font-semibold text-[#1B263B]">6.1 Résolution amiable</h3>
                <p>
                  En cas de désaccord, nous privilégions toujours la recherche d&apos;une solution amiable. 
                  Notre équipe support est formée pour traiter les réclamations avec bienveillance et efficacité.
                </p>

                <h3 className="text-lg font-semibold text-[#1B263B]">6.2 Médiation</h3>
                <p>
                  Si aucune solution amiable n&apos;est trouvée, vous pouvez recourir à un médiateur de la consommation 
                  conformément à l&apos;article L. 612-1 du Code de la consommation.
                </p>

                <h3 className="text-lg font-semibold text-[#1B263B]">6.3 Recours juridictionnel</h3>
                <p>
                  En dernier recours, les tribunaux compétents de Troyes peuvent être saisis, 
                  conformément à nos conditions générales d&apos;utilisation.
                </p>
              </div>
            </div>

            <div className="bg-[#1B263B] text-white rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Contact support</h2>
              <div className="space-y-4">
                <p className="text-white/90">
                  Pour toute question relative aux remboursements ou pour faire une demande :
                </p>
                
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="space-y-2 text-sm text-white/90">
                    <p><strong>Email :</strong> support@getflaire.fr</p>
                    <p><strong>Objet :</strong> Demande de remboursement - [Votre nom]</p>
                    <p><strong>Horaires :</strong> Lundi - Vendredi, 9h00 - 18h00</p>
                    <p><strong>Temps de réponse :</strong> 2h en moyenne</p>
                  </div>
                </div>

                <div className="bg-[#FFB23F] rounded-xl p-4 mt-6">
                  <p className="text-white font-medium">
                    💡 Conseil : Avant de demander un remboursement, contactez notre support. 
                    Nous pouvons souvent résoudre votre problème rapidement !
                  </p>
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