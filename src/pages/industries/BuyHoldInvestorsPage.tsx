import { Home, TrendingUp, DollarSign, Users, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInStagger, hoverLift, viewportOnce, buttonHover, iconHover } from '@/lib/motion'

const features = [
  {
    icon: TrendingUp,
    title: 'High-ROI Properties',
    description: 'We target properties with strong rent-to-value ratios in appreciating neighborhoods. Build your empire on cash-flowing assets that generate wealth for decades.'
  },
  {
    icon: DollarSign,
    title: 'Cash Flow First',
    description: 'Our data-driven approach identifies properties that hit your target cap rates and cash-on-cash returns. Every lead is pre-screened for rental income potential.'
  },
  {
    icon: Users,
    title: 'Off-Market Opportunities',
    description: 'Find motivated sellers before properties hit the MLS. Lock in below-market deals that maximize your returns from day one of ownership.'
  },
  {
    icon: Home,
    title: 'Portfolio Building Support',
    description: 'Whether you're acquiring your first rental or your fiftieth, we provide the consistent deal flow you need to build a real estate portfolio that creates generational wealth.'
  }
]

export default function BuyHoldInvestorsPage() {
  return (
    <div className="min-h-screen">
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#101633] to-slate-900 pt-32 pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-vibrant-green/20 blur-3xl" />
          <div className="absolute right-[10%] bottom-[-5rem] h-[22rem] w-[22rem] rounded-full bg-action-blue/20 blur-[150px]" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl mb-6">
              <Home className="h-8 w-8 text-vibrant-green" />
            </div>
            <h1 className="font-plus-jakarta-sans text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
              Build Your <span className="bg-gradient-to-r from-vibrant-green to-action-blue bg-clip-text text-transparent">Rental Empire</span> with Consistent Deal Flow
            </h1>
            <p className="mt-6 font-inter text-base text-slate-200/80 sm:text-lg">
              Every great portfolio starts with the right properties. We connect buy-and-hold investors with cash-flowing rental opportunities that generate passive income and long-term wealth.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.div whileHover={buttonHover}>
                <Button
                  size="lg"
                  className="flex items-center gap-2 rounded-xl bg-vibrant-green px-8 py-4 font-inter text-base font-semibold text-white shadow-[0_30px_80px_rgba(152,201,60,0.5)] transition-all hover:bg-vibrant-green/90"
                  onClick={() => window.location.href = '/contact'}
                >
                  Grow Your Portfolio
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
            Why Buy-and-Hold Investors Choose LeadsUp
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
                      <Icon className="h-6 w-6 text-vibrant-green" />
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
      <section className="relative overflow-hidden bg-gradient-to-br from-vibrant-green via-deep-purple to-action-blue py-28">
        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="font-plus-jakarta-sans text-4xl font-bold text-white sm:text-5xl">
              Ready to Add More Doors to Your Portfolio?
            </h2>
            <p className="mt-6 font-inter text-lg text-white/90">
              Let's build a lead generation system that delivers the rental properties you need to achieve financial freedom. Book your free consultation now.
            </p>
            <motion.div whileHover={buttonHover} className="mt-10">
              <Button
                size="lg"
                className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-inter text-base font-semibold text-vibrant-green shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition-all hover:bg-white/90"
                onClick={() => window.location.href = '/contact'}
              >
                Start Building Today
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
