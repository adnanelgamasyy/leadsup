"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react'
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
    <section ref={sectionRef} className="relative pt-24 pb-12 overflow-hidden opacity-0 transition-all duration-700">
      {/* Background Image with Low Opacity */}
      <div 
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-orange-50/30 to-background" />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-5 animate-pulse-soft">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-primary">Trusted by 120+ Real Estate Investors</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-[1.1] text-foreground">
                Your On-Demand Acquisitions Team for{' '}
                <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">pipeline results</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-xl">
                We provide elite, pre-trained cold callers and hyper-targeted data to fill your pipeline with motivated sellers. Stop prospecting. Start closing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-5 text-base font-semibold rounded-xl shadow-premium-lg hover:shadow-premium-xl hover:scale-105 transition-all duration-300"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-5 text-base font-semibold rounded-xl border-2 hover:border-primary hover:text-primary transition-all duration-300"
                >
                  View Demo
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center gap-6 pt-3">
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">4.9/5</span> from 120+ investors
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">No contracts. No setup fees. Cancel anytime.</p>
            </div>

            {/* Right Column - Stats Card */}
            <div className="relative">
              <div className="bg-card rounded-2xl shadow-premium-xl p-6 border border-border hover:shadow-premium-xl hover:-translate-y-1 transition-all duration-500">
                <div className="space-y-5">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-3">Cold calling results</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-green-50 rounded-xl p-3 hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl font-bold text-green-600 mb-1">50+</div>
                        <div className="text-xs text-muted-foreground">Calls per hour</div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-3 hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl font-bold text-blue-600 mb-1">85%</div>
                        <div className="text-xs text-muted-foreground">Connection rate</div>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-3 hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl font-bold text-orange-600 mb-1">5.2%</div>
                        <div className="text-xs text-muted-foreground">Lead conversion</div>
                      </div>
                      <div className="bg-yellow-50 rounded-xl p-3 hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl font-bold text-yellow-600 mb-1">30%</div>
                        <div className="text-xs text-muted-foreground">Callback rate</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <div className="space-y-2">
                      {['No setup fees required', 'Cancel anytime', '24/7 support'].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-muted-foreground">{item}</span>
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