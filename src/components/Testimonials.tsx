"use client"

import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "We closed a $35k deal in our first 45 days. The Leads Up delivered exactly what they promised. Their callers are relentless and the lead quality is excellent.",
      author: "Mark S.",
      role: "Multi-State Wholesaler, TX",
      rating: 5,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "I freed up 20 hours a week. Handing off prospecting to their team was the best decision I've made for my business. I can finally focus on growth.",
      author: "Jennifer L.",
      role: "Real Estate Investor, FL",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "The data quality and caller expertise are outstanding. We went from 5 deals a month to 12 deals consistently. Best investment we've made.",
      author: "David R.",
      role: "Fix & Flip Investor, CA",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ]

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-bold text-primary-orange uppercase tracking-wide mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-3 text-charcoal leading-tight">
            Why top investors choose The Leads Up
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-charcoal text-sm">{testimonial.author}</div>
                  <div className="text-xs text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}