import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProofBar from '@/components/ProofBar'
import ProblemSolution from '@/components/ProblemSolution'
import ProcessFlow from '@/components/ProcessFlow'
import Services from '@/components/Services'
import AudioSamples from '@/components/AudioSamples'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProofBar />
      <ProblemSolution />
      <ProcessFlow />
      <Services />
      <AudioSamples />
      <Pricing />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
}