"use client";

import { Quote, Star } from "lucide-react";
import AnimatedSection from "@/components/motion/AnimatedSection";

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Agent immobilier indépendant",
    image: "/Marie.jpg",
    content:
      "GetFlaire a révolutionné ma façon de travailler. Je pilote maintenant ma prospection en 3 clics et je signe 40% de mandats en plus !",
  },
  {
    name: "Thomas Martin",
    role: "Directeur d’agence",
    image: "/Thomas.jpg",
    content:
      "L’outil parfait pour notre équipe de 8 agents. La collaboration est fluide et les résultats sont au rendez-vous.",
  },
  {
    name: "Sophie Laurent",
    role: "Négociatrice immobilière",
    image: "/Sophie.jpg",
    content:
      "Interface intuitive et alertes précises. Je recommande GetFlaire à tous mes collègues du secteur immobilier.",
  },
];

const TestimonialsSection = () => {
  return (
    <AnimatedSection
      className="overflow-hidden bg-white py-24 lg:py-32"
      staggerSelector="[data-testimonial]"
    >
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="section-kicker">Sur le terrain</p>
            <h2 className="section-title mt-5">Ils ont pris de l’avance.</h2>
          </div>
          <div className="flex flex-col gap-5 lg:items-end">
            <div className="flex gap-1 text-[#FFB23F]" aria-label="5 étoiles sur 5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="section-copy max-w-xl lg:text-right">
              Plus de 2000 professionnels utilisent GetFlaire pour piloter leur prospection et accélérer leurs résultats.
            </p>
          </div>
        </div>

        <div className="mt-16 grid border-y border-[#DDE4EA] lg:grid-cols-[1.18fr_0.91fr_0.91fr]">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={testimonial.name}
              data-testimonial
              className={`group relative flex min-h-[25rem] flex-col justify-between p-7 transition-colors hover:bg-[#F7F9FA] sm:p-10 ${
                index > 0 ? "border-t border-[#DDE4EA] lg:border-l lg:border-t-0" : ""
              } ${index === 0 ? "bg-[#101722] text-white hover:bg-[#151F2F]" : "text-[#101722]"}`}
            >
              <Quote className={`h-9 w-9 ${index === 0 ? "text-[#FFB23F]" : "text-[#D4DDE4]"}`} />
              <p className={`my-10 font-bold leading-relaxed ${index === 0 ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                “{testimonial.content}”
              </p>
              <footer className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <cite className="not-italic text-sm font-extrabold">{testimonial.name}</cite>
                  <p className={`mt-1 text-xs font-semibold ${index === 0 ? "text-white/45" : "text-[#778DA9]"}`}>
                    {testimonial.role}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsSection;
