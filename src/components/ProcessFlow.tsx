"use client"

import { Calendar, Users, Target, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ProcessFlow() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate steps sequentially
            [0, 1, 2].forEach((index) => {
              setTimeout(() => {
                setVisibleSteps(prev => [...prev, index])
              }, index * 200)
            })
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

  const steps = [
    {
      number: "1",
      icon: Calendar,
      title: "Book Your Strategy Call",
      description: "We'll dive deep into your target market, criteria, and goals to build a custom outreach plan.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      number: "2",
      icon: Users,
      title: "We Deploy Your A-Team",
      description: "We assign our best-fit agents and equip them with premium, multi-sourced data for your target area.",
      color: "from-primary to-orange-500",
      bgColor: "bg-orange-50",
      iconColor: "text-primary"
    },
    {
      number: "3",
      icon: Target,
      title: "Receive Qualified Leads",
      description: "Motivated sellers are transferred live or booked directly into your calendar. You just show up and make offers.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    }
  ]

  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-bold text-primary-orange uppercase tracking-wide mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-3 text-charcoal leading-tight">
            Go from consultation to qualified leads in <span className="text-primary-orange">72 hours</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Getting started is simple, fast, and designed to get you results immediately
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative transition-all duration-700 ${
                  visibleSteps.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border-2 border-orange-100 shadow-lg hover:shadow-xl hover:border-primary-orange hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative z-10">
                    {/* Step Number Badge */}
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-orange to-orange-600 rounded-xl text-white text-2xl font-black mb-6 shadow-lg">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                      <step.icon className="h-6 w-6 text-primary-orange" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-charcoal">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 z-10 items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-primary-orange">
                      <ArrowRight className="h-4 w-4 text-primary-orange" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Button 
              size="lg"
              className="bg-primary-orange hover:bg-primary-orange-dark text-white px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <p className="text-sm text-gray-600 mt-4 font-medium">
              Free consultation • No commitment required • Fast setup
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}