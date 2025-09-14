import { getPosts } from '@/lib/blog';

export async function generateStaticParams() {
  try {
    const posts = await getPosts();
    
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}