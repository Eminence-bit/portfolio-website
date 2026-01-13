"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "./theme-provider"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Reduced particle count for better performance
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      pulse: number
    }> = []

    // Create fewer particles
    const particleCount = Math.min(25, Math.floor(window.innerWidth / 60))
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles with pulsing effect
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.pulse += 0.015

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Pulsing opacity
        const pulseOpacity = particle.opacity + Math.sin(particle.pulse) * 0.1

        // Different colors for light/dark mode
        const isDark = theme === 'dark'
        const particleColor = isDark 
          ? `rgba(59, 130, 246, ${pulseOpacity})`
          : `rgba(59, 130, 246, ${pulseOpacity * 0.6})`

        // Draw particle with glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 4
        )
        gradient.addColorStop(0, particleColor)
        gradient.addColorStop(1, isDark ? 'rgba(59, 130, 246, 0)' : 'rgba(59, 130, 246, 0)')

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <div className="fixed inset-0 -z-10">
      {/* Static gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: isDark 
            ? `
              radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(96, 165, 250, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(147, 197, 253, 0.04) 0%, transparent 50%),
              linear-gradient(135deg, #0a0e1a 0%, #1a1f3a 50%, #0a0e1a 100%)
            `
            : `
              radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(96, 165, 250, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(147, 197, 253, 0.02) 0%, transparent 50%),
              linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)
            `
        }}
      />
      {/* Animated canvas overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
    </div>
  )
}