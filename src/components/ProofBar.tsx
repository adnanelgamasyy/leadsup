"use client"

import { useEffect, useRef, useState } from 'react'
import { Users, Phone, TrendingUp, Award } from 'lucide-react'

export default function ProofBar() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    { number: "10M", suffix: "+", label: "Calls made by our team", icon: Phone },
    { number: "500K", suffix: "+", label: "Leads generated", icon: TrendingUp },
    { number: "120", suffix: "+", label: "Active investors", icon: Users },
    { number: "7", suffix: "+", label: "Years experience", icon: Award }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
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
    <section ref={sectionRef} className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-bold text-primary-orange uppercase tracking-wide mb-3">Proven Track Record</p>
          <h2 className="text-3xl sm:text-4xl font-black text-charcoal max-w-3xl mx-auto leading-tight">
            Real results from real estate professionals
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex flex-col items-center">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl mb-3 flex items-center justify-center ${
                  index % 2 === 0 ? 'bg-primary-orange/10' : 'bg-charcoal/10'
                }`}>
                  <stat.icon className={`h-6 w-6 ${
                    index % 2 === 0 ? 'text-primary-orange' : 'text-charcoal'
                  }`} />
                </div>
                
                {/* Number */}
                <div className={`text-4xl lg:text-5xl font-black mb-2 transition-all duration-500 ${
                  index % 2 === 0 ? 'text-primary-orange' : 'text-charcoal'
                } group-hover:scale-110`}>
                  {isVisible ? stat.number + stat.suffix : '0'}
                </div>
                
                {/* Label */}
                <div className="text-sm text-gray-600 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}