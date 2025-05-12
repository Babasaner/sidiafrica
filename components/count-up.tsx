"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface CountUpProps {
  end: number
  duration?: number
  start?: number
}

export default function CountUp({ end, duration = 2000, start = 0 }: CountUpProps) {
  const [count, setCount] = useState(start)
  const countRef = useRef<number>(start)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const currentCount = Math.floor(progress * (end - start) + start)

        countRef.current = currentCount
        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animateCount)
        }
      }

      requestAnimationFrame(animateCount)
    }
  }, [inView, start, end, duration])

  return <span ref={ref}>{count}</span>
}
