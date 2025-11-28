'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_id: 'contact_form',
          form_data: data,
          project_id: 'b2948de0-75d9-4dcb-93a2-67d27d168f5d',
          founder_id: '2653d770-2a50-4b12-924d-c32203099a90',
        }),
      });

      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-4">Get Started Today</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-white mb-6">Transform Your Workplace Culture</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Schedule a personalized demo and discover how CultureIQ Analytics can unlock your team's full potential.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-white mb-4">Why Leading Companies Choose Us</h3>
              <p className="text-slate-400">Join 500+ enterprise teams using CultureIQ Analytics to build data-driven, high-performance cultures.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-600/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <p className="text-slate-400">enterprise@cultureiq.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-600/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <p className="text-slate-400">+1 (888) 555-0123</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-600/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Headquarters</h4>
                  <p className="text-slate-400">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <p className="text-slate-500 text-sm">Trusted by HR leaders at Fortune 500 companies worldwide.</p>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {status === 'success' ? (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center">
                <div className="w-16 h-16 bg-emerald-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Thanks for signing up!</h3>
                <p className="text-slate-500">We will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full rounded-xl border-slate-200 border focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600 transition-all duration-300 text-slate-900 placeholder:text-slate-400" 
                    placeholder="Your name" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full rounded-xl border-slate-200 border focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600 transition-all duration-300 text-slate-900 placeholder:text-slate-400" 
                    placeholder="you@company.com" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-900">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full rounded-xl border-slate-200 border focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600 transition-all duration-300 text-slate-900 placeholder:text-slate-400" 
                    placeholder="+1 (555) 000-0000" 
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'} 
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Submitting...' : 'Get Started'}
                  <Send className="w-5 h-5 ml-2" />
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  </div></div>);
}