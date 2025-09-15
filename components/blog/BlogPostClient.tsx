"use client";

import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BlogPostClient() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="py-12">
        <h1 className="text-4xl font-bold text-[#1B263B] mb-4">
          Article non trouvé
        </h1>
        <p className="text-xl text-[#778DA9] mb-8">
          L'article que vous recherchez n'existe pas ou a été supprimé.
        </p>
        <Button 
          onClick={() => window.location.href = '/blog'}
          className="bg-[#FFB23F] hover:bg-[#FF8F00] text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour au blog
        </Button>
      </div>
    </div>
  );
}