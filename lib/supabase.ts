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
      Blog: {
        Row: {
          id: string;
          created_at: string;
          title: string;
          slug: string;
          excerpt: string;
          image_url: string | null;
          author: string;
          published_at: string | null;
          published: boolean;
        };
        Insert: {
          id?: string;
          created_at?: string;
          title: string;
          slug: string;
          excerpt: string;
          image_url?: string | null;
          author: string;
          published_at?: string | null;
          published?: boolean;
        };
        Update: {
          id?: string;
          created_at?: string;
          title?: string;
          slug?: string;
          excerpt?: string;
          image_url?: string | null;
          author?: string;
          published_at?: string | null;
          published?: boolean;
        };
      };
    };
  };
};