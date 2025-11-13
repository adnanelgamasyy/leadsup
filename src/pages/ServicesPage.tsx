import { Phone, Database, Search, TrendingUp, Users, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInStagger, hoverLift, viewportOnce, buttonHover, iconHover } from '@/lib/motion'

const services = [
  {
    icon: Phone,
    title: 'Professional Cold Calling',
    headline: 'Conversations That Close Deals.',
    body: 'Our professional callers bring years of industry experience, precision, and persistence to every conversation. We don\'t just dial—we build rapport, uncover motivation, and move deals forward.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-action-blue/40 to-action-blue/10',
    path: '/services/cold-calling'
  },
  {
    icon: Database,
    title: 'Precision Data Generation',
    headline: 'Beyond Motivation—Into Action.',
    body: 'Our data experts go deeper than surface-level filters. We target prospects going through life or financial transitions that indicate real intent, maximizing your chance to connect with people ready to make a deal today.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-energetic-pink/40 to-action-blue/20',
    path: '/services/data-generation'
  },
  {
    icon: Search,
    title: 'High-Accuracy Skip Tracing',
    headline: 'Accuracy That Delivers Opportunity.',
    body: 'We use advanced tracing tools and verified databases to provide precise contact information with unmatched accuracy. Each record is validated, ensuring your outreach reaches the right person at the right time.',
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-vibrant-green/40 to-bright-amber/20',
    path: '/services/skip-tracing'
  },
  {
    icon: TrendingUp,
    title: 'Free Market Research & Strategy',
    headline: 'Strategy Before Outreach. Always.',
    body: 'Every campaign starts with research. Our analysts identify the hottest areas, best entry points, and strongest exit strategies to help you move with confidence and clarity before the first call is ever made.',
    image: 'https://images.pexels.com/photos/7621135/pexels-photo-7621135.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-action-blue/40 to-energetic-pink/20',
    path: '/services/market-research'
  },
  {
    icon: Users,
    title: 'Acquisition & Disposition Support',
    headline: 'An Entire Department Dedicated to Your Deal Flow.',
    body: 'We help you find motivated sellers, manage acquisitions, and assist with dispositions. From the first call to the final key exchange, we cover your entire deal flow so you can focus on scaling.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-deep-purple/40 to-action-blue/20',
    path: '/services/acquisitions-dispositions'
  },
  {
    icon: Calendar,
    title: 'High-Intent Appointment Setting',
    headline: 'Booked. Confirmed. Connected. Closed.',
    body: 'Our appointment setting goes beyond scheduling. Every meeting is double-confirmed and supported with live transfers, connecting your team instantly with ready-to-act prospects.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-vibrant-green/40 to-action-blue/20',
    path: '/services/appointment-setting'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#101633] to-slate-900 pt-32 pb-24">
        {/* Glow overlays */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-action-blue/20 blur-3xl" />
          <div className="absolute right-[10%] top-[35%] h-[22rem] w-[22rem] rounded-full bg-energetic-pink/20 blur-[150px]" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100 backdrop-blur-md">
              Our Services
            </span>
            <h1 className="mt-6 font-plus-jakarta-sans text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
              Your Pipeline, Powered by Precision
            </h1>
            <p className="mt-6 font-inter text-base text-slate-200/80 sm:text-lg">
              We don't just generate leads—we build the end-to-end systems that turn conversations into closings. Explore our suite of services crafted to help growth-driven professionals dominate their markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#1A1F3B] to-slate-900 py-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-action-blue/15 blur-3xl" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.article
                  key={index}
                  variants={fadeInUp}
                  whileHover={hoverLift}
                  className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl transition"
                >
                  <div className={`absolute -top-24 right-[-40px] h-56 w-56 rounded-full bg-gradient-to-br ${service.accent} blur-3xl opacity-70`} />

                  {/* Service Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} - ${service.headline} for real estate professionals`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101633] via-[#101633]/50 to-transparent" />
                    <div className="absolute top-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
                      <Icon className="h-7 w-7 text-action-blue" />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="relative z-10 p-8">
                    <h3 className="font-plus-jakarta-sans text-2xl font-semibold text-slate-50">
                      {service.title}
                    </h3>
                    <p className="mt-2 font-inter text-sm font-semibold text-action-blue">
                      {service.headline}
                    </p>
                    <p className="mt-4 font-inter text-sm leading-relaxed text-slate-200/80">
                      {service.body}
                    </p>
                    <motion.div whileHover={buttonHover} className="mt-6">
                      <Button
                        onClick={() => window.location.href = service.path}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-4 font-inter text-sm font-semibold text-slate-100 transition hover:bg-white/20"
                      >
                        Learn More
                        <motion.span whileHover={iconHover}>
                          <ArrowRight className="h-4 w-4" />
                        </motion.span>
                      </Button>
                    </motion.div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-action-blue via-deep-purple to-energetic-pink py-28">
        <div className="absolute inset-0">
          <div className="absolute left-[20%] top-[-8rem] h-[20rem] w-[20rem] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-[20%] bottom-[-8rem] h-[20rem] w-[20rem] rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="font-plus-jakarta-sans text-4xl font-bold text-white sm:text-5xl">
              Ready to Build Your Growth Engine?
            </h2>
            <p className="mt-6 font-inter text-lg text-white/90">
              Book a free strategy call and discover how our services can transform your pipeline in as little as 72 hours.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.div whileHover={buttonHover}>
                <Button
                  size="lg"
                  className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-inter text-base font-semibold text-action-blue shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition-all hover:bg-white/90"
                  onClick={() => window.location.href = '/contact'}
                >
                  Book Your Free Call
                  <motion.span whileHover={iconHover}>
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </Button>
              </motion.div>
              <motion.div whileHover={buttonHover}>
                <Button
                  size="lg"
                  className="flex items-center gap-2 rounded-xl border-2 border-white bg-transparent px-8 py-4 font-inter text-base font-semibold text-white transition-all hover:bg-white/10"
                  onClick={() => window.location.href = '/pricing'}
                >
                  View Pricing
                  <motion.span whileHover={iconHover}>
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
