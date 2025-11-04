"use client"

import { Play, Volume2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { buttonHover, fadeInStagger, fadeInUp, hoverLift, iconHover, viewportOnce } from '@/lib/motion'

const samples = [
  {
    label: 'Live Call Example 1',
    title: 'Identifying Motivation',
    duration: '2:34',
    caller: 'Sarah Martinez',
    role: 'Senior Caller',
    description: 'Sarah builds instant rapport, surfaces urgency, and books a follow-up in two minutes flat.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    tags: ['Discovery', 'Rapport', 'Qualification']
  },
  {
    label: 'Live Call Example 2',
    title: 'Handling Objections',
    duration: '3:12',
    caller: 'Michael Chen',
    role: 'Lead Specialist',
    description: 'Michael juggles pricing pushback and timeline negotiations to secure a firm calendar slot.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    tags: ['Objection handling', 'Value framing', 'Appointment']
  },
  {
    label: 'Live Call Example 3',
    title: 'Setting Appointments',
    duration: '2:48',
    caller: 'Jessica Thompson',
    role: 'Closing Expert',
    description: 'Jessica creates urgency, summarizes seller pain, and confirms all stakeholders for the closing call.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    tags: ['Next steps', 'Urgency', 'Warm transfer']
  }
]

const featureSample = samples[0]
const supportingSamples = samples.slice(1)

export default function AudioSamples() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#060c24] via-[#0d1533] to-[#050815] py-28">
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-action-blue/15 blur-[170px]" />
        <div className="absolute right-[5%] top-[25%] h-[24rem] w-[24rem] rounded-full bg-energetic-pink/20 blur-[150px]" />
        <div className="absolute left-1/2 bottom-[-6rem] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-vibrant-green/12 blur-[140px]" />
      </div>

      <div className="page-shell relative mx-auto max-w-[1400px]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-16 max-w-5xl text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
            Audio proof
          </span>
          <h2 className="mt-6 font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-[2.9rem]">
            The difference between a "no" and a signed contract
          </h2>
          <p className="mt-4 max-w-3xl font-inter text-base text-slate-200/80">
            The quality of the first conversation is everything. Don’t settle for robotic scripts—listen to how real agents turn cold outreach into warm opportunities.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-200/60">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-semibold uppercase tracking-[0.25em]">
              <span className="h-2 w-2 rounded-full bg-vibrant-green" /> Live QA reviewed
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-semibold uppercase tracking-[0.25em]">
              <span className="h-2 w-2 rounded-full bg-action-blue" /> AI transcripts
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-semibold uppercase tracking-[0.25em]">
              <span className="h-2 w-2 rounded-full bg-energetic-pink" /> Seller consent secured
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInStagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
        >
          <motion.article
            variants={fadeInUp}
            className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-[0_35px_110px_rgba(5,8,20,0.55)] backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-inter text-sm uppercase tracking-[0.35em] text-slate-200/70">{featureSample.label}</p>
                <h3 className="mt-2 font-plus-jakarta-sans text-3xl font-semibold text-slate-50">
                  “How we uncover timing & motivation in under 2 minutes”
                </h3>
              </div>
              <motion.button
                whileHover={buttonHover}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-action-blue/40 bg-action-blue text-white shadow-[0_22px_55px_rgba(61,130,247,0.5)]"
                type="button"
              >
                <Play className="h-5 w-5" />
              </motion.button>
            </div>

            <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3">
                <img
                  src={featureSample.avatar}
                  alt={featureSample.caller}
                  className="h-12 w-12 rounded-full border border-white/20 object-cover"
                />
                <div>
                  <p className="font-plus-jakarta-sans text-sm font-semibold text-slate-50">{featureSample.caller}</p>
                  <p className="font-inter text-xs text-slate-200/70">{featureSample.role}</p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="font-inter text-xs uppercase tracking-[0.35em] text-slate-200/60">Target seller</p>
                  <p className="font-plus-jakarta-sans text-sm font-semibold text-slate-50">Single-family landlord • Tampa, FL</p>
                </div>
                <span className="rounded-full border border-vibrant-green/40 bg-vibrant-green/15 px-3 py-1 font-inter text-xs font-semibold text-vibrant-green">
                  Warm lead
                </span>
              </div>

              <div className="relative h-28 overflow-hidden rounded-2xl border border-white/10 bg-[#0c1533]/80 p-4">
                <div className="flex h-full items-center gap-1">
                  {[...Array(80)].map((_, index) => (
                    <span
                      key={index}
                      className="flex-1 rounded-full bg-gradient-to-b from-action-blue/50 via-action-blue/20 to-transparent"
                      style={{ height: `${25 + Math.random() * 70}%`, opacity: 0.4 + Math.random() * 0.4 }}
                    />
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between px-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-200/40">
                  <span>Intro</span>
                  <span>Discovery</span>
                  <span>Ask</span>
                  <span>Commit</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {featureSample.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-inter text-xs font-semibold uppercase tracking-[0.25em] text-slate-200/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-inter text-sm text-slate-200/80 leading-relaxed">
                {featureSample.description}
              </p>

              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-slate-200/70">
                <span>Duration {featureSample.duration}</span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-vibrant-green" /> QA certified
                </span>
              </div>
            </div>
          </motion.article>

          <motion.div
            variants={fadeInStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-1"
          >
            {supportingSamples.map((sample) => (
              <motion.article
                key={sample.title}
                variants={fadeInUp}
                whileHover={hoverLift}
                className="group relative flex flex-col rounded-3xl border border-white/15 bg-white/8 p-6 shadow-[0_30px_90px_rgba(8,12,28,0.5)] backdrop-blur-2xl"
              >
                <div className="absolute inset-x-6 top-7 h-20 rounded-full bg-gradient-to-r from-action-blue/25 via-transparent to-energetic-pink/25 blur-3xl" />

                <div className="relative mb-6 flex items-center gap-4">
                  <img
                    src={sample.avatar}
                    alt={sample.caller}
                    className="h-14 w-14 rounded-full border-2 border-white/30 object-cover shadow-[0_10px_30px_rgba(5,8,20,0.4)]"
                  />
                  <div>
                    <h4 className="font-plus-jakarta-sans text-sm font-semibold text-slate-50">{sample.caller}</h4>
                    <p className="font-inter text-xs text-slate-200/70">{sample.role}</p>
                  </div>
                </div>

                <div className="relative rounded-2xl border border-white/15 bg-white/5 p-4">
                  <div className="flex items-start gap-3">
                    <motion.button
                      whileHover={iconHover}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-action-blue/30 bg-action-blue text-white shadow-[0_18px_45px_rgba(61,130,247,0.45)]"
                      type="button"
                    >
                      <Play className="h-5 w-5" />
                    </motion.button>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-inter text-[10px] uppercase tracking-[0.35em] text-action-blue/80">{sample.label}</span>
                        <span className="font-plus-jakarta-sans text-sm font-semibold text-slate-100">
                          {sample.title}
                        </span>
                        <span className="font-inter text-xs text-slate-200/60">{sample.duration}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        {[...Array(32)].map((_, index) => (
                          <span
                            key={index}
                            className="h-10 w-1 rounded-full bg-gradient-to-b from-action-blue/40 via-action-blue/20 to-transparent"
                            style={{ opacity: 0.6 + Math.random() * 0.4 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-200/60">
                    <span className="h-2 w-2 rounded-full bg-action-blue" />
                    <span>Live QA + AI transcript available</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-slate-200/60">
                  {sample.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-4 font-inter text-sm text-slate-200/80 leading-relaxed">
                  {sample.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs text-slate-200/60">
                  <Volume2 className="h-4 w-4 text-action-blue" />
                  <span>High-fidelity sample pulled from real calls</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}