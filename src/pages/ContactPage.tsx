import { Mail, Phone, MapPin } from 'lucide-react'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInStagger, viewportOnce } from '@/lib/motion'
import ContactForm from '@/components/forms/ContactForm'

export default function ContactPage() {
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
              Get In Touch
            </span>
            <h1 className="mt-6 font-plus-jakarta-sans text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
              Let's Build Your Growth Roadmap
            </h1>
            <p className="mt-6 font-inter text-base text-slate-200/80 sm:text-lg">
              The first step is a free, no-obligation strategy call. We'll discuss your goals, map out your milestones, and deliver a complimentary market research report. No pressure. No fluff. Just a clear, actionable plan to move your business forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#1A1F3B] to-slate-900 py-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-action-blue/15 blur-3xl" />
          <div className="absolute left-1/2 bottom-[-7rem] h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-vibrant-green/20 blur-[150px]" />
        </div>

        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-12 lg:grid-cols-2"
          >
            {/* Left Side: Discovery Call & Calendar */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div>
                <h2 className="font-plus-jakarta-sans text-3xl font-bold text-slate-50">
                  Book Your Free Discovery Call
                </h2>
                <p className="mt-4 font-inter text-base text-slate-200/80">
                  Select a time that works for you below. We look forward to connecting.
                </p>
              </div>

              {/* Calendly Embed */}
              <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
                <div className="h-[600px]">
                  <iframe
                    src="https://cal.com/leadsup/strategy-call"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Book a Strategy Call"
                    className="rounded-3xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Side: Direct Contact & Form */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div>
                <h2 className="font-plus-jakarta-sans text-3xl font-bold text-slate-50">
                  Send Us a Message
                </h2>
                <p className="mt-4 font-inter text-base text-slate-200/80">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
                <ContactForm />

                {/* Direct Contact Info */}
                <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl">
                      <Mail className="h-5 w-5 text-action-blue" />
                    </div>
                    <div>
                      <p className="font-inter text-xs uppercase tracking-[0.2em] text-slate-200/70">Email</p>
                      <a href="mailto:info@theleadsup.com" className="font-inter text-sm font-semibold text-slate-50 hover:text-action-blue transition">
                        info@theleadsup.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl">
                      <Phone className="h-5 w-5 text-energetic-pink" />
                    </div>
                    <div>
                      <p className="font-inter text-xs uppercase tracking-[0.2em] text-slate-200/70">Phone</p>
                      <a href="tel:+15513584982" className="font-inter text-sm font-semibold text-slate-50 hover:text-action-blue transition">
                        +1 (551) 358-4982
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl">
                      <MapPin className="h-5 w-5 text-vibrant-green" />
                    </div>
                    <div>
                      <p className="font-inter text-xs uppercase tracking-[0.2em] text-slate-200/70">Location</p>
                      <p className="font-inter text-sm text-slate-200/80">
                        Operated by Adnan Ahmed<br />
                        Registered in WY, USA<br />
                        Operating nationwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
