import { Search, DollarSign, CheckCircle, Zap, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInStagger, hoverLift, viewportOnce, buttonHover, iconHover } from '@/lib/motion'

const features = [
  {
    icon: DollarSign,
    title: "The Industry's Best ROI.",
    headline: "Affordable Without Compromise",
    description: "We offer some of the most competitive pricing available while maintaining unmatched precision and reliability. Don't choose between price and quality—get both."
  },
  {
    icon: CheckCircle,
    title: "Connect with the Right Person, Every Time.",
    headline: "Unmatched Accuracy Rates",
    description: "Our advanced tracing tools and rigorous verification processes ensure clean, up-to-date contact details, dramatically increasing your connection rate and campaign efficiency."
  },
  {
    icon: Search,
    title: "Strength in Numbers.",
    headline: "Multi-Source Data Verification",
    description: "We pull from multiple trusted data providers, cross-checking every record for accuracy and deliverability. This eliminates the errors and outdated information common in single-source lists."
  },
  {
    icon: Zap,
    title: "Opportunity Doesn't Wait.",
    headline: "Fast, Seamless Turnaround",
    description: "Get your lists processed, verified, and ready for outreach in record time. Our system is designed to integrate directly into your cold calling campaigns for seamless execution."
  }
]

export default function SkipTracingPage() {
  return (
    <div className="min-h-screen">
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#0a0f24] to-slate-900 pt-32 pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[5%] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-vibrant-green/25 blur-3xl" />
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
                <Search className="h-4 w-4" />
                Skip Tracing
              </div>

              <h1 className="font-plus-jakarta-sans text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
                High-Accuracy Skip Tracing.{' '}
                <span className="bg-gradient-to-r from-vibrant-green to-bright-amber bg-clip-text text-transparent">
                  Accurate. Affordable. Always On Point.
                </span>
              </h1>

              <p className="font-inter text-lg leading-relaxed text-slate-200/80">
                Stop overpaying for inaccurate contact information that leads to dead ends. Our system combines verified data sources and multi-layered validation to deliver the highest accuracy rates at the most competitive price in the industry.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.div whileHover={buttonHover}>
                  <Button
                    size="lg"
                    className="flex items-center gap-2 rounded-xl bg-vibrant-green px-8 py-4 font-inter text-base font-semibold text-white shadow-[0_30px_80px_rgba(152,201,60,0.5)] transition-all hover:bg-vibrant-green/90"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get Verified Data Today
                    <motion.span whileHover={iconHover}>
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 shadow-[0_40px_120px_rgba(152,201,60,0.25)] backdrop-blur-2xl">
                <img
                  src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Skip tracing verification"
                  className="w-full rounded-2xl object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#1A1F3B] to-slate-900 py-28">
        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-5xl">
              The Data Edge That{' '}
              <span className="bg-gradient-to-r from-vibrant-green to-bright-amber bg-clip-text text-transparent">
                Puts You Ahead of the Competition
              </span>
            </h2>
            <p className="mt-6 font-inter text-lg text-slate-200/80">
              In a game of speed, having the right phone number is your first advantage. We've engineered our skip tracing service to be the most reliable and cost-effective tool in your arsenal.
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
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-vibrant-green/20 backdrop-blur-xl">
                      <Icon className="h-7 w-7 text-vibrant-green" />
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

      {/* Why It Works Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1F3B] via-[#101633] to-deep-purple py-28">
        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-5xl">
              Because Accurate Data{' '}
              <span className="bg-gradient-to-r from-vibrant-green to-action-blue bg-clip-text text-transparent">
                Means Faster Deals
              </span>
            </h2>
            <p className="mt-6 font-inter text-lg text-slate-200/80">
              We make skip tracing efficient, affordable, and dependable—so you can stop chasing dead-end leads and focus on what really matters: turning conversations into closings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-vibrant-green via-deep-purple to-bright-amber py-28">
        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="font-plus-jakarta-sans text-4xl font-bold text-white sm:text-5xl">
              Precision You Can Afford. Results You Can Trust.
            </h2>
            <p className="mt-6 font-inter text-xl text-white/90">
              Get verified data without inflated prices—and start connecting with the people who matter.
            </p>
            <motion.div whileHover={buttonHover} className="mt-10">
              <Button
                size="lg"
                className="flex items-center gap-2 rounded-xl bg-white px-10 py-6 font-inter text-lg font-semibold text-vibrant-green shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition-all hover:bg-white/90"
                onClick={() => window.location.href = '/contact'}
              >
                Get a Free Quote on Your List
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
