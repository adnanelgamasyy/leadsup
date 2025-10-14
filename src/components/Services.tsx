"use client"

import { Button } from '@/components/ui/button'
import { Phone, Database, Briefcase, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Phone,
      title: "Expert Cold Calling VAs",
      description: "Specialists trained in real estate conversation, objection handling, and rapport-building who act as a professional front-line for your brand.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Database,
      title: "Premium Skip Tracing & Data",
      description: "Our multi-layered process finds the most accurate phone numbers and emails, uncovering hidden opportunities your competitors miss.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Briefcase,
      title: "Full-Service Acquisition",
      description: "For a truly hands-off experience. We'll manage the entire deal lifecycle, from initial contact and negotiation to finding a cash buyer.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ]

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-bold text-primary-orange uppercase tracking-wide mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-3 text-charcoal leading-tight">
            The tools you need for market domination
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Icon Overlay */}
                <div className="absolute bottom-4 left-4">
                  <service.icon className="h-10 w-10 text-white drop-shadow-lg" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-charcoal">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                <button className="text-primary-orange hover:text-primary-orange-dark font-bold group/btn flex items-center gap-2 transition-colors">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}