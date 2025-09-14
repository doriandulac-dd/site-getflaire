"use client";

import { useEffect, useState } from 'react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { getRecentPosts } from '@/lib/blog';
import type { PostWithAuthor } from '@/lib/blog';

const BlogSection = () => {
  const [posts, setPosts] = useState<PostWithAuthor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecentPosts() {
      try {
        const recentPosts = await getRecentPosts(3);
        setPosts(recentPosts);
      } catch (error) {
        console.error('Error loading recent posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchRecentPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading || posts.length === 0) {
    return null; // Ne pas afficher la section si pas d'articles
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B263B] mb-4">
            Derniers articles du blog
          </h2>
          <p className="text-xl text-[#778DA9] max-w-3xl mx-auto">
            Découvrez nos conseils et actualités pour optimiser votre prospection immobilière
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                <h3 className="text-xl font-bold text-[#1B263B] mb-3 group-hover:text-[#FFB23F] transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#778DA9] mb-4 leading-relaxed text-sm">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-[#778DA9] mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(post.published_at || post.created_at)}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <a 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#FFB23F] hover:text-[#FF8F00] font-medium transition-colors group text-sm"
                >
                  Lire l'article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button 
            onClick={() => window.location.href = '/blog'}
            className="bg-[#FFB23F] hover:bg-[#FF8F00] text-white px-8 py-3 rounded-2xl font-semibold transition-colors shadow-lg hover:shadow-xl inline-flex items-center"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Voir tous les articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;