import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
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
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you! We\'ll be in touch soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                  Deal Pipeline
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to transform your lead generation? Book a free strategy call and discover how we can fill your pipeline with motivated sellers in just 72 hours.
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
              {/* Contact Form */}
              <AnimatedSection>
                <div className="bg-card rounded-2xl p-8 border border-border shadow-premium">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        Email Address *
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
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
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
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your business and what you're looking for..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </form>
                </div>
              </AnimatedSection>

              {/* Contact Information */}
              <AnimatedSection delay={200}>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Get In Touch</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      Have questions? We're here to help. Reach out through any of these channels, or fill out the form and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  {/* Contact Cards */}
                  <div className="space-y-4">
                    <div className="bg-card rounded-xl p-6 border border-border shadow-premium card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                          <a href="mailto:hello@theleadsup.com" className="text-primary hover:underline">
                            hello@theleadsup.com
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            We'll respond within 24 hours
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-6 border border-border shadow-premium card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                          <a href="tel:+18885551234" className="text-primary hover:underline">
                            (888) 555-1234
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            Mon-Fri, 9am-6pm EST
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-6 border border-border shadow-premium card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                          <p className="text-muted-foreground">
                            123 Real Estate Blvd<br />
                            Suite 500<br />
                            Dallas, TX 75201
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="bg-muted rounded-xl h-64 flex items-center justify-center border border-border">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>Map Integration</p>
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
