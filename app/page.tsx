"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <PricingSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}