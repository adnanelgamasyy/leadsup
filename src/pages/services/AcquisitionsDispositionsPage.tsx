import { Users, Home, Handshake, FileCheck, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInStagger, hoverLift, viewportOnce, buttonHover, iconHover } from '@/lib/motion'
import AcquisitionsDispositionsForm from '@/components/forms/AcquisitionsDispositionsForm'

export default function AcquisitionsDispositionsPage() {
  return (
    <div className="min-h-screen">
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#0a0f24] to-slate-900 pt-32 pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[5%] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-energetic-pink/25 blur-3xl" />
          <div className="absolute right-[5%] top-[20%] h-[25rem] w-[25rem] rounded-full bg-action-blue/20 blur-[150px]" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInStagger}
            initial="hidden"
            animate="show"
            className="grid items-center gap-12 lg:grid-cols-2"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100 backdrop-blur-md">
                <Users className="h-4 w-4" />
                Acquisitions & Dispositions
              </div>

              <h1 className="font-plus-jakarta-sans text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
                An Entire Department{' '}
                <span className="bg-gradient-to-r from-energetic-pink to-action-blue bg-clip-text text-transparent">
                  Dedicated to Your Deal Flow
                </span>
              </h1>

              <p className="font-inter text-lg leading-relaxed text-slate-200/80">
                We know that acquisitions and dispositions are the heartbeat of every successful investment business. That's why we built a department dedicated entirely to it, staffed with experienced Acquisition Managers who find, negotiate, and close deals for you.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.div whileHover={buttonHover}>
                  <Button
                    size="lg"
                    className="flex items-center gap-2 rounded-xl bg-energetic-pink px-8 py-4 font-inter text-base font-semibold text-white shadow-[0_30px_80px_rgba(240,55,104,0.5)] transition-all hover:bg-energetic-pink/90"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Talk With an Acquisition Expert
                    <motion.span whileHover={iconHover}>
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 shadow-[0_40px_120px_rgba(240,55,104,0.25)] backdrop-blur-2xl">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Real estate acquisitions and dispositions team managing deal flow for investors"
                  className="w-full rounded-2xl object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* A-to-Z Support Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#1A1F3B] to-slate-900 py-28">
        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-5xl">
              From First Call to Final Key—{' '}
              <span className="bg-gradient-to-r from-energetic-pink to-vibrant-green bg-clip-text text-transparent">
                We Handle It All
              </span>
            </h2>
            <p className="mt-6 font-inter text-lg text-slate-200/80">
              This is our most comprehensive, hands-on service. We don't just find opportunities—we partner with you to secure them and resell them for maximum profit.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-20 grid gap-8 lg:grid-cols-2"
          >
            {/* Acquisition Support */}
            <motion.article
              variants={fadeInUp}
              whileHover={hoverLift}
              className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl md:p-10"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-energetic-pink/20 backdrop-blur-xl">
                  <Home className="h-7 w-7 text-energetic-pink" />
                </div>
                <h3 className="font-plus-jakarta-sans text-2xl font-semibold text-slate-50">
                  Our Acquisition Support Includes...
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-energetic-pink" />
                  <p className="font-inter text-base text-slate-200/80">
                    <strong className="text-slate-50">Dedicated Acquisition Managers:</strong> Real experts who know how to talk numbers, build rapport, and turn motivated leads into profitable contracts.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-energetic-pink" />
                  <p className="font-inter text-base text-slate-200/80">
                    <strong className="text-slate-50">Tailored Lead Flow:</strong> Your acquisitions team receives leads pre-qualified through our market research and motivation analysis.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-energetic-pink" />
                  <p className="font-inter text-base text-slate-200/80">
                    <strong className="text-slate-50">Full Pipeline Management:</strong> From first contact to signed contract, we handle every step with precision and transparency.
                  </p>
                </li>
              </ul>
            </motion.article>

            {/* Disposition Support */}
            <motion.article
              variants={fadeInUp}
              whileHover={hoverLift}
              className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl md:p-10"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-action-blue/20 backdrop-blur-xl">
                  <Handshake className="h-7 w-7 text-action-blue" />
                </div>
                <h3 className="font-plus-jakarta-sans text-2xl font-semibold text-slate-50">
                  Our Disposition Support Includes...
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-action-blue" />
                  <p className="font-inter text-base text-slate-200/80">
                    <strong className="text-slate-50">Cash Buyer Network Outreach:</strong> We connect your deals to our growing, private network of verified cash buyers and investors.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-action-blue" />
                  <p className="font-inter text-base text-slate-200/80">
                    <strong className="text-slate-50">Deal Marketing Assistance:</strong> We help you structure and position your property for a faster resale at a better margin.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-action-blue" />
                  <p className="font-inter text-base text-slate-200/80">
                    <strong className="text-slate-50">Transaction Coordination:</strong> We ensure communication between sellers, buyers, and title companies is smooth and error-free.
                  </p>
                </li>
              </ul>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1F3B] via-[#101633] to-deep-purple py-28">
        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-5xl">
              More Conversations. More Contracts.{' '}
              <span className="bg-gradient-to-r from-vibrant-green to-bright-amber bg-clip-text text-transparent">
                More Closings.
              </span>
            </h2>
            <p className="mt-6 font-inter text-lg text-slate-200/80">
              Because our system covers every single stage of the deal. With trained acquisition managers, data-backed targeting, and proven negotiation frameworks, you gain an entire expert department dedicated to building and closing your deal flow, without the massive overhead.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Acquisitions & Dispositions Form Section */}
      <section id="acquisitions-dispositions-form" className="relative overflow-hidden bg-gradient-to-br from-[#060c24] via-[#0d1533] to-[#050815] py-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-energetic-pink/15 blur-[170px]" />
          <div className="absolute right-[5%] top-[25%] h-[24rem] w-[24rem] rounded-full bg-action-blue/20 blur-[150px]" />
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
              <Users className="h-4 w-4" />
              Request Your Acquisition Team
            </span>
            <h2 className="mt-6 font-plus-jakarta-sans text-4xl lg:text-5xl font-bold text-slate-50">
              Build Your Dedicated Deal Flow Department
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-inter text-lg text-slate-200/80">
              Tell us about your business and we'll put together a custom acquisition and disposition strategy tailored to your goals.
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
            <div className="absolute inset-0 bg-gradient-to-br from-energetic-pink/5 via-transparent to-action-blue/5 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-energetic-pink/40 to-transparent" />

            <div className="relative z-10">
              <AcquisitionsDispositionsForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-energetic-pink via-deep-purple to-action-blue py-28">
        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="font-plus-jakarta-sans text-4xl font-bold text-white sm:text-5xl">
              Ready to Outsource Your Deal Flow and Scale Faster?
            </h2>
            <p className="mt-6 font-inter text-xl text-white/90">
              Whether you're scaling your acquisitions or maximizing your dispositions, LeadsUp has the team, tools, and tactics to make it happen.
            </p>
            <motion.div whileHover={buttonHover} className="mt-10">
              <Button
                size="lg"
                className="flex items-center gap-2 rounded-xl bg-white px-10 py-6 font-inter text-lg font-semibold text-energetic-pink shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition-all hover:bg-white/90"
                onClick={() => window.location.href = '/contact'}
              >
                Book a Call With Our Acquisitions Team
                <motion.span whileHover={iconHover}>
                  <ArrowRight className="h-6 w-6" />
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
