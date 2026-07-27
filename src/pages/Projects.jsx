import { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: 'Gmail Inbox Automation Dashboard',
      category: 'automation',
      description: 'A polished command center for managing client communication, replies, and workflow visibility in one place.',
      tags: ['n8n', 'React', 'Gmail API', 'Webhooks'],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
      featured: true,
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Medical Appointment & Advisor Portal',
      category: 'web',
      description: 'A modern booking experience built to guide users smoothly from discovery to scheduling.',
      tags: ['React', 'Tailwind CSS', 'n8n', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80',
      featured: false,
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Buffer Social Media Auto-Poster',
      category: 'automation',
      description: 'A scalable pipeline for publishing, authentication, and multi-step social content automation.',
      tags: ['Buffer API', 'GraphQL', 'n8n', 'Webhooks'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop&q=80',
      featured: false,
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'Agentic AI Customer Assistant',
      category: 'ai',
      description: 'An intelligent assistant that routes requests and makes smart workflow decisions with context.',
      tags: ['Agentic AI', 'LLM', 'Python', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&auto=format&fit=crop&q=80',
      featured: false,
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 5,
      title: 'Client Acquisition Portfolio',
      category: 'web',
      description: 'A sleek, modern portfolio designed to showcase strategy, design, and technical execution clearly.',
      tags: ['React', 'Tailwind CSS', 'Vite'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
      featured: false,
      demoLink: '#',
      githubLink: '#',
    },
  ];

  const filteredProjects = activeFilter === 'all' ? projectsData : projectsData.filter((item) => item.category === activeFilter);
  const featuredProject = projectsData.find((project) => project.featured);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_38%),radial-gradient(circle_at_85%_20%,_rgba(59,130,246,0.16),_transparent_30%)]" />
        <div className="mx-auto max-w-6xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            Projects
          </span>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            A showcase of{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              impactful digital work.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Each project reflects a blend of thoughtful design, modern development, and practical automation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['all', 'web', 'automation', 'ai'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${
                  activeFilter === cat
                    ? 'bg-sky-500 text-slate-950'
                    : 'bg-slate-900/70 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {featuredProject && activeFilter === 'all' && (
        <section className="px-6 py-6 sm:px-8 lg:px-20">
          <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/40 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Featured Project</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{featuredProject.title}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">{featuredProject.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-slate-800">
              <img src={featuredProject.image} alt={featuredProject.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
            </div>
          </div>
        </section>
      )}

      <section className="px-6 py-10 sm:px-8 lg:px-20 lg:pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-900/70 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 hover:scale-110" />
                <span className="absolute right-3 top-3 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-semibold capitalize text-sky-300">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}