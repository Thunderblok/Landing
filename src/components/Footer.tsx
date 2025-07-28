import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 border-t border-cyan-400/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400 neon-text">Contact</h3>
            <p className="font-mono text-gray-300">
              <a href="mailto:launch@okoholding.com" className="hover:text-cyan-400 transition-colors neon-glow">
                launch@okoholding.com
              </a>
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400 neon-text">Resources</h3>
            <ul className="space-y-2 font-mono text-gray-300">
              <li><a href="#" className="hover:text-cyan-400 transition-colors hover:neon-text">Legal</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors hover:neon-text">Whitepaper</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors hover:neon-text">GitHub</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400 neon-text">System Status</h3>
            <div className="glass-panel rounded p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-green-400">DIOS Online</span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-cyan-400">Thunderline Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-purple-400">Thundercrown Deployed</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-cyan-400/20">
          <p className="text-2xl font-bold text-green-400 neon-text mb-4">
            🌩️ "An Emergent Intelligence Company"
          </p>
          <p className="text-sm font-mono text-gray-400">
            © 2025 OKO Holding Corp. All rights reserved. | Built with DIOS Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;