import { TrendingUp, FileText, Map, Users, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInStagger, hoverLift, viewportOnce, buttonHover, iconHover } from '@/lib/motion'
import MarketResearchForm from '@/components/forms/MarketResearchForm'

const deliverables = [
  "Target Area Analysis: Pinpointing the hottest zip codes, price ranges, and property types based on your specific business goals.",
  "Entry & Exit Strategy Insights: Defining where to buy, when to sell, and how to maximize your profit potential.",
  "Local Motivation Trends: Identifying which seller motivations are producing the best conversion rates in your market right now.",
  "Competition Breakdown: Understanding market activity and investor density to help you stay one step ahead of the competition."
]

export default function MarketResearchPage() {
  return (
    <div className="min-h-screen">
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#0a0f24] to-slate-900 pt-32 pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[5%] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-action-blue/25 blur-3xl" />
          <div className="absolute right-[5%] top-[20%] h-[25rem] w-[25rem] rounded-full bg-vibrant-green/20 blur-[150px]" />
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
                <TrendingUp className="h-4 w-4" />
                Free Market Research
              </div>

              <h1 className="font-plus-jakarta-sans text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
                Strategy Starts with Smart Research.{' '}
                <span className="bg-gradient-to-r from-action-blue to-vibrant-green bg-clip-text text-transparent">
                  And We Provide It For Free.
                </span>
              </h1>

              <p className="font-inter text-lg leading-relaxed text-slate-200/80">
                Every winning campaign starts with an unfair advantage. Before a single call is made, our analysts study your market to identify the hottest areas, strongest opportunities, and most profitable strategies—because success begins with clarity.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.div whileHover={buttonHover}>
                  <Button
                    size="lg"
                    className="flex items-center gap-2 rounded-xl bg-action-blue px-8 py-4 font-inter text-base font-semibold text-white shadow-[0_30px_80px_rgba(61,130,247,0.5)] transition-all hover:bg-action-blue/90"
                    onClick={() => document.getElementById('market-research-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get My Free Market Research Report
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
                  src="https://images.pexels.com/photos/7621135/pexels-photo-7621135.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Market research and analysis"
                  className="w-full rounded-2xl object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Promise Section */}
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
              We Provide This Research{' '}
              <span className="bg-gradient-to-r from-action-blue to-vibrant-green bg-clip-text text-transparent">
                100% Free. Here's Why.
              </span>
            </h2>
            <p className="mt-6 font-inter text-lg text-slate-200/80">
              We believe informed clients make the best partners. We are so confident in our ability to deliver value that we are willing to prove it upfront. We want you to see the depth of our strategic thinking and the power of our data-backed approach, even if you don't move forward with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Report Includes Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1F3B] via-[#101633] to-deep-purple py-28">
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
                A Clear, Actionable Plan—{' '}
                <span className="bg-gradient-to-r from-vibrant-green to-bright-amber bg-clip-text text-transparent">
                  Not Just Raw Data
                </span>
              </h2>
              <p className="mt-6 font-inter text-lg text-slate-200/80">
                Your complimentary report will be a strategic blueprint for dominating your target market.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl md:p-12">
              <div className="space-y-6">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-vibrant-green" />
                    <p className="font-inter text-base text-slate-200/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#1A1F3B] to-slate-900 py-28">
        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-5xl">
              Because We{' '}
              <span className="bg-gradient-to-r from-action-blue to-energetic-pink bg-clip-text text-transparent">
                Never Work Blindly
              </span>
            </h2>
            <p className="mt-6 font-inter text-lg text-slate-200/80">
              Every LeadsUp campaign is guided by data and strategy, not guesswork. Our team ensures that by the time you start your outreach, you already know where to focus, what motivates your market, and how to close deals faster.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Research Form Section */}
      <section id="market-research-form" className="relative overflow-hidden bg-gradient-to-br from-[#060c24] via-[#0d1533] to-[#050815] py-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-action-blue/15 blur-[170px]" />
          <div className="absolute right-[5%] top-[25%] h-[24rem] w-[24rem] rounded-full bg-vibrant-green/20 blur-[150px]" />
          <div className="absolute left-1/2 bottom-[-6rem] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-energetic-pink/12 blur-[140px]" />
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
              <TrendingUp className="h-4 w-4" />
              Request Free Research
            </span>
            <h2 className="mt-6 font-plus-jakarta-sans text-4xl lg:text-5xl font-bold text-slate-50">
              Get Your Free Market Research Report
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-inter text-lg text-slate-200/80">
              Tell us about your target market and we'll provide you with a comprehensive research report at no cost.
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
            <div className="absolute inset-0 bg-gradient-to-br from-action-blue/5 via-transparent to-vibrant-green/5 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-action-blue/40 to-transparent" />

            <div className="relative z-10">
              <MarketResearchForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-action-blue via-deep-purple to-vibrant-green py-28">
        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="font-plus-jakarta-sans text-4xl font-bold text-white sm:text-5xl">
              Ready to Know Your Market Before You Enter It?
            </h2>
            <p className="mt-6 font-inter text-xl text-white/90">
              Claim your free market research report today—and discover your best opportunities before your competitors do.
            </p>
            <motion.div whileHover={buttonHover} className="mt-10">
              <Button
                size="lg"
                className="flex items-center gap-2 rounded-xl bg-white px-10 py-6 font-inter text-lg font-semibold text-action-blue shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition-all hover:bg-white/90"
                onClick={() => document.getElementById('market-research-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Claim My Free Report Now
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
