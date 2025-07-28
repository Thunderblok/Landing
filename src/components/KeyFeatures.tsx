import React from 'react';

const KeyFeatures: React.FC = () => {
  const features = [
    {
      title: "DIOS: DISTRIBUTED INTELLIGENCE",
      description: "The first platform to turn any network into a living, learning, self-managing organism",
      color: "purple"
    },
    {
      title: "THUNDERLINE: TACTICAL DASHBOARD",
      description: "Advanced visualization layer - see the world as living code with real-time intelligence",
      color: "purple"
    },
    {
      title: "THUNDERBLOCK: ATOMIC SERVERS",
      description: "Run autonomous agents and orchestrate at planetary scale with modular infrastructure",
      color: "purple"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl md:text-6xl font-black text-center mb-16 neon-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300">
          TECHNOLOGY PORTFOLIO
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-panel p-8 rounded-lg group hover:scale-105 transition-all duration-300">
              <h3 className={`text-2xl font-bold mb-4 neon-text text-${feature.color}-400`}>
                {feature.title}
              </h3>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                {feature.description}
              </p>
              <div className={`w-full h-px bg-${feature.color}-400 mt-6 opacity-30 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default KeyFeatures;