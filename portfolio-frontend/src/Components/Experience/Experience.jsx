import React from 'react'
import { Link } from 'react-router-dom'

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Patrixel',
      type: 'Full-time',
      location: 'Vadodara, Gujarat',
      highlights: [
        'Built full-stack web applications including "HomeFixer","Apna-Customer", "AI-Meeting Tracker" service platform',
        'Engineered dynamic, responsive frontend interfaces using React.js and modern CSS frameworks.',
        'Developed scalable RESTful APIs in Python to manage logic and application workflows.',
        'Implemented secure payment gateway integrations and optimized backend database queries across PostgreSQL database structures.',
      ],
      skills: ['React.js', 'Python', 'Tailwind CSS', 'PosstgreSQL', 'REST APIs', 'Payment Gateway Integration'],
    },
    {
      role: 'Full Stack React Developer Intern',
      company: 'V-Ex Tech Solutions',
      type: 'Internship',
      location: 'Vadodara, Gujarat',
      highlights: [
        'Designed and implemented modern UI elements and layouts for e-commerce web applications.',
        'Created modular, reusable React components that enhanced frontend development efficiency and site performance.',
        'Developed APIs endpoints and build checkout experience',
      ],
      skills: ['React.js', 'Node.js', 'JavaScripts', 'HTML', 'CSS', 'E-Commerce Development'],
    },
  ];
  return (
    <div className='bg-slate-50 min-h-screen pt-20 text-slate-800'>
      <section className='relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/60'>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold">
              <span className='w-2 h-2 rounded-full bg-sky-500'/>
              <span>Career Experience</span>
            </div>
            <h1 className='text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight'>
              Professional Work Experience.
            </h1>
            <p className='text-base sm:text-lg text-slate-600 leading-relaxed'>
              A detailed overview of my career history, roles and practical technical experience in Web application Development.
            </p>
          </div>
        </div>
      </section>
      <section className='py-20 max-w-6xl mx-auto px-6'>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <h2 className='text-2xl font-bold text-slate-900'>{exp.role}</h2>
                    <span className='text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100'>{exp.type}</span>
                  </div>
                  <h3 className='text-base font-semibold text-sky-600'>{exp.company}</h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/60 w-fit">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{exp.location}</span>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className='text-xs font-bold text-slate-400 uppercase tracking-wider'>Key Responsibilities & Role</h4>
                <ul className='space-y-2.5 text-sm text-slate-600 leading-relaxed'>
                  {exp.highlights.map((item, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <span className='w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0'/>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <h4 className='text-xs font-bold text-slate-400 uppercase tracking-wider mb-3'>Technologies Utilized</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className='px-3 py-1 rounded-kg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700'>{skill}</span>
                  ))}
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

export default Experience
