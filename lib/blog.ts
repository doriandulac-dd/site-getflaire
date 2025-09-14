import { supabase } from './supabase';
import type { Database } from './supabase';

type Post = Database['public']['Tables']['posts']['Row'];
type Author = Database['public']['Tables']['authors']['Row'];
type Category = Database['public']['Tables']['categories']['Row'];

export interface PostWithAuthor extends Post {
  authors: Author;
  categories?: Category;
}

// Récupérer tous les articles publiés
export async function getPosts(): Promise<PostWithAuthor[]> {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      authors:authors!author_id(*),
      categories:categories!category_id(*)
    `)
    .eq('is_published', true)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  return data || [];
}

// Récupérer un article par son slug
export async function getPostBySlug(slug: string): Promise<PostWithAuthor | null> {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      authors:authors!author_id(*),
      categories:categories!category_id(*)
    `)
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (error) {
    console.error('Error fetching post:', error);
    return null;
  }

  return data;
}

// Récupérer les articles récents (pour la page d'accueil)
export async function getRecentPosts(limit: number = 3): Promise<PostWithAuthor[]> {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      authors:authors!author_id(*),
      categories:categories!category_id(*)
    `)
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching recent posts:', error);
    return [];
  }

  return data || [];
}

// Récupérer toutes les catégories
export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return data || [];
}

// Récupérer les articles par catégorie
export async function getPostsByCategory(categorySlug: string): Promise<PostWithAuthor[]> {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      authors:authors!author_id(*),
      categories:categories!category_id(*)
    `)
    .eq('is_published', true)
    .eq('categories.slug', categorySlug)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }

  return data || [];
}