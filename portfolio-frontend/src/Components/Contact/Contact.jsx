import React,{ useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ 
    show: false,
    type: '',
    message: '',
    method: ''
  });
  const MY_PHONE_NUMBER = '919737388584';
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const validateForm = () => {
    if(!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({
        show: true,
        type: 'error',
        message: 'Please fill all required fields.',
        method: '',
      });
      return false;
    }
    return true;
  }
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const text = 
      `*New Message*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Subject:* ${encodeURIComponent(formData.subject)}%0A%0A` +
      `Message:* ${encodeURIComponent(formData.message)}`;
      setStatus({ 
        show: true,
        type: 'success',
        message: 'Redirect to WhatsApp',
        method: 'WhatsApp',
      });
      window.open(`https://wa.me/${MY_PHONE_NUMBER}?text=${text}`, '_blank');
      setFormData({ name: '', email: '', subject: '', message: '' });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!validateForm()) return;

    const text =
    `Message%0A` +
    `From: ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)})%0A` +
    `Subject: ${encodeURIComponent(formData.subject)}%0A%0A` +
    `Message: %0A${encodeURIComponent(formData.message)}`;
    setStatus({
      show: true,
      type: 'success',
      message: 'Opening Message App..',
      method: 'SMS',
    });
    window.location.href = `sms:${MY_PHONE_NUMBER}?body=${text}`;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  return (
    <div className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-slate-50 to-slate-100 min-h-screen text-slate-800 font-sans antialiased'>
      <section className='relative overflow-hidden pt-24 pb-14 bg-white/70 backdrop-blur-md border-b border-slate-200/80'>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-bold tracking-wide uppercase">
              <span className='relative flex h-2 w-2'>
                <span className='absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-sky-500'></span>
              </span>
              <span>Contact Me</span>
            </div>
            <h1 className='text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight'>
              Contact & <span className='bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent'>Inquiries</span>
            </h1>
            <p className='text-sm sm:text-base text-slate-600 leading-relaxed font-normal'>
              Directly Message me via WhatsApp or Text Message
            </p>
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 space-y-6">
              <h3 className='text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2'>
                <svg className='w-5 h-5 text-sky-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z'/>
                </svg>Direct Channels
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 transition-all">
                  <span className='text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-1'>LinkedIn Profile</span>
                  <a href="https://www.linkedin.com/in/zankhna-vaghela-60263b24b/" target='_blank' rel='noreferrer' className='text-sm font-semibold text-slate-800 transition-colors flex items-center justify-between'>
                    <span className='flex items-center gap-2'>
                      <svg className='w-4 h-4 fill-sky-600' viewBox='0 0 24 24'>
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>                        
                      </svg> LinkedIn Profile
                    </span>
                  </a>
                </div>
                <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-3 relative overflow-hidden">
                  <span className='text-[10px] font-mono text-sky-400 uppercase tracking-widest font-bold block'>System Protocol</span>
                  <h4 className='text-lg font-bold tracking-tight'>Direct Message</h4>
                  <p className='text-xs text-slate-400 leading-relaxed'>
                    Messages open pre-formatted directly inside your device's WhatsApp or SMS application
                  </p>
                </div>
              </div>
            </div>
          </div>
                        <div className="lg:col-span-7">
                <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 space-y-6">
                  <div>
                    <h3 className='text-2xl font-bold text-slate-900 tracking-tight'>Send Message</h3>
                    <p className='text-xs text-slate-500 mt-1'>Please fill all fields.</p>
                  </div>
                  {status.show && (
                    <div className={`p-4 rounded-2xl text-xs sm:text-sm font-semibold flex items-center justify-between border transition-all ${
                      status.type === 'success' ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'}`}>
                        <div className="flex items-center gap-2.5">
                          <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                            status.type === 'success' ? 'be-emerald-500' : 'bg-rose-500'}`}/>
                            <span>{status.message}</span>
                        </div>
                        <button type='button' onClick={() => setStatus({ show:false, type: '', message: '', method: '' })} className='text-slate-400 text-xs font-bold ml-3'>
                          ✕
                        </button>
                    </div>
                  )}
                  <form className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Name: <span className='text-rose-500'>*</span></label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder='Enter Your Name'
                        className='w-full px-4 py-3.5 rounded-2xl bg-slate-50/80 border border-slate-200 text-slate-800 text-sm transition-all' />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Email: <span className='text-rose-500'>*</span></label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder='Enter Your Email id'
                        className='w-full px-4 py-3.5 rounded-2xl bg-slate-50/80 border border-slate-200 text-slate-800 text-sm transition-all' />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Subject: <span className='text-rose-500'>*</span></label>
                      <input type="text" name="subject" required value={formData.subject} onChange={handleChange} placeholder='Job Opportunity / Inquiry'
                      className='w-full px-4 py-3.5 rounded-2xl bg-slate-50/80 border border-slate-200 text-slate-800 text-sm transition-all' />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Message: <span className='text-rose-500'>*</span></label>
                      <textarea name="message" required rows='5' value={formData.message} onChange={handleChange} placeholder='Send Message'
                      className='w-full px-4 py-3.5 rounded-2xl bg-slate-50/80 border border-slate-200 text-slate-800 text-sm transition-all' />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <button type="button" onClick={handleWhatsAppSubmit} className='w-full py-4 px-5 rounded-2xl bg-emerald-600 active:scale-[0.99] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2.5'>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                        <span>Send via WhatsApp</span>
                      </button>
                      <button type="button" onClick={handleSubmit} className='w-full py-4 px-5 rounded-2xl bg-slate-900 active:scale-[0.99] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2.5'>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
                        </svg>
                        <span>Send via Message</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
