"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MentionsLegales() {
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
              Mentions légales
            </h1>
            <p className="text-xl text-[#778DA9]">
              Informations légales relatives au site GetFlaire
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">Éditeur du site</h2>
              
              <div className="space-y-4 text-[#778DA9]">
                <p><strong className="text-[#1B263B]">Raison sociale :</strong> GetFlaire SAS</p>
                <p><strong className="text-[#1B263B]">Forme juridique :</strong> Société par Actions Simplifiée</p>
                <p><strong className="text-[#1B263B]">Capital social :</strong> 50 000 €</p>
                <p><strong className="text-[#1B263B]">SIREN :</strong> 000 000 000</p>
                <p><strong className="text-[#1B263B]">RCS :</strong> Troyes</p>
                <p><strong className="text-[#1B263B]">Code APE :</strong> 6201Z (Programmation informatique)</p>
                <p><strong className="text-[#1B263B]">TVA intracommunautaire :</strong> FR00000000000</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">Siège social</h2>
              <div className="text-[#778DA9]">
                <p>GetFlaire SAS<br />
                10 rue Exemple<br />
                10000 Troyes<br />
                France</p>
                <p className="mt-4">
                  <strong className="text-[#1B263B]">Email :</strong> support@getflaire.fr
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">Directeur de la publication</h2>
              <div className="text-[#778DA9]">
                <p><strong className="text-[#1B263B]">Nom :</strong> Dorian Dulac</p>
                <p><strong className="text-[#1B263B]">Qualité :</strong> Président de GetFlaire SAS</p>
                <p><strong className="text-[#1B263B]">Email :</strong> support@getflaire.fr</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">Hébergement</h2>
              <div className="text-[#778DA9]">
                <p><strong className="text-[#1B263B]">Hébergeur :</strong> [Nom de l&apos;hébergeur]</p>
                <p>[Adresse de l&apos;hébergeur]<br />
                [Code postal] [Ville]<br />
                France</p>
                <p className="mt-4">
                  <strong className="text-[#1B263B]">Téléphone :</strong> [Téléphone hébergeur]<br />
                  <strong className="text-[#1B263B]">Site web :</strong> [Site hébergeur]
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">Propriété intellectuelle</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
                <p>
                  Les marques GetFlaire et tous les logos figurant sur le site sont des marques déposées. Toute reproduction totale ou partielle de ces marques sans autorisation préalable et écrite de GetFlaire est prohibée.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">Données personnelles</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant.
                </p>
                <p>
                  Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse : <a href="mailto:support@getflaire.fr" className="text-[#FFB23F] hover:underline">support@getflaire.fr</a>
                </p>
                <p>
                  Pour plus d&apos;informations sur le traitement de vos données personnelles, consultez notre <a href="/confidentialite" className="text-[#FFB23F] hover:underline">Politique de confidentialité</a>.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-6">Limitation de responsabilité</h2>
              <div className="text-[#778DA9] space-y-4">
                <p>
                  GetFlaire s&apos;efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                </p>
                <p>
                  Tous les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d&apos;évoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}