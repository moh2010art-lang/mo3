'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, Play, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://picsum.photos/seed/oil-rig/1920/1080"
          alt="Industrial Facility"
          fill
          className="object-cover opacity-50 contrast-125"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-8"
        >
          <ShieldCheck size={16} />
          <span>Certified ISO 9001:2015 Industrial Cleaning</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Precision Engineering. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
            Industrial Purity.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light"
        >
          High-pressure water jetting and specialized cleaning services for the global energy sector. We deliver safety, speed, and technical excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2"
          >
            Explore Services
          </a>
          <button
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-xl font-bold text-lg transition-all border border-white/20 flex items-center justify-center gap-2"
          >
            <Play size={20} fill="currentColor" />
            Watch Operations
          </button>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-20 left-0 right-0 hidden lg:block"
      >
        <div className="container mx-auto px-6 flex justify-between gap-12 border-t border-white/10 pt-10">
          {[
            { label: 'Pressure Range', value: '40,000 PSI' },
            { label: 'Safety Record', value: '0 LTI' },
            { label: 'Uptime Efficiency', value: '99.8%' },
            { label: 'Certified Staff', value: '250+' },
          ].map((stat, i) => (
            <div key={i} className="text-left">
              <p className="text-blue-400 text-xs uppercase tracking-widest font-bold mb-1">{stat.label}</p>
              <p className="text-2xl font-display font-medium text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
