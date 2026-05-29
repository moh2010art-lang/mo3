'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Droplets } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Equipment', href: '#equipment' },
  { name: 'Safety', href: '#safety' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Droplets size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold leading-none text-xl ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              AQUAJET
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-medium leading-none ${scrolled ? 'text-blue-600' : 'text-blue-200'}`}>
              Industrial Solutions
            </span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                scrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              scrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200' 
                : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}
          >
            Get a Quote
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 font-medium hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="w-full py-3 bg-blue-600 text-white text-center rounded-xl font-semibold shadow-lg shadow-blue-100"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
