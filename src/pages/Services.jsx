import { useState } from 'react';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const servicesData = [
    {
      id: 1,
      title: 'Workflow Automation',
      category: 'automation',
      description: 'Streamline operations by connecting APIs, webhooks, and third-party apps into efficient, reliable systems.',
      icon: '⚡',
      features: ['Custom Webhooks', 'API Integration', 'Error Handling'],
    },
    {
      id: 2,
      title: 'Agentic AI Systems',
      category: 'ai',
      description: 'Deploy smart automation agents that can reason, route tasks, and support business workflows intelligently.',
      icon: '🤖',
      features: ['LLM Integration', 'Autonomous Routing', 'Smart Decision Support'],
    },
    {
      id: 3,
      title: 'Frontend Development',
      category: 'web',
      description: 'Create fast, elegant, and responsive user interfaces using modern React and Tailwind-based architecture.',
      icon: '💻',
      features: ['Responsive Layouts', 'Clean Components', 'Optimized Performance'],
    },
    {
      id: 4,
      title: 'CRM & Email Integration',
      category: 'automation',
      description: 'Automate onboarding, messaging, and CRM updates so your team can focus on growth rather than repetitive work.',
      icon: '📧',
      features: ['Gmail Sync', 'Auto Replies', 'Lead Management'],
    },
    {
      id: 5,
      title: 'AI Chatbot Integration',
      category: 'ai',
      description: 'Add conversational assistants to your website or internal tools for responsive, round-the-clock support.',
      icon: '💬',
      features: ['Context Awareness', 'Real-Time Responses', 'Multi-Model Support'],
    },
    {
      id: 6,
      title: 'Performance & SEO',
      category: 'web',
      description: 'Improve page speed, structure, and visibility so your product performs better in both user experience and search.',
      icon: '🚀',
      features: ['Speed Audits', 'Mobile-First UX', 'SEO Structure'],
    },
  ];

  const filteredServices =
    selectedCategory === 'all' ? servicesData : servicesData.filter((service) => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_38%),radial-gradient(circle_at_85%_20%,_rgba(59,130,246,0.16),_transparent_30%)]" />
        <div className="mx-auto max-w-6xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            Services
          </span>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Professional solutions for{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              modern growth.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            From automation to web experiences, I build services that are practical, scalable, and designed to impress.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
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
                {cat === 'all' ? 'All Services' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 sm:px-8 lg:px-20 lg:pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="flex h-full flex-col rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/40 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-500/25 bg-sky-500/10 text-2xl">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{service.description}</p>

              <ul className="mt-6 space-y-2 border-t border-slate-800 pt-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-slate-300">
                    <span className="mr-2 h-2 w-2 rounded-full bg-sky-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-sky-500/20 bg-sky-500/10 px-8 py-10 text-center shadow-lg shadow-sky-950/20 lg:px-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Need a custom solution for your business?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            I can help you turn your idea into a polished website, product, or automation workflow built around your goals.
          </p>
        </div>
      </section>
    </div>
  );
}