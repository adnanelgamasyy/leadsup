import { Home, Hammer, Building2, Users, Zap, Sun, Heart, Car, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInStagger, hoverLift, viewportOnce, buttonHover, iconHover } from '@/lib/motion'

const realEstateNiches = [
  {
    icon: Building2,
    title: 'Real Estate Wholesalers',
    description: 'Quick cash deals with motivated sellers ready to move fast.',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=600',
    path: '/industries/real-estate-wholesalers'
  },
  {
    icon: Hammer,
    title: 'Fix & Flip Investors',
    description: 'Find distressed properties with maximum profit potential.',
    image: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=600',
    path: '/industries/fix-flip-investors'
  },
  {
    icon: Home,
    title: 'Buy & Hold Investors',
    description: 'Build your rental empire with high-ROI properties.',
    image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600',
    path: '/industries/buy-hold-investors'
  },
  {
    icon: Users,
    title: 'Real Estate Agents',
    description: 'Exclusive pocket listings and off-market opportunities.',
    image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600',
    path: '/industries/real-estate-agents'
  },
  {
    icon: Building2,
    title: 'Real estate investors (PPL)',
    description: 'Pay-per-lead program for verified, qualified prospects.',
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600',
    path: '/industries/real-estate'
  }
]

const contractorServices = [
  {
    icon: Home,
    title: 'Roofing Companies',
    description: 'Connect with homeowners ready for roof repairs and replacements.',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600',
    path: '/industries/roofing'
  },
  {
    icon: Sun,
    title: 'Solar Industry',
    description: 'Qualified appointments with property owners interested in going solar.',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=600',
    path: '/industries/solar'
  }
]

const professionalServices = [
  {
    icon: Heart,
    title: 'Medical Insurance Companies',
    description: 'High-intent leads actively seeking health coverage solutions.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
    path: '/industries/medical-insurance'
  },
  {
    icon: Car,
    title: 'Automotive Industry',
    description: 'Connect with buyers and sellers in your target market.',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
    path: '/industries/automotive'
  }
]

export default function IndustriesPage() {
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
              Industries We Serve
            </span>
            <h1 className="mt-6 font-plus-jakarta-sans text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
              Proven Systems for Growth-Driven Professionals
            </h1>
            <p className="mt-6 font-inter text-base text-slate-200/80 sm:text-lg">
              Our battle-tested methodology for building predictable pipelines delivers results across a wide range of industries. Find your niche and discover how we can build a custom outreach engine for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Real Estate Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#1A1F3B] to-slate-900 py-28">
        <div className="absolute inset-0">
          <div className="absolute left-[10%] top-0 h-96 w-96 rounded-full bg-action-blue/20 blur-3xl" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
              <Home className="h-8 w-8 text-action-blue" />
            </div>
            <h2 className="mt-6 font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-5xl">
              The Engine for Real Estate Investors
            </h2>
            <p className="mt-4 font-inter text-base text-slate-200/80">
              Our core expertise. We speak your language because we come from your world. Whether you're wholesaling for quick cash, flipping for maximum profit, or building a rental empire, our systems are designed to find you the off-market deals that fuel your growth.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {realEstateNiches.map((niche, index) => {
              const Icon = niche.icon
              return (
                <motion.article
                  key={index}
                  variants={fadeInUp}
                  whileHover={hoverLift}
                  className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl transition"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={niche.image}
                      alt={`${niche.title} - ${niche.description}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101633] via-[#101633]/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl">
                          <Icon className="h-5 w-5 text-action-blue" />
                        </div>
                        <h3 className="font-plus-jakarta-sans text-lg font-semibold text-white">
                          {niche.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-inter text-sm text-slate-200/80 mb-4">
                      {niche.description}
                    </p>
                    <motion.div whileHover={buttonHover}>
                      <Button
                        onClick={() => window.location.href = niche.path}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 font-inter text-sm font-semibold text-slate-100 transition hover:bg-white/20"
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

      {/* Contractors Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1F3B] via-[#101633] to-deep-purple py-28">
        <div className="absolute inset-0">
          <div className="absolute right-[15%] bottom-0 h-[30rem] w-[30rem] rounded-full bg-energetic-pink/20 blur-[180px]" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
              <Hammer className="h-8 w-8 text-energetic-pink" />
            </div>
            <h2 className="mt-6 font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-5xl">
              Filling the Job Queue for Contractors
            </h2>
            <p className="mt-4 font-inter text-base text-slate-200/80">
              A crew that isn't working is a crew that's costing you money. We keep your teams booked and busy by delivering a consistent flow of qualified, high-intent appointments with property owners who are ready to act now.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2"
          >
            {contractorServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.article
                  key={index}
                  variants={fadeInUp}
                  whileHover={hoverLift}
                  className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl transition"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} - ${service.description}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101633] via-[#101633]/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl">
                          <Icon className="h-5 w-5 text-energetic-pink" />
                        </div>
                        <h3 className="font-plus-jakarta-sans text-xl font-semibold text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-inter text-sm text-slate-200/80 mb-4">
                      {service.description}
                    </p>
                    <motion.div whileHover={buttonHover}>
                      <Button
                        onClick={() => window.location.href = service.path}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 font-inter text-sm font-semibold text-slate-100 transition hover:bg-white/20"
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

      {/* Professional Services Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#101633] to-slate-900 py-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 bottom-[-7rem] h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-vibrant-green/20 blur-[150px]" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
              <Zap className="h-8 w-8 text-vibrant-green" />
            </div>
            <h2 className="mt-6 font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-5xl">
              High-Intent Leads for Professional Services
            </h2>
            <p className="mt-4 font-inter text-base text-slate-200/80">
              We adapt our real estate-inspired outreach system to find clients and prospects who are actively seeking your services. We filter for intent, ensuring your team spends less time chasing and more time closing.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2"
          >
            {professionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.article
                  key={index}
                  variants={fadeInUp}
                  whileHover={hoverLift}
                  className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl transition"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} - ${service.description}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101633] via-[#101633]/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl">
                          <Icon className="h-5 w-5 text-vibrant-green" />
                        </div>
                        <h3 className="font-plus-jakarta-sans text-xl font-semibold text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-inter text-sm text-slate-200/80 mb-4">
                      {service.description}
                    </p>
                    <motion.div whileHover={buttonHover}>
                      <Button
                        onClick={() => window.location.href = service.path}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 font-inter text-sm font-semibold text-slate-100 transition hover:bg-white/20"
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
              Don't See Your Industry? Let's Talk.
            </h2>
            <p className="mt-6 font-inter text-lg text-white/90">
              Our systems are adaptable to any business model. Book a free consultation and we'll create a custom outreach strategy tailored to your exact needs.
            </p>
            <motion.div whileHover={buttonHover} className="mt-10">
              <Button
                size="lg"
                className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-inter text-base font-semibold text-action-blue shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition-all hover:bg-white/90"
                onClick={() => window.location.href = '/contact'}
              >
                Book Your Free Consultation
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
