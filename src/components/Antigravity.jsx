import { useEffect, useRef } from 'react'

function hexToRgb(hexColor) {
  const normalized = hexColor.replace('#', '')
  const safeHex =
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => `${char}${char}`)
          .join('')
      : normalized

  const value = Number.parseInt(safeHex, 16)

  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  }
}

function drawCapsule(context, x, y, size, angle) {
  const width = size * 3
  const height = size
  const radius = height / 2

  context.save()
  context.translate(x, y)
  context.rotate(angle)
  context.beginPath()
  context.moveTo(-width / 2 + radius, -height / 2)
  context.lineTo(width / 2 - radius, -height / 2)
  context.arc(width / 2 - radius, 0, radius, -Math.PI / 2, Math.PI / 2)
  context.lineTo(-width / 2 + radius, height / 2)
  context.arc(-width / 2 + radius, 0, radius, Math.PI / 2, (Math.PI * 3) / 2)
  context.closePath()
  context.fill()
  context.restore()
}

export default function Antigravity({
  count = 300,
  magnetRadius = 6,
  ringRadius = 7,
  waveSpeed = 0.4,
  waveAmplitude = 1,
  particleSize = 1.5,
  lerpSpeed = 0.05,
  color = '#5227FF',
  autoAnimate = true,
  particleVariance = 1,
  rotationSpeed = 0,
  depthFactor = 1,
  pulseSpeed = 3,
  particleShape = 'capsule',
  fieldStrength = 10,
  trackCursorGlobally = false,
}) {
  const canvasRef = useRef(null)
  const frameRef = useRef(0)
  const particlesRef = useRef([])
  const pointerRef = useRef({
    active: false,
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return undefined
    }

    const context = canvas.getContext('2d')
    const host = canvas.parentElement

    if (!context || !host) {
      return undefined
    }

    const rgbColor = hexToRgb(color)

    const createParticles = (width, height) => {
      const shortestSide = Math.min(width, height)
      const baseRadius = shortestSide * (0.18 + ringRadius * 0.015)

      particlesRef.current = Array.from({ length: count }, (_, index) => {
        const progress = index / count
        const angle = progress * Math.PI * 2
        const radiusJitter = 1 + (Math.random() - 0.5) * 0.26 * particleVariance
        const depth = 0.8 + Math.random() * Math.max(depthFactor, 0.5)
        const radius = baseRadius * radiusJitter * (0.84 + progress * 0.18)
        const x = width / 2 + Math.cos(angle) * radius
        const y = height / 2 + Math.sin(angle) * radius

        return {
          angle,
          x,
          y,
          targetX: x,
          targetY: y,
          radius,
          phase: Math.random() * Math.PI * 2,
          depth,
        }
      })
    }

    const resize = () => {
      const { clientWidth, clientHeight } = host

      if (!clientWidth || !clientHeight) {
        return
      }

      canvas.width = clientWidth * window.devicePixelRatio
      canvas.height = clientHeight * window.devicePixelRatio
      canvas.style.width = `${clientWidth}px`
      canvas.style.height = `${clientHeight}px`
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
      createParticles(clientWidth, clientHeight)
    }

    const render = (time) => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      const centerX = width / 2
      const centerY = height / 2
      const pulse = 1 + Math.sin(time * 0.001 * pulseSpeed) * 0.04
      const pointer = pointerRef.current.active
        ? pointerRef.current
        : {
            x: centerX + Math.cos(time * 0.0007) * width * 0.18,
            y: centerY + Math.sin(time * 0.0011) * height * 0.18,
          }

      context.clearRect(0, 0, width, height)

      for (const particle of particlesRef.current) {
        const angle =
          particle.angle + time * 0.001 * rotationSpeed + particle.phase * 0.12
        const wave = Math.sin(time * 0.001 * waveSpeed + particle.phase)
        const ringOffset = wave * waveAmplitude * 12 * particle.depth
        const desiredRadius = particle.radius * pulse + ringOffset
        let targetX = centerX + Math.cos(angle) * desiredRadius
        let targetY = centerY + Math.sin(angle) * desiredRadius

        const offsetX = targetX - pointer.x
        const offsetY = targetY - pointer.y
        const distance = Math.hypot(offsetX, offsetY) || 1
        const influenceRadius = Math.max(width, height) * 0.02 * magnetRadius

        if ((pointerRef.current.active || autoAnimate) && distance < influenceRadius) {
          const force = (1 - distance / influenceRadius) * fieldStrength * 1.8
          targetX += (offsetX / distance) * force * 8
          targetY += (offsetY / distance) * force * 8
        }

        particle.targetX = targetX
        particle.targetY = targetY
        particle.x += (particle.targetX - particle.x) * lerpSpeed
        particle.y += (particle.targetY - particle.y) * lerpSpeed

        const alpha = Math.min(0.18 + particle.depth * 0.18, 0.95)
        const size =
          particleSize * (0.9 + Math.sin(time * 0.0016 + particle.phase) * 0.25)

        context.fillStyle = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${alpha})`

        if (particleShape === 'capsule') {
          drawCapsule(context, particle.x, particle.y, size, angle)
        } else {
          context.beginPath()
          context.arc(particle.x, particle.y, size, 0, Math.PI * 2)
          context.fill()
        }
      }

      frameRef.current = window.requestAnimationFrame(render)
    }

    const observer = new ResizeObserver(() => {
      resize()
    })

    const updatePointerPosition = (event) => {
      const bounds = canvas.getBoundingClientRect()
      pointerRef.current = {
        active: true,
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      }
    }

    const resetPointerPosition = () => {
      pointerRef.current = {
        active: false,
        x: 0,
        y: 0,
      }
    }

    resize()
    observer.observe(host)

    if (trackCursorGlobally) {
      window.addEventListener('pointermove', updatePointerPosition)
      window.addEventListener('pointerleave', resetPointerPosition)
    } else {
      canvas.addEventListener('pointermove', updatePointerPosition)
      canvas.addEventListener('pointerleave', resetPointerPosition)
    }

    frameRef.current = window.requestAnimationFrame(render)

    return () => {
      observer.disconnect()

      if (trackCursorGlobally) {
        window.removeEventListener('pointermove', updatePointerPosition)
        window.removeEventListener('pointerleave', resetPointerPosition)
      } else {
        canvas.removeEventListener('pointermove', updatePointerPosition)
        canvas.removeEventListener('pointerleave', resetPointerPosition)
      }

      window.cancelAnimationFrame(frameRef.current)
    }
  }, [
    autoAnimate,
    color,
    count,
    depthFactor,
    fieldStrength,
    lerpSpeed,
    magnetRadius,
    particleShape,
    particleSize,
    particleVariance,
    pulseSpeed,
    ringRadius,
    rotationSpeed,
    trackCursorGlobally,
    waveAmplitude,
    waveSpeed,
  ])

  return <canvas className="antigravity-canvas" ref={canvasRef} aria-hidden="true" />
}
