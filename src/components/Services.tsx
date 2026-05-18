import { motion } from 'framer-motion';
import { LayoutTemplate, Database, Bot, Users, Smartphone, Palette } from 'lucide-react';
import TiltCard from './TiltCard';

const Services = () => {
  const services = [
    {
      title: "Frontend Engineering",
      description: "Building responsive, visually stunning user interfaces. Focused on clean UI, smooth animations, and mobile-first experiences.",
      icon: <LayoutTemplate size={24} />,
      points: [
        "React.js & Next.js",
        "Tailwind CSS",
        "Responsive Design",
        "Interactive UI"
      ]
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end web applications with robust backends and database management. From conceptualization to deployment.",
      icon: <Database size={24} />,
      points: [
        "Node.js & Express",
        "MongoDB & SQL",
        "RESTful APIs",
        "Authentication"
      ]
    },
    {
      title: "AI & Data Integration",
      description: "Integrating AI models and utilizing data to build smart applications, like AI-powered analyzers and planners.",
      icon: <Bot size={24} />,
      points: [
        "Machine Learning",
        "Groq API Integration",
        "Pandas & NumPy",
        "Data Visualization"
      ]
    },
    {
      title: "Community & Leadership",
      description: "Organizing technical events, hackathons, and driving community engagement through social media and content creation.",
      icon: <Users size={24} />,
      points: [
        "Event Management",
        "Hackathon Organizer",
        "Content Creation",
        "Social Media Team"
      ]
    },
    {
      title: "Mobile App Development",
      description: "Creating fast, responsive, and user-friendly mobile applications with modern designs and seamless performance across Android platforms.",
      icon: <Smartphone size={24} />,
      points: [
        "Flutter Development",
        "Kotlin & Android",
        "Firebase Integration",
        "Mobile UI/UX"
      ]
    },
    {
      title: "UI/UX & Creative Design",
      description: "Designing clean, modern, and interactive user experiences focused on usability, accessibility, and visual aesthetics.",
      icon: <Palette size={24} />,
      points: [
        "Modern UI Design",
        "Responsive Layouts",
        "Interactive Interfaces",
        "User Experience Design"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-glass neon-border text-brand-light text-sm font-medium mb-6 shadow-[0_0_10px_rgba(0,229,255,0.1)]">
          <span>What I do</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient neon-text">
          Areas of Expertise
        </h2>
        <p className="text-gray-400 text-lg text-center max-w-2xl">
          From full-stack development to community building, here is what I bring to the table.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
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
            <div className="w-12 h-12 rounded-xl bg-glass neon-border text-brand-light flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,229,255,0.1)] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              {service.description}
            </p>
            
            <ul className="space-y-2">
              {service.points.map((point, i) => (
                <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_rgba(0,229,255,0.8)]"></span>
                  {point}
                </li>
              ))}
            </ul>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
