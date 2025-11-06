"use client"

import { Phone, Database, Search, TrendingUp, Users, Calendar, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInStagger, fadeInUp, hoverLift, viewportOnce } from '@/lib/motion'

const services = [
  {
    icon: Phone,
    title: 'Cold Calling',
    description: 'Professional callers who convert conversations into qualified leads.',
    path: '/services/cold-calling',
    gradient: 'from-action-blue to-energetic-pink'
  },
  {
    icon: Database,
    title: 'Data Generation',
    description: 'Precision-targeted data to reach motivated sellers at the right time.',
    path: '/services/data-generation',
    gradient: 'from-energetic-pink to-vibrant-green'
  },
  {
    icon: Search,
    title: 'Skip Tracing',
    description: 'High-accuracy contact information with verified multi-source data.',
    path: '/services/skip-tracing',
    gradient: 'from-vibrant-green to-action-blue'
  },
  {
    icon: TrendingUp,
    title: 'Market Research',
    description: 'Strategic insights to identify the best opportunities in your market.',
    path: '/services/market-research',
    gradient: 'from-bright-amber to-energetic-pink'
  },
  {
    icon: Users,
    title: 'Acquisitions & Dispositions',
    description: 'End-to-end support from first call to final key exchange.',
    path: '/services/acquisitions-dispositions',
    gradient: 'from-action-blue to-vibrant-green'
  },
  {
    icon: Calendar,
    title: 'Appointment Setting',
    description: 'Double-confirmed meetings with live transfers to ready prospects.',
    path: '/services/appointment-setting',
    gradient: 'from-energetic-pink to-bright-amber'
  }
]

export default function ServicesOverview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#060b1f] via-[#0a1230] to-[#050816] py-20">
      <div className="absolute inset-0">
        <div className="absolute left-[15%] top-[-5rem] h-[20rem] w-[20rem] rounded-full bg-action-blue/15 blur-[140px]" />
        <div className="absolute right-[10%] bottom-[-5rem] h-[20rem] w-[20rem] rounded-full bg-energetic-pink/15 blur-[140px]" />
      </div>

      <div className="page-shell relative mx-auto max-w-[1400px]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
            Our Services
          </span>
          <h2 className="mt-6 font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-[2.75rem]">
            Everything You Need to Scale
          </h2>
          <p className="mt-4 font-inter text-base text-slate-200/80">
            Comprehensive solutions designed to power your entire acquisition pipeline.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInStagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-6 shadow-[0_25px_80px_rgba(6,10,26,0.4)] backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <motion.div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className={`h-6 w-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} strokeWidth={2.5} />
                </motion.div>

                <h3 className={`font-plus-jakarta-sans text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-2`}>
                  {service.title}
                </h3>
                <p className="font-inter text-sm text-slate-200/80 leading-relaxed mb-4">
                  {service.description}
                </p>

                <motion.a
                  href={service.path}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className={`inline-flex items-center gap-2 font-inter text-xs font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 text-center"
        >
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-action-blue to-energetic-pink px-6 py-3 font-inter text-sm font-semibold text-white shadow-[0_20px_60px_rgba(61,130,247,0.4)] hover:shadow-[0_25px_70px_rgba(61,130,247,0.6)] transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative z-10">View All Services</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
