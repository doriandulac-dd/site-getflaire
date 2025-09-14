"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getPostBySlug } from '@/lib/blog';
import type { PostWithAuthor } from '@/lib/blog';

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<PostWithAuthor | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        const fetchedPost = await getPostBySlug(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error loading post:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sharePost = () => {
    if (navigator.share && post) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFB23F] mx-auto mb-4"></div>
              <p className="text-[#778DA9]">Chargement de l'article...</p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (notFound || !post) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="py-12">
              <h1 className="text-4xl font-bold text-[#1B263B] mb-4">
                Article non trouvé
              </h1>
              <p className="text-xl text-[#778DA9] mb-8">
                L'article que vous recherchez n'existe pas ou a été supprimé.
              </p>
              <Button 
                onClick={() => window.location.href = '/blog'}
                className="bg-[#FFB23F] hover:bg-[#FF8F00] text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au blog
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/blog'}
              className="flex items-center space-x-2 text-[#778DA9] border-[#778DA9] hover:bg-[#778DA9] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Retour au blog</span>
            </Button>
          </div>

          {/* Article Header */}
          <article className="mb-12">
            {/* Category */}
            {post.categories?.name && (
              <div className="mb-4">
                <span className="bg-[#FFB23F]/10 text-[#FFB23F] px-4 py-2 rounded-full text-sm font-medium">
                  {post.categories.name}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1B263B] mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center space-x-6 mb-4 sm:mb-0">
                <div className="flex items-center space-x-3">
                  {post.authors?.avatar_url ? (
                    <img 
                      src={post.authors.avatar_url} 
                      alt={post.authors.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-[#FFB23F] rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-[#1B263B]">{post.author}</p>
                    {post.authors?.bio && (
                      <p className="text-sm text-[#778DA9]">{post.authors.bio}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-[#778DA9]">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.published_at || post.created_at)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>5 min de lecture</span>
                  </div>
                </div>
              </div>

              {/* Share Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={sharePost}
                className="border-[#778DA9] text-[#778DA9] hover:bg-[#778DA9] hover:text-white"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Partager
              </Button>
            </div>

            {/* Featured Image */}
            {post.image_url && (
              <div className="mb-8">
                <img 
                  src={post.image_url} 
                  alt={post.title}
                  className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-[#778DA9] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#FFB23F] to-[#FF8F00] rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Prêt à optimiser votre prospection ?</h3>
            <p className="text-lg opacity-90 mb-6">
              Découvrez comment GetFlaire peut transformer votre activité immobilière
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/#pricing'}
                className="bg-white text-[#1B263B] px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Essayer gratuitement
              </button>
              <button 
                onClick={() => window.location.href = '/blog'}
                className="border-2 border-white text-white hover:bg-white hover:text-[#1B263B] px-8 py-3 rounded-2xl font-semibold transition-colors"
              >
                Voir tous les articles
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}