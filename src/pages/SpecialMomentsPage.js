import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

// You'll need to add actual Lottie animation JSON files later
const heartAnimationPlaceholder = { 
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  layers: []
};

const SpecialMomentsPage = () => {
  const specialMoments = [
    {
      id: 1,
      title: "",
      description: "",
      mediaType: "image",
      category: "romantic"
    },
    {
      id: 2,
      title: "",
      description: "",
      mediaType: "video",
      category: "celebration"
    },
    {
      id: 3,
      title: "",
      description: "",
      mediaType: "gallery",
      category: "trips"
    },
    {
      id: 4,
      title: "",
      description: "",
      mediaType: "image",
      category: "funny"
    },
    {
      id: 5,
      title: "",
      description: "",
      mediaType: "audio",
      category: "intimate"
    },
    {
      id: 6,
      title: "",
      description: "",
      mediaType: "video",
      category: "romantic"
    },
  ];
  
  return (
    <div className="special-moments-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Our Special Moments</h1>
        <div className="header-animation">
          <Lottie 
            animationData={heartAnimationPlaceholder} 
            loop={true} 
            style={{ height: 150 }}
          />
        </div>
      </motion.div>
      
      <motion.div 
        className="moments-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <p>The little moments that make our love story unique and beautiful...</p>
      </motion.div>
      
      <div className="moments-container">
        {specialMoments.map((moment, index) => (
          <motion.div 
            key={moment.id}
            className={`moment-card ${moment.category}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            <div className={`moment-media ${moment.mediaType}`}>
              <div className="media-placeholder">
                <p>{moment.mediaType.charAt(0).toUpperCase() + moment.mediaType.slice(1)}</p>
                <span className="upload-note">Upload {moment.mediaType} later</span>
              </div>
            </div>
            
            <div className="moment-content">
              <h3>{moment.title}</h3>
              <p>{moment.description}</p>
              <span className="moment-category">{moment.category}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="add-moment-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <h2>More Special Moments</h2>
        <div className="moments-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="new-moment-placeholder">
              <div className="placeholder-content">
                <p>New Special Moment {item}</p>
                <span className="upload-note">Add details later</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="surprise-section"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <h2>Special Surprise</h2>
        <div className="surprise-placeholder">
          <p>Your anniversary surprise will appear here!</p>
          <div className="surprise-decoration">
            <span>🎁</span>
            <span>✨</span>
            <span>🎉</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SpecialMomentsPage;