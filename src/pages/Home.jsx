import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      title: 'Frontend Craftsmanship',
      icon: '⚡',
      desc: 'Responsive interfaces with polished interactions and conversion-focused layouts.',
    },
    {
      title: 'Automation Systems',
      icon: '🤖',
      desc: 'Workflow automations that save hours and keep teams focused on high-value tasks.',
    },
    {
      title: 'API Integration',
      icon: '🔌',
      desc: 'Seamless connections between apps, dashboards, and live data streams.',
    },
    {
      title: 'Scalable Architecture',
      icon: '🧱',
      desc: 'Clean, modular solutions designed to grow with your product and business.',
    },
  ];

  const highlights = [
    { label: 'Projects Delivered', value: '25+' },
    { label: 'Happy Clients', value: '10+' },
    { label: 'Years Experience', value: '4+' },
  ];

  const featuredProjects = [
    {
      title: 'Operations Dashboard',
      description: 'A smart command center for routing requests, communication, and task visibility.',
      tags: ['React', 'API', 'Automation'],
    },
    {
      title: 'Appointment Platform',
      description: 'A modern booking experience with live updates, recommendations, and seamless flow.',
      tags: ['React', 'Tailwind', 'UX'],
    },
    {
      title: 'Social Publisher',
      description: 'An automated publishing experience integrated with multi-channel content workflows.',
      tags: ['GraphQL', 'Dashboard', 'Integration'],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.20),_transparent_42%),radial-gradient(circle_at_85%_15%,_rgba(59,130,246,0.18),_transparent_30%)]" />
        <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
              Software & Automation Developer
            </span>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Building elegant digital experiences with{' '}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                clarity and impact.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
              I design websites and automation systems that feel premium, perform beautifully, and help businesses grow with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="rounded-full bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition duration-200 hover:bg-sky-400"
              >
                Explore Projects
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition duration-200 hover:border-sky-400 hover:text-white"
              >
                Let’s Talk
              </Link>
            </div>
          </div>

          <div className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-sky-950/30 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">Current Focus</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Premium web experiences</h2>
              </div>
              <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">
                Available for new work
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-center">
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">What clients value</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Modern UI that feels polished from the first scroll</li>
                <li>• fast, responsive experiences across all devices</li>
                <li>• thoughtful automation that removes repetitive work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Capabilities</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Designed to look sharp and work smoothly</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{service.desc}</p>
                <div className="mt-4 text-sm font-semibold text-sky-300">0{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-slate-950/50 lg:p-12">
          <div className="mb-10 flex flex-col gap-3 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Selected Work</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Recent projects built with purpose</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-6"
              >
                <div className="mb-4 h-32 rounded-2xl bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.25),_transparent_50%),linear-gradient(135deg,_rgba(30,41,59,1),_rgba(15,23,42,1))]" />
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-sky-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-sky-500/20 bg-sky-500/10 px-8 py-12 text-center shadow-lg shadow-sky-950/20 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Ready when you are</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Let’s create a portfolio or website that feels truly professional.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Whether it is a fresh landing page or a full website redesign, I can shape it into something modern, clean, and memorable.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100">
              Start a Project
            </Link>
            <Link to="/about" className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-sky-400 hover:text-white">
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}