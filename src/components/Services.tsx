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
    <section id="services" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            The Tools You Need for Market Domination
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-premium hover:shadow-premium-xl hover:-translate-y-2 transition-all duration-300 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary hover:bg-primary/10 font-semibold group/btn p-0 h-auto"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}