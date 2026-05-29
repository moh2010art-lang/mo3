'use client';

import { motion } from 'motion/react';
import { Target, TrendingDown, Users, Globe } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Extreme Precision',
    desc: 'Our proprietary jetting patterns ensure 99% deposit removal while preserving the integrity of base metals.',
  },
  {
    icon: TrendingDown,
    title: 'Reduced Downtime',
    desc: 'Our robotic systems clean up to 4x faster than manual methods, saving millions in operational uptime.',
  },
  {
    icon: Users,
    title: 'Expert Personnel',
    desc: 'Senior technicians with minimum 10 years experience in offshore oil and gas environments.',
  },
  {
    icon: Globe,
    title: 'Sustainable Practices',
    desc: 'Advanced water recycling systems reduce freshwater consumption by 60% compared to traditional jetting.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-400/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-2/5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">The Competitive Edge</h2>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Why Industry <br /> Leaders <span className="text-blue-400 font-light italic">Choose Us.</span>
              </h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                We are more than a service provider; we are a strategic partner in asset integrity management. Our integration of AI-driven flow monitoring and hydraulic engineering sets US apart.
              </p>
              
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                <div className="flex items-center gap-6 mb-6">
                  <div className="grow">
                    <p className="text-blue-400 text-xs font-bold uppercase mb-2 tracking-widest">Client Satisfaction</p>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '98%' }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-blue-500"
                      />
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-white">98%</span>
                </div>
                <button className="w-full py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                  Download Case Studies
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-3/5 grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                className="p-8 bg-white/5 border border-white/5 rounded-[32px] transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-6">
                  <benefit.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{benefit.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
