"use client"

import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '@/lib/motion'
import VideoTestimonialCard from './VideoTestimonialCard'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const videoTestimonials = [
  {
    id: 'nick-testimonial',
    videoUrl: 'https://media.leadsupcallcenter.com/video%20testimonail%20(1).mp4',
    posterUrl: 'https://media.leadsupcallcenter.com/testimonial-nick.jpg',
    title: 'Two Deals Closed & The Service Paid for Itself... in My First Month.',
    clientName: 'Nick, Real Estate Investor'
  }
  // Add more testimonials here as they become available
]

export default function VideoTestimonialsSection() {
  const swiperRef = useRef<SwiperType | null>(null)
  const slidesRef = useRef<(HTMLDivElement | null)[]>([])

  const handleSlideChange = (swiper: SwiperType) => {
    // Pause all videos when slide changes
    slidesRef.current.forEach((slide) => {
      if (slide && (slide as any).pauseVideo) {
        (slide as any).pauseVideo()
      }
    })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050a1f] via-[#0c1535] to-[#060a1f] py-28">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-[15%] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-energetic-pink/15 blur-[160px]" />
        <div className="absolute right-[10%] bottom-[-6rem] h-[26rem] w-[26rem] rounded-full bg-action-blue/18 blur-[150px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
            Video Testimonials
          </span>
          <h2 className="mt-6 font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-5xl">
            The Engine in Action: Hear From the Investors We Power
          </h2>
          <p className="mt-4 font-inter text-base text-slate-200/80">
            Unfiltered conversations with real estate operators who trust LeadsUp to fuel their pipeline month after month.
          </p>
        </motion.div>

        {/* Video Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-4xl"
        >
          <div className="video-testimonials-carousel relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom'
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination-custom',
                bulletClass: 'swiper-pagination-bullet-custom',
                bulletActiveClass: 'swiper-pagination-bullet-active-custom'
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              onSlideChange={handleSlideChange}
              className="pb-16"
            >
              {videoTestimonials.map((testimonial, index) => (
                <SwiperSlide key={testimonial.id}>
                  <div ref={(el) => (slidesRef.current[index] = el)}>
                    <VideoTestimonialCard
                      videoUrl={testimonial.videoUrl}
                      posterUrl={testimonial.posterUrl}
                      title={testimonial.title}
                      clientName={testimonial.clientName}
                      autoStop={true}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <button
              className="swiper-button-prev-custom absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="swiper-button-next-custom absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Custom Pagination */}
            <div className="swiper-pagination-custom flex justify-center gap-2 mt-8"></div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-action-blue to-bright-blue px-8 py-4 font-plus-jakarta-sans text-base font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:scale-105"
          >
            See All Success Stories
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .swiper-pagination-bullet-custom {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-custom:hover {
          background: rgba(255, 255, 255, 0.5);
          transform: scale(1.2);
        }

        .swiper-pagination-bullet-active-custom {
          background: #2563eb;
          width: 28px;
          border-radius: 5px;
          box-shadow: 0 0 20px rgba(37, 99, 235, 0.6);
        }

        .swiper-button-prev-custom:disabled,
        .swiper-button-next-custom:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  )
}
