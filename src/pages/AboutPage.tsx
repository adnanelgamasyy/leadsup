import { motion } from 'framer-motion'
import { Layers, Sparkles, Target, Filter, TrendingUp } from 'lucide-react'

import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { buttonHover, fadeInStagger, fadeInUp, hoverLift, viewportOnce } from '@/lib/motion'

const philosophyPoints = [
  {
    title: 'Strategy Before Outreach. Always.',
    description:
      'We never work blindly. Every campaign begins with free, in-depth market research to ensure you are targeting the most profitable areas with the right message.',
    icon: Target
  },
  {
    title: 'Precision Over Volume.',
    description:
      'Anyone can dial a thousand numbers. We focus on dialing the right thousand numbers, targeting prospects with real intent based on life-event triggers and layered data.',
    icon: Filter
  },
  {
    title: 'Performance is the Only Metric That Matters.',
    description:
      'We are your dedicated growth partner, and we are relentlessly focused on achieving measurable success for your business. Your wins are our wins.',
    icon: TrendingUp
  }
]

const industryPartners = [
  'Real estate investors',
  'Wholesalers',
  'Brokerages & agents',
  'Solar providers',
  'Roofing companies',
  'Property management teams',
  'Insurance professionals'
]

const heroQuotes = [
  {
    label: 'Why we built LeadsUp',
    text: 'We saw too many talented investors, agents, and entrepreneurs held back by the one thing that matters most: a consistent flow of qualified opportunities.'
  },
  {
    label: 'Who is behind the playbook',
    text: 'We are a team of investors, data scientists, and outreach specialists who understand your challenges because we\'ve lived them.'
  },
  {
    label: 'How we execute flawlessly',
    text: 'Our systems are seamless, our data is obsessively verified, and our callers are trained to be extensions of your brand.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#02040d] text-slate-100">
      <EnhancedHeader />

      <main className="pt-24 sm:pt-28">
        {/* Hero */}
        <section className="relative overflow-hidden pb-36 pt-40">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-40 top-[-18rem] h-[32rem] w-[32rem] rounded-full bg-action-blue/25 blur-[210px]" />
            <div className="absolute right-[-16rem] top-[-6rem] h-[30rem] w-[30rem] rounded-full bg-energetic-pink/22 blur-[210px]" />
            <div className="absolute left-1/2 bottom-[-16rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-vibrant-green/16 blur-[220px]" />
            <div className="absolute inset-x-0 top-[48%] h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
          </div>

          <div className="relative mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid items-start gap-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
            >
              <div className="space-y-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 font-inter text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-200/70">
                  Built for modern operators
                </span>

                <div className="space-y-7">
                  <h1 className="font-plus-jakarta-sans text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-[3.9rem]">
                    Redefining Outbound Marketing. We Are Your Growth Engine.
                  </h1>
                  <p className="max-w-3xl font-inter text-lg leading-relaxed text-slate-200/85">
                    At LeadsUp, innovation meets execution. We were founded with a single, obsessive mission: to revolutionize real estate outreach and empower our partners to grow smarter, faster, and stronger.
                  </p>
                </div>

                <div className="space-y-6 font-inter text-[0.98rem] leading-relaxed text-slate-200/80">
                  <p>
                    We saw too many talented investors, agents, and entrepreneurs held back by the one thing that matters most: a consistent flow of qualified opportunities. The market is noisy, the data is messy, and reliable talent is almost impossible to find. So we built the solution we wished we had.
                  </p>
                  <p>
                    We are a team of investors, data scientists, and outreach specialists who understand your challenges because we&apos;ve lived them. We&apos;ve managed the frustrating CRMs, bought the bad lists, and hired the callers who didn&apos;t deliver. That experience is baked into our DNA. It&apos;s why our systems are seamless, our data is obsessively verified, and our callers are trained to be extensions of your brand.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    'Operator-built playbooks',
                    'Data enriched daily',
                    'Brand-true conversations'
                  ].map((badge) => (
                    <div
                      key={badge}
                      className="rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-center font-inter text-[11px] uppercase tracking-[0.35em] text-slate-200/70 shadow-[0_20px_55px_rgba(6,10,28,0.55)]"
                    >
                      {badge}
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                variants={fadeInUp}
                className="relative flex w-full flex-col gap-6 rounded-[40px] border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-[0_50px_160px_rgba(7,10,30,0.6)] backdrop-blur-[26px]"
              >
                <div className="absolute inset-0 opacity-60">
                  <div className="absolute left-[-20%] top-[-25%] h-52 w-52 rounded-full bg-action-blue/25 blur-[160px]" />
                  <div className="absolute right-[-10%] bottom-[-30%] h-56 w-56 rounded-full bg-energetic-pink/25 blur-[180px]" />
                </div>

                <div className="relative flex flex-col gap-6">
                  {heroQuotes.map((quote, index) => (
                    <motion.div
                      key={quote.label}
                      variants={fadeInUp}
                      whileHover={hoverLift}
                      className="group rounded-3xl border border-white/15 bg-white/8 px-6 py-7 transition-all duration-300 hover:border-action-blue/60 hover:bg-white/12"
                    >
                      <span className="font-plus-jakarta-sans text-xs uppercase tracking-[0.35em] text-slate-200/70">
                        {String(index + 1).padStart(2, '0')} · {quote.label}
                      </span>
                      <p className="mt-3 font-inter text-sm leading-relaxed text-slate-50">
                        {quote.text}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="relative mt-4 grid gap-3 border-t border-white/15 pt-5 text-left font-inter text-xs uppercase tracking-[0.35em] text-slate-200/70">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-action-blue" /> Campaign launch in under 72 hours
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-energetic-pink" /> QA-backed call summaries and dashboards
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-vibrant-green" /> Seamless CRM + routing integrations
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="relative overflow-hidden py-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-18rem] top-[10%] h-[32rem] w-[32rem] rounded-full bg-action-blue/18 blur-[200px]" />
            <div className="absolute right-[-10rem] bottom-[8%] h-[26rem] w-[26rem] rounded-full bg-energetic-pink/18 blur-[190px]" />
          </div>

          <div className="relative mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="space-y-14"
            >
              <div className="max-w-4xl space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-inter text-xs uppercase tracking-[0.35em] text-slate-200/70">
                  Our philosophy
                </span>
                <h2 className="font-plus-jakarta-sans text-[2.8rem] font-semibold text-slate-50">
                  Our Philosophy: Strategy, Precision, and Performance
                </h2>
                <p className="font-inter text-base text-slate-200/75">
                  We believe that lasting success is built on a foundation of smart systems, not just hard work.
                </p>
              </div>

              <motion.div
                variants={fadeInStagger}
                className="grid gap-8 lg:grid-cols-3"
              >
                {philosophyPoints.map((point, index) => (
                  <motion.article
                    key={point.title}
                    variants={fadeInUp}
                    whileHover={hoverLift}
                    className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/8 p-8 shadow-[0_45px_140px_rgba(6,10,30,0.6)] backdrop-blur-[22px]"
                  >
                    <div className="absolute inset-0 opacity-35">
                      <div className={`absolute h-44 w-44 rounded-full blur-[140px] ${index === 0 ? 'bg-action-blue/40 -left-12 -top-16' : index === 1 ? 'bg-energetic-pink/40 right-0 -top-12' : 'bg-vibrant-green/40 -right-12 bottom-0'}`} />
                    </div>
                    <div className="relative space-y-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-white/15 bg-white/12 text-action-blue">
                        <point.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-plus-jakarta-sans text-xl font-semibold text-slate-50">
                        {point.title}
                      </h3>
                      <p className="font-inter text-sm leading-relaxed text-slate-200/80">
                        {point.description}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Industries */}
        <section className="relative overflow-hidden py-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-12rem] bottom-[6%] h-[28rem] w-[28rem] rounded-full bg-energetic-pink/18 blur-[210px]" />
            <div className="absolute right-[-14rem] top-[15%] h-[30rem] w-[30rem] rounded-full bg-action-blue/18 blur-[210px]" />
          </div>

          <div className="relative mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="space-y-14"
            >
              <div className="max-w-4xl space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-inter text-xs uppercase tracking-[0.35em] text-slate-200/70">
                  Partnerships
                </span>
                <h2 className="font-plus-jakarta-sans text-[2.6rem] font-semibold text-slate-50">
                  From a Niche Solution to a Multi-Industry Powerhouse
                </h2>
                <p className="font-inter text-base text-slate-200/80">
                  While our roots are in real estate, our proven methodology for creating predictable pipelines has attracted leaders from a wide range of industries. We proudly partner with professionals across solar, roofing, property management, insurance, and brokerage sectors, helping them dominate their markets and build long-term growth engines.
                </p>
              </div>

              <motion.ul
                variants={fadeInStagger}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {industryPartners.map((industry) => (
                  <motion.li
                    key={industry}
                    variants={fadeInUp}
                    whileHover={hoverLift}
                    className="flex items-center justify-between rounded-3xl border border-white/12 bg-gradient-to-br from-white/8 via-white/6 to-transparent px-6 py-5 font-inter text-sm text-slate-200/85 shadow-[0_40px_120px_rgba(6,10,28,0.55)] backdrop-blur-[18px]"
                  >
                    <span>{industry}</span>
                    <Layers className="h-4 w-4 text-action-blue" />
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden pb-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-12rem] top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-action-blue/20 blur-[220px]" />
            <div className="absolute left-[-10rem] bottom-[-8rem] h-[26rem] w-[26rem] rounded-full bg-energetic-pink/18 blur-[210px]" />
          </div>

          <div className="relative mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-16">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="overflow-hidden rounded-[40px] border border-white/12 bg-gradient-to-br from-white/10 via-white/6 to-transparent px-10 py-16 text-center shadow-[0_55px_170px_rgba(6,10,30,0.7)] backdrop-blur-[26px]"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-white/15 bg-white/12 text-action-blue">
                <Sparkles className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-plus-jakarta-sans text-[2.4rem] font-semibold text-slate-50">
                Ready to Partner With a Team Obsessed With Your Growth?
              </h3>
              <p className="mx-auto mt-4 max-w-2xl font-inter text-base leading-relaxed text-slate-200/80">
                Let&apos;s build your outbound engine together.
              </p>
              <motion.div className="mt-8 inline-flex" whileHover={buttonHover}>
                <Button
                  asChild
                  size="lg"
                  className="rounded-2xl bg-action-blue px-12 py-5 font-inter text-base font-semibold text-white shadow-[0_35px_110px_rgba(61,130,247,0.65)] transition hover:bg-action-blue/90"
                >
                  <a href="https://cal.com/leadsup/strategy-call" target="_blank" rel="noopener noreferrer">
                    Book Your Free Strategy Call
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
