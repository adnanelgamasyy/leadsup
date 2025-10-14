import { Target, Shield, Heart, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We measure our success by your success. Every strategy, every call, every lead is optimized for maximum ROI.'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'No hidden fees, no surprises. We believe in honest communication and clear expectations from day one.'
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'We\'re not just a vendor—we\'re your acquisition team. Your wins are our wins, and we\'re invested in your growth.'
    },
    {
      icon: Zap,
      title: 'Speed & Efficiency',
      description: 'In real estate, timing is everything. We move fast, adapt quickly, and deliver results when you need them.'
    }
  ]

  const team = [
    {
      name: 'Michael Chen',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '15+ years in real estate acquisitions and team building'
    },
    {
      name: 'Sarah Martinez',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in scaling cold calling operations and VA management'
    },
    {
      name: 'David Thompson',
      role: 'Data & Analytics Lead',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Specialist in skip tracing and data optimization strategies'
    }
  ]

  return (
    <div className="min-h-screen">
      <EnhancedHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-orange-50/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                Built by Investors,{' '}
                <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                  For Investors
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We know the real estate game because we've lived it. The Leads Up was born from the frustration of inconsistent lead flow, unreliable VAs, and the endless grind of prospecting.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our mission is simple: to give real estate investors a predictable, scalable acquisition system so they can focus on what they do best—closing deals.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    We believe that finding motivated sellers shouldn't be a bottleneck in your business. With the right team, the right data, and the right systems, deal flow becomes predictable, and growth becomes inevitable.
                  </p>
                  <div className="flex items-center gap-8 pt-4">
                    <div>
                      <div className="text-4xl font-bold text-primary mb-1">7+</div>
                      <div className="text-sm text-muted-foreground">Years in Business</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-1">120+</div>
                      <div className="text-sm text-muted-foreground">Active Clients</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-1">10M+</div>
                      <div className="text-sm text-muted-foreground">Dials Made</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Team collaboration"
                    className="rounded-2xl shadow-premium-xl"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do, from how we train our VAs to how we serve our clients.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-card rounded-xl p-6 border border-border shadow-premium card-hover text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Meet the Leadership</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A team of real estate veterans and operations experts dedicated to your success.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-card rounded-xl overflow-hidden border border-border shadow-premium card-hover">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-orange-50/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Ready to Build Your Deal Pipeline?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join 120+ investors who trust The Leads Up to fuel their business growth.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-premium-lg hover:shadow-premium-xl hover:scale-105 transition-all duration-300"
              >
                Book Your Free Strategy Call
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
