'use client';

import { Droplets, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
                <Droplets size={20} />
              </div>
              <span className="font-display font-bold text-xl text-slate-900 tracking-tight">AQUAJET</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Industrial cleaning excellence for the global energy sector. Powered by hydraulic engineering and robotic automation.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Water Jetting</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Tank Cleaning</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Pipeline Services</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Robotic Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Safety Standards</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Technical Specs</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Client Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-4">Subscribe for industrial maintenance insights.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full pl-4 pr-12 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-600 transition-colors text-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 px-3 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-blue-600 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">© 2026 AQUAJET Industrial Solutions. All rights reserved.</p>
          <div className="flex gap-8 text-xs text-slate-400">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
            <a href="#" className="hover:text-blue-600">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
