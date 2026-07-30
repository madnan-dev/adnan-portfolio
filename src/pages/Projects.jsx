import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  BarChart3,
  Layers3,
  MessageSquareText,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = useMemo(
    () => [
    {
      id: 1,
      title: 'Facebook Post Auto-Scheduler using Buffer API',
      category: 'automation',
      description: 'Automates Facebook post scheduling with Buffer API so social content can be prepared and published in a controlled workflow.',
      tags: ['Buffer API', 'Facebook', 'n8n', 'Automation'],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
      featured: true,
      workflowLink: 'https://github.com/madnan-dev/n8n-automation-workflows/tree/main/01-FbPage-post-scheduler',
      metrics: 'Saved 10+ hrs/week',
      problem: 'Social content was being scheduled manually across multiple steps, which slowed publishing and caused inconsistent timing.',
      solution: 'Built an n8n workflow that accepts scheduled content, pushes it through Buffer, and routes the output to a controlled publishing queue.',
      result: 'Reduced manual posting work, improved consistency, and created a repeatable publishing process for the team.',
      tools: ['n8n', 'Buffer API', 'Facebook', 'Webhook routing'],
    },
    {
      id: 2,
      title: 'Smart-Document-Classifier',
      category: 'automation',
      description: 'Classifies incoming documents into the right category to reduce manual sorting and speed up document processing.',
      tags: ['Document AI', 'Classification', 'n8n', 'Workflow'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80',
      featured: false,
      workflowLink: 'https://github.com/madnan-dev/n8n-automation-workflows/tree/main/02-Smart-Document-Classifier',
      metrics: 'Reduced sorting by 70%',
      problem: 'Incoming files were being reviewed manually, which created delays and inconsistent categorization.',
      solution: 'Added document classification logic that detects type, routes to the correct destination, and logs the outcome for review.',
      result: 'Teams spend less time triaging documents and more time processing the work that matters.',
      tools: ['n8n', 'Document AI', 'Classification rules', 'Logging'],
    },
    {
      id: 3,
      title: 'Serper Search Scraper',
      category: 'automation',
      description: 'Scrapes search results with Serper to collect structured search data for downstream automation and analysis.',
      tags: ['Serper', 'Search Scraping', 'n8n', 'Data Extraction'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&auto=format&fit=crop&q=80',
      featured: false,
      workflowLink: 'https://github.com/madnan-dev/n8n-automation-workflows/tree/main/03-serper-search-scraper',
      metrics: 'Processed 250+ requests/day',
      problem: 'Search data was being collected manually, making it difficult to reuse and analyze at scale.',
      solution: 'Created a structured extraction pipeline that queries Serper, normalizes results, and outputs data for downstream use.',
      result: 'Search data becomes available in a format that can feed enrichment, reporting, or lead generation workflows.',
      tools: ['Serper', 'n8n', 'Data extraction', 'Normalization'],
    },
    ],
    [],
  );

  const stats = [
    { label: 'Automations built', value: '50+' },
    { label: 'Hours saved weekly', value: '120+' },
    { label: 'Requests handled daily', value: '250+' },
  ];

  const categories = ['all', 'web', 'automation', 'ai'];

  const filteredProjects = activeFilter === 'all' ? projectsData : projectsData.filter((item) => item.category === activeFilter);
  const featuredProject = projectsData.find((project) => project.featured);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_38%),radial-gradient(circle_at_85%_20%,_rgba(59,130,246,0.16),_transparent_30%)]" />
        <div className="mx-auto max-w-6xl text-center">
          <p className="section-kicker text-sky-300">Projects</p>
          <h1 className="section-title mt-4 text-5xl text-white sm:text-6xl lg:text-7xl">
            Case studies that show{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              measurable automation impact.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            The projects below are written like client and recruiter proof: what the problem was, what I built, and what changed after the workflow went live.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 ${
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

      <section className="px-6 py-6 sm:px-8 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="p-5 text-center">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {featuredProject && activeFilter === 'all' && (
        <section className="px-6 py-6 sm:px-8 lg:px-20">
          <GlassCard className="mx-auto grid max-w-6xl gap-8 p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
            <div>
              <p className="section-kicker text-sky-300">Featured Project</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{featuredProject.title}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">{featuredProject.description}</p>
              <p className="mt-5 rounded-2xl border border-slate-800/80 bg-slate-950/50 px-4 py-3 text-sm leading-7 text-slate-300">
                <span className="font-semibold text-sky-300">Outcome:</span> {featuredProject.metrics}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedProject(featuredProject)}
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
                >
                  Read Case Study
                </button>
                <a
                  href={featuredProject.workflowLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
                >
                  View Workflow
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-slate-800">
              <img src={featuredProject.image} alt={featuredProject.title} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
            </div>
          </GlassCard>
        </section>
      )}

      <section className="px-6 py-10 sm:px-8 lg:px-20 lg:pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <GlassCard
              key={project.id}
              className="flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-sky-400/30"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-110" />
                <span className="absolute right-3 top-3 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-semibold capitalize text-sky-300">
                  {project.category}
                </span>
                <span className="absolute left-3 top-3 rounded-full border border-sky-400/20 bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-100">
                  {project.metrics}
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
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
                  >
                    Case Study
                  </button>
                  <a
                    href={project.workflowLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
                  >
                    View Workflow
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-20">
        <GlassCard className="mx-auto max-w-6xl p-8 lg:p-10">
          <SectionHeading
            kicker="Why this matters"
            title="These projects are structured to read like evidence"
            description="Each card now carries the outcome, and the modal gives you a place to show problem, solution, tools, and result in a recruiter-friendly format."
            align="center"
          />
        </GlassCard>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-20">
        <GlassCard className="mx-auto flex max-w-6xl flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div>
            <p className="section-kicker text-sky-300">Next step</p>
            <h2 className="section-title mt-3 text-3xl text-white sm:text-4xl">Need a similar workflow built for your business?</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              I can adapt the same style of work into a client automation, internal tool, or AI-assisted process that fits your current stack.
            </p>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70">
            Let&apos;s Build It
            <ArrowRight className="h-4 w-4" />
          </Link>
        </GlassCard>
      </section>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.24 }}
              className="glass-card relative w-full max-w-4xl overflow-hidden rounded-[1.75rem]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="h-full min-h-[260px] overflow-hidden lg:min-h-full">
                  <img src={selectedProject.image} alt={selectedProject.title} className="h-full w-full object-cover" />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="section-kicker text-sky-300">Case Study</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{selectedProject.title}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="rounded-full border border-slate-700 bg-white/5 p-2 text-slate-300 transition hover:border-sky-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
                      aria-label="Close project details"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <p className="mt-4 rounded-2xl border border-slate-800/80 bg-slate-950/50 px-4 py-3 text-sm leading-7 text-slate-300">
                    <span className="font-semibold text-sky-300">Outcome:</span> {selectedProject.metrics}
                  </p>

                  <div className="mt-6 grid gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Problem</p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{selectedProject.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Solution</p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{selectedProject.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Tools</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedProject.tools.map((tool) => (
                          <span key={tool} className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Result</p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{selectedProject.result}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={selectedProject.workflowLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
                    >
                      Open Workflow
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}