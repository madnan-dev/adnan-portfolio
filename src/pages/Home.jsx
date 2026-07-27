import { Link } from 'react-router-dom';

export default function Home() {
  const skills = [
    { title: 'Frontend Development', icon: '💻', desc: 'Building responsive, reactive interfaces with modern frameworks.' },
    { title: 'Workflow Automation', icon: '⚡', desc: 'Connecting webhooks, APIs, and business logic to eliminate repetitive tasks.' },
    { title: 'API Integrations', icon: '🔌', desc: 'Fetching, transforming, and presenting real-time external data streams.' },
    { title: 'Modern Architecture', icon: '🛠️', desc: 'Designing scalable, modular, and easily maintainable web apps.' },
  ];

  const featuredProjects = [
    {
      title: 'Gmail Operations Dashboard',
      description: 'A custom command center to route, read, send, and process client communication.',
      tags: ['React', 'REST API', 'Automation']
    },
    {
      title: 'Medical Appointment Hub',
      description: 'Interactive booking and recommendation tool backed by dynamic routing workflows.',
      tags: ['React', 'Tailwind', 'Webhooks']
    },
    {
      title: 'Social Media Publisher',
      description: 'Automated post dispatch and scheduler interface integrated with third-party APIs.',
      tags: ['GraphQL', 'Automation', 'Dashboard']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative px-6 lg:px-20 py-20 text-center max-w-5xl mx-auto flex flex-col items-center justify-center">
        <span className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3 px-3 py-1 bg-sky-900/40 rounded-full border border-sky-800">
          Software & Automation Developer
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Building Modern Web Apps & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Intelligent Workflows</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
          Full-stack developer focused on creating intuitive web user interfaces, responsive layouts, and powerful backend automation pipelines.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 transition duration-200"
          >
            Explore Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium rounded-lg transition duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* 2. Interactive Capabilities/Skills Section */}
      <section className="px-6 lg:px-20 py-16 bg-slate-800/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">What I Do</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800 border border-slate-700/60 rounded-xl hover:-translate-y-1 hover:border-sky-500/50 transition duration-300 shadow-md hover:shadow-sky-500/10 cursor-pointer"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-slate-400 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Projects Section */}
      <section className="px-6 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Featured Work</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl border border-slate-700/60 overflow-hidden flex flex-col justify-between hover:border-slate-600 transition duration-200"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="text-xs px-2.5 py-1 bg-slate-700 text-sky-300 rounded font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Link
                    to="/projects"
                    className="text-sky-400 text-sm font-semibold hover:text-sky-300 flex items-center gap-1"
                  >
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Call To Action (CTA) Section */}
      <section className="px-6 lg:px-20 py-16 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Have an Automation or Web Idea in Mind?
          </h2>
          <p className="text-slate-400 mb-8">
            Let's build reliable web applications and integrations that deliver real results.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-lg shadow-lg hover:shadow-sky-500/20 transition duration-200"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

    </div>
  );
}