"use client"

import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const quickLinks = {
  services: [
    { name: 'Our Services', href: '/services' },
    { name: 'Industries We Serve', href: '/industries' },
    { name: 'Pricing Plans', href: '/pricing' },
    { name: 'Contact Us', href: '/contact' }
  ],
  company: [
    { name: 'About LeadsUp', href: '/about' },
    { name: 'Blog & Resources', href: '/blog' },
    { name: 'Book Strategy Call', href: '/contact' },
    { name: 'Get Started', href: '/pricing' }
  ]
}

const socialLinks = [
  { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61583539406813', label: 'Facebook' },
  { Icon: Instagram, href: 'https://www.instagram.com/leadsupcallcenter', label: 'Instagram' },
  { Icon: Youtube, href: 'https://www.youtube.com/@leadsupcallcenter', label: 'YouTube' }
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#030712] via-[#081126] to-[#050a18] py-20">
      <div className="absolute inset-0">
        <div className="absolute left-[12%] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-action-blue/18 blur-[180px]" />
        <div className="absolute right-[10%] top-[35%] h-[22rem] w-[22rem] rounded-full bg-energetic-pink/18 blur-[150px]" />
        <div className="absolute left-1/2 bottom-[-7rem] h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-vibrant-green/12 blur-[150px]" />
      </div>

      <div className="page-shell relative mx-auto max-w-[1200px] space-y-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr,0.9fr]">
          <div className="space-y-6">
            <div className="flex flex-col gap-3">
              <a href="/" className="inline-flex items-center">
                <img
                  src="/leadsup-logo.png"
                  alt="The Leads Up Logo"
                  className="h-24 w-auto"
                />
              </a>
              <p className="text-[0.75rem] uppercase tracking-[0.3em] text-slate-300/60 font-semibold">
                We don&apos;t do cold calls, we make cash calls.
              </p>
              <p className="max-w-sm font-inter text-sm text-slate-200/80">
                The dedicated acquisitions engine for investors and operators. Elite callers, precision data, and battle-tested playbooks on tap.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-action-blue hover:text-action-blue"
                >
                  <social.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-flex max-w-xs items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-inter text-xs uppercase tracking-[0.35em] text-slate-100 transition hover:border-action-blue hover:text-action-blue"
            >
              Book a 15-min strategy call
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-6 text-sm font-inter text-slate-200/80 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <h3 className="font-plus-jakarta-sans text-sm font-semibold uppercase tracking-[0.3em] text-slate-100">
                Services
              </h3>
              <ul className="mt-5 space-y-3">
                {quickLinks.services.map((item) => (
                  <li key={item.name}>
                    <a className="transition hover:text-action-blue" href={item.href}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-plus-jakarta-sans text-sm font-semibold uppercase tracking-[0.3em] text-slate-100">
                Company
              </h3>
              <ul className="mt-5 space-y-3">
                {quickLinks.company.map((item) => (
                  <li key={item.name}>
                    <a className="transition hover:text-action-blue" href={item.href}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-plus-jakarta-sans text-sm font-semibold uppercase tracking-[0.3em] text-slate-100">
              Contact
            </h3>
            <ul className="space-y-4 font-inter text-sm text-slate-200/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-action-blue" />
                <span>Operated by Adnan Ahmed<br />Registered in WY, USA<br />Operating nationwide</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-energetic-pink" />
                <a className="transition hover:text-action-blue" href="tel:+15513584982">
                  +1 (551) 358-4982
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-vibrant-green" />
                <a className="transition hover:text-action-blue" href="mailto:info@leadsupcallcenter.com">
                  info@leadsupcallcenter.com
                </a>
              </li>
            </ul>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-xs text-slate-200/70">
              <p className="font-plus-jakarta-sans text-sm font-semibold text-slate-50">
                Support hours
              </p>
              <p className="mt-1">Monday – Friday · 9am – 6pm EST</p>
              <p className="mt-2">
                24/7 campaign monitoring with real-time alerts for escalated opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 font-inter text-xs text-slate-200/60 sm:flex-row sm:items-center sm:justify-between">
          <p> 2024 LeadsUp Call Center. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a className="transition hover:text-action-blue" href="/privacy-policy">
              Privacy Policy
            </a>
            <a className="transition hover:text-action-blue" href="/terms-of-service">
              Terms of Service
            </a>
            <a className="transition hover:text-action-blue" href="/blog">
              Latest insights
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}