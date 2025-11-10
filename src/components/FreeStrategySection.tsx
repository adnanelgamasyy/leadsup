"use client"

import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '@/lib/motion'
import MarketResearchForm from '@/components/forms/MarketResearchForm'

export default function FreeStrategySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#060b1f] via-[#0a1533] to-[#050817] py-28">
      <div className="absolute inset-0">
        <div className="absolute left-[12%] top-[-6rem] h-[24rem] w-[24rem] rounded-full bg-action-blue/18 blur-[170px]" />
        <div className="absolute right-[12%] top-[30%] h-[24rem] w-[24rem] rounded-full bg-energetic-pink/18 blur-[160px]" />
        <div className="absolute left-1/2 bottom-[-8rem] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-vibrant-green/12 blur-[150px]" />
      </div>

      <div className="page-shell relative mx-auto max-w-[1100px]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="rounded-[32px] border border-white/15 bg-white/7 p-10 shadow-[0_40px_120px_rgba(8,12,28,0.55)] backdrop-blur-3xl sm:p-14"
        >
          <div className="space-y-6 text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
              Your strategic edge
            </span>
            <h2 className="font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-[2.85rem]">
              Get your free, data-driven market strategy report
            </h2>
            <p className="max-w-3xl font-inter text-base text-slate-200/80">
              The most expensive mistake in this business is acting on bad information. We pair every qualified investor, wholesaler, and agent with a complimentary Market Strategy Report so you know exactly where to deploy your next campaign.
            </p>
          </div>

          <div className="mt-10 grid gap-4 font-inter text-sm text-slate-200/80 sm:grid-cols-3">
            {[
              {
                icon: '📍',
                label: 'The hottest pockets & zip codes'
              },
              {
                icon: '🎯',
                label: 'The smartest entry points for maximum leverage'
              },
              {
                icon: '💰',
                label: 'The most profitable exit strategies'
              }
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_25px_70px_rgba(6,10,26,0.45)] backdrop-blur-2xl"
              >
                <span className="text-2xl" aria-hidden>
                  {item.icon}
                </span>
                <p className="mt-3 leading-relaxed text-slate-200/80">{item.label}</p>
              </div>
            ))}
          </div>

          <motion.div className="mt-10" variants={fadeInUp}>
            <MarketResearchForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
