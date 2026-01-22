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

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      pulse: number
    }> = []

    const particleCount = Math.min(30, Math.floor(window.innerWidth / 50))
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const isDark = theme === 'dark'

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.pulse += 0.01

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        const pulseOpacity = particle.opacity + Math.sin(particle.pulse) * 0.1

        const particleColor = isDark
          ? `rgba(59, 130, 246, ${pulseOpacity})`
          : `rgba(37, 99, 235, ${pulseOpacity * 0.5})`

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.fill()

        // Glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 6
        )
        gradient.addColorStop(0, isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(37, 99, 235, 0.1)')
        gradient.addColorStop(1, 'transparent')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 6, 0, Math.PI * 2)
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
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dynamic gradients */}
      <div className="absolute inset-0 bg-background transition-colors duration-500" />

      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob ${isDark ? 'bg-purple-900/30' : 'bg-purple-300/30'}`} />
        <div className={`absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000 ${isDark ? 'bg-blue-900/30' : 'bg-blue-300/30'}`} />
        <div className={`absolute -bottom-32 left-[20%] w-[50%] h-[50%] rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-4000 ${isDark ? 'bg-indigo-900/30' : 'bg-indigo-300/30'}`} />
      </div>

      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
    </div>
  )
}