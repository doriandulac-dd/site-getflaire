import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPostClient from '@/components/blog/BlogPostClient';
import { getPostBySlug } from '@/lib/blog';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  // For static export, we'll return an empty array
  // This allows the page to be generated on-demand
  return [];
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