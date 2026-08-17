import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, Code2, Database, Link as LinkIcon, MessageSquareText, Workflow, Zap, Cloud, Layers3, ShieldCheck, Rocket } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { label: 'Automation flows mapped', value: '12+' },
    { label: 'Manual steps removed', value: '80+' },
    { label: 'Tools connected', value: '18+' },
    { label: 'Response time gain', value: '60%' },
  ];

  const skills = [
    { label: 'n8n', icon: Workflow, detail: 'Workflow orchestration, branching logic, and reliable automation design.' },
    { label: 'OpenAI API', icon: Bot, detail: 'Prompted workflows, AI classification, and response drafting.' },
    { label: 'Zapier', icon: Zap, detail: 'Fast glue between tools where speed matters more than complexity.' },
    { label: 'REST APIs', icon: Layers3, detail: 'Clean integrations with robust request and response handling.' },
    { label: 'Webhooks', icon: Code2, detail: 'Event-driven triggers that move data the moment something happens.' },
    { label: 'Airtable / Sheets', icon: Database, detail: 'Structured data for pipelines, logging, and operational tracking.' },
    { label: 'Slack / Notion', icon: Cloud, detail: 'Team handoffs, notifications, and lightweight internal systems.' },
    { label: 'Automation Handoffs', icon: LinkIcon, detail: 'Clear documentation and ownership so systems are easy to maintain.' },
  ];

  const testimonials = [
    {
      quote: 'The workflow replaced a messy manual process almost immediately.',
      name: 'Operations Lead',
      role: 'Service business',
    },
    {
      quote: 'The automation reduced admin work and made our follow-up process much faster.',
      name: 'Client Founder',
      role: 'Agency owner',
    },
    {
      quote: 'Communication was direct, the scope was clear, and the handoff was easy for the team.',
      name: 'Hiring Manager',
      role: 'Startup partner',
    },
  ];

  const values = [
    {
      title: 'Reliability first',
      icon: ShieldCheck,
      text: 'I design with error handling, fallback steps, and maintainability in mind so the system keeps working after launch.',
    },
    {
      title: 'Business outcome focus',
      icon: Rocket,
      text: 'The point of the build is measurable impact: fewer manual steps, faster response times, and cleaner operations.',
    },
    {
      title: 'Direct communication',
      icon: MessageSquareText,
      text: 'I keep the process clear and concise so stakeholders know what is happening, what is blocked, and what ships next.',
    },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.45 }} className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.01) 1px, transparent 1px)', backgroundSize: '28px 28px, 56px 56px', opacity: 0.04 }} />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_38%),radial-gradient(circle_at_85%_20%,_rgba(59,130,246,0.16),_transparent_30%)]" />
        <div className="mx-auto max-w-6xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            About Me
          </span>
          <h1 className="text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            I build AI automation systems that feel{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              clear, dependable, and useful.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            I focus on AI automation, workflow design, and system integration to help businesses reduce repetitive work and move faster.
          </p>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.05 }}>
              <GlassCard className="h-full p-5 text-center transition-transform duration-300 hover:-translate-y-1 hover:border-sky-400/40">
                <p className="text-3xl font-bold text-sky-300">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
            <GlassCard className="h-full p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-sky-400/40 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">My Approach</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Built around clarity, speed, and long-term value</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Every project starts with understanding the workflow, the bottleneck, and the business goal behind it. That lets me design automations that feel simple on the surface but stay strong technically.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">AI Workflows</span>
                <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">n8n</span>
                <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">OpenAI</span>
                <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">Integrations</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5, delay: 0.05 }}>
            <GlassCard className="h-full p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-sky-400/40">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeTab === 'mission' ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Mission
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeTab === 'vision' ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Vision
                </button>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
                {activeTab === 'mission' ? (
                  <>
                    <h3 className="text-xl font-semibold text-white">Building dependable automation for real work</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      My mission is to turn repetitive business tasks into simple, dependable automation systems that genuinely save time and reduce errors.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-white">Designing smarter business workflows</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      I envision a future where AI workflows, internal tools, and business systems are connected clearly and run with less manual effort.
                    </p>
                  </>
                )}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            kicker="Solo founder"
            title="I work independently, which means fewer handoffs and faster delivery"
            description="There is no fake team here. I handle the strategy, build, and delivery end-to-end, bringing in only what the project needs."
            align="center"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div key={value.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.07 }}>
                  <GlassCard className="h-full p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-sky-400/40">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">{value.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{value.text}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            kicker="Skills & tools"
            title="A practical stack for automation, AI, and delivery"
            description="The stack is chosen around outcomes: automation, integration, and clear handoffs."
            align="center"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div key={skill.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.05 }}>
                  <GlassCard className="h-full p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-sky-400/40">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{skill.label}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{skill.detail}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            kicker="Social proof"
            title="Placeholder testimonials you can replace with real quotes"
            description="This section is intentionally structured for later client feedback, LinkedIn recommendations, or recruiter quotes."
            align="center"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.07 }}>
                <GlassCard className="h-full p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-sky-400/40">
                  <p className="text-sm leading-7 text-slate-300">“{testimonial.quote}”</p>
                  <div className="mt-5 border-t border-slate-800 pt-4">
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{testimonial.role}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-20">
        <GlassCard className="mx-auto max-w-5xl px-8 py-12 text-center transition-transform duration-300 hover:-translate-y-1 hover:border-sky-400/40 lg:px-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to automate something repetitive?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Let’s turn your manual process into a workflow that feels modern, trusted, and easy to maintain.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100">
              Get in Touch
            </Link>
            <Link to="/projects" className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-sky-400 hover:text-white">
              View Projects
            </Link>
          </div>
        </GlassCard>
      </section>
    </motion.div>
  );
}