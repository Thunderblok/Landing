'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-oko-cyan/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-oko-cyan">Contact</h3>
            <p className="font-mono text-gray-300">
              <a href="mailto:launch@okoholding.com" className="hover:text-oko-cyan transition-colors">
                launch@okoholding.com
              </a>
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-oko-cyan">Resources</h3>
            <ul className="space-y-2 font-mono text-gray-300">
              <li><a href="#" className="hover:text-oko-cyan transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-oko-cyan transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-oko-cyan transition-colors">GitHub</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-oko-cyan">System Status</h3>
            <div className="glass-panel rounded p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-battlezone rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-battlezone">DIOS Online</span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-oko-cyan rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-oko-cyan">Thunderline Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-oko-purple rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-oko-purple">Thundercrown Deployed</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center pt-8 border-t border-oko-cyan/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl font-bold text-battlezone neon-text mb-4">
            🌩️ "An Emergent Intelligence Company"
          </p>
          <p className="text-sm font-mono text-gray-400">
            © 2025 OKO Holding Corp. All rights reserved. | Built with DIOS Technology
          </p>
        </motion.div>
      </div>
    </footer>
  )
}