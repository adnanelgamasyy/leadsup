import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { blogPosts } from '@/data/blogPosts'
import { fadeInStagger, fadeInUp, hoverLift, iconHover, viewportOnce } from '@/lib/motion'

export default function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050a1f] via-[#0c1433] to-[#050816] py-28">
      <div className="absolute inset-0">
        <div className="absolute left-[12%] top-[-6rem] h-[24rem] w-[24rem] rounded-full bg-action-blue/18 blur-[160px]" />
        <div className="absolute right-[10%] top-[30%] h-[24rem] w-[24rem] rounded-full bg-energetic-pink/20 blur-[160px]" />
        <div className="absolute left-1/2 bottom-[-8rem] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-vibrant-green/12 blur-[140px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-energetic-pink/30 bg-energetic-pink/15 px-4 py-2 font-inter text-xs font-semibold uppercase tracking-[0.3em] text-energetic-pink">
            The playbook
          </span>
          <h2 className="mt-6 font-plus-jakarta-sans text-4xl font-bold text-slate-50 sm:text-[2.75rem]">
            Actionable insights for real estate investors
          </h2>
          <p className="mt-4 font-inter text-base text-slate-200/80">
            The game is won before it’s played. Explore expert guides, proven call frameworks, and growth strategies used by the top 1% of investors, wholesalers, and agents.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInStagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-8 md:grid-cols-3"
        >
          {latestPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeInUp}
              whileHover={hoverLift}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-[0_30px_90px_rgba(8,12,28,0.45)] backdrop-blur-2xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4">
                  <span className="inline-flex rounded-full border border-white/20 bg-action-blue px-3 py-1 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(61,130,247,0.45)]">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center gap-4 font-inter text-xs text-slate-200/70">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-action-blue" />
                    <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-action-blue" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-plus-jakarta-sans text-xl font-semibold text-slate-50 transition-colors group-hover:text-action-blue">
                  {post.title}
                </h3>

                <p className="font-inter text-sm text-slate-200/75 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-auto inline-flex items-center gap-2 font-inter text-sm font-semibold text-action-blue"
                >
                  Read article
                  <motion.span whileHover={iconHover}>
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 text-center"
        >
          <Link to="/blog">
            <Button
              size="lg"
              variant="outline"
              className="inline-flex items-center gap-3 rounded-2xl border-2 border-white/30 px-10 py-5 font-inter text-base font-semibold text-slate-50 transition hover:border-white/60 hover:bg-white/10"
            >
              Explore the full playbook
              <motion.span whileHover={iconHover}>
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
