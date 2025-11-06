import { useState } from 'react'
import { Check, Phone, Users, ArrowRight, Rocket, TrendingUp, Crown, Sparkles, ShieldCheck, Timer, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInStagger, hoverLift, viewportOnce, buttonHover, iconHover } from '@/lib/motion'

const pricingPlans = [
  {
    id: 'drive',
    name: 'LeadsUp Drive',
    ideal: 'Ideal for: The Solo Operator & Small Team',
    tagline: 'You hand us the list—we hand you the deals.',
    price: '$3,500',
    period: '/month',
    icon: Rocket,
    accent: 'from-action-blue/40 to-action-blue/10',
    gradient: 'from-action-blue to-energetic-pink',
    highlight: false,
    features: [
      '1 elite cold caller embedded into your brand voice',
      'Dedicated Client Success Manager + weekly huddles',
      'Handpick your caller before launch',
      'Quality control on every conversation',
      'Daily & weekly performance reporting',
      'ReadyMode dialer + lead routing setup'
    ],
    cta: 'Get Started Today'
  },
  {
    id: 'momentum',
    name: 'LeadsUp Momentum',
    ideal: 'Ideal for: The growing business ready to scale',
    tagline: 'Keep your deals in motion with an all-in-one system.',
    price: '$6,750',
    period: '/month',
    icon: TrendingUp,
    accent: 'from-energetic-pink/40 to-action-blue/20',
    gradient: 'from-energetic-pink to-vibrant-green',
    highlight: true,
    features: [
      'Everything in Drive',
      '15K data pulling records per month included',
      '15K skip tracing records with multi-source enrichment',
      'Speed-to-lead automations + CRM and Slack sync',
      'Performance war room with weekly KPI reviews',
      'Dedicated optimization strategist'
    ],
    cta: 'Start Scaling Now'
  },
  {
    id: 'prime',
    name: 'LeadsUp Prime',
    ideal: 'Ideal for: Market leaders & scaling operations',
    tagline: 'Full-scale growth. Every call counts.',
    price: 'Custom pricing',
    period: '',
    icon: Crown,
    accent: 'from-vibrant-green/40 to-bright-amber/20',
    gradient: 'from-bright-amber to-vibrant-green',
    highlight: false,
    features: [
      'Everything in Momentum',
      '2 elite cold callers assigned with multi-seat coverage',
      '30K data pulling records + 30K skip tracing records monthly',
      'Advanced buyer matchmaking & dispo coordination',
      'Multi-market scripting with compliance reviews',
      'Executive revenue dashboards & quarterly strategy intensives'
    ],
    cta: 'Dominate Your Market'
  }
]

const planFormUrls: Record<string, string> = {
  drive: 'https://cal.com/leadsup/drive',
  momentum: 'https://cal.com/leadsup/momentum',
  prime: 'https://cal.com/leadsup/prime'
}

export default function PricingPage() {
  const [numCallers, setNumCallers] = useState('1')
  const [numAcquisitionManagers, setNumAcquisitionManagers] = useState('0')

  const handleCustomSubmit = () => {
    const calendarUrl = `https://cal.com/leadsup/strategy-call?callers=${numCallers}&managers=${numAcquisitionManagers}`
    window.open(calendarUrl, '_blank')
  }

  const handlePlanCta = (planId: string) => {
    const url = planFormUrls[planId]
    if (!url) return

    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
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
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#101633] to-slate-900 py-28">
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
            {pricingPlans.map((plan) => (
              <motion.article
                key={plan.name}
                variants={fadeInUp}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                className={`group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-white/5 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.45)] backdrop-blur-3xl ${
                  plan.highlight ? 'ring-2 ring-action-blue/40' : ''
                }`}
              >
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-action-blue/5 via-transparent to-energetic-pink/5 pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-action-blue/40 to-transparent" />

                {/* Gradient glow */}
                <div className={`absolute -top-24 right-[-40px] h-56 w-56 rounded-full bg-gradient-to-br ${plan.accent} blur-3xl opacity-70 transition-transform duration-500 group-hover:scale-125`} />

                <div className="relative z-10 flex h-full flex-col">
                  {/* Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${plan.accent} border border-white/20 shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <plan.icon className={`h-8 w-8 bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`} strokeWidth={2} />
                      {/* Sparkle effect */}
                      <motion.div
                        className="absolute -top-1 -right-1"
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sparkles className="w-4 h-4 text-vibrant-green" />
                      </motion.div>
                    </motion.div>

                    {plan.highlight && (
                      <motion.span
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="rounded-full border border-action-blue/40 bg-action-blue/20 px-3 py-1.5 text-xs font-semibold text-action-blue backdrop-blur-sm"
                      >
                        Most Popular
                      </motion.span>
                    )}
                  </div>

                  {/* Plan name with gradient */}
                  <h3 className={`font-plus-jakarta-sans text-2xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent mb-2`}>
                    {plan.name}
                  </h3>
                  <p className="font-inter text-xs uppercase tracking-[0.35em] text-slate-200/70 mb-4">{plan.ideal}</p>

                  <p className="font-inter text-sm text-slate-200/80 mb-6">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-8 flex items-baseline gap-2">
                    <span className={`font-plus-jakarta-sans text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    {plan.period && <span className="font-inter text-base text-slate-200/70">{plan.period}</span>}
                  </div>

                  {/* Gradient CTA Button */}
                  <motion.button
                    onClick={() => handlePlanCta(plan.id)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group/btn relative overflow-hidden flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-inter text-sm font-semibold text-white shadow-[0_20px_60px_rgba(61,130,247,0.4)] hover:shadow-[0_25px_70px_rgba(61,130,247,0.6)] transition-all duration-300 ${
                      plan.highlight ? 'bg-gradient-to-r from-action-blue to-energetic-pink' : 'bg-gradient-to-r from-vibrant-green to-action-blue'
                    }`}
                  >
                    {/* Shimmer effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                    <span className="relative z-10">{plan.cta}</span>
                    <motion.span
                      className="relative z-10"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </motion.button>

                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <span className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-white/30 bg-gradient-to-br ${plan.accent} shadow-sm`}>
                          <Check className={`h-3 w-3 bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`} strokeWidth={3} />
                        </span>
                        <p className="font-inter text-sm text-slate-200/80 leading-relaxed">{feature}</p>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 font-inter text-xs text-slate-200/60">
                    Includes onboarding concierge · QA reviews every call · Instant pause or scale up
                  </div>
                </div>
              </motion.article>
            ))}
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

              <motion.div className="mt-8">
                <motion.button
                  onClick={handleCustomSubmit}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-action-blue to-energetic-pink px-8 py-4 font-inter text-base font-semibold text-white shadow-[0_20px_60px_rgba(61,130,247,0.4)] hover:shadow-[0_25px_70px_rgba(61,130,247,0.6)] transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">Let's Talk</span>
                  <motion.span
                    className="relative z-10"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Phone className="h-5 w-5" />
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
