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
    <section id="process" className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-pulse-soft">
            <span className="text-sm font-semibold text-primary">HOW IT WORKS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Launch Your Lead Machine in{' '}
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">72 Hours</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple, fast, and designed to get you results immediately. Here's how we make it happen.
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
                <div className="bg-card rounded-2xl p-8 border-2 border-border shadow-premium hover:shadow-premium-xl hover:-translate-y-2 transition-all duration-300 h-full relative overflow-hidden group">
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Step Number Badge */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 z-10 items-center justify-center">
                    <div className={`w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-500 ${
                      visibleSteps.includes(index) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}>
                      <ArrowRight className="h-5 w-5 text-primary" />
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
              className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-premium-lg hover:shadow-premium-xl hover:scale-105 transition-all duration-300 group"
            >
              Start Your 72-Hour Launch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Free strategy call • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}