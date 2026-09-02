import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='relative bg-gradient-to-b from-slate-50 to-white border-t border-slate-200/80 pt-16 pb-8 text-slate-600 overflow-hidden'>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-sky-500/40 to-transparent"/>
      <div className='max-w-6xl mx-auto px-6'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200/60">
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className='inline-flex items-center gap-3 group'>
              <img src={logo} className='h-9 w-auto object-contain transition-transform duration-300'/>
              <span className='text-xl font-bold text-slate-900 tracking-tight transition-colors'>Zankhna Vaghela</span>
            </Link>
            <p className='text-sm leading-relaxed text-slate-500 max-w-sm'>
              Full Stack Web Developer specializing in crafting responsive React interfaces and high-performance backend APIs.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-100/80 px-3 py-1.5 rounded-full w-fit border-slate-200/50">
              <svg className='w-4 h-4 text-sky-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>Vadodara, Gujarat, India</span>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-4">
            <h4 className='text-xs gont-bold text-slate-900 uppercase tracking-wider'>Navigatiion</h4>
            <ul className='space-y-2.5 text-sm font-medium'>
              {[
                { name: 'Home', path: "/" },
                { name: 'About Me', path: "/about" },
                { name: 'Experience', path: "/experience" },
                { name: 'Projects', path: "/projects" },
                { name: 'Contact', path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className='transition-colors duration-200 inline-flex items-center gap-1.5 transform transition-transform'>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 spacey-4">
            <h4 className='text-xs font-bold text-slate-900 uppercase tracking-wider'>Let's Connect</h4>
            <div className="space-y-2 text-sm">
              <a href="mailto:zankhnavaghela2@gmail.com" className='flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/80 transition-all duration-200 group'>
                <div className="p-2 rounded-lg bg-sky-50 text-sky-600 transition-colors">
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round'strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <span className='block text-[10px] font-semibold text-slate-400 uppercase tracking-wider'>Email Me</span>
                  <span className='text-xs font-semibold text-slate-800 transition-colors break-all'>zankhnavaghela2@gmail.com</span>
                </div>
              </a>
              <a href="tel: +919737388584" className='flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/80 transition-all duration-200 group'>
                <div className="p-2 rounded-lg bg-sky-50 text-sky-600 transition-colors">
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />                  
                  </svg>
                </div>
                <div>
                  <span className='block text-[10px] font-semibold text-slate-400 uppercase tracking-wider'>Call Me</span>
                  <span className='text-xs font-semibold text-slate-800 transition-colors'>+91 9737388584</span>
                </div>
              </a>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <a href="https://www.linkedin.com/in/zankhna-vaghela-60263b24b" target='_blank' rel="noreferrer" className='flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-sky-700 bg-sky-50/80 border border-sky-100 rounded-lg transition-all duration-200'>
                <svg className='w-3.5 h-3.5 fill-current' viewBox='0 0 24 24'>
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z"/>                
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Vzankhna" target='_blank' rel='noreferrer' className='flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100/80 border border-slate-200 rounded-lg transition-all duration-200'>
                <svg className='w-3.5 h-3.5 fill-current' viewBox='0 0 24 24'>
                  <path d="m22.68 12.06-2.14-6.59a.9.9 0 0 0-.33-.44.89.89 0 0 0-.54-.12.87.87 0 0 0-.51.22.95.95 0 0 0-.25.48l-1.63 5h-10.56l-1.63-5a.95.95 0 0 0-.25-.48.87.87 0 0 0-.51-.22.89.89 0 0 0-.54.12.9.9 0 0 0-.33.44l-2.14 6.59a3.86 3.86 0 0 0 1.36 4.19l9.08 6.6a.91.91 0 0 0 1.08 0l9.08-6.6a3.86 3.86 0 0 0 1.36-4.19z"/>                
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p className='font-medium'>© {new Date().getFullYear()} <span className='text-slate-700 font-semibold'>Zankhna Vaghela</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
