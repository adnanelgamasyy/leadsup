import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { blogPosts } from '@/data/blogPosts'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <EnhancedHeader />
      
      {/* Article Header */}
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              {/* Back Link */}
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                <span>Back to Blog</span>
              </Link>

              {/* Category Badge */}
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full uppercase tracking-wide">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    TL
                  </div>
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Featured Image */}
            <AnimatedSection delay={100}>
              <div className="mb-12 rounded-2xl overflow-hidden shadow-premium-xl">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>

            {/* Article Content */}
            <AnimatedSection delay={200}>
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:text-foreground
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-ul:my-6 prose-li:text-muted-foreground
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </AnimatedSection>
          </div>
        </div>
      </article>

      {/* Post-Article CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-orange-50/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-premium-xl p-8 md:p-12 border border-border">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                  Ready to Transform Your Lead Generation?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Stop reading about success and start experiencing it. Book your free strategy call today and discover how The Leads Up can fill your pipeline with motivated sellers in just 72 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-premium-lg hover:shadow-premium-xl hover:scale-105 transition-all duration-300 group"
                  >
                    Book My Free Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="px-10 py-6 text-lg font-semibold rounded-xl border-2 hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    View Our Services
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  No credit card required • Free 30-minute consultation • Cancel anytime
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Related Articles</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 3)
                .map((relatedPost, index) => (
                  <AnimatedSection key={relatedPost.id} delay={index * 100}>
                    <Link 
                      to={`/blog/${relatedPost.slug}`}
                      className="group block h-full"
                    >
                      <div className="bg-card rounded-xl overflow-hidden border border-border shadow-premium card-hover h-full">
                        <div className="relative h-40 overflow-hidden">
                          <img 
                            src={relatedPost.imageUrl} 
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded mb-2">
                            {relatedPost.category}
                          </span>
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                            {relatedPost.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
