import React from 'react';
import { motion } from 'framer-motion';

const FloatingHearts = () => {
  return (
    <div className="floating-hearts-container">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-heart"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: window.innerHeight,
            opacity: 1
          }}
          animate={{ 
            y: -100, 
            opacity: 0,
            x: Math.random() * window.innerWidth
          }}
          transition={{ 
            duration: 3 + Math.random() * 2, 
            ease: "easeOut" 
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;