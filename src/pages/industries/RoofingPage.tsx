import { Home, Phone, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInStagger, hoverLift, viewportOnce, buttonHover, iconHover } from '@/lib/motion'

const features = [
  {
    icon: Home,
    title: 'Storm-Damaged Leads',
    description: 'We target homeowners in areas recently affected by hail, wind, or storm damage—property owners actively searching for roofing contractors and emergency repairs.'
  },
  {
    icon: Phone,
    title: 'Pre-Qualified Homeowners',
    description: 'Every lead is screened for property ownership, insurance claims, and repair urgency. Your sales team spends time closing deals, not chasing cold prospects.'
  },
  {
    icon: Users,
    title: 'Appointment Setting',
    description: 'We don't just hand you a list—we book appointments directly on your calendar with homeowners ready for inspections, estimates, and same-week installations.'
  },
  {
    icon: TrendingUp,
    title: 'Keep Crews Busy Year-Round',
    description: 'Avoid slow seasons with a consistent pipeline of roofing leads. Whether it's repairs, replacements, or new construction, we keep your crews working and profitable.'
  }
]

export default function RoofingPage() {
  return (
    <div className="min-h-screen">
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#101633] to-slate-900 pt-32 pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-energetic-pink/20 blur-3xl" />
          <div className="absolute right-[10%] bottom-[-5rem] h-[22rem] w-[22rem] rounded-full bg-bright-amber/20 blur-[150px]" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl mb-6">
              <Home className="h-8 w-8 text-energetic-pink" />
            </div>
            <h1 className="font-plus-jakarta-sans text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
              <span className="bg-gradient-to-r from-energetic-pink to-bright-amber bg-clip-text text-transparent">Fill Your Roofing Calendar</span> with Qualified Leads
            </h1>
            <p className="mt-6 font-inter text-base text-slate-200/80 sm:text-lg">
              A crew that isn't working is a crew that's costing you money. We connect roofing contractors with homeowners actively seeking roof repairs, replacements, and inspections.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.div whileHover={buttonHover}>
                <Button
                  size="lg"
                  className="flex items-center gap-2 rounded-xl bg-energetic-pink px-8 py-4 font-inter text-base font-semibold text-white shadow-[0_30px_80px_rgba(240,55,104,0.5)] transition-all hover:bg-energetic-pink/90"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Roofing Leads Now
                  <motion.span whileHover={iconHover}>
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1F3B] via-[#101633] to-deep-purple py-28">
        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-16 text-center font-plus-jakarta-sans text-4xl font-bold text-slate-50"
          >
            Why Roofing Companies Choose LeadsUp
          </motion.h2>

          <motion.div
            variants={fadeInStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-8 md:grid-cols-2"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.article
                  key={index}
                  variants={fadeInUp}
                  whileHover={hoverLift}
                  className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl">
                      <Icon className="h-6 w-6 text-energetic-pink" />
                    </div>
                    <div>
                      <h3 className="font-plus-jakarta-sans text-xl font-semibold text-slate-50">
                        {feature.title}
                      </h3>
                      <p className="mt-2 font-inter text-sm leading-relaxed text-slate-200/80">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-energetic-pink via-deep-purple to-bright-amber py-28">
        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="font-plus-jakarta-sans text-4xl font-bold text-white sm:text-5xl">
              Ready to Keep Your Crews Busy?
            </h2>
            <p className="mt-6 font-inter text-lg text-white/90">
              Let's build a lead generation system that fills your calendar with qualified roofing appointments. Book your free consultation today.
            </p>
            <motion.div whileHover={buttonHover} className="mt-10">
              <Button
                size="lg"
                className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-inter text-base font-semibold text-energetic-pink shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition-all hover:bg-white/90"
                onClick={() => window.location.href = '/contact'}
              >
                Book Free Call
                <motion.span whileHover={iconHover}>
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
