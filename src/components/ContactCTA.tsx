"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary-orange to-orange-600 rounded-3xl p-12 lg:p-16 text-center shadow-2xl overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">
                Stop competing for deals.<br />Start owning your market.
              </h2>
              
              <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto font-medium">
                Your competitors are closing deals right now. Let's build a custom plan to make sure the next one is yours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-gray-100 text-primary-orange px-10 py-7 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <p className="text-white/90 text-sm font-medium">
                ✓ Free consultation • ✓ No commitment required • ✓ Fast setup
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}