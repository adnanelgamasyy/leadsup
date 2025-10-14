import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import AnimatedSection from './AnimatedSection'
import { blogPosts } from '@/data/blogPosts'

export default function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">FROM THE BLOG</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              Actionable Insights for{' '}
              <span className="text-primary-orange">
                Real Estate Investors
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert strategies, proven tactics, and insider knowledge to help you close more deals and scale your business.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 100}>
              <Link 
                to={`/blog/${post.slug}`}
                className="group block h-full"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-premium card-hover h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
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
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 arrow-icon" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* View All Button */}
        <AnimatedSection delay={300}>
          <div className="text-center">
            <Link to="/blog">
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base font-semibold rounded-xl border-2 hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300 group"
              >
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
