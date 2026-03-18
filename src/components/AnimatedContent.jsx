import { useEffect, useMemo, useRef, useState } from 'react'

const easingMap = {
  linear: 'linear',
  'power3.out': 'cubic-bezier(0.22, 1, 0.36, 1)',
  'power2.out': 'cubic-bezier(0.25, 1, 0.5, 1)',
}

export default function AnimatedContent({
  children,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
}) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = containerRef.current

    if (!element) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  const initialTransform = useMemo(() => {
    const offset = reverse ? -distance : distance

    if (direction === 'horizontal') {
      return `translate3d(${offset}px, 0, 0) scale(${scale})`
    }

    return `translate3d(0, ${offset}px, 0) scale(${scale})`
  }, [direction, distance, reverse, scale])

  return (
    <div
      ref={containerRef}
      style={{
        opacity: isVisible ? 1 : animateOpacity ? initialOpacity : 1,
        transform: isVisible ? 'translate3d(0, 0, 0) scale(1)' : initialTransform,
        transition: `transform ${duration}s ${easingMap[ease] || ease} ${delay}s, opacity ${duration}s ${easingMap[ease] || ease} ${delay}s`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  )
}
