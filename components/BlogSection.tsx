"use client";

import { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import AnimatedSection from '@/components/motion/AnimatedSection';
import { BlogPostSummary, getLatestBlogPosts } from '@/lib/blog';

const BLOG_BASE_URL = 'https://leblog.getflaire.fr/blog';

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPostSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const posts = await getLatestBlogPosts(3);
        setBlogPosts(posts);
      } catch (fetchError) {
        console.error('Erreur lors du chargement des articles Supabase:', fetchError);
        setError('Les articles sont temporairement indisponibles.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <AnimatedSection className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(255,178,63,0.14),transparent_26rem),radial-gradient(circle_at_88%_12%,rgba(27,38,59,0.08),transparent_28rem)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div data-animate-item className="text-center mb-14">
          <span className="section-eyebrow">Blog</span>
          <h2 className="mt-5 text-3xl sm:text-5xl font-black text-[#1B263B] mb-6">
            Conseils et actualités immobilières
          </h2>
          <p className="text-lg text-[#62738B] max-w-3xl mx-auto leading-8">
            Restez informé des dernières tendances et découvrez nos conseils pour booster votre activité
          </p>
        </div>

        {isLoading && (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="premium-panel overflow-hidden rounded-2xl animate-pulse">
                <div className="h-56 bg-[#778DA9]/20" />
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-[#778DA9]/20 rounded w-2/3" />
                  <div className="h-7 bg-[#778DA9]/20 rounded" />
                  <div className="h-4 bg-[#778DA9]/20 rounded" />
                  <div className="h-4 bg-[#778DA9]/20 rounded w-4/5" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && error && (
          <div className="premium-panel text-center p-8 mb-12">
            <p className="text-[#778DA9]">{error}</p>
          </div>
        )}

        {!isLoading && !error && blogPosts.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {blogPosts.map((post) => {
              const category = post.categories?.[0]?.name || 'Blog';
              const articleUrl = `${BLOG_BASE_URL}/${post.slug}`;

              return (
                <article
                  key={post.id}
                  className="premium-panel group overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
                >
                  <div className="relative h-56 overflow-hidden bg-gray-200">
                    {post.featured_image_url && (
                      <img
                        src={post.featured_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B263B]/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#FFB23F] text-white px-3 py-1 rounded-full text-xs font-bold">
                        {category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-[#778DA9] mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.published_at)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>5 min</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#1B263B] mb-3 group-hover:text-[#FFB23F] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-[#778DA9] mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <a
                      href={articleUrl}
                      className="inline-flex items-center text-[#FFB23F] hover:text-[#FF8F00] font-semibold group/btn transition-colors"
                    >
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <div data-animate-item className="text-center">
          <a
            href="https://leblog.getflaire.fr"
            className="inline-flex items-center bg-[#FFB23F] hover:bg-[#FF8F00] text-[#1B263B] px-8 py-4 rounded-full font-bold transition-colors shadow-xl shadow-[#FFB23F]/25"
          >
            Voir tous les articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default BlogSection;
