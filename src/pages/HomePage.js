import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
// Remove MusicPlayer import

const HomePage = () => {
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

  return (
    <div className="home-page">
      <div className="hero-section">
        <animated.div style={fadeIn} className="hero-content">
          <h1>Happy Anniversary, Riya!</h1>
          <animated.div style={pulse}>
            <p className="subtitle">3 Years of Love & Joy</p>
          </animated.div>

          <div className="hero-image-container">
            <img
              src={`${process.env.PUBLIC_URL}/love.jpg`}
              alt="Us together"
              className="hero-image"
            />
          </div>

          <motion.div
            className="floating-hearts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.span
                key={i}
                className="floating-heart"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 100,
                  opacity: Math.random() * 0.5 + 0.5
                }}
                animate={{
                  y: -100,
                  x: Math.random() * window.innerWidth
                }}
                transition={{
                  duration: 10 + Math.random() * 15,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              >
                {['❤️', '💕', '💖', '💘', '💓'][Math.floor(Math.random() * 5)]}
              </motion.span>
            ))}
          </motion.div>
        </animated.div>
      </div>

      <div className="intro-section">
        <motion.div
          className="intro-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2>Our Love Story</h2>
          <p>
            This is a virtual gift for you Ponna as we are celebrating the 3rd year of our journey together.
            Explore our memories, see our favorite moments, and feel the love we've shared over these amazing years.
          </p>
          <p>Click through the pages to experience our story!</p>
        </motion.div>
      </div>

      {/* Remove MusicPlayer from here */}
    </div>
  );
};

export default HomePage;
