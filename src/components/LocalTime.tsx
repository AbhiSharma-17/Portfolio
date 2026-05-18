import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const LocalTime = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format specifically for India Standard Time (IST)
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-glass neon-border shadow-[0_0_15px_rgba(0,229,255,0.15)] text-sm font-medium text-gray-200"
    >
      <Clock size={14} className="text-brand-light" />
      <span>{time}</span>
      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse ml-1 shadow-[0_0_8px_#ef4444]"></span>
    </motion.div>
  );
};

export default LocalTime;
