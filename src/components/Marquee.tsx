import { motion } from 'framer-motion';

const techStack = [
  "React.js", "Next.js", "Node.js", "MongoDB", "Express", "Python", 
  "C++", "Flutter", "Kotlin", "Tailwind CSS", "Firebase", "SQL", "Flask"
];

const Marquee = () => {
  return (
    <div className="py-12 overflow-hidden bg-glass neon-border my-16 shadow-[0_0_30px_rgba(0,229,255,0.05)] relative flex">
      {/* Gradient Fades for edges */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none"></div>
      
      <motion.div
        className="flex gap-12 items-center whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20
        }}
      >
        {/* Render twice for seamless loop */}
        {[...techStack, ...techStack, ...techStack].map((tech, index) => (
          <span 
            key={index} 
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300 hover:from-brand-light hover:to-brand transition-all duration-300 px-4"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
