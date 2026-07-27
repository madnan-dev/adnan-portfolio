import { useState } from 'react';

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
    },
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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_38%),radial-gradient(circle_at_85%_20%,_rgba(59,130,246,0.16),_transparent_30%)]" />
        <div className="mx-auto max-w-6xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            Insights & Articles
          </span>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Thoughtful writing for{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              modern builders.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Explore practical ideas on web development, automation, AI, and creating products that genuinely perform well.
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
              <span className="absolute left-4 top-3.5 text-slate-400">🔎</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {['all', 'automation', 'ai', 'web'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${
                  selectedCategory === cat
                    ? 'bg-sky-500 text-slate-950'
                    : 'bg-slate-900/70 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {featuredBlog && selectedCategory === 'all' && !searchQuery && (
        <section className="px-6 py-6 sm:px-8 lg:px-20">
          <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/40 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-800">
              <img src={featuredBlog.image} alt={featuredBlog.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
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
              <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
                <span className="text-sm text-slate-400">By {featuredBlog.author}</span>
                <button className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                  Read Article
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="px-6 py-10 sm:px-8 lg:px-20 lg:pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <article key={blog.id} className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-900/70 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40">
                <div className="relative h-48 overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="h-full w-full object-cover transition duration-500 hover:scale-110" />
                  <span className="absolute right-3 top-3 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-semibold capitalize text-sky-300">
                    {blog.category}
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
                    <button className="text-sm font-semibold text-sky-300 transition hover:text-sky-200">Read More</button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full rounded-[1.5rem] border border-slate-800 bg-slate-900/70 py-12 text-center text-slate-400">
              No articles found matching your search term.
            </div>
          )}
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-sky-500/20 bg-sky-500/10 px-8 py-10 text-center shadow-lg shadow-sky-950/20 lg:px-12">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">Subscribe for fresh insights</h3>
          <p className="mx-auto mt-3 max-w-2xl text-lg leading-8 text-slate-300">
            Get practical articles and tips on web development, automation, and AI directly in your inbox.
          </p>
        </div>
      </section>
    </div>
  );
}