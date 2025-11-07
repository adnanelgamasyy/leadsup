import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '@/lib/motion'
import MarketResearchForm from './forms/MarketResearchForm'

export default function MarketResearchSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#060c24] via-[#0d1533] to-[#050815] py-20 lg:py-28" id="market-research">
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-action-blue/15 blur-[170px]" />
        <div className="absolute right-[5%] top-[25%] h-[24rem] w-[24rem] rounded-full bg-energetic-pink/20 blur-[150px]" />
        <div className="absolute left-1/2 bottom-[-6rem] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-vibrant-green/12 blur-[140px]" />
      </div>

      <div className="page-shell relative mx-auto max-w-[1200px]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
            Free Market Research
          </span>
          <h2 className="mt-6 font-plus-jakarta-sans text-4xl lg:text-5xl font-bold text-slate-50">
            Get Your Free Market Analysis
          </h2>
          <p className="mt-4 max-w-2xl mx-auto font-inter text-lg text-slate-200/80">
            Let our team research your target market and show you the potential. No obligation, no pressure—just valuable insights.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-white/5 p-8 lg:p-12 shadow-[0_35px_110px_rgba(5,8,20,0.65)] backdrop-blur-3xl relative overflow-hidden"
        >
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-action-blue/5 via-transparent to-energetic-pink/5 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-action-blue/40 to-transparent" />

          <div className="relative z-10">
            <MarketResearchForm />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
