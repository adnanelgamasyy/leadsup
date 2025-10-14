"use client"

import { useState, useEffect, useRef } from 'react'
import { Database, TrendingDown, UserX, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProblemSolution() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger sequential fade-in
            [0, 1, 2].forEach((index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              }, index * 200) // 200ms delay between each card
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const problems = [
    {
      icon: Database,
      title: "Bad Data & Dead Ends",
      description: "You're wasting hours and money on outdated lists that lead to wrong numbers, costing you deals."
    },
    {
      icon: TrendingDown,
      title: "Inconsistent Prospecting",
      description: "The 'deal flow rollercoaster' makes growth unpredictable. One good month is followed by a dry spell."
    },
    {
      icon: UserX,
      title: "The Hiring Headache",
      description: "Finding, training, and managing reliable in-house callers is a costly, time-consuming nightmare."
    }
  ]

  const benefits = [
    "Hyper-targeted outreach",
    "Pre-trained, expert specialists",
    "Flexible scaling to match your needs"
  ]

  return (
    <>
      {/* Problem Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 via-gray-50 to-orange-50 relative overflow-hidden" ref={sectionRef}>
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-200 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-4">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <p className="text-sm font-bold text-red-600 uppercase tracking-wide">The Problem</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-3 text-charcoal leading-tight">
              Our cold calling eliminates every <span className="text-primary-orange">frustrating point</span> of outreach
            </h2>
            <p className="text-base text-gray-600">Stop wasting time on ineffective strategies that drain your resources</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-red-200 hover:-translate-y-1 transition-all duration-500 group ${
                  visibleCards[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <problem.icon className="h-8 w-8 text-white" />
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-orange rounded-full" />
                </div>

                <h3 className="text-lg font-bold mb-3 text-charcoal group-hover:text-primary-orange transition-colors">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {problem.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10">
            <p className="text-sm text-gray-600 font-medium">
              Don't let these problems hold you back. <span className="text-primary-orange font-bold">We have the solution.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-teal-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-vibrant-teal/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left - Image with overlay */}
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Professional team collaboration"
                    className="w-full h-auto"
                  />
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-black text-primary-orange">92%</div>
                          <div className="text-xs text-gray-600">Success Rate</div>
                        </div>
                        <div className="text-center border-x border-gray-200">
                          <div className="text-2xl font-black text-vibrant-teal">500+</div>
                          <div className="text-xs text-gray-600">Clients</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-black text-primary-orange">24/7</div>
                          <div className="text-xs text-gray-600">Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary-orange to-orange-600 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12">
                  <span className="text-xs font-bold">✓ Proven Results</span>
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2">
                <p className="text-sm font-bold text-primary-orange uppercase tracking-wide mb-3">The Solution</p>
                <h2 className="text-3xl sm:text-4xl font-black mb-4 text-charcoal leading-tight">
                  Believe in B2B cold calling <span className="text-primary-orange">services in action</span>
                </h2>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  We handle the entire top-of-funnel process, from data mining to first contact. This frees you to focus on high-value tasks like negotiation and closing deals.
                </p>

                {/* Benefits Grid */}
                <div className="grid gap-3 mb-6">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-orange to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="h-5 w-5 text-white" />
                        </div>
                        <p className="text-sm font-bold text-charcoal">{benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Row */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    size="lg"
                    className="bg-primary-orange hover:bg-primary-orange-dark text-white px-6 py-3 text-sm font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Get Started Now
                  </Button>
                  <button className="px-6 py-3 text-sm font-bold text-charcoal hover:text-primary-orange transition-colors border-2 border-gray-200 hover:border-primary-orange rounded-lg">
                    View Case Studies →
                  </button>
                </div>

                {/* Trust Signal */}
                <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex -space-x-2">
                    <img 
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Investor"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                    <img 
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Investor"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                    <img 
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Investor"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                    <img 
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Investor"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                  </div>
                  <span className="font-medium">Join 500+ successful investors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}