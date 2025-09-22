"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Users, Euro, TrendingUp, Gift, CheckCircle, Star, Calculator, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Affiliation() {
  const [monthlyReferrals, setMonthlyReferrals] = useState(15);
  const [averagePrice, setAveragePrice] = useState(29);

  const calculateEarnings = () => {
    const commission = 0.30; // 30%
    const monthlyEarnings = monthlyReferrals * averagePrice * commission;
    const yearlyEarnings = monthlyEarnings * 12;
    return { monthly: monthlyEarnings, yearly: yearlyEarnings };
  };

  const earnings = calculateEarnings();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-br from-[#FFB23F] to-[#FF8F00] rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-[#1B263B] mb-4">
              Transformez vos recommandations en revenus passifs
            </h1>
            <p className="text-xl text-[#778DA9] max-w-3xl mx-auto mb-8">
              Chaque inscription à GetFlaire via votre lien vous rapporte jusqu’à 30% de commission récurrente. 
              Des gains sans plafond, tous les mois.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#FFB23F] hover:bg-[#FF8F00] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = 'mailto:hello@getflaire.fr?subject=Demande d\'adhésion - Programme d\'affiliation GetFlaire'}
              >
                Devenir partenaire
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('calculator');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-[#778DA9] text-[#778DA9] hover:bg-[#778DA9] hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200"
              >
                Calculer mes gains
              </Button>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
              <div className="bg-green-500 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Euro className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B263B] mb-4">30% de commission</h3>
              <p className="text-[#778DA9]">
                Gagnez 30% sur chaque vente générée, avec des commissions récurrentes mensuelles
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
              <div className="bg-blue-500 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B263B] mb-4">Revenus récurrents</h3>
              <p className="text-[#778DA9]">
                Touchez des commissions chaque mois tant que vos filleuls restent abonnés
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center">
              <div className="bg-purple-500 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B263B] mb-4">Outils marketing</h3>
              <p className="text-[#778DA9]">
                Accédez à des supports marketing professionnels et un suivi détaillé
              </p>
            </div>
          </div>

          {/* How it works */}
          <div className="bg-gray-50 rounded-3xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#1B263B] text-center mb-12">
              Comment ça fonctionne ?
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#FFB23F] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  1
                </div>
                <h4 className="font-semibold text-[#1B263B] mb-2">Inscription</h4>
                <p className="text-[#778DA9] text-sm">Rejoignez notre programme d'affiliation gratuitement</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#FFB23F] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  2
                </div>
                <h4 className="font-semibold text-[#1B263B] mb-2">Promotion</h4>
                <p className="text-[#778DA9] text-sm">Partagez GetFlaire avec votre lien unique</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#FFB23F] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  3
                </div>
                <h4 className="font-semibold text-[#1B263B] mb-2">Conversion</h4>
                <p className="text-[#778DA9] text-sm">Vos filleuls s'abonnent à GetFlaire</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#FFB23F] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  4
                </div>
                <h4 className="font-semibold text-[#1B263B] mb-2">Rémunération</h4>
                <p className="text-[#778DA9] text-sm">Recevez 30% de commission chaque mois</p>
              </div>
            </div>
          </div>

          {/* Commission Structure */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1B263B] text-center mb-12">
              Structure des commissions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-[#FFB23F]">
                <h3 className="text-2xl font-semibold text-[#1B263B] mb-6">Plan Indépendant</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#778DA9]">Plan Pro (29€/mois)</span>
                    <span className="font-bold text-[#1B263B]">8,70€/mois</span>
                  </div>
                  <div className="text-sm text-[#778DA9]">
                    Commission de 30% sur chaque abonnement mensuel
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-[#FFB23F]">
                <h3 className="text-2xl font-semibold text-[#1B263B] mb-6">Plan Agence</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#778DA9]">Plan Enterprise (79€/mois)</span>
                    <span className="font-bold text-[#1B263B]">23,70€/mois</span>
                  </div>
                  <div className="text-sm text-[#778DA9]">
                    Commission de 30% sur chaque abonnement mensuel
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFB23F]/10 rounded-2xl p-6 mt-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-[#FFB23F] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#1B263B] font-medium mb-2">Commissions récurrentes</p>
                  <p className="text-[#778DA9]">
                    Vous touchez 30% de commission chaque mois tant que votre filleul reste abonné. 
                    Plus vos filleuls restent fidèles, plus vos revenus augmentent !
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator */}
          <div id="calculator" className="bg-gradient-to-br from-[#1B263B] to-[#778DA9] rounded-3xl p-8 text-white mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Calculateur de gains
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-white/90 mb-3">Nombre de filleuls par mois</label>
                  <div className="bg-white/10 rounded-xl p-4">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={monthlyReferrals}
                      onChange={(e) => setMonthlyReferrals(parseInt(e.target.value))}
                      className="w-full"
                    />
                    <div className="text-center mt-2 text-2xl font-bold text-[#FFB23F]">
                      {monthlyReferrals}
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/90 mb-3">Prix moyen d'abonnement</label>
                  <div className="bg-white/10 rounded-xl p-4">
                    <select
                      value={averagePrice}
                      onChange={(e) => setAveragePrice(parseInt(e.target.value))}
                      className="w-full bg-transparent text-white text-center text-2xl font-bold"
                    >
                      <option value="29" className="text-black">29€ (Pro)</option>
                      <option value="79" className="text-black">79€ (Enterprise)</option>
                      <option value="54" className="text-black">54€ (Mixte)</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-8 text-center">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-[#FFB23F] mb-2">
                      {earnings.monthly.toFixed(0)}€
                    </div>
                    <div className="text-white/80">par mois</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#FFB23F] mb-2">
                      {earnings.yearly.toFixed(0)}€
                    </div>
                    <div className="text-white/80">par an</div>
                  </div>
                </div>
                
                <div className="mt-6 text-sm text-white/70">
                  * Calcul basé sur {monthlyReferrals} nouveaux filleuls par mois à {averagePrice}€/mois avec 30% de commission
                </div>
              </div>
            </div>
          </div>

          {/* Who can join */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1B263B] text-center mb-12">
              Qui peut rejoindre le programme ?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="bg-blue-100 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-[#1B263B] mb-2">Professionnels immobilier</h4>
                <p className="text-[#778DA9] text-sm">Agents, négociateurs, directeurs d'agence</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="bg-green-100 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-[#1B263B] mb-2">Influenceurs</h4>
                <p className="text-[#778DA9] text-sm">Créateurs de contenu immobilier</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="bg-purple-100 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-[#1B263B] mb-2">Formateurs</h4>
                <p className="text-[#778DA9] text-sm">Experts en formation immobilière</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="bg-orange-100 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-[#1B263B] mb-2">Consultants</h4>
                <p className="text-[#778DA9] text-sm">Conseillers en stratégie immobilière</p>
              </div>
            </div>
          </div>

          {/* Marketing Tools */}
          <div className="bg-gray-50 rounded-3xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-[#1B263B] text-center mb-12">
              Outils marketing fournis
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-[#1B263B] mb-4">Supports visuels</h4>
                <ul className="space-y-2 text-[#778DA9]">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#FFB23F]" />
                    <span>Bannières web optimisées</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#FFB23F]" />
                    <span>Images pour réseaux sociaux</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#FFB23F]" />
                    <span>Logos et éléments graphiques</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-[#1B263B] mb-4">Contenus prêts</h4>
                <ul className="space-y-2 text-[#778DA9]">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#FFB23F]" />
                    <span>Articles de blog</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#FFB23F]" />
                    <span>Posts réseaux sociaux</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#FFB23F]" />
                    <span>Templates d'emails</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-[#1B263B] mb-4">Suivi & Analytics</h4>
                <ul className="space-y-2 text-[#778DA9]">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#FFB23F]" />
                    <span>Dashboard personnalisé</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#FFB23F]" />
                    <span>Statistiques détaillées</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#FFB23F]" />
                    <span>Rapports mensuels</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1B263B] text-center mb-12">
              Questions fréquentes
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-[#1B263B] mb-3">Quand suis-je payé ?</h4>
                <p className="text-[#778DA9]">
                  Les commissions sont versées automatiquement, le 15 de chaque mois, 
                  pour les ventes du mois précédent. Paiement par l'intermédiaire de PayPal. Le processus de paiement peut prendre quelques jours. Veuillez donc prévoir 3 à 5 jours pour que les fonds apparaissent sur votre compte.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-[#1B263B] mb-3">Y a-t-il un minimum de paiement ?</h4>
                <p className="text-[#778DA9]">
                  Le seuil minimum de paiement est de 50€. Si vous n'atteignez pas ce seuil, 
                  le montant est reporté au mois suivant.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-[#1B263B] mb-3">Combien de temps durent les commissions ?</h4>
                <p className="text-[#778DA9]">
                  Vous touchez 30% de commission chaque mois tant que votre filleul reste abonné. 
                  Il n'y a pas de limite de durée.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-[#1B263B] mb-3">Puis-je cumuler avec d'autres programmes ?</h4>
                <p className="text-[#778DA9]">
                  Oui, notre programme d'affiliation est compatible avec d'autres programmes, 
                  tant qu'il n'y a pas de conflit d'intérêts direct.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-r from-[#FFB23F] to-[#FF8F00] rounded-3xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à rejoindre notre programme ?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Commencez à gagner de l'argent dès aujourd'hui en recommandant GetFlaire 
              à votre réseau professionnel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-[#1B263B] hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = 'mailto:hello@getflaire.fr?subject=Demande d\'adhésion - Programme d\'affiliation GetFlaire&body=Bonjour,%0D%0A%0D%0AJe souhaite rejoindre le programme d\'affiliation GetFlaire.%0D%0A%0D%0AMes informations :%0D%0A- Nom :%0D%0A- Prénom :%0D%0A- Entreprise :%0D%0A- Site web :%0D%0A- Réseau social principal :%0D%0A%0D%0AMerci de me recontacter pour finaliser mon inscription.%0D%0A%0D%0ACordialement'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Postuler maintenant
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
               className="bg-white text-[#1B263B] hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = '/contact'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Nous contacter
              </Button>
            </div>
            
            <div className="mt-8 text-sm opacity-80">
              Réponse sous 48h • Programme gratuit • Support dédié
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}