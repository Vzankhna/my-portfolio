import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const projects = [
    {
      id: 'e-commerce',
      title: 'E-Commerce Platform',
      category: 'E-Commerce',
      description: 'A full-featured online store inerface featuring dynamic product displays, catlog filtering, shopping workflows and a secure checkout process.',
      longDescription: 'A full-featured online store inerface featuring dynamic product displays, catlog filtering, shopping workflows and a secure checkout process. The platform is built with React for the frontend, Node.js and Express for the backend, and MongoDB for the database. It includes user authentication, product management, and payment integration.',
      longDescription: 'A modern E-Commerce web platform emphasizing responsive layout design, optimized performance, and seamless user experience. The application is built using React for the frontend, Node.js and Express for the backend, and MongoDB for the database. It features user authentication, product management, shopping cart functionality, and secure payment processing.',
      stack: ['React', 'CSS3', 'Node.js', 'Express', 'MongoDB'],
      metrics: [
        { label: 'Role', value: 'React.JS Full Stack Developer Intern' },
        { label: 'Focus', value: 'UI Components & Styling' },
      ],
      features: [
        'Interactive product catalog with filtering and sorting options',
        'Shopping cart functionality with real-time updates',
        'Secure checkout process with payment integration',
        'Responsive design for optimal viewing on all devices',
        'User authentication and profile management'
      ],
      repoType: 'gitHub',
      repoUrl: 'https://github.com/Vzankhna',
    },
        {
      id: 'ai-meeting-tracker',
      title:'AI Meeting Tracker',
      category: 'Full Stack',
      description: 'An AI-powered meeting tracker that records, transcribes, and summarizes meetings for efficient follow-ups and action items.',
      longDescription: 'Built an Internal workflow management features to streamline meeting documentation and follow-up actions. The application leverages AI for real-time transcription and summarization, providing users with concise meeting notes and actionable items. It includes features such as meeting scheduling, participant management and integration with calendar applications and action-item across teams.',
      stack: ['React', 'Tailwind CSS', 'Python', 'REST API', 'PostgreSQL'],
      metrics: [
        { label: 'Role', value: 'Full Stack Developer' },
        { label: 'Focus', value: 'Backend Development & API Integration' },
      ],
      features: [
        'Real-time meeting transcription and summarization using AI',
        'Action item tracking and assignment for efficient follow-ups',
        'Integration with calendar applications for seamless scheduling',
      ],
      repoType: 'gitLab-private',
      repoUrl: null,
    },
    {
      id: 'HomeFixer',
      title: 'HomeFixer Service Platform',
      category: 'Full Stack',
      description: 'A comprehensive service platform connecting homeowners with skilled professionals for home repairs and maintenance.',
      longDescription: 'A comprehensive service platform connecting homeowners with skilled professionals for home repairs and maintenance. The platform is built with React for the frontend, Python(APIs) for the backend, and PostgreSQL for the database. It includes user authentication, service listings, booking management, and payment processing.',
      stack: ['React', 'Tailwind CSS', 'Python', 'REST API', 'PostgreSQL'],
      metrics: [
        { label: 'Role', value: 'Full Stack Developer' },
        { label: 'Focus', value: 'Backend Development & API Integration' },
      ],
      features: [
        'User-friendly interface for homeowners to request services',
        'Professional profiles with ratings and reviews',
        'Booking management system for scheduling appointments',
      ],
      repoType: 'gitLab-private',
      repoUrl: null,
    },
    {
      id: 'Apna-Customer',
      title: 'Apna-Customer Management System',
      category: 'Full Stack',
      description: 'A customer management system designed to streamline client interactions and data management for businesses.',
      longDescription: 'Developed to improve customer data management efficiency by providing unified activity logs, customer profile tracking and automated reporting and analytics. It includes features such as customer segmentation, activity tracking, and reporting tools.',
      stack: ['React', 'Tailwind CSS', 'Python', 'REST API', 'PostgreSQL'],
      metrics: [
        { label: 'Role', value: 'Full Stack Developer' },
        { label: 'Focus', value: 'Backend Development & API Integration' },
      ],
      features: [
        'Unified activity logs for comprehensive customer tracking',
        'Customer profile management with detailed analytics',
        'Automated reporting and analytics for data-driven decisions'
      ],
      repoType: 'gitLab-private',
      repoUrl: null,
    },

  ];
  const categories = ['All', 'Full Stack', 'E-Commerce'];
  const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  return (
    <div className="bg-slate-50 min-h-screen pt-20 text-slate-800 font-sans">
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-sky-500"/>
                <span>Project Showcase</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">Featured Projects</h1>
              <p className="text-base text-slate-600 leading-relaxed">
                Detailed overview of my recent projects, highlighting the technologies used, key features, and my role in their development. Each project demonstrates my ability to create efficient, user-friendly applications that meet specific business needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="flex flex-col justify-between rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-sm transition-all duration-300">
              <div>
                <div className="p-6 bg-slate-900 text-white flex items-center justify-between relative overflow-hidden">
                  <div className="space-y-1 relative z-10">
                    <span className="text-[10px] uppercase tracking-widest text-sky-400 font-bold font-mono">{proj.category}</span>
                    <h3 className="text-xl font-bold text-white leading-snug">{proj.title}</h3>
                  </div>
                  <div className="relative z-10">
                    {proj.repoType === 'gitHub' ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>
                        Open Source
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-300 bg-amber-950/60 border border-amber-800 px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"/>
                        Private Repository
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6 sm:p-8 space-y-5">
                  <p className='text-xs sm:text-sm text-slate-600 leading-relaxed'>{proj.longDescription}</p>
                  {proj.metrics && (
                    <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                      {proj.metrics.map((m, idx) => (
                        <div key={idx}>
                          <span className="block text-[10px] font-bold text-slate-400 uppercase">{m.label}</span>
                          <span className="text-xs font-semibold text-slate-800">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Highlights</h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {proj.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 flex-shrink-0"/>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {proj.stack.map((tech, i) => (
                    <span key={i} className= "px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-medium">{tech}</span>
                  ))}
                </div>
                <div className="pt-2">
                  {proj.repoType === 'gitHub' ? (
                    <a href={proj.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white text-xs font-semibold transition-all duration-200">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>View GitHub Repository</span>
                    </a>
                  ) : (
                    <div className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-slate-100 border border-slate-200/80 text-slate-500 text-xs font-semibold">
                      <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 fill-amber-500" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>                      
                      </svg>
                      <span>Private Company Repository</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='py-20 max-w-6xl mx-auto px-6'>
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className='text-2xl sm:text-3xl font-bold tracking-tight'>Interested in collaborting?</h3>
            <p className='text-slate-400 text-sm max-w-md'>
              I am open to full-time, part-time or freelance web application opportunities, frontend roles or projects.  
            </p>
          </div> 
          <Link to="/contact" className='inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 text-white text-sm font-semibold transition-all duration-200 flex-shrink-0'>
            <span>Get In Touch</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Projects
