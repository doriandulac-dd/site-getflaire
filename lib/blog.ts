import { supabase } from './supabase';
import type { Database } from './supabase';

type Post = Database['public']['Tables']['Blog']['Row'];

// Récupérer tous les articles publiés
export async function getPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('Blog')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  return data || [];
}

// Récupérer un article par son slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from('Blog')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error) {
    console.error('Error fetching post:', error);
    return null;
  }

  return data;
}

// Récupérer les articles récents (pour la page d'accueil)
export async function getRecentPosts(limit: number = 3): Promise<Post[]> {
  const { data, error } = await supabase
    .from('Blog')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching recent posts:', error);
    return [];
  }

  return data || [];
}

// Récupérer les articles par catégorie
export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  const { data, error } = await supabase
    .from('Blog')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }

  return data || [];
}