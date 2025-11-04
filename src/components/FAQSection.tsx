"use client"

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { fadeInUp, viewportOnce } from '@/lib/motion'

const faqs = [
  {
    question: 'What kind of results can I expect in the first 30 days?',
    answer:
      'Every engagement starts with a 30-day performance guarantee. By week four you’ll see qualified conversations flowing through live transfers and calendar bookings, backed by QA reports and call summaries.'
  },
  {
    question: 'How quickly can we launch after the strategy call?',
    answer:
      'Most partners go live within 72 hours. We match you with elite callers, finalize scripts, enrich your target lists, and configure routing so your phone starts ringing without delay.'
  },
  {
    question: 'Do you provide the data, or do I have to supply lists?',
    answer:
      'Momentum and Prime plans include monthly data pulling and skip tracing. Drive partners can bring their own lists or bolt on our precision life-event data to upgrade their targeting.'
  },
  {
    question: 'How does quality control work on the calls?',
    answer:
      'Every conversation is monitored by a QA lead. We score adherence, tone, and conversion outcomes, then coach callers weekly. You’ll receive scorecards and recorded highlights inside your dashboard.'
  },
  {
    question: 'Can you integrate with my CRM and existing workflows?',
    answer:
      'Yes. We routinely connect to Salesforce, InvestorFuse, Podio, HubSpot, Follow Up Boss, and custom stacks. Our team handles routing rules, automations, and reporting so leads land exactly where you need them.'
  }
]

export default function FAQSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#040818] via-[#0b1331] to-[#050913] py-28">
      <div className="absolute inset-0">
        <div className="absolute left-[12%] top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-action-blue/20 blur-[160px]" />
        <div className="absolute right-[10%] top-[30%] h-[24rem] w-[24rem] rounded-full bg-energetic-pink/18 blur-[150px]" />
        <div className="absolute left-1/2 bottom-[-8rem] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-vibrant-green/12 blur-[150px]" />
      </div>

      <div className="page-shell relative mx-auto max-w-[900px]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
            FAQ
          </span>
          <h2 className="mt-6 font-plus-jakarta-sans text-4xl font-bold text-slate-50">
            Your questions, answered
          </h2>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(8,12,28,0.55)] backdrop-blur-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="rounded-2xl border border-white/10 bg-white/5 px-4"
              >
                <AccordionTrigger className="text-left text-slate-50 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-200/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
