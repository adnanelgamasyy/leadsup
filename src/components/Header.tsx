"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '/services', color: 'action-blue' },
    { name: 'Industries', href: '/industries', color: 'energetic-pink' },
    { name: 'About', href: '/about', color: 'vibrant-green' },
    { name: 'Blog', href: '/blog', color: 'bright-amber' },
    { name: 'Pricing', href: '/pricing', color: 'action-blue' },
    { name: 'Contact', href: '/contact', color: 'energetic-pink' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#070f25]/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(3,6,17,0.55)] border-b border-white/10' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center group relative z-10">
            <img
              src="/leadsup-logo.png"
              alt="The Leads Up Logo"
              className="h-10 w-auto group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-slate-200/80 hover:text-${link.color} transition-colors duration-200 font-bold text-xs uppercase tracking-[0.15em] relative group`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-${link.color} group-hover:w-full transition-all duration-300`} />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block relative z-10">
            <button
              className="group relative overflow-hidden bg-gradient-to-r from-action-blue to-energetic-pink text-white font-bold text-xs px-5 py-2 rounded-lg shadow-[0_15px_40px_rgba(61,130,247,0.45)] hover:shadow-[0_18px_45px_rgba(61,130,247,0.55)] hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/contact'}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10">Get Started</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-100 hover:text-action-blue transition-colors relative z-10 p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0d1532]/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_25px_60px_rgba(5,8,20,0.65)]">
          <div className="px-6 py-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-slate-200/80 hover:text-white transition-colors duration-200 font-bold text-sm uppercase tracking-[0.15em] px-4 py-2.5 rounded-lg hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              className="group relative overflow-hidden w-full bg-gradient-to-r from-action-blue to-energetic-pink text-white font-bold text-sm py-3 rounded-lg shadow-[0_20px_55px_rgba(61,130,247,0.5)] hover:shadow-[0_25px_60px_rgba(61,130,247,0.6)] transition-all duration-300 mt-4"
              onClick={() => {
                setIsMobileMenuOpen(false)
                window.location.href = '/contact'
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10">Get Started</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}