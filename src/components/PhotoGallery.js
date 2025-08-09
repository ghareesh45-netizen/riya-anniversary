import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { FaTimes, FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa';

const PhotoGallery = () => {
  // State for lightbox
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Placeholder for gallery images
  const galleryImages = [
    { id: 1, src: "PLACEHOLDER_1", alt: "Gallery image 1", category: "dates" },
    { id: 2, src: "PLACEHOLDER_2", alt: "Gallery image 2", category: "trips" },
    { id: 3, src: "PLACEHOLDER_3", alt: "Gallery image 3", category: "dates" },
    { id: 4, src: "PLACEHOLDER_4", alt: "Gallery image 4", category: "fun" },
    { id: 5, src: "PLACEHOLDER_5", alt: "Gallery image 5", category: "trips" },
    { id: 6, src: "PLACEHOLDER_6", alt: "Gallery image 6", category: "fun" },
    { id: 7, src: "PLACEHOLDER_7", alt: "Gallery image 7", category: "dates" },
    { id: 8, src: "PLACEHOLDER_8", alt: "Gallery image 8", category: "trips" },
    { id: 9, src: "PLACEHOLDER_9", alt: "Gallery image 9", category: "fun" },
    { id: 10, src: "PLACEHOLDER_10", alt: "Gallery image 10", category: "dates" },
    { id: 11, src: "PLACEHOLDER_11", alt: "Gallery image 11", category: "trips" },
    { id: 12, src: "PLACEHOLDER_12", alt: "Gallery image 12", category: "fun" },
  ];
  
  // Filter state
  const [filter, setFilter] = useState('all');
  
  // Filtered images
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);
  
  // Open lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  // Navigate through images in lightbox
  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };
  
  // Masonry breakpoints
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="photo-gallery-page">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="page-title"
      >
        Our Photo Gallery
      </motion.h1>
      
      {/* Gallery filters */}
      <div className="gallery-filters">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All Photos
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={filter === 'dates' ? 'active' : ''}
          onClick={() => setFilter('dates')}
        >
          Our Dates
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={filter === 'trips' ? 'active' : ''}
          onClick={() => setFilter('trips')}
        >
          Our Trips
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={filter === 'fun' ? 'active' : ''}
          onClick={() => setFilter('fun')}
        >
          Fun Times
        </motion.button>
      </div>
      
      {/* Masonry gallery */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="gallery-grid"
        columnClassName="gallery-grid-column"
      >
        {filteredImages.map((image) => (
          <motion.div 
            key={image.id}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 25px rgba(0,0,0,0.15)" }}
            onClick={() => openLightbox(image)}
          >
            <div className="image-placeholder">
              Photo {image.id}
              <div className="placeholder-category">{image.category}</div>
            </div>
            <div className="gallery-item-overlay">
              <FaHeart />
            </div>
          </motion.div>
        ))}
      </Masonry>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="lightbox-content">
              <button className="close-lightbox" onClick={closeLightbox}>
                <FaTimes />
              </button>
              
              <button className="nav-button prev" onClick={() => navigateImage('prev')}>
                <FaChevronLeft />
              </button>
              
              <div className="lightbox-image-container">
                <div className="image-placeholder large-placeholder">
                  Photo {selectedImage.id}
                  <div className="placeholder-category">{selectedImage.category}</div>
                </div>
              </div>
              
              <button className="nav-button next" onClick={() => navigateImage('next')}>
                <FaChevronRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;