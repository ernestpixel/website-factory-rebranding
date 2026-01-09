"use client"

import { useState, useEffect, useRef } from "react"

interface UseCounterOptions {
  start?: number
  end: number
  duration?: number
  startOnView?: boolean
}

export function useCounter({ start = 0, end, duration = 2000, startOnView = true }: UseCounterOptions) {
  const [count, setCount] = useState(start)
  const [hasStarted, setHasStarted] = useState(!startOnView)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!startOnView) return

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [startOnView, hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTimestamp: number | null = null
    // Check if we need to preserve decimals
    const hasDecimals = start % 1 !== 0 || end % 1 !== 0
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // Ease out cubic
      const newCount = start + (end - start) * eased
      
      // Preserve decimals if either start or end has decimals, otherwise round down
      setCount(hasDecimals ? newCount : Math.floor(newCount))

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        // Ensure final value is exact
        setCount(end)
      }
    }

    requestAnimationFrame(step)
  }, [hasStarted, start, end, duration])

  return { count, ref }
}
