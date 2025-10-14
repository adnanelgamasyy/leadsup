"use client"

import { Play, Volume2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AudioSamples() {
  const samples = [
    { title: "Live Call Example 1: Identifying Motivation", duration: "2:34" },
    { title: "Live Call Example 2: Handling Objections", duration: "3:12" },
    { title: "Live Call Example 3: Setting an Appointment", duration: "2:48" }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Volume2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">AUDIO PROOF</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              The Difference Between a "No" and a Signed Contract
            </h2>
            <p className="text-xl text-muted-foreground">
              The quality of the first conversation is everything. Don't settle for robotic scripts. Listen to our agents navigate real calls and turn cold outreach into warm opportunities.
            </p>
          </div>

          <div className="space-y-4">
            {samples.map((sample, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <Button
                    size="icon"
                    className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg group-hover:scale-110 transition-transform"
                  >
                    <Play className="h-6 w-6 ml-0.5" fill="white" />
                  </Button>
                  
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-1">{sample.title}</h4>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-2 bg-accent rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-orange-500 rounded-full transition-all duration-300" style={{ width: '0%' }} />
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{sample.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}