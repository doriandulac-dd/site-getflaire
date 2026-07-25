import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProofStrip from '@/components/ProofStrip';
import ProductStorySection from '@/components/ProductStorySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import BlogSection from '@/components/BlogSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProofStrip />
      <ProductStorySection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </main>
  );
}
