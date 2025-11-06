import { Home, Hammer, Building2, Users, Zap, Sun, Heart, Car, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

const realEstateNiches = [
  {
    icon: Building2,
    title: 'Real Estate Wholesalers',
    description: 'Quick cash deals with motivated sellers ready to move fast.',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Hammer,
    title: 'Fix & Flip Investors',
    description: 'Find distressed properties with maximum profit potential.',
    image: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Home,
    title: 'Buy & Hold Investors',
    description: 'Build your rental empire with high-ROI properties.',
    image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Users,
    title: 'Real Estate Agents',
    description: 'Exclusive pocket listings and off-market opportunities.',
    image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Building2,
    title: 'Real Estate Investors (PPL Program)',
    description: 'Pay-per-lead program for verified, qualified prospects.',
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
]

const contractorServices = [
  {
    icon: Home,
    title: 'Roofing Companies',
    description: 'Connect with homeowners ready for roof repairs and replacements.',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Sun,
    title: 'Solar Industry',
    description: 'Qualified appointments with property owners interested in going solar.',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
]

const professionalServices = [
  {
    icon: Heart,
    title: 'Medical Insurance Companies',
    description: 'High-intent leads actively seeking health coverage solutions.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Car,
    title: 'Automotive Industry',
    description: 'Connect with buyers and sellers in your target market.',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
]

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-orange-50/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                Proven Systems for{' '}
                <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                  Growth-Driven Professionals
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Our battle-tested methodology for building predictable pipelines delivers results across a wide range of industries. Find your niche and discover how we can build a custom outreach engine for you.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Real Estate Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
                  The Engine for Real Estate Investors
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our core expertise. We speak your language because we come from your world. Whether you're wholesaling for quick cash, flipping for maximum profit, or building a rental empire, our systems are designed to find you the off-market deals that fuel your growth.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {realEstateNiches.map((niche, index) => {
                const Icon = niche.icon
                return (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="group bg-card rounded-2xl border border-border shadow-premium hover:shadow-premium-lg transition-all duration-300 overflow-hidden cursor-pointer h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={niche.image}
                          alt={niche.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white">
                              {niche.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-muted-foreground">
                          {niche.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contractors Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 rounded-2xl mb-6">
                  <Hammer className="w-8 h-8 text-orange-500" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
                  Filling the Job Queue for Contractors
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A crew that isn't working is a crew that's costing you money. We keep your teams booked and busy by delivering a consistent flow of qualified, high-intent appointments with property owners who are ready to act now.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
              {contractorServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="group bg-card rounded-2xl border border-border shadow-premium hover:shadow-premium-lg transition-all duration-300 overflow-hidden cursor-pointer">
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
                  High-Intent Leads for Professional Services
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We adapt our real estate-inspired outreach system to find clients and prospects who are actively seeking your services. We filter for intent, ensuring your team spends less time chasing and more time closing.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
              {professionalServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="group bg-card rounded-2xl border border-border shadow-premium hover:shadow-premium-lg transition-all duration-300 overflow-hidden cursor-pointer">
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
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
                Don't See Your Industry? Let's Talk.
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Our systems are adaptable to any business model. Book a free consultation and we'll create a custom outreach strategy tailored to your exact needs.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
