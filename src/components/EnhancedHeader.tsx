import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-10">
            <div className="bg-gradient-to-br from-primary-orange to-orange-600 rounded-lg p-1.5 group-hover:scale-110 transition-transform shadow-md">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            <span className="text-lg font-black text-charcoal">The Leads Up</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 relative z-10">
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-gray-600 hover:text-primary-orange transition-colors duration-200 font-semibold"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-premium-xl border border-border overflow-hidden transition-all duration-200 ${
                isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block px-4 py-3 text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors duration-200 border-b border-border last:border-0"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className="text-gray-600 hover:text-primary-orange transition-colors duration-200 font-semibold relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-orange group-hover:w-full transition-all duration-300" />
            </Link>

            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-600 hover:text-primary-orange transition-colors duration-200 font-semibold relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-orange group-hover:w-full transition-all duration-300" />
            </button>

            <Link
              to="/blog"
              className="text-gray-600 hover:text-primary-orange transition-colors duration-200 font-semibold relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-orange group-hover:w-full transition-all duration-300" />
            </Link>

            <Link
              to="/contact"
              className="text-gray-600 hover:text-primary-orange transition-colors duration-200 font-semibold relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-orange group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden md:block relative z-10">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary-orange hover:bg-primary-orange-dark text-white font-bold px-5 py-2 text-sm rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors relative z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-premium-lg">
          <div className="px-4 py-6 space-y-4">
            {/* Services Mobile */}
            <div className="space-y-2">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Services</div>
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="block pl-4 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <Link
              to="/about"
              className="block text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-lg"
            >
              Pricing
            </button>

            <Link
              to="/blog"
              className="block text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="block text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <Button
              onClick={() => {
                scrollToSection('contact')
                setIsMobileMenuOpen(false)
              }}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg mt-4"
            >
              Book My Free Call
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
