"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, XCircle, Calendar, Settings, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Annulation() {
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
              <XCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-[#1B263B] mb-4">
              Politique d&apos;annulation
            </h1>
            <p className="text-xl text-[#778DA9]">
              Comment annuler votre abonnement GetFlaire
            </p>
            <p className="text-sm text-[#778DA9] mt-2">
              Dernière mise à jour : 15 janvier 2025
            </p>
          </div>

          {/* Quick Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 rounded-2xl p-6 text-center">
              <Settings className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-[#1B263B] mb-2">1. Espace client</h3>
              <p className="text-sm text-[#778DA9]">Connectez-vous à votre compte GetFlaire</p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-6 text-center">
              <XCircle className="h-8 w-8 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-[#1B263B] mb-2">2. Annulation</h3>
              <p className="text-sm text-[#778DA9]">Cliquez sur &quot;Annuler l&apos;abonnement&quot;</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 text-center">
              <Calendar className="h-8 w-8 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-[#1B263B] mb-2">3. Effet différé</h3>
              <p className="text-sm text-[#778DA9]">Service actif jusqu&apos;à la fin de période</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-green-50 border-l-4 border-green-500 rounded-r-2xl p-6">
              <p className="text-green-800 font-medium mb-2">✅ Sans engagement</p>
              <p className="text-green-700">
                Vous pouvez annuler votre abonnement GetFlaire à tout moment, sans frais ni pénalité.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">1. Principe général</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  <strong className="text-[#1B263B]">Annulation libre :</strong> Vous pouvez annuler votre abonnement GetFlaire à tout moment, 
                  sans avoir à justifier votre décision et sans frais supplémentaires.
                </p>
                <p>
                  <strong className="text-[#1B263B]">Effet différé :</strong> L&apos;annulation prend effet à la fin de votre période de facturation en cours. 
                  Vous continuez à bénéficier du service jusqu&apos;à cette date.
                </p>
                
                <div className="bg-white rounded-xl p-6 border-l-4 border-[#FFB23F]">
                  <h4 className="font-semibold text-[#1B263B] mb-3">Exemple concret</h4>
                  <p className="text-sm">
                    <strong>Abonnement mensuel :</strong> Si vous annulez le 15 janvier et que votre prochaine facturation était prévue le 28 janvier, 
                    votre service restera actif jusqu&apos;au 28 janvier inclus.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">2. Comment annuler</h2>
              <div className="text-[#778DA9] space-y-4">
                <h3 className="text-lg font-semibold text-[#1B263B]">2.1 Via votre espace client (recommandé)</h3>
                <div className="bg-white rounded-xl p-6">
                  <ol className="list-decimal list-inside space-y-3 text-sm">
                    <li>Connectez-vous à votre compte GetFlaire</li>
                    <li>Accédez à la section &quot;Mon abonnement&quot; ou &quot;Facturation&quot;</li>
                    <li>Cliquez sur &quot;Annuler l&apos;abonnement&quot;</li>
                    <li>Confirmez votre choix</li>
                    <li>Vous recevrez un email de confirmation</li>
                  </ol>
                </div>

                <h3 className="text-lg font-semibold text-[#1B263B]">2.2 Par email</h3>
                <div className="bg-white rounded-xl p-6">
                  <p className="text-sm mb-3">
                    Si vous ne pouvez pas accéder à votre espace client, envoyez un email à :
                  </p>
                  <p className="text-sm">
                    <strong>Email :</strong> hello@getflaire.fr<br />
                    <strong>Objet :</strong> Demande d&apos;annulation - [Votre nom]<br />
                    <strong>Contenu :</strong> Nom, email du compte, motif (optionnel)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">3. Options et utilisateurs supplémentaires</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  <strong className="text-[#1B263B]">Même règle pour tous :</strong> Les options supplémentaires 
                  (départements additionnels, utilisateurs supplémentaires) suivent la même règle d&apos;annulation 
                  que l&apos;abonnement principal.
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Départements supplémentaires</h4>
                    <p className="text-sm">
                      Vous pouvez supprimer des départements de surveillance à tout moment. 
                      La modification prend effet à la prochaine période de facturation.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Utilisateurs supplémentaires</h4>
                    <p className="text-sm">
                      La suppression d&apos;utilisateurs supplémentaires suit la même logique : 
                      effet à la fin de la période de facturation en cours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">4. Que se passe-t-il après l&apos;annulation ?</h2>
              <div className="text-[#778DA9] space-y-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                    <h4 className="font-semibold text-[#1B263B] mb-3">✅ Pendant la période restante</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Accès complet à toutes les fonctionnalités</li>
                      <li>Alertes et surveillance continuent</li>
                      <li>Support client disponible</li>
                      <li>Possibilité de réactiver l&apos;abonnement</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
                    <h4 className="font-semibold text-[#1B263B] mb-3">❌ Après la fin de période</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Accès au service suspendu</li>
                      <li>Arrêt des alertes et de la surveillance</li>
                      <li>Données conservées 30 jours (possibilité de réactivation)</li>
                      <li>Export des données possible sur demande</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">5. Réactivation</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  <strong className="text-[#1B263B]">Changement d&apos;avis ?</strong> Vous pouvez réactiver votre abonnement 
                  à tout moment, même après l&apos;annulation.
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Avant la fin de période</h4>
                    <p className="text-sm">
                      Vous pouvez annuler votre demande d&apos;annulation depuis votre espace client 
                      ou en contactant le support.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Après la fin de période</h4>
                    <p className="text-sm">
                      Réactivation possible dans les 30 jours avec conservation de vos données. 
                      Au-delà, création d&apos;un nouveau compte nécessaire.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-2xl p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-orange-800 font-medium mb-2">Important à retenir</p>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Aucun remboursement pour la période en cours</li>
                    <li>• Service actif jusqu&apos;à la fin de votre période payée</li>
                    <li>• Données conservées 30 jours après expiration</li>
                    <li>• Réactivation possible à tout moment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#1B263B] text-white rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Besoin d&apos;aide ?</h2>
              <div className="space-y-4">
                <p className="text-white/90">
                  Notre équipe support est là pour vous accompagner dans votre démarche d&apos;annulation 
                  et répondre à toutes vos questions.
                </p>
                
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Contact support</h4>
                      <div className="space-y-2 text-sm text-white/90">
                        <p><strong>Email :</strong> hello@getflaire.fr</p>
                        <p><strong>Réponse :</strong> Sous 2h en moyenne</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Avant d&apos;annuler</h4>
                      <div className="space-y-2 text-sm text-white/90">
                        <p>• Consultez notre <a href="/#faq" className="text-[#FFB23F] hover:underline">FAQ</a></p>
                        <p>• Contactez le support pour résoudre un problème</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFB23F] rounded-xl p-4 mt-6">
                  <p className="text-white font-medium">
                    💡 Astuce : Plutôt que d&apos;annuler, vous pouvez suspendre temporairement votre abonnement. 
                    Contactez-nous pour en savoir plus !
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