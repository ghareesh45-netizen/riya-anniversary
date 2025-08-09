import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaQuoteRight, FaHeart } from 'react-icons/fa';

const OurStory = () => {
  // Create multiple refs for different sections
  const [ref1, inView1] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const [ref2, inView2] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const [ref3, inView3] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const [ref4, inView4] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div className="our-story-page">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="page-title"
      >
        Our Love Story
      </motion.h1>
      
      <div className="story-container">
        {/* First meeting */}
        <motion.div 
          className="story-section"
          ref={ref1}
          initial={{ opacity: 0, x: -100 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="story-content">
            <h2>How We Met</h2>
            <div className="story-image-container">
              <div className="image-placeholder">First Meeting Photo</div>
            </div>
            <p>
              <FaQuoteLeft className="quote-icon" />
              Our story began on a beautiful day when our paths crossed unexpectedly. 
              It was as if the universe had planned this moment just for us.
              <FaQuoteRight className="quote-icon" />
            </p>
            <div className="story-details">
              <p>Add your special story about how you two first met. This section will showcase the beginning of your beautiful journey together.</p>
            </div>
          </div>
        </motion.div>
        
        {/* First date */}
        <motion.div 
          className="story-section reverse"
          ref={ref2}
          initial={{ opacity: 0, x: 100 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="story-content">
            <h2>Our First Date</h2>
            <div className="story-image-container">
              <img src="./assets/images/first_date.jpg" alt="Our first date" className="story-image" />
            </div>
            <p>
              <FaQuoteLeft className="quote-icon" />
              I still remember every detail of our first date - the nervous excitement, 
              the easy conversation, and that moment I knew you were special.
              <FaQuoteRight className="quote-icon" />
            </p>
            <div className="story-details">
              <p>Describe your first date here - where you went, what you did, and how you felt. Include those special moments that made this day memorable.</p>
            </div>
          </div>
        </motion.div>
        
        {/* Special moments */}
        <motion.div 
          className="story-section"
          ref={ref3}
          initial={{ opacity: 0, x: -100 }}
          animate={inView3 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="story-content">
            <h2>Special Moments</h2>
            <div className="story-image-container">
              <div className="image-placeholder">Special Moment Photo</div>
            </div>
            <p>
              <FaQuoteLeft className="quote-icon" />
              Throughout our journey, we've created countless memories together - 
              each one a testament to our growing love and connection.
              <FaQuoteRight className="quote-icon" />
            </p>
            <div className="story-details">
              <p>Highlight some of your favorite moments together - trips you've taken, milestones you've celebrated, or simple everyday moments that have meant the most.</p>
            </div>
          </div>
        </motion.div>
        
        {/* Why I love you */}
        <motion.div 
          className="story-section reverse"
          ref={ref4}
          initial={{ opacity: 0, x: 100 }}
          animate={inView4 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="story-content">
            <h2>Why I Love You</h2>
            <div className="story-image-container">
              <img src="./assets/images/hug_loop.gif" alt="Us hugging" className="story-image" />
            </div>
            <p>
              <FaQuoteLeft className="quote-icon" />
              Your smile brightens my darkest days. Your kindness inspires me. 
              Your love transforms me. You are my best friend and my greatest adventure.
              <FaQuoteRight className="quote-icon" />
            </p>
            <div className="love-reasons">
              <motion.div 
                className="love-reason"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" }}
              >
                <FaHeart className="heart-icon" />
                <p>Your beautiful smile</p>
              </motion.div>
              <motion.div 
                className="love-reason"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" }}
              >
                <FaHeart className="heart-icon" />
                <p>Your kindness to everyone</p>
              </motion.div>
              <motion.div 
                className="love-reason"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" }}
              >
                <FaHeart className="heart-icon" />
                <p>The way you make me laugh</p>
              </motion.div>
              <motion.div 
                className="love-reason"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" }}
              >
                <FaHeart className="heart-icon" />
                <p>Your incredible strength</p>
              </motion.div>
              <motion.div 
                className="love-reason"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" }}
              >
                <FaHeart className="heart-icon" />
                <p>How you understand me</p>
              </motion.div>
              <motion.div 
                className="love-reason"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" }}
              >
                <FaHeart className="heart-icon" />
                <p>Your passion for life</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;