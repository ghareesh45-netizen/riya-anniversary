import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHeart } from 'react-icons/fa';

const HomePage = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  
  // Handle window resize for confetti
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('resize', handleResize);
    
    // Stop confetti after 8 seconds
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);
  
  // Spring animations
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 }
  });
  
  const pulse = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.05)' },
    config: { duration: 500 },
    loop: { reverse: true }
  });
  
  // Floating hearts animation
  const [hearts, setHearts] = useState([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        x: Math.random() * 100,
        size: Math.random() * 1 + 0.5,
        duration: Math.random() * 3 + 3
      };
      
      setHearts(prev => [...prev, newHeart]);
      
      // Remove heart after animation completes
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, newHeart.duration * 1000);
      
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Confetti effect */}
      {showConfetti && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={false}
          numberOfPieces={500}
          colors={['#ff6b6b', '#ffd93d', '#ff8e8e', '#ffb8b8', '#ffffff']}
        />
      )}
      
      {/* Floating hearts */}
      <div className="floating-hearts">
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            className="floating-heart"
            initial={{ y: 100, opacity: 1 }}
            animate={{ y: -100, opacity: 0 }}
            transition={{ duration: heart.duration, ease: "easeOut" }}
            style={{
              left: `${heart.x}%`,
              fontSize: `${heart.size}rem`
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="home-content">
        <animated.div style={fadeIn} className="home-header">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="anniversary-badge"
          >
            <span className="years">3</span>
            <span className="years-text">YEARS</span>
          </motion.div>
          
          <h1>Happy Anniversary, Riya!</h1>
          
          <animated.div style={pulse}>
            <p className="subtitle">Three years of love, laughter, and beautiful memories</p>
          </animated.div>
          
          <div className="main-image-container">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="main-image-wrapper"
            >
              <img 
                src="/love.jpg"
                alt="Couple" 
                className="main-image"
              />
              <div className="image-placeholder">Your Favorite Photo Here</div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="home-message"
          >
            <p>Every moment with you is a gift. Here's to many more years of us! <FaHeart className="heart-icon" /></p>
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="explore-button-container"
          >
            <Link to="/our-story" className="explore-button">
              Explore Our Journey <FaArrowRight />
            </Link>
          </motion.div>
        </animated.div>
      </div>
    </div>
  );
};

export default HomePage;