'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function HeroBanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Battlezone-style hex grid animation
    const hexagons: Array<{x: number, y: number, size: number, glow: number, glowDirection: number}> = []
    
    // Create hex grid
    for (let x = 0; x < canvas.width; x += 80) {
      for (let y = 0; y < canvas.height; y += 80) {
        hexagons.push({
          x: x + (Math.random() - 0.5) * 40,
          y: y + (Math.random() - 0.5) * 40,
          size: 20 + Math.random() * 10,
          glow: Math.random(),
          glowDirection: Math.random() > 0.5 ? 1 : -1
        })
      }
    }

    function drawHexagon(x: number, y: number, size: number, glow: number) {
      if (!ctx) return
      
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3
        const hx = x + size * Math.cos(angle)
        const hy = y + size * Math.sin(angle)
        if (i === 0) {
          ctx.moveTo(hx, hy)
        } else {
          ctx.lineTo(hx, hy)
        }
      }
      ctx.closePath()
      
      const alpha = 0.1 + glow * 0.4
      ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`
      ctx.lineWidth = 1 + glow * 2
      ctx.stroke()
      
      if (glow > 0.7) {
        ctx.shadowBlur = 20
        ctx.shadowColor = 'cyan'
        ctx.stroke()
        ctx.shadowBlur = 0
      }
    }

    function animate() {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      hexagons.forEach(hex => {
        hex.glow += hex.glowDirection * 0.02
        if (hex.glow > 1) {
          hex.glow = 1
          hex.glowDirection = -1
        } else if (hex.glow < 0) {
          hex.glow = 0
          hex.glowDirection = 1
        }
        
        drawHexagon(hex.x, hex.y, hex.size, hex.glow)
      })
      
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #000000 100%)' }}
      />
      
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}
        >
          A New Dawn in
          <br />
          <span className="text-oko-cyan">Distributed Intelligence</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl mb-4 text-gray-200 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          OKO Holding Corp presents…
        </motion.p>
        
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button className="bg-gradient-to-r from-oko-blue to-oko-purple px-6 py-3 rounded-lg text-lg font-semibold text-white hover:from-oko-purple hover:to-oko-cyan transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 border border-oko-cyan/30">
            Meet DIOS – Our Distributed Intelligent Operating System
          </button>
        </motion.div>
        
        <motion.div 
          className="glass-panel rounded-lg p-6 inline-block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-sm text-oko-cyan mb-2">THUNDERLINE DASHBOARD</div>
          <div className="battlezone-grid h-32 w-64 rounded border border-oko-cyan/30 flex items-center justify-center">
            <span className="text-battlezone font-mono text-xs">[ Live System Monitoring ]</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}