import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const useSolidStyle = isScrolled || isMenuOpen;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        useSolidStyle ? 'bg-space-900/70 backdrop-blur-md border-b border-zinc-900/10 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className={`text-xl font-condensed tracking-widest uppercase drop-shadow-md transition-colors duration-300 ${useSolidStyle ? 'text-zinc-900' : 'text-white'}`}>
            Neovogent AI
          </span>
        </div>

        <nav className={`hidden md:flex items-center rounded-full px-8 py-3 border backdrop-blur-md transition-colors duration-300 ${isScrolled ? 'bg-black/5 border-black/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]' : 'bg-white/10 border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]'}`}>
          <ul className={`flex items-center gap-8 text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-zinc-900/70' : 'text-white/70'}`}>
            <li><a href="#about" className={`hover:text-blue-500 transition-colors flex items-center gap-2 group ${!isScrolled && 'hover:text-cyan-400'}`}><span className={`w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${isScrolled ? 'bg-blue-600' : 'bg-cyan-400'}`} /> About</a></li>
            <li><a href="#services" className={`hover:text-blue-500 transition-colors flex items-center gap-2 group ${!isScrolled && 'hover:text-cyan-400'}`}><span className={`w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${isScrolled ? 'bg-blue-600' : 'bg-cyan-400'}`} /> Services</a></li>
            <li><a href="#work" className={`hover:text-blue-500 transition-colors flex items-center gap-2 group ${!isScrolled && 'hover:text-cyan-400'}`}><span className={`w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${isScrolled ? 'bg-blue-600' : 'bg-cyan-400'}`} /> Work</a></li>
            <li><a href="#contact" className={`hover:text-blue-500 transition-colors flex items-center gap-2 group ${!isScrolled && 'hover:text-cyan-400'}`}><span className={`w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${isScrolled ? 'bg-blue-600' : 'bg-cyan-400'}`} /> Contact</a></li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center">
          <a href="#contact" className={`relative group overflow-hidden rounded-full px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all border flex items-center gap-2 ${isScrolled ? 'bg-black/5 text-zinc-900 hover:bg-black/10 border-black/10 shadow-[0_0_15px_rgba(0,0,0,0.05)]' : 'bg-white/10 text-white hover:bg-white/20 border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]'}`}>
             <span>Get Started</span>
             <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isScrolled ? 'text-blue-600' : 'text-cyan-400'}`} />
             <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ${isScrolled ? 'via-black/10' : 'via-white/10'}`} />
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full border transition-all ${useSolidStyle ? 'bg-black/5 border-black/10 text-zinc-900/80 hover:text-zinc-900 hover:bg-black/10' : 'bg-white/5 border-white/10 text-white/80 hover:text-white hover:bg-white/10'}`}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden overflow-hidden bg-space-900/95 backdrop-blur-md border-t border-zinc-900/10"
          >
            <ul className="flex flex-col px-6 py-6 gap-1 text-sm font-semibold tracking-widest uppercase text-zinc-900/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-6 pb-6">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-full px-6 py-3 text-xs font-semibold tracking-widest uppercase bg-blue-600 text-white hover:bg-blue-700 transition-all"
              >
                <span>Get Started</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
