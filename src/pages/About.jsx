import React, { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { label: 'Projects Completed', value: '100+' },
    { label: 'Client Satisfaction', value: '99%' },
    { label: 'Automations Built', value: '500+' },
    { label: 'Years Experience', value: '3+' },
  ];

  const team = [
    { name: 'Alex Johnson', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80' },
    { name: 'Sarah Chen', role: 'UI/UX Designer', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80' },
    { name: 'Michael Brown', role: 'Automation Specialist', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden py-20 px-6 sm:px-12 max-w-7xl mx-auto text-center">
        <span className="text-indigo-400 font-semibold tracking-widest uppercase text-sm">
          Who We Are
        </span>
        <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
          Building the Future of <span className="text-indigo-500">Digital Solutions</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          We combine cutting-edge technology with intuitive design to empower businesses, streamline workflows, and scale ideas effortlessly.
        </p>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="border-y border-slate-800 bg-slate-900/50 py-12 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
              <p className="text-3xl sm:text-4xl font-bold text-indigo-400">{stat.value}</p>
              <p className="text-sm text-slate-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- INTERACTIVE TABS SECTION (Mission & Vision) --- */}
      <section className="py-20 px-6 sm:px-12 max-w-5xl mx-auto">
        <div className="flex justify-center space-x-4 border-b border-slate-800 pb-4 mb-8">
          <button
            onClick={() => setActiveTab('mission')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              activeTab === 'mission'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Our Mission
          </button>
          <button
            onClick={() => setActiveTab('vision')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              activeTab === 'vision'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Our Vision
          </button>
        </div>

        <div className="bg-slate-800/60 p-8 rounded-2xl border border-slate-700/60 text-center sm:text-left transition-all">
          {activeTab === 'mission' ? (
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Empowering Innovation</h3>
              <p className="text-slate-300 leading-relaxed">
                Our mission is to simplify complex web environments through modern architecture, intelligent automation, and intuitive user experiences. We aim to break technical barriers for growth-oriented teams.
              </p>
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Connecting Possibilities</h3>
              <p className="text-slate-300 leading-relaxed">
                We envision a digital landscape where intelligent workflows and seamless interfaces work together effortlessly, driving productivity and creative freedom across industries worldwide.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Meet the Team</h2>
          <p className="text-slate-400 mt-2">The minds driving our creative and technical execution.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-indigo-400 text-sm mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6 sm:px-12 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-900/60 to-purple-900/60 p-10 rounded-3xl border border-indigo-500/30 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to collaborate?</h2>
          <p className="text-slate-300 mt-4 max-w-xl mx-auto">
            Let's build something exceptional together. Reach out to discuss your project requirements today.
          </p>
          <button className="mt-8 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 transition-all transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </section>

    </div>
  );
}