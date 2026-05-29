'use client';

import { motion } from 'motion/react';
import { ShieldCheck, CheckSquare, FileCheck, Award, Lock, HeartPulse } from 'lucide-react';

const complianceSteps = [
  { icon: ShieldCheck, title: 'ISO 9001:2015', desc: 'Quality Management Systems certified for industrial maintenance.' },
  { icon: HeartPulse, title: 'ISO 45001', desc: 'Occupational Health and Safety management systems compliance.' },
  { icon: FileCheck, title: 'Step-Back 5x5', desc: 'Mandatory pre-job hazard assessment for every single operation.' },
  { icon: Lock, title: 'LOTO Compliance', desc: 'Strict Lock-Out-Tag-Out procedures for all energy source isolation.' },
  { icon: CheckSquare, title: 'API Standard 2217A', desc: 'Guidelines for safe entry of petroleum storage tanks.' },
  { icon: Award, title: 'WJA Certified', desc: 'All staff are Water Jetting Association (WJA) certified technicians.' },
];

export default function Safety() {
  return (
    <section id="safety" className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-10 rounded-[40px] border border-white/20 text-white"
            >
              <h2 className="text-blue-300 font-bold uppercase tracking-widest text-sm mb-4">Safety First</h2>
              <h3 className="text-4xl font-display font-bold mb-6 italic leading-snug">
                Operational <br /> Integrity.
              </h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                In the industrial cleaning sector, safety isn&apos;t just a metric—it&apos;s our foundation. Our &quot;Choose Safety&quot; culture empowers every employee with the authority to STOP WORK if any hazard is detected.
              </p>
              <div className="flex items-center gap-4 py-6 border-t border-white/10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600">
                  <ShieldCheck size={36} />
                </div>
                <div>
                  <p className="text-3xl font-display font-bold leading-none">0.0</p>
                  <p className="text-sm text-blue-200 font-medium">LTR Frequency</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
            {complianceSteps.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl transition-colors group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:bg-blue-400 group-hover:text-blue-900 transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-blue-100/70 text-sm leading-relaxed">{item.desc}</p>
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
