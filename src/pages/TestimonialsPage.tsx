import { motion } from 'framer-motion'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import VideoTestimonialCard from '@/components/VideoTestimonialCard'
import { fadeInStagger, fadeInUp, viewportOnce } from '@/lib/motion'

const videoTestimonials = [
  {
    id: 'nick-testimonial',
    videoUrl: 'https://media.leadsupcallcenter.com/video%20testimonail%20(1).mp4',
    posterUrl: 'https://media.leadsupcallcenter.com/testimonial-nick.jpg',
    title: 'Two Deals Closed & The Service Paid for Itself... in My First Month.',
    clientName: 'Nick, Real Estate Investor'
  }
  // Additional testimonials will be added here as they become available
]

export default function TestimonialsPage() {
  return (
    <>
      <SEO
        title="Client Testimonials & Success Stories | LeadsUp"
        description="Hear directly from real estate investors and operators who are closing more deals and scaling their business with LeadsUp's elite callers and precision data."
        keywords="client testimonials, success stories, real estate investor reviews, LeadsUp reviews, cold calling testimonials, lead generation success"
        canonical="https://leadsupcallcenter.com/testimonials"
      />

      <div className="min-h-screen bg-background">
        <EnhancedHeader />

        <main className="pt-24">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-[#050a1f] via-[#0c1535] to-[#060a1f] py-20">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute left-[10%] top-[-5rem] h-[24rem] w-[24rem] rounded-full bg-action-blue/20 blur-[140px]" />
              <div className="absolute right-[15%] bottom-[-6rem] h-[26rem] w-[26rem] rounded-full bg-energetic-pink/15 blur-[150px]" />
            </div>

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="mx-auto max-w-3xl text-center"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
                  Success Stories
                </span>
                <h1 className="mt-6 font-plus-jakarta-sans text-5xl font-bold text-slate-50 sm:text-6xl">
                  Real Results. Real Investors.
                </h1>
                <p className="mt-6 font-inter text-lg text-slate-200/80">
                  Watch unfiltered testimonials from real estate operators who trust LeadsUp to power their pipeline and close more deals every month.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Testimonials Grid */}
          <section className="relative overflow-hidden bg-gradient-to-br from-[#060a1f] via-[#0a0f28] to-[#050a1f] py-20">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute left-1/4 top-[20%] h-[20rem] w-[20rem] rounded-full bg-vibrant-green/10 blur-[130px]" />
              <div className="absolute right-1/4 bottom-[30%] h-[22rem] w-[22rem] rounded-full bg-action-blue/15 blur-[140px]" />
            </div>

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={fadeInStagger}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto"
              >
                {videoTestimonials.map((testimonial) => (
                  <motion.div key={testimonial.id} variants={fadeInUp}>
                    <VideoTestimonialCard
                      videoUrl={testimonial.videoUrl}
                      posterUrl={testimonial.posterUrl}
                      title={testimonial.title}
                      clientName={testimonial.clientName}
                    />
                  </motion.div>
                ))}

                {/* Placeholder cards for future testimonials */}
                {videoTestimonials.length === 1 && (
                  <motion.div
                    variants={fadeInUp}
                    className="relative overflow-hidden rounded-2xl bg-slate-900/30 border border-white/10 backdrop-blur-sm p-8 flex items-center justify-center min-h-[400px]"
                  >
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/10 mb-4">
                        <svg className="h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <p className="font-plus-jakarta-sans text-lg font-semibold text-slate-300">
                        More Success Stories Coming Soon
                      </p>
                      <p className="mt-2 font-inter text-sm text-slate-400">
                        Stay tuned for additional testimonials from our growing community of successful investors.
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-20 text-center"
              >
                <div className="mx-auto max-w-2xl rounded-3xl border border-white/15 bg-white/5 p-12 backdrop-blur-xl">
                  <h2 className="font-plus-jakarta-sans text-3xl font-bold text-slate-50 mb-4">
                    Ready to Write Your Success Story?
                  </h2>
                  <p className="font-inter text-base text-slate-200/80 mb-8">
                    Join the growing community of investors who are scaling their businesses with LeadsUp's elite calling services and precision data.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-action-blue to-bright-blue px-8 py-4 font-plus-jakarta-sans text-base font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:scale-105"
                    >
                      Get Started Today
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <a
                      href="/services"
                      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 font-plus-jakarta-sans text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
                    >
                      Explore Our Services
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
