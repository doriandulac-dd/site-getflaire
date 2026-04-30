import { ArrowRight, Calendar, Clock } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "10 astuces pour optimiser votre prospection immobilière",
      excerpt: "Découvrez les meilleures pratiques pour maximiser vos chances de décrocher de nouveaux mandats et développer votre portefeuille client.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      date: "15 janvier 2025",
      readTime: "5 min",
      category: "Conseils"
    },
    {
      title: "Comment utiliser la pige immobilière efficacement",
      excerpt: "La pige immobilière est un outil puissant pour surveiller le marché. Apprenez à l'exploiter pour rester compétitif.",
      image: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg",
      date: "10 janvier 2025",
      readTime: "7 min",
      category: "Guide"
    },
    {
      title: "L'importance du CRM dans l'immobilier",
      excerpt: "Un CRM bien utilisé peut transformer votre activité. Découvrez comment centraliser et optimiser la gestion de vos prospects.",
      image: "https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg",
      date: "5 janvier 2025",
      readTime: "6 min",
      category: "Stratégie"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFB23F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1B263B] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[#FFB23F]/10 text-[#FFB23F] px-4 py-2 rounded-full text-sm font-semibold border border-[#FFB23F]/20">
              Blog
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1B263B] mb-6">
            Conseils et actualités immobilières
          </h2>
          <p className="text-xl text-[#778DA9] max-w-3xl mx-auto leading-relaxed">
            Restez informé des dernières tendances et découvrez nos conseils pour booster votre activité
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-[#FFB23F]/30"
            >
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B263B]/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FFB23F] text-white px-3 py-1 rounded-full text-xs font-bold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-[#778DA9] mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#1B263B] mb-3 group-hover:text-[#FFB23F] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-[#778DA9] mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <button
                  onClick={() => window.location.href = 'https://leblog.getflaire.fr'}
                  className="inline-flex items-center text-[#FFB23F] hover:text-[#FF8F00] font-semibold group/btn transition-colors"
                >
                  Lire l'article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => window.location.href = 'https://leblog.getflaire.fr'}
            className="inline-flex items-center bg-[#FFB23F] hover:bg-[#FF8F00] text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:shadow-[#FFB23F]/50 transform hover:scale-105"
          >
            Voir tous les articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
