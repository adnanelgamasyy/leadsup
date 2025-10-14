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
      <section className="py-20 bg-background" ref={sectionRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6">
              <span className="text-sm font-semibold text-red-600">THE BOTTLENECK</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              Why Most Real Estate Businesses Hit a Wall
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className={`bg-card rounded-2xl p-8 border border-border shadow-premium hover:shadow-premium-lg hover:-translate-y-2 transition-all duration-500 ${
                  visibleCards[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                  <problem.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-premium-xl hover:shadow-premium-xl hover:-translate-y-2 transition-all duration-500">
                  <img 
                    src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Professional team collaboration"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <span className="text-sm font-semibold text-primary">THE SOLUTION</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                  Plug Our Acquisitions Engine Into Your Business
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We handle the entire top-of-funnel process, from data mining to first contact. This frees you to focus on high-value tasks like negotiation and closing deals. We are an extension of your team, dedicated to your growth.
                </p>

                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-foreground font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  See How It Works
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}