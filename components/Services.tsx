'use client';

import { motion } from 'motion/react';
import { 
  Waves, 
  Container, 
  Tangent as Pipeline, 
  Flame, 
  Clock 
} from 'lucide-react';

const services = [
  {
    title: 'High-Pressure Water Jetting',
    description: 'Up to 40,000 PSI precision jetting for removal of hardened deposits, scale, and coatings without surface damage.',
    icon: Waves,
  },
  {
    title: 'Tank & Vessel Cleaning',
    description: 'Specialized non-entry robotic tank cleaning systems for hazardous environments, ensuring total residue removal.',
    icon: Container,
  },
  {
    title: 'Pipeline Pigging & Flushing',
    description: 'Comprehensive line cleaning to restore flow capacity and integrity in upstream and midstream operations.',
    icon: Pipeline,
  },
  {
    title: 'Heat Exchanger Cleaning',
    description: 'Internal and external bundle cleaning to restore thermal efficiency and prolong equipment lifespan.',
    icon: Flame,
  },
  {
    title: 'Shutdown Maintenance',
    description: 'Rapid-response teams for major plant shutdowns, executing complex cleaning schedules within strict timelines.',
    icon: Clock,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            Core Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Specialized Industrial <span className="text-blue-600">Cleaning.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-slate-500 text-lg"
          >
            We deploy the industry&apos;s most advanced pressure technologies to maintain critical oil and gas infrastructure at peak performance.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group"
            >
              <div className="w-16 h-16 rounded-[20px] bg-blue-600 flex items-center justify-center text-white mb-8 group-hover:rotate-6 transition-transform">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex items-center text-blue-600 font-bold gap-2 cursor-pointer group/link">
                <span>View Details</span>
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover/link:bg-blue-600 group-hover/link:text-white transition-colors">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Custom CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-600 p-10 rounded-[40px] flex flex-col justify-center items-center text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <h3 className="text-3xl font-display font-bold mb-4 relative z-10">Custom Solutions?</h3>
            <p className="text-blue-100 mb-8 relative z-10">Our engineers can design bespoke cleaning protocols for unique challenges.</p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors relative z-10">
              Request Advisory
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
