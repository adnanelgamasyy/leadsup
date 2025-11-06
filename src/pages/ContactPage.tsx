import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    investingStrategy: '',
    desiredAreas: '',
    numCallers: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you! We\'ll be in touch soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-orange-50/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                Let's Build Your{' '}
                <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                  Growth Roadmap
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                The first step is a free, no-obligation strategy call. We'll discuss your goals, map out your milestones, and deliver a complimentary market research report. No pressure. No fluff. Just a clear, actionable plan to move your business forward.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side: Discovery Call & Calendar */}
              <AnimatedSection>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-foreground">Book Your Free Discovery Call</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Select a time that works for you below. We look forward to connecting.
                    </p>
                  </div>

                  {/* Calendly Embed */}
                  <div className="bg-card rounded-2xl border border-border shadow-premium overflow-hidden">
                    <div className="h-[600px]">
                      <iframe
                        src="https://cal.com/leadsup/strategy-call"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Book a Strategy Call"
                        className="rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right Side: Direct Contact & Form */}
              <AnimatedSection delay={200}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-foreground">Send Us a Message</h2>
                  </div>

                  <div className="bg-card rounded-2xl p-8 border border-border shadow-premium">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label htmlFor="investingStrategy" className="block text-sm font-semibold text-foreground mb-2">
                          Investing Strategy
                        </label>
                        <select
                          id="investingStrategy"
                          name="investingStrategy"
                          value={formData.investingStrategy}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        >
                          <option value="">Select a strategy</option>
                          <option value="wholesaling">Wholesaling</option>
                          <option value="fix-and-flip">Fix & Flip</option>
                          <option value="buy-and-hold">Buy & Hold</option>
                          <option value="agent">Real Estate Agent</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="desiredAreas" className="block text-sm font-semibold text-foreground mb-2">
                          Desired Areas
                        </label>
                        <input
                          type="text"
                          id="desiredAreas"
                          name="desiredAreas"
                          value={formData.desiredAreas}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="e.g., Dallas, Austin, Houston"
                        />
                      </div>

                      <div>
                        <label htmlFor="numCallers" className="block text-sm font-semibold text-foreground mb-2">
                          How Many Callers Are You Interested In?
                        </label>
                        <select
                          id="numCallers"
                          name="numCallers"
                          value={formData.numCallers}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        >
                          <option value="">Select number of callers</option>
                          <option value="1">1 Caller</option>
                          <option value="2">2 Callers</option>
                          <option value="3">3 Callers</option>
                          <option value="4">4 Callers</option>
                          <option value="5+">5+ Callers</option>
                        </select>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                      >
                        Send Inquiry
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </form>

                    {/* Direct Contact Info */}
                    <div className="mt-8 pt-8 border-t border-border space-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="w-5 h-5 text-primary" />
                        <a href="mailto:info@theleadsup.com" className="text-primary hover:underline">
                          info@theleadsup.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-5 h-5 text-primary" />
                        <a href="tel:+15513584982" className="text-primary hover:underline">
                          +1 (551) 358-4982
                        </a>
                      </div>
                      <div className="flex items-start gap-3 text-sm">
                        <MapPin className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-muted-foreground">
                          Operated by Adnan Ahmed<br />
                          Registered in WY, USA<br />
                          Operating nationwide
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Looking for Quick Answers?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Check out our pricing page for common questions about setup fees, contracts, and our 30-day guarantee.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-base font-semibold rounded-xl border-2 hover:border-primary hover:text-primary transition-all duration-300"
                onClick={() => window.location.href = '/pricing'}
              >
                View Pricing & FAQ
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
