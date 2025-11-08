"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { motion } from 'framer-motion'
import { buttonHover, fadeInUp, viewportOnce } from '@/lib/motion'
import CustomPackageForm from './forms/CustomPackageForm'

const callerOptions = ['1', '2', '3', '4', '5+']
const managerOptions = ['0', '1', '2', '3+']

export default function CustomizationSection() {
  const [callers, setCallers] = useState(callerOptions[0])
  const [managers, setManagers] = useState(managerOptions[0])
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleOpenForm = () => {
    setIsDialogOpen(true)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#040b1d] via-[#0a1431] to-[#040918] py-28">
      <div className="absolute inset-0">
        <div className="absolute left-[12%] top-[-6rem] h-[24rem] w-[24rem] rounded-full bg-action-blue/18 blur-[160px]" />
        <div className="absolute right-[10%] top-[30%] h-[24rem] w-[24rem] rounded-full bg-energetic-pink/18 blur-[150px]" />
        <div className="absolute left-1/2 bottom-[-8rem] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-vibrant-green/12 blur-[150px]" />
      </div>

      <div className="page-shell relative mx-auto max-w-[1100px]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="rounded-[32px] border border-white/15 bg-white/7 p-10 shadow-[0_40px_120px_rgba(6,10,28,0.6)] backdrop-blur-3xl sm:p-14"
        >
          <div className="space-y-6 text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
              Custom packages
            </span>
            <h2 className="font-plus-jakarta-sans text-4xl font-bold text-slate-50">
              Need an enterprise-level solution?
            </h2>
            <p className="max-w-3xl font-inter text-base text-slate-200/80">
              We design multi-seat, high-volume pods tailored to aggressive acquisition goals. Tell us what your ideal outbound engine looks like and we’ll build it.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="font-inter text-xs uppercase tracking-[0.3em] text-slate-200/70">
                Number of cold callers
              </span>
              <select
                value={callers}
                onChange={(event) => setCallers(event.target.value)}
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 font-inter text-sm text-slate-100 shadow-[0_15px_40px_rgba(8,12,30,0.35)] backdrop-blur-xl focus:border-action-blue focus:outline-none"
              >
                {callerOptions.map((option) => (
                  <option key={option} value={option} className="bg-[#0b1534] text-slate-100">
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2">
              <span className="font-inter text-xs uppercase tracking-[0.3em] text-slate-200/70">
                Number of acquisition managers
              </span>
              <select
                value={managers}
                onChange={(event) => setManagers(event.target.value)}
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 font-inter text-sm text-slate-100 shadow-[0_15px_40px_rgba(8,12,30,0.35)] backdrop-blur-xl focus:border-action-blue focus:outline-none"
              >
                {managerOptions.map((option) => (
                  <option key={option} value={option} className="bg-[#0b1534] text-slate-100">
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <motion.div className="mt-10" variants={fadeInUp}>
            <motion.div whileHover={buttonHover}>
              <Button
                size="lg"
                onClick={handleOpenForm}
                className="flex items-center justify-center gap-3 rounded-2xl bg-action-blue px-8 py-5 font-inter text-base font-semibold text-white shadow-[0_30px_90px_rgba(61,130,247,0.5)] transition hover:bg-action-blue/90"
              >
                Launch my outbound engine
              </Button>
            </motion.div>
            <p className="mt-3 font-inter text-xs text-slate-200/60">
              Your selections will pre-fill the form. Submit to get a custom recommendation within 24 hours.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Package Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-deep-purple via-[#101633] to-slate-900 border-white/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-plus-jakarta-sans font-bold text-slate-50">
              Custom Enterprise Package
            </DialogTitle>
            <DialogDescription className="text-slate-200/80 font-inter">
              Complete the form below to get a custom quote for your enterprise needs. Your selections have been pre-filled.
            </DialogDescription>
          </DialogHeader>
          <CustomPackageForm callers={callers} managers={managers} />
        </DialogContent>
      </Dialog>
    </section>
  )
}
