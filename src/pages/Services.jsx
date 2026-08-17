import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Code2, Database, Globe, MessageSquareText, Workflow } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';
import { Link } from 'react-router-dom';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const servicesData = [
    {
      id: 1,
      title: 'Workflow Automation',
      category: 'automation',
      description: 'Connect forms, webhooks, APIs, and business apps into reliable systems that remove repetitive manual work.',
      icon: Workflow,
      features: ['Custom Webhooks', 'API Integration', 'Error Handling'],
      outcome: 'Reduce admin work and keep tasks moving without manual follow-up.',
    },
    {
      id: 2,
      title: 'AI Assistants',
      category: 'ai',
      description: 'Build AI assistants that classify requests, draft responses, and route work to the right step automatically.',
      icon: Bot,
      features: ['LLM Integration', 'Autonomous Routing', 'Smart Decision Support'],
      outcome: 'Add AI decision layers without sacrificing control or visibility.',
    },
    {
      id: 3,
      title: 'Lead Capture Systems',
      category: 'automation',
      description: 'Capture leads from forms, landing pages, and inboxes, then push them into your CRM with follow-up logic.',
      icon: Code2,
      features: ['Lead Routing', 'CRM Sync', 'Auto Follow-up'],
      outcome: 'Respond faster and keep new leads from slipping through the cracks.',
    },
    {
      id: 4,
      title: 'CRM & Email Automation',
      category: 'automation',
      description: 'Automate onboarding, email sequences, and CRM updates so your team can focus on growth instead of repetitive work.',
      icon: Database,
      features: ['Gmail Sync', 'Auto Replies', 'Lead Management'],
      outcome: 'Keep leads and clients updated automatically with consistent follow-through.',
    },
    {
      id: 5,
      title: 'AI Chatbot Integration',
      category: 'ai',
      description: 'Add conversational assistants to your website or internal tools for responsive, round-the-clock support.',
      icon: MessageSquareText,
      features: ['Context Awareness', 'Real-Time Responses', 'Multi-Model Support'],
      outcome: 'Offer instant help, lead capture, or internal support without extra headcount.',
    },
    {
      id: 6,
      title: 'Internal Ops Automation',
      category: 'automation',
      description: 'Automate reporting, reminders, status updates, and internal handoffs so daily operations run smoother.',
      icon: Globe,
      features: ['Status Updates', 'Reporting', 'Team Notifications'],
      outcome: 'Reduce repetitive internal work and keep the team aligned.',
    },
  ];

  const serviceStats = [
    { label: 'Workflow blueprints', value: '20+' },
    { label: 'AI flows mapped', value: '35+' },
    { label: 'Deployment focus', value: 'Reliable' },
  ];

  const deliverySteps = [
    { step: '01', title: 'Audit', text: 'Review current tools, manual steps, and business goals before building anything.' },
    { step: '02', title: 'Map', text: 'Define trigger, logic, data movement, and fallback behavior before rollout.' },
    { step: '03', title: 'Build', text: 'Connect the tools, automate the flow, and test the key paths end to end.' },
    { step: '04', title: 'Handover', text: 'Document the system so it can be maintained, extended, or scaled easily.' },
  ];

  const filteredServices =
    selectedCategory === 'all' ? servicesData : servicesData.filter((service) => service.category === selectedCategory);

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.45 }} className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.01) 1px, transparent 1px)', backgroundSize: '28px 28px, 56px 56px', opacity: 0.04 }} />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_38%),radial-gradient(circle_at_85%_20%,_rgba(59,130,246,0.16),_transparent_30%)]" />
        <div className="mx-auto max-w-6xl text-center">
          <p className="section-kicker text-sky-300">Services</p>
          <h1 className="section-title mt-4 text-5xl text-white sm:text-6xl lg:text-7xl leading-[0.95]">
            Practical systems for{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              automation, AI, and product growth.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            I build services that are clear to buy, easy to trust, and focused on measurable automation outcomes. This is for clients who want execution, not vague promises.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['all', 'automation', 'ai'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 ${
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
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {serviceStats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.05 }}>
              <GlassCard className="h-full p-5 text-center transition-transform duration-300 hover:-translate-y-1 hover:border-sky-400/40">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-8 sm:px-8 lg:px-20 lg:pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredServices.map((service, index) => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.05 }}>
              <GlassCard className="group flex h-full flex-col p-8 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-500/25 bg-sky-500/10 text-sky-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{service.description}</p>

                <p className="mt-5 rounded-2xl border border-slate-800/80 bg-slate-950/50 px-4 py-3 text-sm leading-7 text-slate-300">
                  <span className="font-semibold text-sky-300">Outcome:</span> {service.outcome}
                </p>

                <ul className="mt-6 space-y-2 border-t border-slate-800 pt-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-300">
                      <span className="mr-2 h-2 w-2 rounded-full bg-sky-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45 }}>
            <GlassCard className="h-full p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-sky-400/40 lg:p-10">
              <SectionHeading
                kicker="How delivery works"
                title="A process that keeps scope clear and projects moving"
                description="This is designed for automation work: clear discovery, controlled implementation, and a useful handoff."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {deliverySteps.map((step) => (
                  <div key={step.step} className="rounded-2xl border border-slate-800/80 bg-slate-950/50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">{step.step}</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{step.text}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: 0.05 }}>
            <GlassCard className="flex h-full flex-col justify-between p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-sky-400/40 lg:p-10">
              <div>
                <p className="section-kicker text-sky-300">Need a custom solution?</p>
                <h2 className="section-title mt-4 text-4xl text-white sm:text-5xl">One-off builds, automation support, and system upgrades.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  If your business needs better routing, AI added into an existing flow, or a manual process moved into automation, I can adapt the work to the scope you actually need.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70">
                  Start a Build
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition hover:border-sky-400 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70">
                  See Results
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}