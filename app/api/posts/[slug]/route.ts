import { NextResponse } from 'next/server';
import { supabase, hasValidSupabaseConfig } from '@/lib/supabase';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  // Return 404 if Supabase is not configured
  if (!hasValidSupabaseConfig) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  try {
    const { slug } = params;
    
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
      throw error;
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
}