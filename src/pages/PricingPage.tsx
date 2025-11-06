import { useState } from 'react'
import { Check, Phone, Users, ArrowRight, Rocket, Zap, Trophy, ShieldCheck, Timer, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInStagger, hoverLift, viewportOnce, buttonHover, iconHover } from '@/lib/motion'

const pricingPlans = [
  {
    name: 'LeadsUp Drive',
    tagline: 'The Essential Engine for Solo Operators.',
    icon: Rocket,
    accent: 'from-action-blue/40 to-action-blue/10',
    highlight: false,
    features: [
      '1 Experienced Cold Caller (4 hrs/day)',
      'Client Success Manager',
      'Quality Control Management',
      'Daily & Weekly Reports',
      'Weekly Team Meetings',
      'Choose Your Cold Caller',
      'ReadyMode Dialer'
    ]
  },
  {
    name: 'LeadsUp Momentum',
    tagline: 'The Complete System for Growing Businesses.',
    icon: Zap,
    accent: 'from-energetic-pink/40 to-action-blue/20',
    highlight: true,
    features: [
      'Everything in Drive, PLUS:',
      '15K Records of Data Pulling',
      '15K Records of Skip Tracing',
      'Priority Support',
      'Advanced Analytics Dashboard',
      'Campaign Optimization'
    ]
  },
  {
    name: 'LeadsUp Prime',
    tagline: 'The Unfair Advantage for Market Leaders.',
    icon: Trophy,
    accent: 'from-vibrant-green/40 to-bright-amber/20',
    highlight: false,
    features: [
      'Everything in Momentum, PLUS:',
      '2 Experienced Cold Callers',
      '30K Records of Data Pulling',
      '30K Records of Skip Tracing',
      'Dedicated Account Manager',
      'Custom Integration Support',
      'White-Glove Onboarding'
    ]
  }
]

export default function PricingPage() {
  const [numCallers, setNumCallers] = useState('1')
  const [numAcquisitionManagers, setNumAcquisitionManagers] = useState('0')

  const handleCustomSubmit = () => {
    const calendarUrl = `https://cal.com/leadsup/strategy-call?callers=${numCallers}&managers=${numAcquisitionManagers}`
    window.open(calendarUrl, '_blank')
  }

  return (
    <div className="min-h-screen">
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#101633] to-slate-900 pt-32 pb-24">
        {/* Glow overlays */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-action-blue/20 blur-3xl" />
          <div className="absolute right-[10%] top-[35%] h-[22rem] w-[22rem] rounded-full bg-energetic-pink/20 blur-[150px]" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100 backdrop-blur-md">
              Pricing & Plans
            </span>
            <h1 className="mt-6 font-plus-jakarta-sans text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
              Simple, Transparent Pricing to Fuel Your Growth
            </h1>
            <p className="mt-6 font-inter text-base text-slate-200/80 sm:text-lg">
              Every LeadsUp plan comes with proven systems, expert support, and a commitment to real results. No hidden fees. No long-term contracts. Just pure performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#1A1F3B] to-slate-900 py-28">
        <div className="absolute inset-0">
          <div className="absolute left-[10%] top-0 h-96 w-96 rounded-full bg-action-blue/20 blur-3xl" />
          <div className="absolute right-[15%] bottom-0 h-[30rem] w-[30rem] rounded-full bg-energetic-pink/20 blur-[180px]" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-8 lg:grid-cols-3"
          >
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <motion.article
                  key={index}
                  variants={fadeInUp}
                  whileHover={hoverLift}
                  className={`relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl transition ${
                    plan.highlight ? 'ring-1 ring-action-blue/60' : ''
                  }`}
                >
                  <div className={`absolute -top-24 right-[-40px] h-56 w-56 rounded-full bg-gradient-to-br ${plan.accent} blur-3xl opacity-70`} />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 ${plan.highlight ? 'bg-action-blue' : 'bg-white/10'} backdrop-blur-xl`}>
                            <Icon className={`h-6 w-6 ${plan.highlight ? 'text-white' : 'text-action-blue'}`} />
                          </div>
                          <h3 className="font-plus-jakarta-sans text-2xl font-semibold text-slate-50">{plan.name}</h3>
                        </div>
                        <p className="font-inter text-xs uppercase tracking-[0.35em] text-slate-200/70">{plan.tagline}</p>
                      </div>
                      {plan.highlight && (
                        <span className="rounded-full border border-action-blue/40 bg-action-blue/20 px-3 py-1 text-xs font-semibold text-action-blue">
                          Most Popular
                        </span>
                      )}
                    </div>

                    <ul className="mt-8 space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-white/30 bg-white/10 text-action-blue">
                            <Check className="h-3 w-3" />
                          </span>
                          <p className="font-inter text-sm leading-relaxed text-slate-200/80">{feature}</p>
                        </li>
                      ))}
                    </ul>

                    <motion.div whileHover={buttonHover} className="mt-8">
                      <Button
                        size="lg"
                        onClick={() => window.location.href = '/contact'}
                        className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-inter text-sm font-semibold transition ${
                          plan.highlight
                            ? 'bg-action-blue text-white shadow-[0_20px_60px_rgba(61,130,247,0.4)] hover:bg-action-blue/90'
                            : 'bg-white/10 text-slate-100 hover:bg-white/20'
                        }`}
                      >
                        {plan.highlight ? 'Start Scaling Now' : plan.name === 'LeadsUp Drive' ? 'Get Started Today' : 'Dominate Your Market'}
                        <motion.span whileHover={iconHover}>
                          <ArrowRight className="h-4 w-4" />
                        </motion.span>
                      </Button>
                    </motion.div>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 font-inter text-xs text-slate-200/70">
                      Includes onboarding concierge · QA reviews every call · Instant pause or scale up
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>

          {/* Guarantees */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-20 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(8,12,28,0.45)] backdrop-blur-2xl sm:grid-cols-3"
          >
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-action-blue" />
              <div>
                <h3 className="font-plus-jakarta-sans text-sm font-semibold text-slate-50">No long-term contracts</h3>
                <p className="mt-1 font-inter text-xs text-slate-200/70">Month-to-month partnership with the flexibility to pause, pivot, or scale in real time.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Timer className="mt-1 h-5 w-5 text-energetic-pink" />
              <div>
                <h3 className="font-plus-jakarta-sans text-sm font-semibold text-slate-50">30-day performance guarantee</h3>
                <p className="mt-1 font-inter text-xs text-slate-200/70">If we're not delivering momentum in the first month, we'll recalibrate or refund your investment.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Eye className="mt-1 h-5 w-5 text-vibrant-green" />
              <div>
                <h3 className="font-plus-jakarta-sans text-sm font-semibold text-slate-50">Total transparency</h3>
                <p className="mt-1 font-inter text-xs text-slate-200/70">Live dashboards, call audits, and KPI reviews keep every dial accountable to your revenue targets.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Solution Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1F3B] via-[#101633] to-deep-purple py-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 bottom-[-7rem] h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-vibrant-green/20 blur-[150px]" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-4xl">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl md:p-12"
            >
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
                  <Users className="h-8 w-8 text-vibrant-green" />
                </div>
                <h2 className="mt-6 font-plus-jakarta-sans text-4xl font-bold text-slate-50">
                  Need a Custom Solution?
                </h2>
                <h3 className="mt-4 font-inter text-xl text-slate-200/80">
                  Build Your Own Plan.
                </h3>
                <p className="mt-4 font-inter text-base text-slate-200/70">
                  Don't see a perfect fit? Let's build a custom package tailored to your exact needs, including dedicated Acquisition Managers and custom data solutions.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block font-inter text-sm font-semibold text-slate-50 mb-3">
                    Number of Cold Callers
                  </label>
                  <select
                    value={numCallers}
                    onChange={(e) => setNumCallers(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-inter text-sm text-slate-50 backdrop-blur-xl transition focus:border-action-blue focus:outline-none focus:ring-2 focus:ring-action-blue/50"
                  >
                    <option value="1" className="bg-[#101633] text-slate-50">1 Cold Caller</option>
                    <option value="2" className="bg-[#101633] text-slate-50">2 Cold Callers</option>
                    <option value="3" className="bg-[#101633] text-slate-50">3 Cold Callers</option>
                    <option value="4" className="bg-[#101633] text-slate-50">4 Cold Callers</option>
                    <option value="5" className="bg-[#101633] text-slate-50">5+ Cold Callers</option>
                  </select>
                </div>

                <div>
                  <label className="block font-inter text-sm font-semibold text-slate-50 mb-3">
                    Number of Acquisition Managers
                  </label>
                  <select
                    value={numAcquisitionManagers}
                    onChange={(e) => setNumAcquisitionManagers(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-inter text-sm text-slate-50 backdrop-blur-xl transition focus:border-action-blue focus:outline-none focus:ring-2 focus:ring-action-blue/50"
                  >
                    <option value="0" className="bg-[#101633] text-slate-50">None</option>
                    <option value="1" className="bg-[#101633] text-slate-50">1 Acquisition Manager</option>
                    <option value="2" className="bg-[#101633] text-slate-50">2 Acquisition Managers</option>
                    <option value="3" className="bg-[#101633] text-slate-50">3 Acquisition Managers</option>
                    <option value="4" className="bg-[#101633] text-slate-50">4+ Acquisition Managers</option>
                  </select>
                </div>
              </div>

              <motion.div whileHover={buttonHover} className="mt-8">
                <Button
                  onClick={handleCustomSubmit}
                  size="lg"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-action-blue px-8 py-4 font-inter text-base font-semibold text-white shadow-[0_20px_60px_rgba(61,130,247,0.4)] transition hover:bg-action-blue/90"
                >
                  Let's Talk
                  <motion.span whileHover={iconHover}>
                    <Phone className="h-5 w-5" />
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
