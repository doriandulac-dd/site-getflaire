import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Agent immobilier indépendant",
      image: "/Marie.jpg",
      content: "GetFlaire a révolutionné ma façon de travailler. Je gagne 3h par jour sur ma prospection et je signe 40% de mandats en plus !",
      rating: 5
    },
    {
      name: "Thomas Martin",
      role: "Directeur d'agence",
      image: "/Thomas.jpg",
      content: "L'outil parfait pour notre équipe de 8 agents. La collaboration est fluide et les résultats sont au rendez-vous.",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      role: "Négociatrice immobilière",
      image: "/Sophie.jpg",
      content: "Interface intuitive et alertes précises. Je recommande GetFlaire à tous mes collègues du secteur immobilier.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1B263B] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[#FFB23F]/10 text-[#FFB23F] px-4 py-2 rounded-full text-sm font-semibold border border-[#FFB23F]/20">
              Témoignages
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1B263B] mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-[#778DA9] max-w-3xl mx-auto leading-relaxed">
            Découvrez les retours d'expérience des professionnels qui ont transformé leur prospection avec GetFlaire
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-[#FFB23F]/30 relative group"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-12 h-12 text-[#FFB23F]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating Stars */}
              <div className="flex items-center mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#FFB23F] fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-[#778DA9] mb-6 text-base leading-relaxed relative z-10">
                {testimonial.content}
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 ring-2 ring-[#FFB23F]/20"
                />
                <div>
                  <div className="font-bold text-[#1B263B]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#778DA9]">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20">
          <div className="relative bg-gradient-to-br from-[#1B263B] to-[#2A3B52] rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB23F] rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-3">Rejoignez plus de 2000 professionnels</h3>
              <p className="text-xl mb-8 text-white/80 max-w-3xl mx-auto">
                Agents immobiliers, négociateurs et directeurs d'agence utilisent GetFlaire chaque jour pour optimiser leur prospection
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#FFB23F] rounded-full p-2">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold">Essai gratuit 14 jours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#FFB23F] rounded-full p-2">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold">Sans engagement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#FFB23F] rounded-full p-2">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold">Support français</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;