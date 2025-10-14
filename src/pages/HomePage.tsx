"use client";

import EnhancedHeader from '@/components/EnhancedHeader'
import Hero from '@/components/Hero'
import ProofBar from '@/components/ProofBar'
import ProblemSolution from '@/components/ProblemSolution'
import ProcessFlow from '@/components/ProcessFlow'
import Services from '@/components/Services'
import AudioSamples from '@/components/AudioSamples'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import BlogSection from '@/components/BlogSection'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <EnhancedHeader />
      <Hero />
      <ProofBar />
      <ProblemSolution />
      <ProcessFlow />
      <Services />
      <AudioSamples />
      <Pricing />
      <Testimonials />
      <ContactCTA />
      <BlogSection />
      <Footer />
    </div>
  );
}