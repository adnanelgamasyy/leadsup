import { Database, Search, Layers, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInStagger, hoverLift, viewportOnce, buttonHover, iconHover } from '@/lib/motion'
import DataGenerationForm from '@/components/forms/DataGenerationForm'

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Market Research Comes First",
    description: "Before generating a single lead, our analysts study your target market to identify the hottest areas, strongest entry points, and most profitable exit strategies. We don't pull random lists—we build data frameworks that match your real-world goals."
  },
  {
    number: "02",
    icon: Target,
    title: "Defining High-Intent Motivations",
    description: "We determine which seller motivations perform best for your strategy—whether it's absentee owners, pre-foreclosure, inheritance, or tired landlords. Every data point is selected to attract people actively experiencing deal-making situations."
  },
  {
    number: "03",
    icon: Layers,
    title: "Advanced List Stacking",
    description: "We combine multiple motivation filters, ownership data, and property insights to create \"stacked\" lists. This dramatically increases your contact quality and the probability of finding a deal."
  },
  {
    number: "04",
    icon: Zap,
    title: "Real Intent Data Collection",
    description: "We go beyond basic indicators to target people experiencing multiple motivation triggers—life events, financial pressure, or property distress. This is the difference between a cold lead and a warm conversation."
  }
]

const benefits = [
  "100% Tailored Data built for your specific strategy, not a generic one-size-fits-all list.",
  "Stronger Lead-to-Deal Ratios through our proprietary motivation layering technique.",
  "Higher ROI by eliminating wasted time and resources on low-quality, unresponsive leads.",
  "Complete Confidence that every call your team makes is backed by research, precision, and intent."
]

function Target({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export default function DataGenerationPage() {
  return (
    <div className="min-h-screen">
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#0a0f24] to-slate-900 pt-32 pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[5%] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-energetic-pink/25 blur-3xl" />
          <div className="absolute right-[5%] top-[20%] h-[25rem] w-[25rem] rounded-full bg-action-blue/20 blur-[150px]" />
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
                <Database className="h-4 w-4" />
                Precision Data Generation
              </div>

              <h1 className="font-plus-jakarta-sans text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
                Precision Data Generation:{' '}
                <span className="bg-gradient-to-r from-energetic-pink to-action-blue bg-clip-text text-transparent">
                  Fueling Your Pipeline with Intent
                </span>
              </h1>

              <p className="font-inter text-lg leading-relaxed text-slate-200/80">
                Stop buying outdated, generic lists. Our data generation process starts with deep market research to deliver hyper-targeted, motivation-layered leads who are not just potentially interested—they are ready to act.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.div whileHover={buttonHover}>
                  <Button
                    size="lg"
                    className="flex items-center gap-2 rounded-xl bg-energetic-pink px-8 py-4 font-inter text-base font-semibold text-white shadow-[0_30px_80px_rgba(240,55,104,0.5)] transition-all hover:bg-energetic-pink/90"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get a Smarter Target List
                    <motion.span whileHover={iconHover}>
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 shadow-[0_40px_120px_rgba(240,55,104,0.25)] backdrop-blur-2xl">
                <img
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Data generation and analytics"
                  className="w-full rounded-2xl object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#1A1F3B] to-slate-900 py-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-energetic-pink/15 blur-3xl" />
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
              How We Build{' '}
              <span className="bg-gradient-to-r from-energetic-pink to-vibrant-green bg-clip-text text-transparent">
                Opportunity, Not Just Lists
              </span>
            </h2>
            <p className="mt-6 font-inter text-lg text-slate-200/80">
              Great outreach starts with great data. Our process is designed to give you an unfair advantage by ensuring every record you target aligns with your specific investment or business goals.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-20 grid gap-8 lg:grid-cols-2"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.article
                  key={index}
                  variants={fadeInUp}
                  whileHover={hoverLift}
                  className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-energetic-pink/20 backdrop-blur-xl">
                      <Icon className="h-7 w-7 text-energetic-pink" />
                    </div>
                    <span className="font-plus-jakarta-sans text-5xl font-bold text-white/10">{step.number}</span>
                  </div>
                  <h3 className="font-plus-jakarta-sans text-2xl font-semibold text-slate-50">
                    {step.title}
                  </h3>
                  <p className="mt-4 font-inter text-base leading-relaxed text-slate-200/80">
                    {step.description}
                  </p>
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
                Good Data Wins Deals.{' '}
                <span className="bg-gradient-to-r from-vibrant-green to-bright-amber bg-clip-text text-transparent">
                  Period.
                </span>
              </h2>
              <p className="mt-6 font-inter text-lg text-slate-200/80">
                Our team blends analytics, human understanding, and industry experience to deliver lists that don't just reach motivated sellers—they reach sellers who are ready to talk now.
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

      {/* Data Generation Form Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#060c24] via-[#0d1533] to-[#050815] py-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-energetic-pink/15 blur-[170px]" />
          <div className="absolute right-[5%] top-[25%] h-[24rem] w-[24rem] rounded-full bg-action-blue/20 blur-[150px]" />
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
              <Database className="h-4 w-4" />
              Request Custom Data
            </span>
            <h2 className="mt-6 font-plus-jakarta-sans text-4xl lg:text-5xl font-bold text-slate-50">
              Get Your Custom Data List
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-inter text-lg text-slate-200/80">
              Tell us about your target market and investment strategy. We'll create a precision-targeted list that fits your exact needs.
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
            <div className="absolute inset-0 bg-gradient-to-br from-energetic-pink/5 via-transparent to-action-blue/5 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-energetic-pink/40 to-transparent" />

            <div className="relative z-10">
              <DataGenerationForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-energetic-pink via-deep-purple to-action-blue py-28">
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
              Ready for Smarter Targeting?
            </h2>
            <p className="mt-6 font-inter text-xl text-white/90">
              Let's build your next list—data that doesn't just inform, but converts.
            </p>
            <motion.div whileHover={buttonHover} className="mt-10">
              <Button
                size="lg"
                className="flex items-center gap-2 rounded-xl bg-white px-10 py-6 font-inter text-lg font-semibold text-energetic-pink shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition-all hover:bg-white/90"
                onClick={() => window.location.href = '/contact'}
              >
                Build Your Custom List Today
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
