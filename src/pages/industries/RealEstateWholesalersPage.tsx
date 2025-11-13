import { Building2, Phone, Database, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInStagger, hoverLift, viewportOnce, buttonHover, iconHover } from '@/lib/motion'

const features = [
  {
    icon: Database,
    title: "Motivated Seller Lists",
    description: "We target property owners facing foreclosure, probate, divorce, tax liens, and other high-motivation scenarios that signal urgency and willingness to sell below market value."
  },
  {
    icon: Phone,
    title: "Quick Cash Conversations",
    description: "Our callers are trained to speak your language-ARV, MAO, assignment fees. They handle objections, qualify sellers, and set appointments with prospects ready to move fast."
  },
  {
    icon: TrendingUp,
    title: "Deal Flow That Scales",
    description: "Whether you're closing 1 deal per month or 10, our system scales with you. More volume means more contracts, more assignments, and more cash in your pocket."
  },
  {
    icon: CheckCircle,
    title: "Full Transparency",
    description: "Real-time dashboards, recorded calls, and detailed CRM tracking. You'll always know exactly where your leads are in the pipeline and what's being said."
  }
]

const benefits = [
  'Off-market deals before they hit the MLS',
  'Pre-qualified sellers ready to discuss cash offers',
  'Consistent pipeline for reliable monthly income',
  'More time to analyze deals and build buyer relationships'
]

export default function RealEstateWholesalersPage() {
  return (
    <div className="min-h-screen">
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#101633] to-slate-900 pt-32 pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-action-blue/20 blur-3xl" />
          <div className="absolute right-[10%] bottom-[-5rem] h-[22rem] w-[22rem] rounded-full bg-energetic-pink/20 blur-[150px]" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl mb-6">
              <Building2 className="h-8 w-8 text-action-blue" />
            </div>
            <h1 className="font-plus-jakarta-sans text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
              Built for Wholesalers Who Need <span className="bg-gradient-to-r from-action-blue to-vibrant-green bg-clip-text text-transparent">Quick Cash Deals</span>
            </h1>
            <p className="mt-6 font-inter text-base text-slate-200/80 sm:text-lg">
              Every day you're not talking to motivated sellers is a day you're leaving money on the table. We help wholesalers build predictable pipelines that deliver off-market deals month after month.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.div whileHover={buttonHover}>
                <Button
                  size="lg"
                  className="flex items-center gap-2 rounded-xl bg-action-blue px-8 py-4 font-inter text-base font-semibold text-white shadow-[0_30px_80px_rgba(61,130,247,0.5)] transition-all hover:bg-action-blue/90"
                  onClick={() => window.location.href = '/contact'}
                >
                  Book Free Strategy Call
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
            Why Wholesalers Choose LeadsUp
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
                      <Icon className="h-6 w-6 text-action-blue" />
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

      {/* Benefits Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#101633] to-slate-900 py-28">
        <div className="page-shell relative mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <h2 className="font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-5xl">
                What You Get With LeadsUp
              </h2>
              <p className="mt-4 font-inter text-base text-slate-200/80">
                Stop wasting time on cold leads and unqualified prospects. Our system delivers:
              </p>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-vibrant-green" />
                    <span className="font-inter text-base text-slate-200/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Real estate wholesaling business with property keys and contracts for quick cash deals"
                className="rounded-3xl shadow-[0_40px_120px_rgba(15,23,42,0.5)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-action-blue via-deep-purple to-energetic-pink py-28">
        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="font-plus-jakarta-sans text-4xl font-bold text-white sm:text-5xl">
              Ready to Close More Wholesale Deals?
            </h2>
            <p className="mt-6 font-inter text-lg text-white/90">
              Let's build a custom lead generation system for your wholesaling business. Book a free call and we'll show you exactly how we can fill your pipeline.
            </p>
            <motion.div whileHover={buttonHover} className="mt-10">
              <Button
                size="lg"
                className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-inter text-base font-semibold text-action-blue shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition-all hover:bg-white/90"
                onClick={() => window.location.href = '/contact'}
              >
                Get Started Today
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
