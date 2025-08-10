import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaExpand, FaHeart } from 'react-icons/fa';

const VideoMoments = () => {
  // Video data with placeholder videos from public folder
  const videos = [
    { 
      id: 1, 
      title: "Our First Dance", 
      description: "The moment we first danced together at our friend's wedding.",
      src: `${process.env.PUBLIC_URL}/placeholder_video1.mp4`,
      thumbnail: `${process.env.PUBLIC_URL}/placeholder_memory1.jpg`
    },
    { 
      id: 2, 
      title: "Beach Vacation", 
      description: "Fun times at the beach during our summer vacation.",
      src: `${process.env.PUBLIC_URL}/placeholder_video2.mp4`,
      thumbnail: `${process.env.PUBLIC_URL}/placeholder_memory2.jpg`
    },
    { 
      id: 3, 
      title: "Cake Smash", 
      description: "That time we got messy with cake!",
      src: `${process.env.PUBLIC_URL}/placeholder_video3.mp4`,
      thumbnail: `${process.env.PUBLIC_URL}/placeholder_memory3.jpg`
    },
    { 
      id: 4, 
      title: "Road Trip Sing-along", 
      description: "Singing our favorite songs during our road trip.",
      src: `${process.env.PUBLIC_URL}/placeholder_video1.mp4`,
      thumbnail: `${process.env.PUBLIC_URL}/placeholder_memory4.jpg`
    },
    { 
      id: 5, 
      title: "Cooking Together", 
      description: "Our attempt at making that complicated recipe!",
      src: `${process.env.PUBLIC_URL}/placeholder_video2.mp4`,
      thumbnail: `${process.env.PUBLIC_URL}/placeholder_memory5.jpg`
    },
    { 
      id: 6, 
      title: "Anniversary Surprise", 
      description: "When I surprised you on our last anniversary.",
      src: `${process.env.PUBLIC_URL}/placeholder_video3.mp4`,
      thumbnail: `${process.env.PUBLIC_URL}/placeholder_memory6.jpg`
    },
  ];
  
  // State for featured video
  const [featuredVideo, setFeaturedVideo] = useState(videos[0]);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Handle video selection
  const selectVideo = (video) => {
    setFeaturedVideo(video);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  
  // Toggle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  // Handle fullscreen
  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="video-moments-page">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="page-title"
      >
        Our Video Moments
      </motion.h1>
      
      <div className="video-content">
        {/* Featured video player */}
        <div className="featured-video-container">
          <div className="video-wrapper">
            <video 
              ref={videoRef}
              src={featuredVideo.src}
              poster={featuredVideo.thumbnail}
              onEnded={() => setIsPlaying(false)}
              onClick={togglePlay}
            >
              Your browser does not support the video tag.
            </video>
            
            {/* Video controls overlay */}
            
            {/* Video controls */}
            <div className="video-controls">
              <button className="control-button" onClick={togglePlay}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <div className="video-title">{featuredVideo.title}</div>
              <button className="control-button" onClick={toggleFullscreen}>
                <FaExpand />
              </button>
            </div>
          </div>
          
          <div className="video-description">
            <h3>{featuredVideo.title}</h3>
            <p>{featuredVideo.description}</p>
          </div>
        </div>
        
        {/* Video thumbnails */}
        <div className="video-thumbnails">
          <h3>More Videos</h3>
          <div className="thumbnails-grid">
            {videos.map(video => (
              <motion.div
                key={video.id}
                className={`video-thumbnail ${featuredVideo.id === video.id ? 'active' : ''}`}
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => selectVideo(video)}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="thumbnail-image" 
                />
                <div className="thumbnail-overlay">
                  <FaPlay />
                </div>
                <div className="thumbnail-title">{video.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoMoments;