import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const MusicPlayer = ({ songSrc }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;

    const setAudioData = () => setDuration(audio.duration || 0);
    const setAudioTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);

    // Try to autoplay
    const tryPlay = async () => {
      try {
        await audio.play();
        console.log("Autoplay started");
      } catch (err) {
        console.warn("Autoplay failed, waiting for user interaction:", err);
        setIsPlaying(false);
      }
    };

    tryPlay();

    // If autoplay fails, user click will trigger play
    const playOnClick = () => {
      audio.play().catch(err => console.error("Play after click failed:", err));
      document.removeEventListener('click', playOnClick);
    };
    document.addEventListener('click', playOnClick);

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      document.removeEventListener('click', playOnClick);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(err => console.error('Play failed:', err));
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (e) => {
    const audio = audioRef.current;
    audio.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60) || 0;
    const seconds = Math.floor(time % 60) || 0;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <motion.div
      className="music-player"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      style={{
        width: '200px',
        height: '80px',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 100
      }}
    >
      <audio ref={audioRef} src={songSrc} preload="auto" loop />

      <div className="player-controls" style={{ padding: '5px' }}>
        <motion.button
          className="play-button"
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ fontSize: '14px', padding: '5px 8px' }}
        >
          {isPlaying ? '❚❚' : '▶'}
        </motion.button>

        <div className="progress-container" style={{ margin: '0 5px' }}>
          <span className="time" style={{ fontSize: '10px' }}>{formatTime(currentTime)}</span>
          <input
            type="range"
            className="progress-bar"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleProgress}
            step="0.1"
            style={{ height: '3px' }}
          />
          <span className="time" style={{ fontSize: '10px' }}>{formatTime(duration)}</span>
        </div>
      </div>

      <motion.div
        className="now-playing"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ fontSize: '10px' }}
      >
        Now Playing: Our Song
      </motion.div>
    </motion.div>
  );
};

export default MusicPlayer;
