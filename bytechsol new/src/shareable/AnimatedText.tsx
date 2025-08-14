import React, { useEffect, useState } from 'react';

const words = [' Bold Innovators', 'startups.', 'AI/ML Solutions.'];

const AnimatedText: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimate(true);
      }, 100); // slight delay to reset animation
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`animated-word ${animate ? 'animate-bounce-in' : ''}`}>
      {words[index]}
    </span>
  );
};

export default AnimatedText;
