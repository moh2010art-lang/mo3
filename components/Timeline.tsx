'use client';

import { motion, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';
import { Anchor, Zap, Droplet, Factory } from 'lucide-react';

const milestones = [
  {
    year: '2015',
    title: 'North Sea Operations',
    desc: 'Secured first multi-year offshore contract with Equinor for subsea infrastructure cleaning.',
    icon: Anchor,
  },
  {
    year: '2018',
    title: 'Robotic Integration',
    desc: 'Pioneered the use of remote-operated robotic crawlers for internal pipeline descaling.',
    icon: Zap,
  },
  {
    year: '2021',
    title: 'Global Expansion',
    desc: 'Established strategic hubs in Singapore and Houston to serve Middle East and US Gulf markets.',
    icon: Droplet,
  },
  {
    year: '2024',
    title: 'Project Neptune',
    desc: 'Currently executing the largest refinery shutdown cleaning project in the EMEA region.',
    icon: Factory,
  },
];

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="projects" ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Proven Expertise</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-slate-900">Project Highlights & <span className="text-blue-600">History.</span></h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-100" />
          <motion.div 
            style={{ scaleY }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-600 origin-top z-10"
          />

          <div className="space-y-24">
            {milestones.map((item, i) => (
              <div key={i} className={`relative flex items-center justify-between ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                {/* Connector Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-600 z-20"
                />

                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-[42%] bg-slate-50 p-8 rounded-[32px] border border-slate-100 hover:shadow-xl hover:shadow-blue-50 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <span className="text-blue-600 font-bold text-lg">{item.year}</span>
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                    </div>
                  </div>
                  <p className="text-slate-500 leading-relaxed italic">
                    &quot;{item.desc}&quot;
                  </p>
                </motion.div>
                <div className="w-[42%]" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Experience Counter */}
        <div className="mt-32 max-w-5xl mx-auto flex flex-wrap justify-center gap-8 md:gap-20">
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '15+', label: 'Countries Served' },
            { value: '2M+', label: 'Safe Man-Hours' },
            { value: '45', label: 'Robotic Patents' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-2">{stat.value}</p>
              <p className="text-sm text-slate-400 font-semibold uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
