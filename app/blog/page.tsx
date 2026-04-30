"use client";

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BlogPostSummary, getLatestBlogPosts } from '@/lib/blog';
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react';

const BLOG_BASE_URL = 'https://leblog.getflaire.fr/blog';

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

export default function Blog() {
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const latestPosts = await getLatestBlogPosts(12);
        setPosts(latestPosts);
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
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-gradient-to-br from-[#FFB23F] to-[#FF8F00] rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-[#1B263B] mb-4">
              Blog GetFlaire
            </h1>
            <p className="text-xl text-[#778DA9] max-w-3xl mx-auto">
              Découvrez nos conseils, actualités et guides pour optimiser votre prospection immobilière
            </p>
          </div>

          {isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="premium-panel overflow-hidden rounded-2xl animate-pulse">
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
            <div className="text-center py-12">
              <div className="bg-gray-50 rounded-2xl p-8 max-w-md mx-auto">
                <BookOpen className="h-12 w-12 text-[#778DA9] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#1B263B] mb-2">
                  Articles indisponibles
                </h3>
                <p className="text-[#778DA9]">{error}</p>
              </div>
            </div>
          )}

          {!isLoading && !error && posts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => {
                const category = post.categories?.[0]?.name || 'Blog';
                const articleUrl = `${BLOG_BASE_URL}/${post.slug}`;

                return (
                  <article key={post.id} className="premium-panel group overflow-hidden rounded-2xl transition-transform hover:-translate-y-1">
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

                      <h2 className="text-xl font-bold text-[#1B263B] mb-3 group-hover:text-[#FFB23F] transition-colors line-clamp-2">
                        {post.title}
                      </h2>

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

          {!isLoading && !error && posts.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-gray-50 rounded-2xl p-8 max-w-md mx-auto">
                <BookOpen className="h-12 w-12 text-[#778DA9] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#1B263B] mb-2">
                  Aucun article pour le moment
                </h3>
                <p className="text-[#778DA9]">
                  Les premiers articles seront bientôt disponibles. Revenez nous voir !
                </p>
              </div>
            </div>
          )}

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#FFB23F] to-[#FF8F00] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Envie de tester GetFlaire ?</h3>
              <p className="text-lg opacity-90 mb-6">
                Découvrez comment notre plateforme peut révolutionner votre prospection immobilière
              </p>
              <button
                onClick={() => window.location.href = '/#pricing'}
                className="bg-white text-[#1B263B] px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Essayer gratuitement
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
