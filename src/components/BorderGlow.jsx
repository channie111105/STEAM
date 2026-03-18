import { useMemo, useRef, useState } from 'react'

export default function BorderGlow({
  children,
  edgeSensitivity = 30,
  glowColor = '40 80 80',
  backgroundColor = '#060010',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  colors = ['#c084fc', '#f472b6', '#38bdf8'],
}) {
  const containerRef = useRef(null)
  const [hoverState, setHoverState] = useState({
    active: false,
    x: 0,
    y: 0,
    strength: 0,
  })

  const gradientPalette = useMemo(() => colors.join(', '), [colors])

  const handlePointerMove = (event) => {
    const container = containerRef.current

    if (!container) {
      return
    }

    const bounds = container.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top

    const nearestEdge = Math.min(x, y, bounds.width - x, bounds.height - y)
    const strength = Math.max(0, 1 - nearestEdge / edgeSensitivity)

    setHoverState({
      active: strength > 0,
      x,
      y,
      strength,
    })
  }

  const handlePointerLeave = () => {
    setHoverState({
      active: false,
      x: 0,
      y: 0,
      strength: 0,
    })
  }

  return (
    <div
      ref={containerRef}
      className={`border-glow-shell ${animated ? 'border-glow-animated' : ''}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        '--border-glow-radius': `${borderRadius}px`,
        '--border-glow-bg': backgroundColor,
        '--border-glow-x': `${hoverState.x}px`,
        '--border-glow-y': `${hoverState.y}px`,
        '--border-glow-opacity': hoverState.active
          ? hoverState.strength * glowIntensity
          : 0,
        '--border-glow-size': `${glowRadius * 3}px`,
        '--border-glow-cone': `${coneSpread}deg`,
        '--border-glow-palette': gradientPalette,
        '--border-glow-fallback': `rgb(${glowColor})`,
      }}
    >
      <div className="border-glow-effect" aria-hidden="true" />
      <div className="border-glow-inner">{children}</div>
    </div>
  )
}
