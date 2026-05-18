import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import TiltCard from './TiltCard';

const Projects = () => {
  const projects = [
    {
      title: 'DevConnect — Developer Collaboration Platform',
      description: 'A platform where developers can connect, share projects, and collaborate in real time. Includes authentication, profile management, and project showcase features.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/devconnect',
      live: 'https://devconnect-demo.vercel.app',
      role: 'Built the frontend UI, authentication system, backend APIs, and database integration.'
    },
    {
      title: 'AI Resume Analyzer',
      description: 'An AI-powered web app that analyzes resumes and provides suggestions for improving ATS score and readability.',
      tech: ['Next.js', 'FastAPI', 'Python', 'OpenAI API'],
      github: 'https://github.com/yourusername/ai-resume-analyzer',
      live: 'https://ai-resume-analyzer.vercel.app',
      role: 'Developed the frontend, integrated AI APIs, and implemented resume parsing logic.'
    },
    {
      title: 'Smart Task Manager',
      description: 'A task management app with authentication, reminders, priority tracking, and responsive design.',
      tech: ['React.js', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://smart-task-manager.vercel.app',
      role: 'Designed the UI, connected Firebase authentication, and handled task CRUD operations.'
    },
    {
      title: 'College Event Management System',
      description: 'A web application for managing college events, registrations, and participant tracking efficiently.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/yourusername/event-management-system',
      live: 'https://event-management-demo.vercel.app',
      role: 'Developed frontend pages, database schema, and event registration functionality.'
    },
    {
      title: 'Weather Forecast App',
      description: 'A responsive weather application that provides real-time weather updates and forecasts using API integration.',
      tech: ['React.js', 'OpenWeather API', 'CSS'],
      github: 'https://github.com/yourusername/weather-app',
      live: 'https://weather-now-app.vercel.app',
      role: 'Built the complete frontend and integrated external weather APIs.'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient neon-text">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <TiltCard 
              className="bg-glass neon-border rounded-3xl p-8 flex flex-col group h-full transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
            >
            <h3 className="text-xl font-bold mb-4 group-hover:text-brand-light transition-colors">{project.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-medium text-brand-light bg-brand/10 border border-brand/20 px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(0,229,255,0.05)]">
                  {t}
                </span>
              ))}
            </div>

            <div className="text-sm text-gray-300 mb-8">
              <span className="text-gray-400 font-medium">Role:</span> {project.role}
            </div>

            <div className="flex gap-3 mt-auto">
              <a 
                href={project.live} 
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-brand-light to-brand text-slate-900 font-medium text-sm transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] hover:-translate-y-0.5"
              >
                <ExternalLink size={16} />
                Live Preview
              </a>
              <a 
                href={project.github} 
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-dark-bg border border-brand/30 text-gray-300 font-medium text-sm transition-all hover:bg-brand/10 hover:border-brand hover:text-white shadow-[0_0_10px_rgba(0,229,255,0.05)] hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:-translate-y-0.5"
              >
                <GitBranch size={16} />
                GitHub
              </a>
            </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
