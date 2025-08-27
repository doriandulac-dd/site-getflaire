import { NextResponse } from 'next/server';
import { supabaseAdmin, hasValidSupabaseConfig } from '@/lib/supabase';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  // Return error if Supabase is not configured
  if (!hasValidSupabaseConfig) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 503 });
  }

  try {
    const { id } = params;
    const body = await request.json();
    
    const { data, error } = await supabaseAdmin
      .from('posts')
      .update({
        ...body,
        published_at: body.published ? (body.published_at || new Date().toISOString()) : null,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  // Return error if Supabase is not configured
  if (!hasValidSupabaseConfig) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 503 });
  }

  try {
    const { id } = params;
    
    const { error } = await supabaseAdmin
      .from('posts')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}