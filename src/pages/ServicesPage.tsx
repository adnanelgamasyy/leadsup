import { Phone, Database, Search, TrendingUp, Users, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

const services = [
  {
    icon: Phone,
    title: 'Professional Cold Calling',
    headline: 'Conversations That Close Deals.',
    body: 'Our professional callers bring years of industry experience, precision, and persistence to every conversation. We don\'t just dial—we build rapport, uncover motivation, and move deals forward.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    cta: 'Learn More'
  },
  {
    icon: Database,
    title: 'Precision Data Generation',
    headline: 'Beyond Motivation—Into Action.',
    body: 'Our data experts go deeper than surface-level filters. We target prospects going through life or financial transitions that indicate real intent, maximizing your chance to connect with people ready to make a deal today.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    cta: 'Learn More'
  },
  {
    icon: Search,
    title: 'High-Accuracy Skip Tracing',
    headline: 'Accuracy That Delivers Opportunity.',
    body: 'We use advanced tracing tools and verified databases to provide precise contact information with unmatched accuracy. Each record is validated, ensuring your outreach reaches the right person at the right time.',
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
    cta: 'Learn More'
  },
  {
    icon: TrendingUp,
    title: 'Free Market Research & Strategy',
    headline: 'Strategy Before Outreach. Always.',
    body: 'Every campaign starts with research. Our analysts identify the hottest areas, best entry points, and strongest exit strategies to help you move with confidence and clarity before the first call is ever made.',
    image: 'https://images.pexels.com/photos/7621135/pexels-photo-7621135.jpeg?auto=compress&cs=tinysrgb&w=800',
    cta: 'Learn More'
  },
  {
    icon: Users,
    title: 'Acquisition & Disposition Support',
    headline: 'An Entire Department Dedicated to Your Deal Flow.',
    body: 'We help you find motivated sellers, manage acquisitions, and assist with dispositions. From the first call to the final key exchange, we cover your entire deal flow so you can focus on scaling.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    cta: 'Learn More'
  },
  {
    icon: Calendar,
    title: 'High-Intent Appointment Setting',
    headline: 'Booked. Confirmed. Connected. Closed.',
    body: 'Our appointment setting goes beyond scheduling. Every meeting is double-confirmed and supported with live transfers, connecting your team instantly with ready-to-act prospects.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    cta: 'Learn More'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-orange-50/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                Your Pipeline, Powered by{' '}
                <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                  Precision
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
                We don't just generate leads—we build the end-to-end systems that turn conversations into closings. Explore our suite of services crafted to help growth-driven professionals dominate their markets.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="group bg-card rounded-2xl border border-border shadow-premium hover:shadow-premium-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
                      {/* Service Image */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-80" />
                        <div className="absolute top-4 left-4 w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      {/* Service Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {service.headline}
                        </h3>
                        <p className="text-muted-foreground mb-6 flex-1">
                          {service.body}
                        </p>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                        >
                          {service.cta}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                Ready to Build Your Growth Engine?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Book a free strategy call and discover how our services can transform your pipeline in as little as 72 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  Book Your Free Call
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
                  onClick={() => window.location.href = '/pricing'}
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
