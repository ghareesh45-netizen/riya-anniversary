import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <motion.div 
          className="footer-heart"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatDelay: 1 
          }}
        >
          ❤️
        </motion.div>
        <p>Made with love for Riya</p>
        <p>{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;