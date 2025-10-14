"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary via-primary to-orange-500 rounded-3xl p-12 lg:p-16 text-center shadow-premium-xl overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px',
                animation: 'moveBackground 20s linear infinite'
              }} />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Stop Competing For Deals.<br />Start Owning Your Market.
              </h2>
              
              <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto">
                Your competitors are closing deals right now. Let's build a custom plan to make sure the next one is yours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-white/95 text-primary px-10 py-7 text-lg font-semibold rounded-xl shadow-premium-lg hover:shadow-premium-xl hover:scale-105 transition-all duration-300"
                >
                  Book My Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/95">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="text-sm font-medium">Free 15-minute consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="text-sm font-medium">No commitment required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}