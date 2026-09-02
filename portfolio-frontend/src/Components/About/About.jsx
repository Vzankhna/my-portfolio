import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='bg-slate-50 min-h-screen pt-20 text-slate-800'>
      <section className='relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/60'>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold">
                <span className='w-2 h-2 rounded-full bg-sky-500 animate-pulse'/>
                <span>About Me</span>
              </div>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-salte-900 tracking-tight leading-tight'>Full Stack Web Developer & Designer</h1>
              <p className='text-base sm:text-lg text-salte-60 leading-relaxed max-w-lg'>
                Based on Vadodara, Gujarat, I create responsive user interfaces, design efficient backend systems and turn complex ideas into seamless digital solutions.
              </p>
            </div>
            <div className="relative group">
              <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-900">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" alt='Dark Mode Coding Setup' loading='lazy'
                 className="w-full h-full object-cover object-center opacity-90 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-16 max-w-6xl mx-auto px-6'>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7 space-y-6">
            <h2 className='text-xs font-bold text-sky-600 uppercase tracking-wider'>Background</h2>
            <h3 className='text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight'>
              Designing user-friendly web interfaces and robust backend architectures.   
            </h3>
            <p className='text-sm sm:text-base text-slate-600 leading-relaxed'>
              My journey in software engineering has allowed me to bridge the gap between frontend user experience and backend application logic.
              I specialize in building web applications with clean, maintainable code using React.js, Node.js, Python and modern database platforms.  
            </p>
            <p className='text-sm sm:text-base text-slate-600 leading-relaxed'>
              Whether working on service platforms like "HomeFixer", "Apna-Customer", "AI-Meeting Tracker", Integrating payment systems or engineering 
              interactive dashboards, my focus remains on building scalable, performant applications tailored to real-world utility.  
            </p>
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200/80 px-4 py-2 rounded-xl">
                <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Vadodara, Gujarat, India</span>
              </div>  
            </div>
          </div> 
          <div className="md:col-span-5 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 space-y-6">
            <h4 className='text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3'>Quick Details</h4>
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <span className='block text-slate-400 font-medium'>Name</span>
                <span className='font-semibold text-slate-900'>Zankhna Vaghela</span>
              </div>
              <div>
                <span className='block text-slate-400 font-medium'>Role</span>
                <span className='font-semibold text-slate-900'>Full Stack Web Developer</span>
              </div>
              <div>
                <span className='block text-slate-400 font-medium'>Primary Stack</span>
                <span className='font-semibold text-slate-900'>React.js, Node.js, Python, MongoDB</span>
              </div>
              <div>
                <span className='block text-slate-400 font-medium'>Email</span>
                <a href="mailto:zankhnavaghela2@gmail.com" className='font-semibold text-sky-600'>zankhnavaghela2@gmail.com</a>
              </div>  
            </div>
          </div>
        </div>
      </section>
      <section className='py-16 bg-white border-y border-slate-200/60'>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
             <h2 className='text-xs font-bold text-sky-600 uppercase tracking-wider mb-2'>Academic Background</h2>
             <h3 className='text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight'>Education Qualification</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 transition-all duration-200 space-y-3">
               <span className='inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold'>Diploma Qualification</span>
               <h4 className='text-xl font-bold text-slate-900'>Diploma Engineering</h4>
               <p className='text-sm font-semibold text-slate-700'>Parul Polytechnic Institute</p>
               <p className='text-xs text-slate-500 leading-relaxed'>
                Gained foundational practical experience in programming, web layout structures, network systems and computationalll concepts.
               </p>
             </div>   
             <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 transition-all duration-200 space-y-3">
               <span className='inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold'>Degree Qualification</span>
               <h4 className='text-xl font-bold text-slate-900'>Bachlor of Engineering(B.E)</h4>
               <p className='text-xs text-slate-500 leading-relaxed'>
                 Focus on core computer engineering fundamentals, web design principles, software architecture and application development.
               </p>
             </div>
           </div>  
        </div>
      </section>
      <section className='py-20 max-w-6xl mx-auto px-6'>
        <div className="mb-12">
          <h2 className='text-xs font-bold text-sky-600 uppercase tracking-wider'>Career Journey</h2>
          <h3 className='text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight'>Work Experience</h3>  
        </div>
        <div className="space-y-6">
           <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 space-y-4">
             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
               <div>
                 <h4 className='text-xl font-bold text-slate-900'>Full Stack Developer</h4>
                 <p className='text-sm font-semibold text-sky-600'>Patrixel</p>
               </div>
               <span className='text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit'>Full Time Role</span> 
             </div>
             <ul className='space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside leading-relaxed'>
               <li>Engineered end-to-end features for platforms such as "HomeFixer", "Apna-Customer", "AI-Meeting Tracker" managing UI design and server integration.</li>
               <li>Integrated secure REST APIs, Payment gateways and backend handling.</li>
               <li>Maintained database schemas and improved overall front-to-back application performance.</li>
             </ul>
           </div> 
           <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 space-y-4">
             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
               <div>
                 <h4 className='text-xl font-bold text-slate-900'>Full Stack React Developer Intern</h4>
                 <p className='text-sm font-semibold text-sky-600'>V-Ex Tech Solution</p>
               </div> 
               <span className='text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit'>Internship</span>
             </div>
             <ul className='space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside leading-relaxed'>
               <li>Built responsive e-commerce web templates and optimized checkout flows.</li>
               <li>Designed reusable React components, improving UI modularity and client render speeds.</li>
             </ul>
           </div>
        </div>
      </section>
      <section className='py-20 bg-white border-t border-slate-200/60'>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
             <h2 className='text-xs font-bold text-sky-600 uppercase tracking-wider mb-2'>Technical Capabilities</h2>
             <h3 className='text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight'>Skills & Frameworks</h3>
          </div> 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
               <h4 className='text-base font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2'>FrontEnd Stack</h4>
               <div className="flex flex-wrap gap-2">
                 {['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map((sk, i) => (
                    <span key={i} className='px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700'>{sk}</span>
                 ))}
               </div> 
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h4 className='text-base font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2'>BackeEnd & Databases</h4>
              <div className="flex flex-wrap gap-2">
                 {['Python', 'Node.js', 'MongoDB', 'PostgreSQL', 'REST APIs'].map((sk,i) =>(
                    <span key={i} className='px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700'>{sk}</span>
                 ))}
              </div>  
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h4 className='text-base font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2'>Tools & Integrations</h4>
              <div className="flex flex-wrap gap-2">
                 {['Git', 'GitLab', 'GitHub', 'Render','Payment Integration'].map((sk,i) => (
                    <span key={i} className='px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700'>{sk}</span>
                 ))}
              </div>   
            </div>
          </div>
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

export default About
