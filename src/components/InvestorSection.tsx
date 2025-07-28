import React from 'react';

const InvestorSection: React.FC = () => {
  const stakeholders = [
    {
      category: 'INSTITUTIONAL INVESTORS',
      description: 'Venture Capital • Private Equity • Family Offices',
      focus: 'Strategic Capital Partners'
    },
    {
      category: 'TECHNOLOGY PARTNERS', 
      description: 'Cloud Providers • Hardware Vendors • AI Research',
      focus: 'Infrastructure Alliance'
    },
    {
      category: 'ENTERPRISE CLIENTS',
      description: 'Fortune 500 • Government • Research Institutions',
      focus: 'Global Deployment'
    },
    {
      category: 'REGULATORY BODIES',
      description: 'Financial Authorities • Technology Standards • Compliance',
      focus: 'Governance Framework'
    },
    {
      category: 'ACADEMIC INSTITUTIONS',
      description: 'Research Universities • Think Tanks • Innovation Labs',
      focus: 'R&D Collaboration'
    },
    {
      category: 'OPEN SOURCE COMMUNITY',
      description: 'Developer Ecosystem • Contributors • Maintainers',
      focus: 'Innovation Network'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-6xl font-black mb-16 sharp-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300">
          STAKEHOLDER ECOSYSTEM
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder, index) => (
            <div key={index} className="beveled-card p-6 rounded-lg group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-purple-400 font-mono font-bold text-lg sharp-text mb-3">
                {stakeholder.category}
              </div>
              <div className="text-gray-300 text-sm font-mono mb-4 leading-relaxed">
                {stakeholder.description}
              </div>
              <div className="text-purple-300 text-xs font-mono font-bold tracking-wider">
                {stakeholder.focus}
              </div>
              <div className="w-full h-px bg-purple-400 mt-4 opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Investment Metrics */}
        <div className="beveled-card p-8 mt-16 rounded-lg">
          <h3 className="text-3xl font-bold text-purple-400 sharp-text mb-8">
            INVESTMENT HIGHLIGHTS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 font-mono">$500M+</div>
              <div className="text-sm text-gray-400 font-mono mt-2">Portfolio Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 font-mono">50+</div>
              <div className="text-sm text-gray-400 font-mono mt-2">Strategic Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 font-mono">25+</div>
              <div className="text-sm text-gray-400 font-mono mt-2">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 font-mono">10B+</div>
              <div className="text-sm text-gray-400 font-mono mt-2">Data Points/Day</div>
            </div>
          </div>
        </div>
        
        <div className="beveled-card p-8 mt-12 rounded-lg">
          <p className="text-xl text-gray-300 font-mono leading-relaxed max-w-4xl mx-auto">
            <span className="text-purple-400 sharp-text font-bold">Building the foundation</span> for the next generation of 
            autonomous systems, distributed intelligence, and self-evolving infrastructure. 
            <span className="text-purple-300 font-bold">Strategic partnerships</span> with industry leaders, 
            <span className="text-purple-400 font-bold">institutional backing</span>, and 
            <span className="text-purple-500 font-bold">regulatory compliance</span> position OKO Holding 
            as the premier platform for the autonomous era.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default InvestorSection;