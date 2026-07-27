import React, { useState } from 'react';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const servicesData = [
    {
      id: 1,
      title: 'Workflow Automation',
      category: 'automation',
      description: 'Streamline your business operations by connecting APIs, webhooks, and third-party apps with custom n8n pipelines.',
      icon: '⚡',
      features: ['Custom Webhooks', 'API Integration', 'Error Handling Workflows'],
    },
    {
      id: 2,
      title: 'Agentic AI Systems',
      category: 'ai',
      description: 'Deploy intelligent autonomous agents capable of handling complex tasks, data analysis, and client interactions.',
      icon: '🤖',
      features: ['LLM Integration', 'Autonomous Routing', 'Smart Decision Making'],
    },
    {
      id: 3,
      title: 'Frontend Web Development',
      category: 'web',
      description: 'Build fast, scalable, and modern user interfaces using React, Vite, and clean vanilla Tailwind CSS.',
      icon: '💻',
      features: ['Responsive Layouts', 'Single-File Components', 'Optimized Performance'],
    },
    {
      id: 4,
      title: 'CRM & Email Integration',
      category: 'automation',
      description: 'Automate client onboarding, email replies, and CRM record updates directly from your application dashboards.',
      icon: '📧',
      features: ['Gmail API Sync', 'Automated Auto-Replies', 'Lead Management'],
    },
    {
      id: 5,
      title: 'AI Chatbot Integration',
      category: 'ai',
      description: 'Integrate custom conversational assistants into your websites and internal messaging tools for 24/7 support.',
      icon: '💬',
      features: ['Context Awareness', 'Multi-Model Support', 'Real-time Responses'],
    },
    {
      id: 6,
      title: 'Performance & SEO Optimization',
      category: 'web',
      description: 'Audit and boost your web applications loading speeds, semantic structures, and search engine visibility.',
      icon: '🚀',
      features: ['Speed Auditing', 'Clean Asset Management', 'Mobile First Design'],
    },
  ];

  const filteredServices = selectedCategory === 'all' 
    ? servicesData 
    : servicesData.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans py-16 px-6 sm:px-12">
      
      {/* --- HEADER SECTION --- */}
      <section className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-indigo-400 font-semibold tracking-widest uppercase text-sm">
          What We Offer
        </span>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          High-Performance <span className="text-indigo-500">Services & Solutions</span>
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Tailored engineering, intelligent automation systems, and scalable modern web architecture designed for your success.
        </p>

        {/* --- INTERACTIVE CATEGory FILTER BUTTONS --- */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {['all', 'automation', 'ai', 'web'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all capitalize ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {cat === 'all' ? 'All Services' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* --- SERVICES GRID SECTION --- */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <div 
            key={service.id}
            className="group bg-slate-800/40 p-8 rounded-2xl border border-slate-700/60 hover:border-indigo-500/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl"
          >
            <div>
              <div className="w-14 h-14 bg-indigo-600/20 border border-indigo-500/30 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
            </div>

            <div>
              <div className="border-t border-slate-700/50 pt-4 mb-6">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white font-medium text-sm transition-colors border border-slate-700 hover:border-transparent">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}