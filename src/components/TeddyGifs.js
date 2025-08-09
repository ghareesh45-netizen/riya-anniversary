import React from 'react';
import { motion } from 'framer-motion';

const TeddyGifs = ({ position = 'corner' }) => {
  // Collection of cute teddy bear GIFs
  const teddyGifs = [
    'https://media.tenor.com/6BIZ6K-i6E0AAAAM/cudd-milk-and-mocha.gif',
    'https://media.tenor.com/bSxMql9TY7cAAAAM/cute2.gif',
    'https://i.pinimg.com/originals/57/68/b4/5768b458d6c9c38676bfade7df010944.gif',
    'https://media.tenor.com/CfbW8qVkkwsAAAAM/mocha-and-milk.gif',
    'https://media.tenor.com/EVChef0SX38AAAAM/tkthao219-bubududu.gif',
    'https://media.tenor.com/EaDvZeK3NXIAAAAM/love.gif',
    'https://www.gifcen.com/wp-content/uploads/2022/11/love-gif-4.gif'
  ];

  // Randomly select one GIF
  const randomGif = teddyGifs[Math.floor(Math.random() * teddyGifs.length)];
  
  // Different position styles
  const positionStyles = {
    corner: {
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      width: '100px',
      height: '100px',
      zIndex: 5
    },
    top: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '100px',
      height: '100px',
      zIndex: 5
    },
    left: {
      position: 'absolute',
      top: '50%',
      left: '20px',
      transform: 'translateY(-50%)',
      width: '100px',
      height: '100px',
      zIndex: 5
    },
    bottom: {
      position: 'absolute',
      bottom: '20px',
      left: '20px',
      width: '100px',
      height: '100px',
      zIndex: 5
    }
  };

  return (
    <motion.div
      className="teddy-gif-container"
      style={positionStyles[position]}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      <img 
        src={randomGif} 
        alt="Cute teddy bear" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }} 
      />
    </motion.div>
  );
};

export default TeddyGifs;
