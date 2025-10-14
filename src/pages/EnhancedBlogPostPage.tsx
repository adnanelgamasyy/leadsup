import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { blogPosts } from '@/data/blogPosts'

export default function EnhancedBlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find(p => p.slug === slug)
  const [activeSection, setActiveSection] = useState('')

  // Extract H2 headings for Table of Contents
  const extractHeadings = (content: string) => {
    const headingRegex = /<h2[^>]*>(.*?)<\/h2>/g
    const headings: { id: string; text: string }[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const text = match[1].replace(/<[^>]*>/g, '')
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      headings.push({ id, text })
    }

    return headings
  }

  const headings = post ? extractHeadings(post.content) : []

  // Scroll spy for TOC
  useEffect(() => {
    const handleScroll = () => {
      const sections = headings.map(h => document.getElementById(h.id))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(headings[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings])

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

  // Add IDs to H2 headings in content
  const contentWithIds = post.content.replace(
    /<h2[^>]*>(.*?)<\/h2>/g,
    (match, text) => {
      const cleanText = text.replace(/<[^>]*>/g, '')
      const id = cleanText.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      return `<h2 id="${id}">${text}</h2>`
    }
  )

  return (
    <div className="min-h-screen">
      <EnhancedHeader />
      
      {/* Article Header */}
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              {/* Back Link */}
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-body-text hover:text-primary transition-colors duration-200 mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                <span>Back to Blog</span>
              </Link>

              {/* Category Badge */}
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary-orange text-white text-sm font-semibold rounded-full uppercase tracking-wide">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-charcoal leading-tight max-w-4xl">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-body-text mb-8 pb-8 border-b border-card-border max-w-4xl">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-orange to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    AA
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

            {/* Two Column Layout: Content + TOC */}
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              {/* Main Content Column */}
              <div>
                {/* Featured Image */}
                <AnimatedSection delay={100}>
                  <div className="mb-12 rounded-2xl overflow-hidden shadow-premium-lg">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-auto"
                    />
                  </div>
                </AnimatedSection>

                {/* Article Content with Enhancements */}
                <AnimatedSection delay={200}>
                  <div className="blog-content">
                    {/* Engaging Lede (First Paragraph) */}
                    <p className="blog-lede">
                      {post.excerpt}
                    </p>

                    {/* Key Takeaways Box */}
                    <div className="key-takeaways">
                      <h3>Key Takeaways</h3>
                      <ul>
                        <li>Learn the critical mistakes that are costing you deals</li>
                        <li>Discover proven strategies to improve conversion rates</li>
                        <li>Get actionable tips you can implement immediately</li>
                      </ul>
                    </div>

                    {/* Main Content */}
                    <div 
                      className="prose prose-lg max-w-none
                        prose-headings:font-bold prose-headings:text-charcoal
                        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                        prose-p:text-body-text prose-p:leading-relaxed prose-p:mb-6
                        prose-strong:text-charcoal prose-strong:font-semibold
                        prose-ul:my-6 prose-li:text-body-text
                        prose-a:text-primary-orange prose-a:no-underline hover:prose-a:underline"
                      dangerouslySetInnerHTML={{ __html: contentWithIds }}
                    />

                    {/* Author Bio */}
                    <div className="author-bio">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        TL
                      </div>
                      <div className="author-bio-text">
                        <h4>Written by The Leads Up Team</h4>
                        <p>
                          Our team of real estate acquisition experts has generated over $50M in deals using the exact strategies we share. 
                          We're committed to helping investors like you build predictable, scalable acquisition systems.
                        </p>
                      </div>
                    </div>

                    {/* Blog Post CTA */}
                    <div className="blog-post-cta">
                      <h3>Ready to 10X Your Deal Flow?</h3>
                      <p>
                        Stop struggling with inconsistent leads. Book your free strategy call and discover how The Leads Up 
                        can fill your pipeline with motivated sellers in just 72 hours.
                      </p>
                      <button>
                        Book My Free Strategy Call
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Sticky Table of Contents (Desktop Only) */}
              {headings.length > 0 && (
                <div className="hidden lg:block">
                  <div className="blog-toc">
                    <div className="blog-toc-title">Table of Contents</div>
                    <ul>
                      {headings.map((heading) => (
                        <li key={heading.id}>
                          <a
                            href={`#${heading.id}`}
                            className={activeSection === heading.id ? 'active' : ''}
                            onClick={(e) => {
                              e.preventDefault()
                              document.getElementById(heading.id)?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                              })
                            }}
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl font-bold mb-8 text-charcoal">Related Articles</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 3)
                .map((relatedPost, index) => (
                  <AnimatedSection key={relatedPost.id} delay={index * 100}>
                    <Link 
                      to={`/blog/${relatedPost.slug}`}
                      className="group block h-full"
                    >
                      <div className="bg-white rounded-xl overflow-hidden border border-card-border shadow-premium card-hover h-full card-compact">
                        <div className="relative h-40 overflow-hidden">
                          <img 
                            src={relatedPost.imageUrl} 
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <span className="inline-block px-2 py-1 bg-primary-orange-light text-primary-orange text-xs font-semibold rounded mb-2">
                            {relatedPost.category}
                          </span>
                          <h3 className="text-base font-bold text-charcoal group-hover:text-primary-orange transition-colors duration-300 line-clamp-2">
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
