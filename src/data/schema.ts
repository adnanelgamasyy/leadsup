// Comprehensive Schema.org structured data for SEO

// Organization schema - use on every page
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Leads Up',
  alternateName: 'LeadsUp',
  url: 'https://leadsupcallcenter.com',
  logo: 'https://leadsupcallcenter.com/leadsup-logo.png',
  description: 'Elite cold calling and lead generation services for real estate investors. Professional cold callers, skip tracing, and data generation to build predictable deal pipelines.',
  foundingDate: '2020',
  email: 'info@leadsupcallcenter.com',
  telephone: '+1-551-358-4982',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
    addressLocality: 'United States'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-551-358-4982',
    contactType: 'Customer Service',
    email: 'info@leadsupcallcenter.com',
    areaServed: 'US',
    availableLanguage: ['English']
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61583539406813',
    'https://www.instagram.com/leadsupcallcenter',
    'https://www.linkedin.com/company/leadsup-call-center/',
    'https://www.youtube.com/@leadsupcallcenter'
  ]
}

// Service schema generator - use on service pages
export const createServiceSchema = (serviceName: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: description,
  provider: {
    '@type': 'Organization',
    name: 'The Leads Up',
    url: 'https://leadsupcallcenter.com'
  },
  serviceType: 'Lead Generation',
  areaServed: {
    '@type': 'Country',
    name: 'United States'
  },
  url: url,
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD'
  }
})

// Cold Calling Service
export const coldCallingServiceSchema = createServiceSchema(
  'Professional Cold Calling Services',
  'Elite cold calling services for real estate investors. Our trained cold callers help you find motivated sellers and close more deals.',
  'https://leadsupcallcenter.com/services/cold-calling'
)

// Skip Tracing Service
export const skipTracingServiceSchema = createServiceSchema(
  'Skip Tracing Services',
  'Professional skip tracing to find accurate contact information for property owners and motivated sellers.',
  'https://leadsupcallcenter.com/services/skip-tracing'
)

// Data Generation Service
export const dataGenerationServiceSchema = createServiceSchema(
  'Lead Data Generation',
  'High-quality lead lists and data generation services for real estate investors targeting motivated sellers.',
  'https://leadsupcallcenter.com/services/data-generation'
)

// Market Research Service
export const marketResearchServiceSchema = createServiceSchema(
  'Real Estate Market Research',
  'Comprehensive market research and analysis to identify the best opportunities in your target markets.',
  'https://leadsupcallcenter.com/services/market-research'
)

// Acquisitions & Dispositions Service
export const acquisitionsDispositionsServiceSchema = createServiceSchema(
  'Acquisitions & Dispositions',
  'Expert acquisition and disposition services to help you buy and sell properties efficiently.',
  'https://leadsupcallcenter.com/services/acquisitions-dispositions'
)

// Appointment Setting Service
export const appointmentSettingServiceSchema = createServiceSchema(
  'Appointment Setting Services',
  'Professional appointment setting to fill your calendar with qualified leads and motivated sellers.',
  'https://leadsupcallcenter.com/services/appointment-setting'
)

// FAQ schema generator
export const createFAQSchema = (faqItems: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
})

// Common FAQ items for real estate lead generation
export const commonFAQs = [
  {
    question: 'How does cold calling work for real estate?',
    answer: 'Our professional cold callers contact property owners from your targeted lists, engage them in conversation, identify motivated sellers, and schedule appointments for your acquisitions team.'
  },
  {
    question: 'What is skip tracing?',
    answer: 'Skip tracing is the process of locating accurate contact information for property owners, including phone numbers, email addresses, and mailing addresses to help you reach motivated sellers.'
  },
  {
    question: 'How quickly can I get started?',
    answer: 'Most clients can be onboarded and have their first cold calling campaign running within 3-5 business days after initial setup and list preparation.'
  },
  {
    question: 'Do you provide the lead lists?',
    answer: 'Yes, we offer comprehensive data generation services to build targeted lead lists based on your specific criteria, or you can provide your own lists for us to call.'
  },
  {
    question: 'What industries do you serve?',
    answer: 'While we specialize in real estate (wholesalers, fix & flip investors, buy & hold investors, and real estate agents), we also serve roofing, solar, medical insurance, and automotive industries.'
  }
]

// Article schema generator - use for blog posts
export const createArticleSchema = (
  title: string,
  description: string,
  url: string,
  imageUrl: string,
  datePublished: string,
  dateModified: string,
  authorName: string = 'The Leads Up Team'
) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description: description,
  image: imageUrl,
  datePublished: datePublished,
  dateModified: dateModified,
  author: {
    '@type': 'Organization',
    name: authorName,
    url: 'https://leadsupcallcenter.com'
  },
  publisher: {
    '@type': 'Organization',
    name: 'The Leads Up',
    logo: {
      '@type': 'ImageObject',
      url: 'https://leadsupcallcenter.com/leadsup-logo.png'
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': url
  }
})

// BreadcrumbList schema generator
export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
})

// Local Business schema - can be used if you have a physical location
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'The Leads Up',
  image: 'https://leadsupcallcenter.com/leadsup-logo.png',
  '@id': 'https://leadsupcallcenter.com',
  url: 'https://leadsupcallcenter.com',
  telephone: '+1-551-358-4982',
  email: 'info@leadsupcallcenter.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US'
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00'
  }
}

// Website schema - use on homepage
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'The Leads Up',
  alternateName: 'LeadsUp',
  url: 'https://leadsupcallcenter.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://leadsupcallcenter.com/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
}

// Aggregate rating schema - use if you have reviews/testimonials
export const createAggregateRatingSchema = (ratingValue: number, reviewCount: number) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Leads Up',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: ratingValue.toString(),
    reviewCount: reviewCount.toString(),
    bestRating: '5',
    worstRating: '1'
  }
})

// Review schema generator
export const createReviewSchema = (
  reviewerName: string,
  reviewText: string,
  ratingValue: number,
  datePublished: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'Service',
    name: 'The Leads Up - Lead Generation Services'
  },
  author: {
    '@type': 'Person',
    name: reviewerName
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: ratingValue.toString(),
    bestRating: '5',
    worstRating: '1'
  },
  reviewBody: reviewText,
  datePublished: datePublished
})
