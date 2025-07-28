import React from 'react';

export default function ProductSpotlight() {
  const portfolioCompanies = [
    {
      name: 'THUNDERLINE',
      category: 'AI Platform',
      description: 'Next-generation artificial intelligence ecosystem for enterprise automation and cognitive computing.',
      status: 'FLAGSHIP',
      metrics: '10M+ API Calls/Day'
    },
    {
      name: 'DIOS',
      category: 'Distributed OS',
      description: 'Self-healing operating system for distributed networks and autonomous infrastructure management.',
      status: 'CORE',
      metrics: '99.99% Uptime'
    },
    {
      name: 'THUNDERBLOCK',
      category: 'Blockchain',
      description: 'Self-governing blockchain infrastructure for decentralized applications and autonomous economics.',
      status: 'STRATEGIC',
      metrics: '10K+ TPS'
    },
    {
      name: 'QUANTUM VENTURES',
      category: 'R&D Division',
      description: 'Advanced research into quantum computing, neural networks, and next-generation technologies.',
      status: 'INNOVATION',
      metrics: '25+ Patents'
    },
    {
      name: 'EDGE DYNAMICS',
      category: 'IoT Platform',
      description: 'Edge computing solutions for industrial IoT, smart cities, and autonomous vehicle networks.',
      status: 'GROWTH',
      metrics: '1M+ Devices'
    },
    {
      name: 'CARBON NEUTRAL AI',
      category: 'Sustainability',
      description: 'Green computing initiatives, carbon-neutral data centers, and sustainable AI infrastructure.',
      status: 'IMPACT',
      metrics: '100% Renewable'
    }
  ]

  const statusColors = {
    FLAGSHIP: 'text-purple-400',
    CORE: 'text-purple-300',
    STRATEGIC: 'text-purple-500',
    INNOVATION: 'text-blue-400',
    GROWTH: 'text-green-400',
    IMPACT: 'text-emerald-400'
  }

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white sharp-text">
          <span className="text-purple-400">PORTFOLIO COMPANIES</span>
        </h2>
        
        <p className="text-xl text-gray-300 font-mono mb-16 max-w-4xl mx-auto leading-relaxed">
          "We don't just invest in the future—we architect it. Our portfolio represents the foundational 
          technologies powering the next era of <span className="text-purple-400 font-bold">autonomous intelligence</span> 
          and <span className="text-purple-300 font-bold">distributed systems</span>."
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {portfolioCompanies.map((company, index) => (
            <div
              key={index}
              className="beveled-card rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 text-left"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white sharp-text mb-1">{company.name}</h3>
                  <div className="text-sm font-mono text-gray-400">{company.category}</div>
                </div>
                <div className={`text-xs font-mono font-bold px-2 py-1 cyber-border rounded ${statusColors[company.status as keyof typeof statusColors]}`}>
                  {company.status}
                </div>
              </div>
              
              <p className="text-sm text-gray-300 font-mono leading-relaxed mb-4">
                {company.description}
              </p>
              
              <div className="border-t border-purple-400/20 pt-3">
                <div className="text-xs font-mono text-purple-400 font-bold">
                  {company.metrics}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="beveled-card p-8 mt-16 rounded-lg">
          <h3 className="text-3xl font-bold text-purple-400 sharp-text mb-6">
            STRATEGIC FOCUS AREAS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="cyber-border p-4 rounded mb-3">
                <div className="text-2xl">🤖</div>
              </div>
              <div className="text-sm font-mono text-gray-300">AI & Machine Learning</div>
            </div>
            <div className="text-center">
              <div className="cyber-border p-4 rounded mb-3">
                <div className="text-2xl">🌐</div>
              </div>
              <div className="text-sm font-mono text-gray-300">Distributed Systems</div>
            </div>
            <div className="text-center">
              <div className="cyber-border p-4 rounded mb-3">
                <div className="text-2xl">🔗</div>
              </div>
              <div className="text-sm font-mono text-gray-300">Blockchain Infrastructure</div>
            </div>
            <div className="text-center">
              <div className="cyber-border p-4 rounded mb-3">
                <div className="text-2xl">🌱</div>
              </div>
              <div className="text-sm font-mono text-gray-300">Sustainable Technology</div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="hex-pattern bg-gradient-to-r from-transparent via-purple-400/10 to-transparent h-px w-full mb-8"></div>
          <p className="text-xl text-gray-400 font-mono sharp-text">
            [ INTELLIGENCE • INFRASTRUCTURE • INFINITE POSSIBILITY ]
          </p>
        </div>
      </div>
    </section>
  )
}