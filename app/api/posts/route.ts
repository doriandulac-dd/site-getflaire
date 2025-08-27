import { NextResponse } from 'next/server';
import { supabase, hasValidSupabaseConfig } from '@/lib/supabase';

export async function GET() {
  // Return empty array if Supabase is not configured
  if (!hasValidSupabaseConfig) {
    return NextResponse.json([]);
  }

  try {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json([]);
  }
}