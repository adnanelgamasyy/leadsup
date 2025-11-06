import { lazy, Suspense } from 'react'
import EnhancedHeader from '@/components/EnhancedHeader'
import Hero from '@/components/Hero'
import ProofBar from '@/components/ProofBar'
import ErrorBoundary from '@/components/ErrorBoundary'
import SEO from '@/components/SEO'
import ScrollProgress from '@/components/ScrollProgress'
import SkipToContent from '@/components/SkipToContent'

// Lazy load below-the-fold components for performance
const ProblemSolution = lazy(() => import('@/components/ProblemSolution'))
const ProcessFlow = lazy(() => import('@/components/ProcessFlow'))
const ServicesOverview = lazy(() => import('@/components/ServicesOverview'))
const WhoWeHelp = lazy(() => import('@/components/WhoWeHelp'))
const AudioSamples = lazy(() => import('@/components/AudioSamples'))
const Pricing = lazy(() => import('@/components/Pricing'))
const CustomizationSection = lazy(() => import('@/components/CustomizationSection'))
const Testimonials = lazy(() => import('@/components/Testimonials'))
const FreeStrategySection = lazy(() => import('@/components/FreeStrategySection'))
const FAQSection = lazy(() => import('@/components/FAQSection'))
const BlogSection = lazy(() => import('@/components/BlogSection'))
const ContactCTA = lazy(() => import('@/components/ContactCTA'))
const Footer = lazy(() => import('@/components/Footer'))

// Loading skeleton component
function SectionSkeleton() {
  return (
    <div className="py-16 animate-pulse">
      <div className="container mx-auto px-4">
        <div className="h-8 bg-slate-700/30 rounded w-1/3 mx-auto mb-4"></div>
        <div className="h-4 bg-slate-700/20 rounded w-1/2 mx-auto mb-8"></div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-slate-700/20 rounded-xl"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <ErrorBoundary>
      <SEO
        title="Elite Cold Calling & Lead Generation for Real Estate Investors"
        description="Built by investors, for investors. The Leads Up provides elite cold calling VAs, precision data, and proven systems to build predictable deal pipelines for real estate wholesalers and investors."
        keywords="real estate cold calling, lead generation, skip tracing, wholesaling, real estate investing, motivated sellers, cold calling VAs"
        canonical="https://theleadsup.com"
      />

      <SkipToContent />
      <ScrollProgress />

      <div className="min-h-screen">
        <EnhancedHeader />

        {/* Above the fold - load immediately */}
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          <Hero />
          <ProofBar />

          {/* Below the fold - lazy load with suspense */}
          <Suspense fallback={<SectionSkeleton />}>
            <ProblemSolution />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <ProcessFlow />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <ServicesOverview />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <WhoWeHelp />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <AudioSamples />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <Testimonials />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <section id="pricing">
              <Pricing />
            </section>
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <CustomizationSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <FreeStrategySection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <FAQSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <BlogSection />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <section id="contact">
              <ContactCTA />
            </section>
          </Suspense>
        </main>

        <Suspense fallback={<div className="h-96 bg-slate-900"></div>}>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  )
}