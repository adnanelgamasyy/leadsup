import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function EnhancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false)
  const location = useLocation()
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const industriesDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false)
      }
      if (industriesDropdownRef.current && !industriesDropdownRef.current.contains(event.target as Node)) {
        setIsIndustriesDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const servicesMenuItems = [
    { name: 'All Services', path: '/services' },
    { name: 'Cold Calling', path: '/services/cold-calling' },
    { name: 'Data Generation', path: '/services/data-generation' },
    { name: 'Skip Tracing', path: '/services/skip-tracing' },
    { name: 'Market Research', path: '/services/market-research' },
    { name: 'Acquisitions & Dispositions', path: '/services/acquisitions-dispositions' },
    { name: 'Appointment Setting', path: '/services/appointment-setting' }
  ]

  const industriesMenuItems = [
    { name: 'All Industries', path: '/industries' },
    { name: 'Real Estate Wholesalers', path: '/industries/real-estate-wholesalers' },
    { name: 'Fix & Flip Investors', path: '/industries/fix-flip-investors' },
    { name: 'Buy & Hold Investors', path: '/industries/buy-hold-investors' },
    { name: 'Real Estate Agents', path: '/industries/real-estate-agents' },
    { name: 'Real Estate (PPL)', path: '/industries/real-estate' },
    { name: 'Roofing Companies', path: '/industries/roofing' },
    { name: 'Solar Industry', path: '/industries/solar' },
    { name: 'Medical Insurance', path: '/industries/medical-insurance' },
    { name: 'Automotive', path: '/industries/automotive' }
  ]

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
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10 flex items-center group">
            <img
              src="/leadsup-logo.png"
              alt="The Leads Up Logo"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="relative z-10 hidden items-center gap-6 md:flex">
            {/* Services Dropdown */}
            <div ref={servicesDropdownRef} className="relative">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="flex items-center gap-1 font-inter text-xs font-bold uppercase tracking-[0.15em] text-slate-200/80 transition-colors duration-200 hover:text-action-blue"
              >
                Services
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesDropdownOpen && (
                <div className="absolute left-0 top-full mt-3 w-72 rounded-xl border border-white/20 bg-[#0a1128]/98 shadow-[0_20px_50px_rgba(5,8,20,0.7)] backdrop-blur-3xl overflow-hidden">
                  <div className="p-2">
                    {servicesMenuItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={() => setIsServicesDropdownOpen(false)}
                        className="group flex items-center gap-3 rounded-lg px-4 py-2.5 font-inter text-sm text-slate-200/85 transition-all duration-150 hover:bg-gradient-to-r hover:from-action-blue/20 hover:to-action-blue/10 hover:text-white"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-action-blue/50 group-hover:bg-action-blue transition-colors" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div ref={industriesDropdownRef} className="relative">
              <button
                onClick={() => setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen)}
                className="flex items-center gap-1 font-inter text-xs font-bold uppercase tracking-[0.15em] text-slate-200/80 transition-colors duration-200 hover:text-energetic-pink"
              >
                Industries
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isIndustriesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isIndustriesDropdownOpen && (
                <div className="absolute left-0 top-full mt-3 w-72 rounded-xl border border-white/20 bg-[#0a1128]/98 shadow-[0_20px_50px_rgba(5,8,20,0.7)] backdrop-blur-3xl overflow-hidden">
                  <div className="p-2">
                    {industriesMenuItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={() => setIsIndustriesDropdownOpen(false)}
                        className="group flex items-center gap-3 rounded-lg px-4 py-2.5 font-inter text-sm text-slate-200/85 transition-all duration-150 hover:bg-gradient-to-r hover:from-energetic-pink/20 hover:to-energetic-pink/10 hover:text-white"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-energetic-pink/50 group-hover:bg-energetic-pink transition-colors" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="relative group font-inter text-xs font-bold uppercase tracking-[0.15em] text-slate-200/80 transition-colors duration-200 hover:text-vibrant-green"
            >
              About
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-vibrant-green transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              to="/blog"
              className="relative group font-inter text-xs font-bold uppercase tracking-[0.15em] text-slate-200/80 transition-colors duration-200 hover:text-bright-amber"
            >
              Blog
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-bright-amber transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              to="/pricing"
              className="relative group font-inter text-xs font-bold uppercase tracking-[0.15em] text-slate-200/80 transition-colors duration-200 hover:text-action-blue"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-action-blue transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              to="/contact"
              className="relative group font-inter text-xs font-bold uppercase tracking-[0.15em] text-slate-200/80 transition-colors duration-200 hover:text-energetic-pink"
            >
              Contact
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-energetic-pink transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Primary CTA Button */}
          <div className="relative z-10 hidden md:block">
            <Link to="/contact">
              <button
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-action-blue to-energetic-pink px-5 py-2 font-inter text-xs font-bold text-white shadow-[0_15px_40px_rgba(61,130,247,0.45)] hover:shadow-[0_18px_45px_rgba(61,130,247,0.55)] transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10">Get Started</span>
              </button>
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
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="mt-2 space-y-1 pl-4">
                  {servicesMenuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block rounded-lg px-4 py-2 font-inter text-sm text-slate-200/70 transition-colors duration-150 hover:bg-white/10 hover:text-white"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setIsMobileServicesOpen(false)
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                Industries
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileIndustriesOpen && (
                <div className="mt-2 space-y-1 pl-4">
                  {industriesMenuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block rounded-lg px-4 py-2 font-inter text-sm text-slate-200/70 transition-colors duration-150 hover:bg-white/10 hover:text-white"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setIsMobileIndustriesOpen(false)
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="block rounded-xl px-4 py-3 font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>

            <Link
              to="/blog"
              className="block rounded-xl px-4 py-3 font-inter text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
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
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative overflow-hidden mt-4 w-full rounded-xl bg-gradient-to-r from-action-blue to-energetic-pink py-3 font-inter text-sm font-semibold text-white shadow-[0_20px_55px_rgba(61,130,247,0.5)] hover:shadow-[0_25px_60px_rgba(61,130,247,0.6)] transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10">Book My Free Call</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
