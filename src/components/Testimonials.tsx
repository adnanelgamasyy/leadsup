"use client"

import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "We closed a $35k deal in our first 45 days. The Leads Up delivered exactly what they promised. Their callers are relentless and the lead quality is excellent. They are a core part of our acquisitions process now.",
      author: "Mark S.",
      role: "Multi-State Wholesaler, TX",
      rating: 5,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "I freed up 20 hours a week. I was burning out trying to do everything myself. Handing off prospecting to their team was the best decision I've made for my business. I can finally focus on growth.",
      author: "Jennifer L.",
      role: "Real Estate Investor, FL",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Why Top Investors Choose The Leads Up
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 border border-border shadow-premium hover:shadow-premium-lg hover:-translate-y-2 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Quote className="h-6 w-6 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}