'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-slate-50 rounded-[48px] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Info Sidebar */}
            <div className="lg:w-2/5 bg-blue-600 p-12 lg:p-16 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-display font-bold mb-8">Let&apos;s Discuss <br /> Your Assets.</h2>
                <p className="text-blue-100 text-lg mb-12 font-light leading-relaxed">
                  Connect with our technical advisory team for a free site assessment and cleaning strategy proposal.
                </p>

                <div className="space-y-8">
                  {[
                    { icon: Phone, label: 'Emergency Response', value: '+44 800 123 4567' },
                    { icon: Mail, label: 'Technical Support', value: 'tech@aquajet-industrial.com' },
                    { icon: MapPin, label: 'Global Headquarters', value: 'Level 42, Energy Tower, Aberdeen, UK' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="text-lg font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-600 overflow-hidden bg-slate-200 relative">
                      <Image 
                        src={`https://i.pravatar.cc/100?u=${i}`} 
                        alt="Specialist" 
                        fill 
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-blue-100 font-medium">Talk to an Engineer Now</p>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:w-3/5 p-12 lg:p-16 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all placeholder:text-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Company</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Energy Corp SA"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all placeholder:text-slate-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@energy-corp.com"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all placeholder:text-slate-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Service Required</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all text-slate-600 appearance-none">
                    <option>High Pressure Water Jetting</option>
                    <option>Tank & Vessel Cleaning</option>
                    <option>Shutdown Maintenance</option>
                    <option>Consultancy & Site Assessment</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Project Details</label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your maintenance challenge..."
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all placeholder:text-slate-300 resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formState !== 'idle'}
                  className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                    formState === 'sent' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-blue-600 text-white shadow-xl shadow-blue-200 hover:bg-blue-700'
                  }`}
                >
                  {formState === 'idle' && (
                    <>
                      <Send size={20} />
                      Submit RFQ
                    </>
                  )}
                  {formState === 'sending' && (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                  {formState === 'sent' && (
                    <>
                      <MessageSquare size={20} />
                      Proposal Request Received
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
