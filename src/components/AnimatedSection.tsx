import { useEffect, useRef, useState, ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right'
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fade-up'
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animationClasses = {
    'fade-up': 'translate-y-8 opacity-0',
    'fade-in': 'opacity-0',
    'slide-left': 'translate-x-8 opacity-0',
    'slide-right': '-translate-x-8 opacity-0',
  }

  const visibleClasses = 'translate-y-0 translate-x-0 opacity-100'

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? visibleClasses : animationClasses[animation]
      } ${className}`}
    >
      {children}
    </div>
  )
}
