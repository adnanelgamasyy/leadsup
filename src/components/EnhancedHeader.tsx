import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function EnhancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/10 bg-[#070f25]/95 shadow-[0_12px_40px_rgba(3,6,17,0.55)] backdrop-blur-2xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto w-full px-6 sm:px-10 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-action-blue via-energetic-pink to-vibrant-green shadow-[0_12px_30px_rgba(61,130,247,0.45)] transition-transform duration-300 hover:scale-105">
              <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-plus-jakarta-sans text-lg font-semibold tracking-tight text-slate-100">LeadsUp</span>
              <span className="text-[0.65rem] uppercase tracking-[0.4em] text-slate-200/60">We don't do cold calls, we make cash calls.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="relative z-10 hidden items-center gap-8 md:flex">
            <Link
              to="/services"
              className="relative font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:text-white"
            >
              Services
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-action-blue transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              to="/industries"
              className="relative font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:text-white"
            >
              Industries
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-action-blue transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              to="/pricing"
              className="relative font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:text-white"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-action-blue transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              to="/contact"
              className="relative font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:text-white"
            >
              Contact
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-action-blue transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Primary CTA Button */}
          <div className="relative z-10 hidden md:block">
            <Link to="/contact">
              <Button
                className="rounded-2xl bg-action-blue px-5 py-2 font-inter text-sm font-semibold text-white shadow-[0_18px_45px_rgba(61,130,247,0.5)] transition hover:bg-action-blue/90"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="relative z-10 rounded-lg p-2 text-slate-100 transition-colors hover:text-action-blue focus:outline-none focus:ring-2 focus:ring-action-blue/60 focus:ring-offset-2 focus:ring-offset-[#070f25] md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#0d1532]/95 backdrop-blur-2xl shadow-[0_25px_60px_rgba(5,8,20,0.65)] md:hidden">
          <div className="space-y-4 px-6 py-6">
            <Link
              to="/services"
              className="block rounded-xl px-4 py-3 font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>

            <Link
              to="/industries"
              className="block rounded-xl px-4 py-3 font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Industries
            </Link>

            <Link
              to="/pricing"
              className="block rounded-xl px-4 py-3 font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>

            <Link
              to="/contact"
              className="block rounded-xl px-4 py-3 font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <Link to="/contact">
              <Button
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 w-full rounded-xl bg-action-blue py-3 font-inter text-sm font-semibold text-white shadow-[0_20px_55px_rgba(61,130,247,0.5)] transition hover:bg-action-blue/90"
              >
                Book My Free Call
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
