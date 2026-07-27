import React, { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: 'Gmail Inbox Automation Dashboard',
      category: 'automation',
      description: 'An interactive single-page panel to view, manage, and auto-reply to client emails using n8n backend workflows.',
      tags: ['n8n', 'React', 'Gmail API', 'Webhooks'],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
      featured: true,
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Medical Appointment & Advisor Portal',
      category: 'web',
      description: 'A seamless booking interface integrated with dynamic routing nodes for automated scheduling and recommendations.',
      tags: ['React', 'Tailwind CSS', 'n8n', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80',
      featured: false,
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Buffer Social Media Auto-Poster',
      category: 'automation',
      description: 'Pipeline for handling GraphQL mutations and automated authentication parameters for Facebook page management.',
      tags: ['Buffer API', 'GraphQL', 'n8n', 'Webhooks'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop&q=80',
      featured: false,
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Agentic AI Customer Assistant',
      category: 'ai',
      description: 'Autonomous AI routing agent capable of interpreting complex queries and making smart workflow decisions.',
      tags: ['Agentic AI', 'LLM', 'Python', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&auto=format&fit=crop&q=80',
      featured: false,
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 5,
      title: 'Client Acquisition Portfolio',
      category: 'web',
      description: 'A sleek, modern developer portfolio built with optimized responsive layouts to highlight client solutions.',
      tags: ['React', 'Tailwind CSS', 'Vite'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
      featured: false,
      demoLink: '#',
      githubLink: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(item => item.category === activeFilter);

  const featuredProject = projectsData.find(p => p.featured);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans py-16 px-6 sm:px-12">
      
      {/* --- HEADER SECTION --- */}
      <section className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-indigo-400 font-semibold tracking-widest uppercase text-sm">
          Case Studies & Work
        </span>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Featured <span className="text-indigo-500">Projects</span>
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Explore our latest web applications, automated workflow pipelines, and AI integrations built for real-world impact.
        </p>

        {/* --- FILTER BUTTONS --- */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {['all', 'web', 'automation', 'ai'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all capitalize ${
                activeFilter === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* --- FEATURED HIGHLIGHT SECTION --- */}
      {featuredProject && activeFilter === 'all' && (
        <section className="max-w-7xl mx-auto mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-slate-800/60 border border-slate-700/80 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-2xl">
            <div>
              <span className="bg-indigo-500/20 text-indigo-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-indigo-500/30">
                Featured Spotlight
              </span>
              <h2 className="text-3xl font-bold text-white mt-4 mb-3">{featuredProject.title}</h2>
              <p className="text-slate-300 leading-relaxed mb-6">{featuredProject.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-slate-900/80 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={featuredProject.demoLink} className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl shadow-lg transition-all">
                  Live Demo
                </a>
                <a href={featuredProject.githubLink} className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold rounded-xl transition-all">
                  View Code
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-700/50 h-72 lg:h-80">
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>
      )}

      {/* --- PROJECTS GRID --- */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="group bg-slate-800/40 rounded-2xl border border-slate-700/60 overflow-hidden hover:border-indigo-500/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 shadow-xl"
          >
            <div>
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-slate-900/80 text-indigo-400 text-xs px-2.5 py-1 rounded-md capitalize font-medium border border-slate-700">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6">
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-[11px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/60">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center border-t border-slate-700/50 pt-4">
                <a href={project.demoLink} className="text-sm text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
                  Preview <span className="ml-1">→</span>
                </a>
                <a href={project.githubLink} className="text-sm text-slate-400 hover:text-white font-medium">
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}