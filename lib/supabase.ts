import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types pour TypeScript
export type Database = {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string;
          created_at: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          image_url: string | null;
          author_id: string;
          category_id: string | null;
          published_at: string | null;
          is_published: boolean;
        };
        Insert: {
          id?: string;
          created_at?: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          image_url?: string | null;
          author_id: string;
          category_id?: string | null;
          published_at?: string | null;
          is_published?: boolean;
        };
        Update: {
          id?: string;
          created_at?: string;
          title?: string;
          slug?: string;
          excerpt?: string;
          content?: string;
          image_url?: string | null;
          author_id?: string;
          category_id?: string | null;
          published_at?: string | null;
          is_published?: boolean;
        };
      };
      authors: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          avatar_url: string | null;
          bio: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          avatar_url?: string | null;
          bio?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          avatar_url?: string | null;
          bio?: string | null;
        };
      };
      categories: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          slug: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          slug: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          slug?: string;
        };
      };
    };
  };
};