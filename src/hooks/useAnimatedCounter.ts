import { useState, useEffect, useRef } from 'react'

interface UseAnimatedCounterOptions {
  end: number
  duration?: number
  decimals?: number
  separator?: string
  suffix?: string
  prefix?: string
  startOnView?: boolean
}

export function useAnimatedCounter({
  end,
  duration = 2000,
  decimals = 0,
  separator = ',',
  suffix = '',
  prefix = '',
  startOnView = true
}: UseAnimatedCounterOptions) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(!startOnView)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!startOnView) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [startOnView, isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)

      // Easing function (easeOutCubic)
      const easeProgress = 1 - Math.pow(1 - progress, 3)

      setCount(Math.floor(easeProgress * end))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }, [end, duration, isVisible])

  const formatNumber = (num: number): string => {
    const fixed = num.toFixed(decimals)
    const parts = fixed.split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    return prefix + parts.join('.') + suffix
  }

  return {
    count: formatNumber(count),
    ref: elementRef,
    isVisible
  }
}
