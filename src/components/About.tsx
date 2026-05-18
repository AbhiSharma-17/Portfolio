import { motion } from 'framer-motion';
import { Heart, GraduationCap, Rocket, Code, Database, Server, Layout } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-glass neon-border text-brand-light text-sm font-medium mb-6 shadow-[0_0_10px_rgba(0,229,255,0.1)]">
          <Heart size={16} />
          <span>About Me</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          The person behind <span className="text-gradient neon-text">the code</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Story and Motivation */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-glass neon-border p-8 rounded-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-glass neon-border flex items-center justify-center text-brand-light shadow-[0_0_15px_rgba(0,229,255,0.1)]">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-semibold">My Story</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg">
              I’m Abhishek, a B.Tech CS student and passionate Full Stack Developer who enjoys turning ideas into real-world digital experiences. From building responsive web applications to exploring AI-powered solutions, I love working on projects that combine creativity with problem-solving. I focus on writing clean, scalable code and continuously learning modern technologies like React, Next.js, Node.js, and AI tools to grow as a developer and create impactful products.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-glass neon-border p-8 rounded-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-glass neon-border flex items-center justify-center text-brand-light shadow-[0_0_15px_rgba(0,229,255,0.1)]">
                <Rocket size={24} />
              </div>
              <h3 className="text-2xl font-semibold">What Drives Me</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg">
              What drives me is the excitement of building something meaningful from scratch. I enjoy solving challenges, learning new technologies, and pushing my limits with every project I create. Whether it’s designing smooth user experiences, developing backend systems, or experimenting with AI, I’m motivated by growth, innovation, and the idea of creating solutions that people genuinely find useful.
            </p>
          </motion.div>
        </div>

        {/* Right Column - Skills and Socials */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-glass neon-border p-8 rounded-3xl flex-grow"
          >
            <h3 className="text-2xl font-semibold mb-8">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'React.js & Frontend', icon: <Layout size={16} /> },
                { name: 'Flutter & Kotlin', icon: <Layout size={16} /> },
                { name: 'Node.js, Express & Flask', icon: <Server size={16} /> },
                { name: 'MongoDB & SQL', icon: <Database size={16} /> },
                { name: 'Python & AI', icon: <Code size={16} /> },
                { name: 'C / C++ & DSA', icon: <Code size={16} /> },
              ].map((skill) => (
                <div key={skill.name} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-glass neon-border text-sm font-medium text-gray-300 shadow-[0_0_10px_rgba(0,229,255,0.05)] hover:-translate-y-1 transition-all">
                  <span className="text-brand-light">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <motion.a 
              href="https://github.com/AbhiSharma-17"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-glass neon-border p-6 rounded-3xl hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all group"
            >
              <div className="text-xs font-semibold tracking-wider text-gray-500 mb-2 uppercase">GitHub</div>
              <div className="text-lg font-medium text-gray-200 group-hover:text-brand-light transition-colors truncate">
                AbhiSharma-17
              </div>
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/abhishek-kumar-90b713331/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-glass neon-border p-6 rounded-3xl hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all group"
            >
              <div className="text-xs font-semibold tracking-wider text-gray-500 mb-2 uppercase">LinkedIn</div>
              <div className="text-lg font-medium text-gray-200 group-hover:text-brand-light transition-colors truncate">
                abhishek-kumar
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
