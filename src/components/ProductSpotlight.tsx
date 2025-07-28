'use client'

import { motion } from 'framer-motion'

export default function ProductSpotlight() {
  const features = [
    { icon: '⚙️', text: 'Decentralized by Design' },
    { icon: '🔒', text: 'Ethics-Embedded & Privacy-First' },
    { icon: '🌐', text: 'Open-Source Core, Secure Edge' },
    { icon: '🤖', text: 'Ready for AI, Humans & Everything Between' },
    { icon: '🚀', text: 'Built for Planetary Scale Operations' },
  ]

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textShadow: '0 0 8px rgba(147, 51, 234, 0.6)' }}
        >
          <span className="text-purple-400">OUR VISION</span>
        </motion.h2>
        
        <motion.p 
            // Removed for DIOS_Gate revamp
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          "We don't just build products—we orchestrate revolutions in how data, automation, and intelligence shape the world."
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-panel rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <p className="text-base font-medium text-gray-200">{feature.text}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="hex-pattern bg-gradient-to-r from-transparent via-purple-400/10 to-transparent h-px w-full mb-8"></div>
          <p className="text-xl text-gray-400 font-mono">
            [ INTELLIGENCE • INFRASTRUCTURE • INFINITE POSSIBILITY ]
          </p>
        </motion.div>
      </div>
    </section>
  )
}