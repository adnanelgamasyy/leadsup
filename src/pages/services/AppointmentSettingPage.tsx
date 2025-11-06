import { Calendar, CheckCircle2, Phone, Zap, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInStagger, hoverLift, viewportOnce, buttonHover, iconHover } from '@/lib/motion'

const features = [
  {
    icon: CheckCircle2,
    title: "Eliminate No-Shows for Good.",
    headline: "The Two-Step Confirmation System",
    description: "Every appointment goes through a double confirmation process—one automated confirmation at booking, and a second, personal follow-up call before the meeting. This extra step drastically reduces no-shows, ensuring your time is spent only with people who are serious."
  },
  {
    icon: Zap,
    title: "Strike While the Iron is Hottest.",
    headline: "Real-Time Live Transfers",
    description: "When a lead is hot, motivated, and ready to connect right now, our team transfers them to you or your sales team instantly—no delays, no waiting. You get qualified conversations in real-time, helping your closers engage while interest is at its absolute peak."
  }
]

const benefits = [
  "Drastically Fewer No-Shows and less time wasted on unprepared prospects.",
  "More Real, Productive Conversations with genuinely motivated leads.",
  "A Smoother Handoff between your marketing outreach and your sales team.",
  "Higher Close Rates by engaging prospects in real-time at the peak of their interest."
]

export default function AppointmentSettingPage() {
  return (
    <div className="min-h-screen">
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-[#0a0f24] to-slate-900 pt-32 pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[5%] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-bright-amber/25 blur-3xl" />
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
                <Calendar className="h-4 w-4" />
                Appointment Setting
              </div>

              <h1 className="font-plus-jakarta-sans text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
                High-Intent Appointment Setting.{' '}
                <span className="bg-gradient-to-r from-bright-amber to-action-blue bg-clip-text text-transparent">
                  Booked. Confirmed. Connected. Closed.
                </span>
              </h1>

              <p className="font-inter text-lg leading-relaxed text-slate-200/80">
                At LeadsUp, appointment setting isn't just about booking calls—it's about creating reliable, high-intent meetings with prospects who actually show up and are ready to talk business.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.div whileHover={buttonHover}>
                  <Button
                    size="lg"
                    className="flex items-center gap-2 rounded-xl bg-bright-amber px-8 py-4 font-inter text-base font-semibold text-white shadow-[0_30px_80px_rgba(249,168,37,0.5)] transition-all hover:bg-bright-amber/90"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Fill Your Calendar Now
                    <motion.span whileHover={iconHover}>
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 shadow-[0_40px_120px_rgba(249,168,37,0.25)] backdrop-blur-2xl">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Appointment setting and calendar management"
                  className="w-full rounded-2xl object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              We Don't Just Schedule—{' '}
              <span className="bg-gradient-to-r from-bright-amber to-action-blue bg-clip-text text-transparent">
                We Engineer Opportunities
              </span>
            </h2>
            <p className="mt-6 font-inter text-lg text-slate-200/80">
              We don't stop at simply finding a time slot. We've built two powerful, proprietary systems that make our process stand out and dramatically increase your closing rate.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-20 grid gap-8 lg:grid-cols-2"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.article
                  key={index}
                  variants={fadeInUp}
                  whileHover={hoverLift}
                  className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl md:p-10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-bright-amber/20 backdrop-blur-xl">
                      <Icon className="h-7 w-7 text-bright-amber" />
                    </div>
                    <h3 className="font-plus-jakarta-sans text-xl font-semibold text-slate-50">
                      {feature.headline}
                    </h3>
                  </div>
                  <p className="font-inter text-lg font-semibold text-slate-100 mb-3">
                    {feature.title}
                  </p>
                  <p className="font-inter text-base leading-relaxed text-slate-200/80">
                    {feature.description}
                  </p>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1F3B] via-[#101633] to-deep-purple py-28">
        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-4xl"
          >
            <div className="text-center">
              <h2 className="font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-5xl">
                Because{' '}
                <span className="bg-gradient-to-r from-bright-amber to-vibrant-green bg-clip-text text-transparent">
                  Every Minute Counts
                </span>
              </h2>
              <p className="mt-6 font-inter text-lg text-slate-200/80">
                We blend human connection, verified confirmation, and an instant response system to make sure your calendar fills with serious prospects—not missed opportunities.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl md:p-12">
              <div className="grid gap-6 md:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-vibrant-green" />
                    <p className="font-inter text-base text-slate-200/80">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-bright-amber via-deep-purple to-action-blue py-28">
        <div className="page-shell relative mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="font-plus-jakarta-sans text-4xl font-bold text-white sm:text-5xl">
              That's the LeadsUp Promise.
            </h2>
            <p className="mt-6 font-inter text-xl text-white/90">
              Experience a smarter way to fill your pipeline—one confirmed, high-intent appointment at a time.
            </p>
            <motion.div whileHover={buttonHover} className="mt-10">
              <Button
                size="lg"
                className="flex items-center gap-2 rounded-xl bg-white px-10 py-6 font-inter text-lg font-semibold text-bright-amber shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition-all hover:bg-white/90"
                onClick={() => window.location.href = '/contact'}
              >
                Start Getting Qualified Appointments
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
