import React from 'react';

const KeyFeatures: React.FC = () => {
  const features = [
    {
      title: "THUNDERLINE AI PLATFORM",
      description: "Next-generation artificial intelligence ecosystem driving autonomous decision-making, predictive analytics, and cognitive computing across global enterprise infrastructure.",
      metrics: "99.9% Uptime • Enterprise Scale • AI-First",
      color: "purple"
    },
    {
      title: "DISTRIBUTED OPERATING SYSTEM",
      description: "DIOS powers seamless coordination across autonomous networks, enabling distributed computing, self-healing infrastructure, and intelligent resource orchestration.",
      metrics: "Global Network • Self-Healing • Zero Downtime",
      color: "purple"
    },
    {
      title: "AUTONOMOUS BLOCKCHAIN",
      description: "ThunderBlock provides self-governing infrastructure for decentralized applications, autonomous economic systems, and programmable financial instruments.",
      metrics: "10,000+ TPS • Carbon Neutral • DeFi Ready",
      color: "purple"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl md:text-6xl font-black text-center mb-16 sharp-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300">
          CORE TECHNOLOGIES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="beveled-card p-8 rounded-lg group hover:transform hover:scale-105 transition-all duration-300">
              <h3 className={`text-2xl font-bold mb-4 sharp-text text-${feature.color}-400`}>
                {feature.title}
              </h3>
              <p className="text-gray-300 font-mono text-sm leading-relaxed mb-6">
                {feature.description}
              </p>
              <div className={`text-xs font-mono text-${feature.color}-500 font-bold tracking-wider`}>
                {feature.metrics}
              </div>
              <div className={`w-full h-px bg-${feature.color}-400 mt-6 opacity-30 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
        
        {/* Technology Stack Overview */}
        <div className="mt-20 beveled-card p-8 rounded-lg">
          <h3 className="text-3xl font-bold text-center mb-8 sharp-text text-purple-400">
            INTEGRATED TECHNOLOGY STACK
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="cyber-border p-4 rounded">
              <div className="text-purple-400 font-mono font-bold text-sm">AI/ML</div>
              <div className="text-xs text-gray-400 mt-1">Neural Networks</div>
            </div>
            <div className="cyber-border p-4 rounded">
              <div className="text-purple-400 font-mono font-bold text-sm">CLOUD</div>
              <div className="text-xs text-gray-400 mt-1">Multi-Region</div>
            </div>
            <div className="cyber-border p-4 rounded">
              <div className="text-purple-400 font-mono font-bold text-sm">EDGE</div>
              <div className="text-xs text-gray-400 mt-1">IoT Integration</div>
            </div>
            <div className="cyber-border p-4 rounded">
              <div className="text-purple-400 font-mono font-bold text-sm">QUANTUM</div>
              <div className="text-xs text-gray-400 mt-1">Future Ready</div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default KeyFeatures;