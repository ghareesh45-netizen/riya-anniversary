import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

const JourneyPage = () => {
  const timelineEvents = [
    {
      year: 2021,
      title: 'When We First Met',
      description: 'The magical beginning of our story',
      image: `${process.env.PUBLIC_URL}/placeholder_2020.jpg`
    },
    {
      year: 2022,
      title: 'Growing Together',
      description: 'A year of adventures and discoveries',
      image: `${process.env.PUBLIC_URL}/placeholder_2021.jpg`
    },
    {
      year: 2023,
      title: 'Stronger Than Ever',
      description: 'Overcoming challenges side by side',
      image: `${process.env.PUBLIC_URL}/placeholder_2022.jpg`
    },
    {
      year: 2024,
      title: 'Creating Memories',
      description: 'Building our future together',
      image: `${process.env.PUBLIC_URL}/placeholder_2023.jpg`
    }
  ];

  return (
    <div className="journey-page">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Beautiful Journey
      </motion.h1>
      
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={`${process.env.PUBLIC_URL}/placeholder_parallax_bg.jpg`}
        strength={200}
        className="parallax-container"
      >
        <div className="timeline-container">
          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
              >
                <div className="timeline-content">
                  <div className="year-badge">{event.year}</div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div className="timeline-image-container">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="timeline-image" 
                    />
                    <div className="image-caption"></div>
                  </div>
                  <motion.div 
                    className="timeline-icon"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    ❤️
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Parallax>
      
      <div className="journey-quotes">
        <motion.div 
          className="quote-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <p>"Every moment with you is a treasure I hold dear to my heart."</p>
        </motion.div>
      </div>
    </div>
  );
};

export default JourneyPage;