import React from 'react';

const InvestorSection: React.FC = () => {
  const partners = [
    'Google',
    'TBD', 
    'Cerebros',
    'AshHQ',
    'Phoenix LiveView',
    'Elixir Foundation'
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-6xl font-black mb-16 neon-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300">
          STRATEGIC PARTNERS
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="glass-panel p-6 rounded-lg group hover:scale-105 transition-all duration-300">
              <div className="text-purple-400 font-mono font-bold text-lg neon-text">
                {partner}
              </div>
              <div className="w-full h-px bg-purple-400 mt-4 opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        <p className="text-gray-300 font-mono mt-12 max-w-3xl mx-auto">
          Building the future of distributed intelligence with <span className="text-purple-400 neon-text">industry leaders</span> and <span className="text-purple-300 neon-text">innovative technologies</span>.
        </p>
        
      </div>
    </section>
  );
};

export default InvestorSection;