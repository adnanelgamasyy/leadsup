export default function SkipToContent() {
  const handleSkip = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.focus()
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="sr-only focus-within:not-sr-only">
      <a
        href="#main-content"
        onClick={(e) => handleSkip(e, 'main-content')}
        className="fixed top-4 left-4 z-[100] bg-action-blue text-white px-6 py-3 rounded-xl font-semibold shadow-premium-xl focus:outline-none focus:ring-4 focus:ring-action-blue/50 transition-all"
      >
        Skip to main content
      </a>
    </div>
  )
}
