import { Phone, UserCheck, Target, BarChart3, Eye, ArrowRight, CheckCircle2, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInStagger, hoverLift, viewportOnce, buttonHover, iconHover } from '@/lib/motion'
import { coldCallingServiceSchema, organizationSchema, createBreadcrumbSchema } from '@/data/schema'
import ColdCallingForm from '@/components/forms/ColdCallingForm'

const features = [
  {
    icon: UserCheck,
    title: "You're in Control.",
    headline: "You Handpick Your Agent",
    description: "We believe the right fit is critical. You'll have the opportunity to listen to our available agents and handpick the one whose tone, experience, and style best matches your brand and market.",
    color: "action-blue"
  },
  {
    icon: Target,
    title: "Experts in Your Niche.",
    headline: "Deep Industry-Specific Training",
    description: "Each caller is trained for your specific industry—real estate, solar, roofing, or insurance—to communicate with precision and confidence. They understand the language, the objections, and the motivations of your prospects.",
    color: "energetic-pink"
  },
  {
    icon: BarChart3,
    title: "We Obsess Over Performance.",
    headline: "Relentless Quality Control",
    description: "Our supervisors monitor calls daily, track performance metrics, and provide ongoing coaching to keep your caller sharp and your leads top-tier. We are constantly refining our approach to maximize your ROI.",
    color: "vibrant-green"
  },
  {
    icon: Eye,
    title: "Your Data, On Demand.",
    headline: "Full Transparency with Live Dashboards",
    description: "You get 24/7 access to real-time insights, call recordings, and conversion metrics through our live dashboards. Track your campaign's performance and KPIs with complete precision.",
    color: "bright-amber"
  }
]

const benefits = [
  "40% Higher Appointment Conversion Rates through targeted, professional outreach.",
  "Consistent Brand Representation with a caller you personally select and trust.",
  "A Predictable Pipeline that frees you from the feast-or-famine cycle.",
  "Fewer Wasted Dials and more time spent talking to qualified, high-intent prospects."
]

export default function ColdCallingPage() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: 'https://leadsupcallcenter.com' },
    { name: 'Services', url: 'https://leadsupcallcenter.com/services' },
    { name: 'Cold Calling', url: 'https://leadsupcallcenter.com/services/cold-calling' }
  ])

  return (
    <div className="min-h-screen">
      <SEO
        title="Professional Cold Calling Services | Real Estate Lead Generation"
        description="Elite cold calling services for real estate investors. Our trained cold callers help you find motivated sellers, book appointments, and close more deals. 40% higher conversion rates."
        keywords="cold calling services, real estate cold calling, professional cold callers, lead generation, appointment setting, motivated sellers"
        canonical="https://leadsupcallcenter.com/services/cold-calling"
        schemaMarkup={[coldCallingServiceSchema, organizationSchema, breadcrumbs]}
      />
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#0a0f24] to-slate-900 pt-32 pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[5%] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-action-blue/25 blur-3xl" />
          <div className="absolute right-[5%] top-[20%] h-[25rem] w-[25rem] rounded-full bg-energetic-pink/20 blur-[150px]" />
          <div className="absolute left-1/2 bottom-[-10rem] h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-vibrant-green/15 blur-3xl" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInStagger}
            initial="hidden"
            animate="show"
            className="grid items-center gap-12 lg:grid-cols-2"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100 backdrop-blur-md">
                <Phone className="h-4 w-4" />
                Professional Cold Calling
              </div>

              <h1 className="font-plus-jakarta-sans text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
                Cold Calling Services That Actually{' '}
                <span className="bg-gradient-to-r from-action-blue to-energetic-pink bg-clip-text text-transparent">
                  Close Deals
                </span>
              </h1>

              <p className="font-inter text-lg leading-relaxed text-slate-200/80">
                Stop wasting money on robotic scripts and unmotivated agents. Our professional callers are trained to be a seamless extension of your brand, combining strategy and psychology to turn outreach into opportunity. We don't just make calls—we create conversations that convert.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.div whileHover={buttonHover}>
                  <Button
                    size="lg"
                    className="flex items-center gap-2 rounded-xl bg-action-blue px-8 py-4 font-inter text-base font-semibold text-white shadow-[0_30px_80px_rgba(61,130,247,0.5)] transition-all hover:bg-action-blue/90"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Choose Your Professional Caller
                    <motion.span whileHover={iconHover}>
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 shadow-[0_40px_120px_rgba(61,130,247,0.25)] backdrop-blur-2xl">
                <img
                  src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional cold calling services for real estate lead generation and motivated seller outreach"
                  className="w-full rounded-2xl object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The LeadsUp Difference Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#1A1F3B] to-slate-900 py-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-action-blue/15 blur-3xl" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-5xl">
              This Isn't Your Standard Call Center.{' '}
              <span className="bg-gradient-to-r from-action-blue to-energetic-pink bg-clip-text text-transparent">
                This is Your Elite Acquisitions Team.
              </span>
            </h2>
            <p className="mt-6 font-inter text-lg text-slate-200/80">
              We built our cold calling service to be the solution we always wished we had. It's a system founded on quality, transparency, and a relentless focus on performance.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-20 grid gap-8 md:grid-cols-2"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.article
                  key={index}
                  variants={fadeInUp}
                  whileHover={hoverLift}
                  className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-${feature.color}/20 backdrop-blur-xl`}>
                      <Icon className={`h-7 w-7 text-${feature.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-slate-200/70">
                        {feature.headline}
                      </p>
                      <h3 className="mt-2 font-plus-jakarta-sans text-xl font-semibold text-slate-50">
                        {feature.title}
                      </h3>
                      <p className="mt-3 font-inter text-sm leading-relaxed text-slate-200/80">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1F3B] via-[#101633] to-deep-purple py-28">
        <div className="absolute inset-0">
          <div className="absolute right-[15%] bottom-0 h-[30rem] w-[30rem] rounded-full bg-vibrant-green/20 blur-[180px]" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-4xl"
          >
            <div className="text-center">
              <h2 className="font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-5xl">
                More Conversations. More Contracts.{' '}
                <span className="bg-gradient-to-r from-vibrant-green to-bright-amber bg-clip-text text-transparent">
                  More Closings.
                </span>
              </h2>
              <p className="mt-6 font-inter text-lg text-slate-200/80">
                By blending human expertise with data-driven precision, our system delivers tangible results that impact your bottom line.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl md:p-12">
              <div className="grid gap-6 md:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-vibrant-green" />
                    <p className="font-inter text-base text-slate-200/80">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#101633] to-slate-900 py-28">
        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-4xl"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl md:p-14">
              <Quote className="absolute left-8 top-8 h-16 w-16 text-action-blue/20" />
              <div className="relative">
                <p className="font-inter text-xl italic leading-relaxed text-slate-100 sm:text-2xl">
                  "The callers are relentless and the lead quality is excellent. They are a core part of our acquisitions process now. We closed a $35k deal in our first 45 days."
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-action-blue to-energetic-pink" />
                  <div>
                    <p className="font-plus-jakarta-sans text-base font-semibold text-slate-50">Mark S.</p>
                    <p className="font-inter text-sm text-slate-200/70">Multi-State Wholesaler, TX</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cold Calling Form Section */}
      <section id="cold-calling-form" className="relative overflow-hidden bg-gradient-to-br from-[#060c24] via-[#0d1533] to-[#050815] py-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-action-blue/15 blur-[170px]" />
          <div className="absolute right-[5%] top-[25%] h-[24rem] w-[24rem] rounded-full bg-energetic-pink/20 blur-[150px]" />
          <div className="absolute left-1/2 bottom-[-6rem] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-vibrant-green/12 blur-[140px]" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1200px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-12 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
              <Phone className="h-4 w-4" />
              Request Your Team
            </span>
            <h2 className="mt-6 font-plus-jakarta-sans text-4xl lg:text-5xl font-bold text-slate-50">
              Get Started with Professional Cold Calling
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-inter text-lg text-slate-200/80">
              Tell us about your business and goals. We'll match you with the perfect caller for your market and schedule a strategy call.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-white/5 p-8 lg:p-12 shadow-[0_35px_110px_rgba(5,8,20,0.65)] backdrop-blur-3xl relative overflow-hidden"
          >
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-action-blue/5 via-transparent to-energetic-pink/5 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-action-blue/40 to-transparent" />

            <div className="relative z-10">
              <ColdCallingForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-action-blue via-deep-purple to-energetic-pink py-28">
        <div className="absolute inset-0">
          <div className="absolute left-[20%] top-[-8rem] h-[20rem] w-[20rem] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-[20%] bottom-[-8rem] h-[20rem] w-[20rem] rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="font-plus-jakarta-sans text-4xl font-bold text-white sm:text-5xl">
              Ready to Power Up Your Pipeline?
            </h2>
            <p className="mt-6 font-inter text-xl text-white/90">
              Choose your caller, define your target, and let us start the conversations that close deals.
            </p>
            <motion.div whileHover={buttonHover} className="mt-10">
              <Button
                size="lg"
                className="flex items-center gap-2 rounded-xl bg-white px-10 py-6 font-inter text-lg font-semibold text-action-blue shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition-all hover:bg-white/90"
                onClick={() => window.location.href = '/contact'}
              >
                Book Your Free Strategy Call
                <motion.span whileHover={iconHover}>
                  <ArrowRight className="h-6 w-6" />
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
