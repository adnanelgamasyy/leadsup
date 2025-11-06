import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EnhancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`
      return
    }
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  const services = [
    { name: 'Cold Calling VAs', href: '/services/cold-calling' },
    { name: 'Skip Tracing & Data', href: '/services/skip-tracing' },
    { name: 'Full-Service Acquisition', href: '/services/full-service' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'border-b border-white/10 bg-[#070f25]/80 shadow-[0_12px_60px_rgba(3,6,17,0.7)] backdrop-blur-3xl backdrop-saturate-150'
          : 'border-b border-transparent bg-gradient-to-b from-[#070f25]/60 to-transparent backdrop-blur-sm'
      }`}
    >
      {/* Glassmorphism glow effect */}
      {isScrolled && (
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-action-blue/50 to-transparent" />
      )}

      <div className="mx-auto w-full px-6 sm:px-10 lg:px-16">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10 flex items-center gap-3 group">
            <motion.div
              className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-action-blue via-energetic-pink to-vibrant-green shadow-[0_12px_30px_rgba(61,130,247,0.45)]"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
              <svg className="h-5 w-5 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
              {/* Sparkle effect */}
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-3 h-3 text-vibrant-green" />
              </motion.div>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-plus-jakarta-sans text-xl font-bold tracking-tight text-slate-50 group-hover:text-white transition-colors">
                LeadsUp
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.4em] text-slate-200/60 hidden sm:block">
                Cash Calls, Not Cold Calls
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="relative z-10 hidden items-center gap-8 md:flex">
            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="relative flex items-center gap-1 font-inter text-sm font-semibold uppercase tracking-[0.25em] text-slate-200/80 transition-all duration-300 hover:text-white hover:scale-105"
              >
                Services
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
                {/* Animated underline */}
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-action-blue to-energetic-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </button>

              {/* Dropdown Menu with Animation */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
                    className="absolute left-0 top-full mt-4 w-72 overflow-hidden rounded-2xl border border-white/15 bg-[#0c162f]/90 shadow-[0_25px_70px_rgba(5,8,18,0.75)] backdrop-blur-3xl"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-action-blue/60 to-transparent" />

                    {services.map((service, index) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={service.href}
                          className="group/item relative block px-5 py-4 font-inter text-sm text-slate-200/80 transition-all duration-200 hover:bg-white/10 hover:text-white hover:pl-7"
                        >
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-action-blue scale-0 group-hover/item:scale-100 transition-transform" />
                          {service.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {[
              { to: '/about', label: 'About Us' },
              { to: '/blog', label: 'Blog' },
              { to: '/contact', label: 'Contact' }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative group/link font-inter text-sm font-semibold uppercase tracking-[0.25em] text-slate-200/80 transition-all duration-300 hover:text-white hover:scale-105"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-action-blue to-energetic-pink scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            ))}

            <button
              onClick={() => scrollToSection('pricing')}
              className="relative group/link font-inter text-sm font-semibold uppercase tracking-[0.25em] text-slate-200/80 transition-all duration-300 hover:text-white hover:scale-105"
            >
              Pricing
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-action-blue to-energetic-pink scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </button>
          </nav>

          {/* Primary CTA Button */}
          <div className="relative z-10 hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={() => scrollToSection('contact')}
                className="relative overflow-hidden rounded-xl bg-gradient-to-r from-action-blue to-energetic-pink px-6 py-3 font-inter text-sm font-semibold text-white shadow-[0_18px_45px_rgba(61,130,247,0.6)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(61,130,247,0.8)] group"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="relative z-10 rounded-xl p-2.5 text-slate-100 transition-all duration-300 hover:bg-white/10 hover:text-action-blue focus:outline-none focus:ring-2 focus:ring-action-blue/60 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
            className="border-t border-white/10 bg-[#0d1532]/95 backdrop-blur-3xl shadow-[0_25px_60px_rgba(5,8,20,0.75)] md:hidden overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-action-blue/50 to-transparent" />
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-2 px-6 py-6"
            >
              {/* Services Mobile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-2"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200/60 px-4">Services</div>
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + index * 0.05 }}
                  >
                    <Link
                      to={service.href}
                      className="block rounded-xl px-4 py-3 font-inter text-sm text-slate-200/80 transition-all duration-200 hover:bg-white/10 hover:text-white hover:pl-6 relative group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-action-blue scale-0 group-hover:scale-100 transition-transform" />
                      {service.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {[
                { to: '/about', label: 'About Us', delay: 0.3 },
                { to: '/blog', label: 'Blog', delay: 0.35 },
                { to: '/contact', label: 'Contact', delay: 0.4 }
              ].map((link) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: link.delay }}
                >
                  <Link
                    to={link.to}
                    className="block rounded-xl px-4 py-3 font-inter text-sm font-semibold uppercase tracking-[0.25em] text-slate-200/70 transition-all duration-200 hover:bg-white/10 hover:text-white hover:pl-6"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 }}
                onClick={() => scrollToSection('pricing')}
                className="block w-full rounded-xl px-4 py-3 text-left font-inter text-sm font-semibold uppercase tracking-[0.25em] text-slate-200/70 transition-all duration-200 hover:bg-white/10 hover:text-white hover:pl-6"
              >
                Pricing
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <Button
                  onClick={() => {
                    scrollToSection('contact')
                    setIsMobileMenuOpen(false)
                  }}
                  className="relative overflow-hidden w-full rounded-xl bg-gradient-to-r from-action-blue to-energetic-pink py-4 font-inter text-sm font-semibold text-white shadow-[0_20px_55px_rgba(61,130,247,0.6)] transition-all hover:shadow-[0_25px_70px_rgba(61,130,247,0.8)] group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">Book My Free Call</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
