"use client"

import { Database, TrendingDown, UserX } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { fadeInStagger, fadeInUp, hoverLift, viewportOnce } from '@/lib/motion'

const problemPalette = [
  { ring: 'from-energetic-pink/50 to-action-blue/30', icon: 'text-energetic-pink' },
  { ring: 'from-action-blue/50 to-vibrant-green/30', icon: 'text-action-blue' },
  { ring: 'from-vibrant-green/50 to-bright-amber/30', icon: 'text-vibrant-green' }
]

const problems = [
  {
    icon: TrendingDown,
    title: 'Feast-or-famine revenue cycles',
    description: 'One month the deals are flowing; the next, your pipeline is dry and the pressure is on. Consistency feels impossible.'
  },
  {
    icon: Database,
    title: 'Bad data and wasted dialing',
    description: 'You burn time and capital on outdated lists, wrong numbers, and prospects with no intent to sell.'
  },
  {
    icon: UserX,
    title: 'In-house hiring headaches',
    description: 'Recruiting, onboarding, and retaining cold callers drains focus from the work that actually earns commissions.'
  }
]

const solutionBenefits = [
  'Predictable deal flow that turns sporadic prospecting into daily qualified appointments',
  'Elite talent on-demand without the overhead of recruiting, training, or managing',
  'Precision life-event data that focuses your offers on sellers ready to move now'
]

const solutionTabs = [
  { label: 'Our solution', active: true },
  { label: 'Expert vetting', active: false },
  { label: 'Pipeline visibility', active: false }
]

export default function ProblemSolution() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a112b] via-[#101a3d] to-[#050a1e] py-28">
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-0 h-[30rem] w-[30rem] rounded-full bg-action-blue/15 blur-[180px]" />
        <div className="absolute -bottom-20 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-energetic-pink/20 blur-[160px]" />
        <div className="absolute left-1/2 top-1/4 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-vibrant-green/10 blur-[140px]" />
      </div>

      <div className="page-shell relative mx-auto max-w-[1400px]">
        {/* Problem */}
        <motion.div
          className="max-w-5xl text-left lg:max-w-none"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
            The bottleneck
          </span>
          <h2 className="mt-6 font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-5xl">
            Why most real estate businesses hit a wall
          </h2>
          <p className="mt-4 max-w-2xl font-inter text-base text-slate-200/80">
            You waste time and capital on bad data, inconsistent prospecting, and the grind of hiring callers who never quite deliver. Growth isn’t limited by your ambition—it’s limited by your outreach engine.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          variants={fadeInStagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {problems.map((problem, idx) => (
            <motion.article
              key={problem.title}
              variants={fadeInUp}
              whileHover={hoverLift}
              className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-8 shadow-[0_30px_80px_rgba(10,12,31,0.35)] backdrop-blur-2xl"
            >
              <div className="relative mb-6 flex h-16 w-16 items-center justify-center">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${problemPalette[idx].ring} blur-2xl`} />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-slate-50">
                  <problem.icon className={`h-8 w-8 ${problemPalette[idx].icon}`} />
                </div>
              </div>

              <h3 className="font-plus-jakarta-sans text-xl font-semibold text-slate-50">
                {problem.title}
              </h3>
              <p className="mt-3 font-inter text-sm text-slate-200/80 leading-relaxed">
                {problem.description}
              </p>

              <div className="mt-8 h-px bg-gradient-to-r from-transparent via-action-blue/40 to-transparent" />
            </motion.article>
          ))}
        </motion.div>

        {/* Solution */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-28 grid items-start gap-16 lg:grid-cols-[1.05fr,1.15fr]"
        >
          <motion.div
            variants={fadeInUp}
            className="order-2 overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_40px_120px_rgba(10,12,31,0.4)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_55%)]" />
            <img
              src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Collaborative team working"
              className="relative h-full w-full object-cover opacity-95"
            />
            <div className="absolute bottom-6 left-1/2 flex w-[80%] -translate-x-1/2 gap-4 rounded-2xl border border-white/20 bg-[#0d1533cc] p-4 shadow-[0_25px_60px_rgba(12,18,40,0.45)] backdrop-blur-xl">
              <div className="flex-1 text-center text-slate-200">
                <p className="font-plus-jakarta-sans text-2xl font-semibold text-action-blue">92%</p>
                <p className="text-xs text-slate-300/80">Contact rate uplift</p>
              </div>
              <div className="flex-1 text-center border-x border-white/10 text-slate-200">
                <p className="font-plus-jakarta-sans text-2xl font-semibold text-vibrant-green">500+</p>
                <p className="text-xs text-slate-300/80">Deals sourced annually</p>
              </div>
              <div className="flex-1 text-center text-slate-200">
                <p className="font-plus-jakarta-sans text-2xl font-semibold text-energetic-pink">24/7</p>
                <p className="text-xs text-slate-300/80">On-call support</p>
              </div>
            </div>
          </motion.div>

          <div className="order-1 flex flex-col gap-10">
            <div className="space-y-6 text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
                The solution
              </span>
              <h2 className="font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-[2.75rem]">
                Plug our acquisitions engine into your business
              </h2>
              <p className="max-w-3xl font-inter text-base text-slate-200/80">
                LeadsUp was built to eliminate the feast-or-famine cycle. We combine human expertise with smart systems so you get scalable results—not a heavier workload. Our pre-trained specialists, fueled by precision data and proven scripts, own the entire top-of-funnel while you focus on negotiating and closing deals.
              </p>
            </div>

            <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-2 text-sm text-slate-100">
              {solutionTabs.map((tab) => (
                <button
                  key={tab.label}
                  type="button"
                  className={`rounded-xl px-5 py-2 font-inter font-semibold uppercase tracking-[0.2em] transition ${
                    tab.active ? 'bg-action-blue text-white shadow-[0_15px_40px_rgba(61,130,247,0.35)]' : 'text-slate-200/70 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/5 p-8 shadow-[0_30px_80px_rgba(8,12,28,0.45)] backdrop-blur-2xl">
              <ul className="space-y-4">
                {solutionBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-xl border border-action-blue/30 bg-action-blue/20 text-action-blue">
                      ✓
                    </span>
                    <p className="font-inter text-sm text-slate-200/80 leading-relaxed">{benefit}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <motion.a
                  href="#process"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-vibrant-green to-action-blue px-8 py-4 font-inter text-base font-semibold text-white shadow-[0_25px_60px_rgba(61,130,247,0.45)] hover:shadow-[0_30px_70px_rgba(61,130,247,0.6)] transition-all duration-300"
                >
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">Discover our process</span>
                </motion.a>
                <a
                  href="#pricing"
                  className="flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-inter text-base font-semibold text-slate-100 transition hover:border-action-blue hover:text-action-blue"
                >
                  Explore pricing →
                </a>
              </div>

              <div className="mt-6 flex items-center gap-3 font-inter text-sm text-slate-200/70">
                <div className="flex -space-x-2">
                  {[220453, 774909, 2379004, 415829].map((id) => (
                    <img
                      key={id}
                      src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=120`}
                      alt="Client avatar"
                      className="h-9 w-9 rounded-full border-2 border-white/20 object-cover shadow-[0_10px_30px_rgba(9,12,32,0.45)]"
                    />
                  ))}
                </div>
                <span className="font-medium">Trusted by 500+ investors across the U.S.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}