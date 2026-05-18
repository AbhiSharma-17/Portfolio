import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minus, Square } from 'lucide-react';

interface Command {
  cmd: string;
  output: React.ReactNode;
}

const TerminalSection = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([
    {
      cmd: '',
      output: (
        <div className="text-gray-300 mb-2">
          Welcome to AbhishekOS v1.0.0. <br />
          Type <span className="text-brand-light font-bold">'help'</span> to see a list of available commands.
        </div>
      )
    }
  ]);
  
  const endOfTerminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (endOfTerminalRef.current) {
      endOfTerminalRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const trimmedInput = input.trim().toLowerCase();
      let output: React.ReactNode = '';

      switch (trimmedInput) {
        case 'help':
          output = (
            <div className="text-brand-light grid grid-cols-2 gap-2 max-w-xs">
              <div>whoami</div><div className="text-gray-400">- Display bio</div>
              <div>skills</div><div className="text-gray-400">- List tech stack</div>
              <div>projects</div><div className="text-gray-400">- View top projects</div>
              <div>contact</div><div className="text-gray-400">- Get contact info</div>
              <div>clear</div><div className="text-gray-400">- Clear terminal</div>
            </div>
          );
          break;
        case 'whoami':
          output = "I'm Abhishek, a B.Tech CS student and passionate Full Stack Developer who loves building fast, scalable applications.";
          break;
        case 'skills':
          output = (
            <div className="flex flex-wrap gap-2 text-cyan-400">
              ['React', 'Next.js', 'Node.js', 'Python', 'C++', 'Flutter', 'MongoDB']
            </div>
          );
          break;
        case 'projects':
          output = (
            <div className="flex flex-col gap-1 text-sm">
              <div><span className="text-brand-light font-bold">1. DevConnect</span> <span className="text-gray-400">- Developer Collaboration Platform</span></div>
              <div><span className="text-brand-light font-bold">2. AI Resume Analyzer</span> <span className="text-gray-400">- Next.js & OpenAI powered tool</span></div>
              <div><span className="text-brand-light font-bold">3. Smart Task Manager</span> <span className="text-gray-400">- React & Firebase app</span></div>
              <div className="text-gray-500 italic mt-2">Scroll up to the Projects section to see live previews!</div>
            </div>
          );
          break;
        case 'contact':
          output = "Email: mrabhi08585@gmail.com | Phone: +91 9939009963";
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case '':
          output = '';
          break;
        default:
          output = <span className="text-red-400">Command not found: {trimmedInput}. Type 'help' for available commands.</span>;
      }

      setHistory((prev) => [...prev, { cmd: input, output }]);
      setInput('');
    }
  };

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl overflow-hidden bg-[#0A0A0A] border border-gray-800 shadow-[0_0_40px_rgba(0,229,255,0.1)]"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-gray-800">
          <div className="flex items-center gap-2">
            <TerminalIcon size={16} className="text-gray-400" />
            <span className="text-xs font-mono text-gray-400">guest@abhishek-portfolio:~</span>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-transparent hover:text-red-500 hover:bg-red-500/40 cursor-pointer transition-all"><X size={8} /></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center text-transparent hover:text-yellow-500 hover:bg-yellow-500/40 cursor-pointer transition-all"><Minus size={8} /></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center text-transparent hover:text-green-500 hover:bg-green-500/40 cursor-pointer transition-all"><Square size={8} /></div>
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          className="p-6 font-mono text-sm h-80 overflow-y-auto custom-scrollbar" 
          onClick={() => document.getElementById('terminal-input')?.focus()}
        >
          {history.map((item, index) => (
            <div key={index} className="mb-4">
              {item.cmd && (
                <div className="flex gap-2 text-gray-300">
                  <span className="text-green-400">guest@portfolio:~$</span>
                  <span>{item.cmd}</span>
                </div>
              )}
              {item.output && <div className="mt-1 text-gray-300">{item.output}</div>}
            </div>
          ))}
          
          <div className="flex gap-2 items-center">
            <span className="text-green-400">guest@portfolio:~$</span>
            <input
              id="terminal-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoComplete="off"
              spellCheck="false"
              className="flex-1 bg-transparent border-none outline-none text-gray-300 placeholder-gray-700 caret-brand-light focus:ring-0"
            />
          </div>
          <div ref={endOfTerminalRef} />
        </div>
      </motion.div>
    </section>
  );
};

export default TerminalSection;
