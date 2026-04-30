"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Créer le lien mailto avec les données du formulaire
    const subject = encodeURIComponent(`Contact GetFlaire - ${formData.name}`);
    const body = encodeURIComponent(`
Nom: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);
    
    window.location.href = `mailto:hello@getflaire.fr?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#1B263B] mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-[#778DA9] max-w-3xl mx-auto">
              Notre équipe support est là pour répondre à toutes vos questions sur GetFlaire. 
              N'hésitez pas à nous contacter !
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-8">
                Informations de contact
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#FFB23F] rounded-2xl p-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B263B] mb-2">Email support</h3>
                    <p className="text-[#778DA9] mb-2">
                      Pour toute question technique, facturation ou assistance
                    </p>
                    <a 
                      href="mailto:hello@getflaire.fr" 
                      className="text-[#FFB23F] hover:text-[#FF8F00] font-medium transition-colors"
                    >
                      hello@getflaire.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#FFB23F] rounded-2xl p-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B263B] mb-2">Adresse postale</h3>
                    <p className="text-[#778DA9]">
                      GetFlaire<br />
                      11 rue de la fontaine nagot<br />
                      10120 Saint-André-les-Vergers<br />
                      France
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#FFB23F] rounded-2xl p-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B263B] mb-2">Horaires support</h3>
                    <p className="text-[#778DA9]">
                      Lundi - Vendredi : 9h00 - 18h00<br />
                      Temps de réponse moyen : 2h
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                <h3 className="font-semibold text-[#1B263B] mb-3">Avant de nous contacter</h3>
                <p className="text-[#778DA9] mb-4">
                  Consultez notre FAQ, vous y trouverez peut-être la réponse à votre question.
                </p>
                <a 
                  href="/#faq" 
                  className="text-[#FFB23F] hover:text-[#FF8F00] font-medium transition-colors"
                >
                  Consulter la FAQ →
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-[#1B263B] mb-8">
                Envoyez-nous un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1B263B] mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFB23F] focus:border-transparent transition-colors"
                    placeholder="Votre nom et prénom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1B263B] mb-2">
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFB23F] focus:border-transparent transition-colors"
                    placeholder="votre@email.fr"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1B263B] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFB23F] focus:border-transparent transition-colors resize-vertical"
                    placeholder="Décrivez votre demande ou votre problème..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#FFB23F] hover:bg-[#FF8F00] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer le message
                </Button>

                <p className="text-sm text-[#778DA9] text-center">
                  En envoyant ce formulaire, vous acceptez notre{' '}
                  <a href="/confidentialite" className="text-[#FFB23F] hover:underline">
                    politique de confidentialité
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}