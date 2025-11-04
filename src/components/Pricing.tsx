import { Button } from '@/components/ui/button'
import { Check, ArrowRight, ShieldCheck, Timer, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInStagger, fadeInUp, hoverLift, viewportOnce, iconHover } from '@/lib/motion'

const plans = [
  {
    id: 'drive',
    name: 'LeadsUp Drive',
    ideal: 'Ideal for: The Solo Operator & Small Team',
    tagline: 'You hand us the list—we hand you the deals.',
    price: '$3,500',
    period: '/month',
    accent: 'from-action-blue/40 to-action-blue/10',
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
    accent: 'from-energetic-pink/40 to-action-blue/20',
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
    accent: 'from-vibrant-green/40 to-bright-amber/20',
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

export default function Pricing() {
  const handlePlanCta = (planId: string) => {
    const url = planFormUrls[planId]
    if (!url) return

    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="pricing" className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#101633] to-slate-900 py-28">
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-0 h-96 w-96 rounded-full bg-action-blue/20 blur-3xl" />
        <div className="absolute right-[15%] bottom-0 h-[30rem] w-[30rem] rounded-full bg-energetic-pink/20 blur-[180px]" />
      </div>

      <div className="page-shell relative mx-auto max-w-[1400px]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
            Pricing & plans
          </span>
          <h2 className="mt-6 font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-5xl">
            Simple, transparent pricing to fuel your growth
          </h2>
          <p className="mt-4 font-inter text-base text-slate-200/80">
            No hidden fees. No long-term contracts. Choose the plan that matches your ambition—and scale with confidence while we keep the pipeline full.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInStagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
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
                    <h3 className="font-plus-jakarta-sans text-2xl font-semibold text-slate-50">{plan.name}</h3>
                    <p className="font-inter text-xs uppercase tracking-[0.35em] text-slate-200/70">{plan.ideal}</p>
                  </div>
                  {plan.highlight && (
                    <span className="rounded-full border border-action-blue/40 bg-action-blue/20 px-3 py-1 text-xs font-semibold text-action-blue">
                      Most Popular
                    </span>
                  )}
                </div>

                <p className="mt-4 font-inter text-sm text-slate-200/80">
                  {plan.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-plus-jakarta-sans text-4xl font-bold text-slate-50">{plan.price}</span>
                  {plan.period && <span className="font-inter text-sm text-slate-200/70">{plan.period}</span>}
                </div>

                <Button
                  size="lg"
                  onClick={() => handlePlanCta(plan.id)}
                  className={`mt-8 flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-inter text-sm font-semibold transition ${
                    plan.highlight
                      ? 'bg-action-blue text-white shadow-elevated-md hover:bg-action-blue/90'
                      : 'bg-white/10 text-slate-100 hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                  <motion.span whileHover={iconHover}>
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Button>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-white/30 bg-white/10 text-action-blue">
                        <Check className="h-3 w-3" />
                      </span>
                      <p className="font-inter text-sm text-slate-200/80 leading-relaxed">{feature}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 font-inter text-xs text-slate-200/60">
                  Includes onboarding concierge · QA reviews every call · Instant pause or scale up
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-20 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-200/80 shadow-[0_30px_90px_rgba(8,12,28,0.45)] backdrop-blur-2xl sm:grid-cols-3"
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
              <p className="mt-1 font-inter text-xs text-slate-200/70">If we’re not delivering momentum in the first month, we’ll recalibrate or refund your investment.</p>
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
  )
}