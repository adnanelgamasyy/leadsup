import { Play, Pause, Volume2, SkipForward, SkipBack, Radio } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { buttonHover, fadeInStagger, fadeInUp, hoverLift, iconHover, viewportOnce } from '@/lib/motion'
import { useState, useRef, useEffect } from 'react'

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

// Interactive Audio Player Component
function AudioPlayer({ sample, isFeatured = false }: { sample: typeof samples[0]; isFeatured?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState('0:00')
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Parse duration to seconds
  const getDurationInSeconds = (duration: string) => {
    const [minutes, seconds] = duration.split(':').map(Number)
    return minutes * 60 + seconds
  }

  const totalSeconds = getDurationInSeconds(sample.duration)

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Play/pause handler
  const togglePlay = () => {
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
      let elapsed = (progress / 100) * totalSeconds

      intervalRef.current = setInterval(() => {
        elapsed += 0.1
        const newProgress = (elapsed / totalSeconds) * 100

        if (newProgress >= 100) {
          setProgress(100)
          setCurrentTime(sample.duration)
          setIsPlaying(false)
          if (intervalRef.current) clearInterval(intervalRef.current)
        } else {
          setProgress(newProgress)
          setCurrentTime(formatTime(elapsed))
        }
      }, 100)
    }
  }

  // Reset handler
  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setProgress(0)
    setCurrentTime('0:00')
    setIsPlaying(false)
  }

  // Skip forward/back
  const skip = (seconds: number) => {
    const currentSeconds = (progress / 100) * totalSeconds
    const newSeconds = Math.max(0, Math.min(totalSeconds, currentSeconds + seconds))
    setProgress((newSeconds / totalSeconds) * 100)
    setCurrentTime(formatTime(newSeconds))
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  // Waveform bars with animation
  const waveformBars = isFeatured ? 80 : 32

  return (
    <div className={`relative ${isFeatured ? 'space-y-4' : ''}`}>
      {/* Play button and waveform */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c1533]/80 p-4">
        <div className="flex items-center gap-4">
          {/* Play/Pause Button */}
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative flex ${isFeatured ? 'h-14 w-14' : 'h-12 w-12'} items-center justify-center rounded-full border border-action-blue/40 bg-action-blue text-white shadow-[0_22px_55px_rgba(61,130,247,0.5)] transition-all duration-300 hover:shadow-[0_28px_70px_rgba(61,130,247,0.7)] group`}
          >
            {/* Ripple effect */}
            {isPlaying && (
              <>
                <span className="absolute inset-0 rounded-full bg-action-blue animate-ping opacity-30" />
                <span className="absolute inset-0 rounded-full bg-action-blue animate-pulse opacity-20" />
              </>
            )}
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Pause className="h-5 w-5" fill="currentColor" />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ scale: 0, rotate: 90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Waveform with progress */}
          <div className="flex-1 space-y-2">
            <div className="relative flex h-24 items-center gap-0.5">
              {[...Array(waveformBars)].map((_, index) => {
                const barProgress = (index / waveformBars) * 100
                const isPassed = barProgress <= progress
                const height = 25 + Math.sin(index * 0.4) * 30 + Math.random() * 40

                return (
                  <motion.span
                    key={index}
                    className={`flex-1 rounded-full transition-all duration-300 ${
                      isPassed
                        ? 'bg-gradient-to-b from-action-blue via-action-blue/80 to-action-blue/40'
                        : 'bg-gradient-to-b from-slate-600/50 via-slate-700/30 to-transparent'
                    }`}
                    style={{ height: `${height}%` }}
                    animate={{
                      scaleY: isPlaying && isPassed ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: isPlaying && isPassed ? Infinity : 0,
                      delay: index * 0.02,
                    }}
                  />
                )
              })}
            </div>

            {/* Progress bar */}
            <div className="relative h-1 bg-slate-700/30 rounded-full overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-action-blue to-energetic-pink rounded-full"
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Time and controls */}
            <div className="flex items-center justify-between text-xs text-slate-200/60">
              <div className="flex items-center gap-3">
                <motion.button
                  onClick={() => skip(-10)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-action-blue transition-colors"
                >
                  <SkipBack className="w-4 h-4" />
                </motion.button>
                <span className="font-mono">{currentTime} / {sample.duration}</span>
                <motion.button
                  onClick={() => skip(10)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-action-blue transition-colors"
                >
                  <SkipForward className="w-4 h-4" />
                </motion.button>
              </div>

              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-vibrant-green"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Radio className="w-4 h-4" />
                  </motion.div>
                  <span className="text-xs font-semibold">Live playback</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {isFeatured && (
          <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-200/30">
            <span>Intro</span>
            <span>Discovery</span>
            <span>Ask</span>
            <span>Commit</span>
          </div>
        )}
      </div>
    </div>
  )
}

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
            className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-white/5 p-8 shadow-[0_35px_110px_rgba(5,8,20,0.65)] backdrop-blur-3xl relative overflow-hidden"
          >
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-action-blue/5 via-transparent to-energetic-pink/5 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-action-blue/40 to-transparent" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-inter text-sm uppercase tracking-[0.35em] text-slate-200/70">{featureSample.label}</p>
                  <h3 className="mt-2 font-plus-jakarta-sans text-3xl font-semibold text-slate-50">
                    "How we uncover timing & motivation in under 2 minutes"
                  </h3>
                </div>
              </div>

              <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={featureSample.avatar}
                      alt={featureSample.caller}
                      className="h-14 w-14 rounded-full border-2 border-white/30 object-cover shadow-lg"
                    />
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-vibrant-green border-2 border-[#0c1533] rounded-full flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </span>
                  </div>
                  <div>
                    <p className="font-plus-jakarta-sans text-base font-semibold text-slate-50">{featureSample.caller}</p>
                    <p className="font-inter text-sm text-slate-200/70">{featureSample.role}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 backdrop-blur-sm">
                  <div>
                    <p className="font-inter text-xs uppercase tracking-[0.35em] text-slate-200/60">Target seller</p>
                    <p className="font-plus-jakarta-sans text-sm font-semibold text-slate-50 mt-1">Single-family landlord • Tampa, FL</p>
                  </div>
                  <span className="rounded-full border border-vibrant-green/40 bg-vibrant-green/15 px-3 py-1.5 font-inter text-xs font-semibold text-vibrant-green backdrop-blur-sm">
                    Warm lead
                  </span>
                </div>

                {/* Interactive Audio Player */}
                <AudioPlayer sample={featureSample} isFeatured={true} />

                <div className="flex flex-wrap items-center gap-2">
                  {featureSample.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-inter text-xs font-semibold uppercase tracking-[0.25em] text-slate-200/70 backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="font-inter text-sm text-slate-200/80 leading-relaxed">
                  {featureSample.description}
                </p>

                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 text-xs text-slate-200/70 backdrop-blur-sm">
                  <span className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-action-blue" />
                    Duration {featureSample.duration}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-vibrant-green" />
                    QA certified
                  </span>
                </div>
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
            {supportingSamples.map((sample, index) => (
              <motion.article
                key={sample.title}
                variants={fadeInUp}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                className="group relative flex flex-col rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-white/5 p-6 shadow-[0_30px_90px_rgba(8,12,28,0.6)] backdrop-blur-3xl overflow-hidden"
              >
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-action-blue/5 via-transparent to-energetic-pink/5 pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-action-blue/40 to-transparent" />
                <div className="absolute inset-x-6 top-7 h-20 rounded-full bg-gradient-to-r from-action-blue/25 via-transparent to-energetic-pink/25 blur-3xl" />

                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={sample.avatar}
                        alt={sample.caller}
                        className="h-14 w-14 rounded-full border-2 border-white/30 object-cover shadow-lg"
                      />
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-vibrant-green border-2 border-[#0c1533] rounded-full flex items-center justify-center">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-plus-jakarta-sans text-base font-semibold text-slate-50">{sample.caller}</h4>
                      <p className="font-inter text-xs text-slate-200/70">{sample.role}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="font-inter text-[10px] uppercase tracking-[0.35em] text-action-blue/80">{sample.label}</span>
                    <h5 className="font-plus-jakarta-sans text-lg font-semibold text-slate-50 mt-1">
                      {sample.title}
                    </h5>
                  </div>

                  {/* Interactive Audio Player */}
                  <div className="relative">
                    <AudioPlayer sample={sample} isFeatured={false} />
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {sample.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-inter text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-200/60 backdrop-blur-sm hover:bg-white/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 font-inter text-sm text-slate-200/80 leading-relaxed">
                    {sample.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-200/60">
                    <span className="h-2 w-2 rounded-full bg-action-blue animate-pulse" />
                    <span>Live QA + AI transcript available</span>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-200/60">
                    <Volume2 className="h-4 w-4 text-action-blue" />
                    <span>High-fidelity sample pulled from real calls</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}