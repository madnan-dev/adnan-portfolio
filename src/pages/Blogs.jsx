import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Code2, Search, Sparkles, Workflow } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';
import { Link } from 'react-router-dom';

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const blogsData = [
    {
      id: 1,
      title: 'Building Scalable Webhook Pipelines with n8n',
      category: 'automation',
      date: 'Jul 20, 2026',
      readTime: '5 min read',
      excerpt: 'Learn how to connect custom APIs, trigger automated webhooks, and handle errors gracefully in production workflows.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80',
      featured: true,
      author: 'Automation Specialist',
      topic: 'Workflow design',
    },
    {
      id: 2,
      title: 'Understanding Agentic AI & Autonomous Workflows',
      category: 'ai',
      date: 'Jul 15, 2026',
      readTime: '7 min read',
      excerpt: 'Discover how AI agents use dynamic routing, context evaluation, and LLMs to make smart decisions.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&auto=format&fit=crop&q=80',
      featured: false,
      author: 'AI Developer',
      topic: 'AI systems',
    },
    {
      id: 3,
      title: 'Mastering Modern React Components with Tailwind CSS',
      category: 'web',
      date: 'Jul 10, 2026',
      readTime: '4 min read',
      excerpt: 'Best practices for building clean, modular React interfaces with utility-first styling at scale.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=80',
      featured: false,
      author: 'Frontend Lead',
      topic: 'Frontend craft',
    },
    {
      id: 4,
      title: 'Automating Email Communications via Gmail & n8n',
      category: 'automation',
      date: 'Jul 05, 2026',
      readTime: '6 min read',
      excerpt: 'A practical guide to building inbox management flows that categorize and reply to leads automatically.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80',
      featured: false,
      author: 'Workflow Engineer',
      topic: 'Inbox automation',
    },
    {
      id: 5,
      title: 'Optimizing Web App Performance and Assets',
      category: 'web',
      date: 'Jun 28, 2026',
      readTime: '5 min read',
      excerpt: 'Tips on asset loading, semantic markup, and structure optimizations for faster, smoother experiences.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
      featured: false,
      author: 'Web Architect',
      topic: 'Performance',
    },
  ];

  const stats = [
    { label: 'Workflows explained', value: '12+' },
    { label: 'Topics covered', value: '4' },
    { label: 'Practical examples', value: '100%' },
  ];

  const categories = [
    { key: 'all', label: 'All Articles' },
    { key: 'automation', label: 'Automation' },
    { key: 'ai', label: 'AI' },
    { key: 'web', label: 'Web' },
  ];

  const spotlightTopics = [
    { icon: Workflow, title: 'n8n Workflow Design', text: 'Patterns for triggers, branching, retries, and clean handoff logic.' },
    { icon: Bot, title: 'AI Routing & Agents', text: 'How to add LLM decisions without losing control over the process.' },
    { icon: Code2, title: 'Frontend Systems', text: 'Building interfaces that support credibility and conversion.' },
    { icon: Sparkles, title: 'Delivery Notes', text: 'Practical tips and implementation details from real builds.' },
  ];

  const filteredBlogs = blogsData.filter((blog) => {
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = blogsData.find((blog) => blog.featured);

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.45 }} className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.01) 1px, transparent 1px)', backgroundSize: '28px 28px, 56px 56px', opacity: 0.04 }} />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_38%),radial-gradient(circle_at_85%_20%,_rgba(59,130,246,0.16),_transparent_30%)]" />
        <div className="mx-auto max-w-6xl text-center">
          <p className="section-kicker text-sky-300">Insights & Articles</p>
          <h1 className="section-title mt-4 text-5xl text-white sm:text-6xl lg:text-7xl leading-[0.95]">
            Writing for people who build{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              systems that need to work.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            This is the thinking layer behind the portfolio: automation patterns, AI workflows, and frontend decisions that help you look credible and ship better.
          </p>

          <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-full rounded-full border border-slate-700 bg-slate-900/80 px-4 py-3 pl-10 text-sm text-slate-200 placeholder-slate-400 focus:border-sky-500 focus:outline-none"
              />
              <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 ${
                  selectedCategory === cat.key
                    ? 'bg-sky-500 text-slate-950'
                    : 'bg-slate-900/70 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-6 sm:px-8 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.05 }}>
              <GlassCard className="h-full p-5 text-center transition-transform duration-300 hover:-translate-y-1 hover:border-sky-400/40">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-8 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            kicker="What I write about"
            title="Topics that map directly to the kind of work I build"
            description="The articles are organized around the same stack and delivery mindset used across the rest of the portfolio."
            align="center"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {spotlightTopics.map((topic, index) => {
              const Icon = topic.icon;

              return (
                <motion.div key={topic.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.05 }}>
                  <GlassCard className="h-full p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-sky-400/40">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{topic.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{topic.text}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {featuredBlog && selectedCategory === 'all' && !searchQuery && (
        <section className="px-6 py-6 sm:px-8 lg:px-20">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }}>
            <GlassCard className="mx-auto grid max-w-6xl gap-8 p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-sky-400/40 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-800">
                <img src={featuredBlog.image} alt={featuredBlog.title} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
              </div>

              <div>
                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 font-semibold uppercase tracking-[0.25em] text-sky-300">
                    Featured
                  </span>
                  <span>{featuredBlog.date}</span>
                  <span>•</span>
                  <span>{featuredBlog.readTime}</span>
                </div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">{featuredBlog.title}</h2>
                <p className="mt-4 text-lg leading-8 text-slate-300">{featuredBlog.excerpt}</p>
                <p className="mt-5 rounded-2xl border border-slate-800/80 bg-slate-950/50 px-4 py-3 text-sm leading-7 text-slate-300">
                  <span className="font-semibold text-sky-300">Topic:</span> {featuredBlog.topic}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
                  <span className="text-sm text-slate-400">By {featuredBlog.author}</span>
                  <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </section>
      )}

      <section className="px-6 py-10 sm:px-8 lg:px-20 lg:pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <motion.div key={blog.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.05 }}>
                <GlassCard className="flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-sky-400/30">
                  <div className="relative h-48 overflow-hidden">
                    <img src={blog.image} alt={blog.title} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-110" />
                    <span className="absolute right-3 top-3 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-semibold capitalize text-sky-300">
                      {blog.category}
                    </span>
                    <span className="absolute left-3 top-3 rounded-full border border-sky-400/20 bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-100">
                      {blog.topic}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-2 text-xs text-slate-400">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{blog.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">
                      <span className="text-sm text-slate-400">{blog.author}</span>
                      <button className="inline-flex items-center gap-1 text-sm font-semibold text-sky-300 transition hover:text-sky-200">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full rounded-[1.5rem] border border-slate-800 bg-slate-900/70 py-12 text-center text-slate-400">
              No articles found matching your search term.
            </div>
          )}
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-20">
        <GlassCard className="mx-auto max-w-5xl px-8 py-10 text-center transition-transform duration-300 hover:-translate-y-1 hover:border-sky-400/40 lg:px-12">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">Subscribe for fresh insights</h3>
          <p className="mx-auto mt-3 max-w-2xl text-lg leading-8 text-slate-300">
            Get practical articles and tips on web development, automation, and AI directly in your inbox.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70">
              Request a Topic
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </GlassCard>
      </section>
    </motion.div>
  );
}