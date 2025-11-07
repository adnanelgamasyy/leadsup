"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInStagger, buttonHover, iconHover } from '@/lib/motion'

const actionWords = ['Dial.', 'Deal.', 'Deposit.'] as const

const promiseBullets = [
  'Elite acquisitions callers obsessed with conversions',
  'Precision life-event data that surfaces motivated sellers',
  'Conversations routed live to your phone or calendar'
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0f1f] via-deep-purple to-slate-900 pt-32 pb-24">
      {/* Glow overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-action-blue/10 blur-3xl" />
        <div className="absolute top-40 -right-24 h-80 w-80 rounded-full bg-energetic-pink/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-[28rem] -translate-x-1/2 rounded-[999px] bg-gradient-to-t from-slate-900 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="page-shell relative mx-auto max-w-[1400px]">
        <motion.div
          variants={fadeInStagger}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]"
        >
          {/* Left column */}
          <motion.div variants={fadeInUp} className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-slate-200 backdrop-blur-md">
              LeadsUp Call Center
            </div>

            <div className="space-y-4">
              <h1 className="font-plus-jakarta-sans text-4xl leading-tight text-slate-50 sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
                The Outbound Engine for Real Estate Investors
              </h1>
              <p className="max-w-2xl font-inter text-base text-slate-200/80 sm:text-lg">
                Built by investors, for investors. Our elite callers, armed with precision data, turn conversations into cash-producing opportunities so you can focus on negotiating and closing deals.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.button
                onClick={() => window.location.href = '/contact'}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-action-blue to-energetic-pink px-8 py-4 font-inter text-base font-semibold text-white shadow-[0_30px_80px_rgba(61,130,247,0.5)] hover:shadow-[0_35px_90px_rgba(61,130,247,0.6)] transition-all duration-300"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10">Get LeadsUp Today</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </motion.button>

              <motion.a
                whileHover={buttonHover}
                href="#contact"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-inter text-base font-semibold text-slate-100 transition-all hover:border-action-blue hover:text-action-blue"
              >
                Contact Us
                <motion.span whileHover={iconHover}>
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </motion.a>
            </div>

            <ul className="grid gap-3 font-inter text-sm text-slate-200/80 sm:max-w-xl">
              {promiseBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-action-blue/40 bg-action-blue/10 text-action-blue">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right column */}
          <motion.div variants={fadeInUp} className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-2xl" />
            <motion.div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-8 shadow-[0_40px_120px_rgba(61,130,247,0.25)] backdrop-blur-2xl" whileHover={{ scale: 1.01 }}>
              <div className="flex items-center justify-between gap-6">
                <div className="space-y-2">
                  <p className="font-inter text-xs uppercase tracking-[0.3em] text-slate-200/70">Outbound mantra</p>
                  <div className="flex flex-col gap-2 text-left">
                    {actionWords.map((word, index) => (
                      <motion.span
                        key={word}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.45, ease: 'easeOut' }}
                        className="block font-plus-jakarta-sans text-4xl font-bold text-slate-50"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-gradient-to-br from-action-blue via-energetic-pink to-vibrant-green">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),_transparent_70%)]" />
                  <span className="font-plus-jakarta-sans text-sm font-semibold uppercase tracking-[0.4em] text-slate-50">3D</span>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Qualified opportunities sourced', value: '100K+' },
                  { label: 'Years refining outbound playbooks', value: '7+' },
                  { label: 'Active client campaigns', value: '120+' },
                  { label: 'Client satisfaction rating', value: '4.9/5' }
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    whileHover={{ translateY: -6 }}
                    transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                  >
                    <p className="font-plus-jakarta-sans text-2xl font-semibold text-slate-50">{stat.value}</p>
                    <p className="mt-1 font-inter text-xs uppercase tracking-[0.3em] text-slate-200/60">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}