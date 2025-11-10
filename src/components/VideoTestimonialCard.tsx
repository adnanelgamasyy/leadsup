"use client"

import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { motion } from 'framer-motion'

interface VideoTestimonialCardProps {
  videoUrl: string
  posterUrl: string
  title: string
  clientName: string
  autoStop?: boolean
}

export default function VideoTestimonialCard({
  videoUrl,
  posterUrl,
  title,
  clientName,
  autoStop = false
}: VideoTestimonialCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video || !autoStop) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [autoStop])

  const handleClick = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      video.controls = true
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  // Expose pause method for external control (carousel slide change)
  useEffect(() => {
    if (containerRef.current) {
      (containerRef.current as any).pauseVideo = () => {
        const video = videoRef.current
        if (video && !video.paused) {
          video.pause()
          setIsPlaying(false)
        }
      }
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className={`video-testimonial-card relative overflow-hidden rounded-2xl bg-slate-900/50 border border-white/10 shadow-[0_20px_70px_rgba(8,12,28,0.4)] backdrop-blur-sm transition-all duration-300 ${
        isPlaying ? 'is-playing' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Video Container */}
      <div className="relative aspect-video w-full cursor-pointer" onClick={handleClick}>
        <video
          ref={videoRef}
          className="testimonial-video h-full w-full object-cover"
          poster={posterUrl}
          preload="none"
          playsInline
          muted
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button Overlay */}
        <div
          className={`play-overlay absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
            isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <motion.div
            className="flex h-20 w-20 items-center justify-center rounded-full bg-action-blue shadow-[0_0_40px_rgba(37,99,235,0.6)]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="h-8 w-8 fill-white text-white ml-1" />
          </motion.div>
        </div>
      </div>

      {/* Video Info */}
      <div className="p-6">
        <h3 className="font-plus-jakarta-sans text-lg font-bold text-slate-50 leading-snug mb-2">
          {title}
        </h3>
        <p className="font-inter text-sm text-slate-300/80">
          {clientName}
        </p>
      </div>
    </motion.div>
  )
}
