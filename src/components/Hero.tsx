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
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-deep-purple/5 blur-3xl" />
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
            <motion.div
              className="relative overflow-hidden rounded-[28px] border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-12 shadow-[0_40px_120px_rgba(61,130,247,0.25)] backdrop-blur-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Animated Illustration */}
              <div className="relative aspect-square">
                {/* Central Circle - Phone */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="relative h-32 w-32 rounded-full border-4 border-white/30 bg-gradient-to-br from-action-blue via-energetic-pink to-vibrant-green p-1">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-slate-900/90 to-deep-purple/90 backdrop-blur-xl">
                      <svg className="h-16 w-16 text-slate-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* Orbiting Elements */}
                {[
                  { icon: '📞', color: 'from-action-blue to-action-blue/50', delay: 0, radius: 110 },
                  { icon: '🎯', color: 'from-energetic-pink to-energetic-pink/50', delay: 1.5, radius: 110 },
                  { icon: '💼', color: 'from-vibrant-green to-vibrant-green/50', delay: 3, radius: 110 }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="absolute left-1/2 top-1/2"
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: item.delay
                    }}
                    style={{
                      width: item.radius * 2,
                      height: item.radius * 2,
                      marginLeft: -item.radius,
                      marginTop: -item.radius
                    }}
                  >
                    <motion.div
                      className={`absolute left-0 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br ${item.color} text-2xl shadow-lg backdrop-blur-md`}
                      animate={{
                        rotate: [0, -360]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: item.delay
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  </motion.div>
                ))}

                {/* Pulsing Rings */}
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                    initial={{ width: 140, height: 140, opacity: 0.5 }}
                    animate={{
                      width: [140, 200, 140],
                      height: [140, 200, 140],
                      opacity: [0.5, 0.1, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 1,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              {/* 3D Badge */}
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="flex items-center gap-2">
                  <div className="flex flex-col gap-1 text-left">
                    {actionWords.map((word, index) => (
                      <motion.span
                        key={word}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.45, ease: 'easeOut' }}
                        className="block font-plus-jakarta-sans text-lg font-bold text-slate-50"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                  <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-gradient-to-br from-action-blue via-energetic-pink to-vibrant-green">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),_transparent_70%)]" />
                    <span className="font-plus-jakarta-sans text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-slate-50">3D</span>
                  </div>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}