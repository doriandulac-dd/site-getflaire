"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';

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

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/${slug}`);
      if (response.ok) {
        const data = await response.json();
        setPost(data);
      } else if (response.status === 404) {
        setNotFound(true);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      setNotFound(true);
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
      alert('Lien copié dans le presse-papiers !');
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFB23F] mx-auto"></div>
              <p className="text-[#778DA9] mt-4">Chargement de l'article...</p>
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
            {post.image_url && (
              <div className="mb-8 rounded-2xl overflow-hidden">
                <img 
                  src={post.image_url} 
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            )}

            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-[#778DA9]">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formatDate(post.published_at)}</span>
                  <User className="h-4 w-4 ml-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={sharePost}
                  className="flex items-center space-x-2"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Partager</span>
                </Button>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-[#1B263B] mb-4">
                {post.title}
              </h1>
              
              <p className="text-xl text-[#778DA9] leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-slate max-w-none prose-headings:text-[#1B263B] prose-p:text-[#778DA9] prose-strong:text-[#1B263B] prose-a:text-[#FFB23F] hover:prose-a:text-[#FF8F00]">
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>

          {/* Share Section */}
          <div className="border-t border-gray-200 pt-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-[#1B263B] mb-4">
                Cet article vous a plu ?
              </h3>
              <div className="flex justify-center space-x-4">
                <Button
                  onClick={sharePost}
                  className="bg-[#FFB23F] hover:bg-[#FF8F00] text-white"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Partager l'article
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = '/blog'}
                  className="border-[#778DA9] text-[#778DA9] hover:bg-[#778DA9] hover:text-white"
                >
                  Voir plus d'articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}