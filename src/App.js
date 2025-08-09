import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import TeddyGifs from './components/TeddyGifs';
import MusicPlayer from './components/MusicPlayer'; // Import MusicPlayer

// Pages
import HomePage from './pages/HomePage';
import JourneyPage from './pages/JourneyPage';
import GalleryPage from './pages/GalleryPage';
import MemoriesPage from './pages/MemoriesPage';
import LoveNotesPage from './pages/LoveNotesPage';
// Removed: import ImageWheelPage from './pages/ImageWheelPage';

// Wrapper component for page transitions
const PageTransition = ({ children }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, rotateY: -90, transformOrigin: "left" }}
        animate={{ opacity: 1, rotateY: 0, transformOrigin: "left" }}
        exit={{ opacity: 0, rotateY: 90, transformOrigin: "right" }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 20,
          duration: 0.8 
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  const [showHearts, setShowHearts] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5; // Updated from 6 to 5 after removing ImageWheelPage

  // Floating hearts animation that appears occasionally
  useEffect(() => {
    const interval = setInterval(() => {
      setShowHearts(true);
      setTimeout(() => setShowHearts(false), 3000);
    }, 15000); // Every 15 seconds
    return () => clearInterval(interval);
  }, []);

  // Navigation functions
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Array of page components with teddy GIFs at different positions
  const pages = [
    <div key="home" className="page-with-teddy">
      <HomePage />
      <TeddyGifs position="corner" />
    </div>,
    <div key="journey" className="page-with-teddy">
      <JourneyPage />
      <TeddyGifs position="top" />
    </div>,
    <div key="gallery" className="page-with-teddy">
      <GalleryPage />
      <TeddyGifs position="left" />
    </div>,
    <div key="memories" className="page-with-teddy">
      <MemoriesPage />
      <TeddyGifs position="corner" />
    </div>,
    <div key="notes" className="page-with-teddy">
      <LoveNotesPage />
      <TeddyGifs position="top" />
    </div>
    // Removed: ImageWheelPage entry
  ];

  return (
    <Router>
      <div className="greeting-card">
        {/* Add MusicPlayer here so it persists across all pages */}
        <div style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 1000 }}>
          <MusicPlayer songSrc="/music/our_song.mp3" />
        </div>
        
        {/* Floating hearts that appear occasionally */}
        {showHearts && (
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
                {['❤️', '💕', '💖', '💘', '💓'][Math.floor(Math.random() * 5)]}
              </motion.div>
            ))}
          </div>
        )}

        <div className="card-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, rotateY: -90, transformOrigin: "left" }}
              animate={{ opacity: 1, rotateY: 0, transformOrigin: "left" }}
              exit={{ opacity: 0, rotateY: 90, transformOrigin: "right" }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20,
                duration: 0.8 
              }}
              className="page-container"
            >
              {pages[currentPage]}
            </motion.div>
          </AnimatePresence>

          <div className="card-navigation">
            {currentPage > 0 && (
              <motion.button 
                className="nav-button prev"
                onClick={prevPage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ❮ Previous
              </motion.button>
            )}
            
            {currentPage < totalPages - 1 && (
              <motion.button 
                className="nav-button next"
                onClick={nextPage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Next ❯
              </motion.button>
            )}
          </div>

          <div className="card-footer">
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
        </div>
      </div>
    </Router>
  );
}

export default App;