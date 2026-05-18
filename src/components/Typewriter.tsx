import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Typing effect
  useEffect(() => {
    if (index >= words.length) {
      setIndex(0);
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      !reverse
    ) {
      setTimeout(() => setReverse(true), 3000); // Wait longer before erasing
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length); // Safely wrap around
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 250 : 400); // Make typing and erasing significantly slower

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-gradient neon-text whitespace-nowrap inline-block min-w-[10px]">
      {`${words[index].substring(0, subIndex)}`}
      <motion.span
        animate={{ opacity: blink ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="text-brand-light ml-1"
      >
        |
      </motion.span>
    </span>
  );
};

export default Typewriter;
