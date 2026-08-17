import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Workflow, Sparkles, ShieldCheck, MoveRight, Layers3, MessageSquare, Gauge, ChartNoAxesCombined, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';

export default function Home() {
  const metrics = [
    { label: 'Automation flows planned', value: 12, suffix: '+' },
    { label: 'Repetitive steps removed', value: 90, suffix: '%' },
    { label: 'Response time improvement', value: 68, suffix: '%' },
  ];

  const [counts, setCounts] = useState(metrics.map(() => 0));

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCounts(metrics.map((metric) => metric.value));
    }, 250);

    return () => window.clearTimeout(timer);
  }, []);

  const services = [
    {
      title: 'Workflow Automation',
      icon: Workflow,
      desc: 'n8n workflows, webhooks, and smart triggers that remove repetitive manual work.',
    },
    {
      title: 'AI Assistants',
      icon: Bot,
      desc: 'OpenAI-powered assistants that classify requests, draft replies, and guide next actions.',
    },
    {
      title: 'System Integrations',
      icon: Layers3,
      desc: 'Reliable connections across CRMs, spreadsheets, databases, forms, and internal tools.',
    },
    {
      title: 'Ops Automation',
      icon: Sparkles,
      desc: 'Lead handling, follow-up sequences, reporting, and admin tasks moved into repeatable systems.',
    },
  ];

  const process = [
    { step: '01', title: 'Discover', text: 'Identify the repetitive task, the bottlenecks, and the business result that matters most.' },
    { step: '02', title: 'Map', text: 'Break the workflow into trigger, logic, data movement, and approval points before building.' },
    { step: '03', title: 'Automate', text: 'Build the system in n8n or similar tools, connect APIs, and test the edge cases.' },
    { step: '04', title: 'Handover', text: 'Document the flow, explain the logic, and leave the team with a system they can trust.' },
  ];

  const workflowNodes = [
    { title: 'Trigger', icon: MessageSquare, tone: 'from-cyan-400/30 to-sky-500/10', detail: 'A form submission, email, message, or database event starts the flow.' },
    { title: 'AI Decision', icon: Bot, tone: 'from-sky-400/30 to-blue-500/10', detail: 'The request is classified, summarized, or routed by AI logic.' },
    { title: 'Automated Actions', icon: Workflow, tone: 'from-blue-400/30 to-indigo-500/10', detail: 'The system sends updates to CRM, Slack, email, or sheets.' },
    { title: 'Outcome', icon: CheckCircle2, tone: 'from-emerald-400/30 to-teal-500/10', detail: 'Manual effort drops and the process becomes consistent.' },
  ];

  const featuredProjects = [
    {
      title: 'Lead Qualification Flow',
      metric: 'Faster response time',
      description: 'Captured new leads, scored intent, and sent qualified prospects to the right pipeline automatically.',
      tags: ['n8n', 'OpenAI', 'CRM', 'Webhooks'],
    },
    {
      title: 'Support Triage Assistant',
      metric: 'Reduced manual sorting',
      description: 'Read incoming support requests, tagged urgency, and routed them to the correct team automatically.',
      tags: ['OpenAI API', 'Slack', 'Email', 'Automation'],
    },
    {
      title: 'Admin Cleanup System',
      metric: 'Less repetitive work',
      description: 'Moved recurring admin steps into a consistent workflow for sheets, reminders, and follow-ups.',
      tags: ['Google Sheets', 'Notion', 'Zapier', 'n8n'],
    },
  ];

  const testimonials = [
    {
      quote: 'He turned a messy manual process into a workflow the team could actually trust.',
      name: 'Operations Lead',
      role: 'Service Business',
    },
    {
      quote: 'The automation reduced follow-up work and made our response process much faster.',
      name: 'Founder',
      role: 'Small Agency',
    },
    {
      quote: 'Clear communication, clean delivery, and a result that saved the team time every week.',
      name: 'Product Lead',
      role: 'Startup Partner',
    },
  ];

  const skillStack = [
    { label: 'n8n', icon: Workflow },
    { label: 'OpenAI API', icon: Bot },
    { label: 'Zapier', icon: Sparkles },
    { label: 'REST APIs', icon: Layers3 },
    { label: 'Google Sheets', icon: ChartNoAxesCombined },
    { label: 'Slack', icon: Gauge },
    { label: 'Notion', icon: ShieldCheck },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.45 }} className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden px-6 py-16 sm:px-8 lg:px-20 lg:py-24">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_26%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.16),transparent_24%),linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(2,6,23,1)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30" />
          <motion.div
            className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl"
            animate={{ y: [0, 18, 0], x: [0, 8, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
            animate={{ y: [0, -14, 0], x: [0, -10, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.01) 1px, transparent 1px)', backgroundSize: '28px 28px, 56px 56px', opacity: 0.04 }} />

        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="section-kicker text-sky-300">AI Automation Engineer / Workflow Builder</p>
            <h1 className="section-title mt-4 text-6xl text-white sm:text-7xl xl:text-8xl leading-tight">
              I build AI automation systems that remove repetitive work and keep businesses moving.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              I design AI workflows, API integrations, and smart handoff systems that capture leads, sort requests, send follow-ups, and turn manual tasks into dependable automation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300 focus-ring"
              >
                View Automations
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition hover:border-sky-400 hover:bg-white/10 focus-ring"
              >
                Let&apos;s Talk
                <MoveRight className="h-4 w-4" />
              </Link>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-6 py-3 font-semibold text-sky-100 transition hover:bg-sky-500/15 focus-ring"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-6 gap-4">
                <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }} className="col-span-4 row-span-2">
                  <GlassCard className="h-full p-6 transition-transform hover:-translate-y-1 hover:border-sky-400/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">Current Focus</p>
                    <h3 className="mt-3 text-2xl font-bold text-white">What I optimize</h3>
                    <div className="mt-4 grid gap-3">
                      {metrics.map((metric, index) => (
                        <div key={metric.label} className="rounded-md bg-slate-900/50 p-3 border border-slate-800">
                          <p className="text-2xl font-semibold text-white">{counts[index]}{metric.suffix}</p>
                          <p className="mt-1 text-sm text-slate-400">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: 0.05 }} className="col-span-2">
                  <GlassCard className="h-full p-6 transition-transform hover:-translate-y-1 hover:border-sky-400/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">Services</p>
                    <h4 className="mt-2 text-lg font-semibold text-white">Core offers</h4>
                    <div className="mt-4 grid gap-3">
                      {services.slice(0, 3).map((s) => (
                        <div key={s.title} className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-2xl bg-sky-500/10 text-sky-300 flex items-center justify-center"><s.icon className="h-4 w-4" /></div>
                          <p className="text-sm text-slate-300">{s.title}</p>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6, delay: 0.08 }} className="col-span-2 row-span-1">
                  <GlassCard className="h-full p-6 transition-transform hover:-translate-y-1 hover:border-sky-400/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">Workflow Preview</p>
                    <h4 className="mt-2 text-lg font-semibold text-white">Automation flow</h4>
                    <div className="mt-4 space-y-3 text-sm text-slate-300">
                      {workflowNodes.map((n) => (
                        <div key={n.title} className="flex items-start gap-3">
                          <div className="mt-1 h-8 w-8 rounded-2xl bg-slate-900/60 flex items-center justify-center text-sky-300"><n.icon className="h-4 w-4" /></div>
                          <div>
                            <p className="font-semibold text-white text-sm">{n.title}</p>
                            <p className="text-xs text-slate-400">{n.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65, delay: 0.1 }} className="col-span-4">
                  <GlassCard className="h-full p-6 transition-transform hover:-translate-y-1 hover:border-sky-400/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">How I work</p>
                    <h4 className="mt-2 text-lg font-semibold text-white">Process</h4>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {process.map((p) => (
                        <div key={p.step} className="rounded-md border border-slate-800/60 bg-slate-900/50 p-3">
                          <p className="text-xs font-semibold text-sky-300">{p.step}</p>
                          <p className="mt-1 font-semibold text-white">{p.title}</p>
                          <p className="mt-1 text-xs text-slate-400">{p.text}</p>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative"
          >
            <GlassCard className="relative overflow-hidden p-5 sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.82),rgba(2,6,23,0.9))]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Automation Demo</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">A live-looking n8n workflow</h2>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Running
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  {workflowNodes.map((node, index) => {
                    const Icon = node.icon;

                    return (
                      <div key={node.title} className="relative">
                        {index < workflowNodes.length - 1 ? (
                          <svg className="absolute left-7 top-14 h-10 w-10 text-sky-400/40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                            <path d="M20 0v40" stroke="currentColor" strokeDasharray="5 6" strokeWidth="1.5" />
                          </svg>
                        ) : null}
                        <div className={`rounded-2xl border border-white/8 bg-gradient-to-r ${node.tone} p-4 backdrop-blur-sm`}>
                          <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-slate-950/70 text-sky-300 shadow-lg shadow-sky-950/25">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">{node.title}</p>
                              <p className="mt-1 text-sm leading-6 text-slate-400">{node.detail}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-20">
        <div className="section-shell">
          <SectionHeading
            kicker="How I work"
            title="A clear process that turns manual tasks into reliable automations"
            description="The goal is not just shipping something that works once. It is building an automation that stays understandable, maintainable, and useful after launch."
            align="center"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <GlassCard key={item.step} className="cursor-glow p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">{item.step}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <GlassCard className="p-7 sm:p-8">
            <SectionHeading
              kicker="Capabilities"
              title="The systems I actually build"
              description="Automation first, AI where it adds leverage, and integrations where the business needs data to move cleanly."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div key={service.title} className="rounded-2xl border border-slate-800/80 bg-slate-950/50 p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{service.desc}</p>
                  </div>
                );
              })}
            </div>
          </GlassCard>

          <div className="grid gap-4">
            {skillStack.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <GlassCard className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-500/10 text-sky-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{skill.label}</p>
                        <p className="text-sm text-slate-400">Trusted in delivery</p>
                      </div>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-20">
        <div className="section-shell">
          <SectionHeading
            kicker="Selected Work"
            title="Case-study style results, not vague portfolio filler"
            description="Each project shows the problem, the workflow, and the measurable value. That matters to clients and recruiters alike."
            align="center"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.38, delay: index * 0.06 }}
              >
                <GlassCard className="group flex h-full flex-col overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30">
                  <div className="h-44 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.28),transparent_38%),linear-gradient(135deg,rgba(15,23,42,1),rgba(2,6,23,1))]" />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">{project.metric}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1 text-xs text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-20">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <GlassCard className="p-7 sm:p-8">
            <SectionHeading
              kicker="Testimonials"
              title="Client feedback that builds trust"
              description="Use this section for real client quotes, LinkedIn recommendations, or recruiter feedback when you have them."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-2xl border border-slate-800/80 bg-slate-950/50 p-5">
                  <p className="text-sm leading-7 text-slate-300">“{item.quote}”</p>
                  <div className="mt-4">
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="flex flex-col justify-between p-7 sm:p-8">
            <div>
              <p className="section-kicker text-sky-300">Ready when you are</p>
              <h2 className="section-title mt-4 text-4xl text-white sm:text-5xl">Let’s automate something repetitive and make it dependable.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
                Whether it is lead intake, customer support, reporting, or internal admin, the goal is the same: less manual work, better consistency, and a smooth handoff.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-200 focus-ring">
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition hover:border-sky-400 hover:bg-white/10 focus-ring">
                Learn More About Me
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </motion.div>
  );
}