import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import EnhancedHeader from '@/components/EnhancedHeader'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInStagger, hoverLift, iconHover, viewportOnce } from '@/lib/motion'
import { blogPosts } from '@/data/blogPosts'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-purple via-[#101633] to-slate-900">
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-action-blue/20 blur-3xl" />
          <div className="absolute right-[10%] top-[35%] h-[22rem] w-[22rem] rounded-full bg-energetic-pink/20 blur-[150px]" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-energetic-pink/30 bg-energetic-pink/15 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-energetic-pink backdrop-blur-md">
              The Playbook
            </span>
            <h1 className="mt-6 font-plus-jakarta-sans text-5xl sm:text-6xl font-bold text-slate-50 leading-tight">
              Real Estate Insights &{' '}
              <span className="bg-gradient-to-r from-action-blue to-vibrant-green bg-clip-text text-transparent">
                Strategies
              </span>
            </h1>
            <p className="mt-6 font-inter text-lg text-slate-200/80">
              Expert advice, proven tactics, and actionable strategies to help you find more deals, close faster, and scale your real estate business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative py-16 pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                whileHover={hoverLift}
                className="group flex h-full flex-col"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block h-full"
                >
                  <div className="h-full overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-[0_30px_90px_rgba(8,12,28,0.45)] backdrop-blur-2xl transition">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#101633] via-[#101633]/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex rounded-full border border-white/20 bg-action-blue px-3 py-1 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(61,130,247,0.45)]">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col gap-4 p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 font-inter text-xs text-slate-200/70">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-action-blue" />
                          <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-action-blue" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="font-plus-jakarta-sans text-2xl font-bold text-slate-50 group-hover:text-action-blue transition-colors duration-300">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="font-inter text-sm text-slate-200/75 leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 text-action-blue font-semibold group-hover:gap-3 transition-all duration-300">
                        <span className="font-inter text-sm">Read article</span>
                        <motion.span whileHover={iconHover}>
                          <ArrowRight className="w-4 h-4" />
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
