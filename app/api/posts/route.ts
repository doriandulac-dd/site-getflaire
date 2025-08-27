import { NextResponse } from 'next/server';
import { supabase, hasValidSupabaseConfig } from '@/lib/supabase';

export async function GET() {
  // Return empty array if Supabase is not configured
  if (!hasValidSupabaseConfig) {
    console.log('Supabase not configured properly, returning empty array');
    return NextResponse.json([]);
  }

  if (!supabase) {
    console.log('Supabase client not initialized, returning empty array');
    return NextResponse.json([]);
  }

  try {
    console.log('Attempting to fetch posts from Supabase...');
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Supabase query error:', error);
      throw error;
    }

    console.log('Successfully fetched posts:', data?.length || 0, 'posts');
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch posts - returning empty array:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      hint: 'This is likely due to missing or incorrect Supabase credentials'
    });
    return NextResponse.json([]);
  }
}