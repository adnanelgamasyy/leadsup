import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  canonical?: string
  schemaMarkup?: object | object[]
  author?: string
  publishedDate?: string
  modifiedDate?: string
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage = 'https://theleadsup.com/leadsup-og.png',
  ogType = 'website',
  canonical,
  schemaMarkup,
  author,
  publishedDate,
  modifiedDate
}: SEOProps) {
  const fullTitle = `${title} | The Leads Up`
  const pageUrl = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://theleadsup.com')

  // Ensure ogImage is a full URL
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `https://theleadsup.com${ogImage}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="The Leads Up" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Article specific tags */}
      {ogType === 'article' && author && (
        <>
          <meta property="article:author" content={author} />
          {publishedDate && <meta property="article:published_time" content={publishedDate} />}
          {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
        </>
      )}

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Schema.org structured data */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schemaMarkup) ? schemaMarkup : [schemaMarkup])}
        </script>
      )}
    </Helmet>
  )
}
