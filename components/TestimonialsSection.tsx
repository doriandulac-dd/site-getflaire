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
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "L'outil parfait pour notre équipe de 8 agents. La collaboration est fluide et les résultats sont au rendez-vous.",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      role: "Négociatrice immobilière",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Interface intuitive et alertes précises. Je recommande GetFlaire à tous mes collègues du secteur immobilier.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B263B] mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-[#778DA9] max-w-3xl mx-auto">
            Découvrez ce que disent les professionnels qui utilisent GetFlaire au quotidien
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#FFB23F] fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-[#778DA9] mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-[#1B263B]">
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
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#FFB23F] to-[#FF8F00] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Rejoignez plus de 2000 professionnels</h3>
            <p className="text-lg opacity-90 mb-6">
              Agents immobiliers, négociateurs et directeurs d'agence utilisent GetFlaire pour booster leur prospection
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Essai gratuit 14 jours</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Support français</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;