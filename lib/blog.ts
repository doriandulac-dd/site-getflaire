export type BlogPostSummary = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featured_image_url: string;
  published_at: string;
  categories?: Array<{ name: string }>;
};

type SupabasePostRow = BlogPostSummary & {
  post_categories?: Array<{
    categories?: { name: string } | null;
  }> | null;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const formatPost = (post: SupabasePostRow): BlogPostSummary => ({
  ...post,
  categories:
    post.post_categories
      ?.map((postCategory) => postCategory.categories)
      .filter((category): category is { name: string } => Boolean(category)) || [],
});

export const getLatestBlogPosts = async (limit = 3): Promise<BlogPostSummary[]> => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Les variables Supabase publiques sont manquantes');
  }

  const params = new URLSearchParams({
    select: 'id,slug,title,excerpt,featured_image_url,published_at,post_categories(categories(name))',
    is_published: 'eq.true',
    order: 'published_at.desc',
    limit: String(limit),
  });

  const response = await fetch(`${supabaseUrl}/rest/v1/blog_posts?${params.toString()}`, {
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
    },
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Erreur Supabase: ${response.status}`);
  }

  const posts = (await response.json()) as SupabasePostRow[];
  return posts.map(formatPost);
};
