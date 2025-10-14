import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { blogPosts } from '@/data/blogPosts'

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <EnhancedHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-orange-50/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-primary">THE LEADS UP BLOG</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                Real Estate Insights &{' '}
                <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                  Strategies
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert advice, proven tactics, and actionable strategies to help you find more deals, close faster, and scale your real estate business.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 100}>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="group block h-full"
                >
                  <article className="bg-card rounded-2xl overflow-hidden border border-border shadow-premium card-hover h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4 arrow-icon" />
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
