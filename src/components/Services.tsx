"use client"

import { Phone, Database, Briefcase, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInStagger, fadeInUp, hoverLift, iconHover, viewportOnce } from '@/lib/motion'

const services = [
  {
    icon: Phone,
    title: 'Elite cold-calling specialists',
    description:
      'Fully trained agents embedded into your brand voice with scripts, QA, and live coaching to convert more motivated sellers.',
    badge: 'People + craft',
    accent: 'from-action-blue/60 via-energetic-pink/30 to-vibrant-green/20',
    glow: 'from-action-blue/30 via-energetic-pink/20 to-transparent'
  },
  {
    icon: Database,
    title: 'Premium skip tracing intelligence',
    description:
      'Multi-source data enrichment, dynamic list scoring, and automated refresh cycles keep your pipeline fed with accurate contacts.',
    badge: 'Data + signals',
    accent: 'from-vibrant-green/60 via-action-blue/30 to-bright-amber/20',
    glow: 'from-vibrant-green/25 via-action-blue/20 to-transparent'
  },
  {
    icon: Briefcase,
    title: 'Full-cycle acquisition ops',
    description:
      'Outbound, nurture, and dispo handled end-to-end—including follow-up cadences, CRM sync, and buyer matching for every deal.',
    badge: 'Revenue ops',
    accent: 'from-energetic-pink/60 via-bright-amber/30 to-action-blue/20',
    glow: 'from-energetic-pink/30 via-bright-amber/20 to-transparent'
  }
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-[#050a1f] via-[#0b1330] to-[#050815] py-28"
    >
      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-[-6rem] h-[26rem] w-[26rem] rounded-full bg-action-blue/20 blur-[170px]" />
        <div className="absolute right-[-5rem] top-[30%] h-[24rem] w-[24rem] rounded-full bg-energetic-pink/20 blur-[160px]" />
        <div className="absolute left-1/2 bottom-[-8rem] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-vibrant-green/15 blur-[150px]" />
      </div>

      <div className="page-shell relative mx-auto max-w-[1400px]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
            Services
          </span>
          <h2 className="mt-6 font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-[2.75rem]">
            Everything you need to dominate your market
          </h2>
          <p className="mt-4 font-inter text-base text-slate-200/80">
            Modular offerings designed to plug directly into your acquisition stack, tailored to the maturity of your team.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInStagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeInUp}
              whileHover={hoverLift}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-8 shadow-[0_35px_100px_rgba(6,11,27,0.45)] backdrop-blur-2xl"
            >
              <div className={`absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 bg-gradient-to-br ${service.accent} opacity-50 blur-3xl transition-all duration-500 group-hover:opacity-80`} />
              <div className="relative z-10 flex flex-1 flex-col gap-6">
                <span className="w-max rounded-full border border-white/15 bg-white/10 px-3 py-1 font-inter text-xs font-semibold uppercase tracking-[0.25em] text-slate-200">
                  {service.badge}
                </span>

                <div className="relative flex h-16 w-16 items-center justify-center">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${service.glow} blur-2xl`} />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-action-blue shadow-[0_18px_40px_rgba(9,14,35,0.45)]">
                    <service.icon className="h-7 w-7" />
                  </div>
                </div>

                <div>
                  <h3 className="font-plus-jakarta-sans text-2xl font-semibold text-slate-50">{service.title}</h3>
                  <p className="mt-3 font-inter text-sm text-slate-200/80 leading-relaxed">{service.description}</p>
                </div>

                <motion.a
                  whileHover={iconHover}
                  href="/contact"
                  className="mt-auto inline-flex items-center gap-2 font-inter text-sm font-semibold text-action-blue transition-colors hover:text-action-blue/80"
                >
                  Learn how it works
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}