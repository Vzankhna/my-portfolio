import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/logo.png"

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation();

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Experience", path: "/experience" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];
    const isActive = (path) => location.pathname === path;
  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/70'>
       <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
         <div className="h-20 flex items-center justify-between">
            <Link to="/" onClick={() => setIsOpen(false)} className='flex items-center gap-3 flex-shrink-0'>
                <img src={logo} className="h-10 w-auto object-contain transition-transform duration-300" />
                <div className="hidden sm:block">
                   <h1 className='text-lg font-bold text-slate-900 tracking-tight'>Zankhna Vaghela</h1> 
                </div>
            </Link>
            <nav className='hidden md:flex items-center gap-8 lg:gap-10'>
               {links.map((link) => {
                const active = isActive(link.path);
                return(
                    <Link key={link.path} to={link.path} className={`relative py-2 text-sm lg:text-[15px] font-medium transition-all duration-300 group ${
                        active ? "text-sky-600" : "text-slate-600"}`}>
                      {link.name}
                    </Link>
                )
               })} 
            </nav>
            <div className="hidden md:flex items-center">
                <Link to="/contact" className="inline-flex items-center justify-center w-[120px] h-11 rounded-2xl bg-slate-900 text-white text-sm font-semibold text-center transition-all duration-300">Let's Talk
                 <svg className='w-4 h-4 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M17 814 4m0 01-4 4m4-4H3"/>
                 </svg>
               </Link>
            </div>
            <button type='button' onClick={() => setIsOpen(!isOpen)} className='md:hidden p-2 text-slate-700 transition-colors'>
               {isOpen ? (
                 <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                 </svg>
               ) : (
                <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                   <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/> 
                </svg>
               )} 
            </button>
         </div>
       </div> 
       <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-slate-100 ${
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-5 py-5 space-y-1">
             {links.map((link) => {
                const active = isActive(link.path);
                return(
                    <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`flex items-center justify-between px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                        active ? "text-sky-600 bg-sky-50" : "text-slate-700" }`}>
                       {link.name}
                       {active && (
                          <span className='w-2 h-2 rounded-full bg-sky-500'></span>
                       )}     
                    </Link>
                )
             })}
             <div className="pt-4">
                <Link to="/contact" onClick={() => setIsOpen(false)} className='flex items-center justify-center gap-2 w-full py-3 rounded-full bg-slate-900 text-white text-sm font-semibold transition-all duration-300'>Let's Talk
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M4 814 4m0 01-4 4m4-4H3"/>
                    </svg>
                </Link>
             </div>
          </div>  
        </div>
    </header>
  )
}

export default NavigationBar
