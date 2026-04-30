import AnimatedSection from "@/components/motion/AnimatedSection";
import MotionCounter from "@/components/motion/MotionCounter";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Agent immobilier indépendant",
      image: "/Marie.jpg",
      content: "GetFlaire a révolutionné ma façon de travailler. Je pilote maintenant ma prospection en 3 clics et je signe 40% de mandats en plus !",
      rating: 5,
    },
    {
      name: "Thomas Martin",
      role: "Directeur d'agence",
      image: "/Thomas.jpg",
      content: "L'outil parfait pour notre équipe de 8 agents. La collaboration est fluide et les résultats sont au rendez-vous.",
      rating: 5,
    },
    {
      name: "Sophie Laurent",
      role: "Négociatrice immobilière",
      image: "/Sophie.jpg",
      content: "Interface intuitive et alertes précises. Je recommande GetFlaire à tous mes collègues du secteur immobilier.",
      rating: 5,
    },
  ];

  return (
    <AnimatedSection className="relative overflow-hidden bg-[#F6F8FB] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_5%_20%,rgba(27,38,59,0.08),transparent_28rem),radial-gradient(circle_at_90%_5%,rgba(255,178,63,0.15),transparent_26rem)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-animate-item className="mx-auto mb-14 max-w-3xl text-center">
          <span className="section-eyebrow">Témoignages</span>
          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1B263B] sm:text-5xl">
            Ils développent leur activité avec GetFlaire.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#62738B]">
            Des professionnels qui remplacent l'éparpillement par un pilotage commercial plus clair.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} data-animate-item className="premium-panel rounded-2xl p-6">
              <div className="mb-5 flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-[#FFB23F]" />
                ))}
              </div>
              <blockquote className="min-h-[120px] text-base leading-7 text-[#62738B]">
                “{testimonial.content}”
              </blockquote>
              <div className="mt-6 flex items-center border-t border-[#1B263B]/10 pt-5">
                <img src={testimonial.image} alt={testimonial.name} className="mr-4 h-14 w-14 rounded-2xl object-cover ring-4 ring-[#FFB23F]/[0.12]" />
                <div>
                  <div className="font-black text-[#1B263B]">{testimonial.name}</div>
                  <div className="text-sm text-[#62738B]">{testimonial.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div data-animate-item className="mt-16 overflow-hidden rounded-[1.75rem] bg-[#101827] p-8 text-white shadow-[0_35px_100px_rgba(27,38,59,0.22)] sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#FFB23F]">Preuve sociale</span>
              <h3 className="mt-3 text-3xl font-black">Rejoignez plus de <MotionCounter value={2000} /> professionnels.</h3>
              <p className="mt-4 text-white/[0.72]">
                Agents indépendants, négociateurs et agences utilisent GetFlaire pour gagner du temps sur la veille et mieux suivre leurs opportunités.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Essai gratuit 14 jours", "Sans engagement", "Support français"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 text-sm font-bold text-white/[0.86]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsSection;
