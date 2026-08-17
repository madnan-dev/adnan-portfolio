import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: 'Facebook Post Auto-Scheduler using Buffer API',
      category: 'automation',
      description:
        'Automates Facebook post scheduling with Buffer API so social content can be prepared and published in a controlled workflow.',
      tags: ['Buffer API', 'Facebook', 'n8n', 'Automation'],
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=80',
      featured: true,
      demoLink: '#',
      githubLink: 'https://github.com/madnan-dev/n8n-automation-workflows/tree/main/01-FbPage-post-scheduler',
    },
    {
      id: 2,
      title: 'Smart-Document-Classifier',
      category: 'automation',
      description:
        'Classifies incoming documents into the right category to reduce manual sorting and speed up document processing.',
      tags: ['Document AI', 'Classification', 'n8n', 'Workflow'],
      image: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=600&auto=format&fit=crop&q=80',
      featured: false,
      demoLink: '#',
      githubLink: 'https://github.com/madnan-dev/n8n-automation-workflows/tree/main/02-Smart-Document-Classifier',
    },
    {
      id: 3,
      title: 'Serper Search Scraper',
      category: 'automation',
      description:
        'Scrapes search results with Serper to collect structured search data for downstream automation and analysis.',
      tags: ['Serper', 'Search Scraping', 'n8n', 'Data Extraction'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80',
      featured: false,
      demoLink: '#',
      githubLink: 'https://github.com/madnan-dev/n8n-automation-workflows/tree/main/03-serper-search-scraper',
    },
  ];

  const filteredProjects = activeFilter === 'all' ? projectsData : projectsData.filter((item) => item.category === activeFilter);
  const featuredProject = projectsData.find((project) => project.featured);

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.45 }} className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.01) 1px, transparent 1px)', backgroundSize: '28px 28px, 56px 56px', opacity: 0.04 }} />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_38%),radial-gradient(circle_at_85%_20%,_rgba(59,130,246,0.16),_transparent_30%)]" />
        <div className="mx-auto max-w-6xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            Projects
          </span>
          <h1 className="text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
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
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/40 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
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

            <div className="overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-950">
              <img src={featuredProject.image} alt={featuredProject.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
            </div>
          </motion.div>
        </section>
      )}

      <section className="px-6 py-10 sm:px-8 lg:px-20 lg:pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
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

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-white"
                  >
                    GitHub Source
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}