"use client"

import { Users, Phone, TrendingUp, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInStagger, fadeInUp, hoverLift, viewportOnce } from '@/lib/motion'

const stats = [
  { number: '100,000', suffix: '+', label: 'Qualified leads generated for investors and operators', icon: TrendingUp, accent: 'from-action-blue/40 to-action-blue/10', iconTint: 'text-action-blue' },
  { number: '7', suffix: '+', label: 'Years in the real estate trenches refining outbound systems', icon: Award, accent: 'from-energetic-pink/40 to-energetic-pink/10', iconTint: 'text-energetic-pink' },
  { number: '120', suffix: '+', label: 'Active client campaigns powered by LeadsUp specialists', icon: Users, accent: 'from-vibrant-green/40 to-vibrant-green/10', iconTint: 'text-vibrant-green' },
  { number: '4.9', suffix: '/5', label: 'Client satisfaction rating across every engagement', icon: Phone, accent: 'from-bright-amber/40 to-bright-amber/10', iconTint: 'text-bright-amber' }
]

export default function ProofBar() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-gradient-to-br from-slate-900 via-[#11162E] to-deep-purple py-24">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 bg-action-blue/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-[28rem] w-[28rem] rounded-full bg-energetic-pink/25 blur-3xl" />
      </div>

      <div className="page-shell relative mx-auto max-w-[1400px]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.35em] text-slate-100">
            The results
          </span>
          <h2 className="mt-6 font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-5xl">
            The undeniable results of a scaled acquisitions team
          </h2>
          <p className="mt-4 font-inter text-base text-slate-200/80">
            Every number is backed by live calls, QA reviews, and verifiable revenue impact. This is what happens when your outbound engine never sleeps.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInStagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.article
              key={stat.label}
              variants={fadeInUp}
              whileHover={hoverLift}
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur-xl"
            >
              <div className={`absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br ${stat.accent} blur-2xl`} />
              <div className="relative flex flex-col items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10">
                  <stat.icon className={`h-6 w-6 ${stat.iconTint}`} />
                </div>
                <div>
                  <p className="font-plus-jakarta-sans text-4xl font-semibold text-slate-50">
                    {stat.number}
                    <span className="text-2xl text-slate-300">{stat.suffix}</span>
                  </p>
                  <p className="mt-2 font-inter text-sm text-slate-200/70 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}