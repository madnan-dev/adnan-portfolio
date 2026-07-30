import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Code2, Database, Link as LinkIcon, MessageSquareText, Workflow, Zap, Cloud, Layers3, ShieldCheck, Rocket } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { label: 'Projects Delivered', value: '25+' },
    { label: 'Client Satisfaction', value: '99%' },
    { label: 'Automations Built', value: '50+' },
    { label: 'Years of Experience', value: '4+' },
  ];

  const skills = [
    { label: 'n8n', icon: Workflow, detail: 'Workflow orchestration, branching logic, and reliable automation design.' },
    { label: 'OpenAI API', icon: Bot, detail: 'Prompted workflows, agentic routing, and AI-assisted business operations.' },
    { label: 'Zapier', icon: Zap, detail: 'Fast glue layers between tools where speed matters.' },
    { label: 'REST APIs', icon: Layers3, detail: 'Clean integrations with robust request/response handling.' },
    { label: 'React', icon: Code2, detail: 'Responsive interfaces that make systems easy to use and trust.' },
    { label: 'Node.js', icon: Cloud, detail: 'Server-side logic, automation endpoints, and lightweight services.' },
    { label: 'PostgreSQL', icon: Database, detail: 'Structured data models for workflows, reporting, and system state.' },
    { label: 'GitHub', icon: LinkIcon, detail: 'Versioned delivery, maintainable code, and clean handoff discipline.' },
  ];

  const testimonials = [
    {
      quote: 'The workflow was delivered cleanly and replaced a messy manual process almost immediately.',
      name: 'Operations Lead',
      role: 'Placeholder testimonial',
    },
    {
      quote: 'The frontend looked premium, but more importantly the underlying system was dependable.',
      name: 'Client Founder',
      role: 'Placeholder testimonial',
    },
    {
      quote: 'Communication was direct, the scope was clear, and the handoff was easy for our team.',
      name: 'Hiring Manager',
      role: 'Placeholder testimonial',
    },
  ];

  const values = [
    {
      title: 'Reliability first',
      icon: ShieldCheck,
      text: 'I design with error handling, fallback states, and maintainability in mind so the system keeps working after launch.',
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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_38%),radial-gradient(circle_at_85%_20%,_rgba(59,130,246,0.16),_transparent_30%)]" />
        <div className="mx-auto max-w-6xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            About Me
          </span>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            I create thoughtful digital products that feel{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              premium and purposeful.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            I blend modern web design, clean development, and smart automation to help brands stand out and operate more efficiently.
          </p>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="p-5 text-center">
              <p className="text-3xl font-bold text-sky-300">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard className="p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">My Approach</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Built around clarity, speed, and long-term value</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Every project starts with understanding the user, the goal, and the story behind the brand. That allows me to create interfaces that feel effortless while remaining strong technically.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">React</span>
              <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">Tailwind CSS</span>
              <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">UI/UX</span>
              <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300">Automation</span>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
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
                  <h3 className="text-xl font-semibold text-white">Empowering better digital experiences</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    My mission is to turn complex ideas into simple, beautiful, and high-performing experiences that genuinely help people and businesses.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-white">Designing smarter digital futures</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    I envision a future where modern websites and automation tools feel effortless, accessible, and deeply connected to real business goals.
                  </p>
                </>
              )}
            </div>
          </GlassCard>
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
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <GlassCard key={value.title} className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{value.text}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            kicker="Skills & tools"
            title="A practical stack for automation, AI, and product delivery"
            description="The stack is chosen around outcomes: automation, integration, and clear frontend execution."
            align="center"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <GlassCard key={skill.label} className="p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{skill.label}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{skill.detail}</p>
                </GlassCard>
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
            {testimonials.map((testimonial) => (
              <GlassCard key={testimonial.name} className="p-6">
                <p className="text-sm leading-7 text-slate-300">“{testimonial.quote}”</p>
                <div className="mt-5 border-t border-slate-800 pt-4">
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{testimonial.role}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-20">
        <GlassCard className="mx-auto max-w-5xl px-8 py-12 text-center lg:px-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to build something exceptional?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Let’s turn your ideas into a portfolio or website that feels modern, trusted, and memorable.
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
    </div>
  );
}