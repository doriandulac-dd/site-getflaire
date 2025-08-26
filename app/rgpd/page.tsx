"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Shield, Eye, Lock, Users, FileText, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RGPD() {
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
              RGPD - Protection des données
            </h1>
            <p className="text-xl text-[#778DA9]">
              Notre engagement pour la protection de vos données personnelles
            </p>
            <p className="text-sm text-[#778DA9] mt-2">
              Dernière mise à jour : 15 janvier 2025
            </p>
          </div>

          {/* Quick Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#FFB23F]/10 rounded-2xl p-6 text-center">
              <Eye className="h-8 w-8 text-[#FFB23F] mx-auto mb-4" />
              <h3 className="font-semibold text-[#1B263B] mb-2">Transparence</h3>
              <p className="text-sm text-[#778DA9]">Collecte et usage clairs</p>
            </div>
            <div className="bg-[#FFB23F]/10 rounded-2xl p-6 text-center">
              <Lock className="h-8 w-8 text-[#FFB23F] mx-auto mb-4" />
              <h3 className="font-semibold text-[#1B263B] mb-2">Sécurité</h3>
              <p className="text-sm text-[#778DA9]">Protection maximale</p>
            </div>
            <div className="bg-[#FFB23F]/10 rounded-2xl p-6 text-center">
              <Users className="h-8 w-8 text-[#FFB23F] mx-auto mb-4" />
              <h3 className="font-semibold text-[#1B263B] mb-2">Vos droits</h3>
              <p className="text-sm text-[#778DA9]">Contrôle total</p>
            </div>
            <div className="bg-[#FFB23F]/10 rounded-2xl p-6 text-center">
              <FileText className="h-8 w-8 text-[#FFB23F] mx-auto mb-4" />
              <h3 className="font-semibold text-[#1B263B] mb-2">Conformité</h3>
              <p className="text-sm text-[#778DA9]">100% RGPD</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-[#1B263B] text-white rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Notre engagement RGPD</h2>
              <p className="text-white/90 mb-4">
                GetFlaire s'engage pleinement dans le respect du Règlement Général sur la Protection des Données (RGPD) 
                entré en vigueur le 25 mai 2018. La protection de vos données personnelles est au cœur de nos préoccupations.
              </p>
              <p className="text-white/90">
                Cette page vous explique concrètement comment nous appliquons les principes du RGPD et comment vous pouvez 
                exercer vos droits en tant qu'utilisateur de nos services.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">1. Responsable de traitement</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  Au sens du RGPD, le responsable de traitement de vos données personnelles est :
                </p>
                <div className="bg-white rounded-xl p-6 border-l-4 border-[#FFB23F]">
                  <p><strong className="text-[#1B263B]">GetFlaire</strong><br />
                  Société par Actions Simplifiée<br />
                  11 rue de la fontaine nagot<br />
                  10120 Saint-André-les-Vergers<br />
                  France</p>
                  <p className="mt-4">
                    <strong className="text-[#1B263B]">Contact DPO :</strong> hello@getflaire.fr
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">2. Principes fondamentaux appliqués</h2>
              <div className="text-[#778DA9] space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Licéité</h4>
                    <p className="text-sm">Tous nos traitements reposent sur une base légale valide (contrat, intérêt légitime, consentement)</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Finalité</h4>
                    <p className="text-sm">Vos données sont collectées pour des finalités déterminées, explicites et légitimes</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Minimisation</h4>
                    <p className="text-sm">Nous ne collectons que les données strictement nécessaires à nos services</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Exactitude</h4>
                    <p className="text-sm">Vos données sont maintenues à jour et vous pouvez les corriger à tout moment</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Conservation limitée</h4>
                    <p className="text-sm">Durées de conservation définies et respectées selon les finalités</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Sécurité</h4>
                    <p className="text-sm">Mesures techniques et organisationnelles appropriées mises en place</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">3. Vos droits RGPD en détail</h2>
              <div className="text-[#778DA9] space-y-6">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Droit d'accès (Article 15)</h4>
                    <p className="text-sm mb-3">
                      Vous pouvez obtenir la confirmation que vos données sont traitées et accéder à ces données.
                    </p>
                    <p className="text-xs text-[#778DA9]">
                      <strong>Comment l'exercer :</strong> Demande par email avec justificatif d'identité
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Droit de rectification (Article 16)</h4>
                    <p className="text-sm mb-3">
                      Vous pouvez demander la correction de données inexactes ou incomplètes.
                    </p>
                    <p className="text-xs text-[#778DA9]">
                      <strong>Comment l'exercer :</strong> Directement dans votre compte ou par email
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Droit à l'effacement (Article 17)</h4>
                    <p className="text-sm mb-3">
                      Vous pouvez demander la suppression de vos données dans certaines conditions.
                    </p>
                    <p className="text-xs text-[#778DA9]">
                      <strong>Limites :</strong> Obligations légales de conservation (facturation, etc.)
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Droit à la portabilité (Article 20)</h4>
                    <p className="text-sm mb-3">
                      Vous pouvez récupérer vos données dans un format structuré et lisible par machine.
                    </p>
                    <p className="text-xs text-[#778DA9]">
                      <strong>Format :</strong> Export JSON ou CSV selon le type de données
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Droit d'opposition (Article 21)</h4>
                    <p className="text-sm mb-3">
                      Vous pouvez vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière.
                    </p>
                    <p className="text-xs text-[#778DA9]">
                      <strong>Cas particulier :</strong> Opposition systématique pour le marketing direct
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Droit à la limitation (Article 18)</h4>
                    <p className="text-sm mb-3">
                      Vous pouvez demander la limitation du traitement dans certaines circonstances.
                    </p>
                    <p className="text-xs text-[#778DA9]">
                      <strong>Effet :</strong> Conservation des données sans traitement actif
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">4. Procédure d'exercice des droits</h2>
              <div className="text-[#778DA9] space-y-4">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-[#1B263B] mb-4">Étapes à suivre</h4>
                  <ol className="list-decimal list-inside space-y-3 text-sm">
                    <li><strong>Contactez-nous</strong> par email à hello@getflaire.fr</li>
                    <li><strong>Précisez</strong> le droit que vous souhaitez exercer</li>
                    <li><strong>Joignez</strong> une copie de votre pièce d'identité</li>
                    <li><strong>Décrivez</strong> précisément votre demande</li>
                    <li><strong>Nous vous répondons</strong> sous 30 jours maximum</li>
                  </ol>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-[#1B263B] mb-3">Informations requises</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Nom, prénom et adresse email du compte</li>
                    <li>Nature précise de la demande</li>
                    <li>Justificatif d'identité (pour éviter les usurpations)</li>
                    <li>Éléments permettant de localiser les données concernées</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">5. Mesures de sécurité RGPD</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  Conformément à l'article 32 du RGPD, nous mettons en œuvre des mesures techniques et organisationnelles appropriées :
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Mesures techniques</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Chiffrement des données en transit et au repos</li>
                      <li>Authentification forte et gestion des accès</li>
                      <li>Sauvegardes chiffrées et redondantes</li>
                      <li>Surveillance et détection d'intrusions</li>
                      <li>Mise à jour régulière des systèmes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Mesures organisationnelles</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Formation du personnel à la protection des données</li>
                      <li>Politique de sécurité et procédures documentées</li>
                      <li>Contrôle d'accès basé sur le principe du moindre privilège</li>
                      <li>Audits de sécurité réguliers</li>
                      <li>Plan de réponse aux incidents</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">6. Transferts de données hors UE</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  Nos données sont principalement hébergées en France. Si des transferts hors UE sont nécessaires, 
                  ils sont encadrés par :
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Garanties appropriées</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Clauses contractuelles types approuvées par la Commission européenne</li>
                      <li>Décisions d'adéquation pour certains pays</li>
                      <li>Certifications et codes de conduite reconnus</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-[#1B263B] mb-3">Sous-traitants concernés</h4>
                    <p className="text-sm">
                      Stripe (paiements) - Certifié PCI DSS avec garanties contractuelles appropriées
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">7. Violation de données</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  En cas de violation de données personnelles susceptible d'engendrer un risque pour vos droits et libertés :
                </p>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-[#1B263B] mb-3">Notre engagement</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li><strong>Notification à la CNIL</strong> sous 72h si le risque est avéré</li>
                    <li><strong>Information des personnes concernées</strong> dans les meilleurs délais</li>
                    <li><strong>Mesures correctives</strong> immédiates pour limiter l'impact</li>
                    <li><strong>Documentation</strong> complète de l'incident</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-2xl p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-orange-800 font-medium mb-2">Réclamation auprès de la CNIL</p>
                  <p className="text-orange-700 text-sm">
                    Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation 
                    auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
                  </p>
                  <p className="text-orange-700 text-sm mt-2">
                    <strong>Site web :</strong> www.cnil.fr<br />
                    <strong>Adresse :</strong> 3 Place de Fontenoy, 75007 Paris
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1B263B] text-white rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Contact et assistance RGPD</h2>
              <div className="space-y-4">
                <p className="text-white/90">
                  Pour toute question relative au RGPD ou pour exercer vos droits :
                </p>
                
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Délégué à la Protection des Données</h4>
                      <div className="space-y-2 text-sm text-white/90">
                        <p><strong>Email :</strong> hello@getflaire.fr</p>
                        <p><strong>Objet :</strong> RGPD - [Nature de votre demande]</p>
                        <p><strong>Délai de réponse :</strong> 30 jours maximum</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Ressources utiles</h4>
                      <div className="space-y-2 text-sm text-white/90">
                        <p>• <a href="/confidentialite" className="text-[#FFB23F] hover:underline">Politique de confidentialité</a></p>
                        <p>• <a href="/cgu" className="text-[#FFB23F] hover:underline">Conditions générales</a></p>
                        <p>• <a href="/contact" className="text-[#FFB23F] hover:underline">Formulaire de contact</a></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFB23F] rounded-xl p-4 mt-6">
                  <p className="text-white font-medium">
                    💡 Conseil : Avant d'exercer vos droits, consultez votre espace client. 
                    Vous pouvez y gérer directement la plupart de vos données !
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