import { Users, Phone, TrendingUp, Award, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInStagger, fadeInUp, hoverLift, viewportOnce } from '@/lib/motion'
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'

const stats = [
  { number: 100000, suffix: '+', label: 'Qualified leads generated for investors and operators', icon: TrendingUp, accent: 'from-action-blue/40 to-action-blue/10', iconTint: 'text-action-blue', gradient: 'from-action-blue to-energetic-pink' },
  { number: 7, suffix: '+', label: 'Years in the real estate trenches refining outbound systems', icon: Award, accent: 'from-energetic-pink/40 to-energetic-pink/10', iconTint: 'text-energetic-pink', gradient: 'from-energetic-pink to-vibrant-green' },
  { number: 120, suffix: '+', label: 'Active client campaigns powered by LeadsUp specialists', icon: Users, accent: 'from-vibrant-green/40 to-vibrant-green/10', iconTint: 'text-vibrant-green', gradient: 'from-vibrant-green to-action-blue' },
  { number: 4.9, suffix: '/5', label: 'Client satisfaction rating across every engagement', icon: Phone, accent: 'from-bright-amber/40 to-bright-amber/10', iconTint: 'text-bright-amber', gradient: 'from-bright-amber to-energetic-pink', decimals: 1 }
]

// Animated Stat Card Component
function AnimatedStatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { count, ref } = useAnimatedCounter({
    end: stat.number,
    suffix: stat.suffix,
    decimals: stat.decimals || 0,
    separator: stat.number >= 1000 ? ',' : '',
    duration: 2500
  })

  return (
    <motion.article
      ref={ref}
      variants={fadeInUp}
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
      className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-white/5 p-6 shadow-lg backdrop-blur-3xl group"
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-action-blue/5 via-transparent to-energetic-pink/5 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-action-blue/40 to-transparent" />

      {/* Gradient glow */}
      <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${stat.accent} blur-3xl transition-transform duration-500 group-hover:scale-125`} />

      <div className="relative flex flex-col items-start gap-4">
        {/* Icon */}
        <motion.div
          className={`flex h-14 w-14 items-center justify-center rounded-xl border border-white/30 bg-gradient-to-br ${stat.accent} backdrop-blur-sm shadow-lg`}
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <stat.icon className={`h-7 w-7 ${stat.iconTint}`} />
          {/* Sparkle effect on hover */}
          <motion.div
            className="absolute -top-1 -right-1"
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-vibrant-green" />
          </motion.div>
        </motion.div>

        {/* Number with gradient */}
        <div>
          <p className={`font-plus-jakarta-sans text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
            {count}
          </p>
          <p className="mt-3 font-inter text-sm text-slate-200/70 leading-relaxed">
            {stat.label}
          </p>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.article>
  )
}

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
          {stats.map((stat, index) => (
            <AnimatedStatCard key={stat.label} stat={stat} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}