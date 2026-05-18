import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import TerminalSection from './components/TerminalSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Marquee from './components/Marquee';
import Particles from './components/Particles';
import MatrixRain from './components/MatrixRain';
import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

function App() {
  const { scrollYProgress } = useScroll();
  const [matrixMode, setMatrixMode] = useState(false);

  useEffect(() => {
    let keySequence = '';
    const secretCode = 'matrix';

    const handleKeyDown = (e: KeyboardEvent) => {
      keySequence += e.key.toLowerCase();
      
      // Keep only the last N characters
      if (keySequence.length > secretCode.length) {
        keySequence = keySequence.slice(-secretCode.length);
      }

      if (keySequence === secretCode) {
        setMatrixMode(prev => {
          const next = !prev;
          if (next) {
            document.body.classList.add('matrix-mode');
          } else {
            document.body.classList.remove('matrix-mode');
          }
          return next;
        });
        keySequence = ''; // reset after triggering
      }
    };

    const handleCustomToggle = () => {
      setMatrixMode(prev => {
        const next = !prev;
        if (next) {
          document.body.classList.add('matrix-mode');
        } else {
          document.body.classList.remove('matrix-mode');
        }
        return next;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('toggle-matrix', handleCustomToggle);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('toggle-matrix', handleCustomToggle);
    };
  }, []);

  return (
    <div className="bg-dark-bg min-h-screen text-white font-sans selection:bg-brand selection:text-white md:cursor-none overflow-x-hidden relative">
      {!matrixMode ? <Particles /> : <MatrixRain />}
      <CustomCursor />
      
      {/* Neon Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-light to-brand z-50 origin-left shadow-[0_0_15px_rgba(0,229,255,0.8)]"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="animated-bg"></div>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Services />
        <TerminalSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
