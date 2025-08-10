import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';


const MemoriesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const memories = [
    {
      id: 1,
      title: 'First Date',
      date: 'Febraury 17, 2023',
      description: '',
      category: 'dates',
      image: `${process.env.PUBLIC_URL}/placeholder_memory1.jpg`
    },
    {
      id: 2,
      title: 'Beach Trip',
      date: 'June 29, 2023',
      description: '',
      category: 'trips',
      image: `${process.env.PUBLIC_URL}/placeholder_memory2.jpg`
    },
    {
      id: 3,
      title: 'First Onam',
      date: 'August 27, 2021',
      description: 'Celebrating Onam together at SNG',
      category: 'celebrations',
      image: `${process.env.PUBLIC_URL}/placeholder_memory3.jpg`
    },
    {
      id: 4,
      title: 'Hugging Mirror Selfie',
      date: 'June 20, 2023',
      description: 'Taking mirror selfie',
      category: 'funny',
      image: `${process.env.PUBLIC_URL}/placeholder_memory4.jpg`
    },
    {
      id: 5,
      title: 'Attending Marriage Function',
      date: 'December 15, 2023',
      description: 'Attending First Marriage Function together',
      category: 'trips',
      image: `${process.env.PUBLIC_URL}/placeholder_memory5.jpg`
    },
    {
      id: 6,
      title: 'Giant Wheel',
      date: 'September 2, 2022',
      description: 'First Time on Giant Wheel',
      category: 'adventures',
      image: `${process.env.PUBLIC_URL}/placeholder_memory6.jpg`
    },
    {
      id: 7,
      title: 'Temple Date',
      date: '',
      description: 'First Temple Date',
      category: 'dates',
      image: `${process.env.PUBLIC_URL}/placeholder_memory7.jpg`
    },
    {
      id: 8,
      title: 'Mountain Hiking',
      date: 'July 19, 2023',
      description: 'Climbing Madavurpaara Together',
      category: 'adventures',
      image: `${process.env.PUBLIC_URL}/placeholder_memory8.jpg`
    }
  ];
  
  const categories = [
    { id: 'all', name: 'All Memories' },
    { id: 'dates', name: 'Dates' },
    { id: 'trips', name: 'Trips' },
    // Removed the 'anniversaries' option
    { id: 'adventures', name: 'Adventures' },
    { id: 'funny', name: 'Funny Moments' },
    { id: 'celebrations', name: 'Celebrations' }
  ];
  
  const filteredMemories = activeCategory === 'all' 
    ? memories 
    : memories.filter(memory => memory.category === activeCategory);
  
  return (
    <div className="memories-page">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Special Memories
      </motion.h1>
      
      <div className="memory-categories">
        {categories.map(category => (
          <motion.button
            key={category.id}
            className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>
      
      <motion.div 
        className="memories-container"
        layout
      >
        <AnimatePresence>
          {filteredMemories.map(memory => (
            <motion.div
              key={memory.id}
              className="memory-card"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <div className="memory-image-container">
                <img src={memory.image} alt={memory.title} className="memory-image" />
                <div className="image-caption"></div>
              </div>
              <div className="memory-content">
                <h3>{memory.title}</h3>
                <div className="memory-date">{memory.date}</div>
                <p>{memory.description}</p>
              </div>
              <motion.div 
                className="memory-icon"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 5 + 3
                }}
              >
                {['❤️', '💕', '💖', '💘', '💓'][Math.floor(Math.random() * 5)]}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      <div className="memories-note">
        <p></p>
      </div>
    </div>
  );
};

export default MemoriesPage;