'use client';

import { motion } from 'motion/react';
import { Shield, Zap, Wrench, ChevronRight } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Uncompromising Safety',
    description: 'Our Goal Zero policy ensures that every technician returns home safely. We maintain industry-leading safety certifications.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Zap,
    title: 'Advanced Engineering',
    description: 'We utilize proprietary robotic systems and high-precision nozzles to minimize downtime and maximize cleaning efficiency.',
    color: 'bg-slate-50 text-slate-600',
  },
  {
    icon: Wrench,
    title: 'Uptime Reliability',
    description: 'Built on decades of field experience, our maintenance protocols are designed for rapid deployment in critical environments.',
    color: 'bg-blue-50 text-blue-600',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-slate-50 rounded-bl-[200px] -z-10 opacity-50" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Legacy</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Decades of Excellence in <br />
              <span className="text-blue-600">Industrial Maintenance.</span>
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Founded to serve the high-stakes demands of the offshore oil and gas industry, AQUAJET has grown into a global leader in high-pressure water jetting technologies. We don&apos;t just clean; we restore assets to peak thermodynamic efficiency.
            </p>
            <div className="space-y-4">
              {['Offshore & Onshore Capabilities', 'Robotic Jetting Solutions', 'Environmental Compliance'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <ChevronRight size={14} />
                  </div>
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:w-1/2 grid gap-6">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
              >
                <div className="flex gap-6">
                  <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
