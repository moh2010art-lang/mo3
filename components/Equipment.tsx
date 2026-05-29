'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Settings, Cpu, HardDrive } from 'lucide-react';

const technologies = [
  {
    title: 'Precision Robotic Crawlers',
    category: 'Remote Cleaning',
    image: 'https://picsum.photos/seed/robot-crawler/800/600',
    icon: Cpu,
  },
  {
    title: 'High-Flow Pump Units',
    category: 'Power Delivery',
    image: 'https://picsum.photos/seed/industrial-pump/800/600',
    icon: Settings,
  },
  {
    title: 'Digital Flow Monitoring',
    category: 'IoT & Telemetry',
    image: 'https://picsum.photos/seed/control-panel/800/600',
    icon: HardDrive,
  },
];

export default function Equipment() {
  return (
    <section id="equipment" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">The Arsenal</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              State-of-the-art <br />
              Equipment & <span className="text-blue-600">Technology.</span>
            </h3>
          </div>
          <p className="text-slate-500 text-lg md:w-1/3 italic">
            Investing over $5M annually in next-generation tooling to ensure the highest standards of industrial cleaning.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden mb-6 bg-slate-100">
                <Image
                  src={tech.image}
                  alt={tech.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <tech.icon size={20} />
                    </div>
                    <span className="font-bold tracking-wide">Technical Specs</span>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">{tech.category}</span>
                <h4 className="text-2xl font-bold text-slate-900 mt-2 mb-3">{tech.title}</h4>
                <div className="flex items-center gap-4">
                  <div className="h-px bg-slate-100 grow" />
                  <span className="text-slate-400 text-sm font-medium">Model 2026-X</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Features Strip */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 p-10 bg-slate-900 rounded-[40px] text-white">
          {[
            { label: 'Max Pressure', value: '40,000 PSI' },
            { label: 'Flow Rate', value: '250 L/min' },
            { label: 'Robotics Range', value: '500 Meters' },
            { label: 'Temp Tolerance', value: '1,200°C' },
          ].map((feature, i) => (
            <div key={i} className="text-center">
              <p className="text-blue-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">{feature.label}</p>
              <p className="text-2xl md:text-3xl font-display font-bold">{feature.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
