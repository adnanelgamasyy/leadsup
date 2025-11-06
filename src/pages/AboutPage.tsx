import { Target, Shield, Heart, Zap, Award, Users, TrendingUp, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import ErrorBoundary from '@/components/ErrorBoundary'
import SEO from '@/components/SEO'
import ScrollProgress from '@/components/ScrollProgress'
import SkipToContent from '@/components/SkipToContent'
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'
import { motion } from 'framer-motion'
import { useState } from 'react'

// Animated stat component
function AnimatedStat({ end, suffix = '', prefix = '', label }: { end: number; suffix?: string; prefix?: string; label: string }) {
  const { count, ref } = useAnimatedCounter({ end, suffix, prefix, duration: 2500 })

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-primary mb-1">{count}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

// Enhanced Team Member Card with hover state
function TeamMemberCard({ member, index }: { member: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <AnimatedSection delay={index * 100}>
      <motion.div
        className="bg-card rounded-xl overflow-hidden border border-border shadow-premium group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
      >
        <div className="aspect-square overflow-hidden relative">
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: isHovered ? 0.9 : 0.6 }}
            transition={{ duration: 0.3 }}
          />
          {member.linkedin && (
            <motion.a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 w-10 h-10 bg-action-blue rounded-full flex items-center justify-center text-white shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.2 }}
              aria-label={`${member.name} LinkedIn profile`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </motion.a>
          )}
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
          <p className="text-primary font-semibold mb-3">{member.role}</p>
          <p className="text-sm text-muted-foreground">{member.bio}</p>
          {member.expertise && (
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {member.expertise.map((skill: string, i: number) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

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
      bio: '15+ years in real estate acquisitions and team building',
      expertise: ['Strategy', 'Acquisitions', 'Leadership'],
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Sarah Martinez',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in scaling cold calling operations and VA management',
      expertise: ['Operations', 'Team Building', 'Process'],
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'David Thompson',
      role: 'Data & Analytics Lead',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Specialist in skip tracing and data optimization strategies',
      expertise: ['Data Science', 'Analytics', 'Skip Tracing'],
      linkedin: 'https://linkedin.com'
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Top-rated lead generation provider for real estate investors'
    },
    {
      icon: Users,
      title: 'Elite Team',
      description: '50+ trained cold calling specialists delivering results daily'
    },
    {
      icon: TrendingUp,
      title: 'Proven Growth',
      description: 'Clients see average 300% increase in qualified opportunities'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Every call reviewed with comprehensive QA and coaching'
    }
  ]

  return (
    <ErrorBoundary>
      <SEO
        title="About Us - Built by Investors, For Investors"
        description="Meet the team behind The Leads Up. Real estate veterans and operations experts dedicated to building predictable acquisition systems for investors."
        keywords="about the leads up, real estate team, cold calling experts, lead generation team"
        canonical="https://theleadsup.com/about"
      />

      <SkipToContent />
      <ScrollProgress />

      <div className="min-h-screen">
        <EnhancedHeader />

        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          {/* Hero Section with Parallax Effect */}
          <section className="relative pt-32 pb-16 overflow-hidden">
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-deep-purple/20 via-action-blue/10 to-background"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Floating orbs */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-action-blue/20 rounded-full blur-3xl"
                animate={{
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 bg-energetic-pink/15 rounded-full blur-3xl"
                animate={{
                  x: [0, -40, 0],
                  y: [0, 30, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <AnimatedSection>
                <div className="max-w-4xl mx-auto text-center">
                  <motion.div
                    className="inline-block mb-6"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary">
                      <Award className="w-4 h-4" />
                      7+ Years of Excellence
                    </span>
                  </motion.div>

                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                    Built by Investors,{' '}
                    <span className="bg-gradient-to-r from-action-blue via-energetic-pink to-vibrant-green bg-clip-text text-transparent">
                      For Investors
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                    We know the real estate game because we've lived it. The Leads Up was born from the frustration of inconsistent lead flow, unreliable VAs, and the endless grind of prospecting.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Mission Section with Animated Stats */}
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

                      {/* Animated Stats */}
                      <div className="flex items-center gap-8 pt-4">
                        <AnimatedStat end={7} suffix="+" label="Years in Business" />
                        <AnimatedStat end={120} suffix="+" label="Active Clients" />
                        <AnimatedStat end={10} suffix="M+" label="Dials Made" />
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={200}>
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute -inset-4 bg-gradient-to-r from-action-blue/30 to-energetic-pink/30 rounded-3xl blur-2xl" />
                      <img
                        src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Team collaboration"
                        className="relative rounded-2xl shadow-premium-xl"
                      />
                    </motion.div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Section - NEW */}
          <section className="py-16 bg-muted/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4 text-foreground">Why Investors Trust Us</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Our track record speaks for itself. Here's what sets us apart in the industry.
                  </p>
                </div>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {achievements.map((achievement, index) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <motion.div
                      className="bg-card rounded-xl p-6 border border-border shadow-premium text-center group"
                      whileHover={{ y: -8, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <achievement.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </motion.div>
                  </AnimatedSection>
                ))}
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

          {/* Team Section with Enhanced Cards */}
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
                  <TeamMemberCard key={index} member={member} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <section className="relative py-20 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/20 via-action-blue/10 to-background" />

            {/* Animated background elements */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-1/2 left-1/4 w-96 h-96 bg-action-blue/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-energetic-pink/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <AnimatedSection>
                <motion.div
                  className="max-w-4xl mx-auto text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                    Ready to Build Your{' '}
                    <span className="bg-gradient-to-r from-action-blue to-vibrant-green bg-clip-text text-transparent">
                      Deal Pipeline?
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Join 120+ investors who trust The Leads Up to fuel their business growth.
                  </p>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      className="bg-action-blue hover:bg-action-blue/90 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-[0_20px_60px_rgba(61,130,247,0.5)] hover:shadow-[0_30px_80px_rgba(61,130,247,0.7)] transition-all duration-300"
                      onClick={() => window.location.href = '/contact'}
                      aria-label="Book your free strategy call"
                    >
                      Book Your Free Strategy Call
                    </Button>
                  </motion.div>

                  {/* Trust indicators */}
                  <div className="flex items-center justify-center gap-8 mt-12 flex-wrap">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-vibrant-green" />
                      <span className="text-sm">No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-vibrant-green" />
                      <span className="text-sm">15-minute call</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-vibrant-green" />
                      <span className="text-sm">Custom strategy included</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  )
}
