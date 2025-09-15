import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  // Pas d'articles pour le moment
  return [];
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  // Rediriger vers la page blog principale car aucun article n'existe
  notFound();
}