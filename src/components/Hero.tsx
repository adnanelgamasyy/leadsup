"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Star } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative pt-24 pb-12 overflow-hidden opacity-0 transition-all duration-700 bg-gradient-to-b from-orange-50/30 via-white to-white">
      {/* Background Image with low opacity */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=1600)'
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary-orange rounded-full" />
                <span className="text-xs font-semibold text-primary-orange uppercase tracking-wide">Trusted by Real Estate Investors</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-[1.1] text-charcoal">
                Your reliable<br />calling partner<br />for <span className="text-primary-orange">pipeline<br />results</span>
              </h1>
              
              <p className="text-base text-body-text mb-6 leading-relaxed max-w-xl">
                Elite, pre-trained cold callers and hyper-targeted data to fill your pipeline with motivated sellers. Stop prospecting. Start closing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button 
                  size="lg" 
                  className="bg-primary-orange hover:bg-primary-orange-dark text-white px-8 py-4 text-base font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <button className="px-8 py-4 text-base font-semibold text-charcoal hover:text-primary-orange transition-colors">
                  View Demo →
                </button>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <div className="text-sm text-body-text">
                  <span className="font-bold text-charcoal">4.9/5</span> from 120+ investors
                </div>
              </div>
            </div>

            {/* Right Column - Stats Card */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">Cold calling results</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-4 border border-orange-100">
                        <div className="text-4xl font-black text-primary-orange mb-1">92%</div>
                        <div className="text-xs text-gray-600 font-medium">Connection rate</div>
                      </div>
                      <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-4 border border-teal-100">
                        <div className="text-4xl font-black text-vibrant-teal mb-1">85%</div>
                        <div className="text-xs text-gray-600 font-medium">Lead quality</div>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-4 border border-orange-100">
                        <div className="text-4xl font-black text-primary-orange mb-1">3.2x</div>
                        <div className="text-xs text-gray-600 font-medium">ROI increase</div>
                      </div>
                      <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-4 border border-teal-100">
                        <div className="text-4xl font-black text-vibrant-teal mb-1">30%</div>
                        <div className="text-xs text-gray-600 font-medium">More deals</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="space-y-3">
                      {['No setup fees required', 'Cancel anytime', '24/7 support included'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}