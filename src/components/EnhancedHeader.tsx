import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function EnhancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
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

  const services = [
    { name: 'Cold Calling', href: '/services/cold-calling' },
    { name: 'Data Generation', href: '/services/data-generation' },
    { name: 'Skip Tracing', href: '/services/skip-tracing' },
    { name: 'Market Research', href: '/services/market-research' },
    { name: 'Acquisitions & Dispositions', href: '/services/acquisitions-dispositions' },
    { name: 'Appointment Setting', href: '/services/appointment-setting' },
  ]

  const industries = [
    { name: 'Real Estate Wholesalers', href: '/industries/real-estate-wholesalers' },
    { name: 'Fix & Flip Investors', href: '/industries/fix-flip-investors' },
    { name: 'Buy & Hold Investors', href: '/industries/buy-hold-investors' },
    { name: 'Real Estate Agents', href: '/industries/real-estate-agents' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Roofing', href: '/industries/roofing' },
    { name: 'Solar', href: '/industries/solar' },
    { name: 'Medical Insurance', href: '/industries/medical-insurance' },
    { name: 'Automotive', href: '/industries/automotive' },
  ]

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
          <Link to="/" className="relative z-10 flex items-center group">
            <img
              src="/leadsup-logo.png"
              alt="The Leads Up Logo"
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
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
                className="flex items-center gap-1 font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:text-white"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute left-0 top-full mt-3 w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#0c162f]/95 shadow-[0_25px_70px_rgba(5,8,18,0.65)] backdrop-blur-2xl transition-all duration-200 ${
                isServicesOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
              }`}>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block px-4 py-3 font-inter text-sm text-slate-200/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <button
                className="flex items-center gap-1 font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:text-white"
              >
                Industries
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute left-0 top-full mt-3 w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#0c162f]/95 shadow-[0_25px_70px_rgba(5,8,18,0.65)] backdrop-blur-2xl transition-all duration-200 ${
                isIndustriesOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
              }`}>
                {industries.map((industry) => (
                  <Link
                    key={industry.name}
                    to={industry.href}
                    className="block px-4 py-3 font-inter text-sm text-slate-200/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className="group relative font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:text-white"
            >
              About Us
              <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-action-blue via-energetic-pink to-vibrant-green transition-all duration-300 group-hover:w-full" />
            </Link>

            <button
              onClick={() => scrollToSection('pricing')}
              className="relative font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:text-white"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-action-blue transition-all duration-300 group-hover:w-full" />
            </button>

            <Link
              to="/blog"
              className="relative font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:text-white"
            >
              Blog
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
            <Button
              onClick={() => scrollToSection('contact')}
              className="rounded-2xl bg-action-blue px-5 py-2 font-inter text-sm font-semibold text-white shadow-[0_18px_45px_rgba(61,130,247,0.5)] transition hover:bg-action-blue/90"
            >
              Get Started
            </Button>
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
            {/* Services Mobile */}
            <div className="space-y-2">
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70">Services</div>
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="block rounded-xl px-4 py-3 font-inter text-sm text-slate-200/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            {/* Industries Mobile */}
            <div className="space-y-2">
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70">Industries</div>
              {industries.map((industry) => (
                <Link
                  key={industry.name}
                  to={industry.href}
                  className="block rounded-xl px-4 py-3 font-inter text-sm text-slate-200/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {industry.name}
                </Link>
              ))}
            </div>

            <Link
              to="/about"
              className="block rounded-xl px-4 py-3 font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full rounded-xl px-4 py-3 text-left font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
            >
              Pricing
            </button>

            <Link
              to="/blog"
              className="block rounded-xl px-4 py-3 font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="block rounded-xl px-4 py-3 font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <Button
              onClick={() => {
                scrollToSection('contact')
                setIsMobileMenuOpen(false)
              }}
              className="mt-4 w-full rounded-xl bg-action-blue py-3 font-inter text-sm font-semibold text-white shadow-[0_20px_55px_rgba(61,130,247,0.5)] transition hover:bg-action-blue/90"
            >
              Book My Free Call
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
