import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  ogType?: string
  canonical?: string
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage = '/Leadsup Logo colored.svg',
  ogType = 'website',
  canonical
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = `${title} | The Leads Up`

    // Set or update meta tags
    const setMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${property}"]`)

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, property)
        document.head.appendChild(element)
      }

      element.setAttribute('content', content)
    }

    // Basic meta tags
    setMetaTag('description', description)
    if (keywords) {
      setMetaTag('keywords', keywords)
    }

    // Open Graph tags
    setMetaTag('og:title', title, true)
    setMetaTag('og:description', description, true)
    setMetaTag('og:type', ogType, true)
    setMetaTag('og:image', ogImage, true)
    setMetaTag('og:site_name', 'The Leads Up', true)

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image')
    setMetaTag('twitter:title', title)
    setMetaTag('twitter:description', description)
    setMetaTag('twitter:image', ogImage)

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = canonical
    }

    // Structured data for organization
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'The Leads Up',
      description: 'Elite cold calling and lead generation for real estate investors',
      url: 'https://theleadsup.com',
      logo: 'https://theleadsup.com/Leadsup Logo colored.svg',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-888-555-1234',
        contactType: 'Sales',
        email: 'hello@theleadsup.com'
      },
      sameAs: [
        'https://facebook.com/theleadsup',
        'https://twitter.com/theleadsup',
        'https://linkedin.com/company/theleadsup',
        'https://instagram.com/theleadsup'
      ]
    }

    let scriptTag = document.querySelector('script[type="application/ld+json"]')
    if (!scriptTag) {
      scriptTag = document.createElement('script')
      scriptTag.setAttribute('type', 'application/ld+json')
      document.head.appendChild(scriptTag)
    }
    scriptTag.textContent = JSON.stringify(structuredData)
  }, [title, description, keywords, ogImage, ogType, canonical])

  return null
}
