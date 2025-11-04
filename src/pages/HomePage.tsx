"use client";

import EnhancedHeader from '@/components/EnhancedHeader'
import Hero from '@/components/Hero'
import ProofBar from '@/components/ProofBar'
import ProblemSolution from '@/components/ProblemSolution'
import ProcessFlow from '@/components/ProcessFlow'
import WhoWeHelp from '@/components/WhoWeHelp'
import AudioSamples from '@/components/AudioSamples'
import Pricing from '@/components/Pricing'
import CustomizationSection from '@/components/CustomizationSection'
import Testimonials from '@/components/Testimonials'
import FreeStrategySection from '@/components/FreeStrategySection'
import FAQSection from '@/components/FAQSection'
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
      <WhoWeHelp />
      <AudioSamples />
      <Testimonials />
      <Pricing />
      <CustomizationSection />
      <FreeStrategySection />
      <FAQSection />
      <BlogSection />
      <ContactCTA />
      <Footer />
    </div>
  );
}