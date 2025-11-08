import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Calendar, Clock, ArrowLeft, BookOpen, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInStagger, viewportOnce, hoverLift } from '@/lib/motion'
import { blogPosts } from '@/data/blogPosts'

export default function EnhancedBlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find(p => p.slug === slug)
  const [activeSection, setActiveSection] = useState('')
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = post?.title || ''

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareButtons = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-[#1877F2] hover:text-white'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      color: 'hover:bg-[#1DA1F2] hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-[#0A66C2] hover:text-white'
    }
  ]

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
      <div className="min-h-screen bg-gradient-to-br from-deep-purple via-[#101633] to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-slate-50">Post Not Found</h1>
          <Link to="/blog" className="text-action-blue hover:text-action-blue/80">
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
    <div className="min-h-screen bg-gradient-to-br from-deep-purple via-[#101633] to-slate-900">
      <EnhancedHeader />

      {/* Article Header */}
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="show"
            >
              {/* Back Link */}
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-slate-200/80 hover:text-action-blue transition-colors duration-200 mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-inter text-sm font-semibold">Back to Blog</span>
              </Link>

              {/* Category Badge */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-action-blue/30 bg-action-blue/15 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-action-blue backdrop-blur-md">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-plus-jakarta-sans text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-slate-50 leading-tight max-w-4xl">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-slate-200/70 mb-12 pb-8 border-b border-white/10 max-w-4xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-action-blue to-vibrant-green rounded-full flex items-center justify-center text-white font-bold shadow-[0_8px_20px_rgba(61,130,247,0.4)]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="font-inter text-sm font-medium text-slate-200/90">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-action-blue" />
                  <span className="font-inter text-sm">{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-action-blue" />
                  <span className="font-inter text-sm">{post.readTime}</span>
                </div>
              </div>
            </motion.div>

            {/* Two Column Layout: Content + TOC */}
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              {/* Main Content Column */}
              <div>
                {/* Featured Image */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                >
                  <div className="mb-12 rounded-3xl overflow-hidden shadow-[0_40px_120px_rgba(15,23,42,0.5)] border border-white/10">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>

                {/* Article Content */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  className="blog-content-wrapper"
                >
                  {/* Engaging Lede (First Paragraph) */}
                  <div className="mb-8 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-2xl shadow-[0_40px_120px_rgba(15,23,42,0.35)]">
                    <p className="font-inter text-lg text-slate-200/90 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Main Content with Proper Styling */}
                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: contentWithIds }}
                  />

                  {/* Share Buttons */}
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                      <div className="flex items-center gap-3">
                        <Share2 className="w-5 h-5 text-action-blue" />
                        <span className="font-plus-jakarta-sans text-lg font-semibold text-slate-50">Share this article</span>
                      </div>
                      <div className="flex items-center gap-3">
                        {shareButtons.map((button) => {
                          const Icon = button.icon
                          return (
                            <a
                              key={button.name}
                              href={button.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center justify-center w-12 h-12 rounded-xl border border-white/20 bg-white/5 text-slate-200 transition-all duration-300 ${button.color} hover:border-transparent hover:scale-110 hover:shadow-lg`}
                              aria-label={`Share on ${button.name}`}
                            >
                              <Icon className="w-5 h-5" />
                            </a>
                          )
                        })}
                        <button
                          onClick={handleCopyLink}
                          className="flex items-center justify-center w-12 h-12 rounded-xl border border-white/20 bg-white/5 text-slate-200 transition-all duration-300 hover:bg-action-blue hover:text-white hover:border-transparent hover:scale-110 hover:shadow-lg relative"
                          aria-label="Copy link"
                        >
                          <LinkIcon className="w-5 h-5" />
                          {copied && (
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-vibrant-green text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                              Link copied!
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Author Bio */}
                  <div className="mt-16 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-2xl shadow-[0_40px_120px_rgba(15,23,42,0.35)] flex gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-action-blue to-vibrant-green rounded-full flex items-center justify-center text-white font-bold text-xl shadow-[0_12px_30px_rgba(61,130,247,0.4)] flex-shrink-0">
                      TL
                    </div>
                    <div>
                      <h4 className="font-plus-jakarta-sans text-lg font-semibold text-slate-50 mb-2">Written by The Leads Up Team</h4>
                      <p className="font-inter text-sm text-slate-200/80 leading-relaxed">
                        Our team of real estate acquisition experts has generated over $50M in deals using the exact strategies we share.
                        We're committed to helping investors like you build predictable, scalable acquisition systems.
                      </p>
                    </div>
                  </div>

                  {/* Blog Post CTA */}
                  <div className="mt-12 rounded-3xl border border-action-blue/30 bg-gradient-to-br from-action-blue/20 via-deep-purple/20 to-energetic-pink/20 p-10 backdrop-blur-2xl shadow-[0_40px_120px_rgba(61,130,247,0.3)] text-center">
                    <h3 className="font-plus-jakarta-sans text-3xl font-bold text-slate-50 mb-4">Ready to 10X Your Deal Flow?</h3>
                    <p className="font-inter text-base text-slate-200/80 leading-relaxed mb-6 max-w-2xl mx-auto">
                      Stop struggling with inconsistent leads. Book your free strategy call and discover how The Leads Up
                      can fill your pipeline with motivated sellers in just 72 hours.
                    </p>
                    <button
                      onClick={() => window.location.href = '/contact'}
                      className="rounded-xl bg-action-blue px-8 py-4 font-inter text-base font-semibold text-white shadow-[0_20px_60px_rgba(61,130,247,0.5)] transition-all hover:bg-action-blue/90 hover:shadow-[0_30px_80px_rgba(61,130,247,0.6)] hover:scale-105"
                    >
                      Book My Free Strategy Call
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Sticky Table of Contents (Desktop Only) */}
              {headings.length > 0 && (
                <div className="hidden lg:block">
                  <div className="sticky top-24 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-2xl shadow-[0_40px_120px_rgba(15,23,42,0.35)]">
                    <div className="font-plus-jakarta-sans text-sm font-semibold uppercase tracking-[0.2em] text-slate-50 mb-4">Table of Contents</div>
                    <ul className="space-y-2">
                      {headings.map((heading) => (
                        <li key={heading.id}>
                          <a
                            href={`#${heading.id}`}
                            className={`block font-inter text-sm py-2 px-3 rounded-lg transition-all duration-200 ${
                              activeSection === heading.id
                                ? 'bg-action-blue/20 text-action-blue font-semibold'
                                : 'text-slate-200/70 hover:text-action-blue hover:bg-white/10'
                            }`}
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
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#1A1F3B] via-[#101633] to-deep-purple">
        <div className="absolute inset-0">
          <div className="absolute right-[15%] bottom-0 h-[30rem] w-[30rem] rounded-full bg-energetic-pink/20 blur-[180px]" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="font-plus-jakarta-sans text-3xl font-bold mb-12 text-slate-50"
            >
              Related Articles
            </motion.h2>
            <motion.div
              variants={fadeInStagger}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid md:grid-cols-3 gap-8"
            >
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 3)
                .map((relatedPost) => (
                  <motion.article
                    key={relatedPost.id}
                    variants={fadeInUp}
                    whileHover={hoverLift}
                  >
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="group block h-full"
                    >
                      <div className="h-full overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl transition">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={relatedPost.imageUrl}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#101633] via-[#101633]/50 to-transparent" />
                          <div className="absolute left-4 top-4">
                            <span className="inline-flex rounded-full border border-white/20 bg-action-blue px-3 py-1 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-white">
                              {relatedPost.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="font-plus-jakarta-sans text-xl font-semibold text-slate-50 transition-colors group-hover:text-action-blue line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="mt-3 font-inter text-sm text-slate-200/70 line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
