import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPostClient from '@/components/blog/BlogPostClient';
import { getPostBySlug, getPosts } from '@/lib/blog';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <BlogPostClient post={post} notFound={!post} />
      </div>

      <Footer />
    </main>
  );
}