"use client"

import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInStagger, fadeInUp, hoverLift, viewportOnce } from '@/lib/motion'

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "We closed a $35k deal in our first 45 days. LeadsUp delivered exactly what they promised. Their callers are relentless and the lead quality is excellent.",
      author: 'Mark S.',
      role: 'Multi-state wholesaler, TX',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      quote:
        "I freed up 20 hours a week. Handing off prospecting to their team was the best decision I've made for my business. I can finally focus on growth.",
      author: 'Jennifer L.',
      role: 'Real estate investor, FL',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      quote:
        "The data quality and caller expertise are outstanding. We went from 5 deals a month to 12 deals consistently. Best investment we've made.",
      author: 'David R.',
      role: 'Fix & flip investor, CA',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ]

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-br from-[#050a1f] via-[#0c1535] to-[#060a1f] py-28"
    >
      <div className="absolute inset-0">
        <div className="absolute left-[12%] top-[-6rem] h-[24rem] w-[24rem] rounded-full bg-action-blue/20 blur-[150px]" />
        <div className="absolute right-[8%] top-[30%] h-[22rem] w-[22rem] rounded-full bg-energetic-pink/18 blur-[150px]" />
        <div className="absolute left-1/2 bottom-[-7rem] h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-vibrant-green/12 blur-[140px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
            Testimonials
          </span>
          <h2 className="mt-6 font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-5xl">
            Why top investors choose LeadsUp
          </h2>
          <p className="mt-4 font-inter text-base text-slate-200/80">
            Proof from operators who trust us to keep their deal flow surging month after month.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInStagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.author}
              variants={fadeInUp}
              whileHover={hoverLift}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-8 shadow-[0_30px_90px_rgba(8,12,28,0.45)] backdrop-blur-2xl"
            >
              <div className="absolute inset-x-6 top-6 h-20 rounded-full bg-gradient-to-r from-action-blue/25 via-transparent to-bright-amber/25 blur-3xl" />

              <div className="relative mb-6 flex items-center gap-2">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-bright-amber text-bright-amber drop-shadow-[0_0_12px_rgba(249,168,37,0.55)]" />
                ))}
              </div>

              <p className="relative font-inter text-sm text-slate-200/85 leading-relaxed">
                “{testimonial.quote}”
              </p>

              <div className="relative mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-11 w-11 rounded-full border-2 border-white/20 object-cover shadow-[0_12px_30px_rgba(6,9,25,0.45)]"
                />
                <div>
                  <p className="font-plus-jakarta-sans text-sm font-semibold text-slate-50">{testimonial.author}</p>
                  <p className="font-inter text-xs text-slate-200/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}