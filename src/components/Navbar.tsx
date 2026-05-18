import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const clickCount = useRef(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogoClick = () => {
    clickCount.current += 1;
    if (clickTimer.current) clearTimeout(clickTimer.current);
    
    if (clickCount.current >= 5) {
      window.dispatchEvent(new Event('toggle-matrix'));
      clickCount.current = 0;
    } else {
      clickTimer.current = setTimeout(() => {
        clickCount.current = 0;
      }, 2000);
    }
  };

  useEffect(() => {
    // Check initial preference
    if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
      setIsLightMode(true);
      document.documentElement.classList.add('light');
    } else {
      setIsLightMode(false);
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    if (isLightMode) {
      document.documentElement.classList.remove('light');
      localStorage.theme = 'dark';
      setIsLightMode(false);
    } else {
      document.documentElement.classList.add('light');
      localStorage.theme = 'light';
      setIsLightMode(true);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-xl border-b border-brand/20 shadow-[0_5px_20px_rgba(0,229,255,0.05)]"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer select-none" onClick={handleLogoClick}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-dark to-brand flex items-center justify-center font-bold text-lg shadow-[0_0_20px_rgba(0,229,255,0.6)] text-white neon-border">
            AK
          </div>
          <span className="font-semibold text-lg tracking-wide hidden sm:block text-[var(--text-primary)]">Abhishek Kumar</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
          <a href="#about" className="hover:text-brand-light hover:neon-text transition-all">About</a>
          <a href="#projects" className="hover:text-brand-light hover:neon-text transition-all">Projects</a>
          <a href="#services" className="hover:text-brand-light hover:neon-text transition-all">Services</a>
          <a href="#contact" className="hover:text-brand-light hover:neon-text transition-all">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-glass neon-border border border-transparent text-[var(--text-secondary)] hover:text-brand-light transition-all"
            aria-label="Toggle Theme"
          >
            {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-glass text-[var(--text-secondary)] hover:text-brand-light transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <a 
            href="#contact"
            className="hidden md:inline-block px-5 py-2.5 rounded-lg bg-gradient-to-r from-brand-light to-brand text-slate-900 font-bold text-sm shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.8)] transition-all transform hover:-translate-y-0.5 neon-border"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-dark-bg/95 backdrop-blur-3xl border-b border-brand/20 px-6 py-4 flex flex-col gap-4 shadow-[0_10px_30px_rgba(0,229,255,0.1)]"
        >
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--text-primary)] font-medium hover:text-brand-light py-2 border-b border-brand/10">About</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--text-primary)] font-medium hover:text-brand-light py-2 border-b border-brand/10">Projects</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--text-primary)] font-medium hover:text-brand-light py-2 border-b border-brand/10">Services</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--text-primary)] font-medium hover:text-brand-light py-2 border-b border-brand/10">Contact</a>
          <a 
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 text-center px-5 py-3 rounded-lg bg-gradient-to-r from-brand-light to-brand text-slate-900 font-bold text-sm shadow-[0_0_20px_rgba(0,229,255,0.4)]"
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
