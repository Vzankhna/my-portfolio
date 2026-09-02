import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className='bg-slate-50 min-h-screen pt-20 text-slate-800'>
      <section className='relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/60'>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold">
                <span className='w-2 h-2 rounded-full bg-sky-500 animate-pulse'/>
                <span>Full Stack Web Developer</span>
              </div>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight'>
                Creating responsive React interfaces & robust backend APIs.
              </h1>
              <p className='text-base sm:text-lg text-slate-600 leading-relaxed'>
                Hi, I'm <span className='font-semibold text-slate-900'>Zankhna Vaghela</span>, based in Vadodara, Gujarat. I specialize in building end-to-end web application with React.js, python, Node.js and DataBases
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link to="/projects" className='inline-flex items-center justify-center gap-2 px-6 h-12 rounded-2xl bg-slate-900 text-white font-semibold text-sm transition-all duration-300'>
                  <span>View Projects</span>
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </Link>
                <Link to="/contact" className='inline-flex items-center justify-center px-6 h-12 rounded-2xl bg-white border border-slate-200/80 text-slate-700 font-semibold text-sm transition-all duration-300'>Get In Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-16 bg-white border-b border-slate-200/60'>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className='text-xs font-bold text-slate-400 uppercase tracking-widest mb-8 text-center sm:text-left'>Core Technologies & Expertise</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { title: 'FrontEnd', desc: "React.js, HTML5, CSS3, Tailwind" },
              { title: 'BackEnd', desc: "Node.js, Python, REST APIs" },
              { title: 'Databases', desc: "MongoDB, Databse Management, PostgreSQL" },
              { title: 'Tools', desc: "Visual Studio, GitHub, GitLab" },
              { title: 'Solutions', desc: 'FullStack Apps.' }
            ].map((skill, index) => (
              <div key={index} className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 transition-all duration-200">
                <h3 className='text-sm font-bold text-slate-900 mb-1'>{skill.title}</h3>
                <p className='text-xs text-slate-500 leading-relaxed'>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='py-20 max-w-6xl mx-auto px-6'>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className='text-xs font-bold text-sky-600 uppercase tracking-wider mb-2'>Work History</h2>
            <h3 className='text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight'>Professional Experience</h3>
          </div>
          <Link to="/experience" className='text-sm font-semibold text-sky-600 transition-colors'>View full career History</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 transition-all duration-200">
            <span className='text-xs font-semibold text-slate-400'>Full Stack Developer</span>
            <h4 className='text-xl font-bold text-slate-900 mt-1 mb-2'>Patrixel</h4>
            <p className='text-sm text-slate-600 leading-relaxed mb-4'>
              Developed end-to-end full stack web application, including the "HomeFixer", "Apna-Customer", "AI-Meeting Tracker" platform, implementing responsive frontend UI and API integration.
            </p>
            <span className='inline-block px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium'>
              React.js • Node.js • Python
            </span>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 transition-all duration-200">
            <span className='text-xs font-semibold text-slate-400'>Web Developer Intern</span>
            <h4 className='text-xl font-bold text-slate-900 mt-1 mb-2'>V-Ex Tech Solution</h4>
            <p className='text-sm text-slate-600 leading-relaxed mb-4'>
              Focused on e-commerce development, creating modern UI elements, optimized store layouts and maintaining database integrations.
            </p>
            <span className='inline-block px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium'>
              E-Commerce • HTML/CSS • JavaScript
            </span>
          </div>
        </div>
      </section>
      <section className='py-20 bg-white border-t border-slate-200/60'>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className='text-xs font-bold text-sky-600 uppercase tracking-wider mb-2'>Featured Work</h2>
              <h3 className='text-2xl sm:text-3xl font-bold text-skate-900 tracking-tight'>Recent Projects</h3>
            </div>
            <Link to="/projects" className='text-sm font-semibold text-sky-600 transition-colors'>Explore all Projects</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'ShopShphere',
                category: "Full Stack E-Commerce Application",
                desc: 'Book your Product, Track the Product, Payment Gateway for online Shopping.',
                stack: ['React.js', 'Node.js', 'MongoDB']
              },
              {
                title: "HomeFixer Platform",
                category: "Full stack Webb Application",
                desc: "A full-fledged service platform designed for seamless booking and service management.",
                stack: ['React.js', 'Python', 'PostgreSQL']
              },
              {
                title: "Apna-Customer",
                category: "Web Application",
                desc: "Know the customer details, messages, requirements, customer chat management.",
                stack: ['React.js', 'Python', 'PostgreSQL']
              },
            ].map((proj, i) => (
              <div key={i} className="flex flex-col justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200/80 transition-all duration-200">
                <div>
                  <span className='text-[10px] font-bold text-sky-600 uppercase tracking-wider'>{proj.category}</span>
                  <h4 className='text-lg font-bold text-slate-900 mt-1 mb-2'>{proj.title}</h4>
                  <p className='text-sm text-slate-500 leading-relaxed mb-6'>{proj.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.map((tech, idx) => (
                    <span key={idx} className='px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-xs font-medium'>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='py-20 max-w-6xl mx-auto px-6'>
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className='text-2xl sm:text-3xl font-bold tracking-tight'>Have a project in mind?</h3>
            <p className='text-slate-400 text-sm max-w-md'>Let's build something exceptional together. Feel free to reach put for inquiries or collaborations.</p>
          </div>
          <Link to="/contact" className='inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 text-white text-sm font-semibold transition-all duration-200 flex-shrink-0'>
            <span>Let's Talk</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
