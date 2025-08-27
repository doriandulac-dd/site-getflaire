"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  published_at: string;
  slug: string;
  image_url?: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
    
    // Debug: Log Supabase configuration status
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log('Has valid Supabase config:', !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  }, []);

  const fetchPosts = async () => {
    try {
      console.log('Fetching posts from:', '/api/posts');
      const response = await fetch('/api/posts');
      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      if (response.ok) {
        const data = await response.json();
        console.log('Posts data:', data);
        setPosts(data);
      } else {
        console.error('Failed to fetch posts:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/'}
              className="flex items-center space-x-2 text-[#778DA9] border-[#778DA9] hover:bg-[#778DA9] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Retour à l'accueil</span>
            </Button>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#1B263B] mb-4">
              Blog GetFlaire
            </h1>
            <p className="text-xl text-[#778DA9] max-w-3xl mx-auto">
              Découvrez nos derniers articles sur l'immobilier, la prospection et les tendances du marché
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFB23F] mx-auto"></div>
              <p className="text-[#778DA9] mt-4">Chargement des articles...</p>
            </div>
          )}

          {/* Blog Posts Grid */}
          {!loading && posts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  {post.image_url && (
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      <img 
                        src={post.image_url} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-[#778DA9] mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{formatDate(post.published_at)}</span>
                      <User className="h-4 w-4 ml-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-[#1B263B] mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-[#778DA9] mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Button
                      onClick={() => window.location.href = `/blog/${post.slug}`}
                      className="bg-[#FFB23F] hover:bg-[#FF8F00] text-white w-full"
                    >
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && posts.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-gray-100 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-12 w-12 text-[#778DA9]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1B263B] mb-4">
                Aucun article pour le moment
              </h3>
              <p className="text-[#778DA9] mb-8">
                Les premiers articles seront bientôt disponibles. Revenez nous voir !
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}