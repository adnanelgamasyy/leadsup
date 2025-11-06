"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { buttonHover, fadeInUp, iconHover, viewportOnce } from '@/lib/motion'

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#040919] via-[#0b1330] to-[#040817] py-28"
    >
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-action-blue/25 blur-[180px]" />
        <div className="absolute right-[12%] top-[20%] h-[24rem] w-[24rem] rounded-full bg-energetic-pink/22 blur-[170px]" />
        <div className="absolute left-1/2 bottom-[-10rem] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-vibrant-green/18 blur-[150px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-5xl"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/8 p-12 text-center shadow-[0_40px_140px_rgba(8,12,28,0.55)] backdrop-blur-3xl sm:p-16"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_transparent_55%)]" />
              <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rotate-6 bg-gradient-to-br from-action-blue/10 via-transparent to-energetic-pink/10 blur-[200px]" />
            </div>

            <div className="relative z-10 space-y-8">
              <h2 className="font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-5xl lg:text-6xl">
                Stop competing for deals.
                <br />
                <span className="text-transparent bg-gradient-to-r from-action-blue via-energetic-pink to-vibrant-green bg-clip-text">
                  Start owning your market.
                </span>
              </h2>

              <p className="mx-auto max-w-2xl font-inter text-lg text-slate-200/85">
                Your competitors are closing deals right now. While they grind, you can scale. Let’s build a custom plan so the next profitable opportunity in your market is yours.
              </p>

              <motion.div
                className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
                variants={fadeInUp}
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-energetic-pink to-vibrant-green px-10 py-5 font-inter text-base font-semibold text-white shadow-[0_30px_80px_rgba(61,130,247,0.5)] hover:shadow-[0_35px_90px_rgba(61,130,247,0.6)] transition-all duration-300"
                >
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">Get started today</span>
                  <motion.span
                    className="relative z-10"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </motion.button>
              </motion.div>

              <div className="flex flex-col gap-3 font-inter text-xs uppercase tracking-[0.3em] text-slate-200/70 sm:flex-row sm:gap-6 sm:text-sm">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-vibrant-green" /> Free 15-minute consultation
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-action-blue" /> No commitment required
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-energetic-pink" /> Custom strategy included
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}