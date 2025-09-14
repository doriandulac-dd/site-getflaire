"use client";

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { getPosts } from '@/lib/blog';
import type { PostWithAuthor } from '@/lib/blog';

export default function Blog() {
  const [posts, setPosts] = useState<PostWithAuthor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
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

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFB23F] mx-auto mb-4"></div>
              <p className="text-[#778DA9]">Chargement des articles...</p>
            </div>
          )}

          {/* No Posts State */}
          {!loading && posts.length === 0 && (
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

          {/* Posts Grid */}
          {!loading && posts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                >
                  {/* Image */}
                  {post.image_url && (
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image_url} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    {/* Category */}
                    {post.categories?.name && (
                      <div className="mb-3">
                        <span className="bg-[#FFB23F]/10 text-[#FFB23F] px-3 py-1 rounded-full text-sm font-medium">
                          {post.categories.name}
                        </span>
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="text-xl font-bold text-[#1B263B] mb-3 group-hover:text-[#FFB23F] transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-[#778DA9] mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-[#778DA9] mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(post.published_at || post.created_at)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <a 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#FFB23F] hover:text-[#FF8F00] font-medium transition-colors group"
                    >
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* CTA Section */}
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