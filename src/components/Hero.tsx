import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, Code, Database, Terminal, Download, FileText } from 'lucide-react';
import Typewriter from './Typewriter';
import LocalTime from './LocalTime';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const skills = [
    'C', 'C++', 'Python', 'JavaScript', 'React.js', 'Node.js', 
    'MongoDB', 'Express.js', 'Tailwind CSS', 'Flutter', 'Flask', 'Kotlin'
  ];

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity
      }
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-16 px-6 flex flex-col items-center justify-center relative">
      {/* Background decorative dots */}
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        className="absolute left-[15%] top-[30%] w-3 h-3 rounded-full bg-brand opacity-60"
      />
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
        className="absolute right-[20%] top-[40%] w-2 h-2 rounded-full bg-brand-light opacity-60"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto z-10 w-full mb-24">
        {/* Left Column: Text */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass neon-border text-sm font-medium text-[var(--text-primary)] mb-8 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
            <Sparkles size={16} className="text-brand-light" />
            <span>Available for freelance work</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-1 shadow-[0_0_8px_#22c55e]"></span>
          </div>

          <h2 className="text-[var(--text-secondary)] font-medium mb-4 tracking-wider">Hi, I'm</h2>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold tracking-tight mb-8 min-h-[150px] md:min-h-[120px]"
            initial={{ filter: 'blur(10px)', opacity: 0, scale: 0.9 }}
            animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Abhishek <br className="md:hidden" /><Typewriter words={['Kumar', 'the Dev', 'the Coder']} />
          </motion.h1>

          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Full Stack Developer building <span className="text-brand-light">high-converting</span> websites
          </h3>

          <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            I am a CS student based in Bengaluru. I am trying to build projects that actually solve real-world problems.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {skills.map((skill, index) => (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                key={skill}
                className="px-4 py-2 rounded-full bg-glass neon-border text-sm text-[var(--text-primary)] hover:-translate-y-1 transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: skills.length * 0.05 }}
              className="px-4 py-2 rounded-full bg-glass neon-border text-sm text-[var(--text-primary)] hover:-translate-y-1 transition-all cursor-default"
            >
              Open Source
            </motion.div>
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8 w-full">
            <MagneticButton>
              <a 
                href="/resume.pdf" 
                download="Abhishek_Kumar_Resume.pdf"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-light to-brand text-slate-900 font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.8)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download size={20} /> Download Resume
              </a>
            </MagneticButton>
            <MagneticButton>
              <a 
                href="/resume.pdf" 
                target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-glass border border-brand/30 text-brand-light font-semibold hover:bg-brand/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FileText size={20} /> View Resume
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Right Column: Photo */}
        <motion.div 
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full p-2 bg-gradient-to-br from-brand-light to-brand-dark neon-border shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] transition-all duration-500">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-dark-bg bg-dark-bg relative z-10">
              <img 
                src="/profile.jpg" 
                alt="Abhishek Kumar" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400.png?text=Abhishek+Kumar';
                }}
              />
            </div>
            
            {/* Decorative orbit elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-brand/20 border-dashed"
            ></motion.div>

            {/* Floating Icons around the profile */}
            <motion.div 
              animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-glass neon-border flex items-center justify-center text-brand-light z-20 shadow-[0_0_15px_rgba(0,229,255,0.2)]"
            >
              <Code size={20} />
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -right-6 w-14 h-14 rounded-full bg-glass neon-border flex items-center justify-center text-brand z-20 shadow-[0_0_15px_rgba(0,229,255,0.2)]"
            >
              <Database size={24} />
            </motion.div>

            <motion.div 
              animate={{ x: [-10, 10, -10], rotate: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-2 left-10 w-10 h-10 rounded-lg bg-glass neon-border flex items-center justify-center text-brand-dark z-20 shadow-[0_0_15px_rgba(108,99,255,0.2)]"
            >
              <Terminal size={18} />
            </motion.div>

            {/* Real-time location and time indicator */}
            <div className="absolute -bottom-8 right-0 z-30 transform translate-x-4">
              <LocalTime />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-col items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a 
          href="#about"
          className="w-10 h-10 rounded-full bg-glass neon-border flex items-center justify-center text-brand hover:text-[var(--text-primary)] transition-all animate-bounce"
        >
          <ArrowDown size={20} />
        </a>
        <span className="text-xs text-[var(--text-secondary)] uppercase tracking-widest">Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
