"use client"

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInStagger, fadeInUp, hoverLift, viewportOnce, iconHover } from '@/lib/motion'

const industries = [
  {
    title: 'Real Estate Wholesalers',
    description: 'Fill your pipeline with quick-cash opportunities and boost assignment fees with smarter, faster lead generation.',
    href: '/industries/wholesalers'
  },
  {
    title: 'Fix & Flip Investors',
    description: 'Find profitable flips faster with exclusive, high-quality off-market opportunities sourced before anyone else.',
    href: '/industries/fix-and-flip'
  },
  {
    title: 'Buy & Hold Investors',
    description: 'Build long-term wealth with consistent deal flow and steady access to motivated seller leads in your buy box.',
    href: '/industries/buy-and-hold'
  },
  {
    title: 'Real Estate Agents',
    description: 'Generate more listings and attract ready-to-act buyers through precision-targeted outbound conversations.',
    href: '/industries/agents'
  },
  {
    title: 'Roofing Companies',
    description: 'Book qualified homeowner appointments for repair, upgrade, and replacement jobs in the neighborhoods you serve.',
    href: '/industries/roofing'
  },
  {
    title: 'Solar Industry',
    description: 'Target property owners struggling with high energy costs and convert them into high-converting solar customers.',
    href: '/industries/solar'
  }
]

export default function WhoWeHelp() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050816] via-[#0b1430] to-[#050819] py-28">
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-[-6rem] h-[24rem] w-[24rem] rounded-full bg-action-blue/15 blur-[160px]" />
        <div className="absolute right-[12%] top-[35%] h-[24rem] w-[24rem] rounded-full bg-energetic-pink/18 blur-[160px]" />
        <div className="absolute left-1/2 bottom-[-8rem] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-vibrant-green/12 blur-[150px]" />
      </div>

      <div className="page-shell relative mx-auto max-w-[1400px]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-4xl text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
            Who we help
          </span>
          <h2 className="mt-6 font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-[2.75rem]">
            Specialized support for every growth-driven professional
          </h2>
          <p className="mt-4 max-w-2xl font-inter text-base text-slate-200/80">
            We empower deal-makers across multiple industries with the strategy, systems, and connections to win. Whether you’re flipping houses or booking roofing jobs, our methodology delivers repeatable results.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInStagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {industries.map((industry) => (
            <motion.article
              key={industry.title}
              variants={fadeInUp}
              whileHover={hoverLift}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/8 p-8 shadow-[0_35px_110px_rgba(6,10,26,0.45)] backdrop-blur-2xl"
            >
              <div>
                <h3 className="font-plus-jakarta-sans text-xl font-semibold text-slate-50">
                  {industry.title}
                </h3>
                <p className="mt-4 font-inter text-sm text-slate-200/80 leading-relaxed">
                  {industry.description}
                </p>
              </div>

              <motion.a
                href={industry.href}
                whileHover={iconHover}
                className="mt-8 inline-flex items-center gap-2 font-inter text-sm font-semibold text-action-blue"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 text-left"
        >
          <a
            href="/industries"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-100 transition hover:border-action-blue hover:text-action-blue"
          >
            See all industries
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
