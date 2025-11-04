"use client"

import { Calendar, Users, Target, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { fadeInStagger, fadeInUp, hoverLift, viewportOnce, iconHover } from '@/lib/motion'

const steps = [
  {
    label: 'Book your strategy call',
    title: 'Diagnose your market and deal criteria',
    description: 'We dive deep into your territory, goals, and seller profile to architect a data-driven outreach plan built for your KPIs.',
    icon: Calendar,
    gradient: 'from-action-blue/60 via-action-blue/20 to-transparent',
    numberColor: 'from-action-blue to-energetic-pink'
  },
  {
    label: 'Deploy your A-team',
    title: 'Handpick trained callers and launch with premium data',
    description: 'We match you with elite agents, load precision life-event data, and plug everything into our QA workflows so the lines light up instantly.',
    icon: Users,
    gradient: 'from-vibrant-green/60 via-vibrant-green/20 to-transparent',
    numberColor: 'from-vibrant-green to-action-blue'
  },
  {
    label: 'Receive qualified leads',
    title: 'Take live transfers or calendar-ready appointments',
    description: 'Motivated sellers are routed straight to your phone or booked into your calendar with context, so all that’s left is making the offer.',
    icon: Target,
    gradient: 'from-energetic-pink/60 via-energetic-pink/20 to-transparent',
    numberColor: 'from-energetic-pink to-bright-amber'
  }
]

export default function ProcessFlow() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-gradient-to-br from-[#060b1f] via-[#0e1531] to-[#050815] py-28"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-[-6rem] h-[24rem] w-[24rem] rounded-full bg-action-blue/20 blur-[160px]" />
        <div className="absolute right-[-8rem] top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-energetic-pink/20 blur-[200px]" />
        <div className="absolute left-1/3 bottom-[-6rem] h-[22rem] w-[22rem] rounded-full bg-vibrant-green/15 blur-[150px]" />
      </div>

      <div className="page-shell relative mx-auto max-w-[1400px]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-5xl text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
            The process
          </span>
          <h2 className="mt-6 font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-[2.8rem]">
            Launch your lead machine in 72 hours
          </h2>
          <p className="mt-4 max-w-2xl font-inter text-base text-slate-200/80">
            Getting started is simple, fast, and engineered to deliver qualified conversations immediately—no guesswork, no overwhelm.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInStagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              variants={fadeInUp}
              whileHover={hoverLift}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-8 shadow-[0_30px_80px_rgba(7,10,25,0.5)] backdrop-blur-2xl"
            >
              <div className={`absolute -right-20 -top-16 h-64 w-64 rounded-full bg-gradient-to-br ${step.gradient} blur-3xl transition-opacity duration-500 group-hover:opacity-90`} />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <span className={`font-plus-jakarta-sans text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br ${step.numberColor}`}>
                      {index + 1}
                    </span>
                  </span>
                  <span className="font-inter text-xs uppercase tracking-[0.35em] text-slate-200/70">{step.label}</span>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-action-blue">
                  <step.icon className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="font-plus-jakarta-sans text-xl font-semibold text-slate-50">{step.title}</h3>
                  <p className="mt-3 font-inter text-sm text-slate-200/80 leading-relaxed">{step.description}</p>
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
          className="mt-16 flex flex-col items-center gap-4 text-center"
        >
          <Button
            size="lg"
            className="flex items-center gap-2 rounded-xl bg-action-blue px-10 py-5 font-inter text-base font-semibold text-white shadow-[0_20px_60px_rgba(61,130,247,0.45)] transition hover:bg-action-blue/90"
          >
            Launch my outbound engine
            <motion.span whileHover={iconHover}>
              <ArrowRight className="h-5 w-5" />
            </motion.span>
          </Button>
          <p className="font-inter text-sm text-slate-200/70">
            Free discovery call • Lightning-fast onboarding • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  )
}