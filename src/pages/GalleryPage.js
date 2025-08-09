import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Gallery items - placeholders for now
  const galleryItems = [
    { id: 1, type: 'image', src: 'placeholder_gallery1.jpg', alt: 'Special moment 1', caption: '' },
    { id: 2, type: 'image', src: 'placeholder_gallery2.jpg', alt: 'Special moment 2', caption: '' },
    { id: 3, type: 'video', src: 'placeholder_video1.mp4', alt: 'Fun video 1', caption: '' },
    { id: 4, type: 'image', src: 'placeholder_gallery3.jpg', alt: 'Special moment 3', caption: '' },
    { id: 5, type: 'image', src: 'placeholder_gif1.jpg', alt: 'Cute moment 1', caption: '' },
    { id: 6, type: 'image', src: 'placeholder_gallery4.jpg', alt: 'Special moment 4', caption: '' },
    { id: 7, type: 'video', src: 'placeholder_video2.mp4', alt: 'Fun video 2', caption: '' },
    { id: 8, type: 'image', src: 'placeholder_gallery5.jpg', alt: 'Special moment 5', caption: '' },
    { id: 9, type: 'image', src: 'placeholder_gif2.jpg', alt: 'Cute moment 2', caption: '' },
    { id: 10, type: 'image', src: 'placeholder_gallery6.jpg', alt: 'Special moment 6', caption: '' },
    { id: 11, type: 'image', src: 'placeholder_gallery7.jpg', alt: 'Special moment 7', caption: '' },
    { id: 12, type: 'video', src: 'placeholder_video3.mp4', alt: 'Fun video 3', caption: '' },
  ];
  
  const openLightbox = (item) => {
    setSelectedImage(item);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  // Gallery item variants for animations
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="gallery-page">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Precious Moments
      </motion.h1>
      
      
      <motion.div 
        className="gallery-grid"
        initial="hidden"
        animate="visible"
      >
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.id}
            className={`gallery-item ${item.type}`}
            variants={itemVariants}
            custom={i}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 25px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openLightbox(item)}
          >
            {item.type === 'image' && (
              <img src={item.src} alt={item.alt} />
            )}
            {item.type === 'video' && (
  <video
    src={item.src}
    muted
    autoPlay
    loop
    playsInline
    className="gallery-video"
  />
)}

            {item.type === 'gif' && (
              <img src={item.src} alt={item.alt} />
            )}
            <div className="item-caption">{item.caption}</div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage.type === 'image' && (
                <img src={selectedImage.src} alt={selectedImage.alt} />
              )}
              {selectedImage.type === 'video' && (
                <video controls autoPlay>
                  <source src={selectedImage.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {selectedImage.type === 'gif' && (
                <img src={selectedImage.src} alt={selectedImage.alt} />
              )}
              <div className="lightbox-caption">{selectedImage.caption}</div>
              <button className="close-button" onClick={closeLightbox}>×</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="gallery-note">
        <p></p>
      </div>
    </div>
  );
};

export default GalleryPage;