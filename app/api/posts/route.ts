import { NextResponse } from 'next/server';
import { supabase, hasValidSupabaseConfig } from '@/lib/supabase';

export async function GET() {
  // Return empty array if Supabase is not configured
  if (!hasValidSupabaseConfig) {
    console.log('Supabase not configured properly, returning empty array')
    return NextResponse.json([]);
  }

  try {
    console.log('Attempting to fetch posts from Supabase...')
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Supabase query error:', error)
      throw error;
    }

    console.log('Successfully fetched posts:', data?.length || 0, 'posts')
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching posts:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      details: error instanceof Error ? error.stack : error,
      hint: 'Check your Supabase credentials and network connection',
      code: error instanceof Error && 'code' in error ? error.code : ''
    });
    return NextResponse.json([]);
  }
}