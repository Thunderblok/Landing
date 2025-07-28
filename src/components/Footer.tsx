import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 border-t border-purple-400/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400 sharp-text">Corporate</h3>
            <ul className="space-y-2 font-mono text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About OKO Holding</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Board of Directors</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Executive Team</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Corporate Governance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400 sharp-text">Investors</h3>
            <ul className="space-y-2 font-mono text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Investment Relations</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Financial Reports</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">SEC Filings</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Annual Reports</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400 sharp-text">Technology</h3>
            <ul className="space-y-2 font-mono text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Thunderline Platform</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">DIOS Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">ThunderBlock API</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Developer Portal</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400 sharp-text">Contact</h3>
            <div className="space-y-3 font-mono text-gray-300">
              <div>
                <div className="text-xs text-purple-300 font-bold">INVESTOR RELATIONS</div>
                <a href="mailto:ir@okoholding.com" className="hover:text-purple-400 transition-colors text-sm">
                  ir@okoholding.com
                </a>
              </div>
              <div>
                <div className="text-xs text-purple-300 font-bold">PARTNERSHIPS</div>
                <a href="mailto:partnerships@okoholding.com" className="hover:text-purple-400 transition-colors text-sm">
                  partnerships@okoholding.com
                </a>
              </div>
              <div>
                <div className="text-xs text-purple-300 font-bold">MEDIA INQUIRIES</div>
                <a href="mailto:media@okoholding.com" className="hover:text-purple-400 transition-colors text-sm">
                  media@okoholding.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Portfolio Status Dashboard */}
        <div className="beveled-card rounded p-6 mb-8">
          <h3 className="text-lg font-bold mb-4 text-purple-400 sharp-text text-center">REAL-TIME PORTFOLIO STATUS</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono font-bold text-green-400">THUNDERLINE</span>
              </div>
              <div className="text-xs text-gray-400">Production • 99.9% Uptime</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono font-bold text-blue-400">DIOS</span>
              </div>
              <div className="text-xs text-gray-400">Beta • Global Rollout</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono font-bold text-purple-400">THUNDERBLOCK</span>
              </div>
              <div className="text-xs text-gray-400">Mainnet • Scaling</div>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-purple-400/20">
          <div className="beveled-card p-6 rounded-lg mb-6">
            <p className="text-2xl font-bold text-purple-400 sharp-text mb-2">
              "Building the Infrastructure for the Autonomous Era"
            </p>
            <p className="text-sm font-mono text-gray-400">
              OKO Holding Corporation - Pioneering Intelligence, Infrastructure, and Infinite Possibility
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono text-gray-500">
            <div>
              <div className="font-bold text-purple-300">HEADQUARTERS</div>
              <div>Global Operations • Multi-Jurisdictional</div>
            </div>
            <div>
              <div className="font-bold text-purple-300">ESTABLISHED</div>
              <div>2025 • Next-Generation Holdings</div>
            </div>
            <div>
              <div className="font-bold text-purple-300">PORTFOLIO VALUE</div>
              <div>$500M+ • Strategic Assets</div>
            </div>
          </div>
          
          <p className="text-xs font-mono text-gray-500 mt-6">
            © 2025 OKO Holding Corporation. All rights reserved. 
            This website and its contents are proprietary and confidential.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;