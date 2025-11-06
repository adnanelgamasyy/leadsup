import { useState } from 'react'
import { Check, Phone, Users, Database, ArrowRight, Zap, Trophy, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

const pricingPlans = [
  {
    name: 'LeadsUp Drive',
    tagline: 'The Essential Engine for Solo Operators.',
    icon: Rocket,
    popular: false,
    features: [
      '1 Experienced Cold Caller (4 hrs/day)',
      'Client Success Manager',
      'Quality Control Management',
      'Daily & Weekly Reports',
      'Weekly Team Meetings',
      'Choose Your Cold Caller',
      'ReadyMode Dialer'
    ]
  },
  {
    name: 'LeadsUp Momentum',
    tagline: 'The Complete System for Growing Businesses.',
    icon: Zap,
    popular: true,
    features: [
      'Everything in Drive, PLUS:',
      '15K Records of Data Pulling',
      '15K Records of Skip Tracing',
      'Priority Support',
      'Advanced Analytics Dashboard',
      'Campaign Optimization'
    ]
  },
  {
    name: 'LeadsUp Prime',
    tagline: 'The Unfair Advantage for Market Leaders.',
    icon: Trophy,
    popular: false,
    features: [
      'Everything in Momentum, PLUS:',
      '2 Experienced Cold Callers',
      '30K Records of Data Pulling',
      '30K Records of Skip Tracing',
      'Dedicated Account Manager',
      'Custom Integration Support',
      'White-Glove Onboarding'
    ]
  }
]

export default function PricingPage() {
  const [numCallers, setNumCallers] = useState('1')
  const [numAcquisitionManagers, setNumAcquisitionManagers] = useState('0')

  const handleCustomSubmit = () => {
    // Pre-fill the calendar link with selections
    const calendarUrl = `https://cal.com/leadsup/strategy-call?callers=${numCallers}&managers=${numAcquisitionManagers}`
    window.open(calendarUrl, '_blank')
  }

  return (
    <div className="min-h-screen">
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-orange-50/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                Simple, Transparent Pricing to{' '}
                <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                  Fuel Your Growth
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Every LeadsUp plan comes with proven systems, expert support, and a commitment to real results. No hidden fees. No long-term contracts. Just pure performance.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => {
                const Icon = plan.icon
                return (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className={`relative bg-card rounded-2xl border-2 ${plan.popular ? 'border-primary shadow-2xl scale-105' : 'border-border shadow-premium'} transition-all duration-300 overflow-hidden h-full flex flex-col`}>
                      {plan.popular && (
                        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-orange-500 text-white text-center py-2 text-sm font-semibold">
                          MOST POPULAR
                        </div>
                      )}

                      <div className={`p-8 ${plan.popular ? 'pt-16' : 'pt-8'} flex-1 flex flex-col`}>
                        {/* Icon and Name */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${plan.popular ? 'bg-primary' : 'bg-primary/10'}`}>
                            <Icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">
                            {plan.name}
                          </h3>
                        </div>

                        {/* Tagline */}
                        <p className="text-muted-foreground mb-6 text-sm">
                          {plan.tagline}
                        </p>

                        {/* Features */}
                        <div className="space-y-3 mb-8 flex-1">
                          {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full ${plan.popular ? 'bg-primary' : 'bg-primary/10'} flex items-center justify-center`}>
                                <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                              </div>
                              <span className="text-foreground text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <Button
                          className={`w-full py-6 text-base font-semibold rounded-xl transition-all duration-300 ${
                            plan.popular
                              ? 'bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:scale-105'
                              : 'bg-primary/10 hover:bg-primary hover:text-white text-primary border border-primary/20'
                          }`}
                          onClick={() => window.location.href = '/contact'}
                        >
                          {plan.popular ? 'Start Scaling Now' : plan.name === 'LeadsUp Drive' ? 'Get Started Today' : 'Dominate Your Market'}
                          <ArrowRight className="ml-2 h-5 w-5" />
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

      {/* Custom Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-card rounded-2xl border border-border shadow-premium p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                    Need a Custom Solution?
                  </h2>
                  <h3 className="text-xl text-muted-foreground mb-2">
                    Build Your Own Plan.
                  </h3>
                  <p className="text-muted-foreground">
                    Don't see a perfect fit? Let's build a custom package tailored to your exact needs, including dedicated Acquisition Managers and custom data solutions.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Number of Cold Callers */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Number of Cold Callers
                    </label>
                    <select
                      value={numCallers}
                      onChange={(e) => setNumCallers(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="1">1 Cold Caller</option>
                      <option value="2">2 Cold Callers</option>
                      <option value="3">3 Cold Callers</option>
                      <option value="4">4 Cold Callers</option>
                      <option value="5">5+ Cold Callers</option>
                    </select>
                  </div>

                  {/* Number of Acquisition Managers */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Number of Acquisition Managers
                    </label>
                    <select
                      value={numAcquisitionManagers}
                      onChange={(e) => setNumAcquisitionManagers(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="0">None</option>
                      <option value="1">1 Acquisition Manager</option>
                      <option value="2">2 Acquisition Managers</option>
                      <option value="3">3 Acquisition Managers</option>
                      <option value="4">4+ Acquisition Managers</option>
                    </select>
                  </div>
                </div>

                <Button
                  onClick={handleCustomSubmit}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Let's Talk
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 via-orange-50/30 to-background rounded-2xl border border-border p-8 md:p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                  30-Day Performance Guarantee
                </h2>
                <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                  We're so confident in our systems that we offer a 30-day guarantee. If you're not seeing qualified leads in your pipeline within the first month, we'll work with you until you do—or you don't pay.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get Started Risk-Free
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Have Questions About Our Plans?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Check out our FAQ section or book a free consultation to discuss which plan is right for your business.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-base font-semibold rounded-xl border-2 hover:border-primary hover:text-primary transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Talk to an Expert
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
