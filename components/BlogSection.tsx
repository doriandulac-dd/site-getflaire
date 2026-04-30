"use client";

import { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { BlogPostSummary, getLatestBlogPosts } from '@/lib/blog';

const BLOG_BASE_URL = 'https://leblog.getflaire.fr/blog';

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
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

        {isLoading && (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 shadow-lg animate-pulse">
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
          <div className="mb-12 rounded-3xl border border-gray-100 bg-gray-50 p-8 text-center shadow-lg">
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
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-[#FFB23F]/30"
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
                      Lire l&apos;article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <div className="text-center">
          <a
            href="https://leblog.getflaire.fr"
            className="inline-flex items-center bg-[#FFB23F] hover:bg-[#FF8F00] text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:shadow-[#FFB23F]/50 transform hover:scale-105"
          >
            Voir tous les articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
