import { ArrowRight, Home, Wrench, Building2, Users2, Zap, Sun, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInStagger, fadeInUp, hoverLift, viewportOnce, iconHover } from '@/lib/motion'

const industries = [
  {
    title: 'Real Estate Wholesalers',
    description: 'Fill your pipeline with quick-cash opportunities and boost assignment fees with smarter, faster lead generation.',
    href: '/industries/wholesalers',
    icon: Home,
    gradient: 'from-action-blue to-energetic-pink',
    iconBg: 'from-action-blue/20 to-energetic-pink/10'
  },
  {
    title: 'Fix & Flip Investors',
    description: 'Find profitable flips faster with exclusive, high-quality off-market opportunities sourced before anyone else.',
    href: '/industries/fix-and-flip',
    icon: Wrench,
    gradient: 'from-energetic-pink to-vibrant-green',
    iconBg: 'from-energetic-pink/20 to-vibrant-green/10'
  },
  {
    title: 'Buy & Hold Investors',
    description: 'Build long-term wealth with consistent deal flow and steady access to motivated seller leads in your buy box.',
    href: '/industries/buy-and-hold',
    icon: Building2,
    gradient: 'from-vibrant-green to-action-blue',
    iconBg: 'from-vibrant-green/20 to-action-blue/10'
  },
  {
    title: 'Real Estate Agents',
    description: 'Generate more listings and attract ready-to-act buyers through precision-targeted outbound conversations.',
    href: '/industries/agents',
    icon: Users2,
    gradient: 'from-bright-amber to-energetic-pink',
    iconBg: 'from-bright-amber/20 to-energetic-pink/10'
  },
  {
    title: 'Roofing Companies',
    description: 'Book qualified homeowner appointments for repair, upgrade, and replacement jobs in the neighborhoods you serve.',
    href: '/industries/roofing',
    icon: Zap,
    gradient: 'from-action-blue to-vibrant-green',
    iconBg: 'from-action-blue/20 to-vibrant-green/10'
  },
  {
    title: 'Solar Industry',
    description: 'Target property owners struggling with high energy costs and convert them into high-converting solar customers.',
    href: '/industries/solar',
    icon: Sun,
    gradient: 'from-bright-amber to-vibrant-green',
    iconBg: 'from-bright-amber/20 to-vibrant-green/10'
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
          {industries.map((industry, index) => (
            <motion.article
              key={industry.title}
              variants={fadeInUp}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-white/5 p-8 shadow-[0_35px_110px_rgba(6,10,26,0.55)] backdrop-blur-3xl"
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-action-blue/5 via-transparent to-energetic-pink/5 pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-action-blue/40 to-transparent" />

              {/* Gradient glow */}
              <div className={`absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br ${industry.iconBg} blur-3xl transition-transform duration-500 group-hover:scale-125`} />

              <div className="relative z-10">
                {/* Icon with gradient background */}
                <motion.div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${industry.iconBg} border border-white/20 shadow-lg mb-6`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <industry.icon className={`h-8 w-8 bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent`} strokeWidth={2} />
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

                <h3 className={`font-plus-jakarta-sans text-xl font-bold bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent mb-4`}>
                  {industry.title}
                </h3>
                <p className="font-inter text-sm text-slate-200/80 leading-relaxed">
                  {industry.description}
                </p>
              </div>

              <motion.a
                href={industry.href}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
                className={`relative z-10 mt-8 inline-flex items-center gap-2 font-inter text-sm font-semibold bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </motion.a>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
          <motion.a
            href="/industries"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-action-blue to-energetic-pink px-6 py-4 font-inter text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-[0_20px_60px_rgba(61,130,247,0.4)] hover:shadow-[0_25px_70px_rgba(61,130,247,0.6)] transition-all duration-300 overflow-hidden"
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative z-10">See all industries</span>
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
